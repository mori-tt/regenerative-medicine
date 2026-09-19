# 記事画像の管理

記事カードと記事本文のカバー画像は、`src/content/article-images.ts` で管理しています。
カテゴリごとの画像セットを変更すれば、記事本文を編集せずに表示画像を差し替えられます。

画像ファイルは `public/images/articles/` に同梱しています。外部CDNへの直リンクではないため、GitHub Pagesのリポジトリ配下やLolipopのサブドメインでも、`NEXT_PUBLIC_BASE_PATH` に追従して表示されます。

## 出典・利用条件

- `doctor-consultation.jpg`: [Doctor Patient Consultation - Pixabay](https://pixabay.com/photos/doctor-patient-consultation-5710152/)、Pixabay Content License
- その他の画像: Unsplashの無料画像を使用。各画像の検索元URL・ライセンス・クレジットは `src/content/article-images.ts` に記録しています。
- [Pixabay Content License Summary](https://pixabay.com/service/license-summary/)
- [Unsplash License](https://unsplash.com/license)

人物が写る画像は、治療効果や特定の医療機関を示すものではなく、記事のテーマを伝えるイメージとしてのみ使用します。
