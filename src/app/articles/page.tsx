import Link from "next/link";
import { articles, categories, visibleArticles } from "@/content/articles";
import { ArticleCard, Breadcrumbs } from "@/components/content";
import { pageMetadata } from "@/lib/site";
import { ArticleBrowser } from "@/components/article-browser";
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
        <h1>
          <span className="heading-phrase">一つずつ、</span><wbr />
          <span className="heading-phrase">理解を深める。</span>
        </h1>
        <p>気になるテーマから、あなたのペースで読み進めてください。</p>
      </div>
      <nav className="filter-links" aria-label="カテゴリから探す">
        <Link href="/articles/" className="active" aria-current="page">
          すべて <small>{list.length}</small>
        </Link>
        {categories.map((c) => (
          <Link key={c.slug} href={`/categories/${c.slug}/`}>
            {c.label}{" "}
            <small>{list.filter((a) => a.category === c.slug).length}</small>
          </Link>
        ))}
      </nav>
      <ArticleBrowser terms={list.map((a) => `${a.title} ${a.description}`)}>
        {list.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </ArticleBrowser>
    </div>
  );
}
