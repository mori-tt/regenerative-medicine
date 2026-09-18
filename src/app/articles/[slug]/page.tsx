import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categoryFor, isReviewed } from "@/content/articles";
import { ArticleCard, AdSlot, Breadcrumbs, JsonLd } from "@/components/content";
import { CellArt } from "@/components/visuals";
import { absolute, pageMetadata, site } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
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
  if (!article) notFound();
  const cat = categoryFor(article.category);
  const reviewed = isReviewed(article);
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
      {!reviewed && (
        <div className="draft-notice">
          この記事はサイト構成を確認するための短いサンプル原稿です。医師監修は完了していません。正式公開前に内容の精査・加筆を行います。
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
              <span>執筆：{site.name}編集部（仮称）</span>
              <time dateTime={article.updatedAt}>
                更新：{article.updatedAt.replaceAll("-", ".")}
              </time>
              <span>約{article.readingMinutes}分で読める</span>
            </div>
          </header>
          <div className="article-cover">
            <CellArt variant={article.illustration} />
          </div>
          <div className="key-points">
            <h2>この記事のポイント</h2>
            <ul>
              {article.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="article-body">
            {article.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </div>
          <section className="references">
            <h2>参考情報・出典</h2>
            <ol>
              {article.references.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.title} ↗
                  </a>
                </li>
              ))}
            </ol>
            <p>
              資料の内容は更新されることがあります。詳細は発表元の情報をご確認ください。
            </p>
          </section>
          <section className="reviewer-box">
            <h2>{reviewed ? "この記事の監修医師" : "医師監修について"}</h2>
            {reviewed && article.reviewer ? (
              <>
                <a href={article.reviewer.profileUrl}>
                  {article.reviewer.name}
                </a>
                <p>
                  {article.reviewer.credentials} /{" "}
                  {article.reviewer.affiliation}
                </p>
                <p>監修日：{article.reviewer.reviewedAt}</p>
              </>
            ) : (
              <p>
                監修医師は現在調整中です。氏名・所属・専門分野・監修日を確認したうえで掲載します。
              </p>
            )}
            <Link href="/supervision/">監修の方針を読む →</Link>
          </section>
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
            .filter((a) => a.slug !== slug)
            .slice(0, 3)
            .map((a) => (
              <ArticleCard article={a} key={a.slug} />
            ))}
        </div>
      </section>
    </div>
  );
}
