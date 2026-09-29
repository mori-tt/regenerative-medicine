# デプロイ前チェックリスト（手作業）

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

## 3. 本番ビルド設定の確認

- [ ] 本番では `NEXT_PUBLIC_ARTICLE_BUILD_MODE=all` を**設定しない**（設定すると future-dated も公開されてしまう）
- [ ] プレビュー/ GitHub Pages用の `noindex` が本番ドメインに適用されていないことを確認（`publication.showPreviewBanner` ロジック参照）
- [ ] `robots.txt` と `sitemap.xml` が本番URLで正しく生成されているか `out/` を確認

## 4. 医療監修・法務レビュー

- [ ] 監修医による記事レビュー（現在 `needs_medical_review` 245件／reviewed 6件）
- [ ] 監修済み記事を編集した場合は `lastEditedAt` が監修日を上回り公開が止まる。原稿どおりの体裁変更でも `reviewer.reviewedAt` を同日以降へ更新して再確認済みにする
- [ ] 法務・広告表現の確認（現在 `needs_legal_editorial_review`）
- [ ] `article-review` レコードに監修者名・日付・スコープを記入（`isReviewed` ゲートを通過させる）
- [ ] 監修者プロフィール（`supervision` ページ）が実名・資格で埋まっているか確認

## 4.5 2サイト並行公開（GitHub Pages＝テスト / Lolipop＝本番）

- [ ] GitHub Variables: `LOLIPOP_DEPLOY_ENABLED=true`、`LOLIPOP_SITE_URL`（本番ドメイン）、`LOLIPOP_PUBLICATION_MODE=production`、`LOLIPOP_SITE_INDEXABLE=true`、`LOLIPOP_LOCALIZED_INDEXABLE`（翻訳確認後に `true`）
- [ ] GitHub Variables: `NEXT_PUBLIC_CONTACT_EMAIL`、`NEXT_PUBLIC_OPERATOR_NAME`、`NEXT_PUBLIC_OPERATOR_ADDRESS`（indexable本番では必須）
- [ ] GitHub Secrets: `LOLIPOP_SSH_USER`、`LOLIPOP_SSH_PASSWORD`、`LOLIPOP_SSH_REMOTE_DIR`
- [ ] `npm run check:rights` が通ること（`article-media.json` の全素材が `verified`。Unsplash検索ページURLではなく写真個別URLの記録が必要）

## 5. 画像・OGP

- [ ] `public/social-card.png` が実際のサイト用のOGP画像になっているか確認（現在は生成済みのプレースホルダ）
- [ ] OGP確認ツールで見え方をチェック（[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) 等）

## 6. 問い合わせフォーム

- [ ] `public/contact.php` が動作するホスティング環境を確認（GitHub Pages は静的ホストのため PHP 非対応 → 外部フォームサービスへの切り替えが必要な場合あり）

## 7. デプロイ後のモニタリング

- [ ] Google Search Console でインデックス状況を確認
- [ ] アクセシビリティ監査（Lighthouse / axe）
- [ ] 実機でのモバイル表示・フォーム送信テスト
- [ ] フィードバック・誤記報告の受け皿の運用フロー確立
