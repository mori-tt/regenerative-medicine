<?php
// お問い合わせフォーム（public/contact.php）用の設定。
// GitHub Actionsでデプロイする場合：このファイルに値を入力した内容を
// Secrets `LOLIPOP_CONTACT_CONFIG` に登録すると、デプロイ時にサーバーの
// ホーム直下（~/contact-config.php、公開フォルダの外）へ自動配置される。
// 手動の場合：このファイルを contact-config.php という名前でコピーし、
// サーバー上の「公開フォルダの外」に置く。
//   例）公開フォルダが ~/web/saisei-med.com/ なら ~/contact-config.php（ホーム直下）
// 公開フォルダの中に置くとデプロイのたびに消えるため置かないこと。Git にも追加しない。
// 場所を変える場合は、環境変数 CONTACT_CONFIG_FILE にフルパスを指定する。
return [
    'CONTACT_TO_EMAIL' => '',
    'CONTACT_FROM_EMAIL' => '',
    'CONTACT_FROM_NAME' => '再生医療ガイド',
    'CONTACT_SMTP_HOST' => 'smtp.lolipop.jp',
    'CONTACT_SMTP_PORT' => '465',
    'CONTACT_SMTP_USER' => '',
    'CONTACT_SMTP_PASS' => '',
    'CONTACT_SMTP_SECURE' => 'ssl',
    'CONTACT_PHPMAILER_AUTOLOAD' => '',
    'CONTACT_ALLOWED_ORIGINS' => 'https://saisei-med.com',
    'CONTACT_RATE_LIMIT_MAX' => '5',
    'CONTACT_RATE_LIMIT_WINDOW' => '600',
    'CONTACT_AUTO_REPLY' => 'true',
    'CONTACT_ALLOW_NATIVE_MAIL' => 'false',
    // Cloudflare Turnstile（ボット対策）。ダッシュボードで発行した Secret key。
    // 空のままなら検証は無効（フォームは従来どおり動作）。設定すると必須化される。
    'TURNSTILE_SECRET' => '',
    // サイトキーに登録したフロントのドメイン（カンマ区切り。本番ドメインのみ。localhost は含めない）
    'TURNSTILE_HOSTNAMES' => 'saisei-med.com',
];
