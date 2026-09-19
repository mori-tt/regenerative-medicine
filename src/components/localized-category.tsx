import Link from "next/link";
import type { SiteLocale } from "@/content/locales";
import { LocalizedArticles } from "./localized-articles";

const categories = {
  en: {
    basics: ["The basics", "Start with the essential concepts and vocabulary."],
    "stem-cells": ["Stem cells", "Learn how iPS cells, ES cells, and somatic stem cells differ."],
    treatment: ["Considering treatment", "Questions about evidence, safety, cost, and consent."],
    research: ["Research & news", "How to read research results without overestimating them."],
  },
  zh: {
    basics: ["再生医学基础", "从基本概念和常用词汇开始。"],
    "stem-cells": ["认识干细胞", "了解 iPS 细胞、ES 细胞和体性干细胞的区别。"],
    treatment: ["考虑治疗时", "整理证据、安全性、费用和知情同意相关问题。"],
    research: ["研究与新闻", "学习如何阅读研究结果，避免过度解读。"],
  },
} as const;

export function LocalizedCategory({ locale, slug }: { locale: SiteLocale; slug: keyof typeof categories.en }) {
  const [title, description] = categories[locale][slug];
  const en = locale === "en";
  return <><div className="container inner-page"><div className="page-heading"><span className="eyebrow">{en ? "TOPIC" : "主题"}</span><h2>{title}</h2><p>{description}</p></div><div className="question-box"><div><h2>{en ? "Careful, source-based reading" : "基于来源的谨慎阅读"}</h2><p>{en ? "Each article has a separate editorial manuscript in this language. Check the evidence, limitations, and medical questions before making a decision." : "每篇文章都有单独的中文编辑原稿。做出决定前，请确认证据、局限性和需要向医生询问的问题。"}</p></div><Link className="button outline" href={`/${locale}/`}>{en ? "Back to the home page" : "返回首页"}</Link></div></div><LocalizedArticles locale={locale} category={slug} /></>;
}
