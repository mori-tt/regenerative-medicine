# 再生医療ガイド（仮称）

再生医療・幹細胞に関する日本語ポータルのNext.js静的サイト雛形です。スマートフォン対応のトップ、検索意図別10カテゴリ（各カテゴリにサブカテゴリ）、251本の記事（監修記録の確定した本番公開対象は6本、残りは監修・公開待ち。確認用ビルドでは全件表示）、記事検索、日英中の多言語化、編集・監修方針、運営・広告・問い合わせ案内を実装しています。

**全体計画は [docs/PLAN.md](docs/PLAN.md)、レンタルサーバーへの配置は [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)、本番公開の手作業とGitHub Actionsのコピペ資料は [docs/GO-LIVE.md](docs/GO-LIVE.md) を参照してください。**

## 起動

Node.js 22以上を使用します。

```bash
npm ci
npm run dev
```

開発画面：<http://localhost:3000>

## 静的ファイルの生成・確認

```bash
npm run build
npm run typecheck
npm run check:export
npm run preview
```

静的プレビュー：<http://127.0.0.1:4173>（ポートが使用中なら `PORT=4174 npm run preview` のように変更可）。配置するのは **`out/` の中身**です。Next.jsサーバーの起動は不要で、`next start` は使用しません。

配置先別のビルド（2サイト並行運用、詳細は [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)）：

```bash
npm run build:github-pages  # GitHub Pages：全記事・noindexの確認用サイト
npm run build:lolipop       # Lolipop本番：公開日到達分のみ。production時は権利チェック込み
npm run build:target        # DEPLOY_TARGET=github-pages|lolipop|both|none で対象を切替
```

GitHub Actionsのデプロイ先も同名のリポジトリVariable `DEPLOY_TARGET` で切り替えます（`github-pages`=Pagesのみ・未設定時の既定、`lolipop`、`both`、`none`）。詳細は [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) と [docs/GO-LIVE.md](docs/GO-LIVE.md)。

## ファイル構成

```text
src/app/                 各ページ、メタデータ、sitemap、robots
src/components/          共通UI、記事カード、検索、記事内模式図（SVG）
src/content/articles.ts  記事・カテゴリ・監修情報
src/content/subcategories.ts  カテゴリ内のサブカテゴリと記事優先度
src/content/pages.ts     編集方針などの案内原稿
src/content/ads.ts       将来の静的バナー広告設定
src/lib/site.ts          サイト名・URL・検索公開設定
public/                  アイコン・画像・Apache設定
docs/                    全体計画、配置手順
scripts/                 静的プレビュー・出力検査
out/                     ビルドで生成する配信用ファイル
```

## 記事を追加する

`src/content/articles.ts` の `articles` に記事を追加します。slugは半角英数字とハイフンにし、重複させません。原稿は段落ごとに記述でき、目次は`sections`から生成します。追加後に再ビルドすれば記事HTMLも生成されます。

初期値は全記事 `status: "draft"` です。本文は医師監修前の編集部原稿で、架空の監修医師は登録していません。記事には、基礎説明に加えて研究段階・リスク・医療者へ確認する事項を含めています。

正式公開は `src/content/article-review-records.json` の医学・法務・監修記録と実公開日、および監修者設定に基づいて判定します。本文内の旧 `review` メモだけでは公開されません。手順は [PUBLISHING.md](docs/PUBLISHING.md) を参照してください。

記事別の文献追加・原稿訂正は `src/content/evidence/*.json`、出典と限界を含む改稿一覧は [ARTICLE-LITERATURE-AUDIT.md](docs/ARTICLE-LITERATURE-AUDIT.md) にあります。GitHub Pagesの確認用ビルドは未監修原稿も全件表示するため、秘密の原稿は置かないでください。

原稿・翻訳を編集すると `npm run check:article-content`（`prebuild`で自動実行）が、比較優良表現・保証表現・体験談誘導・誇大表現など医療広告ガイドライン上リスクのある言い回しの候補を`advisories`に出力します。ビルドを止めるものではなく人手レビューの補助です。詳細は [LEGAL-AUDIT-2026-09-22.md](docs/LEGAL-AUDIT-2026-09-22.md) の追記を参照してください。

## SEO設定

`.env.example`を`.env.local`へコピーし、正式なドメインと連絡先を設定します。値はビルド時に反映されます。

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain.jp
NEXT_PUBLIC_SITE_INDEXABLE=false
NEXT_PUBLIC_ARTICLE_BUILD_MODE=scheduled
NEXT_PUBLIC_CONTACT_EMAIL=実際に受信できるメールアドレス
```

準備中は全ページ`noindex`でサイトマップは空です。正式公開の準備完了後に`NEXT_PUBLIC_SITE_INDEXABLE=true`に変更し、再ビルド・再配置します。ダミードメインのまま検索公開する設定はエラーにします。検索ページと未監修記事は引き続き`noindex`です。

GitHub Pagesで全記事を確認する場合は`NEXT_PUBLIC_ARTICLE_BUILD_MODE=all`、Lolipopに公開する場合は`NEXT_PUBLIC_ARTICLE_BUILD_MODE=scheduled`を設定します。後者では未来の`publishAt`を持つ記事は生成されません。

`robots.txt`は準備中もクロールを許可します。これはクローラがHTML内の`noindex`を読み取れるようにするためです。`noindex`は閲覧制限ではありません。非公開で確認する場合はサーバー側の認証等を使ってください。

## 監修者と公開モード

監修者のプロフィール、資格、経歴、所属学会、監修範囲、写真の出典は [`src/content/site-config.json`](src/content/site-config.json) で管理します。現在はノリスクリニック院長・千原良友先生の公式プロフィール情報を登録しています。記事ごとの監修日が確定するまでは、記事を「医師監修済み」と表示しません。

本番切替時に、準備中表示を一括で変更できます。

```dotenv
NEXT_PUBLIC_PUBLICATION_MODE=live
NEXT_PUBLIC_SHOW_PREVIEW_BANNER=false
NEXT_PUBLIC_SHOW_PREPARATION_NOTICES=false
NEXT_PUBLIC_SITE_INDEXABLE=true
```

写真は監修者の公式プロフィールページ掲載写真を使用し、サイト内に出典リンクを表示しています。監修者が変更になった場合はJSONの監修者情報と写真を差し替えて再ビルドしてください。

## 本番での表示ルール

- **空カテゴリ**：`NEXT_PUBLIC_PUBLICATION_MODE=production` では、公開記事が1本以上あるカテゴリだけをトップ・ヘッダーのカテゴリ・記事一覧のチップ・検索のカテゴリ・sitemapに出します（`src/content/articles.ts` の `availableCategories()`）。記事0件のカテゴリのURLは生成されますが、「準備中」の表示で `noindex` になります。トップには「公開準備中のテーマ」としてリンクなしで表示します。確認用ビルド（GitHub Pages）は全カテゴリを表示します。
- **おすすめトグル**：該当記事が0本、または全記事が「おすすめ」のときは、絞り込みの意味がないため表示しません。
- **公開日**：記事の公開日・`publishAt` は `src/content/site-config.json` の `deployDate`（または `NEXT_PUBLIC_DEPLOY_DATE`）に一括で揃えます。`article-review-records.json` の `publishAt` は編集部の予定表で、サイトの表示には使いません。本番公開日が決まったら `deployDate` を更新してください。

## 実装の範囲

- 静的HTML、ページ固有のメタデータ、canonical、OGP、パンくず・構造化データ、sitemap、robots、言語別RSSフィード（`/feed.xml`・`/en/feed.xml`・`/zh/feed.xml`）。
- サーバー不要の全文キーワード検索とカテゴリ絞り込み。
- 医師監修欄、編集方針、出典、更新日、広告予定枠。
- 入稿後に静的バナーを表示できる広告コンポーネント。
- 問い合わせは `public/contact.php`（Lolipop側でPHP/PHPMailer実行）で送信。SMTPなどの設定は公開フォルダの外の `contact-config.php`（雛形は [`deploy/contact-config.example.php`](deploy/contact-config.example.php)）に置きます。GitHub PagesなどPHPの実行できない静的ホストでは送信を停止する案内を表示。

CMS、広告計測、アクセス解析、会員機能は未導入です。本番ドメイン・監修医師・運営者が未確定のため、雛形のままの正式公開は想定していません。
