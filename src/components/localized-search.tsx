import { categories } from "@/content/categories";
import { localizedCategoryName, type SiteLocale } from "@/content/locales";
import { searchIndexPath } from "@/lib/search-index";
import { ArticleSearch } from "./article-search";
import { Breadcrumbs } from "./content";

const chrome = {
  en: {
    home: "Home",
    crumb: "Find articles",
    title: "Find what you want to learn.",
    lead: "Search translated editorial manuscripts by keyword and category.",
  },
  zh: {
    home: "首页",
    crumb: "查找文章",
    title: "寻找你想了解的内容。",
    lead: "用关键词与分类组合，查找翻译编辑原稿。",
  },
} as const;

export function LocalizedSearch({ locale }: { locale: SiteLocale }) {
  const copy = chrome[locale];
  return (
    <div lang={locale === "en" ? "en" : "zh-CN"} className="localized-page">
      <div className="container inner-page">
        <Breadcrumbs homeLabel={copy.home} homeHref={`/${locale}/`} locale={locale} items={[{ label: copy.crumb }]} />
        <div className="page-heading">
          <span className="eyebrow">FIND YOUR NEXT READ</span>
          <h1>{copy.title}</h1>
          <p>{copy.lead}</p>
        </div>
        <ArticleSearch
          locale={locale}
          indexUrl={searchIndexPath(locale)}
          categories={categories.map((c) => ({ slug: c.slug, label: localizedCategoryName(locale, c.slug) }))}
        />
      </div>
    </div>
  );
}
