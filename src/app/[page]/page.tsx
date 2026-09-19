import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/content";
import { infoPages } from "@/content/pages";
import { pageMetadata, site } from "@/lib/site";
import { ReviewerProfile } from "@/components/reviewer-profile";
import { publication } from "@/lib/site-config";
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
        {page === "supervision" && <ReviewerProfile />}
        {page !== "supervision" && info.sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{publication.showPreparationNotices ? p : p.replaceAll("現在の掲載原稿は監修前のサンプルであり、正式公開前に精査します。", "記事は監修者の確認範囲と更新日を明示して管理します。")}</p>
            ))}
          </section>
        ))}
        {page === "advertising" && (
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
        )}
        {page === "contact" ? (
          <div className="policy-callout">
            <h2>
              {site.contactEmail
                ? "メールでお問い合わせ"
                : "受付開始に向けて準備中です"}
            </h2>
            {site.contactEmail ? (
              <p>
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </p>
            ) : (
              <p>受付先が決まり次第、このページでご案内します。</p>
            )}
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
