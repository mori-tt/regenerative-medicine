# SEOメタ情報監査

確認日：2026-09-21

## 実装済み

- 通常ページ、カテゴリ、記事、検索、英語・中国語ページに title と description を設定。
- canonical URL をページごとに生成。
- 日本語・英語・中国語の `hreflang` 相当として `alternates.languages` を生成。
- OGP の title、description、URL、言語、サイト名、画像を設定。
- X（Twitter）向けに `summary_large_image` を設定。
- 記事の公開後だけ Article 構造化データを出力し、未監修記事を検索エンジン向けの Article として扱わない。
- パンくず、WebSite、学会特集の構造化データを出力。
- sitemap は正式公開時の可視記事・確認済み記事だけを含める。
- `robots.txt` の sitemap 案内も、正式公開と検索公開が両方有効な場合だけ出力する。

## 現在の検索公開状態

現在は `publication.mode=preview` と `NEXT_PUBLIC_SITE_INDEXABLE=false` を前提にしているため、全体として noindex、sitemap なしの状態になる。これは公開前の意図した挙動である。

英語・中国語のページと翻訳記事も、現状は `allowIndex=false` で noindex にしている。翻訳の内容確認、監修記録、公開方針が整った後に、各ルートの `pageMetadata` の許可を見直す。

## 公開前に手作業で確認すること

- `NEXT_PUBLIC_SITE_URL` を実際のHTTPSドメインに設定する。
- `NEXT_PUBLIC_SITE_INDEXABLE=true` と `publication.mode=production` を同時に設定する。
- Google Search Console などで canonical、title、description、OGP画像、sitemap を確認する。
- 主要ページの検索結果表示で title と description が途中で不自然に切れていないか確認する。
- Search Console の URL検査で、未監修記事や検索ページが意図せずインデックスされていないことを確認する。
