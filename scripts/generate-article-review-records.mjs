import fs from "node:fs";
import {
  readRawArticles,
  readEvidence,
  readTranslations,
  manuscriptHash,
} from "./lib/article-data.mjs";

const articles = readRawArticles();
const translations = readTranslations();
const evidence = readEvidence();
const media = JSON.parse(
  fs.readFileSync("src/content/article-media.json", "utf8"),
);
const existingRecords = fs.existsSync("src/content/article-review-records.json")
  ? JSON.parse(
      fs.readFileSync("src/content/article-review-records.json", "utf8"),
    )
  : {};
const today = new Date("2026-09-21T00:00:00Z"); // Original scheduling epoch; do not shift existing plans.
const editDate =
  process.env.ARTICLE_EDIT_DATE ||
  new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(editDate))
  throw new Error("Invalid ARTICLE_EDIT_DATE");
const initialCandidates = new Set([
  "what-is-regenerative-medicine",
  "cells-tissues-organs",
  "three-approaches",
  "stem-cell-types",
  "ips-cells-explained",
  "es-cells-explained",
  "questions-before-treatment",
  "cost-and-insurance",
  "risks-and-safety",
  "stages-of-research",
]);
const slots = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];

function iso(date) {
  return date.toISOString().slice(0, 10);
}
function addDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}
function monthStart(offset) {
  return new Date(Date.UTC(2026, 10 + offset, 1));
}
function scheduledDate(index) {
  if (index < 10) return iso(addDays(today, index * 3));
  const monthOffset = Math.floor((index - 10) / 10);
  const slot = slots[(index - 10) % slots.length];
  const date = monthStart(monthOffset);
  date.setUTCDate(slot);
  return iso(date);
}
function flags(block, category) {
  const values = [];
  if (/効果|有効|改善|治る|治療/.test(block))
    values.push("effect_or_treatment_claim");
  if (/安全|副作用|合併症|感染|免疫|アレルギー|リスク/.test(block))
    values.push("safety_or_risk_claim");
  if (/費用|保険|自由診療|契約|返金|税|高額/.test(block))
    values.push("cost_or_system_claim");
  if (/承認|広告|薬機|医療法|治験|臨床研究|提供計画/.test(block))
    values.push("regulatory_or_advertising_claim");
  if (/119|救急|止血|薬の保管|献血/.test(block))
    values.push("public_health_instruction");
  if (category === "treatment") values.push("individual_decision_context");
  return [...new Set(values)];
}
const rawIndexBySlug = new Map(
  articles.map((article, index) => [article.slug, index]),
);
const sortedArticles = [...articles].sort(
  (a, b) =>
    Number(!initialCandidates.has(a.slug)) -
    Number(!initialCandidates.has(b.slug)),
);
const records = {};
for (const [index, article] of sortedArticles.entries()) {
  const { slug, title, category } = article;
  const block = JSON.stringify(article);
  const previous = existingRecords[slug] ?? {};
  const previousReviewer = previous.reviewer ?? {};
  const defaultImages =
    media.categoryDefaults[category] ?? media.categoryDefaults.basics;
  const defaultImageKey =
    defaultImages[rawIndexBySlug.get(slug) % defaultImages.length];
  const topicEvidence = evidence[slug];
  const contentHash = manuscriptHash(
    article,
    topicEvidence,
    translations[slug],
  );
  const previousHash = previous.editorialEvidence?.contentHash;
  const changed = previousHash !== contentHash;
  records[slug] = {
    ...previous,
    slug,
    title: topicEvidence.corrections
      .filter((item) => item.locale === "ja")
      .reduce((value, item) => value.replaceAll(item.old, item.new), title),
    lastEditedAt: changed
      ? editDate
      : (previous.lastEditedAt ?? article.updatedAt),
    imageKey: previous.imageKey ?? defaultImageKey,
    publishAt: previous.publishAt ?? scheduledDate(index),
    publishedAt: previous.publishedAt ?? "",
    releaseTrack: initialCandidates.has(slug)
      ? "initial-candidate"
      : "scheduled",
    medicalStatus: changed
      ? "needs_medical_review"
      : (previous.medicalStatus ?? "needs_medical_review"),
    legalStatus: changed
      ? "needs_legal_editorial_review"
      : (previous.legalStatus ?? "needs_legal_editorial_review"),
    evidenceStatus: "topic_sources_mapped_professional_review_pending",
    clarityStatus: "editorial_expansion_added_professional_readthrough_pending",
    riskFlags: flags(block, category),
    referenceCount: new Set(
      [...article.references, ...topicEvidence.sources].map(
        (source) => source.url,
      ),
    ).size,
    editorialEvidence: {
      revision: "literature-v2",
      contentHash,
      checkedAt:
        topicEvidence.sources
          .map((source) => source.checkedAt)
          .sort()
          .at(-1) ?? editDate,
      status: "editorial_source_review",
      sourceCount: topicEvidence.sources.length,
      note: topicEvidence.auditNote,
    },
    reviewer: {
      ...previousReviewer,
      status: previousReviewer.status ?? "planned",
      name: previousReviewer.name ?? "千原 良友",
      reviewedAt: previousReviewer.reviewedAt ?? "",
      scope: previousReviewer.scope ?? "",
      conflictOfInterest: previousReviewer.conflictOfInterest ?? "",
    },
    publishGate: "review_record_required",
    notes:
      "記事別文献と本文対応を編集確認。医師監修・法的承認ではない。確認範囲と残項目はevidence/*.jsonのauditNoteを参照。",
  };
}

if (Object.keys(records).length !== 223) {
  throw new Error(`記事数が想定と異なります: ${Object.keys(records).length}`);
}
fs.writeFileSync(
  "src/content/article-review-records.json",
  `${JSON.stringify(records, null, 2)}\n`,
);
console.log(`生成しました: ${Object.keys(records).length}記事`);
