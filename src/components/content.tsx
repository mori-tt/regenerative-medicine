import Link from "next/link";
import Image from "next/image";
import { bannerAds } from "@/content/ads";
import { type Article, categoryFor, isReviewed } from "@/content/articles";
import { absolute } from "@/lib/site";
import { publication } from "@/lib/site-config";
import { CellArt, Icon } from "./visuals";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const all = [{ label: "ホーム", href: "/" }, ...items];
  return (
    <>
      <nav className="breadcrumbs" aria-label="パンくずリスト">
        {all.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="crumb-separator">/</span>}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href ? { item: absolute(item.href) } : {}),
          })),
        }}
      />
    </>
  );
}
export function ArticleCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  const cat = categoryFor(article.category);
  return (
    <article className={`article-card ${compact ? "compact" : ""}`}>
      <Link
        className="article-image"
        href={`/articles/${article.slug}/`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <CellArt variant={article.illustration} />
        <span className={`category-label ${cat.color}`}>{cat.label}</span>
      </Link>
      <div className="article-card-body">
        <div className="article-meta">
          <span>{isReviewed(article) ? "医師監修済み" : publication.showPreparationNotices ? "監修前サンプル" : "編集部記事"}</span>
          <span>約{article.readingMinutes}分で読める</span>
        </div>
        <h3>
          <Link href={`/articles/${article.slug}/`}>{article.title}</Link>
        </h3>
        {!compact && <p>{article.description}</p>}
        <div className="card-bottom">
          <span>{article.updatedAt.replaceAll("-", ".")} 更新</span>
          <Icon name="arrow" size={19} />
        </div>
      </div>
    </article>
  );
}

export function AdSlot({ compact = false }: { compact?: boolean }) {
  const ad = bannerAds[compact ? "article" : "home"];
  if (ad)
    return (
      <aside className="ad-slot" aria-label={`広告：${ad.advertiser}`}>
        <span className="ad-label">広告 · {ad.advertiser}</span>
        <a href={ad.href} target="_blank" rel="sponsored noopener noreferrer">
          <Image
            src={ad.image}
            alt={ad.alt}
            width={ad.width}
            height={ad.height}
            unoptimized
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      </aside>
    );
  return (
    <aside
      className={`ad-slot ${compact ? "ad-compact" : ""}`}
      aria-label="広告掲載枠のご案内"
    >
      <span className="ad-label">ADVERTISEMENT</span>
      <span className="ad-title">医療の情報を、必要な方へ。</span>
      <p>医療機関・クリニックの広告掲載について</p>
      <Link href="/advertising/">
        掲載のご案内 <Icon name="arrow" size={17} />
      </Link>
      <span className="ad-note">
        広告募集予定枠 · 現在広告の配信はありません
      </span>
    </aside>
  );
}
