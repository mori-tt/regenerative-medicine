<?php
declare(strict_types=1);

// Static Next.js exportから呼び出すお問い合わせ受付。秘密情報はLolipopの環境変数で設定します。
function env_value(string $key, string $fallback = ''): string {
    $value = getenv($key);
    return $value === false ? $fallback : trim($value);
}

function safe_return_path(): string {
    $path = (string)($_POST['return_path'] ?? '/contact/');
    if (!preg_match('#^/(?:en/|zh/)?contact/$#', $path)) {
        return '/contact/';
    }
    return $path;
}

function redirect_result(string $key): never {
    header('Location: ' . safe_return_path() . '?' . $key . '=1', true, 303);
    exit;
}

function request_is_allowed_origin(): bool {
    $configured = env_value('CONTACT_ALLOWED_ORIGINS');
    if ($configured === '') {
        return true;
    }
    $allowed = array_filter(array_map('trim', explode(',', $configured)));
    $origin = trim((string)($_SERVER['HTTP_ORIGIN'] ?? ''));
    $referer = trim((string)($_SERVER['HTTP_REFERER'] ?? ''));
    foreach ($allowed as $base) {
        $base = rtrim($base, '/');
        if ($origin !== '' && $origin === $base) return true;
        if ($referer !== '' && str_starts_with($referer, $base . '/')) return true;
    }
    return false;
}

function rate_limit_exceeded(): bool {
    $max = max(1, (int)env_value('CONTACT_RATE_LIMIT_MAX', '5'));
    $window = max(60, (int)env_value('CONTACT_RATE_LIMIT_WINDOW', '600'));
    $ip = (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    $key = hash('sha256', $ip . '|' . __FILE__);
    $file = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'regenerative-contact-' . $key . '.json';
    $handle = @fopen($file, 'c+');
    if ($handle === false) return false;
    if (!flock($handle, LOCK_EX)) { fclose($handle); return false; }
    $raw = stream_get_contents($handle);
    $timestamps = json_decode($raw ?: '[]', true);
    if (!is_array($timestamps)) $timestamps = [];
    $now = time();
    $timestamps = array_values(array_filter($timestamps, static fn($timestamp) => is_int($timestamp) && $timestamp > $now - $window));
    $limited = count($timestamps) >= $max;
    if (!$limited) {
        $timestamps[] = $now;
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($timestamps));
    }
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    return $limited;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_result('error');
}

if (!request_is_allowed_origin() || rate_limit_exceeded()) {
    redirect_result('error');
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$category = trim((string)($_POST['category'] ?? ''));
$locale = trim((string)($_POST['locale'] ?? 'ja'));
$message = trim((string)($_POST['message'] ?? ''));
$startedAt = (int)($_POST['started_at'] ?? 0);
$honeypot = trim((string)($_POST['website'] ?? ''));
$consent = ($_POST['consent'] ?? '') === '1';
$categoryLabels = [
    'article' => '記事内容について',
    'review' => '監修・取材について',
    'advertising' => '広告・提携について',
    'operations' => '運営について',
    'other' => 'その他',
];

// ボット対策と、誤送信・大量送信を抑える最低限の検証。
if ($honeypot !== '' || ($startedAt > 0 && (int)(microtime(true) * 1000) - $startedAt < 2500)) {
    redirect_result('sent');
}
if (
    $name === '' || mb_strlen($name) > 80 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 ||
    !array_key_exists($category, $categoryLabels) ||
    mb_strlen($message) < 10 || mb_strlen($message) > 5000 ||
    !$consent || !in_array($locale, ['ja', 'en', 'zh'], true) ||
    preg_match('/[\r\n\x00-\x08\x0B\x0C\x0E-\x1F]/', $name . $email . $message)
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

$categoryLabel = $categoryLabels[$category];
$subject = '【再生医療ガイド】お問い合わせ（' . $categoryLabel . '）';
$body = "再生医療ガイドのお問い合わせフォームから受信しました。\n\n" .
    "お名前: {$name}\n" .
    "メールアドレス: {$email}\n" .
    "種類: {$categoryLabel}\n" .
    "言語: {$locale}\n\n" .
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

if (env_value('CONTACT_ALLOW_NATIVE_MAIL', 'false') !== 'true') {
    error_log('PHPMailer is not configured. Native mail fallback is disabled.');
    redirect_result('error');
}

// 互換経路は明示的に許可した場合だけ使用する。送信元は固定し、入力メールはReply-Toだけに使います。
$encodedSubject = function_exists('mb_encode_mimeheader') ? mb_encode_mimeheader($subject, 'UTF-8') : $subject;
$headers = "From: {$from}\r\n" .
    "Reply-To: {$email}\r\n" .
    "Content-Type: text/plain; charset=UTF-8\r\n";
if (mail($to, $encodedSubject, $body, $headers, '-f' . $from)) {
    redirect_result('sent');
}
error_log('Native mail() failed for contact form.');
redirect_result('error');
