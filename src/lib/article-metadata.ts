import type { Article } from "@/content/articles";
import { categoryFor } from "@/content/categories";
import { articleImageAlt, articleImageBySrc } from "@/content/article-images";
import { localizedCategoryName } from "@/content/locales";
import { subcategoryOf } from "@/content/subcategories";
import type { PageMetadataOptions, SiteLocaleCode } from "./site";

/** 記事ページの OGP を article 型にし、カバー画像・公開日・更新日・カテゴリ・サブカテゴリを載せる。 */
export function articleMetadataOptions(article: Article, locale: SiteLocaleCode): PageMetadataOptions {
  const category = locale === "ja" ? categoryFor(article.category).label : localizedCategoryName(locale, article.category);
  const group = subcategoryOf(article.category, article.slug);
  const image = articleImageBySrc(article.image);
  return {
    article: {
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      section: category,
      tags: [category, ...(group ? [group[locale]] : [])],
    },
    ...(article.image && image
      ? {
          image: {
            url: article.image,
            width: image.width,
            height: image.height,
            alt: articleImageAlt(article.image, locale) ?? article.title,
          },
        }
      : {}),
  };
}
