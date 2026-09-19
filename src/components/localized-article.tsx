import Link from "next/link";
import Image from "next/image";
import { articles, categoryFor, isReviewed, type Article } from "@/content/articles";
import { articleLocales } from "@/content/article-locales";
import { articleBodiesResearch } from "@/content/article-bodies-research";
import { articleBodiesTreatment } from "@/content/article-bodies-treatment";
import { articleBodiesStemCells } from "@/content/article-bodies-stem-cells";
import { articleBodiesBasicsA } from "@/content/article-bodies-basics-a";
import { articleBodiesBasicsB } from "@/content/article-bodies-basics-b";
import { articleGuideSections } from "@/content/article-bodies-guides";
import { localizedArticle, localizedCategoryName, type SiteLocale } from "@/content/locales";
import type { ArticleBodyLocale } from "@/content/article-bodies-research";
import { AdSlot, Breadcrumbs, JsonLd } from "@/components/content";
import { CellArt } from "@/components/visuals";
import { ReviewerProfile } from "@/components/reviewer-profile";
import { absolute, publicAsset, site } from "@/lib/site";
import { publication } from "@/lib/site-config";

const englishTerms: Record<string, string> = {
  basics: "The Basics", stem: "Stem Cells", cell: "Cell", cells: "Cells", tissue: "Tissue", tissues: "Tissues", organ: "Organ", organs: "Organs", treatment: "Treatment", research: "Research", safety: "Safety", cost: "Cost", insurance: "Insurance", clinical: "Clinical", trials: "Trials", trial: "Trial", study: "Study", studies: "Studies", immune: "Immune System", blood: "Blood", bone: "Bone", skin: "Skin", heart: "Heart", nerve: "Nerve", brain: "Brain", gene: "Genes", genes: "Genes", genome: "Genome", culture: "Cell Culture", quality: "Quality", consent: "Informed Consent", followup: "Follow-up", aftercare: "Aftercare", decision: "Decision-making", family: "Family Support", doctor: "Doctor", hospital: "Hospital", rehabilitation: "Rehabilitation", statistics: "Statistics", evidence: "Evidence", future: "Future Research",
};
const chineseTerms: Record<string, string> = { basics: "基础知识", stem: "干细胞", cell: "细胞", cells: "细胞", tissue: "组织", tissues: "组织", organ: "器官", organs: "器官", treatment: "治疗", research: "研究", safety: "安全性", cost: "费用", insurance: "保险", clinical: "临床", trials: "试验", trial: "试验", study: "研究", studies: "研究", immune: "免疫", blood: "血液", bone: "骨骼", skin: "皮肤", heart: "心脏", nerve: "神经", brain: "大脑", gene: "基因", genes: "基因", genome: "基因组", culture: "培养", quality: "质量", consent: "知情同意", followup: "随访", aftercare: "治疗后照护", decision: "决策", family: "家庭支持", doctor: "医生", hospital: "医院", rehabilitation: "康复", statistics: "统计", evidence: "证据", future: "未来研究" };

function topicFromSlug(slug: string, locale: SiteLocale) {
  const terms = locale === "en" ? englishTerms : chineseTerms;
  const words = slug.split("-").map((word) => terms[word] || word);
  return locale === "en" ? words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ") : words.join("・");
}

const bodyBySlug: Record<string, { en: ArticleBodyLocale; zh: ArticleBodyLocale }> = {
  ...articleBodiesResearch,
  ...articleBodiesTreatment,
  ...articleBodiesStemCells,
  ...articleBodiesBasicsA,
  ...articleBodiesBasicsB,
};

export type LocalizedSection = { title: string; paragraphs: string[] };

function tupleSections(sections: [string, string, string][]): LocalizedSection[] {
  return sections.map(([title, first, second]) => ({
    title,
    paragraphs: second ? [first, second] : [first],
  }));
}

const fallbackPoints = {
  en: [
    "The topic name alone does not establish effectiveness or safety.",
    "Research findings, approved use, and individual treatment decisions must be separated.",
    "Discuss personal decisions with a qualified healthcare professional.",
  ],
  zh: ["主题名称本身不能证明疗效或安全性。", "必须区分研究成果、获批准的使用范围和个人治疗决定。", "涉及个人决定时，请咨询有资质的医疗专业人员。"],
} as const;

const fallbackSections: Record<SiteLocale, [string, string, string][]> = {
  en: [
    ["How to read the evidence", "A laboratory result, an animal study, and a human clinical study answer different questions. Check participants, comparison groups, outcome measures, and follow-up time.", "Do not treat a promising result or a treatment name as proof of benefit. Limitations are part of the evidence and should be read alongside positive findings."],
    ["Safety and practical questions", "Ask about possible harms, monitoring, emergency arrangements, total cost, alternatives, and what happens if the expected benefit is not seen.", "Request written information and avoid making a rushed decision. A second opinion can help when interests or recommendations differ."],
    ["Before making a decision", "This page is educational and does not diagnose or recommend a personal treatment. Individual suitability depends on the disease, symptoms, tests, medical history, and current medicines.", "Use the information as a question list for a consultation, not as a substitute for one."],
  ],
  zh: [
    ["如何阅读证据", "实验室结果、动物研究和人体临床研究回答的问题不同。请确认参加者、对照组、评价指标和随访时间。", "有希望的结果或治疗名称本身不能证明获益。研究局限也属于证据的一部分，应与积极结果一起阅读。"],
    ["安全性与实际问题", "请询问可能的伤害、观察方式、紧急情况安排、总费用、其他选择，以及没有达到预期效果时的安排。", "请索取书面资料，避免仓促决定。当立场或建议不同时，第二诊疗意见会有帮助。"],
    ["做出决定前", "本页面用于学习，不做诊断也不推荐个人治疗。是否适合因疾病、症状、检查、病史与用药而异。", "请把信息作为就诊提问清单，而非替代咨询。"],
  ],
};

const chrome = {
  en: {
    home: "Home", editedBy: "Edited by the Regenerative Medicine Guide editorial team", position: "Position: general information",
    updated: "Updated", readMinutes: (n: number) => `About ${n} min read`, keyPoints: "Key points",
    toc: "On this page", references: "Sources and further reading", referencesNote: "Source materials may be updated. Check the original publishers for details.",
    reviewerDone: "Reviewing physician for this article", reviewerPending: "About medical review",
    reviewerPendingBody: "The medical content of this article is not labelled as reviewed until per-article review records are finalized.",
    reviewerPolicy: "Read the review policy", disclaimer: "This article provides general information. For individual diagnosis or treatment, consult a physician.",
    related: "Related reading", draftNotice: "This article organizes general information; it does not present grounds or recommendations for individual diagnosis or treatment. Base medical decisions on current public information and consultation with medical professionals.",
    editorialManuscript: "Editorial manuscript", translatedVersion: "Translated version", readGuide: "Read the guide",
  },
  zh: {
    home: "首页", editedBy: "编辑：再生医学指南编辑部", position: "定位：一般信息",
    updated: "更新", readMinutes: (n: number) => `约${n}分钟阅读`, keyPoints: "文章要点",
    toc: "本文目录", references: "参考资料", referencesNote: "资料内容可能更新。详情请确认发布方信息。",
    reviewerDone: "本文的审核医生", reviewerPending: "关于医学审核",
    reviewerPendingBody: "本文的医学内容在按文章的审核记录确定前，不会标注为已审核。",
    reviewerPolicy: "阅读审核方针", disclaimer: "本文提供一般信息。个别诊断与治疗请咨询医生。",
    related: "相关阅读", draftNotice: "本文整理一般信息，不作为个别诊断与治疗的依据或推荐。医疗判断请基于最新公共信息与医疗专业人员咨询。",
    editorialManuscript: "编辑原稿", translatedVersion: "翻译版", readGuide: "阅读指南",
  },
} as const;

export function categoryLabelFor(locale: SiteLocale, category: Article["category"]): string {
  return localizedCategoryName(locale, category);
}

export function localizedArticleFor(locale: SiteLocale, source: Article) {
  if (source.slug === "what-is-regenerative-medicine") {
    const base = localizedArticle[locale];
    return {
      title: base.title,
      description: base.description,
      category: base.category,
      points: [...base.points],
      sections: tupleSections(base.sections as unknown as [string, string, string][]),
      references: [{ title: "MHLW: Regenerative medicine", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei_iryou/index.html" }],
    };
  }
  const translated = articleLocales[source.slug]?.[locale];
  const topic = translated ? translated.title : topicFromSlug(source.slug, locale);
  const en = locale === "en";
  const body = bodyBySlug[source.slug]?.[locale];
  const guide = articleGuideSections[locale][source.category] ?? [];
  return {
    title: translated ? translated.title : en ? `${topic}: A Careful Guide` : `${topic}：谨慎理解指南`,
    description: translated
      ? translated.description
      : en
        ? `A carefully prepared guide to ${topic.toLowerCase()}, including evidence, limitations, safety, and questions to discuss with a healthcare professional.`
        : `介绍${topic}，包括证据、局限性、安全性，以及可以与医疗专业人员讨论的问题。`,
    category: categoryLabelFor(locale, source.category),
    points: body ? body.points : [...fallbackPoints[locale]],
    sections: body
      ? [...body.sections, ...guide]
      : [...tupleSections(fallbackSections[locale]), ...guide],
    references: source.references,
  };
}

export function LocalizedArticleCard({
  locale,
  source,
  compact = false,
}: {
  locale: SiteLocale;
  source: Article;
  compact?: boolean;
}) {
  const copy = chrome[locale];
  const article = localizedArticleFor(locale, source);
  const cat = categoryFor(source.category);
  return (
    <article className={`article-card ${compact ? "compact" : ""}`}>
      <Link
        className="article-image"
        href={`/${locale}/articles/${source.slug}/`}
        tabIndex={-1}
        aria-hidden="true"
      >
        {source.image ? (
          <Image
            src={publicAsset(source.image)}
            alt={source.imageAlt ?? article.title}
            width={1280}
            height={853}
            unoptimized
          />
        ) : (
          <CellArt variant={source.illustration} />
        )}
        <span className={`category-label ${cat.color}`}>{article.category}</span>
      </Link>
      <div className="article-card-body">
        <div className="article-meta">
          <span>{isReviewed(source) ? copy.editorialManuscript : `${copy.editorialManuscript} · ${copy.translatedVersion}`}</span>
          <span>{copy.readMinutes(source.readingMinutes)}</span>
        </div>
        <h3>
          <Link href={`/${locale}/articles/${source.slug}/`}>{article.title}</Link>
        </h3>
        {!compact && <p>{article.description}</p>}
        <div className="card-bottom">
          <span>{source.updatedAt.replaceAll("-", ".")} · {copy.updated}</span>
        </div>
      </div>
    </article>
  );
}

export function LocalizedArticle({ locale, source }: { locale: SiteLocale; source?: Article }) {
  const copy = chrome[locale];
  const en = locale === "en";
  const fallbackBase = localizedArticle[locale];
  const base = source
    ? localizedArticleFor(locale, source)
    : {
        title: fallbackBase.title,
        description: fallbackBase.description,
        category: fallbackBase.category,
        points: [...fallbackBase.points],
        sections: tupleSections(fallbackBase.sections as unknown as [string, string, string][]),
        references: [{ title: en ? "MHLW: Regenerative medicine" : "厚生劳动省：再生医学", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei_iryou/index.html" }],
      };
  const cat = source ? categoryFor(source.category) : null;
  const reviewed = source ? isReviewed(source) : false;
  const sectionIds = base.sections.map((_, index) => `section-${index + 1}`);
  return (
    <div lang={en ? "en" : "zh-CN"} className="localized-page">
      <div className="container inner-page">
        <Breadcrumbs
          homeLabel={copy.home}
          homeHref={`/${locale}/`}
          items={[
            ...(cat && source ? [{ label: base.category, href: `/${locale}/categories/${cat.slug}/` }] : []),
            { label: base.title },
          ]}
        />
        {reviewed && source && (
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Article",
              headline: base.title,
              description: base.description,
              inLanguage: en ? "en" : "zh-CN",
              datePublished: source.publishedAt,
              dateModified: source.updatedAt,
              mainEntityOfPage: absolute(`/${locale}/articles/${source.slug}/`),
              author: {
                "@type": "Organization",
                name: "Regenerative Medicine Guide",
                url: absolute(`/${locale}/about/`),
              },
              publisher: {
                "@type": "Organization",
                name: site.name,
                url: absolute(),
              },
              citation: source.references.map((r) => r.url),
            }}
          />
        )}
        {!reviewed && publication.showPreparationNotices && (
          <div className="draft-notice">{copy.draftNotice}</div>
        )}
        <div className="article-layout">
          <article>
            <header className="article-heading">
              {cat && source && (
                <Link className="category-label" href={`/${locale}/categories/${cat.slug}/`}>
                  {base.category}
                </Link>
              )}
              <h1>{base.title}</h1>
              <p>{base.description}</p>
              {source && (
                <div className="byline">
                  <span>{copy.editedBy}</span>
                  <span>{copy.position}</span>
                  <time dateTime={source.updatedAt}>
                    {copy.updated}：{source.updatedAt.replaceAll("-", ".")}
                  </time>
                  <span>{copy.readMinutes(source.readingMinutes)}</span>
                </div>
              )}
            </header>
            {source && (
              <div className="article-cover">
                {source.image ? (
                  <Image
                    src={publicAsset(source.image)}
                    alt={source.imageAlt ?? base.title}
                    width={1280}
                    height={853}
                    unoptimized
                  />
                ) : (
                  <CellArt variant={source.illustration} />
                )}
              </div>
            )}
            <div className="key-points">
              <h2>{copy.keyPoints}</h2>
              <ul>
                {base.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="article-body">
              {base.sections.map((section, index) => (
                <section id={sectionIds[index]} key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
            <section className="references">
              <h2>{copy.references}</h2>
              <ol>
                {base.references.map((reference) => (
                  <li key={reference.url}>
                    <a href={reference.url} target="_blank" rel="noopener noreferrer">
                      {reference.title} ↗
                    </a>
                  </li>
                ))}
              </ol>
              <p>{copy.referencesNote}</p>
            </section>
            <section className="reviewer-box">
              <h2>{reviewed ? copy.reviewerDone : copy.reviewerPending}</h2>
              {reviewed && source?.reviewer ? (
                <>
                  <a href={source.reviewer.profileUrl}>{source.reviewer.name}</a>
                  <p>
                    {source.reviewer.credentials} / {source.reviewer.affiliation}
                  </p>
                  <p>
                    {en ? "Reviewed" : "审核日期"}：{source.reviewer.reviewedAt}
                  </p>
                </>
              ) : (
                <>
                  <p>{copy.reviewerPendingBody}</p>
                  <ReviewerProfile compact />
                </>
              )}
              <Link href={`/${locale}/supervision/`}>{copy.reviewerPolicy} →</Link>
            </section>
            <p className="disclaimer">{copy.disclaimer}</p>
          </article>
          <aside className="article-sidebar">
            <nav className="toc" aria-label={copy.toc}>
              <h2>{copy.toc}</h2>
              <ol>
                {base.sections.map((section, index) => (
                  <li key={sectionIds[index]}>
                    <a href={`#${sectionIds[index]}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <AdSlot compact locale={locale} />
          </aside>
        </div>
        {source && (
          <section className="related">
            <h2>{copy.related}</h2>
            <div className="article-grid">
              {articles
                .filter((a) => a.slug !== source.slug)
                .slice(0, 3)
                .map((a) => (
                  <LocalizedArticleCard locale={locale} source={a} key={a.slug} />
                ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
