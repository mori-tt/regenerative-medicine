import { spawnSync } from "node:child_process";

const target = process.argv[2] || process.env.DEPLOY_TARGET;
if (!target || !["github-pages", "lolipop"].includes(target)) {
  console.error(
    "使い方: DEPLOY_TARGET=github-pages|lolipop npm run build:target",
  );
  process.exit(1);
}

const env = { ...process.env };
env.DEPLOY_TARGET = target;
if (target === "github-pages") {
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

const command = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(command, ["run", "build"], { env, stdio: "inherit" });
process.exit(result.status ?? 1);
