import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  categories,
  columnArticles,
  isCategoryAvailable,
  coreArticles,
  liveArticles,
  stockArticles,
  visibleArticles,
} from "@/content/articles";
import { ArticleCard, Breadcrumbs, toCardData } from "@/components/content";
import {
  featuredSlugsFor,
  groupArticlesBySubcategory,
} from "@/content/subcategories";
import { StockReveal } from "@/components/stock-reveal";
import { FeaturedButton } from "@/components/featured-filter";
import { CategoryNavigation } from "@/components/category-navigation";
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
    isCategoryAvailable(slug),
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
  const liveColumns = liveArticles(columns);
  const stockColumns = stockArticles(columns);
  const groups = groupArticlesBySubcategory(slug, core, {
    ja: "その他の記事",
    en: "Other articles",
    zh: "其他文章",
  });
  const featuredSet = featuredSlugsFor(slug, listed);
  const liveSet = new Set(liveArticles(listed).map((a) => a.slug));
  const featured = core.filter(
    (a) => featuredSet.has(a.slug) && liveSet.has(a.slug),
  );
  // 公開済みの基幹記事がすべて「おすすめ」なら、見出し・バッジを重ねても情報が増えないので出さない。
  const allFeatured =
    featured.length > 0 &&
    featured.length >= core.filter((a) => liveSet.has(a.slug)).length;
  if (listed.length === 0) {
    return (
      <div className="container inner-page">
        <Breadcrumbs items={[{ label: category.label }]} />
        <div className="page-heading">
          <span className="eyebrow">{category.en}</span>
          <h1>{category.label}</h1>
          <p>{category.description}</p>
        </div>
        <CategoryNavigation current={slug} featuredCount={0} />
        <div className="empty-state category-empty">
          <p>
            このカテゴリの記事は現在準備中です。公開までしばらくお待ちください。
          </p>
          <p>
            <Link href="/articles/">公開中の記事一覧を見る</Link>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="container inner-page">
      <Breadcrumbs items={[{ label: category.label }]} />
      <div className="page-heading">
        <span className="eyebrow">{category.en}</span>
        <h1>{category.label}</h1>
        <p>{category.description}</p>
      </div>
      <div className="filter-scope" data-filter-scope>
        <CategoryNavigation
          current={slug}
          featuredCount={featured.length}
          hideFeatured={
            featured.length === 0 || featured.length >= listed.length
          }
        />
        {groups.length > 1 && (
          <nav className="topic-panel" aria-label="トピックから探す">
            <p className="topic-panel-title">トピック別に読む</p>
            <ol className="topic-panel-list">
              {groups.map(({ group, articles: groupArticles }, index) => (
                <li key={group.key}>
                  <Link href={`#sub-${group.key}`}>
                    <span className="topic-num" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span className="topic-name">{group.ja}</span>
                    {liveArticles(groupArticles).length > 0 && (
                      <span className="topic-count">
                        {liveArticles(groupArticles).length}件
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {featured.length > 0 && !allFeatured && (
          <section
            aria-labelledby={`featured-${slug}`}
            className="featured-section"
          >
            <span className="eyebrow">START HERE</span>
            <h2 id={`featured-${slug}`} className="listing-heading">
              まずはここから
            </h2>
            <p className="listing-lead">
              このカテゴリで最初に押さえておきたい記事です。
            </p>
            <div className="listing-grid">
              {featured.map((a) => (
                <ArticleCard
                  key={a.slug}
                  article={a}
                  badge="おすすめ"
                  filter={{ featured: true }}
                />
              ))}
            </div>
          </section>
        )}
        {groups.map(({ group, articles: groupArticles }, index) => {
          const liveGroup = liveArticles(groupArticles);
          const stockGroup = stockArticles(groupArticles);
          return (
            <div className="filter-scope" data-filter-scope key={group.key}>
              <section
                id={`sub-${group.key}`}
                aria-labelledby={`sub-heading-${group.key}`}
              >
                <h2 id={`sub-heading-${group.key}`} className="listing-heading">
                  <span className="topic-num" aria-hidden="true">
                    {index + 1}
                  </span>
                  {group.ja}
                  {liveGroup.length > 0 && (
                    <span className="listing-count">{liveGroup.length}件</span>
                  )}
                  <FeaturedButton
                    label="おすすめ"
                    count={
                      liveGroup.filter((a) => featuredSet.has(a.slug)).length
                    }
                    total={groupArticles.length}
                  />
                </h2>
                {group.desc && <p className="listing-lead">{group.desc.ja}</p>}
                {group.keywords && (
                  <div className="kw-chips" aria-label="関連キーワード">
                    {group.keywords.ja.map((kw) => (
                      <Link
                        key={kw}
                        className="kw-chip"
                        href={`/search/?q=${encodeURIComponent(kw)}`}
                      >
                        {kw}
                      </Link>
                    ))}
                  </div>
                )}
                {liveGroup.length > 0 && (
                  <div className="listing-zone">
                    <div className="listing-grid">
                      {liveGroup.map((a) => (
                        <ArticleCard
                          key={a.slug}
                          article={a}
                          badge={
                            featuredSet.has(a.slug) && !allFeatured
                              ? "おすすめ"
                              : undefined
                          }
                          filter={{ featured: featuredSet.has(a.slug) }}
                        />
                      ))}
                    </div>
                    <div className="listing-empty empty-state" hidden>
                      <p>このトピックのおすすめ記事はありません。</p>
                    </div>
                  </div>
                )}
                <div className="featured-hidden">
                  <StockReveal
                    locale="ja"
                    cards={stockGroup.map((a) => toCardData(a))}
                    featured={stockGroup.map((a) => featuredSet.has(a.slug))}
                  />
                </div>
              </section>
            </div>
          );
        })}
        {(liveColumns.length > 0 || stockColumns.length > 0) && (
          <div className="featured-hidden">
            <section
              aria-labelledby={`columns-${slug}`}
              className="columns-section"
            >
              <span className="eyebrow">COLUMN</span>
              <h2 id={`columns-${slug}`} className="listing-heading">
                コラム
              </h2>
              <p className="listing-lead">
                研究のこぼれ話や季節の話題など、読みものとして楽しめる記事です。
              </p>
              {liveColumns.length > 0 && (
                <div className="listing-grid">
                  {liveColumns.map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              )}
              <StockReveal
                locale="ja"
                cards={stockColumns.map((a) => toCardData(a))}
                featured={stockColumns.map((a) => featuredSet.has(a.slug))}
              />
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
