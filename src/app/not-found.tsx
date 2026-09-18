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
    </div>
  );
}
