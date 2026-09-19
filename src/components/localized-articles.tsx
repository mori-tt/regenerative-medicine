import Link from "next/link";
import { articles, categories, visibleArticles, type Article } from "@/content/articles";
import { LocalizedArticleCard } from "./localized-article";
import { Breadcrumbs } from "./content";
import { localizedCategoryName, type SiteLocale } from "@/content/locales";

const chrome = {
  en: {
    home: "Home", list: "Articles",
    title: "Deepen your understanding, one step at a time.",
    lead: "Start with topics that interest you, and read at your own pace.",
    navLabel: "Browse by category", all: "All articles",
  },
  zh: {
    home: "首页", list: "文章列表",
    title: "一个一个加深理解。",
    lead: "从感兴趣的主题开始，按自己的节奏阅读。",
    navLabel: "按主题浏览", all: "全部文章",
  },
} as const;

export function LocalizedArticleGrid({ locale, list }: { locale: SiteLocale; list: Article[] }) {
  return <div className="listing-grid">{list.map((source) => <LocalizedArticleCard locale={locale} source={source} key={source.slug} />)}</div>;
}

export function LocalizedArticles({ locale, category, embedded = false }: { locale: SiteLocale; category?: string; embedded?: boolean }) {
  const allArticles = visibleArticles(articles);
  const list = allArticles.filter((article) => !category || article.category === category);
  const copy = chrome[locale];
  return <div className="container inner-page">{!embedded && <Breadcrumbs homeLabel={copy.home} homeHref={`/${locale}/`} locale={locale} items={[{ label: copy.list }]} />}<div className="page-heading"><span className="eyebrow">THE JOURNAL</span>{embedded ? <h2>{copy.title}</h2> : <h1>{copy.title}</h1>}<p>{copy.lead}</p></div>{!embedded && <div className="article-list-toolbar"><div><strong>{list.length} {locale === "en" ? "articles" : "篇文章"}</strong><span>{locale === "en" ? "Guides, research, and questions for treatment decisions" : "基础知识、研究与治疗前的确认事项"}</span></div><span className="article-list-note">{locale === "en" ? "Editorial information" : "编辑部整理的信息"}</span></div>}<nav className="filter-links" aria-label={copy.navLabel}><Link href={`/${locale}/articles/`} className={!category ? "active" : undefined} aria-current={!category ? "page" : undefined}>{copy.all} <small>{allArticles.length}</small></Link>{categories.map((item) => <Link key={item.slug} href={`/${locale}/categories/${item.slug}/`} className={category === item.slug ? "active" : undefined} aria-current={category === item.slug ? "page" : undefined}>{localizedCategoryName(locale, item.slug)} <small>{allArticles.filter((article) => article.category === item.slug).length}</small></Link>)}</nav><LocalizedArticleGrid locale={locale} list={list} /></div>;
}
