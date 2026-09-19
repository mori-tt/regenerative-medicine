import Link from "next/link";
import type { SiteLocale } from "@/content/locales";
import { infoLocales } from "@/content/info-locales";

export type InfoSlug = keyof (typeof infoLocales)["en"];
export function infoTitleFor(locale: SiteLocale, slug: InfoSlug) {
  return infoLocales[locale][slug].title;
}
export function infoDescriptionFor(locale: SiteLocale, slug: InfoSlug) {
  return infoLocales[locale][slug].description;
}

export function LocalizedInfo({ locale, slug }: { locale: SiteLocale; slug: InfoSlug }) {
  const en = locale === "en";
  const content = infoLocales[locale][slug];
  return <div lang={en ? "en" : "zh-CN"} className="localized-page"><div className="container inner-page localized-article"><div className="page-heading"><span className="eyebrow">{en ? "INFORMATION" : "信息"}</span><h1>{content.title}</h1><p>{content.description}</p></div><div className="prose">{content.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}</section>)}</div><div className="policy-callout"><h2>{en ? "Related pages" : "相关页面"}</h2><p><Link href={`/${locale}/articles/`}>{en ? "Browse translated articles" : "浏览中文文章"} →</Link></p><p><Link href={`/${locale}/`}>{en ? "Back to the home page" : "返回首页"} →</Link></p></div></div></div>;
}
