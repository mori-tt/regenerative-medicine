import fs from "node:fs";
import { createHash } from "node:crypto";
import {
  readRawArticles,
  readEvidence,
  readTranslations,
  manuscriptHash,
} from "./lib/article-data.mjs";

const articles = readRawArticles();
const translations = readTranslations();
const evidence = readEvidence();
const records = JSON.parse(
  fs.readFileSync("src/content/article-review-records.json", "utf8"),
);
const pubmedMetadata = JSON.parse(
  fs.readFileSync("src/content/evidence/pubmed-metadata.json", "utf8"),
);
const issues = [];
const advisories = [];
const seen = new Set();
const paragraphOwners = new Map();
const suspicious =
  /必ず治る|完全に安全|副作用はない|guaranteed cure|no side effects|保证治愈/iu;
const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const normalizeTitle = (value) =>
  value
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{L}\p{N}]/gu, "");
function issue(slug, type, detail = "") {
  issues.push({ slug, type, detail });
}
const strings = (value) =>
  typeof value === "string"
    ? [value]
    : value && typeof value === "object"
      ? Object.values(value).flatMap(strings)
      : [];
const sourceURLs = new Set();
let paragraphs = 0;
for (const article of articles) {
  const slug = article.slug;
  if (seen.has(slug)) issue(slug, "duplicate_article");
  seen.add(slug);
  if (!records[slug]) issue(slug, "missing_review_record");
  const entry = evidence[slug];
  if (!entry) {
    issue(slug, "missing_topic_evidence");
    continue;
  }
  if (entry.category !== article.category) issue(slug, "wrong_category");
  const currentHash = manuscriptHash(article, entry, translations[slug]);
  if (records[slug]?.editorialEvidence?.contentHash !== currentHash)
    issue(
      slug,
      "stale_editorial_record",
      "Run generate-article-review-records after editing",
    );
  if (!entry.auditNote?.trim()) issue(slug, "missing_editorial_note");
  const ids = new Set();
  const articleURLs = new Set();
  const cited = new Set();
  for (const source of entry.sources ?? []) {
    if (!source.id || ids.has(source.id))
      issue(slug, "invalid_source_id", source.id);
    ids.add(source.id);
    if (articleURLs.has(source.url))
      issue(slug, "duplicate_source_url", source.url);
    articleURLs.add(source.url);
    if (!source.title?.trim() || !source.studyType?.trim())
      issue(slug, "missing_source_metadata", source.id);
    try {
      const url = new URL(source.url);
      if (url.protocol !== "https:") issue(slug, "non_https_source", source.id);
      if (
        url.hostname === "pubmed.ncbi.nlm.nih.gov" &&
        !/^\/\d+\/$/.test(url.pathname)
      )
        issue(slug, "non_article_pubmed_link", source.url);
      if (url.hostname === "pubmed.ncbi.nlm.nih.gov") {
        const pmid = url.pathname.split("/")[1];
        if (!pubmedMetadata[pmid])
          issue(slug, "missing_pubmed_metadata_verification", pmid);
        else {
          if (
            normalizeTitle(source.title) !==
            normalizeTitle(pubmedMetadata[pmid].title)
          )
            issue(slug, "pubmed_title_mismatch", pmid);
          if (
            pubmedMetadata[pmid].publicationTypes.some((type) =>
              /retracted publication|retraction of publication/i.test(type),
            )
          )
            issue(slug, "retracted_supporting_source", pmid);
        }
      }
      sourceURLs.add(source.url);
    } catch {
      issue(slug, "invalid_source_url", source.id);
    }
    if (
      !["abstract", "full-text", "official-guidance"].includes(
        source.accessedScope,
      )
    )
      issue(slug, "invalid_access_scope", source.id);
    if (
      !isoDate.test(source.checkedAt ?? "") ||
      Number.isNaN(Date.parse(source.checkedAt))
    )
      issue(slug, "invalid_source_check_date", source.id);
  }
  if (!ids.size) issue(slug, "no_sources");
  for (const locale of ["ja", "en", "zh"]) {
    const sections = entry.locales?.[locale]?.sections ?? [];
    if (sections.length < 2) issue(slug, "insufficient_topic_sections", locale);
    const all = sections.flatMap((section) => section.paragraphs ?? []);
    if (all.length < 3) issue(slug, "insufficient_topic_paragraphs", locale);
    if (
      locale === "ja" &&
      all.map((paragraph) => paragraph.text).join("").length < 250
    )
      advisories.push({ slug, type: "short_topic_expansion" });
    for (const section of sections) {
      if (!section.title?.trim()) issue(slug, "missing_heading", locale);
      for (const paragraph of section.paragraphs ?? []) {
        paragraphs++;
        if (!paragraph.text?.trim()) issue(slug, "empty_paragraph", locale);
        if (!paragraph.sourceIds?.length)
          issue(slug, "uncited_paragraph", locale);
        for (const id of paragraph.sourceIds ?? []) {
          if (!ids.has(id)) issue(slug, "unresolved_citation", id);
          cited.add(id);
        }
        if (suspicious.test(paragraph.text))
          advisories.push({ slug, type: "wording_requires_context", locale });
        const key = createHash("sha256")
          .update(paragraph.text ?? "")
          .digest("hex");
        const owner = paragraphOwners.get(key);
        if (owner && owner !== slug)
          advisories.push({ slug, type: "duplicate_paragraph", other: owner });
        paragraphOwners.set(key, slug);
      }
    }
  }
  for (const correction of entry.corrections ?? []) {
    if (
      !correction.old ||
      !correction.new ||
      !correction.reason ||
      !["ja", "en", "zh"].includes(correction.locale)
    )
      issue(slug, "invalid_correction");
    if (!correction.sourceIds?.length) issue(slug, "uncited_correction");
    for (const id of correction.sourceIds ?? []) {
      if (!ids.has(id)) issue(slug, "unresolved_correction_source", id);
      cited.add(id);
    }
    const original =
      correction.locale === "ja"
        ? article
        : {
            title: translations[slug]?.titles?.[correction.locale],
            body: translations[slug]?.bodies?.[correction.locale],
            primer: translations[slug]?.primer?.[correction.locale],
          };
    if (!strings(original).some((text) => text.includes(correction.old)))
      issue(
        slug,
        "unmatched_original_correction",
        `${correction.locale}: ${correction.old.slice(0, 60)}`,
      );
  }
  for (const id of ids)
    if (!cited.has(id)) advisories.push({ slug, type: "uncited_source", id });
}
for (const slug of Object.keys(evidence))
  if (!seen.has(slug)) issue(slug, "evidence_without_article");
for (const slug of Object.keys(records))
  if (!seen.has(slug)) issue(slug, "record_without_article");
console.log(
  JSON.stringify(
    {
      check:
        "Structural and citation-mapping validation only; not medical/legal approval",
      articles: articles.length,
      evidenceArticles: Object.keys(evidence).length,
      uniqueSourceURLs: sourceURLs.size,
      citedParagraphs: paragraphs,
      errors: issues,
      advisories,
    },
    null,
    2,
  ),
);
if (issues.length) process.exitCode = 1;
