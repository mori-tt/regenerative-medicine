import { pageMetadata } from "@/lib/site";
import { LocalizedSearch } from "@/components/localized-search";
import { articles, visibleArticles } from "@/content/articles";
import { localizedArticleFor } from "@/components/localized-article";
export const metadata = pageMetadata(
  "Find articles",
  "Browse translated articles about regenerative medicine.",
  "/en/search/",
  false,
  "en",
);
export default function EnglishSearch() {
  return (
    <LocalizedSearch
      locale="en"
      items={visibleArticles(articles).map((source) => {
        const article = localizedArticleFor("en", source);
        return {
          slug: source.slug,
          category: source.category,
          title: article.title,
          description: article.description,
          searchText: [
            article.title,
            article.description,
            ...article.points,
            ...article.sections.flatMap((section) => [
              section.title,
              ...section.paragraphs,
            ]),
          ].join(" "),
        };
      })}
    />
  );
}
