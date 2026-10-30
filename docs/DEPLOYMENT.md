# ロリポップ等のレンタルサーバーへの配置

このプロジェクトは `output: "export"` と `trailingSlash: true` を使用します。`npm run build` により `/articles/xxx/index.html` のようなファイルが `out/` に生成されます。HTML・CSS・JavaScriptを配信できるサーバーで動作し、ホスティング側のNode.jsやデータベースは不要です。[Next.js公式](https://nextjs.org/docs/app/guides/static-exports)

- **はじめて公開する** → §1・§2（全体像と順次手順）
- 設定値の意味を調べる → §3以降のリファレンス
- 公開当日のチェックリスト・トラブルシュート → [GO-LIVE.md](GO-LIVE.md)

## 1. 全体像：設定は3箇所に分かれる

| 場所                              | 何を置くか                                                                                | 誰が使うか                 |
| --------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------- |
| GitHub **Secrets**                | SSH認証情報4件＋問い合わせ設定（`LOLIPOP_CONTACT_CONFIG`）                                | GitHub Actionsのデプロイ   |
| GitHub **Variables**              | `DEPLOY_TARGET`（デプロイ先）・`LOLIPOP_*`（本番の公開設定）・運営者情報                  | GitHub Actionsのビルド     |
| `.env.local`（ローカル・git除外） | `NEXT_PUBLIC_*`（手元ビルドの設定）                                                       | 手元の `npm run build`     |
| サーバーの `contact-config.php`   | SMTPパスワード等（**公開フォルダの外**。`LOLIPOP_CONTACT_CONFIG` から自動配置＝手動不要） | サーバー上の `contact.php` |

つまり初回に必要なのは「**Lolipop管理画面の設定**」と「**GitHubのSecrets/Variables登録**」だけです。以降はpushや週次実行でビルド・検査・配置・設定ファイル・スモークテストまで全自動です。

## 2. 初回セットアップ手順（上から順に実行）

> 各ステップの背景・完全なチェックリスト・公開当日の運用は [GO-LIVE.md](GO-LIVE.md) を参照。ここでは最短ルートを示します。

### Step 1. Lolipop管理画面（初回のみ・手作業）

GitHub Actionsからは自動化できない部分です。管理画面で次を設定します（詳細は [GO-LIVE.md](GO-LIVE.md) §1-1）。

- [ ] **SSHを有効化**（ホスト `ssh.lolipop.jp`・ポート `2222`・ユーザー名・パスワードを控える）
- [ ] 本番ドメインの**公開フォルダ**を設定（例：`~/web/saisei-med.com` → これが `LOLIPOP_SSH_REMOTE_DIR` になる）
- [ ] **独自SSL**を有効化（`https://` で表示できることを確認）
- [ ] **問い合わせ用メールアカウント**を作成（例：`info@saisei-med.com`）
- [ ] PHPバージョンを **8.3以上**に設定
- [ ] 既存サイトがある場合は先にバックアップ（デプロイは公開フォルダを入れ替える）

### Step 2. GitHub Secrets を登録（5件・ブラウザのみ）

リポジトリの **Settings → Secrets and variables → Actions → Secrets** タブで「New repository secret」から1件ずつ登録します。

| Secret名                  | 入れる値                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `LOLIPOP_SSH_USER`        | SSHユーザー名（管理画面の表示どおり。例：`lolipop.jp-XXXXX`）                                                                           |
| `LOLIPOP_SSH_PASSWORD`    | SSHパスワード                                                                                                                           |
| `LOLIPOP_SSH_REMOTE_DIR`  | 公開フォルダ（Step 1で設定したもの。例：`~/web/saisei-med.com`）                                                                        |
| `LOLIPOP_SSH_KNOWN_HOSTS` | 下記コマンドの出力（下欄参照）                                                                                                          |
| `LOLIPOP_CONTACT_CONFIG`  | `contact-config.example.php` の中身に値を入力したもの（下欄参照。問い合わせフォームを使う場合に必要。デプロイ時に自動でサーバーへ配置） |

**`LOLIPOP_SSH_KNOWN_HOSTS` の入れ方**（唯一ターミナルが必要な作業・中間者攻撃対策で必須）：Macのターミナルで次を実行し、出てくる数行をそのままSecret入力欄に貼り付けます。

```bash
ssh-keyscan -p 2222 ssh.lolipop.jp
```

**`LOLIPOP_CONTACT_CONFIG` の入れ方**：GitHub上で [`deploy/contact-config.example.php`](../deploy/contact-config.example.php) を開き、中身をすべてコピーしてSecret入力欄に貼り付け、`CONTACT_TO_EMAIL=`（受信アドレス）・`CONTACT_SMTP_USER=`（Step 1で作ったメールアドレス）・`CONTACT_SMTP_PASS=`（そのパスワード）・`CONTACT_FROM_EMAIL=`・`CONTACT_ALLOWED_ORIGINS=`（本番ドメイン）を実値に書き換えて登録します。項目の意味は §9 を参照。

### Step 3. GitHub Variables を登録（ブラウザのみ）

同じ画面の **Variables** タブで「New repository variable」から1件ずつ登録します。

| Variable名                     | 入れる値                                 |
| ------------------------------ | ---------------------------------------- |
| `LOLIPOP_SITE_URL`             | `https://saisei-med.com`（本番ドメイン） |
| `LOLIPOP_PUBLICATION_MODE`     | `production`（準備中は `preview`）       |
| `LOLIPOP_SITE_INDEXABLE`       | `true`（準備中は `false`）               |
| `LOLIPOP_LOCALIZED_INDEXABLE`  | `false`（英・中の確認後だけ `true`）     |
| `NEXT_PUBLIC_OPERATOR_NAME`    | 運営者名（同上）                         |
| `NEXT_PUBLIC_OPERATOR_ADDRESS` | 運営者所在地（同上）                     |

### Step 4. デプロイを有効化して実行（ブラウザのみ）

1. Variables に **`DEPLOY_TARGET`** を登録します（この設定を最後に行う＝ここで初めて本番に出ます）。

   | `DEPLOY_TARGET` の値           | 動作                       |
   | ------------------------------ | -------------------------- |
   | `github-pages`（未設定＝既定） | Pagesのみデプロイ（現状）  |
   | `both`                         | Pages ＋ Lolipop の両方    |
   | `lolipop`                      | Lolipopのみ                |
   | `none`                         | 両方停止（公開済みは残る） |

2. リポジトリの **Actions** タブ → **Deploy to Lolipop** → **Run workflow**（main選択）で手動実行します。以後は main への push・毎週土曜06:00 JST の予約実行でも自動で走ります。
3. Actions画面で進行と結果を確認します。

推奨：Settings → Environments に `production` を作り Required reviewers に自分を設定すると、本番デプロイの前に承認画面が出ます（誤pushでの即時公開を防ぐ）。

実行される内容：`composer`でPHPMailer生成 → `npm run build:lolipop` → 静的検査 → SSHで `contact-config.php` 配置 → ステージング展開・検査 → 公開フォルダをリネームで入れ替え（失敗時は旧版へ自動復旧）→ スモークテスト。

<details>
<summary>CLI（gh）で一括登録する場合（省略可）</summary>

```bash
REPO=mori-tt/regenerative-medicine

# Secrets（値は対話入力 → コマンド履歴に残らない）
gh secret set LOLIPOP_SSH_USER --repo $REPO
gh secret set LOLIPOP_SSH_PASSWORD --repo $REPO
gh secret set LOLIPOP_SSH_REMOTE_DIR --repo $REPO
ssh-keyscan -p 2222 ssh.lolipop.jp > /tmp/kh && ssh-keygen -lf /tmp/kh
gh secret set LOLIPOP_SSH_KNOWN_HOSTS --repo $REPO < /tmp/kh && rm /tmp/kh
gh secret set LOLIPOP_CONTACT_CONFIG --repo $REPO < contact-config.php  # 値を入力済みのファイルから

# Variables
gh variable set LOLIPOP_SITE_URL --body https://saisei-med.com --repo $REPO
gh variable set LOLIPOP_PUBLICATION_MODE --body production --repo $REPO
gh variable set LOLIPOP_SITE_INDEXABLE --body true --repo $REPO
gh variable set LOLIPOP_LOCALIZED_INDEXABLE --body false --repo $REPO
gh variable set NEXT_PUBLIC_OPERATOR_NAME --body "運営者名" --repo $REPO
gh variable set NEXT_PUBLIC_OPERATOR_ADDRESS --body "所在地" --repo $REPO
gh variable set DEPLOY_TARGET --body both --repo $REPO

# 実行・確認
gh workflow run deploy-lolipop.yml --repo $REPO
gh run watch --repo $REPO
```

</details>

### Step 5. 動作確認

- `https://saisei-med.com/` でトップ・記事・検索が表示される
- `curl -sI http://saisei-med.com/` → `301` で `https://` へ
- 存在しないURL → HTTP 404 でサイトデザインの404ページ
- 問い合わせフォームから実送信 → 受信・記入者への自動返信を確認
- 正式公開後は Search Console 登録・sitemap送信（[GO-LIVE.md](GO-LIVE.md) §6-4）

---

以下はリファレンスです。

## 3. サイト別の環境変数

独自ドメインの公開フォルダとHTTPSをサーバー側で準備します。Lolipopのサブドメイン・独自ドメインは通常 **ドメイン直下**（`https://your-domain.jp/`）に配置し、`NEXT_PUBLIC_BASE_PATH`は空欄にします。GitHub Pagesのリポジトリ配下だけは、`GITHUB_PAGES=true`から`/regenerative-medicine`が自動設定されます。

ローカルでは `.env.example`を`.env.local`にコピーし、実際のドメインを設定します。ドメインの値にサブディレクトリを含めるとビルドエラーになります。配置先ごとの設定例は [`deploy/github-pages.env.example`](../deploy/github-pages.env.example) と [`deploy/lolipop.env.example`](../deploy/lolipop.env.example) に分けています。

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain.jp
NEXT_PUBLIC_SITE_INDEXABLE=false
# 英語・中国語ページの検索公開。翻訳・医学用語・監修範囲の確認後だけ true。
NEXT_PUBLIC_LOCALIZED_INDEXABLE=false
NEXT_PUBLIC_PUBLICATION_MODE=preview
NEXT_PUBLIC_ARTICLE_BUILD_MODE=scheduled
NEXT_PUBLIC_OPERATOR_NAME=運営者の正式名称
NEXT_PUBLIC_OPERATOR_ADDRESS=運営者の所在地
```

準備中は`NEXT_PUBLIC_SITE_INDEXABLE=false` と `NEXT_PUBLIC_PUBLICATION_MODE=preview`を維持します。運営情報・監修・原稿・法務確認を確定し、正式公開するときだけ`NEXT_PUBLIC_SITE_INDEXABLE=true`と`NEXT_PUBLIC_PUBLICATION_MODE=production`に変更します。英語・中国語も検索公開する場合は、翻訳・医学用語・監修範囲の確認後に`NEXT_PUBLIC_LOCALIZED_INDEXABLE=true`へ変更します。両方が揃わない限り、robots・canonical周辺の公開設定とサイトマップは公開状態になりません。

記事の生成範囲は `NEXT_PUBLIC_ARTICLE_BUILD_MODE` で分けます。GitHub Pagesは編集・監修確認用として `all` を設定し、公開予定日が未来の記事も全記事を生成します。Lolipopへ配置するビルドは `scheduled` を設定し、`publishAt` が当日以前の記事だけを生成します。検索公開の可否と、生成範囲は別の設定です。

手元では次のコマンドで対象を固定できます。

```bash
npm run build:github-pages  # 全記事を確認用に生成
npm run build:lolipop       # 公開日到達分だけ生成

# 環境変数で対象を切り替える場合
DEPLOY_TARGET=github-pages npm run build:target
DEPLOY_TARGET=lolipop npm run build:target
```

| 配置先                         | `NEXT_PUBLIC_SITE_URL`         | `NEXT_PUBLIC_BASE_PATH`                  | `NEXT_PUBLIC_ASSET_PREFIX` |
| ------------------------------ | ------------------------------ | ---------------------------------------- | -------------------------- |
| GitHub Pages（リポジトリ配下） | Pagesのドメイン                | 未設定（自動で`/regenerative-medicine`） | 未設定（自動生成）         |
| Lolipopサブドメイン            | `https://サブドメイン.example` | 空欄                                     | 空欄                       |
| 独自ドメイン                   | `https://独自ドメイン.example` | 空欄                                     | 空欄                       |

`public/`配下の画像・アイコンは、`NEXT_PUBLIC_BASE_PATH`を含むURLへビルド時に変換されます。GitHub PagesからLolipopへ移すときは、環境変数を切り替えて再ビルドしてください。

GitHub Pagesのworkflowでは、Pages用artifactのアップロードとdeployジョブを分け、deployジョブに`pages: write`、`id-token: write`、`actions: read`を明示しています。OIDCの`Request timeout`は権限不足ではなく、GitHubのOIDCサービスまたはrunnerからの一時的な通信失敗でも発生します。権限が設定済みなら、同じworkflowを再実行して切り分けます。`ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION=true`でNode 20へ戻す対応は行わず、ActionsをNode 24対応版へ更新します。

## 4. 2サイト並行公開と DEPLOY_TARGET

mainへのpushで、`DEPLOY_TARGET`の設定に応じた系統がデプロイされます。

| サイト                       | ワークフロー         | 記事範囲                                         | 検索公開        |
| ---------------------------- | -------------------- | ------------------------------------------------ | --------------- |
| GitHub Pages（テスト確認用） | `deploy.yml`         | 全記事（`ARTICLE_BUILD_MODE=all`、ストック含む） | `noindex` 固定  |
| Lolipop（本番）              | `deploy-lolipop.yml` | 公開日到達分のみ（`scheduled`）                  | Variablesで制御 |

2つのワークフローの実行は、GitHub Variables の **`DEPLOY_TARGET`** で一元管理します。`github-pages`（Pagesのみ・未設定時の既定）、`lolipop`（Lolipopのみ）、`both`（両方）、`none`（両方停止）のいずれかを設定します。Lolipop側の `deploy-lolipop.yml` は **リポジトリに作成済み** ですが、`DEPLOY_TARGET` が `lolipop` または `both` のときだけ実行されるガードが付いているため、設定するまではPagesのみがデプロイされます。

`LOLIPOP_PUBLICATION_MODE` が `production` のときだけ `npm run check:rights` が走り、`src/content/article-media.json` の全素材が `rightsStatus=verified` でないとビルドが止まります（Unsplash等の検索ページURLではなく、使用した写真個別のURL・ライセンス・権利者・確認日を記録してから `verified` に変更してください）。

## 5. 手元で生成・確認

```bash
npm ci
npm run build
npm run typecheck
npm run check:export
npm run preview
```

`http://127.0.0.1:4173`で表示を確認します。検査スクリプトはHTMLのメタデータ・内部リンク・生成ファイル・検索公開状態を確認します。監修の医学的妥当性やApacheの実際の設定は検証しません。

## 6. 手動転送（代替手順）

GitHub Actionsでのデプロイ（§4）を使う場合、この手順は不要です。Actionsが使えない場合や初回の緊急対応用に、FTPSでの手動転送手順を残しています。

1. 既存サイトがある場合はファイルと`.htaccess`をバックアップします。
2. ロリポップの管理画面で、対象ドメインの公開フォルダを確認します。
3. [公式のFTP設定手順](https://lolipop.jp/manual/hp/ftp-set/)に従ってFTPS対応クライアントを設定します。
4. **`out`フォルダそのものではなく、中のファイル・フォルダを**公開フォルダへ転送します。
5. `_next/`も必ず転送します。隠しファイルの`.htaccess`はクライアントの設定で表示してください。
6. `index.html`、`404.html`、記事フォルダ、`robots.txt`、`sitemap.xml`、画像等が配置されたことを確認します。

サーバーへ `.env.local`、`node_modules`、ソースコードを転送する必要はありません。Webベースの[ロリポップ！FTP](https://lolipop.jp/manual/user/ftp2-04/)も利用できますが、大量のファイルはフォルダ単位で転送できるクライアントを使う方が管理しやすくなります。

`public/.htaccess`はドメイン直下用のサンプルで、ビルド時に`out/.htaccess`へコピーされます。既存のWordPress用リライト等がある場合は、そのまま上書きせず統合してください。使えるディレクティブはサーバー設定に依存するため、配置後に確認します。

含まれる設定：404ページ、ディレクトリ一覧の禁止、テキスト圧縮、composer系ファイルと`vendor/`の公開拒否、セキュリティヘッダー（`X-Content-Type-Options`/`Referrer-Policy`/`X-Frame-Options`/`Permissions-Policy`/`Strict-Transport-Security`/`Content-Security-Policy`）、コンテンツ種別ごとのキャッシュ、検索インデックスJSONの`X-Robots-Tag: noindex`。`mod_headers`が無効なレンタルサーバーではヘッダー系が出ないため、配置後に `curl -I` でレスポンスヘッダーを確認してください。

## 7. 配置後の確認

- トップ、カテゴリ、記事詳細をそれぞれURLの直接入力で開ける。
- 記事URLでブラウザを再読み込みしても表示される。
- スマートフォンでメニュー・検索・記事が使える。
- 存在しないURLでHTTP 404になる（エラーページをHTTP 200で返さない）。
- ページソースのcanonicalが実際の公開URLになっている。
- 準備中は`noindex`、正式公開後は監修済み記事が`index`になっている。
- HTTPSへ統一する設定をサーバー管理画面等で行い、別ホスト名も正規ホストへ統一する。
- 連絡先のメールリンクを確認する。
- 正式公開後、Search Consoleで所有権を確認し、`/sitemap.xml`を送信する。

## 8. 更新するとき

記事を修正して`main`へpushすれば、GitHub Actionsがビルド・検査・デプロイまで自動で実行します（`DEPLOY_TARGET`の設定に応じた先）。ビルド環境がないレンタルサーバー上でソースだけ変更してもページは更新されません。

Actionsのデプロイは公開フォルダ全体を新しいビルドで原子的に入れ替えます（`.deploy-staging`で検証後にリネーム交換、失敗時は旧フォルダへ自動復旧、直前版はホーム直下の`.deploy-previous`に保持）。そのため転送中にアセットが欠けることはなく、削除した記事も入れ替えと同時に自動で消えます。

手動転送（§6）で更新する場合だけ、次を意識してください。新しい`_next`等のアセットを先にアップロードし、その後HTMLを更新すると、転送中に参照先が欠ける状況を減らせます。以前のアセットは移行確認まで保持します。削除した記事はサーバー上の旧フォルダも個別に確認して撤去し、必要に応じて適切な移転先への301リダイレクトをサーバー側に設定します。`out/`の上書きだけでは旧ファイルは削除されません。

## 9. Lolipopのお問い合わせフォーム

お問い合わせフォームは静的HTMLから`/contact.php`へPOSTします。PHPが利用できるLolipopでは、PHP用のPHPMailerを使ってLolipopのSMTP（`smtp.lolipop.jp`、通常は465/SSLまたは587/STARTTLS）から送信する構成を推奨します。Lolipopの管理画面・公式マニュアルで、契約プランのPHPとメールアカウントが有効であることを確認してください。

GitHub Actionsのデプロイでは、CIが `composer install --no-dev --working-dir=public` を実行して`vendor/`を生成し、アーカイブに同梱して自動で配置します（手元での実行は不要）。

```bash
composer install --no-dev --working-dir=public
```

手動転送（§6）の場合だけ、手元で上記を実行して生成した`public/vendor/`を`contact.php`と一緒に公開フォルダへ転送してください。Composerをサーバーで実行できない場合は、同じPHPメジャー・マイナーバージョンで手元に生成した`public/vendor/`を転送します。PHPMailerは`public/vendor/autoload.php`から読み込まれます。

SMTPなどの設定は、**公開フォルダの外に置く `contact-config.php`** に書きます。GitHub Actionsのデプロイは公開フォルダごと新しいビルドで入れ替えるため、公開フォルダ内に置いた設定や、`.htaccess`の`SetEnv`は消えます。また、Lolipopの共有サーバーには環境変数を設定する管理画面が通常ありません。

1. **GitHub Actionsを使う場合（推奨）**:[`deploy/contact-config.example.php`](../deploy/contact-config.example.php) に値を入力した内容を、Secrets **`LOLIPOP_CONTACT_CONFIG`** に登録します（`gh secret set LOLIPOP_CONTACT_CONFIG --repo mori-tt/regenerative-medicine < contact-config.php`）。デプロイ時に `~/contact-config.php` へ自動配置・`chmod 600`・php構文検査まで行われます。
2. **手動の場合**：同ファイルを `contact-config.php` にコピーして値を入力し、サーバー上の**公開フォルダの1つ上、または2つ上**に置きます（例：公開フォルダが `~/web/saisei-med.com/` ならホーム直下の `~/contact-config.php`）。`contact.php` は `DOCUMENT_ROOT` の1つ上・2つ上の順に探します。
3. 別の場所に置く場合は、環境変数 `CONTACT_CONFIG_FILE` にフルパスを指定します。
4. 設定ファイルが無いときは、従来どおり環境変数（`getenv`）を読みます。設定ファイルの値が優先されます。

`contact-config.php`はPHPファイルなので、万一URLで直接開かれても中身は表示されません。それでもGitには追加しないでください。以下は設定する項目です。

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
CONTACT_ALLOWED_ORIGINS=https://saisei-med.com
CONTACT_RATE_LIMIT_MAX=5
CONTACT_RATE_LIMIT_WINDOW=600
CONTACT_AUTO_REPLY=true
CONTACT_ALLOW_NATIVE_MAIL=false
TURNSTILE_SECRET=Cloudflareダッシュボードで発行したSecret key
TURNSTILE_HOSTNAMES=saisei-med.com
```

`CONTACT_FROM_EMAIL`は利用者のメールアドレスにせず、サイト側のメールアドレスに固定します。利用者のアドレスはReply-Toだけに設定し、なりすましやヘッダーインジェクションを避けます。フォームには医療相談を送らない旨を明記しています。配置後は実在するテストアドレスで、送信・返信・迷惑メール判定・エラー時の挙動を確認してください。

`CONTACT_ALLOWED_ORIGINS`にはフォームを置く本番ドメインを指定します。英語・中国語ページからの送信は、固定コードのカテゴリと元の言語ページを保持します。IPごとに既定で10分5件までに制限し、超過時はエラーにします。`CONTACT_AUTO_REPLY`は記入者への受付確認メールを制御します（既定 `true`。送信言語はフォームの言語ページに追従）。PHPMailerが配置されていない場合は、誤って`mail()`へフォールバックせず送信を停止します。互換経路を使う場合だけ`CONTACT_ALLOW_NATIVE_MAIL=true`を明示してください。Lolipopの公式仕様では、SMTP-AUTHとSSL/TLS、ポート465/587が案内されています。

フォームのボット対策にはCloudflare Turnstileを使っています。ウィジェットは確認画面に表示され、サイトキーはフロントの`src/components/contact-form.tsx`にあります（公開前提の値）。`TURNSTILE_SECRET`にダッシュボード発行のSecret keyを設定するとサーバー側検証が有効になり、`siteverify`の応答が `success===true`・`action=contact`・hostnameが`TURNSTILE_HOSTNAMES`（カンマ区切り・本番ドメインのみ。localhostは含めない）と一致する投稿だけを受け付けます。**未設定のままなら検証は無効**でフォームは従来どおり動くため、有効化する場合はSecret key登録後に本番で送信テストを行ってください。

GitHub PagesはPHPを実行しないため、確認用GitHub Pagesではフォーム送信は完了しません。フォームの実送信、SMTP、返信、迷惑メール判定は、PHPMailerとPHPを実行できる本番Lolipop上で確認します。

フォームで取得する情報をプライバシーポリシーに反映済みです。運営者名・所在地・保存期間などの実値は、公開前に必ず確定して掲載してください。

## 10. 広告

静的バナーは`src/content/ads.ts`に設定し、素材を`public/`へ置いて再ビルドします。開始・終了日時による自動更新はなく、掲載開始・終了時にも再ビルドと転送が必要です。リンクに`sponsored`を付けることだけで医療広告の適法性が確認されたことにはなりません。

GitHub Actions経由の自動デプロイは `deploy-lolipop.yml` に実装済みです（§4）。`DEPLOY_TARGET` を `both`/`lolipop` に設定するまでは転送は実行されません。

## 11. Cloudflare のキャッシュ設定(PageSpeed / TTFB 対策)

本番は Cloudflare プロキシ経由です。画像などの静的アセットは既定でエッジキャッシュされますが、**HTML は既定でキャッシュ対象外**(`cf-cache-status: DYNAMIC`)のため、毎回ロリポップのオリジンまで往復し TTFB が悪化します。Cloudflare ダッシュボードで HTML をエッジキャッシュする Cache Rule を作成してください。

1. Cloudflare ダッシュボード → 対象ゾーン → **Caching → Cache Rules → Create rule**。
2. Rule name: 例 `cache-static-site`。
3. When incoming requests match: **Custom filter expression** を選び、PHP エンドポイントを外す式にします。

   ```
   not (http.request.uri.path eq "/contact.php")
   ```

   問い合わせフォームのHTMLページ自体は静的なのでキャッシュして構いません。`contact.php` はPOST専用ですが、動的PHPはキャッシュ対象に含めない方が安全です(`vendor/`・`composer.json` は `.htaccess` で公開拒否済み)。

4. **Cache eligibility: Eligible for cache** をオン。**Edge TTL**: Ignore origin TTL で固定値(例 1時間。オリジンが `no-cache` を返すため `Respect origin` ではキャッシュされません)。**Browser TTL** は Respect origin のままにします(ブラウザには従来通り毎回再検証を返し、訪問者が古い版を見続けることを防ぎます)。
5. 保存後、数回アクセスして `curl -sI https://saisei-med.com/ | grep -i cf-cache-status` が `HIT` になればエッジ配信成功です。

### デプロイ後のパージは自動化済み

HTMLをキャッシュすると、**以降のデプロイ反映にはエッジのパージが必要**になります。`deploy-lolipop.yml` 末尾の `Purge Cloudflare cache` ステップが `purge_everything` を実行するので、次の Secrets を GitHub に登録するだけで有効になります(未登録ならスキップされ、デプロイ自体は成功扱い)。

1. Cloudflare ダッシュボード右上 → **My Profile → API Tokens → Create Token**。「Purge Cache」テンプレート、またはカスタムで Permissions: `Zone → Cache Purge → Purge`、Zone Resources: 対象ゾーンのみ。
2. ゾーンIDは Overview 右側「API」欄の **Zone ID**。
3. GitHub → Settings → Secrets and variables → Actions に `CLOUDFLARE_API_TOKEN` と `CLOUDFLARE_ZONE_ID` を登録。

土曜 cron による予約日公開の再デプロイも同じパージを通るため、登録しておけば公開日処理がエッジキャッシュに阻害されません。

補足:

- `beacon.min.js`(Cloudflare Web Analytics)はCSPで許可済みの意図的利用です。使わない場合はダッシュボードの Web Analytics で自動挿入をオフにし、`public/.htaccess` のCSPから `cloudflareinsights.com` 系を外してください。
