import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/content";
import { infoPages } from "@/content/pages";
import { pageMetadata, site } from "@/lib/site";
import { ReviewerProfile } from "@/components/reviewer-profile";
import { medicalReviewer, publication } from "@/lib/site-config";
import { ContactForm } from "@/components/contact-form";
import { SourceDirectory } from "@/components/source-directory";
export const dynamicParams = false;
export function generateStaticParams() {
  return infoPages.map((p) => ({ page: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const info = infoPages.find((p) => p.slug === page);
  if (!info) notFound();
  return pageMetadata(info.title, info.description, `/${info.slug}/`);
}
export default async function InfoPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const info = infoPages.find((p) => p.slug === page);
  if (!info) notFound();
  return (
    <div className="container inner-page">
      <Breadcrumbs items={[{ label: info.title }]} />
      <div className="page-heading">
        <span className="eyebrow">{info.en}</span>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </div>
      <div className="prose">
        {page === "sources" && <SourceDirectory />}
        {page === "supervision" && (medicalReviewer.enabled || medicalReviewer.planned) && <ReviewerProfile />}
        {page !== "sources" && (page !== "supervision" || (!medicalReviewer.enabled && !medicalReviewer.planned)) && info.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{publication.showPreparationNotices ? p : p.replaceAll("現在の掲載原稿は監修前のサンプルであり、正式公開前に精査します。", "記事は監修者の確認範囲と更新日を明示して管理します。")}</p>
            ))}
          </section>
        ))}
        {page === "about" && (
          <section className="operator-info" aria-labelledby="operator-info-title">
            <h2 id="operator-info-title">運営者情報</h2>
            {site.operatorName && <p><strong>運営者：</strong>{site.operatorName}</p>}
            {site.operatorAddress && <p><strong>所在地：</strong>{site.operatorAddress}</p>}
            {site.editorName && <p><strong>編集者：</strong>{site.editorName}</p>}
            {site.editorAddress && <p><strong>編集者住所：</strong>{site.editorAddress}</p>}
            {site.contactEmail && <p><strong>連絡先：</strong><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>}
            {(!site.operatorName || !site.operatorAddress || !site.contactEmail) && publication.showPreparationNotices && (
              <p className="form-result error">運営者名・所在地・連絡先は、実値を環境変数に設定してから正式公開してください。</p>
            )}
          </section>
        )}
        {page === "advertising" && (
          <>
            <div className="policy-callout advertising-separation">
              <h2>編集と広告の分離</h2>
              <p>広告の有無は、記事内容、掲載順位、医学的確認、編集上の評価に影響しません。広告主の情報は、特定の治療や医療機関を推奨するものではありません。</p>
            </div>
            <p>
              参考：
              <a
                href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kokokukisei/"
                target="_blank"
                rel="noopener noreferrer"
              >
                厚生労働省「医療法における病院等の広告規制について」 ↗
              </a>
            </p>
          </>
        )}
        {page === "contact" ? (
          <div className="policy-callout">
            <h2>お問い合わせフォーム</h2>
            <p>送信内容は運営上の連絡と記事の確認にのみ使用します。診断・治療の相談、予約、緊急連絡には対応していません。</p>
            <ContactForm />
            {site.contactEmail && <p className="contact-alternative">フォームが利用できない場合：<a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>}
          </div>
        ) : (
          <div className="policy-callout">
            <h2>関連するご案内</h2>
            <p>
              <Link href="/contact/">お問い合わせ →</Link>
            </p>
            {page !== "editorial-policy" && (
              <p>
                <Link href="/editorial-policy/">私たちの編集方針 →</Link>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
