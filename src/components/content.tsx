import Link from "next/link";
import Image from "next/image";
import { bannerAds } from "@/content/ads";
import type { Article } from "@/content/articles";
import { categoryFor } from "@/content/categories";
import { subcategoryOf } from "@/content/subcategories";
import { articleBuildMode, isReviewed } from "@/lib/article-state";
import { absolute, publicAsset } from "@/lib/site";
import { publication } from "@/lib/site-config";
import { Icon } from "./visuals";

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
  homeLabel = "ホーム",
  homeHref = "/",
  locale = "ja",
}: {
  items: { label: string; href?: string }[];
  homeLabel?: string;
  homeHref?: string;
  locale?: "ja" | "en" | "zh";
}) {
  const all = [{ label: homeLabel, href: homeHref }, ...items];
  return (
    <>
      <nav className="breadcrumbs" aria-label={locale === "en" ? "Breadcrumbs" : locale === "zh" ? "面包屑导航" : "パンくずリスト"}>
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
export function Marked({ text, terms }: { text: string; terms: string[] }) {
  if (!terms.length) return <>{text}</>;
  const esc = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${terms.map(esc).join("|")})`, "gi");
  const parts = text.split(re);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <mark key={i}>{part}</mark> : part,
      )}
    </>
  );
}

export function ArticleCard({
  article,
  compact = false,
  badge,
  highlight = [],
}: {
  article: Article;
  compact?: boolean;
  badge?: string;
  highlight?: string[];
}) {
  const cat = categoryFor(article.category);
  const isColumn = article.kind === "column";
  const scheduled = articleBuildMode === "all" && Boolean(article.publishAt && article.publishAt > new Date().toISOString().slice(0, 10));
  const typeLabel = isColumn ? "コラム" : article.category === "cost-access" ? "費用・受診" : article.category === "safety" ? "安全性" : article.category === "efficacy" ? "エビデンス" : article.category === "mechanisms" ? "仕組み・研究" : article.category === "compare-therapies" ? "治療の比較" : article.category === "in-body" ? "体内動態" : article.category === "anti-aging" ? "美容" : article.category === "cell-types" ? "細胞の種類" : "基礎知識";
  return (
    <article className={`article-card ${compact ? "compact" : ""}`}>
      <div className="article-card-body">
        <div className="card-label-row">
          <span className={`category-label ${cat.color}`}>{cat.label}</span>
          <span className="card-kicker">{typeLabel}</span>
          {subcategoryOf(article.category, article.slug) && (
            <span className="card-subcat">{subcategoryOf(article.category, article.slug)!.ja}</span>
          )}
          {badge && <span className="card-badge">{badge}</span>}
        </div>
        <div className="article-meta">
          <span className={`review-chip ${isReviewed(article) ? "reviewed" : "editorial"}`}>
            {isReviewed(article) ? "医師監修済み" : "一般情報・編集部記事"}
          </span>
          <span>約{article.readingMinutes}分で読める</span>
        </div>
        {scheduled && <span className="preview-status">公開予定：{article.publishAt?.replaceAll("-", ".")}｜確認用</span>}
        <h3>
          <Link href={`/articles/${article.slug}/`}><Marked text={article.title} terms={highlight} /></Link>
        </h3>
        {!compact && <p><Marked text={article.description} terms={highlight} /></p>}
        <div className="card-bottom">
          <span>{article.publishedAt ? `公開 ${article.publishedAt.replaceAll("-", ".")}` : `最終編集 ${article.updatedAt.replaceAll("-", ".")}`}</span>
          <Icon name="arrow" size={19} />
        </div>
      </div>
    </article>
  );
}

export function AdSlot({ compact = false, locale = "ja" }: { compact?: boolean; locale?: "ja" | "en" | "zh" }) {
  const ad = bannerAds[compact ? "article" : "home"];
  if (ad)
    return (
      <aside className="ad-slot" aria-label={`広告：${ad.advertiser}`}>
        <span className="ad-label">広告 · {ad.advertiser}</span>
        <a href={ad.href} target="_blank" rel="sponsored noopener noreferrer">
          <Image
            src={publicAsset(ad.image)}
            alt={ad.alt}
            width={ad.width}
            height={ad.height}
            unoptimized
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      </aside>
    );
  return null;
}
