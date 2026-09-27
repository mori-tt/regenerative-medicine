"use client";

import { useState } from "react";
import Link from "next/link";

export type GlossaryLocale = "ja" | "en" | "zh";
type SortMode = "group" | "kana" | "alpha";

/** 表示言語に解決済みの用語。用語集データ本体や記事データはクライアントへ渡さない。 */
export type GlossaryTermView = {
  id: string;
  term: string;
  definition: string;
  /** [ja, en, zh] の用語名。言語をまたいだ検索と並び替えに使う。 */
  names: [string, string, string];
  link?: { href: string; title: string };
  ref?: { title: string; url: string };
};
export type GlossaryGroupView = { id: string; label: string; terms: GlossaryTermView[] };

const labels = {
  ja: { index: "分類から探す", more: "くわしく読む", source: "出典", search: "用語を検索", hits: "件ヒット", total: "語収録", note: "用語の意味は文脈で変わることがあります。治療の説明で分からない言葉があれば、その場で医療者に確認しましょう。", sort: "並び替え：", sortGroup: "カテゴリ別", sortKana: "あいうえお順", sortAlpha: "ローマ字・ABC順", back: "索引に戻る ↑" },
  en: { index: "Browse by group", more: "Read more", source: "Source", search: "Search terms", hits: "hits", total: "terms", note: "Word meanings can shift with context. If a term in a treatment explanation is unclear, ask the provider directly.", sort: "Sort:", sortGroup: "By category", sortKana: "By kana", sortAlpha: "A–Z", back: "Back to index ↑" },
  zh: { index: "按分类查找", more: "延伸阅读", source: "出处", search: "搜索术语", hits: "条结果", total: "个术语", note: "术语的含义可能因语境而异。治疗说明中如有不明白的词，请当场向医务人员确认。", sort: "排序：", sortGroup: "按类别", sortKana: "按日文五十音", sortAlpha: "按罗马字/ABC", back: "返回索引 ↑" },
} as const;

export function GlossaryList({ locale, groups }: { locale: GlossaryLocale; groups: GlossaryGroupView[] }) {
  const copy = labels[locale];
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortMode>("group");
  const q = query.trim().toLowerCase();
  const totalTerms = groups.reduce((n, g) => n + g.terms.length, 0);
  const matchTerm = (term: GlossaryTermView) =>
    !q || term.names.some((name) => name.toLowerCase().includes(q)) || term.definition.toLowerCase().includes(q);
  const matchCount = q ? groups.reduce((n, g) => n + g.terms.filter(matchTerm).length, 0) : 0;

  const kanaCollator = new Intl.Collator("ja");
  const alphaCollator = new Intl.Collator("en");
  const flatTerms = groups
    .flatMap((g) => g.terms)
    .filter(matchTerm)
    .sort((a, b) =>
      sort === "kana" ? kanaCollator.compare(a.names[0], b.names[0]) : alphaCollator.compare(a.names[1], b.names[1]),
    );

  const renderItem = (term: GlossaryTermView) => (
    <div className="glossary-item" key={term.id} id={term.id}>
      <dt>{term.term}</dt>
      <dd>
        {term.definition}
        {term.link && (
          <Link className="glossary-link" href={term.link.href}>
            {copy.more}：{term.link.title} →
          </Link>
        )}
        {term.ref && (
          <a className="glossary-link glossary-source" href={term.ref.url} target="_blank" rel="noopener noreferrer">
            {copy.source}：{term.ref.title} ↗
          </a>
        )}
      </dd>
    </div>
  );

  return (
    <div className="glossary">
      <div className="glossary-search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`${copy.search} — ${totalTerms}${copy.total}`}
          aria-label={copy.search}
        />
        {q ? <span className="glossary-hits" role="status" aria-live="polite">{matchCount}{copy.hits}</span> : null}
      </div>
      <div className="glossary-sort" role="group" aria-label={copy.sort}>
        <span className="glossary-sort-label">{copy.sort}</span>
        {(["group", "kana", "alpha"] as SortMode[]).map((mode) => (
          <button
            type="button"
            key={mode}
            className={sort === mode ? "active" : ""}
            aria-pressed={sort === mode}
            onClick={() => setSort(mode)}
          >
            {mode === "group" ? copy.sortGroup : mode === "kana" ? copy.sortKana : copy.sortAlpha}
          </button>
        ))}
      </div>
      {sort === "group" && (
        <nav className="filter-links" id="glossary-index" aria-label={copy.index}>
          {groups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>{group.label}</a>
          ))}
        </nav>
      )}
      {sort === "group" ? (
        groups.map((group) => {
          const visibleTerms = group.terms.filter(matchTerm);
          if (!visibleTerms.length) return null;
          return (
            <section key={group.id} id={group.id} className="glossary-group">
              <h2 className="listing-heading">
                {group.label}
                <span className="listing-count">{visibleTerms.length}</span>
              </h2>
              <dl className="glossary-list">{visibleTerms.map(renderItem)}</dl>
              <a className="back-to-index" href="#glossary-index">{copy.back}</a>
            </section>
          );
        })
      ) : (
        <dl className="glossary-flat">{flatTerms.map(renderItem)}</dl>
      )}
      <p className="glossary-note">{copy.note}</p>
    </div>
  );
}
