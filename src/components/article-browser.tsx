"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./visuals";
import { refreshScope } from "./featured-filter";

const copy = {
  ja: {
    label: "記事を絞り込む",
    placeholder: "キーワード（例：費用、リスク）",
    count: (shown: number, total: number) => `${total}本中 ${shown}本を表示`,
    empty: "条件に一致する記事はありません。",
    emptyLead: "公開中の記事は ",
    emptyTail: " からも確認できます。",
    emptyLink: "カテゴリ一覧",
    clear: "絞り込みを解除",
    clearInput: "キーワードを消す",
    fullSearch: "本文も含めて検索",
  },
  en: {
    label: "Filter articles",
    placeholder: "Keywords (e.g., cost, risks)",
    count: (shown: number, total: number) => `Showing ${shown} of ${total} articles`,
    empty: "No articles match the current filter.",
    emptyLead: "You can also browse the ",
    emptyTail: ".",
    emptyLink: "category list",
    clear: "Clear filter",
    clearInput: "Clear keywords",
    fullSearch: "Search full articles",
  },
  zh: {
    label: "筛选文章",
    placeholder: "关键词（如：费用、风险）",
    count: (shown: number, total: number) => `已发布文章 ${total} 篇中显示 ${shown} 篇`,
    empty: "没有符合条件的文章。",
    emptyLead: "也可以从 ",
    emptyTail: " 查看公开中的文章。",
    emptyLink: "分类列表",
    clear: "清除筛选",
    clearInput: "清除关键词",
    fullSearch: "搜索文章全文",
  },
} as const;

/**
 * カード一覧のテキスト絞り込み。
 * カードはサーバー描画のまま残し、ここでは入力 UI と件数・空状態だけを持つ。
 * gridId で指定したゾーン内の .filter-item に data-query-hide を付け外しし、
 * スコープの featured-on 変化も MutationObserver で追従する。
 */
export function ArticleBrowser({
  locale = "ja",
  total,
  gridId,
}: {
  locale?: keyof typeof copy;
  total: number;
  gridId: string;
}) {
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(total);
  const input = useRef<HTMLInputElement>(null);
  const id = useId();
  const text = copy[locale];
  const prefix = locale === "ja" ? "" : `/${locale}`;

  useEffect(() => {
    const zone = document.getElementById(gridId);
    const scope = zone?.closest("[data-filter-scope]");
    if (!zone || !scope) return;
    const normalize = (value: string) => value.normalize("NFKC").toLocaleLowerCase(locale);
    const run = () => {
      const words = normalize(query).trim().split(/\s+/).filter(Boolean);
      let count = 0;
      zone.querySelectorAll<HTMLElement>(".filter-item").forEach((item) => {
        const matched = words.every((word) => normalize(item.textContent ?? "").includes(word));
        item.toggleAttribute("data-query-hide", !matched);
        const featuredHidden = item.dataset.featured !== "true" && Boolean(item.closest(".filter-scope.featured-on"));
        if (matched && !featuredHidden) count += 1;
      });
      setShown(count);
      refreshScope(scope);
    };
    run();
    const observer = new MutationObserver(run);
    observer.observe(scope, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [query, gridId, locale]);

  const clearQuery = () => {
    setQuery("");
    input.current?.focus();
  };

  return (
    <div className="article-browser">
      <div className="browser-tools">
        <div className="browser-field">
          <label htmlFor={id}>{text.label}</label>
          <div className="browser-input">
            <Icon name="search" size={20} />
            <input
              id={id}
              ref={input}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={text.placeholder}
              aria-controls={gridId}
              aria-describedby={`${id}-count`}
            />
            {query && <button className="browser-clear" type="button" onClick={clearQuery} aria-label={text.clearInput}><span aria-hidden="true">×</span></button>}
          </div>
        </div>
      </div>
      <div className="browser-meta">
        <p className="browser-count" id={`${id}-count`} aria-live="polite">
          {text.count(shown, total)}
        </p>
        <Link className="browser-search-link" href={`${prefix}/search/${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`}>
          {text.fullSearch}<Icon name="arrow" size={18} />
        </Link>
      </div>
      {shown === 0 && (
        <div className="empty-state" role="status">
          <p>
            {text.empty}
            {text.emptyLead}
            <Link href={`${prefix}/articles/`}>{text.emptyLink}</Link>
            {text.emptyTail}
          </p>
          <button
            type="button"
            onClick={() => {
              const scope = document.getElementById(gridId)?.closest("[data-filter-scope]");
              scope?.classList.remove("featured-on");
              refreshScope(scope ?? null);
              clearQuery();
            }}
          >
            {text.clear}
          </button>
        </div>
      )}
    </div>
  );
}
