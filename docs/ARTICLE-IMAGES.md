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

## 論文図表（CC BY）

- `msc-biodistribution-eggenhofer-2012.jpg`: Eggenhofer E ら "Mesenchymal stem cells are short-lived and do not migrate beyond the lungs after intravenous infusion"（Frontiers in Immunology, 2012, Figure 2）。Frontiers は CC BY のオープンアクセス誌で、帰属表示を付けて転載可能。記事「点滴で投与された幹細胞はどこへ行く？体内分布の研究」（slug: `stem-cell-biodistribution`）内の模式図の下に掲載。動物実験の一条件の結果である旨を図注に明記。
- 画像自体は取得元のプレビュー解像度（約390px幅）のまま。印刷品質の用途には原論文サイトから高解像度版の取得を推奨。
