# 基本ガイドとコラムの運用（予約公開の仕組み）

記事は `src/content/articles.ts` の `rawArticles` に集約し、英中訳は `article-locales.ts`（見出し）と `article-bodies-*.ts`（本文）に置く。カテゴリと言語をまたぐ一覧・検索・関連記事・サイトマップは、この集約データから自動生成される。

## 区分の定義

| 区分 | `kind` | 表示 | 内容の目安 |
| --- | --- | --- | --- |
| 基本ガイド | 未指定（`core` 扱い） | カテゴリ頁の「基本ガイド」節 | 仕組み・制度・手続き・読み方など、順に学ぶ体系的な解説 |
| コラム | `"column"` | カテゴリ頁の「コラム」節（パネル＋バッジ付き） | 季節の話題・研究こぼれ話・暮らしの実用情報など、読みもの |

区分は節の見せ方だけを決める。`kind` の変更は該当記事の1行追加・削除で完結する。

- 見出し：基本ガイド / コラム（EN: Guides / Columns、ZH: 指南 / 专栏）
- コラム節は tint パネル＋左アクセント＋`COLUMN` eyebrow、コラム記事カードには「コラム」バッジが付く
- 公開前の予告表示はしない（方針）。節自体も未公開のみの間は出ない

## 予約公開（`publishAt`）

- `publishAt: "YYYY-MM-DD"` を持つ記事は、その日付が来るまで **JSONに保存されていても存在しない扱い** になる
- 除外範囲：記事ページ生成（日英中）、記事一覧、カテゴリ、検索、関連記事、ホーム抜粋、サイトマップ
- 判定日は日本時間の当日。ビルド時に確定する（静的書き出しのため、公開は次回ビルド以降に反映）
- 未来の公開状態を確認するときだけpreviewモードで `NEXT_PUBLIC_PREVIEW_DATE=YYYY-MM-DD` を付けてビルドする。本番モードはこの値を無視し、日本時間の実日付で判定する

```bash
# 例：10/30時点の見え方を確認（out/ は確認後に通常ビルドで戻す）
NEXT_PUBLIC_PUBLICATION_MODE=preview NEXT_PUBLIC_PREVIEW_DATE=2026-10-30 npm run build && npm run preview
```

## 予約スケジュール

公開予定日・実公開日・最終編集日は `src/content/article-review-records.json` を正本にします。本文の古い日付や例示用の表から再設定しません。月10件以内を `npm run check:article-schedule` で検査します。

## 監修・公開フロー（記事別JSON）

記事ごとの `article-review-records.json` に、実際の確認後だけ次を記録します。下記は書式の説明であり、確認前に一括コピーしないでください。

```json
{
  "medicalStatus": "reviewed",
  "legalStatus": "reviewed",
  "publishedAt": "実際の初回公開日 YYYY-MM-DD",
  "reviewer": {
    "status": "reviewed",
    "name": "site-config.jsonの監修者名と一致する実名",
    "reviewedAt": "実際の確認日 YYYY-MM-DD",
    "scope": "確認した本文・文献・翻訳等の範囲",
    "conflictOfInterest": "申告内容"
  }
}
```

`site-config.json` の `medicalReviewer.enabled`（または対応する環境変数）も、本人の許諾と実確認を得たあとに有効化します。plannedのみ、空欄の記録、未来の監修日、最終編集日より古い監修日では公開判定を通過しません。原稿内の旧 `review` メモは公開許可として使いません。

本番では、上記の確認・実公開日・公開予定日の条件を満たした記事だけを生成します。GitHub Pages確認用は全原稿をnoindexで表示します。文献の編集確認は専門家の監修とは別に記録し、原稿変更後の台帳再生成では再確認待ちに戻します。記録上の合格だけで、実際に監修・法的確認が行われたことを保証するものではありません。

## 新規追加の手順

1. `rawArticles` に日文を追加（`kind: "column"` と `publishAt` はコラム・予約の場合のみ）
2. `article-locales.ts` に英中タイトル・概要を追加
3. `article-bodies-*.ts` に英中本文を追加し、`localized-article.tsx` の `bodyBySlug` に統合済みか確認
4. 主題に対応するevidence JSONを追加し、公開予定日・画像・監修状態を台帳へ登録。記事総数が変わる場合は生成・スケジュール検査の件数ガードも更新
5. 下記の文献検査・台帳更新・ビルド検査を順番に実行し、3言語の表示とリンク到達を確認

## 更新日の方針

- 最終編集日は、実際に原稿を改訂した日を記事台帳に記録します。
- 公開予定日・実公開日・監修日は別々の情報です。文献を追加した日を初回公開日や監修日へ流用しません。

## 記事別の文献改稿（2026-09-22以降）

追加本文・引用先・元原稿の訂正は `src/content/evidence/` の4ファイルで管理します。`basics.json`、`stem-cells.json`、`treatment.json`、`research.json` の記事slugがキーです。各記事の `locales.ja/en/zh.sections` が追加本文、段落の `sourceIds` が対応する出典です。サイトでは出典番号から参考文献欄へ移動できます。

`sources` は論文・公的資料の正式タイトル、URL、研究の種類、実際の閲覧範囲、確認日を記録します。`abstract` は抄録確認、`full-text` は本文確認、`official-guidance` は公的・学会等の資料確認です。番号やリンクを足すだけで主張を検証したことにはしません。学術論文が適さない税制・保険・行政手続の記事では日本の公的資料を優先します。

`corrections` は元の文章・訂正文・理由・出典を保持し、表示時に適用します。元原稿を後で直接書き換えた場合は訂正記録との対応も更新してください。`auditNote` は記事固有の注意点や確認範囲です。公開予定日・写真は引き続き `article-review-records.json` で管理します。

```bash
npm run check:pubmed             # PubMedの書誌情報をNCBIへ照会（ネットワーク必須）
node scripts/generate-article-review-records.mjs
npm run check:article-content    # 記事・3言語・出典IDの構造チェック
npm run report:article-evidence  # 記事別の改稿一覧をMDへ出力
npm run build:github-pages
npm run check:export             # ビルド完了後に、本文・出典・訂正文の表示も検査
```

日本語原稿・英中訳・文献を変更した記事は実際の編集日を更新し、医師監修・法務確認状態を再確認待ちに戻します。予定日を編集日に置き換えたり、編集日を実公開日・監修日に転記したりしません。既存の公開予定日と画像キーは台帳再生成で維持します。

構造チェックの合格は医学的・法的な承認ではありません。記事別の変更量と残項目は [ARTICLE-LITERATURE-AUDIT.md](./ARTICLE-LITERATURE-AUDIT.md)、権利処理と手作業は [LITERATURE-EDITORIAL-POLICY.md](./LITERATURE-EDITORIAL-POLICY.md) を参照してください。
