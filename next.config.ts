import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  basePath: isGitHubPages ? "/regenerative-medicine" : "",
  assetPrefix: isGitHubPages ? "/regenerative-medicine/" : "",
};

export default nextConfig;
