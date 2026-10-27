import {
  articles,
  availableCategories,
  liveArticles,
  stockArticles,
  visibleArticles,
} from "@/content/articles";
import { allFeaturedSlugsFor } from "@/content/subcategories";
import { CategoryNavigation } from "@/components/category-navigation";
import { ArticleCard, Breadcrumbs, toCardData } from "@/components/content";
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
  const allFeatured =
    live.length > 0 && live.every((article) => featuredSet.has(article.slug));
  return (
    <div className="container inner-page">
      <Breadcrumbs items={[{ label: "記事一覧" }]} />
      <div className="page-heading">
        <span className="eyebrow">THE JOURNAL</span>
        <h1>記事一覧</h1>
        <p>
          一つずつ、理解を深める。気になるテーマから、あなたのペースで読み進めてください。
        </p>
      </div>
      <div className="filter-scope" data-filter-scope>
        <CategoryNavigation
          total={live.length}
          counts={Object.fromEntries(
            availableCategories().map((category) => [
              category.slug,
              live.filter((article) => article.category === category.slug)
                .length,
            ]),
          )}
          featuredCount={
            live.filter((article) => featuredSet.has(article.slug)).length
          }
          hideFeatured={
            live.filter((article) => featuredSet.has(article.slug)).length ===
              0 || list.every((article) => featuredSet.has(article.slug))
          }
        />
        <h2 className="sr-only">公開中の記事一覧</h2>
        <ArticleBrowser
          locale="ja"
          total={live.length}
          gridId="articles-live"
        />
        <div className="listing-zone" id="articles-live">
          <div className="listing-grid">
            {live.map((a) => (
              <ArticleCard
                key={a.slug}
                article={a}
                badge={
                  featuredSet.has(a.slug) && !allFeatured
                    ? "おすすめ"
                    : undefined
                }
                filter={{ featured: featuredSet.has(a.slug) }}
              />
            ))}
          </div>
        </div>
        <div className="featured-hidden">
          <StockReveal
            locale="ja"
            cards={stock.map((a) => toCardData(a))}
            featured={stock.map((a) => featuredSet.has(a.slug))}
          />
        </div>
      </div>
    </div>
  );
}
