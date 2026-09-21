"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./visuals";

const copy = {
  ja: {
    label: "タイトル・概要から絞り込む",
    placeholder: "例：幹細胞、費用、安全性",
    search: "本文も含めて検索",
    count: (n: number, total: number) => `${total}本中 ${n}本を表示`,
    empty: "条件に一致する記事はありません。別の言葉でお試しください。",
    clear: "絞り込みを解除",
  },
  en: {
    label: "Filter by title or summary",
    placeholder: "Try stem cells, cost, or safety",
    search: "Search full articles",
    count: (n: number, total: number) => `${n} of ${total} articles`,
    empty: "No matching articles. Try another keyword.",
    clear: "Clear filter",
  },
  zh: {
    label: "按标题或摘要筛选",
    placeholder: "例如：干细胞、费用、安全性",
    search: "搜索文章全文",
    count: (n: number, total: number) => `显示 ${total} 篇中的 ${n} 篇`,
    empty: "没有符合条件的文章，请尝试其他关键词。",
    clear: "清除筛选",
  },
};

// Cards stay server-rendered so every article link is available without JavaScript.
export function ArticleBrowser({
  children,
  terms,
  locale = "ja",
}: {
  children: ReactNode;
  terms: string[];
  locale?: keyof typeof copy;
}) {
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const text = copy[locale];
  const normalize = (value: string) =>
    value.normalize("NFKC").toLocaleLowerCase(locale);
  const words = normalize(query).trim().split(/\s+/).filter(Boolean);
  const cards = Children.toArray(children);
  const matches = cards.filter((_, index) =>
    words.every((word) => normalize(terms[index] ?? "").includes(word)),
  );
  return (
    <>
      <div className="browser-tools">
        <label>
          {text.label}
          <input
            ref={input}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={text.placeholder}
          />
        </label>
        <Link href={`${locale === "ja" ? "" : `/${locale}`}/search/`}>
          {text.search}
          <Icon name="arrow" size={18} />
        </Link>
      </div>
      <p className="browser-count" role="status" aria-live="polite">
        {text.count(matches.length, cards.length)}
      </p>
      {matches.length ? (
        <div className="listing-grid">{matches}</div>
      ) : (
        <div className="empty-state">
          <p>{text.empty}</p>
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                input.current?.focus();
              }}
            >
              {text.clear}
            </button>
          )}
        </div>
      )}
    </>
  );
}
