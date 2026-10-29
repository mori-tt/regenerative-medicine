import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGitHubPages ? "/regenerative-medicine" : "");
const assetPrefix =
  process.env.NEXT_PUBLIC_ASSET_PREFIX ?? (basePath ? `${basePath}/` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  basePath,
  assetPrefix,
  experimental: {
    // CSSを<link>ではなく<style>でHTMLに埋め込み、レンダリングブロッキングの
    // リクエストウォーターフォールを消す。CSSは約21KBと小さいので初回表示が速くなる。
    inlineCss: true,
  },
};

export default nextConfig;
