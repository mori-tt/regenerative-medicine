import {
  articles,
  availableCategories,
  liveArticles,
  stockArticles,
  visibleArticles,
  type Article,
} from "@/content/articles";
import { allFeaturedSlugsFor } from "@/content/subcategories";
import { LocalizedArticleCard, localizedCardData } from "./localized-article";
import { ArticleBrowser } from "./article-browser";
import { CategoryNavigation } from "./category-navigation";
import { StockReveal } from "./stock-reveal";
import { Breadcrumbs } from "./content";
import type { SiteLocale } from "@/content/locales";

const chrome = {
  en: {
    home: "Home",
    list: "Articles",
    title: "Articles",
    lead: "Deepen your understanding, one step at a time. Start with topics that interest you, and read at your own pace.",
    navLabel: "Browse by category",
    listHeading: "All published articles",
    all: "All articles",
    badge: "Featured",
  },
  zh: {
    home: "首页",
    list: "文章列表",
    title: "文章列表",
    lead: "一个一个加深理解。从感兴趣的主题开始，按自己的节奏阅读。",
    navLabel: "按主题浏览",
    listHeading: "已发布文章列表",
    all: "全部文章",
    badge: "推荐",
  },
} as const;

export function LocalizedArticleGrid({
  locale,
  list,
  badgeLabel,
  badgeSlugs,
  zoneId,
}: {
  locale: SiteLocale;
  list: Article[];
  badgeLabel?: string;
  badgeSlugs?: Set<string>;
  zoneId?: string;
}) {
  return (
    <div className="listing-zone" id={zoneId}>
      <div className="listing-grid">
        {list.map((source) => {
          const featured = badgeSlugs?.has(source.slug) ?? false;
          return (
            <LocalizedArticleCard
              locale={locale}
              source={source}
              key={source.slug}
              badge={badgeLabel && (!badgeSlugs || featured) ? badgeLabel : undefined}
              filter={{ featured }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function LocalizedArticles({
  locale,
  category,
  embedded = false,
}: {
  locale: SiteLocale;
  category?: string;
  embedded?: boolean;
}) {
  const allArticles = visibleArticles(articles);
  const liveList = liveArticles(allArticles);
  const stockList = stockArticles(allArticles);
  const list = liveList.filter(
    (article) => !category || article.category === category,
  );
  const stock = stockList.filter(
    (article) => !category || article.category === category,
  );
  const featuredSet = allFeaturedSlugsFor(allArticles);
  const copy = chrome[locale];
  return (
    <div className="container inner-page">
      {!embedded && (
        <Breadcrumbs
          homeLabel={copy.home}
          homeHref={`/${locale}/`}
          locale={locale}
          items={[{ label: copy.list }]}
        />
      )}
      <div className="page-heading">
        <span className="eyebrow">THE JOURNAL</span>
        {embedded ? <h2>{copy.title}</h2> : <h1>{copy.title}</h1>}
        <p>{copy.lead}</p>
      </div>
      <div className="filter-scope" data-filter-scope>
      <CategoryNavigation
        locale={locale}
        current={category}
        total={liveList.length}
        counts={Object.fromEntries(availableCategories().map((item) => [item.slug, liveList.filter((article) => article.category === item.slug).length]))}
        featuredCount={list.filter((article) => featuredSet.has(article.slug)).length}
        hideFeatured={list.filter((article) => featuredSet.has(article.slug)).length === 0 || [...list, ...stock].every((article) => featuredSet.has(article.slug))}
      />
      <h2 className="sr-only">{copy.listHeading}</h2>
      <ArticleBrowser locale={locale} total={list.length} gridId="localized-articles-live" />
      <LocalizedArticleGrid
        locale={locale}
        list={list}
        badgeLabel={list.every((article) => featuredSet.has(article.slug)) ? undefined : copy.badge}
        badgeSlugs={featuredSet}
        zoneId="localized-articles-live"
      />
      <div className="featured-hidden">
        <StockReveal
          locale={locale}
          cards={stock.map((source) => localizedCardData(locale, source))}
          featured={stock.map((source) => featuredSet.has(source.slug))}
          badgeLabel={copy.badge}
        />
      </div>
      </div>
    </div>
  );
}
