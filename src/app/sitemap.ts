import type { MetadataRoute } from "next";
import { articles, categories, isReviewed } from "@/content/articles";
import { infoPages } from "@/content/pages";
import { jsrmChapters } from "@/content/jsrm-chapters";
import { publication } from "@/lib/site-config";
import { absolute, publiclyIndexable } from "@/lib/site";
export const dynamic = "force-static";
const locales = ["", "/en", "/zh"] as const;
function withLocales(paths: string[]): string[] {
  return locales.map((prefix) => paths.map((path) => `${prefix}${path}`)).flat();
}
export default function sitemap(): MetadataRoute.Sitemap {
  if (!publiclyIndexable) return [];
  const staticPaths = withLocales([
    "/",
    "/articles/",
    ...(publication.mode === "production" ? ["/jsrm/", ...jsrmChapters.map((chapter) => `/jsrm/${chapter.slug}/`)] : []),
    ...categories.map((c) => `/categories/${c.slug}/`),
    ...infoPages.map((p) => `/${p.slug}/`),
  ]);
  return staticPaths
    .map((path) => ({ url: absolute(path === "" ? "/" : path) }))
    .concat(
      articles
        .filter(isReviewed)
        .map((a) => withLocales([`/articles/${a.slug}/`]).map((path) => ({
          url: absolute(path),
          lastModified: a.updatedAt,
        })))
        .flat(),
    );
}
