"use client";

import { useState, type ReactNode } from "react";

const labels = {
  ja: {
    button: (n: number) => `ストック記事を表示（${n}件）`,
    note: "公開準備中の原稿です。テストサイトでのみ参照できます。",
    hide: "ストックを閉じる",
  },
  en: {
    button: (n: number) => `Show stock articles (${n})`,
    note: "Manuscripts in preparation — visible on the test site only.",
    hide: "Hide stock articles",
  },
  zh: {
    button: (n: number) => `显示库存文章（${n}篇）`,
    note: "准备中的稿件，仅测试网站可见。",
    hide: "收起库存文章",
  },
} as const;

/**
 * ストック記事のカード一覧をボタンの後ろに隠す。
 * 本番ビルドではストック記事自体が生成されないため、このボタンは出ない。
 */
export function StockReveal({
  count,
  locale = "ja",
  children,
}: {
  count: number;
  locale?: keyof typeof labels;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  if (count <= 0) return null;
  const copy = labels[locale];
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
      <button
        type="button"
        className="stock-reveal-button stock-reveal-close"
        aria-expanded={true}
        onClick={() => setOpen(false)}
      >
        {copy.hide}
      </button>
      {children}
    </div>
  );
}
