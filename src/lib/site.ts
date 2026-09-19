import type { Metadata } from "next";
import { publication } from "./site-config";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const parsedUrl = new URL(configuredUrl);
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.GITHUB_PAGES === "true" ? "/regenerative-medicine" : "");
export const indexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";
export const publiclyIndexable = indexable && publication.mode === "production";
if (parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL はドメインのルートURLを指定してください。",
  );
}
if (
  indexable &&
  (parsedUrl.protocol !== "https:" ||
    /(^|\.)(example\.com|localhost)$/.test(parsedUrl.hostname))
) {
  throw new Error(
    "検索公開する前に NEXT_PUBLIC_SITE_URL に本番のHTTPSドメインを設定してください。",
  );
}
export const site = {
  name: "再生医療ガイド",
  url: parsedUrl.origin,
  description:
    "再生医療と幹細胞について、基礎知識から研究の読み方、治療を検討するときの確認事項まで。確かな情報とともに、一つずつ理解するための情報ガイド。",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};
export function publicAsset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}` || "/";
}
export function absolute(path = "/") {
  return new URL(publicAsset(path), site.url).toString();
}
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  allowIndex = true,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absolute(path) },
    robots: { index: publiclyIndexable && allowIndex, follow: true },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: absolute(path),
      siteName: site.name,
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: absolute("/social-card.png"),
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absolute("/social-card.png")],
    },
  };
}
