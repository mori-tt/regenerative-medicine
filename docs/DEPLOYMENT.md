# ロリポップ等のレンタルサーバーへの配置

このプロジェクトは `output: "export"` と `trailingSlash: true` を使用します。`npm run build` により `/articles/xxx/index.html` のようなファイルが `out/` に生成されます。HTML・CSS・JavaScriptを配信できるサーバーで動作し、ホスティング側のNode.jsやデータベースは不要です。[Next.js公式](https://nextjs.org/docs/app/guides/static-exports)

## 1. 公開先を設定

独自ドメインの公開フォルダとHTTPSをサーバー側で準備します。Lolipopのサブドメイン・独自ドメインは通常 **ドメイン直下**（`https://your-domain.jp/`）に配置し、`NEXT_PUBLIC_BASE_PATH`は空欄にします。GitHub Pagesのリポジトリ配下だけは、`GITHUB_PAGES=true`から`/regenerative-medicine`が自動設定されます。

`.env.example`を`.env.local`にコピーし、実際のドメインを設定します。ドメインの値にサブディレクトリを含めるとビルドエラーになります。

配置先ごとの設定例は [`deploy/github-pages.env.example`](../deploy/github-pages.env.example) と [`deploy/lolipop.env.example`](../deploy/lolipop.env.example) に分けています。`DEPLOY_TARGET`を切り替えても、GitHub Pagesの確認用設定とLolipopの公開用設定が混ざらないようにします。

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain.jp
NEXT_PUBLIC_SITE_INDEXABLE=false
NEXT_PUBLIC_PUBLICATION_MODE=preview
NEXT_PUBLIC_ARTICLE_BUILD_MODE=scheduled
NEXT_PUBLIC_CONTACT_EMAIL=実際の受付用メールアドレス
NEXT_PUBLIC_OPERATOR_NAME=運営者の正式名称
NEXT_PUBLIC_OPERATOR_ADDRESS=運営者の所在地
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_ASSET_PREFIX=
```

準備中は`NEXT_PUBLIC_SITE_INDEXABLE=false` と `NEXT_PUBLIC_PUBLICATION_MODE=preview` を維持します。運営情報・監修・原稿・法務確認を確定し、正式公開するときだけ `NEXT_PUBLIC_SITE_INDEXABLE=true` と `NEXT_PUBLIC_PUBLICATION_MODE=production` に変更します。両方が揃わない限り、robots・canonical周辺の公開設定とサイトマップは公開状態になりません。

記事の生成範囲は `NEXT_PUBLIC_ARTICLE_BUILD_MODE` で分けます。GitHub Pagesは編集・監修確認用として `all` を設定し、公開予定日が未来の記事も全記事を生成します。Lolipopへ配置するビルドは `scheduled` を設定し、`publishAt` が当日以前の記事だけを生成します。検索公開の可否と、生成範囲は別の設定です。

手元では次のコマンドで対象を固定できます。

```bash
npm run build:github-pages  # 全記事を確認用に生成
npm run build:lolipop       # 公開日到達分だけ生成

# 環境変数で対象を切り替える場合
DEPLOY_TARGET=github-pages npm run build:target
DEPLOY_TARGET=lolipop npm run build:target
```

```dotenv
# GitHub Pages（確認用）
NEXT_PUBLIC_ARTICLE_BUILD_MODE=all

# Lolipop（公開用）
NEXT_PUBLIC_ARTICLE_BUILD_MODE=scheduled
```

配置先ごとの設定は次のとおりです。

| 配置先 | `NEXT_PUBLIC_SITE_URL` | `NEXT_PUBLIC_BASE_PATH` | `NEXT_PUBLIC_ASSET_PREFIX` |
| --- | --- | --- | --- |
| GitHub Pages（リポジトリ配下） | Pagesのドメイン | 未設定（自動で`/regenerative-medicine`） | 未設定（自動生成） |
| Lolipopサブドメイン | `https://サブドメイン.example` | 空欄 | 空欄 |
| 独自ドメイン | `https://独自ドメイン.example` | 空欄 | 空欄 |

`public/`配下の画像・アイコンは、`NEXT_PUBLIC_BASE_PATH`を含むURLへビルド時に変換されます。GitHub PagesからLolipopへ移すときは、環境変数を切り替えて再ビルドしてください。

## 2. GitHub ActionsでLolipopへ配置する場合

現在のLolipop workflowは有効化していません。GitHub Actionsに認識されない `.disabled` 拡張子のテンプレートを [`deploy-lolipop.example.disabled`](../.github/workflows/deploy-lolipop.example.disabled) として保存しています。最終公開時に `.github/workflows/deploy-lolipop.yml` へコピーし、次のGitHub Secretsを登録します。

- `LOLIPOP_SSH_USER`
- `LOLIPOP_SSH_PASSWORD`
- `LOLIPOP_SSH_REMOTE_DIR`：対象ドメインの公開フォルダ。`/`やSSHのHOME自体は指定しない

GitHub Variablesには次を登録します。

- `LOLIPOP_SITE_URL`
- `LOLIPOP_PUBLICATION_MODE`：確認中は `preview`、医学・法務確認後は `production`
- `LOLIPOP_SITE_INDEXABLE`：確認中は `false`、正式公開後は `true`
- 必要に応じて `NEXT_PUBLIC_CONTACT_EMAIL`、`NEXT_PUBLIC_OPERATOR_NAME`、`NEXT_PUBLIC_OPERATOR_ADDRESS`

ファイルを有効化すると、mainへのpush、手動実行、毎週土曜06:00（日本時間）の予約実行で、`npm run build:lolipop` と静的検査を行い、予約日到達分だけをSSH経由で配置します。GitHub Pages workflowは既存のままmain pushで全記事をnoindex配置します。同時公開の直前にworkflowファイルを有効化してください。`.disabled`のままでは実行されません。

## 3. 手元で生成・確認

```bash
npm ci
npm run build
npm run typecheck
npm run check:export
npm run preview
```

`http://127.0.0.1:4173`で表示を確認します。検査スクリプトはHTMLのメタデータ・内部リンク・生成ファイル・検索公開状態を確認します。監修の医学的妥当性やApacheの実際の設定は検証しません。

## 4. 転送

1. 既存サイトがある場合はファイルと`.htaccess`をバックアップします。
2. ロリポップの管理画面で、対象ドメインの公開フォルダを確認します。
3. [公式のFTP設定手順](https://lolipop.jp/manual/hp/ftp-set/)に従ってFTPS対応クライアントを設定します。
4. **`out`フォルダそのものではなく、中のファイル・フォルダを**公開フォルダへ転送します。
5. `_next/`も必ず転送します。隠しファイルの`.htaccess`はクライアントの設定で表示してください。
6. `index.html`、`404.html`、記事フォルダ、`robots.txt`、`sitemap.xml`、画像等が配置されたことを確認します。

サーバーへ `.env.local`、`node_modules`、ソースコードを転送する必要はありません。Webベースの[ロリポップ！FTP](https://lolipop.jp/manual/user/ftp2-04/)も利用できますが、大量のファイルはフォルダ単位で転送できるクライアントを使う方が管理しやすくなります。

`public/.htaccess`はドメイン直下用のサンプルで、ビルド時に`out/.htaccess`へコピーされます。既存のWordPress用リライト等がある場合は、そのまま上書きせず統合してください。使えるディレクティブはサーバー設定に依存するため、配置後に確認します。

## 5. 配置後の確認

- トップ、カテゴリ、記事詳細をそれぞれURLの直接入力で開ける。
- 記事URLでブラウザを再読み込みしても表示される。
- スマートフォンでメニュー・検索・記事が使える。
- 存在しないURLでHTTP 404になる（エラーページをHTTP 200で返さない）。
- ページソースのcanonicalが実際の公開URLになっている。
- 準備中は`noindex`、正式公開後は監修済み記事が`index`になっている。
- HTTPSへ統一する設定をサーバー管理画面等で行い、別ホスト名も正規ホストへ統一する。
- 連絡先のメールリンクを確認する。
- 正式公開後、Search Consoleで所有権を確認し、`/sitemap.xml`を送信する。

## 6. 更新するとき

記事を修正し、再度ビルド・検査してから転送します。ビルド環境がないレンタルサーバー上でソースだけ変更してもページは更新されません。

新しい`_next`等のアセットを先にアップロードし、その後HTMLを更新すると、転送中に参照先が欠ける状況を減らせます。以前のアセットは移行確認まで保持します。削除した記事はサーバー上の旧フォルダも個別に確認して撤去し、必要に応じて適切な移転先への301リダイレクトをサーバー側に設定します。`out/`の上書きだけでは旧ファイルは削除されません。

## 7. Lolipopのお問い合わせフォーム

お問い合わせフォームは静的HTMLから`/contact.php`へPOSTします。PHPが利用できるLolipopでは、PHP用のPHPMailerを使ってLolipopのSMTP（`smtp.lolipop.jp`、通常は465/SSLまたは587/STARTTLS）から送信する構成を推奨します。Lolipopの管理画面・公式マニュアルで、契約プランのPHPとメールアカウントが有効であることを確認してください。

`public/composer.json`を使って、Composerが使える手元の環境で次を実行します。生成された`public/vendor/`も、`contact.php`と一緒に公開フォルダへ転送してください。

```bash
composer install --no-dev --working-dir=public
```

Composerをサーバーで実行できない場合は、同じPHPメジャー・マイナーバージョンで手元に生成した`public/vendor/`を転送します。PHPMailerは`public/vendor/autoload.php`から読み込まれます。

PHPの実行環境には、次の値を環境変数として設定します。`.env.local`を公開フォルダへ置いても、LolipopのPHPが自動的に読むとは限らないため、管理画面の環境変数機能またはサーバー側の設定方法に合わせてください。秘密のSMTPパスワードはGitに追加しません。

```dotenv
CONTACT_TO_EMAIL=受信するメールアドレス
CONTACT_FROM_EMAIL=同じドメインの送信用メールアドレス
CONTACT_FROM_NAME=再生医療ガイド
CONTACT_SMTP_HOST=smtp.lolipop.jp
CONTACT_SMTP_PORT=465
CONTACT_SMTP_USER=送信用メールアドレス
CONTACT_SMTP_PASS=メールアカウントのパスワード
CONTACT_SMTP_SECURE=ssl
CONTACT_PHPMAILER_AUTOLOAD=
```

`CONTACT_FROM_EMAIL`は利用者のメールアドレスにせず、サイト側のメールアドレスに固定します。利用者のアドレスはReply-Toだけに設定し、なりすましやヘッダーインジェクションを避けます。フォームには医療相談を送らない旨を明記しています。配置後は実在するテストアドレスで、送信・返信・迷惑メール判定・エラー時の挙動を確認してください。

PHPMailerが利用できない場合は、PHPの`mail()`へフォールバックしますが、到達性や迷惑メール対策の面でSMTP送信を優先します。Lolipopの公式仕様では、SMTP-AUTHとSSL/TLS、ポート465/587が案内されています。

フォームで取得する情報をプライバシーポリシーに反映済みです。運営者名・所在地・保存期間などの実値は、公開前に必ず確定して掲載してください。

## 8. 広告

静的バナーは`src/content/ads.ts`に設定し、素材を`public/`へ置いて再ビルドします。開始・終了日時による自動更新はなく、掲載開始・終了時にも再ビルドと転送が必要です。リンクに`sponsored`を付けることだけで医療広告の適法性が確認されたことにはなりません。

現段階では実際のレンタルサーバーへの接続・転送は行っていません。
