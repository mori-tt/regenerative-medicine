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
- 未来の公開状態を確認するときだけ `NEXT_PUBLIC_PREVIEW_DATE=YYYY-MM-DD` を付けてビルドする。通常ビルドでは付けない

```bash
# 例：10/30時点の見え方を確認（out/ は確認後に通常ビルドで戻す）
NEXT_PUBLIC_PREVIEW_DATE=2026-10-30 npm run build && npm run preview
```

## 予約スケジュール

| 公開日 | slug | タイトル | カテゴリ |
| --- | --- | --- | --- |
| 2026-09-26 | thermometer-guide | 体温計の使い方：脇・耳・おでこの違い | basics |
| 2026-10-03 | blood-donation-basics | 献血の流れと条件：初めての方へ | basics |
| 2026-10-10 | microscope-world | 顕微鏡でのぞく世界：細胞観察入門 | basics |
| 2026-10-17 | ips-nobel-story | iPS細胞とノーベル賞：2012年の出来事 | stem-cells |
| 2026-10-24 | organoid-ethics | オルガノイドと意識の議論：脳モデルの倫理 | stem-cells |
| 2026-10-31 | home-culture-myth | 自宅で細胞培養はできません：誤解と理由 | stem-cells |
| 2026-11-07 | first-aid-basics | 応急手当の基礎：止血と119番 | treatment |
| 2026-11-14 | medicine-storage | 薬の保管方法：期限と置き場所 | treatment |
| 2026-11-21 | nobel-prize-guide | ノーベル生理学・医学賞の読み方 | research |
| 2026-11-28 | science-events | 科学イベントの探し方：公開講座と見学会 | research |

## 監修フロー（千原先生）

- 記事に監修が付くのは、`rawArticles` の該当記事に `review` を書いたときだけ
- 監修なしの記事ページには医師の氏名・写真・プロフィールを一切表示しない（方針）

```ts
{
  slug: "example",
  // ...
  review: {
    reviewedAt: "2026-10-01", // 確認日
    scope: "医学的表現と出典の整合を確認", // 確認範囲の記録
  },
}
```

- `review` を書くと自動で以下が切り替わる：記事ページの監修医師ボックス（氏名・資格・所属・監修日・確認範囲）＋監修済みラベル、`Article` 構造化データ、サイトマップ掲載、検索公開（本番のみ）
- 監修者情報（氏名・資格・所属・URL）は `src/content/site-config.json` の `medicalReviewer` が正本。記事側に医師情報を直書きしない
- 英中ページの確認範囲は日文のまま表示される。必要なら該当記事の `scope` に対応する訳を `article-bodies-*.ts` 側で持つ（現状は未訳運用）
- 利益相反・掲載許諾・修正履歴は `docs/LEGAL-REVIEW.md` の監査メモに記録する

## 新規追加の手順

1. `rawArticles` に日文を追加（`kind: "column"` と `publishAt` はコラム・予約の場合のみ）
2. `article-locales.ts` に英中タイトル・概要を追加
3. `article-bodies-*.ts` に英中本文を追加し、`localized-article.tsx` の `bodyBySlug` に統合済みか確認
4. `npm run build` と `npm run check:export` を実行し、ページ数（3言語×件数）とリンク到達を確認

## 更新日の方針

- 基本ガイドの `updatedAt` は 2026-08-01〜2026-09-19 に分散（執筆順に単調増加、約4本/日）
- コラムの `updatedAt` は公開日と同一
- 内容を修正した記事は、その修正日へ更新する
