import Link from "next/link";
import { articles, categories, columnArticles, coreArticles, visibleArticles } from "@/content/articles";
import type { SiteLocale } from "@/content/locales";
import { localizedCategoryName } from "@/content/locales";
import { LocalizedArticleGrid } from "./localized-articles";
import { Breadcrumbs } from "./content";

const categoryDescriptions = {
  en: {
    basics: "Start with the essential concepts and vocabulary.",
    "stem-cells": "Learn how iPS cells, ES cells, and somatic stem cells differ.",
    treatment: "Questions about evidence, safety, cost, and consent.",
    research: "How to read research results without overestimating them.",
  },
  zh: {
    basics: "从基本概念和常用词汇开始。",
    "stem-cells": "了解 iPS 细胞、ES 细胞和体性干细胞的区别。",
    treatment: "整理证据、安全性、费用和知情同意相关问题。",
    research: "学习如何阅读研究结果，避免过度解读。",
  },
} as const;

const chrome = {
  en: { home: "Home", eyebrow: "TOPIC", core: "Essentials", columns: "Regular columns", back: "Back to the home page", note: "Careful, source-based reading", noteBody: "Each article has a separate editorial manuscript in this language. Check the evidence, limitations, and medical questions before making a decision.", navLabel: "Browse by category", all: "All articles" },
  zh: { home: "首页", eyebrow: "主题", core: "重要内容", columns: "专栏", back: "返回首页", note: "基于来源的谨慎阅读", noteBody: "每篇文章都有单独的中文编辑原稿。做出决定前，请确认证据、局限性和需要向医生询问的问题。", navLabel: "按主题浏览", all: "全部文章" },
} as const;

export type LocalizedCategorySlug = keyof typeof categoryDescriptions.en;

export function localizedCategoryFor(locale: SiteLocale, slug: LocalizedCategorySlug) {
  return { title: localizedCategoryName(locale, slug), description: categoryDescriptions[locale][slug] };
}

export function LocalizedCategory({ locale, slug }: { locale: SiteLocale; slug: LocalizedCategorySlug }) {
  const { title, description } = localizedCategoryFor(locale, slug);
  const copy = chrome[locale];
  const listed = visibleArticles(articles).filter((article) => article.category === slug);
  const core = coreArticles(listed);
  const columns = columnArticles(listed);
  return <div lang={locale === "en" ? "en" : "zh-CN"} className="localized-page"><div className="container inner-page"><Breadcrumbs homeLabel={copy.home} homeHref={`/${locale}/`} locale={locale} items={[{ label: title }]} /><div className="page-heading"><span className="eyebrow">{copy.eyebrow}</span><h1>{title}</h1><p>{description}</p></div><div className="question-box"><div><h2>{copy.note}</h2><p>{copy.noteBody}</p></div><Link className="button outline" href={`/${locale}/`}>{copy.back}</Link></div><nav className="filter-links" aria-label={copy.navLabel}><Link href={`/${locale}/articles/`}>{copy.all}</Link>{categories.map((item) => <Link key={item.slug} href={`/${locale}/categories/${item.slug}/`} className={item.slug === slug ? "active" : undefined} aria-current={item.slug === slug ? "page" : undefined}>{localizedCategoryName(locale, item.slug)}</Link>)}</nav><section aria-label={copy.core}><h2 className="listing-heading">{copy.core}</h2><LocalizedArticleGrid locale={locale} list={core} /></section>{columns.length > 0 && <section aria-label={copy.columns}><h2 className="listing-heading">{copy.columns}</h2><LocalizedArticleGrid locale={locale} list={columns} /></section>}</div></div>;
}
