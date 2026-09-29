"use client";

import { useState, type ReactNode } from "react";

const labels = {
  ja: {
    button: (n: number) => `ストック記事を表示（${n}件）`,
    note: "公開準備中の原稿です。テストサイトでのみ参照できます。",
    hide: "ストックを閉じる",
    featured: (n: number) => `おすすめのみ（${n}件）`,
    all: (n: number) => `すべて表示（${n}件）`,
  },
  en: {
    button: (n: number) => `Show stock articles (${n})`,
    note: "Manuscripts in preparation — visible on the test site only.",
    hide: "Hide stock articles",
    featured: (n: number) => `Featured only (${n})`,
    all: (n: number) => `Show all (${n})`,
  },
  zh: {
    button: (n: number) => `显示库存文章（${n}篇）`,
    note: "准备中的稿件，仅测试网站可见。",
    hide: "收起库存文章",
    featured: (n: number) => `仅看推荐（${n}篇）`,
    all: (n: number) => `显示全部（${n}篇）`,
  },
} as const;

/**
 * ストック記事のカード一覧をボタンの後ろに隠す。
 * 本番ビルドではストック記事自体が生成されないため、このボタンは出ない。
 * cards + featured を渡すと、テストサイト上で「おすすめのみ」絞り込みができる。
 */
export function StockReveal({
  count,
  locale = "ja",
  cards,
  featured,
  children,
}: {
  count: number;
  locale?: keyof typeof labels;
  /** カードを1枚ずつ渡すと featured 絞り込みが有効になる */
  cards?: ReactNode[];
  /** cards と同じ並びの「おすすめ」フラグ */
  featured?: boolean[];
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  if (count <= 0) return null;
  const copy = labels[locale];
  const featuredCount = featured?.filter(Boolean).length ?? 0;
  const canFilter = Boolean(cards && featured && featuredCount > 0);
  const shown =
    cards && canFilter && featuredOnly
      ? cards.filter((_, i) => featured![i])
      : cards;
  if (!open) {
    return (
      <div className="stock-reveal">
        <button
          type="button"
          className="stock-reveal-button"
          aria-expanded={false}
          onClick={() => setOpen(true)}
        >
          {copy.button(count)}
        </button>
        <p className="stock-reveal-note">{copy.note}</p>
      </div>
    );
  }
  return (
    <div className="stock-reveal stock-reveal-open">
      <div className="stock-reveal-actions">
        <button
          type="button"
          className="stock-reveal-button stock-reveal-close"
          aria-expanded={true}
          onClick={() => setOpen(false)}
        >
          {copy.hide}
        </button>
        {canFilter && (
          <button
            type="button"
            className={`stock-reveal-button stock-reveal-featured${featuredOnly ? " active" : ""}`}
            aria-pressed={featuredOnly}
            onClick={() => setFeaturedOnly(!featuredOnly)}
          >
            {featuredOnly ? copy.all(count) : copy.featured(featuredCount)}
          </button>
        )}
      </div>
      {shown ? <div className="listing-grid">{shown}</div> : children}
    </div>
  );
}
