# SEOメタ情報監査

確認日：2026-09-21

## 実装済み

- 通常ページ、カテゴリ、記事、検索、英語・中国語ページに title と description を設定。
- canonical URL をページごとに生成。
- 日本語・英語・中国語の `hreflang` 相当として `alternates.languages` を生成し、日本語の`ja-JP`、中国語の`zh-CN`、未対応言語向けの`x-default`を設定。
- OGP の title、description、URL、言語、サイト名、画像を設定。
- X（Twitter）向けに `summary_large_image` を設定。
- 記事の公開後だけ Article 構造化データを出力し、未監修記事を検索エンジン向けの Article として扱わない。
- パンくず、WebSite、学会特集の構造化データを出力。
- sitemap は正式公開時の可視記事・確認済み記事だけを含める。
- `robots.txt` の sitemap 案内も、正式公開と検索公開が両方有効な場合だけ出力する。

## 現在の検索公開状態

現在は `publication.mode=preview` と `NEXT_PUBLIC_SITE_INDEXABLE=false` を前提にしているため、全体として noindex、sitemap なしの状態になる。これは公開前の意図した挙動である。

英語・中国語のページと翻訳記事は、`NEXT_PUBLIC_LOCALIZED_INDEXABLE=false`の間はnoindexになる。主要な英語・中国語ルートは検索公開可能な設定に変更済みだが、翻訳の内容確認、監修記録、公開方針が整うまで環境変数で止める。検索ページは常にnoindexとする。

## 言語・地域設定の考え方

- Googleの表示言語は検索画面のメニュー言語であり、サイトの検索順位を直接決める設定ではない。
- 検索結果の言語設定は、結果に含めるページの言語に影響する。日本語検索では日本語ページ、英語検索では英語ページ、中国語検索では中国語ページが選ばれやすくなる。
- 地域設定は、現地の施設、ニュース、地図、サービスなどの地域性がある結果に影響する。言語と地域は別であり、中国語を選んだだけで中国向けになるわけではない。
- このサイトは日本語を`ja-JP`、英語を`en`、簡体字中国語を`zh-CN`として扱う。台湾・香港向けのページを追加する場合は、翻訳と地域情報を分けて`zh-TW`または`zh-HK`を用意する。
- `hreflang`は対応する言語・地域ページをGoogleへ伝えるための情報で、検索順位や表示結果を保証するものではない。

## 公開前に手作業で確認すること

- `NEXT_PUBLIC_SITE_URL` を実際のHTTPSドメインに設定する。
- `NEXT_PUBLIC_SITE_INDEXABLE=true` と `publication.mode=production` を同時に設定する。
- 英語・中国語を検索公開する場合は、翻訳・医学用語・監修範囲を確認して`NEXT_PUBLIC_LOCALIZED_INDEXABLE=true`を設定する。
- 日本語・英語・中国語の各ページで、canonicalとalternate URLが相互に対応していることを確認する。
- Google Search Console などで canonical、title、description、OGP画像、sitemap を確認する。
- 主要ページの検索結果表示で title と description が途中で不自然に切れていないか確認する。
- Search Console の URL検査で、未監修記事や検索ページが意図せずインデックスされていないことを確認する。
