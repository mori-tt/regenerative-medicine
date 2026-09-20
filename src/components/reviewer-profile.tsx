import Image from "next/image";
import { medicalReviewer } from "@/lib/site-config";
import { reviewerLocales } from "@/content/reviewer-locales";
import type { SiteLocale } from "@/content/locales";
import { publicAsset } from "@/lib/site";

export function ReviewerProfile({ compact = false, locale = "ja" }: { compact?: boolean; locale?: SiteLocale | "ja" }) {
  if (!medicalReviewer.enabled && !medicalReviewer.planned) return null;
  if (!medicalReviewer.enabled) {
    if (locale === "ja") {
      return <section className={`reviewer-profile planned-reviewer ${compact ? "compact" : ""}`} aria-labelledby="reviewer-profile-title">
        <div className="reviewer-profile-photo"><Image src={publicAsset(medicalReviewer.photo)} alt={`${medicalReviewer.honorificName} プロフィール写真`} width={767} height={651} unoptimized /></div>
        <div className="reviewer-profile-copy"><span className="eyebrow">PLANNED MEDICAL REVIEWER</span><h2 id="reviewer-profile-title">{medicalReviewer.honorificName}</h2><p className="reviewer-title">{medicalReviewer.title}</p>
          {!compact && <><p>{medicalReviewer.bio}</p><h3>資格・公的資格等</h3><ul>{medicalReviewer.credentials.map((item) => <li key={item}>{item}</li>)}</ul><h3>経歴</h3><ul className="reviewer-career">{medicalReviewer.career.map((item) => <li key={item}>{item}</li>)}</ul><h3>所属学会</h3><p>{medicalReviewer.societies.join("、")}</p></>}
          <h3>監修予定の範囲</h3><p>{medicalReviewer.reviewScope}</p><p className="reviewer-status">現在、記事ごとの医学的確認を準備しています。監修が完了した記事のみ、確認日と確認範囲を表示します。この表示は監修予定者の案内であり、個別の記事が医師監修済みであることや、特定の治療の効果・安全性を示すものではありません。</p><a href={medicalReviewer.profileUrl} target="_blank" rel="noopener noreferrer">公式プロフィールを確認 ↗</a>{!compact && <small className="reviewer-credit">{medicalReviewer.photoCredit}｜<a href={medicalReviewer.photoSourceUrl} target="_blank" rel="noopener noreferrer">写真掲載元</a></small>}
        </div>
      </section>;
    }
    const copy = reviewerLocales[locale];
    return <section className={`reviewer-profile planned-reviewer ${compact ? "compact" : ""}`} aria-labelledby="reviewer-profile-title">
      <div className="reviewer-profile-photo"><Image src={publicAsset(medicalReviewer.photo)} alt={copy.photoAlt} width={767} height={651} unoptimized /></div>
      <div className="reviewer-profile-copy"><span className="eyebrow">PLANNED MEDICAL REVIEWER</span><h2 id="reviewer-profile-title">{copy.name}</h2><p className="reviewer-title">{copy.title}</p>
        {!compact && <><p>{copy.bio}</p><h3>{copy.credentialsHeading}</h3><ul>{copy.credentials.map((item) => <li key={item}>{item}</li>)}</ul><h3>{copy.careerHeading}</h3><ul className="reviewer-career">{copy.career.map((item) => <li key={item}>{item}</li>)}</ul><h3>{copy.societiesHeading}</h3><p>{copy.societies.join(locale === "en" ? ", " : "、")}</p></>}
        <h3>{locale === "en" ? "Planned review scope" : "计划审核范围"}</h3><p>{copy.reviewScope}</p><p className="reviewer-status">{locale === "en" ? "Article-by-article medical review is being prepared. Review dates and scopes will be shown only for articles that have actually been reviewed. This planned reviewer profile does not mean that individual articles or treatments have been reviewed, recommended, or guaranteed." : "正在准备按文章进行医学审核。只有实际完成审核的文章才会显示审核日期与范围。此处仅介绍计划中的审核医生，并不表示个别文章或治疗已完成审核、获得推荐或得到保证。"}</p><a href={medicalReviewer.profileUrl} target="_blank" rel="noopener noreferrer">{copy.profileLink} ↗</a>{!compact && <small className="reviewer-credit">{copy.photoCredit}｜<a href={medicalReviewer.photoSourceUrl} target="_blank" rel="noopener noreferrer">{copy.photoSource}</a></small>}
      </div>
    </section>;
  }
  if (locale === "ja") {
    return <section className={`reviewer-profile ${compact ? "compact" : ""}`} aria-labelledby="reviewer-profile-title">
      <div className="reviewer-profile-photo"><Image src={publicAsset(medicalReviewer.photo)} alt={`${medicalReviewer.honorificName} プロフィール写真`} width={767} height={651} unoptimized /></div>
      <div className="reviewer-profile-copy"><span className="eyebrow">MEDICAL REVIEWER</span><h2 id="reviewer-profile-title">{medicalReviewer.honorificName}</h2><p className="reviewer-title">{medicalReviewer.title}</p>
        {!compact && <><p>{medicalReviewer.bio}</p><h3>資格・公的資格等</h3><ul>{medicalReviewer.credentials.map((item) => <li key={item}>{item}</li>)}</ul><h3>経歴</h3><ul className="reviewer-career">{medicalReviewer.career.map((item) => <li key={item}>{item}</li>)}</ul><h3>所属学会</h3><p>{medicalReviewer.societies.join("、")}</p></>}
        <h3>監修範囲</h3><p>{medicalReviewer.reviewScope}</p><p className="reviewer-status">記事ごとの監修日・確認範囲は、各記事ページに記録します。所属学会や資格の掲載は、特定の治療・医療機関・製品の推奨を意味しません。</p><a href={medicalReviewer.profileUrl} target="_blank" rel="noopener noreferrer">公式プロフィールを確認 ↗</a>{!compact && <small className="reviewer-credit">{medicalReviewer.photoCredit}｜<a href={medicalReviewer.photoSourceUrl} target="_blank" rel="noopener noreferrer">写真掲載元</a></small>}
      </div>
    </section>;
  }
  const copy = reviewerLocales[locale];
  return <section className={`reviewer-profile ${compact ? "compact" : ""}`} aria-labelledby="reviewer-profile-title">
    <div className="reviewer-profile-photo"><Image src={publicAsset(medicalReviewer.photo)} alt={copy.photoAlt} width={767} height={651} unoptimized /></div>
    <div className="reviewer-profile-copy"><span className="eyebrow">{copy.eyebrow}</span><h2 id="reviewer-profile-title">{copy.name}</h2><p className="reviewer-title">{copy.title}</p>
      {!compact && <><p>{copy.bio}</p><h3>{copy.credentialsHeading}</h3><ul>{copy.credentials.map((item) => <li key={item}>{item}</li>)}</ul><h3>{copy.careerHeading}</h3><ul className="reviewer-career">{copy.career.map((item) => <li key={item}>{item}</li>)}</ul><h3>{copy.societiesHeading}</h3><p>{copy.societies.join(locale === "en" ? ", " : "、")}</p></>}
      <h3>{copy.scopeHeading}</h3><p>{copy.reviewScope}</p><p className="reviewer-status">{copy.statusNote}</p><a href={medicalReviewer.profileUrl} target="_blank" rel="noopener noreferrer">{copy.profileLink} ↗</a>{!compact && <small className="reviewer-credit">{copy.photoCredit}｜<a href={medicalReviewer.photoSourceUrl} target="_blank" rel="noopener noreferrer">{copy.photoSource}</a></small>}
    </div>
  </section>;
}
