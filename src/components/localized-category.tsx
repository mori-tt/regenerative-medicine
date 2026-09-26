import Link from "next/link";
import { articles, categories, columnArticles, coreArticles, visibleArticles } from "@/content/articles";
import type { SiteLocale } from "@/content/locales";
import { localizedCategoryName } from "@/content/locales";
import { featuredSlugs, groupArticlesBySubcategory } from "@/content/subcategories";
import { LocalizedArticleGrid } from "./localized-articles";
import { Breadcrumbs } from "./content";

const categoryDescriptions = {
  en: {
    "stem-basics": "What stem cells are, how they differ from ordinary cells, and how they relate to regenerative medicine.",
    "health-basics": "How cells and organs work, common conditions, tests, and everyday health — the grounding for reading about regenerative medicine.",
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
    "health-basics": "细胞与器官的工作原理、常见疾病、检查与日常健康知识——理解再生医学的基础。",
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
  en: { home: "Home", eyebrow: "TOPIC", core: "Guides", columns: "Columns", coreEyebrow: "GUIDES", columnsEyebrow: "COLUMN", coreLead: "Learn the essentials for understanding regenerative medicine, in order.", columnsLead: "Lighter reads — stories behind the research and seasonal topics.", back: "Back to the home page", note: "Careful, source-based reading", noteBody: "Each article has a separate editorial manuscript in this language. Check the evidence, limitations, and medical questions before making a decision.", navLabel: "Browse by category", all: "All articles", featured: "Start here", featuredEyebrow: "START HERE", featuredLead: "Articles to read first in this category.", badge: "Featured", subnavLabel: "Browse by theme", topicsTitle: "Browse by topic", others: "Other articles" },
  zh: { home: "首页", eyebrow: "主题", core: "指南", columns: "专栏", coreEyebrow: "GUIDES", columnsEyebrow: "COLUMN", coreLead: "按顺序学习理解再生医学所需的基础知识。", columnsLead: "轻松阅读——研究花絮与时令话题等。", back: "返回首页", note: "基于来源的谨慎阅读", noteBody: "每篇文章都有单独的中文编辑原稿。做出决定前，请确认证据、局限性和需要向医生询问的问题。", navLabel: "按主题浏览", all: "全部文章", featured: "从这里开始", featuredEyebrow: "START HERE", featuredLead: "本主题中建议先读的文章。", badge: "推荐", subnavLabel: "按小主题浏览", topicsTitle: "按小主题阅读", others: "其他文章" },
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
  const groups = groupArticlesBySubcategory(slug, core, {
    ja: "その他の記事",
    en: copy.others,
    zh: copy.others,
  });
  const featuredSet = new Set(featuredSlugs(slug));
  const featured = featuredSlugs(slug)
    .map((s) => core.find((a) => a.slug === s))
    .filter((a) => a !== undefined);
  return <div lang={locale === "en" ? "en" : "zh-CN"} className="localized-page"><div className="container inner-page"><Breadcrumbs homeLabel={copy.home} homeHref={`/${locale}/`} locale={locale} items={[{ label: title }]} /><div className="page-heading"><span className="eyebrow">{copy.eyebrow}</span><h1>{title}</h1><p>{description}</p></div><div className="question-box"><div><h2>{copy.note}</h2><p>{copy.noteBody}</p></div><Link className="button outline" href={`/${locale}/`}>{copy.back}</Link></div><nav className="filter-links" aria-label={copy.navLabel}><Link href={`/${locale}/articles/`}>{copy.all}</Link>{categories.map((item) => <Link key={item.slug} href={`/${locale}/categories/${item.slug}/`} className={item.slug === slug ? "active" : undefined} aria-current={item.slug === slug ? "page" : undefined}>{localizedCategoryName(locale, item.slug)}</Link>)}</nav><nav className="topic-panel" aria-label={copy.subnavLabel}><p className="topic-panel-title">{copy.topicsTitle}</p><ol className="topic-panel-list">{groups.map(({ group, articles: groupArticles }, index) => <li key={group.key}><Link href={`#sub-${group.key}`}><span className="topic-num" aria-hidden="true">{index + 1}</span><span className="topic-name">{locale === "en" ? group.en : group.zh}</span><span className="topic-count">{groupArticles.length}</span></Link></li>)}</ol></nav>{featured.length > 0 && <section aria-label={copy.featured} className="featured-section"><span className="eyebrow">{copy.featuredEyebrow}</span><h2 className="listing-heading">{copy.featured}</h2><p className="listing-lead">{copy.featuredLead}</p><LocalizedArticleGrid locale={locale} list={featured} badgeLabel={copy.badge} /></section>}{groups.map(({ group, articles: groupArticles }, index) => <section key={group.key} id={`sub-${group.key}`} aria-label={locale === "en" ? group.en : group.zh}><h2 className="listing-heading"><span className="topic-num" aria-hidden="true">{index + 1}</span>{locale === "en" ? group.en : group.zh}<span className="listing-count">{groupArticles.length}</span></h2>{group.desc && <p className="listing-lead">{locale === "en" ? group.desc.en : group.desc.zh}</p>}{group.keywords && <div className="kw-chips" aria-label={locale === "en" ? "Related keywords" : "相关关键词"}>{(locale === "en" ? group.keywords.en : group.keywords.zh).map((kw) => <a key={kw} className="kw-chip" href={`/${locale}/search/?q=${encodeURIComponent(kw)}`}>{kw}</a>)}</div>}<LocalizedArticleGrid locale={locale} list={groupArticles} badgeLabel={copy.badge} badgeSlugs={featuredSet} /></section>)}{columns.length > 0 && <section aria-label={copy.columns} className="columns-section"><span className="eyebrow">{copy.columnsEyebrow}</span><h2 className="listing-heading">{copy.columns}</h2><p className="listing-lead">{copy.columnsLead}</p><LocalizedArticleGrid locale={locale} list={columns} /></section>}</div></div>;
}
