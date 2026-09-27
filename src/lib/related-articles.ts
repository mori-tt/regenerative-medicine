import { articles, columnArticles, coreArticles, visibleArticles, type Article } from "@/content/articles";
import { groupArticlesBySubcategory, subcategoryOf } from "@/content/subcategories";

const fallbackLabel = { ja: "その他", en: "Other", zh: "其他" };

/** カテゴリページと同じ並び（サブカテゴリ順→優先順→未分類→コラム）の公開記事。 */
export function orderedCategoryArticles(category: Article["category"]): Article[] {
  const listed = visibleArticles(articles).filter((a) => a.category === category);
  return [
    ...groupArticlesBySubcategory(category, coreArticles(listed), fallbackLabel).flatMap((g) => g.articles),
    ...columnArticles(listed),
  ];
}

/** 「前の記事 / 次の記事」：カテゴリページの並び順で隣接する記事。 */
export function adjacentArticles(article: Article): { prev?: Article; next?: Article } {
  const ordered = orderedCategoryArticles(article.category);
  const index = ordered.findIndex((a) => a.slug === article.slug);
  if (index < 0) return {};
  return { prev: ordered[index - 1], next: ordered[index + 1] };
}

/** 「あわせて読みたい」：同じサブカテゴリ → 同じカテゴリ → 他カテゴリの先頭記事、の順で埋める。 */
export function relatedArticles(article: Article, limit = 3): Article[] {
  const group = subcategoryOf(article.category, article.slug);
  const sameCategory = orderedCategoryArticles(article.category).filter((a) => a.slug !== article.slug);
  const sameGroup = group ? sameCategory.filter((a) => group.slugs.includes(a.slug)) : [];
  const picked: Article[] = [];
  const seen = new Set<string>([article.slug]);
  for (const candidate of [...sameGroup, ...sameCategory, ...visibleArticles(articles)]) {
    if (picked.length >= limit) break;
    if (seen.has(candidate.slug)) continue;
    seen.add(candidate.slug);
    picked.push(candidate);
  }
  return picked;
}
