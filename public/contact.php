<?php
declare(strict_types=1);

// Static Next.js exportから呼び出すお問い合わせ受付。秘密情報はLolipopの環境変数で設定します。
// 設定は contact-config.php（公開フォルダの外）を優先し、なければ環境変数を読む。
// デプロイは公開フォルダを丸ごと入れ替えるため、秘密情報は公開フォルダの外に置く。
function contact_config(): array {
    static $config = null;
    if ($config !== null) return $config;
    $config = [];
    $docRoot = rtrim((string)($_SERVER['DOCUMENT_ROOT'] ?? __DIR__), '/');
    $candidates = array_filter([
        getenv('CONTACT_CONFIG_FILE') ?: '',
        dirname($docRoot) . '/contact-config.php',
        dirname($docRoot, 2) . '/contact-config.php',
    ]);
    foreach ($candidates as $file) {
        if (!is_file($file)) continue;
        $loaded = (static function () use ($file) { return require $file; })();
        if (is_array($loaded)) {
            $config = $loaded;
            break;
        }
        error_log('contact-config.php must return an array: ' . $file);
    }
    return $config;
}

function env_value(string $key, string $fallback = ''): string {
    $config = contact_config();
    if (array_key_exists($key, $config)) return trim((string)$config[$key]);
    $value = getenv($key);
    return $value === false ? $fallback : trim($value);
}

function request_accepts_json(): bool {
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    return str_contains(strtolower($accept), 'application/json');
}

function request_body_json(): array {
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    if (!str_contains(strtolower($contentType), 'application/json')) {
        return [];
    }
    $raw = file_get_contents('php://input') ?: '';
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function respond_json(bool $success, string $message, int $status = 200): never {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function respond(bool $success, string $message, int $status = 200): never {
    if (request_accepts_json()) {
        respond_json($success, $message, $status);
    }
    redirect_result($success ? 'sent' : 'error');
}

function safe_return_path(): string {
    $path = (string)($_POST['return_path'] ?? '/contact/');
    if (!preg_match('#^/(?:en/|zh/)?contact/$#', $path)) {
        return '/contact/';
    }
    return $path;
}

function redirect_result(string $key): void {
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
        if ($referer !== '' && strncmp($referer, $base . '/', strlen($base) + 1) === 0) return true;
    }
    return false;
}

// siteverify の正規エンドポイント。応答の action/hostname も呼び出し側で必ず照合する。
function turnstile_verify(string $secret, string $token, string $remoteIp): ?array {
    $payload = http_build_query([
        'secret' => $secret,
        'response' => $token,
        'remoteip' => $remoteIp,
    ]);
    $url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    $raw = false;
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
        ]);
        $raw = curl_exec($ch);
        curl_close($ch);
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $payload,
                'timeout' => 10,
            ],
        ]);
        $raw = @file_get_contents($url, false, $context);
    }
    if ($raw === false || $raw === '') return null;
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : null;
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
    respond(false, 'リクエストを受け付けできません。', 403);
}

// JSON / フォームエンコード（application/x-www-form-urlencoded）の両方に対応
$jsonInput = request_body_json();
$input = $jsonInput !== [] ? $jsonInput : $_POST;

$name = trim((string)($input['name'] ?? ''));
$email = trim((string)($input['email'] ?? ''));
$category = trim((string)($input['category'] ?? ''));
$locale = trim((string)($input['locale'] ?? 'ja'));
$message = trim((string)($input['message'] ?? ''));
$startedAt = (int)($input['started_at'] ?? 0);
$honeypot = trim((string)($input['website'] ?? ''));
$consent = ($input['consent'] ?? '') === '1' || ($input['consent'] ?? false) === true;
$categoryLabels = [
    'article' => '記事内容について',
    'correction' => '誤記・修正のご指摘',
    'review' => '監修・取材について',
    'advertising' => '広告・提携について',
    'operations' => '運営について',
    'other' => 'その他',
];

// ボット対策と、誤送信・大量送信を抑える最低限の検証。
if ($honeypot !== '' || ($startedAt > 0 && (int)(microtime(true) * 1000) - $startedAt < 2500)) {
    respond(true, 'お問い合わせを受け付けました。');
}
// リンクを大量に貼る投稿はスパムとみなし、送信したように見せて破棄する。
$linkCount = preg_match_all('#https?://|www\.#i', $message);
if ($linkCount !== false && $linkCount > 3) {
    respond(true, 'お問い合わせを受け付けました。');
}

// Cloudflare Turnstile。TURNSTILE_SECRET を contact-config.php に設定すると検証が有効になる。
// success===true かつ action=contact、hostname が登録ドメインと一致する応答だけを受け付ける。
$turnstileSecret = env_value('TURNSTILE_SECRET');
if ($turnstileSecret !== '') {
    $turnstileToken = $input['cf-turnstile-response'] ?? '';
    $turnstileHosts = array_filter(array_map('trim', explode(',', env_value('TURNSTILE_HOSTNAMES'))));
    if (!is_string($turnstileToken) || $turnstileToken === '' || strlen($turnstileToken) > 2048 || $turnstileHosts === []) {
        respond(false, '送信できませんでした。時間を置いて再度お試しください。', 403);
    }
    $verify = turnstile_verify($turnstileSecret, $turnstileToken, (string)($_SERVER['REMOTE_ADDR'] ?? ''));
    $verified = is_array($verify)
        && ($verify['success'] ?? false) === true
        && ($verify['action'] ?? '') === 'contact'
        && in_array((string)($verify['hostname'] ?? ''), $turnstileHosts, true);
    if (!$verified) {
        error_log('Turnstile verification failed: ' . json_encode($verify));
        respond(false, '送信できませんでした。時間を置いて再度お試しください。', 403);
    }
}
if (
    $name === '' || mb_strlen($name) > 80 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254 ||
    !array_key_exists($category, $categoryLabels) ||
    mb_strlen($message) < 10 || mb_strlen($message) > 5000 ||
    !$consent || !in_array($locale, ['ja', 'en', 'zh'], true) ||
    // ヘッダーに使う単一行項目は改行・制御文字を拒否。本文は複数行を許し、
    // 危険な制御文字（NUL等、改行・タブ以外）だけを拒否する。
    preg_match('/[\r\n\x00-\x08\x0B\x0C\x0E-\x1F]/', $name . $email) ||
    preg_match('/[\x00-\x08\x0B\x0C\x0E-\x1F]/', $message)
) {
    respond(false, '入力内容をご確認ください。', 422);
}

$to = env_value('CONTACT_TO_EMAIL');
$from = env_value('CONTACT_FROM_EMAIL');
$fromName = env_value('CONTACT_FROM_NAME', '再生医療ガイド');
if (!filter_var($to, FILTER_VALIDATE_EMAIL) || !filter_var($from, FILTER_VALIDATE_EMAIL)) {
    error_log('Contact form is not configured: CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing.');
    respond(false, 'サーバー側の設定が完了していません。', 500);
}

$categoryLabel = $categoryLabels[$category];
$subject = '【再生医療ガイド】お問い合わせ（' . $categoryLabel . '）';
$body = "再生医療ガイドのお問い合わせフォームから受信しました。\n\n" .
    "お名前: {$name}\n" .
    "メールアドレス: {$email}\n" .
    "種類: {$categoryLabel}\n" .
    "言語: {$locale}\n\n" .
    "内容:\n{$message}\n";

// 記入者への自動返信（CONTACT_AUTO_REPLY=false で停止）。
// 失敗しても問い合わせ自体は受付済みのため、ログに残すだけで応答は変えない。
$autoReply = env_value('CONTACT_AUTO_REPLY', 'true') !== 'false';
$replySubjects = [
    'ja' => '【再生医療ガイド】お問い合わせを受け付けました',
    'en' => '[Regenerative Medicine Guide] Your inquiry has been received',
    'zh' => '[再生医疗指南] 已收到您的咨询',
];
$replyIntros = [
    'ja' => "{$name} 様\n\nこのたびは再生医療ガイドへお問い合わせいただき、ありがとうございます。\n以下の内容で受け付けました。内容を確認のうえ、必要に応じてご連絡いたします。\n※医師への医療相談・個別の診療相談にはお答えできません。",
    'en' => "Dear {$name},\n\nThank you for contacting Regenerative Medicine Guide.\nWe have received your inquiry below and will get back to you if needed.\n*We cannot respond to individual medical consultations.",
    'zh' => "{$name} 您好\n\n感谢您联系再生医疗指南。\n我们已收到以下咨询内容，必要时会与您联系。\n*我们无法解答个人的医疗咨询。",
];
$replySubject = $replySubjects[$locale] ?? $replySubjects['ja'];
$replyBody = ($replyIntros[$locale] ?? $replyIntros['ja']) . "\n\n" .
    "──────────────────────────────\n" .
    "{$categoryLabel}\n{$email}\n\n{$message}\n" .
    "──────────────────────────────\n" .
    "※ This is an automated message. Please discard it if it was not intended for you. / このメールは自動送信です。心当たりのない場合は破棄してください。";

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

// Composer が使えない環境・FTP のみのデプロイでも動作するよう、
// 同梱の PHPMailer ソースを直接 require するフォールバック。
if (!$autoloaded && is_file(__DIR__ . '/phpmailer/src/PHPMailer.php')) {
    require_once __DIR__ . '/phpmailer/src/Exception.php';
    require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
    require_once __DIR__ . '/phpmailer/src/SMTP.php';
    $autoloaded = true;
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
        // エンベロープ送信者（Return-Path）を From と揃えて SPF 判定の精度を上げる
        $mail->Sender = $from;
        $mail->setFrom($from, $fromName);
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->send();
        if ($autoReply) {
            try {
                $mail->clearAddresses();
                $mail->clearReplyTos();
                $mail->addAddress($email);
                // 記入者がこのメールに返信した場合は問い合わせ受付アドレスへ届くようにする
                $mail->addReplyTo($to, $fromName);
                $mail->Subject = $replySubject;
                $mail->Body = $replyBody;
                $mail->send();
            } catch (Throwable $replyException) {
                error_log('Contact auto-reply failed: ' . $replyException->getMessage());
            }
        }
        respond(true, 'お問い合わせを受け付けました。');
    } catch (Throwable $exception) {
        error_log('PHPMailer contact error: ' . $exception->getMessage());
        respond(false, '送信に失敗しました。時間を置いて再度お試しください。', 500);
    }
}

if (env_value('CONTACT_ALLOW_NATIVE_MAIL', 'false') !== 'true') {
    error_log('PHPMailer is not configured. Native mail fallback is disabled.');
    respond(false, 'サーバー側の設定が完了していません。', 500);
}

// 互換経路は明示的に許可した場合だけ使用する。送信元は固定し、入力メールはReply-Toだけに使います。
$encodedSubject = function_exists('mb_encode_mimeheader') ? mb_encode_mimeheader($subject, 'UTF-8') : $subject;
$headers = "From: {$from}\r\n" .
    "Reply-To: {$email}\r\n" .
    "Content-Type: text/plain; charset=UTF-8\r\n";
if (mail($to, $encodedSubject, $body, $headers, '-f' . $from)) {
    if ($autoReply) {
        $encodedReplySubject = function_exists('mb_encode_mimeheader') ? mb_encode_mimeheader($replySubject, 'UTF-8') : $replySubject;
        $replyHeaders = "From: {$from}\r\n" .
            "Reply-To: {$to}\r\n" .
            "Content-Type: text/plain; charset=UTF-8\r\n";
        if (!mail($email, $encodedReplySubject, $replyBody, $replyHeaders, '-f' . $from)) {
            error_log('Contact auto-reply failed (native mail).');
        }
    }
    respond(true, 'お問い合わせを受け付けました。');
}
error_log('Native mail() failed for contact form.');
respond(false, '送信に失敗しました。時間を置いて再度お試しください。', 500);
