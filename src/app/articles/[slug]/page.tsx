import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articleBuildMode, articles, categoryFor, isReviewed, isVisibleArticle, visibleArticles } from "@/content/articles";
import { ArticleCard, AdSlot, Breadcrumbs, JsonLd } from "@/components/content";
import { CellArt } from "@/components/visuals";
import { ArticleVisual } from "@/components/article-visuals";
import { publicAsset } from "@/lib/site";
import { publication } from "@/lib/site-config";
import { absolute, pageMetadata, site } from "@/lib/site";
import { CitationLinks, ArticleReferences } from "@/components/article-references";
export const dynamicParams = false;
export function generateStaticParams() {
  const params = visibleArticles(articles).map((a) => ({ slug: a.slug }));
  return params.length > 0 ? params : [{ slug: "__unpublished__" }];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a || !isVisibleArticle(a)) notFound();
  return pageMetadata(
    a.title,
    a.description,
    `/articles/${a.slug}/`,
    isReviewed(a),
  );
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article || !isVisibleArticle(article)) notFound();
  const cat = categoryFor(article.category);
  const reviewed = isReviewed(article);
  const scheduled = articleBuildMode === "all" && Boolean(article.publishAt && article.publishAt > new Date().toISOString().slice(0, 10));
  return (
    <div className="container inner-page">
      <Breadcrumbs
        items={[
          { label: cat.label, href: `/categories/${cat.slug}/` },
          { label: article.title },
        ]}
      />
      {reviewed && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            inLanguage: "ja",
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
            mainEntityOfPage: absolute(`/articles/${article.slug}/`),
            author: {
              "@type": "Organization",
              name: `${site.name}編集部`,
              url: absolute("/about/"),
            },
            publisher: {
              "@type": "Organization",
              name: site.name,
              url: absolute(),
            },
            citation: article.references.map((r) => r.url),
          }}
        />
      )}
      {!reviewed && publication.showPreparationNotices && (
        <div className="draft-notice">
          この記事は一般的な情報整理を目的としており、個別の診断・治療の根拠や推奨を示すものではありません。医学的な判断は、最新の公的情報と医療専門家への相談に基づいてください。
        </div>
      )}
      <div className="article-layout">
        <article>
          <header className="article-heading">
            <Link className="category-label" href={`/categories/${cat.slug}/`}>
              {cat.label}
            </Link>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="byline">
              <span>編集：{site.editorName || `${site.name}編集部`}</span>
              <span>位置づけ：一般情報</span>
              <time dateTime={article.updatedAt}>
                最終編集：{article.updatedAt.replaceAll("-", ".")}
              </time>
              {article.publishedAt && <time dateTime={article.publishedAt}>公開：{article.publishedAt.replaceAll("-", ".")}</time>}
              <span>約{article.readingMinutes}分で読める</span>
            </div>
            {scheduled && (
              <div className="preview-status article-preview-status">
                編集・監修確認用｜公開予定：{article.publishAt?.replaceAll("-", ".")}
              </div>
            )}
          </header>
          <div className="article-cover">
            {article.image ? (
              <Image
                src={publicAsset(article.image)}
                alt={article.imageAlt ?? "記事のイメージ"}
                width={1280}
                height={853}
                unoptimized
              />
            ) : (
              <CellArt variant={article.illustration} />
            )}
          </div>
          <div className="key-points">
            <h2>この記事のポイント</h2>
            <ul>
              {article.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <ArticleVisual slug={article.slug} />
          <details className="toc mobile-article-toc">
            <summary>この記事の目次</summary>
            <nav aria-label="この記事の目次">
              <ol>
                {article.sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
              </ol>
            </nav>
          </details>
          <div className="article-body">
            {article.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((p, paragraphIndex) => (
                  <p key={paragraphIndex}>{p}<CitationLinks ids={section.paragraphReferences?.[paragraphIndex]} references={article.references} locale="ja" /></p>
                ))}
              </section>
            ))}
          </div>
          <ArticleReferences references={article.references} locale="ja" />
          {reviewed && article.reviewer ? (
            <section className="reviewer-box">
              <h2>この記事の監修医師</h2>
              <>
                <a href={article.reviewer.profileUrl}>
                  {article.reviewer.name}
                </a>
                <p>
                  {article.reviewer.credentials} /{" "}
                  {article.reviewer.affiliation}
                </p>
                <p>監修日：{article.reviewer.reviewedAt}</p>
                {article.reviewer.scope && <p>確認範囲：{article.reviewer.scope}</p>}
              </>
              <Link href="/supervision/">監修の方針を読む →</Link>
            </section>
          ) : null}
          <p className="disclaimer">
            この記事は一般的な情報提供を目的としています。個別の診断や治療については医師にご相談ください。
          </p>
        </article>
        <aside className="article-sidebar">
          <nav className="toc" aria-label="この記事の目次">
            <h2>この記事の目次</h2>
            <ol>
              {article.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <AdSlot compact />
        </aside>
      </div>
      <section className="related">
        <h2>あわせて読みたい</h2>
        <div className="article-grid">
          {articles
            .filter((a) => a.slug !== slug && isVisibleArticle(a))
            .slice(0, 3)
            .map((a) => (
              <ArticleCard article={a} key={a.slug} />
            ))}
        </div>
      </section>
    </div>
  );
}
