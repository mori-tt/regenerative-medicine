import type { MetadataRoute } from "next";
import { articles, categories, isReviewed } from "@/content/articles";
import { infoPages } from "@/content/pages";
import { absolute, indexable } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  return [
    "/",
    "/articles/",
    "/jsrm/",
    ...categories.map((c) => `/categories/${c.slug}/`),
    ...infoPages.map((p) => `/${p.slug}/`),
  ]
    .map((path) => ({ url: absolute(path) }))
    .concat(
      articles
        .filter(isReviewed)
        .map((a) => ({
          url: absolute(`/articles/${a.slug}/`),
          lastModified: a.updatedAt,
        })),
    );
}
