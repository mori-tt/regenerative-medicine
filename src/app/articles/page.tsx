import Link from "next/link";
import { articles, categories, visibleArticles } from "@/content/articles";
import { allFeaturedSlugs } from "@/content/subcategories";
import { FeaturedButton, FeaturedScope } from "@/components/featured-filter";
import { ArticleCard, Breadcrumbs } from "@/components/content";
import { pageMetadata } from "@/lib/site";
import { ArticleBrowser } from "@/components/article-browser";
export const metadata = pageMetadata(
  "記事一覧",
  "再生医療・幹細胞の基礎知識、治療の検討、研究の読み方に関する記事一覧。",
  "/articles/",
);
export default function ArticlesPage() {
  const list = visibleArticles(articles);
  const featuredSet = allFeaturedSlugs();
  return (
    <div className="container inner-page">
      <Breadcrumbs items={[{ label: "記事一覧" }]} />
      <div className="page-heading">
        <span className="eyebrow">THE JOURNAL</span>
        <h1>記事一覧</h1>
        <p>一つずつ、理解を深める。気になるテーマから、あなたのペースで読み進めてください。</p>
      </div>
      <FeaturedScope>
      <nav className="filter-links" aria-label="カテゴリから探す">
        <Link href="/articles/" className="active" aria-current="page">
          すべて <small>{list.length}</small>
        </Link>
        {categories.map((c) => (
          <Link key={c.slug} href={`/categories/${c.slug}/`}>
            {c.label}{" "}
            <small>{list.filter((a) => a.category === c.slug).length}</small>
          </Link>
        ))}
        <FeaturedButton
          label="おすすめ"
          count={list.filter((a) => featuredSet.has(a.slug)).length}
        />
      </nav>
      <ArticleBrowser
        terms={list.map((a) => `${a.title} ${a.description}`)}
        featured={list.map((a) => featuredSet.has(a.slug))}
      >
        {list.map((a) => (
          <ArticleCard
            key={a.slug}
            article={a}
            badge={featuredSet.has(a.slug) ? "おすすめ" : undefined}
          />
        ))}
      </ArticleBrowser>
      </FeaturedScope>
    </div>
  );
}
