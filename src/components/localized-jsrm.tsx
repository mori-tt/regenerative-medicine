import Link from "next/link";
import { Breadcrumbs, JsonLd } from "./content";
import { Icon } from "./visuals";
import { jsrmGuideLocales, jsrmChapterLocales } from "@/content/jsrm-locales";
import { jsrmChapters } from "@/content/jsrm-chapters";
import type { SiteLocale } from "@/content/locales";

export function LocalizedJsrmGuide({ locale }: { locale: SiteLocale }) {
  const en = locale === "en";
  const copy = jsrmGuideLocales[locale];
  const chapters = jsrmChapters.map((chapter) => ({
    ...chapter,
    ...(jsrmChapterLocales[locale][chapter.slug]
      ? {
          title: jsrmChapterLocales[locale][chapter.slug].title,
          description: jsrmChapterLocales[locale][chapter.slug].description,
        }
      : {}),
  }));
  return (
    <div lang={en ? "en" : "zh-CN"} className="localized-page">
      <div className="container inner-page jsrm-page">
        <Breadcrumbs
          homeLabel={en ? "Home" : "首页"}
          homeHref={`/${locale}/`}
          locale={locale}
          items={[{ label: copy.title, href: undefined }]}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: copy.title,
            description: copy.description,
            inLanguage: en ? "en" : "zh-CN",
            author: { "@type": "Organization", name: "Regenerative Medicine Guide" },
            about: {
              "@type": "Organization",
              name: "Japanese Society for Regenerative Medicine",
            },
          }}
        />
        <header className="jsrm-hero">
          <div>
            <span className="eyebrow">JAPANESE SOCIETY FOR REGENERATIVE MEDICINE</span>
            <h1>{copy.heroTitle}</h1>
            <p>{copy.heroBody}</p>
            <div className="jsrm-hero-actions">
              <a
                className="button primary"
                href="https://www.jsrm.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.officialSite} <Icon name="arrow" size={20} />
              </a>
              <span>{copy.officialNote}</span>
            </div>
          </div>
          <div className="jsrm-hero-mark" aria-hidden="true">
            <span>J S R M</span>
            <small>REGENERATIVE MEDICINE</small>
          </div>
        </header>

        <section className="jsrm-intro-grid">
          <div>
            <span className="eyebrow">WHY IT MATTERS</span>
            <h2>{copy.whyTitle}</h2>
          </div>
          <div>
            {copy.whyBody.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="jsrm-chapters-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE 10-CHAPTER GUIDE</span>
              <h2>
                {copy.chaptersTitle}
                <span className="heading-dot">.</span>
              </h2>
            </div>
            <span className="section-caption">{copy.chaptersCaption}</span>
          </div>
          <div className="jsrm-chapters-grid">
            {chapters.map((chapter) => (
              <Link
                href={`/${locale}/jsrm/${chapter.slug}/`}
                key={chapter.slug}
                className="jsrm-chapter-card"
              >
                <span>{chapter.number}</span>
                <div>
                  <small>{chapter.eyebrow}</small>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.description}</p>
                </div>
                <Icon name="arrow" size={19} />
              </Link>
            ))}
          </div>
        </section>

        <section className="jsrm-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHAT THE SOCIETY DOES</span>
              <h2>
                {copy.rolesTitle}
                <span className="heading-dot">.</span>
              </h2>
            </div>
          </div>
          <div className="jsrm-role-grid">
            {copy.roles.map(([roleTitle, body], index) => (
              <article key={roleTitle}>
                <span>0{index + 1}</span>
                <h3>{roleTitle}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="jsrm-history-section">
          <div className="jsrm-history-copy">
            <span className="eyebrow">A BRIEF HISTORY</span>
            <h2>{copy.historyTitle}</h2>
            <p>{copy.historyBody}</p>
            <a
              className="text-link"
              href="https://www.jsrm.jp/whoweare/pastandpresent/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.historyLink} <span><Icon name="arrow" size={20} /></span>
            </a>
          </div>
          <ol className="jsrm-timeline">
            {copy.timeline.map(([year, event]) => (
              <li key={year}>
                <time>{year}</time>
                <span>{event}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="jsrm-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CERTIFICATION</span>
              <h2>
                {copy.certTitle}
                <span className="heading-dot">.</span>
              </h2>
            </div>
            <a
              className="small-link"
              href="https://www.jsrm.jp/activity/certification/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.certOfficial} <Icon name="arrow" size={18} />
            </a>
          </div>
          <p className="jsrm-section-lead">{copy.certLead}</p>
          <div className="jsrm-certification-grid">
            {copy.certs.map(([certTitle, body], index) => (
              <article key={certTitle}>
                <span className="category-number">0{index + 1}</span>
                <h3>{certTitle}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="jsrm-caution">
            <Icon name="check" size={28} />
            <div>
              <strong>{copy.certCautionTitle}</strong>
              <p>{copy.certCautionBody}</p>
            </div>
          </div>
        </section>

        <section className="jsrm-law-section">
          <div>
            <span className="eyebrow">LAW & SAFETY</span>
            <h2>{copy.lawTitle}</h2>
          </div>
          <div>
            {copy.lawBody.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <a
              className="text-link"
              href="https://www.jsrm.jp/activity/regulatoryaffairs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.lawLink} <span><Icon name="arrow" size={20} /></span>
            </a>
          </div>
        </section>

        <section className="jsrm-reader-section">
          <span className="eyebrow">FOR READERS</span>
          <h2>{copy.checklistTitle}</h2>
          <div className="jsrm-checklist">
            {copy.checklist.map((item, index) => (
              <div key={item.slice(0, 16)}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="jsrm-reviewer-section">
          <div>
            <span className="eyebrow">MEDICAL REVIEW AT THIS SITE</span>
            <h2>{copy.reviewerTitle}</h2>
            <p>{copy.reviewerBody}</p>
          </div>
          <Link className="button outline" href={`/${locale}/supervision/`}>
            {copy.reviewerLink} <Icon name="arrow" size={19} />
          </Link>
        </section>

        <section className="jsrm-sources">
          <span className="eyebrow">PRIMARY SOURCES</span>
          <h2>{copy.sourcesTitle}</h2>
          <div>
            {(en
              ? [
                  ["JSRM Official site", "https://www.jsrm.jp/"],
                  ["Prospectus", "https://www.jsrm.jp/whoweare/prospectus/"],
                  ["History", "https://www.jsrm.jp/whoweare/pastandpresent/"],
                  ["Certification", "https://www.jsrm.jp/activity/certification/"],
                  ["Regulatory information", "https://www.jsrm.jp/activity/regulatoryaffairs/"],
                ]
              : [
                  ["日本再生医学学会官方网站", "https://www.jsrm.jp/"],
                  ["设立宗旨", "https://www.jsrm.jp/whoweare/prospectus/"],
                  ["沿革", "https://www.jsrm.jp/whoweare/pastandpresent/"],
                  ["认定制度", "https://www.jsrm.jp/activity/certification/"],
                  ["新法相关信息", "https://www.jsrm.jp/activity/regulatoryaffairs/"],
                ]
            ).map(([label, url]) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                {label} ↗
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const sourceLabels: Record<SiteLocale, Record<string, string>> = {
  en: {
    "日本再生医療学会 公式サイト": "JSRM official site",
    "日本再生医療学会：入会案内": "JSRM: Membership",
    "日本再生医療学会：公的研究": "JSRM: Public research",
    "日本再生医療学会：新法関連情報": "JSRM: Regulatory information",
    "日本再生医療学会：本会について": "JSRM: About the society",
    "日本再生医療学会：沿革": "JSRM: History",
    "日本再生医療学会：補償制度": "JSRM: Compensation",
    "日本再生医療学会：認定制度": "JSRM: Certification",
    "監修者プロフィール": "Reviewer profile",
    "設立趣旨": "Prospectus",
    "認定制度 FAQ": "Certification FAQ",
    "厚生労働省：再生医療": "MHLW: Regenerative medicine",
    "学術事業": "Academic programs",
    AMED: "AMED",
    JST: "JST",
  },
  zh: {
    "日本再生医療学会 公式サイト": "日本再生医学学会官方网站",
    "日本再生医療学会：入会案内": "学会：入会指南",
    "日本再生医療学会：公的研究": "学会：公共研究",
    "日本再生医療学会：新法関連情報": "学会：新法相关信息",
    "日本再生医療学会：本会について": "学会：关于本会",
    "日本再生医療学会：沿革": "学会：沿革",
    "日本再生医療学会：補償制度": "学会：补偿制度",
    "日本再生医療学会：認定制度": "学会：认定制度",
    "監修者プロフィール": "审核者简介",
    "設立趣旨": "设立宗旨",
    "認定制度 FAQ": "认定制度 FAQ",
    "厚生労働省：再生医療": "厚生劳动省：再生医学",
    "学術事業": "学术事业",
    AMED: "AMED",
    JST: "JST",
  },
};

function sourceLabelFor(locale: SiteLocale, label: string): string {
  return sourceLabels[locale][label] ?? label;
}

export function LocalizedJsrmChapter({
  locale,
  slug,
}: {
  locale: SiteLocale;
  slug: string;
}) {
  const en = locale === "en";
  const index = jsrmChapters.findIndex((item) => item.slug === slug);
  const source = jsrmChapters[index];
  const translated = jsrmChapterLocales[locale][slug];
  const previous = index > 0 ? jsrmChapters[index - 1] : undefined;
  const next = index < jsrmChapters.length - 1 ? jsrmChapters[index + 1] : undefined;
  const previousTitle = previous ? jsrmChapterLocales[locale][previous.slug]?.title ?? previous.title : "";
  const nextTitle = next ? jsrmChapterLocales[locale][next.slug]?.title ?? next.title : "";
  return (
    <div lang={en ? "en" : "zh-CN"} className="localized-page">
      <div className="container inner-page jsrm-chapter-page">
        <Breadcrumbs
          homeLabel={en ? "Home" : "首页"}
          homeHref={`/${locale}/`}
          locale={locale}
          items={[
            { label: jsrmGuideLocales[locale].title, href: `/${locale}/jsrm/` },
            { label: translated.title },
          ]}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: translated.title,
            description: translated.description,
            inLanguage: en ? "en" : "zh-CN",
            author: { "@type": "Organization", name: "Regenerative Medicine Guide" },
            about: {
              "@type": "Organization",
              name: "Japanese Society for Regenerative Medicine",
            },
          }}
        />
        <header className="jsrm-chapter-header">
          <span className="eyebrow">
            {source.number} · {source.eyebrow}
          </span>
          <h1>{translated.title}</h1>
          <p>{translated.description}</p>
        </header>
        <div className="jsrm-chapter-layout">
          <aside className="jsrm-chapter-nav">
            <span className="eyebrow">10 CHAPTERS</span>
            <Link href={`/${locale}/jsrm/`}>
              {en ? "Back to the overview" : "返回总览"}
            </Link>
            <span className="jsrm-chapter-nav-current">
              {source.number} {translated.title}
            </span>
            {previous && (
              <Link href={`/${locale}/jsrm/${previous.slug}/`}>
                ← {previous.number} {previousTitle}
              </Link>
            )}
            {next && (
              <Link href={`/${locale}/jsrm/${next.slug}/`}>
                {next.number} {nextTitle} →
              </Link>
            )}
          </aside>
          <article className="jsrm-chapter-body">
            {translated.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </section>
            ))}
            <section className="jsrm-chapter-sources">
              <h2>{en ? "Official information and references" : "官方信息与参考页面"}</h2>
              {source.sources.map(([label, url]) =>
                url.startsWith("/") ? (
                  <p key={url}>
                    <Link href={`/${locale}${url}`}>{sourceLabelFor(locale, label)} →</Link>
                  </p>
                ) : (
                  <p key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {sourceLabelFor(locale, label)} ↗
                    </a>
                  </p>
                ),
              )}
            </section>
          </article>
        </div>
        <nav className="jsrm-chapter-pager" aria-label={en ? "Move between chapters" : "章节移动"}>
          {previous ? (
            <Link href={`/${locale}/jsrm/${previous.slug}/`}>
              <small>PREVIOUS</small>
              <span>
                <Icon name="arrow" size={18} />
                {previousTitle}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/${locale}/jsrm/${next.slug}/`}>
              <small>NEXT</small>
              <span>
                {nextTitle}
                <Icon name="arrow" size={18} />
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </div>
  );
}
