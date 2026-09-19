# ロリポップ等のレンタルサーバーへの配置

このプロジェクトは `output: "export"` と `trailingSlash: true` を使用します。`npm run build` により `/articles/xxx/index.html` のようなファイルが `out/` に生成されます。HTML・CSS・JavaScriptを配信できるサーバーで動作し、ホスティング側のNode.jsやデータベースは不要です。[Next.js公式](https://nextjs.org/docs/app/guides/static-exports)

## 1. 公開先を設定

独自ドメインの公開フォルダとHTTPSをサーバー側で準備します。Lolipopのサブドメイン・独自ドメインは通常 **ドメイン直下**（`https://your-domain.jp/`）に配置し、`NEXT_PUBLIC_BASE_PATH`は空欄にします。GitHub Pagesのリポジトリ配下だけは、`GITHUB_PAGES=true`から`/regenerative-medicine`が自動設定されます。

`.env.example`を`.env.local`にコピーし、実際のドメインを設定します。ドメインの値にサブディレクトリを含めるとビルドエラーになります。

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain.jp
NEXT_PUBLIC_SITE_INDEXABLE=false
NEXT_PUBLIC_CONTACT_EMAIL=実際の受付用メールアドレス
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_ASSET_PREFIX=
```

準備中は`false`を維持します。運営情報・監修・原稿を確定し、正式公開するときに`true`へ変更します。

配置先ごとの設定は次のとおりです。

| 配置先 | `NEXT_PUBLIC_SITE_URL` | `NEXT_PUBLIC_BASE_PATH` | `NEXT_PUBLIC_ASSET_PREFIX` |
| --- | --- | --- | --- |
| GitHub Pages（リポジトリ配下） | Pagesのドメイン | 未設定（自動で`/regenerative-medicine`） | 未設定（自動生成） |
| Lolipopサブドメイン | `https://サブドメイン.example` | 空欄 | 空欄 |
| 独自ドメイン | `https://独自ドメイン.example` | 空欄 | 空欄 |

`public/`配下の画像・アイコンは、`NEXT_PUBLIC_BASE_PATH`を含むURLへビルド時に変換されます。GitHub PagesからLolipopへ移すときは、環境変数を切り替えて再ビルドしてください。

## 2. 手元で生成・確認

```bash
npm ci
npm run build
npm run typecheck
npm run check:export
npm run preview
```

`http://127.0.0.1:4173`で表示を確認します。検査スクリプトはHTMLのメタデータ・内部リンク・生成ファイル・検索公開状態を確認します。監修の医学的妥当性やApacheの実際の設定は検証しません。

## 3. 転送

1. 既存サイトがある場合はファイルと`.htaccess`をバックアップします。
2. ロリポップの管理画面で、対象ドメインの公開フォルダを確認します。
3. [公式のFTP設定手順](https://lolipop.jp/manual/hp/ftp-set/)に従ってFTPS対応クライアントを設定します。
4. **`out`フォルダそのものではなく、中のファイル・フォルダを**公開フォルダへ転送します。
5. `_next/`も必ず転送します。隠しファイルの`.htaccess`はクライアントの設定で表示してください。
6. `index.html`、`404.html`、記事フォルダ、`robots.txt`、`sitemap.xml`、画像等が配置されたことを確認します。

サーバーへ `.env.local`、`node_modules`、ソースコードを転送する必要はありません。Webベースの[ロリポップ！FTP](https://lolipop.jp/manual/user/ftp2-04/)も利用できますが、大量のファイルはフォルダ単位で転送できるクライアントを使う方が管理しやすくなります。

`public/.htaccess`はドメイン直下用のサンプルで、ビルド時に`out/.htaccess`へコピーされます。既存のWordPress用リライト等がある場合は、そのまま上書きせず統合してください。使えるディレクティブはサーバー設定に依存するため、配置後に確認します。

## 4. 配置後の確認

- トップ、カテゴリ、記事詳細をそれぞれURLの直接入力で開ける。
- 記事URLでブラウザを再読み込みしても表示される。
- スマートフォンでメニュー・検索・記事が使える。
- 存在しないURLでHTTP 404になる（エラーページをHTTP 200で返さない）。
- ページソースのcanonicalが実際の公開URLになっている。
- 準備中は`noindex`、正式公開後は監修済み記事が`index`になっている。
- HTTPSへ統一する設定をサーバー管理画面等で行い、別ホスト名も正規ホストへ統一する。
- 連絡先のメールリンクを確認する。
- 正式公開後、Search Consoleで所有権を確認し、`/sitemap.xml`を送信する。

## 5. 更新するとき

記事を修正し、再度ビルド・検査してから転送します。ビルド環境がないレンタルサーバー上でソースだけ変更してもページは更新されません。

新しい`_next`等のアセットを先にアップロードし、その後HTMLを更新すると、転送中に参照先が欠ける状況を減らせます。以前のアセットは移行確認まで保持します。削除した記事はサーバー上の旧フォルダも個別に確認して撤去し、必要に応じて適切な移転先への301リダイレクトをサーバー側に設定します。`out/`の上書きだけでは旧ファイルは削除されません。

## 6. 広告と問い合わせ

問い合わせは現在メールリンク方式です。フォームを設ける場合は外部フォームサービスまたは別途サーバー処理を導入し、個人情報の取り扱いを更新します。

静的バナーは`src/content/ads.ts`に設定し、素材を`public/`へ置いて再ビルドします。開始・終了日時による自動更新はなく、掲載開始・終了時にも再ビルドと転送が必要です。リンクに`sponsored`を付けることだけで医療広告の適法性が確認されたことにはなりません。

現段階では実際のレンタルサーバーへの接続・転送は行っていません。
