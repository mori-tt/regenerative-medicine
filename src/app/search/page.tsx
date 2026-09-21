import { ArticleSearch } from "@/components/article-search";
import { Breadcrumbs } from "@/components/content";
import { pageMetadata } from "@/lib/site";
import { articles, visibleArticles } from "@/content/articles";
export const metadata = pageMetadata(
  "記事を探す",
  "キーワードやカテゴリから、再生医療・幹細胞に関する記事を探せます。",
  "/search/",
  false,
);
export default function SearchPage() {
  return (
    <div className="container inner-page">
      <Breadcrumbs items={[{ label: "記事を探す" }]} />
      <div className="page-heading">
        <span className="eyebrow">FIND YOUR NEXT READ</span>
        <h1>あなたの「知りたい」を探す。</h1>
        <p>キーワードとカテゴリを組み合わせて、記事を探せます。</p>
      </div>
      <ArticleSearch
        items={visibleArticles(articles).map((article) => ({
          ...article,
          searchText: [
            article.title,
            article.description,
            ...article.points,
            ...article.sections.flatMap((section) => [
              section.title,
              ...section.paragraphs,
            ]),
          ].join(" "),
          points: [],
          sections: [],
          references: [],
        }))}
      />
    </div>
  );
}
