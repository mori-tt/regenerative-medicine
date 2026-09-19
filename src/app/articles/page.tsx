import Link from "next/link";
import { articles, categories, visibleArticles } from "@/content/articles";
import { ArticleCard, Breadcrumbs } from "@/components/content";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "記事一覧",
  "再生医療・幹細胞の基礎知識、治療の検討、研究の読み方に関する記事一覧。",
  "/articles/",
);
export default function ArticlesPage() {
  const list = visibleArticles(articles);
  return (
    <div className="container inner-page">
      <Breadcrumbs items={[{ label: "記事一覧" }]} />
      <div className="page-heading">
        <span className="eyebrow">THE JOURNAL</span>
        <h1>一つずつ、理解を深める。</h1>
        <p>気になるテーマから、あなたのペースで読み進めてください。</p>
      </div>
      <div className="article-list-toolbar">
        <div>
          <strong>{list.length}本の記事</strong>
          <span>基礎知識から、治療を考えるときの確認事項まで</span>
        </div>
        <span className="article-list-note">すべて一般情報・編集部記事</span>
      </div>
      <nav className="filter-links" aria-label="カテゴリから探す">
        <Link href="/articles/" className="active">
          すべて <small>{list.length}</small>
        </Link>
        {categories.map((c) => (
          <Link key={c.slug} href={`/categories/${c.slug}/`}>
            {c.label} <small>{list.filter((a) => a.category === c.slug).length}</small>
          </Link>
        ))}
      </nav>
      <div className="listing-grid" aria-label="記事一覧">
        {list.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
