import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container not-found">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>ページが見つかりませんでした。</h1>
      <p>URLをご確認いただくか、記事一覧からお探しください。</p>
      <Link className="button primary" href="/articles/">
        記事一覧へ →
      </Link>
      <section className="not-found-locales" aria-label="Other languages">
        <h2 lang="en">Page not found.</h2>
        <p lang="en">Check the URL or browse the article list.</p>
        <p>
          <Link href="/en/articles/" lang="en">
            Articles →
          </Link>{" "}
          <Link href="/en/" lang="en">
            Home →
          </Link>
        </p>
        <h2 lang="zh-CN">未找到页面。</h2>
        <p lang="zh-CN">请确认网址，或从文章列表查找。</p>
        <p>
          <Link href="/zh/articles/" lang="zh-CN">
            文章列表 →
          </Link>{" "}
          <Link href="/zh/" lang="zh-CN">
            首页 →
          </Link>
        </p>
      </section>
    </div>
  );
}
