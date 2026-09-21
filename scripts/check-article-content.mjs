import fs from "node:fs";

const source = fs.readFileSync("src/content/articles.ts", "utf8");
const records = JSON.parse(fs.readFileSync("src/content/article-review-records.json", "utf8"));
const start = source.indexOf("const rawArticles:");
const end = source.indexOf("type ArticleDepth:");
const body = source.slice(start, end);
const pattern = /\n  \{\n    slug: "([^"]+)",\n    title: "((?:[^"\\]|\\.)*)",([\s\S]*?)(?=\n  \},\n  \{|\n\];)/g;
const prohibited = /必ず(?!しも)|確実に|絶対に|完全に安全|副作用はない|必ず治る|おすすめです|最先端|世界初|No\. ?1|唯一の治療/gi;
const sharedMedicalContext = source.includes("evidenceSectionsByCategory") && source.includes("-evidence-notes");
const issues = [];
const slugs = new Set();
for (const match of body.matchAll(pattern)) {
  const slug = match[1];
  const block = match[3];
  slugs.add(slug);
  if (!records[slug]) issues.push({ slug, type: "missing_review_record" });
  if (!/references:\s*\[[^\]]+\]/s.test(block)) issues.push({ slug, type: "missing_references" });
  for (const found of block.matchAll(prohibited)) issues.push({ slug, type: "promotional_or_absolute_word", text: found[0] });
  // Mapped articles receive a category-specific evidence/limitations section in articles.ts.
  // Keep this check for raw manuscripts, while recognizing the shared final-page safety layer.
  if (!/医師|医療|相談|確認/.test(block) && !sharedMedicalContext) issues.push({ slug, type: "missing_medical_context_check" });
}
for (const slug of Object.keys(records)) if (!slugs.has(slug)) issues.push({ slug, type: "record_without_article" });
const counts = issues.reduce((map, issue) => {
  map[issue.type] = (map[issue.type] ?? 0) + 1;
  return map;
}, {});
console.log(JSON.stringify({ articles: slugs.size, sharedMedicalContext, issues: issues.length, issueCounts: counts, samples: issues.slice(0, 30) }, null, 2));
