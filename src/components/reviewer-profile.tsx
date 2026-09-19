import Image from "next/image";
import { medicalReviewer } from "@/lib/site-config";
import { publicAsset } from "@/lib/site";

export function ReviewerProfile({ compact = false }: { compact?: boolean }) {
  if (!medicalReviewer.enabled) return null;
  return <section className={`reviewer-profile ${compact ? "compact" : ""}`} aria-labelledby="reviewer-profile-title">
    <div className="reviewer-profile-photo"><Image src={publicAsset(medicalReviewer.photo)} alt={`${medicalReviewer.honorificName} プロフィール写真`} width={767} height={651} unoptimized /></div>
    <div className="reviewer-profile-copy"><span className="eyebrow">MEDICAL REVIEWER</span><h2 id="reviewer-profile-title">{medicalReviewer.honorificName}</h2><p className="reviewer-title">{medicalReviewer.title}</p>
      {!compact && <><p>{medicalReviewer.bio}</p><h3>資格・公的資格等</h3><ul>{medicalReviewer.credentials.map((item) => <li key={item}>{item}</li>)}</ul><h3>経歴</h3><ul className="reviewer-career">{medicalReviewer.career.map((item) => <li key={item}>{item}</li>)}</ul><h3>所属学会</h3><p>{medicalReviewer.societies.join("、")}</p></>}
      <h3>監修範囲</h3><p>{medicalReviewer.reviewScope}</p><p className="reviewer-status">記事ごとの監修日・確認範囲は、各記事ページに記録します。</p><a href={medicalReviewer.profileUrl} target="_blank" rel="noopener noreferrer">公式プロフィールを確認 ↗</a>{!compact && <small className="reviewer-credit">{medicalReviewer.photoCredit}｜<a href={medicalReviewer.photoSourceUrl} target="_blank" rel="noopener noreferrer">写真掲載元</a></small>}
    </div>
  </section>;
}
