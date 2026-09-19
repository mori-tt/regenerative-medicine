import Link from "next/link";
import { articles, categories } from "@/content/articles";
import { LocalizedArticleCard } from "./localized-article";
import { localizedCategoryName, type SiteLocale } from "@/content/locales";

export function LocalizedArticles({ locale, category, embedded = false }: { locale: SiteLocale; category?: string; embedded?: boolean }) {
  const list = articles.filter((article) => !category || article.category === category);
  const en = locale === "en";
  return <div className="container inner-page"><div className="page-heading"><span className="eyebrow">THE JOURNAL</span>{embedded ? <h2>{en ? "Build your understanding step by step." : "一步一步加深理解。"}</h2> : <h1>{en ? "Build your understanding step by step." : "一步一步加深理解。"}</h1>}<p>{en ? "Translated editorial manuscripts about regenerative medicine, stem cells, treatment decisions, and research." : "关于再生医学、干细胞、治疗决定和研究的中文编辑原稿。"}</p></div><nav className="filter-links" aria-label={en ? "Browse by category" : "按主题浏览"}><Link href={`/${locale}/articles/`}>{en ? "All articles" : "全部文章"}</Link>{categories.map((item) => <Link key={item.slug} href={`/${locale}/categories/${item.slug}/`}>{localizedCategoryName(locale, item.slug)}</Link>)}</nav><div className="listing-grid">{list.map((source) => <LocalizedArticleCard locale={locale} source={source} key={source.slug} />)}</div></div>;
}
