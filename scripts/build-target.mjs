import { spawnSync } from "node:child_process";

const target = process.argv[2];
if (!target || !["github-pages", "lolipop"].includes(target)) {
  console.error("使い方: node scripts/build-target.mjs github-pages|lolipop");
  process.exit(1);
}

const env = { ...process.env };
if (target === "github-pages") {
  env.GITHUB_PAGES = "true";
  env.NEXT_PUBLIC_ARTICLE_BUILD_MODE = "all";
  env.NEXT_PUBLIC_PUBLICATION_MODE ||= "preview";
  env.NEXT_PUBLIC_SITE_INDEXABLE ||= "false";
} else {
  env.NEXT_PUBLIC_ARTICLE_BUILD_MODE = "scheduled";
}

const command = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(command, ["run", "build"], { env, stdio: "inherit" });
process.exit(result.status ?? 1);
