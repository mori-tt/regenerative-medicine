import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { articleBuildMode, articles, categoryFor, isReviewed, isVisibleArticle, visibleArticles } from "@/content/articles";
import { ArticleCard, AdSlot, Breadcrumbs, JsonLd } from "@/components/content";
import { CellArt } from "@/components/visuals";
import { ArticleVisual } from "@/components/article-visuals";
import { ArticleTerms } from "@/components/article-terms";
import { ArticleTable } from "@/components/article-table";
import { ArticleClosing } from "@/components/article-closing";
import { ArticleFeedback } from "@/components/article-feedback";
import { ReadingTools } from "@/components/reading-tools";
import { publicAsset } from "@/lib/site";
import { publication } from "@/lib/site-config";
import { absolute, pageMetadata, site } from "@/lib/site";
import { articleMetadataOptions } from "@/lib/article-metadata";
import { adjacentArticles, relatedArticles } from "@/lib/related-articles";
import { CitationLinks, ArticleReferences } from "@/components/article-references";
import { subcategoryOf } from "@/content/subcategories";
import { termsInText } from "@/content/glossary";
import { linkTerms } from "@/components/inline-terms";
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
  return pageMetadata(a.title, a.description, `/articles/${a.slug}/`, isReviewed(a), "ja", articleMetadataOptions(a, "ja"));
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
  const { prev: prevArticle, next: nextArticle } = adjacentArticles(article);
  const related = relatedArticles(article);
  const subcat = subcategoryOf(article.category, slug);
  const bodyTerms = termsInText(article.sections.map((x) => x.paragraphs.join(" ")).join(" "), "ja", 24);
  const linkedTermIds = new Set<string>();
  return (
    <div className="container inner-page">
      <Breadcrumbs
        items={[
          { label: cat.label, href: `/categories/${cat.slug}/` },
          ...(subcat ? [{ label: subcat.ja, href: `/categories/${cat.slug}/#sub-${subcat.key}` }] : []),
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
            articleSection: cat.label,
            ...(article.image ? { image: [absolute(article.image)] } : {}),
            author: article.author
              ? {
                  "@type": "Person",
                  name: article.author.name,
                  jobTitle: article.author.title,
                  affiliation: { "@type": "Organization", name: article.author.affiliation },
                  url: article.author.profileUrl,
                }
              : {
                  "@type": "Organization",
                  name: `${site.name}編集部`,
                  url: absolute("/about/"),
                },
            publisher: {
              "@type": "Organization",
              name: site.name,
              url: absolute(),
              logo: { "@type": "ImageObject", url: absolute("/icon.svg") },
            },
            ...(article.reviewer
              ? {
                  reviewedBy: {
                    "@type": "Person",
                    name: article.reviewer.name,
                    description: article.reviewer.credentials,
                    affiliation: { "@type": "Organization", name: article.reviewer.affiliation },
                    url: article.reviewer.profileUrl,
                  },
                }
              : {}),
            citation: article.references.map((r) => r.url),
          }}
        />
      )}
      {(() => {
        const faq = article.sections.find((s) => s.id === "faq");
        if (!faq) return null;
        const pairs: [string, string][] = [];
        for (let i = 0; i + 1 < faq.paragraphs.length; i += 2) {
          pairs.push([faq.paragraphs[i].replace(/^Q\.\s*/, ""), faq.paragraphs[i + 1].replace(/^A\.\s*/, "")]);
        }
        return (
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: pairs.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            }}
          />
        );
      })()}
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
              {article.author ? (
                <span className="author-badge">執筆・監修：<a href={article.author.profileUrl}>{article.author.honorific}</a>（{article.author.title}）</span>
              ) : (
                <span>編集：{site.editorName || `${site.name}編集部`}</span>
              )}
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
                sizes="(max-width: 760px) 100vw, 800px"
                priority
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
          <ArticleVisual slug={article.slug} category={article.category} index={0} />
          <details className="toc mobile-article-toc">
            <summary>この記事の目次</summary>
            <nav aria-label="この記事の目次">
              <ol>
                {article.sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
              </ol>
            </nav>
          </details>
          <div className="article-body">
            {article.sections.map((section, sectionIndex) => (
              <section id={section.id} key={section.id} className={section.id === "faq" ? "faq-section" : section.id === "checklist" ? "checklist-section" : undefined}>
                <h2>{section.title}<a className="heading-anchor" href={`#${section.id}`} aria-label="この見出しへのリンク">#</a></h2>
                {section.table && (section.tableAfter === undefined || section.tableAfter < 0) && (
                  <ArticleTable table={section.table} />
                )}
                {section.paragraphs.map((p, paragraphIndex) => (
                  <Fragment key={paragraphIndex}>
                    <p className={section.id === "faq" ? (p.startsWith("Q.") ? "faq-q" : "faq-a") : undefined}>{linkTerms(p, bodyTerms, linkedTermIds, "", "ja")}<CitationLinks ids={section.paragraphReferences?.[paragraphIndex]} references={article.references} locale="ja" /></p>
                    {section.table && section.tableAfter === paragraphIndex && (
                      <ArticleTable table={section.table} />
                    )}
                  </Fragment>
                ))}
                {section.table && section.tableAfter !== undefined && section.tableAfter >= section.paragraphs.length && (
                  <ArticleTable table={section.table} />
                )}
                {sectionIndex === 1 && <ArticleVisual slug={article.slug} category={article.category} index={1} />}
              </section>
            ))}
          </div>
          <ArticleTerms
            text={[
              article.title,
              article.description,
              ...article.points,
              ...article.sections.flatMap((s) => [s.title, ...s.paragraphs]),
            ].join("\n")}
          />
          <ArticleClosing category={article.category} />
          <ArticleVisual slug={article.slug} category={article.category} index={2} />
          <ArticleReferences references={article.references} locale="ja" />
          {article.author ? (
            <section className="reviewer-box author-box">
              <h2>この記事の執筆・監修医師</h2>
              <>
                <a href={article.author.profileUrl}>
                  {article.author.name}
                </a>
                <p>
                  {article.author.title} / {article.author.affiliation}
                </p>
                <p>執筆日：{article.author.authoredAt}</p>
                {article.reviewer?.reviewedAt && <p>監修日：{article.reviewer.reviewedAt}</p>}
              </>
              <Link href="/supervision/">監修の方針を読む →</Link>
            </section>
          ) : reviewed && article.reviewer ? (
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
          <ArticleFeedback slug={slug} locale="ja" />
          <ReadingTools />
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
      {(prevArticle || nextArticle) && (
        <nav className="article-pager" aria-label="このカテゴリの前後の記事">
          {prevArticle ? (
            <Link href={`/articles/${prevArticle.slug}/`}><small>前の記事</small>← {prevArticle.title}</Link>
          ) : <span />}
          {nextArticle ? (
            <Link className="next" href={`/articles/${nextArticle.slug}/`}><small>次の記事</small>{nextArticle.title} →</Link>
          ) : <span />}
        </nav>
      )}
      {related.length > 0 && (
        <section className="related" aria-labelledby="related-title">
          <h2 id="related-title">あわせて読みたい</h2>
          <div className="article-grid">
            {related.map((a) => (
              <ArticleCard article={a} key={a.slug} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
