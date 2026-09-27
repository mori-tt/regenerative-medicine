import type { MetadataRoute } from "next";
import { articles, categories, isReviewed, isVisibleArticle } from "@/content/articles";
import { infoPages } from "@/content/pages";
import { jsrmChapters } from "@/content/jsrm-chapters";
import { publication } from "@/lib/site-config";
import { absolute, localizedIndexable, publiclyIndexable } from "@/lib/site";
export const dynamic = "force-static";

// 翻訳ページは NEXT_PUBLIC_LOCALIZED_INDEXABLE=true の時だけ載せる（noindex のURLをサイトマップに含めない）。
const locales = localizedIndexable ? (["", "/en", "/zh"] as const) : ([""] as const);
function withLocales(paths: string[]): string[] {
  return locales.flatMap((prefix) => paths.map((path) => `${prefix}${path}`));
}
const latest = (dates: (string | undefined)[]) => dates.filter((d): d is string => Boolean(d)).sort().at(-1);

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publiclyIndexable) return [];
  const listed = articles.filter((a) => isVisibleArticle(a) && isReviewed(a));
  const siteUpdated = latest(listed.map((a) => a.updatedAt));
  const entry = (path: string, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: absolute(path),
    ...(lastModified ? { lastModified } : {}),
  });
  return [
    ...withLocales(["/", "/articles/"]).map((path) => entry(path, siteUpdated)),
    ...categories.flatMap((c) =>
      withLocales([`/categories/${c.slug}/`]).map((path) =>
        entry(path, latest(listed.filter((a) => a.category === c.slug).map((a) => a.updatedAt))),
      ),
    ),
    ...withLocales([
      ...(publication.mode === "production" ? ["/jsrm/", ...jsrmChapters.map((chapter) => `/jsrm/${chapter.slug}/`)] : []),
      ...infoPages.map((p) => `/${p.slug}/`),
    ]).map((path) => entry(path)),
    ...listed.flatMap((a) => withLocales([`/articles/${a.slug}/`]).map((path) => entry(path, a.updatedAt))),
  ];
}
