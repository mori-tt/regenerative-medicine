import Link from "next/link";
import type { SiteLocale } from "@/content/locales";

const labels = {
  en: { about: "About this site", "editorial-policy": "Editorial policy", supervision: "Medical review", advertising: "Advertising", privacy: "Privacy policy", contact: "Contact", guide: "Getting started", glossary: "Glossary", faq: "Frequently asked questions", safety: "Safety first", regulation: "Rules and systems", terms: "Terms of use", corrections: "Corrections and updates", citations: "Citations and reuse", disclaimer: "Important notice", accessibility: "Accessibility", "site-guide": "Site guide", updates: "Updates" },
  zh: { about: "关于本网站", "editorial-policy": "编辑方针", supervision: "医学审核", advertising: "广告刊登", privacy: "隐私政策", contact: "联系我们", guide: "入门指南", glossary: "术语表", faq: "常见问题", safety: "安全性", regulation: "制度与法规", terms: "使用条款", corrections: "勘误与更新", citations: "引用与转载", disclaimer: "重要说明", accessibility: "无障碍", "site-guide": "网站地图", updates: "更新信息" },
} as const;
export type InfoSlug = keyof typeof labels.en;
export function infoTitleFor(locale: SiteLocale, slug: InfoSlug) { return labels[locale][slug]; }

export function LocalizedInfo({ locale, slug }: { locale: SiteLocale; slug: InfoSlug }) {
  const en = locale === "en";
  const title = labels[locale][slug];
  const sections = en ? [["Purpose and scope", "This page explains how Regenerative Medicine Note prepares and presents information about regenerative medicine and stem cells.", "Medical information can change. We distinguish general education from personal diagnosis or treatment advice."], ["Evidence and transparency", "Editorial manuscripts identify evidence, limitations, uncertainty, and the questions a reader may wish to ask a healthcare professional.", "Advertising and editorial decisions are kept separate. Any future sponsorship will be labelled clearly."], ["Reader safety", "Do not begin, stop, or change treatment based only on this website. Discuss personal circumstances with a qualified healthcare professional and check current official sources.", "If you notice an error or a wording that could cause misunderstanding, please contact the editorial team."]] : [["目的与范围", "本页面说明“再生医学笔记”如何整理和呈现再生医学与干细胞相关信息。", "医学信息可能发生变化。我们会区分一般性知识与个人诊断、治疗建议。"], ["证据与透明度", "编辑原稿会说明证据、局限性、不确定性，以及读者可以向医疗专业人员询问的问题。", "广告与编辑决定分开管理。今后如有赞助，会清楚标明。"], ["读者安全", "不要仅根据本网站开始、停止或改变治疗。涉及个人情况时，请咨询有资质的医疗专业人员，并确认最新官方资料。", "如果发现错误或可能造成误解的表述，请联系编辑团队。"]];
  return <div className="container inner-page localized-article"><div className="page-heading"><span className="eyebrow">{en ? "INFORMATION" : "信息"}</span><h1>{title}</h1><p>{en ? "A transparent guide to how this medical information site is operated." : "关于本医疗信息网站运营方式的透明说明。"}</p></div><div className="prose">{sections.map(([heading, first, second]) => <section key={heading}><h2>{heading}</h2><p>{first}</p><p>{second}</p></section>)}</div><div className="policy-callout"><h2>{en ? "Related pages" : "相关页面"}</h2><p><Link href={`/${locale}/articles/`}>{en ? "Browse translated articles" : "浏览中文文章"} →</Link></p><p><Link href={`/${locale}/`}>{en ? "Back to the home page" : "返回首页"} →</Link></p></div></div>;
}
