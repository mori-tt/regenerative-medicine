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
  nameEn: "Regenerative Medicine Guide",
  nameZh: "再生医学指南",
  url: parsedUrl.origin,
  description:
    "再生医療と幹細胞について、基礎知識から研究の読み方、治療を検討するときの確認事項まで。確かな情報とともに、一つずつ理解するための情報ガイド。",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  operatorName: process.env.NEXT_PUBLIC_OPERATOR_NAME || "",
  operatorAddress: process.env.NEXT_PUBLIC_OPERATOR_ADDRESS || "",
};
export function publicAsset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}` || "/";
}
export function absolute(path = "/") {
  return new URL(publicAsset(path), site.url).toString();
}
export type SiteLocaleCode = "ja" | "en" | "zh";

const ogLocaleFor: Record<SiteLocaleCode, string> = {
  ja: "ja_JP",
  en: "en_US",
  zh: "zh_CN",
};

export function basePathOf(path: string): string {
  if (path === "/en" || path === "/en/") return "/";
  if (path === "/zh" || path === "/zh/") return "/";
  if (path.startsWith("/en/")) return path.slice(3) || "/";
  if (path.startsWith("/zh/")) return path.slice(3) || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function localizedPath(base: string, locale: SiteLocaleCode): string {
  const normalized = base.startsWith("/") ? base : `/${base}`;
  if (locale === "ja") return normalized;
  if (normalized === "/") return `/${locale}/`;
  return `/${locale}${normalized}`;
}

export function siteNameFor(locale: SiteLocaleCode): string {
  return locale === "en" ? site.nameEn : locale === "zh" ? site.nameZh : site.name;
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  allowIndex = true,
  locale: SiteLocaleCode = "ja",
): Metadata {
  const base = basePathOf(path);
  const canonical = absolute(localizedPath(base, locale));
  const siteName = siteNameFor(locale);
  return {
    // NOTE: non-Japanese pages use absolute titles so the Japanese
    // root-layout template ("%s | 再生医療ガイド") never leaks in.
    title: locale === "ja" ? title : { absolute: `${title} | ${siteName}` },
    description,
    alternates: {
      canonical,
      languages: {
        ja: absolute(localizedPath(base, "ja")),
        en: absolute(localizedPath(base, "en")),
        "zh-CN": absolute(localizedPath(base, "zh")),
      },
    },
    robots: { index: publiclyIndexable && allowIndex, follow: true },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: canonical,
      siteName,
      locale: ogLocaleFor[locale],
      alternateLocale: (Object.values(ogLocaleFor) as string[]).filter(
        (value) => value !== ogLocaleFor[locale],
      ),
      type: "website",
      images: [
        {
          url: absolute("/social-card.png"),
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [absolute("/social-card.png")],
    },
  };
}
