import { ArticleSearch } from "@/components/article-search";
import { Breadcrumbs, JsonLd } from "@/components/content";
import { availableCategories } from "@/content/articles";
import { pageMetadata } from "@/lib/site";
import { webPageNode } from "@/lib/structured-data";
import { searchIndexPath } from "@/lib/search-index";
export const metadata = pageMetadata(
  "記事を探す",
  "キーワードとカテゴリを組み合わせて、再生医療・幹細胞に関する公開中の記事を探せます。言葉が分からないときは用語集も利用できます。",
  "/search/",
  false,
);
export default function SearchPage() {
  return (
    <div className="container inner-page">
      <Breadcrumbs items={[{ label: "記事を探す" }]} />
      <JsonLd
        data={webPageNode(
          "ja",
          "/search/",
          "記事を探す",
          "キーワードやカテゴリから、再生医療・幹細胞に関する記事を探せます。",
          "SearchResultsPage",
        )}
      />
      <div className="page-heading">
        <span className="eyebrow">FIND YOUR NEXT READ</span>
        <h1>あなたの「知りたい」を探す。</h1>
        <p>キーワードとカテゴリを組み合わせて、記事を探せます。</p>
      </div>
      <ArticleSearch
        locale="ja"
        indexUrl={searchIndexPath("ja")}
        categories={availableCategories().map((c) => ({
          slug: c.slug,
          label: c.label,
        }))}
      />
    </div>
  );
}
