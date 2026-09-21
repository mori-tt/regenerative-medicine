import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const code = ts.transpileModule(
  fs.readFileSync("src/lib/article-review.ts", "utf8"),
  {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  },
).outputText;
const { reviewRecordReady, publicationDate } = await import(
  `data:text/javascript;base64,${Buffer.from(code).toString("base64")}`
);
const today = "2026-09-22";
const ready = {
  medicalStatus: "reviewed",
  legalStatus: "reviewed",
  lastEditedAt: "2026-09-21",
  publishedAt: today,
  reviewer: {
    status: "reviewed",
    name: "Test reviewer",
    scope: "Test scope",
    reviewedAt: today,
  },
};
test("explicit review of current manuscript can pass", () =>
  assert.equal(reviewRecordReady(ready, true, today), true));
test("planned profile, missing legal review and source editing alone cannot release an article", () => {
  assert.equal(reviewRecordReady(ready, false, today), false);
  assert.equal(
    reviewRecordReady(
      { ...ready, legalStatus: "needs_legal_editorial_review" },
      true,
      today,
    ),
    false,
  );
  assert.equal(
    reviewRecordReady(
      { ...ready, medicalStatus: "needs_medical_review" },
      true,
      today,
    ),
    false,
  );
  assert.equal(
    reviewRecordReady({ publishAt: today, lastEditedAt: today }, true, today),
    false,
  );
  assert.equal(
    reviewRecordReady(
      { ...ready, reviewer: { ...ready.reviewer, status: "planned" } },
      true,
      today,
    ),
    false,
  );
});
test("edited-after-review, invalid or future dates fail", () => {
  assert.equal(
    reviewRecordReady({ ...ready, lastEditedAt: "2026-09-23" }, true, today),
    false,
  );
  for (const date of ["", "2026-09-31", "2026-09-23", "bad-date"]) {
    assert.equal(
      reviewRecordReady({ ...ready, publishedAt: date }, true, today),
      false,
    );
    assert.equal(
      reviewRecordReady(
        { ...ready, reviewer: { ...ready.reviewer, reviewedAt: date } },
        true,
        today,
      ),
      false,
    );
  }
});

test("production ignores preview time travel, previews can simulate scheduling", () => {
  const now = new Date("2026-09-21T16:00:00Z");
  assert.equal(publicationDate(now, "production", "2026-10-01"), "2026-09-22");
  assert.equal(publicationDate(now, "preview", "2026-10-01"), "2026-10-01");
  assert.equal(publicationDate(now, "preview", "2026-09-31"), "2026-09-22");
});

test("a translation-only amendment changes the editorial fingerprint", async () => {
  const { readRawArticles, readEvidence, readTranslations, manuscriptHash } =
    await import("../lib/article-data.mjs");
  const article = readRawArticles()[0];
  const evidence = readEvidence()[article.slug];
  const translations = readTranslations()[article.slug];
  const amended = structuredClone(translations);
  amended.titles.en.title += " updated";
  assert.notEqual(
    manuscriptHash(article, evidence, translations),
    manuscriptHash(article, evidence, amended),
  );
});
