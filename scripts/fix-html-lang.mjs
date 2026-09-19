// Static export always renders <html lang="ja"> from the root layout.
// Rewrite lang per locale path so crawlers and validators see the
// correct language without waiting for client-side hydration.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, join, relative } from "node:path";

const out = resolve("out");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
      ),
    )
  ).flat();
}

const files = (await walk(out)).filter((f) => f.endsWith(".html"));
let fixed = 0;
for (const file of files) {
  const rel = relative(out, file).replace(/\\/g, "/");
  const want =
    rel === "en.html" || rel.startsWith("en/") ? "en" : rel === "zh.html" || rel.startsWith("zh/") ? "zh-CN" : "ja";
  const html = await readFile(file, "utf8");
  if (html.includes(`<html lang="${want}"`)) continue;
  const next = html.includes("<html lang=")
    ? html.replace(/<html lang="[^"]*"/, `<html lang="${want}"`)
    : html.replace("<html", `<html lang="${want}"`);
  if (next !== html) {
    await writeFile(file, next);
    fixed++;
  }
}
console.log(`HTML lang fixed: ${fixed} files.`);
