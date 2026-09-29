"use client";

import { useEffect, useState, type ReactNode } from "react";

/** ?stock=1 でストック表示、?stock=featured でおすすめのみ表示（テストサイト用）。 */
function readStockParam(): { open: boolean; featuredOnly: boolean } {
  const value = new URLSearchParams(window.location.search).get("stock");
  if (value === "featured" || value === "osusume") {
    return { open: true, featuredOnly: true };
  }
  return { open: Boolean(value && value !== "0" && value !== "false"), featuredOnly: false };
}

/** 開閉状態をURLへ反映（共有用）。本番ビルドではストック自体が出力されないので無害。 */
function syncStockParam(open: boolean, featuredOnly: boolean) {
  const url = new URL(window.location.href);
  if (!open) url.searchParams.delete("stock");
  else url.searchParams.set("stock", featuredOnly ? "featured" : "1");
  window.history.replaceState(null, "", url);
}

const labels = {
  ja: {
    button: (n: number) => `ストック記事を表示（${n}件）`,
    note: "公開準備中の原稿です。テストサイトでのみ参照できます。URLに ?stock=1 （おすすめのみは ?stock=featured）で直接開けます。",
    hide: "ストックを閉じる",
    featured: (n: number) => `おすすめのみ（${n}件）`,
    all: (n: number) => `すべて表示（${n}件）`,
  },
  en: {
    button: (n: number) => `Show stock articles (${n})`,
    note: "Manuscripts in preparation — visible on the test site only. Open directly via ?stock=1 (featured only: ?stock=featured).",
    hide: "Hide stock articles",
    featured: (n: number) => `Featured only (${n})`,
    all: (n: number) => `Show all (${n})`,
  },
  zh: {
    button: (n: number) => `显示库存文章（${n}篇）`,
    note: "准备中的稿件，仅测试网站可见。可用 ?stock=1 直接打开（仅推荐：?stock=featured）。",
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
  useEffect(() => {
    const { open, featuredOnly } = readStockParam();
    setOpen(open);
    setFeaturedOnly(featuredOnly);
  }, []);
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
          onClick={() => {
            setOpen(true);
            syncStockParam(true, false);
          }}
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
          onClick={() => {
            setOpen(false);
            syncStockParam(false, false);
          }}
        >
          {copy.hide}
        </button>
        {canFilter && (
          <button
            type="button"
            className={`stock-reveal-button stock-reveal-featured${featuredOnly ? " active" : ""}`}
            aria-pressed={featuredOnly}
            onClick={() => {
              const next = !featuredOnly;
              setFeaturedOnly(next);
              syncStockParam(true, next);
            }}
          >
            {featuredOnly ? copy.all(count) : copy.featured(featuredCount)}
          </button>
        )}
      </div>
      {shown ? <div className="listing-grid">{shown}</div> : children}
    </div>
  );
}
