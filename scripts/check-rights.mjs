import fs from "node:fs";

const media = JSON.parse(
  fs.readFileSync("src/content/article-media.json", "utf8"),
);
const issues = [];

for (const [key, asset] of Object.entries(media.assets)) {
  if (asset.rightsStatus !== "verified") {
    issues.push(`${key}: rightsStatus=${asset.rightsStatus ?? "missing"}`);
  }
  if (!asset.sourceUrl || !asset.credit || !asset.license) {
    issues.push(`${key}: sourceUrl, credit and license are required`);
  }
}

if (issues.length) {
  console.error("Image rights are not verified for production:");
  for (const issue of issues) console.error(`- ${issue}`);
  console.error(
    "Record the exact asset URL, license terms, permission holder and verification date before production deployment.",
  );
  process.exit(1);
}

console.log(
  `Image rights verified: ${Object.keys(media.assets).length} assets`,
);
