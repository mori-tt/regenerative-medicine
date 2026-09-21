import fs from "node:fs";
import { readRawArticles, readEvidence } from "./lib/article-data.mjs";
const articles = readRawArticles();
const evidence = readEvidence();
const urls = new Set(
  Object.values(evidence).flatMap((entry) =>
    entry.sources.map((source) => source.url),
  ),
);
const pmids = [...urls].filter((url) =>
  url.startsWith("https://pubmed.ncbi.nlm.nih.gov/"),
);
const corrections = Object.values(evidence).flatMap(
  (entry) => entry.corrections,
);
const escape = (value) => value.replaceAll("|", "／").replaceAll("\n", " ");
const rows = articles.map((article) => {
  const entry = evidence[article.slug];
  const displayTitle = entry.corrections
    .filter((item) => item.locale === "ja")
    .reduce(
      (value, item) => value.replaceAll(item.old, item.new),
      article.title,
    );
  const chars = entry.locales.ja.sections
    .flatMap((section) => section.paragraphs)
    .map((paragraph) => paragraph.text)
    .join("").length;
  const access = [
    ...new Set(entry.sources.map((source) => source.accessedScope)),
  ].join(" / ");
  return `| ${article.slug} | ${escape(displayTitle)} | ${chars} | ${entry.sources.length} | ${entry.corrections.length} | ${access} | ${escape(entry.auditNote)} |`;
});
const text = `# 記事別の文献改稿台帳（2026-09-22）

対象は /articles/ 配下の全${articles.length}記事と英語・中国語版です。文献を使った編集改稿であり、医師監修や法的適合性の確定ではありません。独立した学会紹介ページ /jsrm/ と固定ページはこの208件に含みません。

- 記事別追加本文：${Object.keys(evidence).length}件、各3言語。
- 参照先：重複を除いて${urls.size} URL（うちPubMed ${pmids.length}件）。公的資料、原著、レビュー等を含みます。
- 元原稿の訂正記録：${corrections.length}件（言語別）。
- 数値は構造検査で集計したものです。検索の網羅性、すべての主張の正しさ、撤回の網羅的確認を保証する数値ではありません。

## 読み方

「追加字数」は日本語の個別追加本文のみで、見出し・既存本文・共通注意書きを除きます。「参照数」は記事内の追加・訂正の出典数です。abstract は抄録確認、full-text は本文確認、official-guidance は公式・学会等の資料確認です。閲覧できなかった本文を確認済みとは扱いません。個別の限界は最終列とJSONに記録しています。

## 記事一覧

| slug | 記事名 | 追加字数 | 参照数 | 訂正数 | 確認範囲 | 編集上の留意点・残項目 |
| --- | --- | ---: | ---: | ---: | --- | --- |
${rows.join("\n")}

## 管理と再確認

- 本文・出典・対応関係：\`src/content/evidence/{basics,stem-cells,treatment,research}.json\`。
- 出典書誌の照合：\`npm run check:pubmed\`（NCBIへのネットワーク接続が必要。書誌照合であり医学的妥当性の検証ではありません）。
- 構造確認：\`npm run check:article-content\`。未参照IDや言語欠落などがある場合は失敗します。
- 台帳更新：\`node scripts/generate-article-review-records.mjs\`。既存の公開予定日・画像・監修者の記録を保持します。原稿の変更時は専門家確認状態を未確認に戻し、編集記録を別に付けます。
- この表の再生成：\`node scripts/report-article-evidence.mjs\`。
- 人が行う契約・許諾・医学監修・広告関係の確認：[文献編集方針](LITERATURE-EDITORIAL-POLICY.md)。
`;
fs.writeFileSync("docs/ARTICLE-LITERATURE-AUDIT.md", text);
console.log(`Wrote article-by-article report: ${articles.length} articles`);
