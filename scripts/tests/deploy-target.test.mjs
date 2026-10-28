import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const EXPECTED = ["github-pages", "lolipop", "both", "none"];

const buildTarget = fs.readFileSync("scripts/build-target.mjs", "utf8");
const pagesWorkflow = fs.readFileSync(".github/workflows/deploy.yml", "utf8");
const lolipopWorkflow = fs.readFileSync(
  ".github/workflows/deploy-lolipop.yml",
  "utf8",
);

function sorted(values) {
  return [...values].sort();
}

test("build-target.mjs accepts exactly the shared DEPLOY_TARGET values", () => {
  const match = buildTarget.match(
    /\[((?:"[a-z-]+"(?:,\s*)?)+)\]\.includes\(target\)/,
  );
  assert.ok(match, "allowed-target list not found in build-target.mjs");
  const values = [...match[1].matchAll(/"([a-z-]+)"/g)].map((m) => m[1]);
  assert.deepEqual(sorted(values), sorted(EXPECTED));
});

for (const [name, file] of [
  ["deploy.yml", pagesWorkflow],
  ["deploy-lolipop.yml", lolipopWorkflow],
]) {
  test(`${name} validates the same DEPLOY_TARGET values`, () => {
    const match = file.match(/github-pages\|lolipop\|both\|none\)/);
    assert.ok(match, "case pattern with all four targets not found");
    const values = match[0].slice(0, -1).split("|");
    assert.deepEqual(sorted(values), sorted(EXPECTED));
  });
}

test("deploy.yml skips only on lolipop or none", () => {
  const gate = pagesWorkflow.match(
    /if: \$\{\{ vars\.DEPLOY_TARGET != 'lolipop' && vars\.DEPLOY_TARGET != 'none' \}\}/,
  );
  assert.ok(gate, "pages job gate not found or changed");
});

test("deploy-lolipop.yml runs on lolipop/both with legacy fallback", () => {
  const gate = lolipopWorkflow.match(
    /if: \$\{\{ vars\.DEPLOY_TARGET == 'lolipop' \|\| vars\.DEPLOY_TARGET == 'both' \|\| \(!vars\.DEPLOY_TARGET && vars\.LOLIPOP_DEPLOY_ENABLED == 'true'\) \}\}/,
  );
  assert.ok(gate, "lolipop job gate not found or changed");
});
