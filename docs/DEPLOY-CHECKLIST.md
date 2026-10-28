# デプロイ前チェックリスト（手作業）

> 公開当日の手順、GitHub Actionsの設定（Secrets/Variables、運用向けワークフローのコピペ）、公開後の運用は [GO-LIVE.md](GO-LIVE.md) を参照。

コードで自動化できない、人が設定・確認する項目の一覧です。

## 1. サイトURLの設定（必須）

`src/lib/site.ts` は `NEXT_PUBLIC_SITE_URL` を参照します。未設定だと **canonical・OGP・sitemap.xml がすべて `https://example.com/...` のまま** 出力されます。

- [ ] デプロイ先の本番URLを決める（例: `https://mori-tt.github.io/regenerative-medicine` または独自ドメイン）
- [ ] GitHub Actions の本番ビルドに `NEXT_PUBLIC_SITE_URL` を環境変数として設定
- [ ] `GITHUB_PAGES=true` の場合は `basePath=/regenerative-medicine` が自動付与される（`next.config` 参照）

## 2. 公開日の設定

- [ ] `src/content/site-config.json` の `deployDate`（現在 `2026-09-30`＝並行公開開始日）を実際の公開日に変更するか、`NEXT_PUBLIC_DEPLOY_DATE` で上書き
- [ ] 記事の `publishAt` / `publishedAt` はこの日付から自動生成される
- [ ] **静的エクスポートのため、公開日以降に再ビルド・再デプロイが必要**

- [ ] 画面に表示される公開日は `deployDate` に統一される。`article-review-records.json` の `publishAt` は編集部の予定表で、サイトには反映されない
- [ ] 本番モードでは、公開記事が0件のカテゴリはトップ・ナビ・sitemapから外れ、直接開くと「準備中」の `noindex` ページになる（記事を公開するとカテゴリは自動で現れる）

## 3. 本番ビルド設定の確認

- [ ] 本番では `NEXT_PUBLIC_ARTICLE_BUILD_MODE=all` を**設定しない**（設定すると future-dated も公開されてしまう）
- [ ] プレビュー/ GitHub Pages用の `noindex` が本番ドメインに適用されていないことを確認（`publication.showPreviewBanner` ロジック参照）
- [ ] `robots.txt` と `sitemap.xml` が本番URLで正しく生成されているか `out/` を確認

## 4. 医療監修・法務レビュー

- [ ] 監修医による記事レビュー（現在 `needs_medical_review` 全251件。`reviewer.status=reviewed` は6件あるが、その後の本文編集で医療・法務確認が再確認待ちに戻っているため、現時点で公開ゲートを通過する記事は0本）
- [ ] 監修済み記事を編集した場合は `lastEditedAt` が監修日を上回り公開が止まる。原稿どおりの体裁変更でも `reviewer.reviewedAt` を同日以降へ更新して再確認済みにする
- [ ] 法務・広告表現の確認（現在 `needs_legal_editorial_review`）
- [ ] `article-review` レコードに監修者名・日付・スコープを記入（`isReviewed` ゲートを通過させる）
- [ ] 監修者プロフィール（`supervision` ページ）が実名・資格で埋まっているか確認
- [ ] **千原良友先生の氏名・写真・肩書の掲載と「医師執筆・監修済み」の表示について、書面等の許諾を得ているか確認**。`site-config.json` の `medicalReviewer.enabled` は現在 `true`、`reviewStatus` は `planned`。許諾が未了なら `NEXT_PUBLIC_MEDICAL_REVIEWER_ENABLED=false` でビルドする
- [ ] 手動でFTPする場合は、検証用に作った `out/`（運営者名が `TEST` など）を使わず、必ず本番の環境変数で `npm run build:lolipop` し直してから転送する

## 4.5 2サイト並行公開（GitHub Pages＝テスト / Lolipop＝本番）

- [ ] GitHub Variables: `DEPLOY_TARGET`（`both`=両方、`github-pages`=Pagesのみ・既定、`lolipop`=Lolipopのみ、`none`=停止）、`LOLIPOP_SITE_URL`（本番ドメイン）、`LOLIPOP_PUBLICATION_MODE=production`、`LOLIPOP_SITE_INDEXABLE=true`、`LOLIPOP_LOCALIZED_INDEXABLE`（翻訳確認後に `true`）
- [ ] GitHub Variables: `NEXT_PUBLIC_CONTACT_EMAIL`、`NEXT_PUBLIC_OPERATOR_NAME`、`NEXT_PUBLIC_OPERATOR_ADDRESS`（indexable本番では必須）
- [ ] GitHub Secrets: `LOLIPOP_SSH_USER`、`LOLIPOP_SSH_PASSWORD`、`LOLIPOP_SSH_REMOTE_DIR`、`LOLIPOP_SSH_KNOWN_HOSTS`（`ssh-keyscan -p 2222 ssh.lolipop.jp` の出力）
- [ ] `npm run check:rights` が通ること（`article-media.json` の全素材が `verified`。Unsplash検索ページURLではなく写真個別URLの記録が必要）

## 5. 画像・OGP

- [ ] `public/social-card.png` が実際のサイト用のOGP画像になっているか確認（現在は生成済みのプレースホルダ）
- [ ] OGP確認ツールで見え方をチェック（[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) 等）

## 6. 問い合わせフォーム

- [ ] `deploy/contact-config.example.php` に値を入力した内容を Secrets `LOLIPOP_CONTACT_CONFIG` に登録（デプロイ時に `~/contact-config.php` へ自動配置。手動なら `contact-config.php` として**公開フォルダの外**に置く）（`docs/DEPLOYMENT.md` 参照）

- [ ] Lolipopの対象ドメインのPHPが **8.2.35以上 / 8.3.36以上 / 8.4.27以上 / 8.5.12以上** であること（PHP2shell脆弱性 CVE-2026-109618 / CVE-2026-109619 対策。`contact.php` の要件は8.2以上）
- [ ] `public/contact.php` が動作するホスティング環境を確認（GitHub Pages は静的ホストのため PHP 非対応 → 外部フォームサービスへの切り替えが必要な場合あり）
- [ ] PHPMailer の SMTP 設定（`CONTACT_SMTP_*`）と実送信・返信・スパム扱いされないかの確認
- [ ] 実運用でスパム投稿が出た場合は Turnstile/hCaptcha の導入を検討（サイトキー・シークレットの発行が必要。現状は honeypot＋最小入力時間＋IPレート制限＋URL数制限）

## 6.5 セキュリティヘッダー・RSS

- [ ] `public/.htaccess` にHTTP→HTTPS・wwwなし統一の301リダイレクトを実装済み。正規URLをwwwなしにする方針の確認、Lolipop側の常時SSL設定との二重化がないことの確認は手作業（`GO-LIVE.md` §3）

- [ ] デプロイ後に `curl -I https://本番ドメイン/` で `X-Frame-Options` `Permissions-Policy` `Strict-Transport-Security` `Content-Security-Policy` が返ることを確認（`.htaccess` に定義済み。`mod_headers` が有効かサーバー依存）
- [ ] HTTPS証明書の安定稼働を確認後、HSTS に `preload` を追加してブラウザのpreloadリスト申請も検討
- [ ] CSP 違反が出ていないかブラウザコンソールで確認（外部リソースは使っていないはず。違反が出たら該当リソースを自己ホスト化するかポリシーを見直す）
- [ ] `/feed.xml`、`/en/feed.xml`、`/zh/feed.xml` が本番URLで取得できること、リーダーで購読表示を確認

## 7. デプロイ後のモニタリング

- [ ] Google Search Console でインデックス状況を確認
- [ ] アクセシビリティ監査（Lighthouse / axe）
- [ ] 実機でのモバイル表示・フォーム送信テスト（iOS Safari / Android Chrome で `<details>` ピッカー・stickyヘッダー・横スクロール図版の挙動も確認）
- [ ] フィードバック・誤記報告の受け皿の運用フロー確立
