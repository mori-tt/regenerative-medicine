import fs from "node:fs";
import path from "node:path";

const records = JSON.parse(fs.readFileSync("src/content/article-review-records.json", "utf8"));
const media = JSON.parse(fs.readFileSync("src/content/article-media.json", "utf8"));
const entries = Object.values(records);
const today = "2026-09-21";
const dates = entries.map((record) => record.publishAt);
const duplicateDates = dates.filter((date, index) => dates.indexOf(date) !== index);
const missing = entries.filter((record) => !/^\d{4}-\d{2}-\d{2}$/.test(record.publishAt));
const invalidStatus = entries.filter((record) => record.publishGate !== "review_record_required");
const invalidImages = entries.filter((record) => !record.imageKey || !media.assets[record.imageKey]);
const missingImageFiles = Object.entries(media.assets).filter(([, asset]) => !fs.existsSync(path.join("public", asset.src.replace(/^\//, ""))));
if (entries.length !== 223) throw new Error(`記事台帳が223件ではありません: ${entries.length}`);
if (duplicateDates.length) throw new Error(`公開予定日の重複があります: ${duplicateDates.join(", ")}`);
if (missing.length) throw new Error(`公開予定日が不正です: ${missing.map((record) => record.slug).join(", ")}`);
if (invalidStatus.length) throw new Error(`公開ゲートが不正です: ${invalidStatus.map((record) => record.slug).join(", ")}`);
if (invalidImages.length) throw new Error(`画像キーが不正です: ${invalidImages.map((record) => record.slug).join(", ")}`);
if (missingImageFiles.length) throw new Error(`画像ファイルがありません: ${missingImageFiles.map(([key]) => key).join(", ")}`);
if (entries.some((record) => record.publishAt < today)) throw new Error("今日より前の公開予定日があります");
const counts = entries.reduce((map, record) => {
  const month = record.publishAt.slice(0, 7);
  map[month] = (map[month] ?? 0) + 1;
  return map;
}, {});
const overLimit = Object.entries(counts).filter(([, count]) => count > 10);
if (overLimit.length) throw new Error(`月10本を超える月があります: ${JSON.stringify(overLimit)}`);
console.log(JSON.stringify({ articles: entries.length, initialCandidates: entries.filter((record) => record.releaseTrack === "initial-candidate").length, monthlyCounts: counts, lastScheduled: entries.at(-1).publishAt }, null, 2));
