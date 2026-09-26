import Link from "next/link";
import type { SiteLocale } from "@/content/locales";
import { infoLocales } from "@/content/info-locales";
import { Breadcrumbs } from "./content";
import { ReviewerProfile } from "./reviewer-profile";
import { SourceDirectory } from "./source-directory";
import { ContactForm } from "./contact-form";
import { Glossary } from "./glossary";
import { site } from "@/lib/site";
import { medicalReviewer, publication } from "@/lib/site-config";

export type InfoSlug = keyof (typeof infoLocales)["en"];
export function infoTitleFor(locale: SiteLocale, slug: InfoSlug) {
  return infoLocales[locale][slug].title;
}
export function infoDescriptionFor(locale: SiteLocale, slug: InfoSlug) {
  return infoLocales[locale][slug].description;
}

const chrome = {
  en: {
    home: "Home", eyebrow: "INFORMATION",
    operatorTitle: "Operator information", operatorName: "Operator", operatorAddress: "Address", operatorContact: "Contact",
    operatorMissing: "Set the operator name, address, and contact as environment variables before the official launch.",
    contactTitle: "Contact form", contactBody: "Submitted content is used only for operational contact and article verification. It does not handle diagnosis, treatment consultation, appointments, or emergency contact.",
    contactAlt: "If the form is unavailable:", relatedTitle: "Related information",
    contactLink: "Contact", editorialLink: "Editorial policy",
  },
  zh: {
    home: "首页", eyebrow: "信息",
    operatorTitle: "运营者信息", operatorName: "运营者", operatorAddress: "地址", operatorContact: "联系方式",
    operatorMissing: "正式发布前，请把运营者名称、地址与联系方式设为环境变量。",
    contactTitle: "咨询表单", contactBody: "提交内容仅用于运营联系与文章核对。不处理诊断、治疗咨询、预约与紧急联系。",
    contactAlt: "表单不可用时：", relatedTitle: "相关说明",
    contactLink: "联系我们", editorialLink: "编辑方针",
  },
} as const;

export function LocalizedInfo({ locale, slug }: { locale: SiteLocale; slug: InfoSlug }) {
  const en = locale === "en";
  const copy = chrome[locale];
  const content = infoLocales[locale][slug];
  return (
    <div lang={en ? "en" : "zh-CN"} className="localized-page">
      <div className="container inner-page">
        <Breadcrumbs homeLabel={copy.home} homeHref={`/${locale}/`} locale={locale} items={[{ label: content.title }]} />
        <div className="page-heading">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
        <div className="prose">
          {slug === "sources" && <SourceDirectory locale={locale} />}
          {slug === "supervision" && (medicalReviewer.enabled || medicalReviewer.planned) && <ReviewerProfile locale={locale} />}
          {slug === "glossary" && <Glossary locale={locale} />}
          {slug !== "sources" && slug !== "glossary" && (slug !== "supervision" || (!medicalReviewer.enabled && !medicalReviewer.planned)) && content.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </section>
          ))}
          {slug === "about" && (
            <section className="operator-info" aria-labelledby="operator-info-title">
              <h2 id="operator-info-title">{copy.operatorTitle}</h2>
              {site.operatorName && <p><strong>{copy.operatorName}：</strong>{site.operatorName}</p>}
              {site.operatorAddress && <p><strong>{copy.operatorAddress}：</strong>{site.operatorAddress}</p>}
              {site.editorName && <p><strong>{en ? "Editor" : "编辑者"}：</strong>{site.editorName}</p>}
              {site.editorAddress && <p><strong>{en ? "Editor address" : "编辑者地址"}：</strong>{site.editorAddress}</p>}
              {site.contactEmail && <p><strong>{copy.operatorContact}：</strong><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>}
              {(!site.operatorName || !site.operatorAddress || !site.contactEmail) && publication.showPreparationNotices && (
                <p className="form-result error">{copy.operatorMissing}</p>
              )}
            </section>
          )}
          {slug === "advertising" && (
            <>
              <div className="policy-callout advertising-separation">
                <h2>{en ? "Editorial independence" : "编辑与广告的区分"}</h2>
                <p>{en ? "Advertising availability does not affect article content, rankings, medical review, or editorial evaluation. Advertiser information is not a recommendation of a treatment or medical institution." : "广告的有无不会影响文章内容、排序、医学审核或编辑评价。广告主的信息不等于对某项治疗或医疗机构的推荐。"}</p>
              </div>
              <p>
                {en ? "Reference: " : "参考："}
                <a
                  href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kokokukisei/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {en ? "MHLW: Advertising rules for hospitals under the Medical Care Act" : "厚生劳动省《医疗法中医院等广告规制》"} ↗
                </a>
              </p>
            </>
          )}
          {slug === "contact" ? (
            <div className="policy-callout">
              <h2>{copy.contactTitle}</h2>
              <p>{copy.contactBody}</p>
              <ContactForm locale={locale} />
              {site.contactEmail && <p className="contact-alternative">{copy.contactAlt}<a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>}
            </div>
          ) : (
            <div className="policy-callout">
              <h2>{copy.relatedTitle}</h2>
              <p>
                <Link href={`/${locale}/contact/`}>{copy.contactLink} →</Link>
              </p>
              {slug !== "editorial-policy" && (
                <p>
                  <Link href={`/${locale}/editorial-policy/`}>{copy.editorialLink} →</Link>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
