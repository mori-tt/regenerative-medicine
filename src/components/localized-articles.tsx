import Link from "next/link";
import {
  articles,
  categories,
  liveArticles,
  stockArticles,
  visibleArticles,
  type Article,
} from "@/content/articles";
import { allFeaturedSlugs } from "@/content/subcategories";
import { LocalizedArticleCard, localizedArticleFor } from "./localized-article";
import { ArticleBrowser } from "./article-browser";
import { FeaturedButton, FeaturedScope } from "./featured-filter";
import { StockReveal } from "./stock-reveal";
import { Breadcrumbs } from "./content";
import { localizedCategoryName, type SiteLocale } from "@/content/locales";

const chrome = {
  en: {
    home: "Home",
    list: "Articles",
    title: "Articles",
    lead: "Deepen your understanding, one step at a time. Start with topics that interest you, and read at your own pace.",
    navLabel: "Browse by category",
    all: "All articles",
    badge: "Featured",
  },
  zh: {
    home: "首页",
    list: "文章列表",
    title: "文章列表",
    lead: "一个一个加深理解。从感兴趣的主题开始，按自己的节奏阅读。",
    navLabel: "按主题浏览",
    all: "全部文章",
    badge: "推荐",
  },
} as const;

export function LocalizedArticleGrid({
  locale,
  list,
  badgeLabel,
  badgeSlugs,
}: {
  locale: SiteLocale;
  list: Article[];
  badgeLabel?: string;
  badgeSlugs?: Set<string>;
}) {
  return (
    <ArticleBrowser
      locale={locale}
      terms={list.map((source) => {
        const article = localizedArticleFor(locale, source);
        return `${article.title} ${article.description}`;
      })}
      featured={
        badgeSlugs ? list.map((source) => badgeSlugs.has(source.slug)) : undefined
      }
    >
      {list.map((source) => (
        <LocalizedArticleCard
          locale={locale}
          source={source}
          key={source.slug}
          badge={badgeLabel && (!badgeSlugs || badgeSlugs.has(source.slug)) ? badgeLabel : undefined}
        />
      ))}
    </ArticleBrowser>
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
  const featuredSet = allFeaturedSlugs();
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
      <FeaturedScope>
      <nav className="filter-links" aria-label={copy.navLabel}>
        <Link
          href={`/${locale}/articles/`}
          className={!category ? "active" : undefined}
          aria-current={!category ? "page" : undefined}
        >
          {copy.all} <small>{liveList.length}</small>
        </Link>
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={`/${locale}/categories/${item.slug}/`}
            className={category === item.slug ? "active" : undefined}
            aria-current={category === item.slug ? "page" : undefined}
          >
            {localizedCategoryName(locale, item.slug)}{" "}
            <small>
              {
                liveList.filter((article) => article.category === item.slug)
                  .length
              }
            </small>
          </Link>
        ))}
        <FeaturedButton
          label={copy.badge}
          count={list.filter((a) => featuredSet.has(a.slug)).length}
        />
      </nav>
      <LocalizedArticleGrid
        locale={locale}
        list={list}
        badgeLabel={copy.badge}
        badgeSlugs={featuredSet}
      />
      <StockReveal count={stock.length} locale={locale}>
        <div className="listing-grid">
          {stock.map((source) => (
            <LocalizedArticleCard
              locale={locale}
              source={source}
              key={source.slug}
              badge={featuredSet.has(source.slug) ? copy.badge : undefined}
            />
          ))}
        </div>
      </StockReveal>
      </FeaturedScope>
    </div>
  );
}
