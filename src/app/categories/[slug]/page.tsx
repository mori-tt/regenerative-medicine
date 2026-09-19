import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories, columnArticles, coreArticles, visibleArticles } from "@/content/articles";
import { ArticleCard, Breadcrumbs } from "@/components/content";
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
      <section aria-labelledby={`core-${slug}`}>
        <h2 id={`core-${slug}`} className="listing-heading">大事なコンテンツ</h2>
        <div className="listing-grid">
          {core.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
      {columns.length > 0 && (
        <section aria-labelledby={`columns-${slug}`}>
          <h2 id={`columns-${slug}`} className="listing-heading">通常のコラム</h2>
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
