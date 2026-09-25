import Link from "next/link";
import { articles, categories, columnArticles, coreArticles, visibleArticles } from "@/content/articles";
import type { SiteLocale } from "@/content/locales";
import { localizedCategoryName } from "@/content/locales";
import { LocalizedArticleGrid } from "./localized-articles";
import { Breadcrumbs } from "./content";

const categoryDescriptions = {
  en: {
    "stem-basics": "What stem cells are, how they differ from ordinary cells, and how they relate to regenerative medicine.",
    "in-body": "Where administered stem cells travel, how they distribute, and how long they persist.",
    "anti-aging": "What science does and does not show about rejuvenation, skin aging, and cosmetic claims.",
    efficacy: "How firmly treatment benefits are demonstrated, and how to read the research behind them.",
    safety: "Side effects, infection, contraindications, and questions to ask before treatment.",
    "cell-types": "Adipose, bone marrow, and umbilical cord sources; autologous vs donor; how cells are cultured.",
    "compare-therapies": "The differences between stem cells, exosomes, PRP, and related offerings.",
    "cost-access": "Fees, insurance, clinic selection, and what an adequate explanation should cover.",
    mechanisms: "Homing, paracrine signaling, immunomodulation, and how to read the underlying research.",
  },
  zh: {
    "stem-basics": "什么是干细胞、与普通细胞的差异，以及与再生医学的关系。",
    "in-body": "输注的干细胞到达哪里、如何分布、能存续多久。",
    "anti-aging": "关于年轻化、皮肤老化与美容主张，科学上已知与未知的部分。",
    efficacy: "治疗获益被验证到何种程度，以及如何解读背后的研究。",
    safety: "副作用、感染、禁忌，以及治疗前想问的问题。",
    "cell-types": "脂肪、骨髓、脐带来源的差异；自体与异体；细胞的培养方式。",
    "compare-therapies": "干细胞、外泌体、PRP 等相关疗法的区别。",
    "cost-access": "费用、保险、诊所选择，以及充分说明应包含的内容。",
    mechanisms: "归巢、旁分泌信号、免疫调节，以及底层研究的阅读方法。",
  },
} as const;

const chrome = {
  en: { home: "Home", eyebrow: "TOPIC", core: "Guides", columns: "Columns", coreEyebrow: "GUIDES", columnsEyebrow: "COLUMN", coreLead: "Learn the essentials for understanding regenerative medicine, in order.", columnsLead: "Lighter reads — stories behind the research and seasonal topics.", back: "Back to the home page", note: "Careful, source-based reading", noteBody: "Each article has a separate editorial manuscript in this language. Check the evidence, limitations, and medical questions before making a decision.", navLabel: "Browse by category", all: "All articles" },
  zh: { home: "首页", eyebrow: "主题", core: "指南", columns: "专栏", coreEyebrow: "GUIDES", columnsEyebrow: "COLUMN", coreLead: "按顺序学习理解再生医学所需的基础知识。", columnsLead: "轻松阅读——研究花絮与时令话题等。", back: "返回首页", note: "基于来源的谨慎阅读", noteBody: "每篇文章都有单独的中文编辑原稿。做出决定前，请确认证据、局限性和需要向医生询问的问题。", navLabel: "按主题浏览", all: "全部文章" },
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
  return <div lang={locale === "en" ? "en" : "zh-CN"} className="localized-page"><div className="container inner-page"><Breadcrumbs homeLabel={copy.home} homeHref={`/${locale}/`} locale={locale} items={[{ label: title }]} /><div className="page-heading"><span className="eyebrow">{copy.eyebrow}</span><h1>{title}</h1><p>{description}</p></div><div className="question-box"><div><h2>{copy.note}</h2><p>{copy.noteBody}</p></div><Link className="button outline" href={`/${locale}/`}>{copy.back}</Link></div><nav className="filter-links" aria-label={copy.navLabel}><Link href={`/${locale}/articles/`}>{copy.all}</Link>{categories.map((item) => <Link key={item.slug} href={`/${locale}/categories/${item.slug}/`} className={item.slug === slug ? "active" : undefined} aria-current={item.slug === slug ? "page" : undefined}>{localizedCategoryName(locale, item.slug)}</Link>)}</nav><section aria-label={copy.core}><span className="eyebrow">{copy.coreEyebrow}</span><h2 className="listing-heading">{copy.core}</h2><p className="listing-lead">{copy.coreLead}</p><LocalizedArticleGrid locale={locale} list={core} /></section>{columns.length > 0 && <section aria-label={copy.columns} className="columns-section"><span className="eyebrow">{copy.columnsEyebrow}</span><h2 className="listing-heading">{copy.columns}</h2><p className="listing-lead">{copy.columnsLead}</p><LocalizedArticleGrid locale={locale} list={columns} /></section>}</div></div>;
}
