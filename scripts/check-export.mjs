import { readdir, readFile, access } from "node:fs/promises";
import { resolve, join, relative } from "node:path";
import assert from "node:assert/strict";
import { readEvidence } from "./lib/article-data.mjs";
const evidence = readEvidence();
const evidencePages = { ja: 0, en: 0, zh: 0 };

const root = resolve("out");
async function targetForUrl(url) {
  const segments = url.split("/").filter(Boolean);
  for (let offset = 0; offset <= segments.length; offset++) {
    const relativePath = segments.slice(offset).join("/");
    const target = join(root, !relativePath || relativePath.endsWith("/") ? relativePath + "index.html" : relativePath);
    try {
      await access(target);
      return target;
    } catch {}
  }
  return null;
}
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
const files = await walk(root);
const pages = files.filter(
  (f) => f.endsWith(".html") && !f.includes("/_next/"),
);
const home = await readFile(join(root, "index.html"), "utf8");
const isPreview = /<meta name="robots" content="[^"]*noindex/.test(home);
let linkCount = 0;
for (const path of pages) {
  const html = await readFile(path, "utf8");
  const label = relative(root, path);
  const wantLang = label === "en.html" || label.startsWith("en/") ? "en" : label === "zh.html" || label.startsWith("zh/") ? "zh-CN" : "ja";
  const is404 =
    label === "404.html" ||
    label.startsWith("404/") ||
    label.startsWith("_not-found/") ||
    label.includes("/__unpublished__/");
  assert.match(
    html,
    new RegExp(`<html[^>]*lang="${wantLang}"`),
    `${label}: language must be ${wantLang}`,
  );
  if (!is404)
    assert.equal(
      (html.match(/<h1(?:\s|>)/g) || []).length,
      1,
      `${label}: exactly one h1 required`,
    );
  assert.match(html, /<title>[^<]+<\/title>/, `${label}: title missing`);
  assert.ok(!html.includes("undefined |"), `${label}: metadata contains undefined title`);
  if (!is404) {
    assert.match(
      html,
      /<meta name="description" content="[^"]+"/,
      `${label}: description missing`,
    );
    assert.match(
      html,
      /<link rel="canonical" href="https?:\/\//,
      `${label}: canonical missing`,
    );
    assert.match(html, /<meta property="og:title"/, `${label}: OGP missing`);
  }
  if (isPreview)
    assert.match(
      html,
      /<meta name="robots" content="[^"]*noindex/,
      `${label}: preview must be noindex`,
    );
  if (label.startsWith("search/"))
    assert.match(
      html,
      /<meta name="robots" content="[^"]*noindex/,
      "Search must be noindex",
    );
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ))
    JSON.parse(match[1]);
  for (const match of html.matchAll(
    /(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g,
  )) {
    const url = decodeURIComponent(match[1]);
    if (url.startsWith("//")) continue;
    const target = await targetForUrl(url);
    await Promise.resolve(target).catch(() =>
      assert.fail(`${label}: missing internal target ${url}`),
    );
    assert.ok(target, `${label}: missing internal target ${url}`);
    linkCount++;
  }
  const articleMatch = label.match(/^(?:(en|zh)\/)?articles\/([^/]+)\/index\.html$/);
  if (articleMatch && evidence[articleMatch[2]]) {
    const locale = articleMatch[1] ?? "ja";
    const entry = evidence[articleMatch[2]];
    const document = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    const escapeHtml = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");
    for (const section of entry.locales[locale].sections) {
      assert.ok(document.includes(escapeHtml(section.title)), `${label}: literature heading not rendered`);
      for (const paragraph of section.paragraphs) assert.ok(document.includes(escapeHtml(paragraph.text)), `${label}: literature paragraph not rendered`);
    }
    for (const correction of entry.corrections.filter((item) => item.locale === locale)) {
      assert.ok(document.includes(escapeHtml(correction.new)), `${label}: recorded correction was not rendered: ${correction.old.slice(0, 60)}`);
    }
    assert.match(document, /class="citation-links"/, `${label}: inline citations missing`);
    assert.match(document, /id="references-title"/, `${label}: reference list missing`);
    evidencePages[locale]++;
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(
      html.includes(`id="${match[1]}"`),
      `${label}: missing anchor ${match[1]}`,
    );
  }
  if (
    label.startsWith("articles/") &&
    label !== "articles/index.html" &&
    html.includes("医師監修は完了していません")
  ) {
    assert.match(
      html,
      /<meta name="robots" content="[^"]*noindex/,
      `${label}: unreviewed article must be noindex`,
    );
    assert.ok(
      !html.includes('"@type":"Article"'),
      `${label}: draft must not emit published Article schema`,
    );
  }
}
const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
if (isPreview)
  assert.ok(!sitemap.includes("<loc>"), "Preview sitemap must be empty");
assert.ok(!sitemap.includes("/search/"), "Search must not enter sitemap");
for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const path = new URL(match[1]).pathname;
  const target = await targetForUrl(path);
  assert.ok(target, `sitemap target is missing: ${path}`);
  const html = await readFile(target, "utf8");
  assert.ok(
    !/<meta name="robots" content="[^"]*noindex/.test(html),
    `Sitemap contains noindex URL: ${path}`,
  );
}
await access(join(root, ".htaccess"));
await access(join(root, "robots.txt"));
await access(join(root, "contact.php"));
await access(join(root, "composer.json"));
console.log("Rendered article literature coverage:", evidencePages);
console.log(
  `Static export OK: ${pages.length} HTML pages, ${linkCount} local links/assets checked; mode=${isPreview ? "preview (noindex)" : "public"}.`,
);
