import Link from "next/link";
import type { Article } from "@/content/articles";
import { cardKicker, categoryFor, type CategorySlug } from "@/content/categories";
import { subcategoryOf } from "@/content/subcategories";
import { articleBuildMode, isReviewed } from "@/lib/article-state";
import { Icon } from "./visuals";

export type CardLocale = "ja" | "en" | "zh";

/** カードの表示に必要な文字列だけを持つ軽量モデル。検索インデックス（JSON）にもそのまま載せる。 */
export type ArticleCardData = {
  slug: string;
  href: string;
  category: CategorySlug;
  categoryLabel: string;
  color: string;
  kicker: string;
  subcategory?: string;
  reviewed: boolean;
  statusLabel: string;
  readingLabel: string;
  dateLabel: string;
  scheduledLabel?: string;
  title: string;
  description: string;
};

const cardCopy = {
  ja: {
    reviewed: "医師監修済み",
    editorial: "一般情報・編集部記事",
    reading: (n: number) => `約${n}分で読める`,
    published: (d: string) => `公開 ${d}`,
    edited: (d: string) => `最終編集 ${d}`,
    scheduled: (d: string) => `公開予定：${d}｜確認用`,
  },
  en: {
    reviewed: "Editorial manuscript",
    editorial: "Editorial manuscript · Translated version",
    reading: (n: number) => `About ${n} min read`,
    published: (d: string) => `${d} · Published`,
    edited: (d: string) => `${d} · Last edited`,
    scheduled: (d: string) => `Scheduled · review preview · Scheduled for ${d}`,
  },
  zh: {
    reviewed: "编辑原稿",
    editorial: "编辑原稿 · 翻译版",
    reading: (n: number) => `约${n}分钟阅读`,
    published: (d: string) => `${d} · 发布`,
    edited: (d: string) => `${d} · 最后编辑`,
    scheduled: (d: string) => `预定发布・审核确认用 · 预定发布：${d}`,
  },
} as const;

const dot = (date: string) => date.replaceAll("-", ".");

/** Article から表示用データを作る。en/zh はタイトル・説明・カテゴリ名を翻訳済みの値で上書きする。 */
export function toCardData(
  article: Article,
  locale: CardLocale = "ja",
  localized?: { title: string; description: string; categoryLabel: string; subcategory?: string },
): ArticleCardData {
  const cat = categoryFor(article.category);
  const copy = cardCopy[locale];
  const reviewed = isReviewed(article);
  const scheduled =
    articleBuildMode === "all" && Boolean(article.publishAt && article.publishAt > new Date().toISOString().slice(0, 10));
  const sub = subcategoryOf(article.category, article.slug);
  return {
    slug: article.slug,
    href: `${locale === "ja" ? "" : `/${locale}`}/articles/${article.slug}/`,
    category: article.category,
    categoryLabel: localized?.categoryLabel ?? cat.label,
    color: cat.color,
    kicker: cardKicker(article, locale),
    ...(localized ? (localized.subcategory ? { subcategory: localized.subcategory } : {}) : sub ? { subcategory: sub.ja } : {}),
    reviewed,
    statusLabel: reviewed ? copy.reviewed : copy.editorial,
    readingLabel: copy.reading(article.readingMinutes),
    dateLabel: article.publishedAt ? copy.published(dot(article.publishedAt)) : copy.edited(dot(article.updatedAt)),
    ...(scheduled && article.publishAt ? { scheduledLabel: copy.scheduled(dot(article.publishAt)) } : {}),
    title: localized?.title ?? article.title,
    description: localized?.description ?? article.description,
  };
}

export function Marked({ text, terms }: { text: string; terms: string[] }) {
  if (!terms.length) return <>{text}</>;
  const esc = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${terms.map(esc).join("|")})`, "gi");
  const parts = text.split(re);
  return <>{parts.map((part, i) => (i % 2 === 1 ? <mark key={i}>{part}</mark> : part))}</>;
}

export function ArticleCard({
  article,
  compact = false,
  badge,
  highlight = [],
  headingLevel = "h3",
}: {
  article: Article | ArticleCardData;
  compact?: boolean;
  badge?: string;
  highlight?: string[];
  headingLevel?: "h2" | "h3";
}) {
  const data = "sections" in article ? toCardData(article) : article;
  const Heading = headingLevel;
  return (
    <article className={`article-card ${compact ? "compact" : ""}`}>
      <div className="article-card-body">
        <div className="card-label-row">
          <span className={`category-label ${data.color}`}>{data.categoryLabel}</span>
          <span className="card-kicker">{data.kicker}</span>
          {data.subcategory && <span className="card-subcat">{data.subcategory}</span>}
          {badge && <span className="card-badge">{badge}</span>}
        </div>
        <div className="article-meta">
          <span className={`review-chip ${data.reviewed ? "reviewed" : "editorial"}`}>{data.statusLabel}</span>
          <span>{data.readingLabel}</span>
        </div>
        {data.scheduledLabel && <span className="preview-status">{data.scheduledLabel}</span>}
        <Heading>
          <Link href={data.href}>
            <Marked text={data.title} terms={highlight} />
          </Link>
        </Heading>
        {!compact && (
          <p>
            <Marked text={data.description} terms={highlight} />
          </p>
        )}
        <div className="card-bottom">
          <span>{data.dateLabel}</span>
          <Icon name="arrow" size={19} />
        </div>
      </div>
    </article>
  );
}
