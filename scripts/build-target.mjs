import { spawnSync } from "node:child_process";

const target = process.argv[2] || process.env.DEPLOY_TARGET;
if (!target || !["github-pages", "lolipop", "both", "none"].includes(target)) {
  console.error(
    "使い方: DEPLOY_TARGET=github-pages|lolipop|both|none npm run build:target",
  );
  process.exit(1);
}
if (target === "none") {
  console.log("DEPLOY_TARGET=none: ビルドする対象がありません。");
  process.exit(0);
}

const targets = target === "both" ? ["github-pages", "lolipop"] : [target];
const command = process.platform === "win32" ? "npm.cmd" : "npm";

for (const t of targets) {
  const env = { ...process.env };
  env.DEPLOY_TARGET = t;
  if (t === "github-pages") {
    env.GITHUB_PAGES = "true";
    env.NEXT_PUBLIC_ARTICLE_BUILD_MODE = "all";
    env.NEXT_PUBLIC_PUBLICATION_MODE ||= "preview";
    env.NEXT_PUBLIC_SITE_INDEXABLE ||= "false";
  } else {
    delete env.GITHUB_PAGES;
    env.NEXT_PUBLIC_ARTICLE_BUILD_MODE = "scheduled";
    if (env.NEXT_PUBLIC_PUBLICATION_MODE === "production") {
      const rights = spawnSync(command, ["run", "check:rights"], {
        env,
        stdio: "inherit",
      });
      if (rights.status !== 0) process.exit(rights.status ?? 1);
    }
  }

  console.log(`\n=== Build target: ${t} ===`);
  const result = spawnSync(command, ["run", "build"], { env, stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
