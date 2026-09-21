import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { readEvidence } from "./lib/article-data.mjs";

const partial = process.argv.includes("--partial");
const evidence = readEvidence({ allowIncomplete: partial });
const pmids = [
  ...new Set(
    Object.values(evidence)
      .flatMap((entry) => entry.sources)
      .map(
        (source) =>
          source.url.match(
            /^https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)\/$/,
          )?.[1],
      )
      .filter(Boolean),
  ),
];
const metadata = {};
for (let offset = 0; offset < pmids.length; offset += 40) {
  const batch = pmids.slice(offset, offset + 40);
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${batch.join(",")}`;
  const response = JSON.parse(
    execFileSync("curl", ["-fLsS", "--retry", "2", "--max-time", "30", url], {
      encoding: "utf8",
    }),
  );
  for (const pmid of batch) {
    const value = response.result?.[pmid];
    if (!value?.title || value.error)
      throw new Error(`PubMed metadata unavailable: ${pmid}`);
    metadata[pmid] = {
      title: value.title,
      authors: value.authors?.map((author) => author.name) ?? [],
      journal: value.fulljournalname,
      year: value.pubdate?.match(/\d{4}/)?.[0] ?? "",
      doi: value.articleids?.find((id) => id.idtype === "doi")?.value ?? "",
      publicationTypes: value.pubtype ?? [],
      checkedAt: new Date(Date.now() + 9 * 3600 * 1000)
        .toISOString()
        .slice(0, 10),
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 400));
}
function normalize(value) {
  return value
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{L}\p{N}]/gu, "");
}
const mismatches = [];
for (const [slug, entry] of Object.entries(evidence)) {
  for (const source of entry.sources) {
    const pmid = source.url.match(
      /^https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)\/$/,
    )?.[1];
    if (!pmid) continue;
    if (normalize(source.title) !== normalize(metadata[pmid].title))
      mismatches.push({
        slug,
        pmid,
        listed: source.title,
        pubmed: metadata[pmid].title,
      });
    if (
      metadata[pmid].publicationTypes.some((type) =>
        /retracted publication|retraction of publication/i.test(type),
      )
    ) {
      mismatches.push({
        slug,
        pmid,
        warning: "Retraction flagged; do not use as supporting evidence",
      });
    }
  }
}
fs.writeFileSync(
  "src/content/evidence/pubmed-metadata.json",
  JSON.stringify(metadata, null, 2) + "\n",
);
fs.writeFileSync(
  "/tmp/regenerative-pubmed-mismatches.json",
  JSON.stringify(mismatches, null, 2) + "\n",
);
console.log(
  JSON.stringify(
    {
      partial,
      verifiedPmids: pmids.length,
      mismatches,
      scope:
        "Bibliographic identity only, not claim validity or exhaustive retraction search",
    },
    null,
    2,
  ),
);
if (mismatches.length) process.exitCode = 1;
