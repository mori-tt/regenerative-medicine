import type { MetadataRoute } from "next";
import { articles, categories, isReviewed } from "@/content/articles";
import { infoPages } from "@/content/pages";
import { jsrmChapters } from "@/content/jsrm-chapters";
import { publication } from "@/lib/site-config";
import { absolute, publiclyIndexable } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!publiclyIndexable) return [];
  return [
    "/",
    "/articles/",
    ...(publication.mode === "production" ? ["/jsrm/", ...jsrmChapters.map((chapter) => `/jsrm/${chapter.slug}/`)] : []),
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
