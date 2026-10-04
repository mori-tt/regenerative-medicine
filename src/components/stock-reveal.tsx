"use client";

import { useEffect, useId, useState } from "react";
import { ArticleCard, type ArticleCardData } from "./article-card";

const copy = {
  ja: {
    lead: (n: number) => `このカテゴリには、監修・校閲前の確認用ストックが ${n} 本あります。`,
    open: (n: number) => `公開前のストック ${n} 本を確認する`,
    close: "ストックを閉じる",
    note: "※ ストック記事は本番の公開モードでは表示されず、検索対象にも含まれません。",
    featured: (n: number) => `おすすめだけ表示（${n}本）`,
    all: (n: number) => `すべて表示（${n}本）`,
    badge: "おすすめ",
  },
  en: {
    lead: (n: number) => `This category holds ${n} pre-review draft articles.`,
    open: (n: number) => `View ${n} unpublished drafts`,
    close: "Hide drafts",
    note: "* Draft articles are hidden in production and excluded from search.",
    featured: (n: number) => `Featured only (${n})`,
    all: (n: number) => `Show all (${n})`,
    badge: "Featured",
  },
  zh: {
    lead: (n: number) => `该分类下有 ${n} 篇待审核的稿件。`,
    open: (n: number) => `查看 ${n} 篇未发布稿件`,
    close: "收起稿件",
    note: "※ 待审核稿件在正式环境中不显示，也不在搜索范围内。",
    featured: (n: number) => `仅显示推荐（${n}篇）`,
    all: (n: number) => `显示全部（${n}篇）`,
    badge: "推荐",
  },
} as const;

type StockParams = { open: boolean; featuredOnly: boolean };

function readStockParam(): StockParams {
  if (typeof window === "undefined") return { open: false, featuredOnly: false };
  const v = new URLSearchParams(window.location.search).get("stock");
  return { open: v === "1" || v === "featured", featuredOnly: v === "featured" };
}

/**
 * 公開前ストックの開閉。カードデータだけを props で受け取り、開いたときに
 * クライアント側で ArticleCard を描画する（ページの HTML/Flight を増やさないため）。
 */
export function StockReveal({
  locale,
  cards,
  featured,
  badgeLabel,
}: {
  locale: keyof typeof copy;
  cards: ArticleCardData[];
  featured: boolean[];
  badgeLabel?: string;
}) {
  const [state, setState] = useState<StockParams>({ open: false, featuredOnly: false });
  const panelId = useId();
  const c = copy[locale];
  const featuredCount = featured.filter(Boolean).length;

  useEffect(() => {
    setState(readStockParam());
  }, []);

  const update = (next: StockParams) => {
    setState(next);
    const url = new URL(window.location.href);
    if (next.open) url.searchParams.set("stock", next.featuredOnly ? "featured" : "1");
    else url.searchParams.delete("stock");
    window.history.replaceState(null, "", url);
  };

  if (cards.length === 0) return null;
  const items = cards.map((data, index) => ({ data, isFeatured: featured[index] ?? false }));
  const shown = state.featuredOnly ? items.filter((item) => item.isFeatured) : items;
  const badge = badgeLabel ?? c.badge;

  return (
    <div className="stock-reveal">
      <div className="stock-banner">
        <div>
          <p className="stock-lead">{c.lead(cards.length)}</p>
          <p className="stock-note">{c.note}</p>
        </div>
        <button
          type="button"
          className={`stock-button${state.open ? " active" : ""}`}
          aria-expanded={state.open}
          aria-controls={panelId}
          onClick={() => update({ ...state, open: !state.open })}
        >
          {state.open ? c.close : c.open(cards.length)}
        </button>
      </div>
      <div className="stock-panel" id={panelId} hidden={!state.open}>
        {state.open && (
          <>
            {featuredCount > 0 && (
              <div className="stock-actions">
                <button
                  type="button"
                  className={`featured-toggle${state.featuredOnly ? " active" : ""}`}
                  aria-pressed={state.featuredOnly}
                  onClick={() => update({ ...state, featuredOnly: !state.featuredOnly })}
                >
                  {state.featuredOnly ? c.all(cards.length) : c.featured(featuredCount)}
                </button>
              </div>
            )}
            <div className="listing-grid">
              {shown.map(({ data, isFeatured }) => (
                <ArticleCard key={data.slug} article={data} badge={isFeatured ? badge : undefined} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
