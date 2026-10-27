# 公開手順書（Lolipop本番 + GitHub Pagesテストの同時デプロイ）

本番公開に必要な**手作業**と、GitHub Actionsでの運用手順をまとめた資料です。

**Lolipopへのデプロイ用ワークフローは、まだリポジトリに作っていません。** 公開時に §5 のコードをコピペして `.github/workflows/deploy-lolipop.yml` を作ります（それまでは、`main` へのpushでGitHub Pagesだけが更新されます）。一方、`.htaccess` のHTTPS・www統一や `contact.php` のPHP 7.4対応は実装済みです。

関連資料：[DEPLOYMENT.md](DEPLOYMENT.md)（仕組みの説明）、[DEPLOY-CHECKLIST.md](DEPLOY-CHECKLIST.md)（チェック項目）、[MANUAL-LEGAL-CHECKLIST.md](MANUAL-LEGAL-CHECKLIST.md)（法務・監修）、[PUBLISHING.md](PUBLISHING.md)（記事公開の仕組み）。

## 0. 全体像

`main` にpushすると、2つのワークフローが並行して動きます。

|              | GitHub Pages（テスト）                             | Lolipop（本番）                                                                                                                                                                |
| ------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ワークフロー | `.github/workflows/deploy.yml`（作成済み）         | `.github/workflows/deploy-lolipop.yml`（**未作成**。公開時に §5 をコピペして作る）                                                                                             |
| 起動         | `main` へのpush、手動                              | `main` へのpush（`src/**`・`public/**`・`scripts/**`・`deploy/**`・`package*.json`・`next.config.ts`・`tsconfig.json`・`.env.example` の変更時のみ）、手動、毎週土曜06:00(JST) |
| 有効化       | 常に有効                                           | ファイルを作り、かつ Variables `LOLIPOP_DEPLOY_ENABLED=true` を設定するまで配置されない                                                                                        |
| 記事         | 全251本（未監修含む）                              | 監修記録が確定した記事だけ（現在6本）                                                                                                                                          |
| 検索公開     | 常に `noindex`                                     | Variablesで制御                                                                                                                                                                |
| 問い合わせ   | 送信不可（PHPなし）                                | 送信可（PHP + PHPMailer）                                                                                                                                                      |
| URL          | `https://mori-tt.github.io/regenerative-medicine/` | 本番ドメイン（例：`https://saisei-med.com`）                                                                                                                                   |

注意：

- Variablesを変えただけではワークフローは起動しません。反映するには手動実行（§4）が必要です。
- 上記の `paths` に当てはまらない変更（`docs/` や `.github/` だけの変更）では、Lolipopは再デプロイされません。GitHub Pagesは `main` へのどのpushでも再デプロイされます。
- GitHub Pagesのテストサイトは、未監修の原稿を含む全記事をURLを知っていれば誰でも閲覧できます（`noindex` は閲覧制限ではありません）。公開したくない原稿をここに置かないでください。

## 手作業の全体チェックリスト（時系列）

詳細は各節にあります。上から順に進め、すべて終わったら公開できます。

**A. 公開の数週間前〜準備**

1. 運営者名・所在地・連絡先を確定する → §1-3
2. 千原良友先生の掲載・監修表示の許諾を得る → §1-3
3. 法務確認（プライバシーポリシー・利用規約・広告表記・医療広告）→ §1-3、[MANUAL-LEGAL-CHECKLIST.md](MANUAL-LEGAL-CHECKLIST.md)
4. 公開する記事（監修記録が確定した6本）の最終読み直し。追加で公開したい記事は監修記録を作る → [PUBLISHING.md](PUBLISHING.md)
5. Lolipopの契約・ドメイン・DNS・SSL・SSH・メール・PHPを整える → §1-1
6. GitHubの Pages・Secrets・Variables・Environment を設定する → §1-2、§4-1
7. `contact-config.php` をサーバーに置く → §2
8. SSHホスト鍵を登録する → §5

**B. 公開当日** 9. `deployDate` を公開日にして `main` へ → §6-2 10. 手元で本番設定のビルド確認 → §6-1 11. `deploy-lolipop.yml` を作成・コミット → §5 12. `LOLIPOP_DEPLOY_ENABLED=true` を設定して実行 → §6-2 13. 公開直後の動作確認（HTTPS、問い合わせ送信、フィード、OGP、実機）→ §6-3

**C. 公開後** 14. Search Console / Bing 登録・sitemap送信 → §6-4 15. 数日後にインデックス状況を確認 → §6-4 16. 運用（記事追加、英中の検索公開、ロールバック、パスワード変更）→ §7

## 1. 一度だけ行う準備（手作業）

### 1-1. Lolipop側

- [ ] 既存のサイトやファイルが公開フォルダにある場合は、先にバックアップする（デプロイは公開フォルダの中身を入れ替える）
- [ ] 本番ドメインを取得し、DNS（ネームサーバーまたはAレコード）をLolipopに向ける。反映には時間がかかる場合があるため、公開日より前に済ませる
- [ ] Lolipopの管理画面で**公開フォルダ**を対象ドメインに設定する（以下では `~/web/saisei-med.com/` を例にします。実際のパスは管理画面で確認）
- [ ] 独自SSLを有効にし、`https://` で表示できることを確認する（HSTSは `.htaccess` が出しますが、HTTPSが動いていることが前提です）
- [ ] **SSHが使える契約プランか確認し、SSHを有効化する。** ホスト `ssh.lolipop.jp`、ポート `2222`、ユーザー名・パスワードは管理画面の表示に従う。SSHが使えないプランの場合は §5 のFTPS代替を使う
- [ ] 問い合わせ用のメールアカウント（例：`info@saisei-med.com`）を作成する
- [ ] **`contact-config.php` を置く**（§2）
- [ ] Lolipopの対象ドメインのPHPバージョンを **8.2.35以上、8.3.36以上、8.4.27以上、または8.5.12以上** にする（PHP2shell脆弱性 CVE-2026-109618 / CVE-2026-109619 対策。`contact.php` は8.2以上で動作。可能なら8.3以上を推奨）
- [ ] ドメインの `www` 有無を決める（どちらかをもう一方へリダイレクト。§3）

### 1-2. GitHub側

- [ ] リポジトリ Settings → Pages → Source を **GitHub Actions** にする（コマンドなら下記）
- [ ] §4-1 の Secrets / Variables を登録する
- [ ] （推奨）Settings → Environments に `production` を作り、Required reviewers に自分を設定する。本番デプロイ前に承認画面が出て、誤pushによる即時公開を防げる（§5のワークフローで使用）
- [ ] （推奨）`main` のブランチ保護：直接pushを禁止し、PR経由にする
- [ ] リポジトリがprivateの場合、GitHub Pagesの利用可否はプランに依存する。テストサイトが不要になったら、Pages側の公開を停止する（Settings → Pages）

```bash
# GitHub Pagesの公開元をActionsに設定（UIでも可）
gh api -X POST repos/mori-tt/regenerative-medicine/pages -f build_type=workflow
```

### 1-3. 公開内容の確定（手作業）

- [ ] 運営者名・所在地・連絡先メールを確定する（`NEXT_PUBLIC_OPERATOR_NAME` / `NEXT_PUBLIC_OPERATOR_ADDRESS` / `NEXT_PUBLIC_CONTACT_EMAIL`。空のまま本番ビルドするとエラーで止まります）
- [ ] 千原良友先生の氏名・写真・肩書の掲載と「医師執筆・監修済み」の表示について**書面等の許諾**を得る。未了なら `NEXT_PUBLIC_MEDICAL_REVIEWER_ENABLED=false` でビルドする（§5の注意）
- [ ] `src/content/site-config.json` の `deployDate` を実際の公開日にする。画面の公開日は全記事これに揃う
- [ ] プライバシーポリシー・利用規約・広告表記・特定商取引等の法務確認（[MANUAL-LEGAL-CHECKLIST.md](MANUAL-LEGAL-CHECKLIST.md)）
- [ ] プライバシーポリシー・運営者情報に、実際の運営者名・所在地・問い合わせ情報の保存期間などの実値が入っていることを確認する（アクセス解析や広告配信を後から追加するなら、その時点でプライバシーポリシーも更新する）
- [ ] 公開する記事（監修記録が確定した記事）を最終読み直しし、画像（`article-media.json`）の出典表示も確認する
- [ ] OGP画像 `public/social-card*.png` の最終確認
- [ ] 画像の権利記録（`npm run check:rights` が通ること。本番ビルドで自動実行される）

## 2. 問い合わせフォームの設定ファイル（手作業）

Lolipopの共有サーバーには環境変数を設定する画面が通常ありません。また、デプロイは公開フォルダの中身を毎回削除するため、設定は**公開フォルダの外**に置きます。

```bash
# 1. 雛形をコピーして値を入力する（手元で）
cp deploy/contact-config.example.php /tmp/contact-config.php
$EDITOR /tmp/contact-config.php

# 2. サーバーのホーム直下（公開フォルダの1つ上か2つ上）へ送る
scp -P 2222 /tmp/contact-config.php <SSHユーザー>@ssh.lolipop.jp:~/contact-config.php

# 3. 読み取りを自分だけにする
ssh -p 2222 <SSHユーザー>@ssh.lolipop.jp 'chmod 600 ~/contact-config.php'

# 4. 手元のコピーを消す
rm /tmp/contact-config.php
```

- `contact.php` は `DOCUMENT_ROOT` の1つ上、2つ上の順に `contact-config.php` を探します。見つからない場所に置いた場合は、環境変数 `CONTACT_CONFIG_FILE` でフルパスを指定します。
- 必須は `CONTACT_TO_EMAIL`、`CONTACT_FROM_EMAIL`、`CONTACT_SMTP_USER`、`CONTACT_SMTP_PASS`、`CONTACT_ALLOWED_ORIGINS`（本番URL）。
- 初回デプロイ後に、実際のメールで送信・受信・返信・迷惑メール判定を確認する（§6-3）。

## 3. `.htaccess`（実装済み。確認だけ手作業）

`public/.htaccess` に、**HTTP→HTTPS** と **www→wwwなし** の301リダイレクトを実装済みです（ドメインは `HTTP_HOST` から取るため、設定の書き換えは不要）。手作業で確認してください。

- [ ] 正規URLを **wwwなし**にする方針でよいか決める。**wwwありに統一する場合**は `public/.htaccess` のwwwの2行を逆向きに書き換え、`LOLIPOP_SITE_URL` も `https://www.…` にする
- [ ] Lolipopの管理画面に常時SSL（HTTPS強制）の設定がある場合は、どちらか一方だけにする（二重にするとリダイレクトループの原因になる）
- [ ] すでに別サイト・WordPressなどが公開フォルダにある場合は、置き換えずに内容を統合する（デプロイは公開フォルダを丸ごと入れ替える）
- [ ] 公開後に `curl -sI http://ドメイン/` が `301` で `https://` に飛ぶことを確認する（§6-3）

## 4. GitHub Actions の設定（コピペ）

### 4-1. Secrets / Variables

**Secrets**（Settings → Secrets and variables → Actions → Secrets）

| 名前                      | 内容                                                               |
| ------------------------- | ------------------------------------------------------------------ |
| `LOLIPOP_SSH_USER`        | SSHユーザー名                                                      |
| `LOLIPOP_SSH_PASSWORD`    | SSHパスワード                                                      |
| `LOLIPOP_SSH_REMOTE_DIR`  | 公開フォルダ（例：`~/web/saisei-med.com`）。`/` やホーム自体は不可 |
| `LOLIPOP_SSH_KNOWN_HOSTS` | `ssh-keyscan -p 2222 ssh.lolipop.jp` の出力（§5の手順で登録）      |

**Variables**（同 → Variables）

| 名前                           | 本番公開時の値              | 備考                                                                |
| ------------------------------ | --------------------------- | ------------------------------------------------------------------- |
| `LOLIPOP_DEPLOY_ENABLED`       | `true`                      | これを設定するまでLolipopへは配置されない                           |
| `LOLIPOP_SITE_URL`             | `https://saisei-med.com`    | ドメインのルート。サブディレクトリ不可。wwwなしに統一する前提（§3） |
| `LOLIPOP_PUBLICATION_MODE`     | `production`                | `check:rights` が走る                                               |
| `LOLIPOP_SITE_INDEXABLE`       | `true`                      | 検索に出す。準備中は `false`                                        |
| `LOLIPOP_LOCALIZED_INDEXABLE`  | `false`                     | 英・中の翻訳確認後に `true`                                         |
| `NEXT_PUBLIC_CONTACT_EMAIL`    | 受信できるアドレス          | 必須                                                                |
| `NEXT_PUBLIC_OPERATOR_NAME`    | 運営者の正式名称            | 必須                                                                |
| `NEXT_PUBLIC_OPERATOR_ADDRESS` | 運営者の所在地              | 必須                                                                |
| `NEXT_PUBLIC_SITE_URL`         | `https://mori-tt.github.io` | GitHub Pages用（未設定でも既定値）                                  |

コマンドで登録する場合：

```bash
REPO=mori-tt/regenerative-medicine

# Secrets（値は対話入力。コマンド履歴に残らない）
gh secret set LOLIPOP_SSH_USER --repo $REPO
gh secret set LOLIPOP_SSH_PASSWORD --repo $REPO
gh secret set LOLIPOP_SSH_REMOTE_DIR --repo $REPO

# Variables（運営者情報は実際の値に置き換える）
gh variable set LOLIPOP_DEPLOY_ENABLED --body true --repo $REPO
gh variable set LOLIPOP_SITE_URL --body https://saisei-med.com --repo $REPO
gh variable set LOLIPOP_PUBLICATION_MODE --body production --repo $REPO
gh variable set LOLIPOP_SITE_INDEXABLE --body true --repo $REPO
gh variable set LOLIPOP_LOCALIZED_INDEXABLE --body false --repo $REPO
gh variable set NEXT_PUBLIC_CONTACT_EMAIL --body info@saisei-med.com --repo $REPO
gh variable set NEXT_PUBLIC_OPERATOR_NAME --body "運営者名" --repo $REPO
gh variable set NEXT_PUBLIC_OPERATOR_ADDRESS --body "所在地" --repo $REPO
```

### 4-2. 手動実行・確認コマンド

```bash
# 本番(Lolipop)だけを手動で再デプロイ（§5で deploy-lolipop.yml を作成した後）
gh workflow run deploy-lolipop.yml --repo mori-tt/regenerative-medicine

# テスト(GitHub Pages)だけを手動で再デプロイ
gh workflow run deploy.yml --repo mori-tt/regenerative-medicine

# 実行状況の確認
gh run list --repo mori-tt/regenerative-medicine --limit 5
gh run watch --repo mori-tt/regenerative-medicine
```

## 5. Lolipopワークフロー（公開時にコピペして作る）

**このリポジトリには `deploy-lolipop.yml` はまだありません。** 公開の準備ができたら、次の手順で作ります。

1. [ ] §1・§2・§4-1 の手作業（Lolipop側の準備、`contact-config.php`、Secrets / Variables、ホスト鍵の登録）を終える。ただし `LOLIPOP_DEPLOY_ENABLED` は**まだ設定しない**
2. [ ] 下の「ワークフロー全文」をコピーし、`.github/workflows/deploy-lolipop.yml` として保存する
3. [ ] 内容を確認してコミット（この時点では `LOLIPOP_DEPLOY_ENABLED` が未設定なのでジョブはスキップされる）
4. [ ] §6 の最終確認のあと、`LOLIPOP_DEPLOY_ENABLED=true` を設定して実行する（§6-2）

手元のクリップボードから作る場合（macOS）：

```bash
mkdir -p .github/workflows
pbpaste > .github/workflows/deploy-lolipop.yml   # 全文をコピーした状態で実行
```

このワークフローの特徴：

- 同時実行を防ぐ `concurrency`（古い実行が新しい実行を壊さない）
- `environment: production`（承認ゲート。§1-2でRequired reviewersを設定すると、デプロイ前に承認画面が出る。不要なら該当行を削除）
- SSHホスト鍵の固定（`StrictHostKeyChecking=yes`）。**Secrets `LOLIPOP_SSH_KNOWN_HOSTS` が未登録の間は失敗する**（意図した動作）
- ステージングへ展開・検査（`index.html` と `contact.php` の存在）してから公開フォルダを入れ替える。アップロードや展開に失敗しても、公開中のサイトは消えない
- デプロイ後のスモークテスト（主要URLが200、存在しないURLが404、indexableなのにnoindexになっていないこと、`vendor/` と `composer.json` が公開されていないこと）
- ビルド時にPHPMailer（`out/vendor/autoload.php`）の有無を検査
- Actionsのバージョンを `deploy.yml` と揃えている（`checkout@v6`、`setup-node@v5`）

### ワークフロー全文

```yaml
name: Deploy to Lolipop

# 本番（ロリポップ）。GitHub Pagesのテストサイトとは別系統で並行公開する。
# Variables LOLIPOP_DEPLOY_ENABLED=true を設定するまでスキップされる。

on:
  push:
    branches: [main]
    paths:
      - "src/**"
      - "public/**"
      - "scripts/**"
      - "deploy/**"
      - "package.json"
      - "package-lock.json"
      - "next.config.ts"
      - "tsconfig.json"
      - ".env.example"
  workflow_dispatch:
  # 公開日(deployDate)を跨ぐ再ビルド用。毎週土曜06:00（日本時間）。不要なら削除。
  schedule:
    - cron: "0 21 * * 5"

permissions:
  contents: read

concurrency:
  group: lolipop-deploy
  cancel-in-progress: false

env:
  NODE_VERSION: "22"
  SSH_HOST: ssh.lolipop.jp
  SSH_PORT: "2222"
  NEXT_PUBLIC_SITE_URL: ${{ vars.LOLIPOP_SITE_URL }}
  NEXT_PUBLIC_BASE_PATH: ""
  NEXT_PUBLIC_ASSET_PREFIX: ""
  NEXT_PUBLIC_ARTICLE_BUILD_MODE: scheduled
  NEXT_PUBLIC_PUBLICATION_MODE: ${{ vars.LOLIPOP_PUBLICATION_MODE || 'preview' }}
  NEXT_PUBLIC_SITE_INDEXABLE: ${{ vars.LOLIPOP_SITE_INDEXABLE || 'false' }}
  NEXT_PUBLIC_LOCALIZED_INDEXABLE: ${{ vars.LOLIPOP_LOCALIZED_INDEXABLE || 'false' }}

jobs:
  build-and-deploy:
    if: ${{ vars.LOLIPOP_DEPLOY_ENABLED == 'true' }}
    runs-on: ubuntu-latest
    # 承認ゲートが不要なら次の1行を削除する。
    environment: production
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v5
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: npm

      - name: Setup PHP and Composer
        uses: shivammathur/setup-php@v2
        with:
          # PHP2shell（CVE-2026-109618 / CVE-2026-109619）対策：必ず修正済みバージョンを使う
          # 対象例：8.2.35 / 8.3.36 / 8.4.27 / 8.5.12 以上。Lolipop側も同様に上げること
          php-version: "8.3"
          tools: composer:v2

      - name: Install dependencies
        run: npm ci

      - name: Install PHPMailer
        run: composer install --no-dev --working-dir=public --no-interaction --prefer-dist

      - name: Build scheduled Lolipop output
        env:
          NEXT_PUBLIC_CONTACT_EMAIL: ${{ vars.NEXT_PUBLIC_CONTACT_EMAIL }}
          NEXT_PUBLIC_OPERATOR_NAME: ${{ vars.NEXT_PUBLIC_OPERATOR_NAME }}
          NEXT_PUBLIC_OPERATOR_ADDRESS: ${{ vars.NEXT_PUBLIC_OPERATOR_ADDRESS }}
        run: |
          test -n "${NEXT_PUBLIC_SITE_URL}" || { echo "::error::LOLIPOP_SITE_URL is not configured"; exit 1; }
          npm run build:lolipop
          npm run check:export
          test -f out/vendor/autoload.php || { echo "::error::PHPMailer (out/vendor) is missing"; exit 1; }

      - name: Archive build output
        run: tar czf regenerative-medicine-out.tar.gz -C out .

      - name: Install sshpass
        run: sudo apt-get update && sudo apt-get install -y sshpass

      - name: Trust Lolipop SSH host key
        env:
          KNOWN_HOSTS: ${{ secrets.LOLIPOP_SSH_KNOWN_HOSTS }}
        run: |
          test -n "${KNOWN_HOSTS}" || { echo "::error::LOLIPOP_SSH_KNOWN_HOSTS is not configured"; exit 1; }
          mkdir -p ~/.ssh
          printf '%s\n' "${KNOWN_HOSTS}" > ~/.ssh/known_hosts

      - name: Deploy via SSH
        env:
          SSHPASS: ${{ secrets.LOLIPOP_SSH_PASSWORD }}
          SSH_USER: ${{ secrets.LOLIPOP_SSH_USER }}
          SSH_REMOTE_DIR: ${{ secrets.LOLIPOP_SSH_REMOTE_DIR }}
          SSH_ARCHIVE: regenerative-medicine-out.tar.gz
        run: |
          set -euo pipefail
          if [ -z "${SSHPASS}" ] || [ -z "${SSH_USER}" ] || [ -z "${SSH_REMOTE_DIR}" ]; then
            echo "::error::Required secrets are missing: LOLIPOP_SSH_PASSWORD, LOLIPOP_SSH_USER, LOLIPOP_SSH_REMOTE_DIR"
            exit 1
          fi

          SSH_TARGET="${SSH_USER}@${SSH_HOST}"
          SSH_OPTS=(-o StrictHostKeyChecking=yes -p "${SSH_PORT}")
          SCP_OPTS=(-o StrictHostKeyChecking=yes -P "${SSH_PORT}")

          REMOTE_HOME=$(sshpass -e ssh "${SSH_OPTS[@]}" "${SSH_TARGET}" 'printf "%s" "$HOME"')
          if [ -z "${REMOTE_HOME}" ] || [ "${REMOTE_HOME}" = "/" ]; then
            echo "::error::Unable to determine remote HOME. Deployment aborted."
            exit 1
          fi

          REMOTE_ROOT="${SSH_REMOTE_DIR%/}"
          if [[ "${REMOTE_ROOT}" == "~" ]]; then
            REMOTE_ROOT="${REMOTE_HOME}"
          elif [[ "${REMOTE_ROOT}" == "~/"* ]]; then
            REMOTE_ROOT="${REMOTE_HOME}/${REMOTE_ROOT#~/}"
          fi
          if [ -z "${REMOTE_ROOT}" ] || [ "${REMOTE_ROOT}" = "/" ] || [ "${REMOTE_ROOT}" = "${REMOTE_HOME}" ]; then
            echo "::error::SSH_REMOTE_DIR must be the site's public directory, not / or HOME."
            exit 1
          fi

          REMOTE_ARCHIVE="${REMOTE_HOME}/${SSH_ARCHIVE}"
          STAGE="${REMOTE_HOME}/.deploy-staging"

          # 1) アップロードして、ステージングに展開・検査する（ここで失敗しても公開中のサイトは無傷）
          sshpass -e scp "${SCP_OPTS[@]}" "${SSH_ARCHIVE}" "${SSH_TARGET}:${REMOTE_ARCHIVE}"
          sshpass -e ssh "${SSH_OPTS[@]}" "${SSH_TARGET}" \
            "set -e; rm -rf '${STAGE}'; mkdir -p '${STAGE}'; tar xzf '${REMOTE_ARCHIVE}' -C '${STAGE}'; test -f '${STAGE}/index.html'; test -f '${STAGE}/contact.php'"

          # 2) 公開フォルダを入れ替える（contact-config.php は公開フォルダの外にあるので消えない）
          sshpass -e ssh "${SSH_OPTS[@]}" "${SSH_TARGET}" \
            "set -e; mkdir -p '${REMOTE_ROOT}'; find '${REMOTE_ROOT}' -mindepth 1 -maxdepth 1 -exec rm -rf -- {} +; cp -a '${STAGE}'/. '${REMOTE_ROOT}'/; rm -rf '${STAGE}' '${REMOTE_ARCHIVE}'"

      - name: Smoke test
        env:
          SITE_URL: ${{ vars.LOLIPOP_SITE_URL }}
        run: |
          set -euo pipefail
          BASE="${SITE_URL%/}"
          for path in / /articles/ /robots.txt /sitemap.xml /feed.xml /contact/ /search/; do
            code=$(curl -s -o /dev/null -w '%{http_code}' --retry 3 --retry-delay 5 --retry-all-errors "${BASE}${path}")
            [ "${code}" = "200" ] || { echo "::error::${path} returned ${code}"; exit 1; }
          done
          code=$(curl -s -o /dev/null -w '%{http_code}' "${BASE}/this-page-does-not-exist/")
          [ "${code}" = "404" ] || { echo "::error::missing page returned ${code} (expected 404)"; exit 1; }
          if [ "${NEXT_PUBLIC_SITE_INDEXABLE}" = "true" ]; then
            html=$(curl -s "${BASE}/")
            if grep -q 'name="robots" content="[^"]*noindex' <<<"${html}"; then
              echo "::error::Home page is noindex although SITE_INDEXABLE=true"
              exit 1
            fi
          fi
          headers=$(curl -sI "${BASE}/")
          grep -qi '^x-frame-options' <<<"${headers}" || echo "::warning::Security headers are missing (mod_headers disabled?)"
          # vendor/ と composer.json は公開されないこと
          for path in /vendor/autoload.php /composer.json; do
            code=$(curl -s -o /dev/null -w '%{http_code}' "${BASE}${path}")
            case "${code}" in 403|404) ;; *) echo "::error::${path} must not be public (got ${code})"; exit 1 ;; esac
          done
```

### 手作業：SSHホスト鍵の登録（初回のみ）

出力されたフィンガープリントをLolipopの公式案内と照合してから登録してください。

```bash
ssh-keyscan -p 2222 ssh.lolipop.jp > /tmp/lolipop_known_hosts
ssh-keygen -lf /tmp/lolipop_known_hosts          # フィンガープリントを確認
gh secret set LOLIPOP_SSH_KNOWN_HOSTS --repo mori-tt/regenerative-medicine < /tmp/lolipop_known_hosts
rm /tmp/lolipop_known_hosts
```

### 注意

- `NEXT_PUBLIC_MEDICAL_REVIEWER_ENABLED` はワークフローから渡していません。`site-config.json` の値（現在 `true`）が使われます。許諾が未了で止めたいときは、ワークフローの `env:` に `NEXT_PUBLIC_MEDICAL_REVIEWER_ENABLED: "false"` を**文字列で固定**してください。`${{ vars.XXX }}` をそのまま渡すと、未設定のとき空文字になり「無効」と判定されます。
- GitHub Pages側（`deploy.yml`）は、このワークフローとは独立しています。`GITHUB_PAGES=true` により `basePath=/regenerative-medicine` が自動付与され、全記事・`noindex` で配信されます。
- `schedule`（毎週土曜06:00 JST）は、`deployDate` が未来の間だけ意味があります。公開日を過ぎたら削除して構いません。

### 本番だけタグで公開したい場合（任意）

テストは `main` へのpushごとに更新し、本番は承認した時点でだけ公開する運用にできます。上のワークフロー全文の `on:` を次のように置き換えます。

```yaml
on:
  push:
    tags: ["v*"]
  workflow_dispatch:
```

```bash
# 公開時：同じコミットでタグを打つとLolipopだけが動く
git tag v2026.10.15 && git push origin v2026.10.15
```

タグ運用にすると、公開日のスケジュール実行（`schedule`）は不要になります。

### FTPS代替（SSHが使えないプランの場合）

SSHが使えない場合は、上のワークフロー全文の `Install sshpass`・`Trust Lolipop SSH host key`・`Deploy via SSH` を次の2ステップに置き換えます。Secretsは `LOLIPOP_FTP_HOST`・`LOLIPOP_FTP_USER`・`LOLIPOP_FTP_PASSWORD`・`LOLIPOP_FTP_REMOTE_DIR` に変更します。**未検証**の案で、初回は検証用ディレクトリで試してください。`--delete` は公開フォルダ内の余分なファイルを消します。

```yaml
- name: Install lftp
  run: sudo apt-get update && sudo apt-get install -y lftp

- name: Deploy via FTPS
  env:
    FTP_HOST: ${{ secrets.LOLIPOP_FTP_HOST }}
    FTP_USER: ${{ secrets.LOLIPOP_FTP_USER }}
    FTP_PASSWORD: ${{ secrets.LOLIPOP_FTP_PASSWORD }}
    FTP_REMOTE_DIR: ${{ secrets.LOLIPOP_FTP_REMOTE_DIR }}
  run: |
    set -euo pipefail
    test -n "${FTP_REMOTE_DIR}" && [ "${FTP_REMOTE_DIR}" != "/" ] || { echo "::error::LOLIPOP_FTP_REMOTE_DIR is invalid"; exit 1; }
    lftp -u "${FTP_USER},${FTP_PASSWORD}" "${FTP_HOST}" <<EOF
    set ftp:ssl-force true
    set ftp:ssl-protect-data true
    set ssl:verify-certificate yes
    mirror --reverse --delete --verbose out "${FTP_REMOTE_DIR}"
    bye
    EOF
```

## 6. 公開当日の手順

### 6-1. 手元で最終確認

```bash
git switch main && git pull
npm ci
npm run typecheck

# 本番と同じ設定でビルドして検査（運営者情報は実際の値に置き換える）
NEXT_PUBLIC_SITE_URL=https://saisei-med.com \
NEXT_PUBLIC_PUBLICATION_MODE=production \
NEXT_PUBLIC_SITE_INDEXABLE=true \
NEXT_PUBLIC_CONTACT_EMAIL=info@saisei-med.com \
NEXT_PUBLIC_OPERATOR_NAME="運営者名" \
NEXT_PUBLIC_OPERATOR_ADDRESS="所在地" \
npm run build:lolipop && npm run check:export

npm run preview   # http://127.0.0.1:4173 で目視確認
```

確認すること：トップ、記事、カテゴリ（記事のあるものだけ表示）、問い合わせ、英語・中国語、スマホ幅。`out/` は検証用です。**手動で転送しないでください。**

### 6-2. 公開

1. [ ] `site-config.json` の `deployDate` を公開日にして `main` にマージ
2. [ ] §4-1 の Secrets / Variables が揃っていることを確認（`LOLIPOP_DEPLOY_ENABLED=true` は最後に設定）
3. [ ] §5 で `deploy-lolipop.yml` を作成・コミット済みであることを確認し、`main` にpush、または `gh workflow run deploy-lolipop.yml` で実行（`production` 環境の承認画面が出たら承認）
4. [ ] Actionsの2つのワークフロー（Pages・Lolipop）が成功したことを確認

### 6-3. 公開直後の確認（手作業）

```bash
SITE=https://saisei-med.com
curl -sI $SITE/ | head -20                       # 200、X-Frame-Options / CSP / HSTS
curl -sI http://saisei-med.com/ | head -3        # 301 → https
curl -s $SITE/robots.txt                         # Sitemap: が本番URL
curl -s $SITE/sitemap.xml | grep -c "<loc>"      # 公開記事 + 記事のあるカテゴリ + 固定ページ
curl -s -o /dev/null -w '%{http_code}\n' $SITE/xxxx/   # 404
curl -s $SITE/feed.xml | head -5
curl -s $SITE/articles/ips-cells-explained/ | grep -o 'name="robots"[^>]*'   # index, follow
```

- [ ] 問い合わせフォームから実際に送信し、受信・返信ができ、迷惑メールに入らない
- [ ] `https://mori-tt.github.io/regenerative-medicine/` が表示でき、`noindex` のままである
- [ ] OGP（[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)）で画像・タイトルが出る
- [ ] ブラウザのコンソールにCSP違反が出ていない
- [ ] iOS Safari / Android Chromeで、メニュー・検索・記事・フォームが使える

### 6-4. 検索エンジンへの登録（手作業）

- [ ] Google Search Console にドメインプロパティを登録（DNSのTXTレコードで所有確認）
- [ ] `https://saisei-med.com/sitemap.xml` を送信
- [ ] （任意）Bing Webmaster Tools に登録
- [ ] 数日後、カバレッジで「noindex により除外」が意図したページ（検索ページ・準備中カテゴリ・英中ページ）だけであることを確認

## 7. 公開後の運用

| やりたいこと           | 手順                                                                                                                                                           |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 記事の追加・修正       | PR → `main` にマージ。Pages・Lolipopの両方が自動更新                                                                                                           |
| 記事を新たに公開       | 監修・法務の確認を `article-review-records.json` に記録 → `main` にマージ（[PUBLISHING.md](PUBLISHING.md)）。記事のあるカテゴリはトップ・sitemapに自動で現れる |
| 英・中を検索公開       | 翻訳・監修範囲の確認後、Variables `LOLIPOP_LOCALIZED_INDEXABLE=true` → 手動実行（§4-2）                                                                        |
| 問い合わせ設定の変更   | サーバー上の `~/contact-config.php` を編集（再デプロイ不要）                                                                                                   |
| 前のバージョンに戻す   | 戻したいコミットのタグ、またはブランチを指定：`gh workflow run deploy-lolipop.yml --ref <タグまたはブランチ>`。または `git revert` → push                      |
| 本番の自動配置を止める | Variables `LOLIPOP_DEPLOY_ENABLED=false`（公開済みのサイトは消えない。消す場合は管理画面またはSSHで公開フォルダを空にする）                                    |
| パスワードの変更       | Lolipopでパスワードを変更 → Secrets `LOLIPOP_SSH_PASSWORD` と、メールなら `contact-config.php` を更新                                                          |
| 週次ビルドの停止       | 60日間リポジトリに動きがないと、GitHubはスケジュール実行を自動で停止する。`deployDate` が過去なら週次ビルド自体は不要                                          |

## 8. トラブルシュート

| 症状                                                                      | 原因・対処                                                                                                                   |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Lolipopのジョブが「skipped」になる                                        | Variables `LOLIPOP_DEPLOY_ENABLED` が `true` ではない                                                                        |
| 変更したのにLolipopが更新されない                                         | 変更が `paths` の対象外（`docs/` など）。手動実行する                                                                        |
| ビルドで「正式公開には運営者情報と連絡先が必要です」                      | `NEXT_PUBLIC_OPERATOR_NAME` / `ADDRESS` / `CONTACT_EMAIL` のVariablesが未設定                                                |
| ビルドで「検索公開する前に NEXT_PUBLIC_SITE_URL に本番のHTTPSドメインを」 | `LOLIPOP_SITE_URL` が未設定、`http://`、または `example.com`                                                                 |
| `check:rights` で失敗                                                     | `article-media.json` の全素材が `verified` でない（写真個別のURL・ライセンス・確認日を記録）                                 |
| 「PHPMailer (out/vendor) is missing」                                     | `composer install --working-dir=public` が失敗している                                                                       |
| SSHで `Host key verification failed`                                      | `LOLIPOP_SSH_KNOWN_HOSTS` が古い、または別ホストの鍵。§5の手順で取得し直す（鍵の変更を確認してから）                         |
| 問い合わせが「送信できませんでした」                                      | `~/contact-config.php` の場所・値、SMTP認証、`CONTACT_ALLOWED_ORIGINS`、PHPMailerの有無を確認。サーバーのPHPエラーログを見る |
| 公開後、記事が6本しかない                                                 | 仕様。監修記録が確定した記事だけが本番に出る。GitHub Pagesには全記事が出る                                                   |
| カテゴリが1つしか出ない                                                   | 仕様。記事のあるカテゴリだけが表示される                                                                                     |
| ヘッダー系（X-Frame-Options等）が出ない                                   | サーバーで `mod_headers` が無効。Lolipopのサポートに確認                                                                     |
| 画面の公開日が想定と違う                                                  | `site-config.json` の `deployDate`（または `NEXT_PUBLIC_DEPLOY_DATE`）を確認                                                 |
