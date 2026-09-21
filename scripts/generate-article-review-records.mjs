import fs from "node:fs";

const source = fs.readFileSync("src/content/articles.ts", "utf8");
const existingRecords = fs.existsSync("src/content/article-review-records.json")
  ? JSON.parse(fs.readFileSync("src/content/article-review-records.json", "utf8"))
  : {};
const start = source.indexOf("const rawArticles:");
const end = source.indexOf("type ArticleDepth:");
const body = source.slice(start, end);
const blockPattern = /\n  \{\n    slug: "([^"]+)",\n    title: "((?:[^"\\]|\\.)*)",([\s\S]*?)(?=\n  \},\n  \{|\n\];)/g;
const today = new Date("2026-09-21T00:00:00Z");
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
  if (/効果|有効|改善|治る|治療/.test(block)) values.push("effect_or_treatment_claim");
  if (/安全|副作用|合併症|感染|免疫|アレルギー|リスク/.test(block)) values.push("safety_or_risk_claim");
  if (/費用|保険|自由診療|契約|返金|税|高額/.test(block)) values.push("cost_or_system_claim");
  if (/承認|広告|薬機|医療法|治験|臨床研究|提供計画/.test(block)) values.push("regulatory_or_advertising_claim");
  if (/119|救急|止血|薬の保管|献血/.test(block)) values.push("public_health_instruction");
  if (category === "treatment") values.push("individual_decision_context");
  return [...new Set(values)];
}
function categoryFrom(block) {
  return block.match(/\n    category: "([^"]+)"/)?.[1] ?? "unknown";
}
function referenceCount(block) {
  const match = block.match(/\n    references: \[([^\]]*)\]/s);
  return match ? (match[1].match(/\b[a-zA-Z][a-zA-Z0-9]*\b/g) ?? []).length : 0;
}
function updatedAtFrom(block) {
  return block.match(/\n    updatedAt: "(\d{4}-\d{2}-\d{2})"/)?.[1] ?? "";
}

const matches = [...body.matchAll(blockPattern)].sort((a, b) => {
  const aInitial = initialCandidates.has(a[1]) ? 0 : 1;
  const bInitial = initialCandidates.has(b[1]) ? 0 : 1;
  return aInitial - bInitial;
});
const records = {};
for (const [index, match] of matches.entries()) {
  const slug = match[1];
  const title = match[2];
  const block = match[3];
  const category = categoryFrom(block);
  const previous = existingRecords[slug] ?? {};
  const previousReviewer = previous.reviewer ?? {};
  records[slug] = {
    slug,
    title,
    lastEditedAt: updatedAtFrom(block),
    publishAt: scheduledDate(index),
    publishedAt: previous.publishedAt ?? "",
    releaseTrack: initialCandidates.has(slug) ? "initial-candidate" : "scheduled",
    medicalStatus: "needs_medical_review",
    legalStatus: "needs_legal_editorial_review",
    evidenceStatus: referenceCount(block) > 0 ? "sources_listed_manual_verification_required" : "missing_sources",
    clarityStatus: "needs_manual_readthrough",
    riskFlags: flags(block, category),
    referenceCount: referenceCount(block),
    reviewer: {
      status: previousReviewer.status ?? "planned",
      name: previousReviewer.name ?? "千原 良友",
      reviewedAt: previousReviewer.reviewedAt ?? "",
      scope: previousReviewer.scope ?? "",
      conflictOfInterest: previousReviewer.conflictOfInterest ?? "",
    },
    publishGate: "review_record_required",
    notes: "自動監査による仮判定。医学的・法的な確認完了を意味しない。",
  };
}

if (Object.keys(records).length !== 208) {
  throw new Error(`記事数が想定と異なります: ${Object.keys(records).length}`);
}
fs.writeFileSync("src/content/article-review-records.json", `${JSON.stringify(records, null, 2)}\n`);
console.log(`生成しました: ${Object.keys(records).length}記事`);
