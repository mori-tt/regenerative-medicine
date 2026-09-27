import type { Metadata } from "next";
import { publication } from "./site-config";
import rawConfig from "@/content/site-config.json";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const parsedUrl = new URL(configuredUrl);
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.GITHUB_PAGES === "true" ? "/regenerative-medicine" : "");
export const indexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";
export const publiclyIndexable = indexable && publication.mode === "production";
// 英語・中国語ページは翻訳・医学用語・監修範囲を確認した後に個別に検索公開する。
export const localizedIndexable = process.env.NEXT_PUBLIC_LOCALIZED_INDEXABLE === "true";
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
  editorName: process.env.NEXT_PUBLIC_EDITOR_NAME || rawConfig.editor.name,
  editorAddress: process.env.NEXT_PUBLIC_EDITOR_ADDRESS || rawConfig.editor.address,
};
if (publication.mode === "production" && indexable) {
  const missing = [
    !site.operatorName && "NEXT_PUBLIC_OPERATOR_NAME",
    !site.operatorAddress && "NEXT_PUBLIC_OPERATOR_ADDRESS",
    !site.contactEmail && "NEXT_PUBLIC_CONTACT_EMAIL",
  ].filter(Boolean);
  if (missing.length > 0) {
    throw new Error(
      `正式公開には運営者情報と連絡先が必要です: ${missing.join(", ")}`,
    );
  }
}
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

export const siteTaglineFor: Record<SiteLocaleCode, string> = {
  ja: "再生医療と幹細胞を、もっとわかりやすく。",
  en: "Regenerative medicine and stem cells, made clearer.",
  zh: "让再生医学与干细胞更易理解。",
};

export type PageMetadataOptions = {
  /** トップページ。タイトルは「サイト名 | タグライン」の形にする。 */
  home?: boolean;
  /** 記事ページ。OGP を article 型にして公開日・更新日・カテゴリを付ける。 */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
  /** ページ固有のOGP画像（記事のカバー画像など）。未指定時はサイト共通のカード。 */
  image?: { url: string; width: number; height: number; alt: string };
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  allowIndex = true,
  locale: SiteLocaleCode = "ja",
  options: PageMetadataOptions = {},
): Metadata {
  const base = basePathOf(path);
  const canonical = absolute(localizedPath(base, locale));
  const siteName = siteNameFor(locale);
  const fullTitle = options.home ? `${siteName} | ${siteTaglineFor[locale]}` : `${title} | ${siteName}`;
  const image = options.image
    ? { url: absolute(options.image.url), width: options.image.width, height: options.image.height, alt: options.image.alt }
    : { url: absolute("/social-card.png"), width: 1200, height: 630, alt: siteName };
  return {
    // NOTE: the root-layout title template ("%s | 再生医療ガイド") only applies to
    // child segments, so the home page and non-Japanese pages set absolute titles.
    title: locale === "ja" && !options.home ? title : { absolute: fullTitle },
    description,
    alternates: {
      canonical,
      // hreflang は翻訳ページを検索公開している時だけ出す。noindex のページを
      // 代替言語として案内しても検索エンジンには無視され、整合性の警告要因になる。
      ...(localizedIndexable
        ? {
            languages: {
              "ja-JP": absolute(localizedPath(base, "ja")),
              en: absolute(localizedPath(base, "en")),
              "zh-CN": absolute(localizedPath(base, "zh")),
              "x-default": absolute(localizedPath(base, "ja")),
            },
          }
        : {}),
    },
    robots: {
      index: publiclyIndexable && allowIndex && (locale === "ja" || localizedIndexable),
      follow: true,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      locale: ogLocaleFor[locale],
      alternateLocale: (Object.values(ogLocaleFor) as string[]).filter(
        (value) => value !== ogLocaleFor[locale],
      ),
      images: [image],
      ...(options.article
        ? {
            type: "article",
            publishedTime: options.article.publishedTime,
            modifiedTime: options.article.modifiedTime,
            section: options.article.section,
            tags: options.article.tags,
            authors: [absolute(localizedPath("/about/", locale))],
          }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
