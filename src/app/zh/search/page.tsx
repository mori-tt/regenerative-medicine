import { pageMetadata } from "@/lib/site";
import { LocalizedSearch } from "@/components/localized-search";
import { articles, visibleArticles } from "@/content/articles";
import { localizedArticleFor } from "@/components/localized-article";
export const metadata = pageMetadata(
  "查找文章",
  "浏览关于再生医学的中文翻译文章。",
  "/zh/search/",
  false,
  "zh",
);
export default function ChineseSearch() {
  return (
    <LocalizedSearch
      locale="zh"
      items={visibleArticles(articles).map((source) => {
        const article = localizedArticleFor("zh", source);
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
