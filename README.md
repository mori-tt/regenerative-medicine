# 再生医療ノート（仮称）

再生医療・幹細胞に関する日本語ポータルのNext.js静的サイト雛形です。スマートフォン対応のトップ、4カテゴリ、4本のサンプル記事、記事検索、編集・監修方針、運営・広告・問い合わせ案内を実装しています。

**全体計画は [docs/PLAN.md](docs/PLAN.md)、レンタルサーバーへの配置は [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) を参照してください。**

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

静的プレビュー：<http://127.0.0.1:4173>。配置するのは **`out/` の中身**です。Next.jsサーバーの起動は不要で、`next start` は使用しません。

## ファイル構成

```text
src/app/                 各ページ、メタデータ、sitemap、robots
src/components/          共通UI、記事カード、検索、SVGイラスト
src/content/articles.ts  記事・カテゴリ・監修情報
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

初期値は全記事 `status: "draft"` です。本文は医師監修前の短いサンプルで、架空の監修医師は登録していません。

正式公開では、医学的内容・根拠・掲載許諾を確認したうえで、次を設定します。

```ts
status: "published",
publishedAt: "実際の初回公開日（YYYY-MM-DD）",
updatedAt: "実際の更新日（YYYY-MM-DD）",
reviewer: {
  name: "実際の監修医師の氏名",
  credentials: "確認済みの資格・専門分野",
  affiliation: "確認済みの所属",
  profileUrl: "本人または正式な紹介ページのURL",
  reviewedAt: "実際の監修日（YYYY-MM-DD）",
},
```

これらが揃った記事のみ監修済み表示・Article構造化データ・サイトマップ掲載の対象になります。機械的な入力判定は監修の実態を保証しません。記事は一覧・検索から閲覧可能なままなので、秘密の原稿は登録せず、正式公開時にはサンプルを置き換えるか削除してください。

## SEO設定

`.env.example`を`.env.local`へコピーし、正式なドメインと連絡先を設定します。値はビルド時に反映されます。

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain.jp
NEXT_PUBLIC_SITE_INDEXABLE=false
NEXT_PUBLIC_CONTACT_EMAIL=実際に受信できるメールアドレス
```

準備中は全ページ`noindex`でサイトマップは空です。正式公開の準備完了後に`NEXT_PUBLIC_SITE_INDEXABLE=true`に変更し、再ビルド・再配置します。ダミードメインのまま検索公開する設定はエラーにします。検索ページと未監修記事は引き続き`noindex`です。

`robots.txt`は準備中もクロールを許可します。これはクローラがHTML内の`noindex`を読み取れるようにするためです。`noindex`は閲覧制限ではありません。非公開で確認する場合はサーバー側の認証等を使ってください。

## 実装の範囲

- 静的HTML、ページ固有のメタデータ、canonical、OGP、パンくず・構造化データ、sitemap、robots。
- サーバー不要の全文キーワード検索とカテゴリ絞り込み。
- 医師監修欄、編集方針、出典、更新日、広告予定枠。
- 入稿後に静的バナーを表示できる広告コンポーネント。
- 問い合わせメール未設定時は準備中表示。設定後にメールアプリを開くリンクを表示。

CMS、問い合わせ送信サーバー、広告計測、アクセス解析、会員機能は未導入です。本番ドメイン・監修医師・運営者が未確定のため、雛形のままの正式公開は想定していません。
