import Link from "next/link";
import { articles, categories, liveArticles, stockArticles, visibleArticles } from "@/content/articles";
import { allFeaturedSlugsFor } from "@/content/subcategories";
import { FeaturedButton, FeaturedScope } from "@/components/featured-filter";
import { ArticleCard, Breadcrumbs } from "@/components/content";
import { pageMetadata } from "@/lib/site";
import { ArticleBrowser } from "@/components/article-browser";
import { StockReveal } from "@/components/stock-reveal";
export const metadata = pageMetadata(
  "記事一覧",
  "再生医療・幹細胞の基礎知識、治療の検討、研究の読み方に関する記事一覧。",
  "/articles/",
);
export default function ArticlesPage() {
  const list = visibleArticles(articles);
  const live = liveArticles(list);
  const stock = stockArticles(list);
  const featuredSet = allFeaturedSlugsFor(list);
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
          すべて <small>{live.length}</small>
        </Link>
        {categories.map((c) => (
          <Link key={c.slug} href={`/categories/${c.slug}/`}>
            {c.label}{" "}
            <small>{live.filter((a) => a.category === c.slug).length}</small>
          </Link>
        ))}
        <FeaturedButton
          label="おすすめ"
          count={live.filter((a) => featuredSet.has(a.slug)).length}
        />
      </nav>
      <h2 className="sr-only">公開中の記事一覧</h2>
      <ArticleBrowser
        terms={live.map((a) => `${a.title} ${a.description}`)}
        featured={live.map((a) => featuredSet.has(a.slug))}
      >
        {live.map((a) => (
          <ArticleCard
            key={a.slug}
            article={a}
            badge={featuredSet.has(a.slug) ? "おすすめ" : undefined}
          />
        ))}
      </ArticleBrowser>
      <StockReveal
        count={stock.length}
        locale="ja"
        featured={stock.map((a) => featuredSet.has(a.slug))}
        cards={stock.map((a) => (
          <ArticleCard
            key={a.slug}
            article={a}
            badge={featuredSet.has(a.slug) ? "おすすめ" : undefined}
          />
        ))}
      />
      </FeaturedScope>
    </div>
  );
}
