import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories } from "@/content/articles";
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
      <div className="listing-grid">
        {articles
          .filter((a) => a.category === slug)
          .map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
      </div>
    </div>
  );
}
