/**
 * contact-form.tsx のフロントエンドカテゴリと public/contact.php の
 * $categoryLabels が一致しているか検証する。
 *
 * 背景: かつてフロントの "correction" が PHP のラベル表に無く、
 * 修正指摘が常にバリデーションエラーで送信できないバグがあった。
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const form = readFileSync(
  join(root, "src/components/contact-form.tsx"),
  "utf8",
);
const php = readFileSync(join(root, "public/contact.php"), "utf8");

// contact-form.tsx の options: [["key","label"], ...] から全ロケールのキーを集める
// 括弧のネストを考慮して options: [...] ブロック全体を抽出
function extractOptionsBlocks(str) {
  const results = [];
  let pos = 0;
  while (true) {
    const start = str.indexOf("options: [", pos);
    if (start === -1) break;
    const bracketStart = start + "options: ".length;
    let depth = 0;
    let i = bracketStart;
    for (; i < str.length; i++) {
      if (str[i] === "[") depth++;
      else if (str[i] === "]") {
        depth--;
        if (depth === 0) {
          results.push(str.slice(start, i + 1));
          break;
        }
      }
    }
    pos = i + 1;
  }
  return results;
}

const front = new Set();
const optionBlocks = extractOptionsBlocks(form);
for (const block of optionBlocks) {
  for (const pair of block.matchAll(/"([^"]+)",/g)) front.add(pair[1]);
}

// contact.php の $categoryLabels 配列キーを集める
const phpBlock = php.match(/\$categoryLabels\s*=\s*\[(.*?)\];/s)?.[1] ?? "";
const back = new Set(
  [...phpBlock.matchAll(/'([^']+)'\s*=>/g)].map((m) => m[1]),
);

const missingInPhp = [...front].filter((k) => !back.has(k));
const missingInFront = [...back].filter((k) => !front.has(k));

if (missingInPhp.length || missingInFront.length) {
  console.error("contact categories mismatch:");
  if (missingInPhp.length)
    console.error("  PHP に無い:", missingInPhp.join(", "));
  if (missingInFront.length)
    console.error("  フロントに無い:", missingInFront.join(", "));
  process.exit(1);
}
console.log(`contact categories OK: ${[...front].join(", ")}`);