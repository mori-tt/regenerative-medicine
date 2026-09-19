<?php
declare(strict_types=1);

// Static Next.js exportから呼び出すお問い合わせ受付。秘密情報はLolipopの環境変数で設定します。
function env_value(string $key, string $fallback = ''): string {
    $value = getenv($key);
    return $value === false ? $fallback : trim($value);
}

function redirect_result(string $key): never {
    header('Location: ./contact/?' . $key . '=1', true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_result('error');
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$category = trim((string)($_POST['category'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$startedAt = (int)($_POST['started_at'] ?? 0);
$honeypot = trim((string)($_POST['website'] ?? ''));
$consent = ($_POST['consent'] ?? '') === '1';
$categories = ['記事内容について', '監修・取材について', '広告・提携について', '運営について', 'その他'];

// ボット対策と、誤送信・大量送信を抑える最低限の検証。
if ($honeypot !== '' || ($startedAt > 0 && (int)(microtime(true) * 1000) - $startedAt < 2500)) {
    redirect_result('sent');
}
if (
    $name === '' || mb_strlen($name) > 80 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 ||
    !in_array($category, $categories, true) ||
    mb_strlen($message) < 10 || mb_strlen($message) > 5000 ||
    !$consent || str_contains($email, "\r") || str_contains($email, "\n")
) {
    redirect_result('error');
}

$to = env_value('CONTACT_TO_EMAIL');
$from = env_value('CONTACT_FROM_EMAIL');
$fromName = env_value('CONTACT_FROM_NAME', '再生医療ガイド');
if (!filter_var($to, FILTER_VALIDATE_EMAIL) || !filter_var($from, FILTER_VALIDATE_EMAIL)) {
    error_log('Contact form is not configured: CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing.');
    redirect_result('error');
}

$subject = '【再生医療ガイド】お問い合わせ（' . $category . '）';
$body = "再生医療ガイドのお問い合わせフォームから受信しました。\n\n" .
    "お名前: {$name}\n" .
    "メールアドレス: {$email}\n" .
    "種類: {$category}\n\n" .
    "内容:\n{$message}\n";

$autoloadCandidates = array_filter([
    env_value('CONTACT_PHPMAILER_AUTOLOAD'),
    __DIR__ . '/vendor/autoload.php',
    __DIR__ . '/phpmailer/vendor/autoload.php',
]);
$autoloaded = false;
foreach ($autoloadCandidates as $autoload) {
    if (is_file($autoload)) {
        require_once $autoload;
        $autoloaded = true;
        break;
    }
}

if ($autoloaded && class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
    try {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = env_value('CONTACT_SMTP_HOST', 'smtp.lolipop.jp');
        $mail->Port = (int)env_value('CONTACT_SMTP_PORT', '465');
        $mail->SMTPAuth = true;
        $mail->Username = env_value('CONTACT_SMTP_USER', $from);
        $mail->Password = env_value('CONTACT_SMTP_PASS');
        $mail->SMTPSecure = strtolower(env_value('CONTACT_SMTP_SECURE', 'ssl')) === 'tls'
            ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS
            : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $mail->CharSet = 'UTF-8';
        $mail->setFrom($from, $fromName);
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->send();
        redirect_result('sent');
    } catch (Throwable $exception) {
        error_log('PHPMailer contact error: ' . $exception->getMessage());
        redirect_result('error');
    }
}

// PHPMailer未配置時の互換経路。送信元は固定し、入力メールはReply-Toだけに使います。
$encodedSubject = function_exists('mb_encode_mimeheader') ? mb_encode_mimeheader($subject, 'UTF-8') : $subject;
$headers = "From: {$from}\r\n" .
    "Reply-To: {$email}\r\n" .
    "Content-Type: text/plain; charset=UTF-8\r\n";
if (mail($to, $encodedSubject, $body, $headers, '-f' . $from)) {
    redirect_result('sent');
}
error_log('Native mail() failed for contact form.');
redirect_result('error');
