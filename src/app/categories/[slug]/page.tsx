import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories, columnArticles, coreArticles, visibleArticles } from "@/content/articles";
import { ArticleCard, Breadcrumbs } from "@/components/content";
import { featuredSlugs, groupArticlesBySubcategory } from "@/content/subcategories";
import { pageMetadata } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  return pageMetadata(
    category.label,
    category.description,
    `/categories/${slug}/`,
  );
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  const listed = visibleArticles(articles).filter((a) => a.category === slug);
  const core = coreArticles(listed);
  const columns = columnArticles(listed);
  const groups = groupArticlesBySubcategory(slug, core, {
    ja: "その他の記事",
    en: "Other articles",
    zh: "其他文章",
  });
  const featuredSet = new Set(featuredSlugs(slug));
  const featured = featuredSlugs(slug)
    .map((s) => core.find((a) => a.slug === s))
    .filter((a) => a !== undefined);
  return (
    <div className="container inner-page">
      <Breadcrumbs items={[{ label: category.label }]} />
      <div className="page-heading">
        <span className="eyebrow">{category.en}</span>
        <h1>{category.label}</h1>
        <p>{category.description}</p>
      </div>
      <nav className="filter-links" aria-label="カテゴリから探す">
        <Link href="/articles/">すべての記事</Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}/`}
            className={c.slug === slug ? "active" : ""}
            aria-current={c.slug === slug ? "page" : undefined}
          >
            {c.label}
          </Link>
        ))}
      </nav>
      <nav className="topic-panel" aria-label="トピックから探す">
        <p className="topic-panel-title">トピック別に読む</p>
        <ol className="topic-panel-list">
          {groups.map(({ group, articles: groupArticles }, index) => (
            <li key={group.key}>
              <Link href={`#sub-${group.key}`}>
                <span className="topic-num" aria-hidden="true">{index + 1}</span>
                <span className="topic-name">{group.ja}</span>
                <span className="topic-count">{groupArticles.length}件</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      {featured.length > 0 && (
        <section aria-labelledby={`featured-${slug}`} className="featured-section">
          <span className="eyebrow">START HERE</span>
          <h2 id={`featured-${slug}`} className="listing-heading">まずはここから</h2>
          <p className="listing-lead">このカテゴリで最初に押さえておきたい記事です。</p>
          <div className="listing-grid">
            {featured.map((a) => (
              <ArticleCard key={a.slug} article={a} badge="おすすめ" />
            ))}
          </div>
        </section>
      )}
      {groups.map(({ group, articles: groupArticles }, index) => (
        <section key={group.key} id={`sub-${group.key}`} aria-labelledby={`sub-heading-${group.key}`}>
          <h2 id={`sub-heading-${group.key}`} className="listing-heading">
            <span className="topic-num" aria-hidden="true">{index + 1}</span>
            {group.ja}
            <span className="listing-count">{groupArticles.length}件</span>
          </h2>
          {group.desc && <p className="listing-lead">{group.desc.ja}</p>}
          <div className="listing-grid">
            {groupArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} badge={featuredSet.has(a.slug) ? "おすすめ" : undefined} />
            ))}
          </div>
        </section>
      ))}
      {(columns.length > 0) && (
        <section aria-labelledby={`columns-${slug}`} className="columns-section">
          <span className="eyebrow">COLUMN</span>
          <h2 id={`columns-${slug}`} className="listing-heading">コラム</h2>
          <p className="listing-lead">研究のこぼれ話や季節の話題など、読みものとして楽しめる記事です。</p>
          <div className="listing-grid">
            {columns.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
