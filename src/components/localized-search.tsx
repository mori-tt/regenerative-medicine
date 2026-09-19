import Link from "next/link";
import { articles } from "@/content/articles";
import { localizedArticleFor } from "./localized-article";
import type { SiteLocale } from "@/content/locales";
export function LocalizedSearch({ locale }: { locale: SiteLocale }) { const en = locale === "en"; return <div className="container inner-page"><div className="page-heading"><span className="eyebrow">FIND YOUR NEXT READ</span><h1>{en ? "Find what you want to learn." : "寻找你想了解的内容。"}</h1><p>{en ? "Browse all translated editorial manuscripts." : "浏览全部翻译编辑原稿。"}</p></div><div className="listing-grid">{articles.map((source) => { const article = localizedArticleFor(locale, source); return <article className="article-card" key={source.slug}><div className="article-card-body"><h2><Link href={`/${locale}/articles/${source.slug}/`}>{article.title}</Link></h2><p>{article.description}</p></div></article>; })}</div></div>; }
