"use client";

import { useState } from "react";
import Link from "next/link";
import { glossaryGroups, glossaryTermId } from "@/content/glossary";
import { articles } from "@/content/articles";
import { localizedArticleFor } from "./localized-article";
import type { SiteLocale } from "@/content/locales";

type GlossLocale = SiteLocale | "ja";
type SortMode = "group" | "kana" | "alpha";

const labels = {
  ja: { index: "分類から探す", more: "くわしく読む", source: "出典", search: "用語を検索", hits: "件ヒット", total: "語収録", note: "用語の意味は文脈で変わることがあります。治療の説明で分からない言葉があれば、その場で医療者に確認しましょう。", sort: "並び替え：", sortGroup: "カテゴリ別", sortKana: "あいうえお順", sortAlpha: "ローマ字・ABC順", back: "索引に戻る ↑" },
  en: { index: "Browse by group", more: "Read more", source: "Source", search: "Search terms", hits: "hits", total: "terms", note: "Word meanings can shift with context. If a term in a treatment explanation is unclear, ask the provider directly.", sort: "Sort:", sortGroup: "By category", sortKana: "By kana", sortAlpha: "A–Z", back: "Back to index ↑" },
  zh: { index: "按分类查找", more: "延伸阅读", source: "出处", search: "搜索术语", hits: "条结果", total: "个术语", note: "术语的含义可能因语境而异。治疗说明中如有不明白的词，请当场向医务人员确认。", sort: "排序：", sortGroup: "按类别", sortKana: "按日文五十音", sortAlpha: "按罗马字/ABC", back: "返回索引 ↑" },
} as const;

function gid(group: { ja: string }, index: number) {
  return `glossary-group-${index}`;
}

type TermEntry = (typeof glossaryGroups)[number]["terms"][number];

export function Glossary({ locale = "ja" }: { locale?: GlossLocale }) {
  const copy = labels[locale];
  const prefix = locale === "ja" ? "" : `/${locale}`;
  const articleHref = (slug: string) => `${prefix}/articles/${slug}/`;
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortMode>("group");
  const q = query.trim().toLowerCase();
  const totalTerms = glossaryGroups.reduce((n, g) => n + g.terms.length, 0);
  const matchTerm = (term: TermEntry) => {
    if (!q) return true;
    return [term.ja, term.en, term.zh].some(([t, d]) => t.toLowerCase().includes(q) || d.toLowerCase().includes(q));
  };
  const matchCount = q ? glossaryGroups.reduce((n, g) => n + g.terms.filter(matchTerm).length, 0) : 0;

  const kanaCollator = new Intl.Collator("ja");
  const alphaCollator = new Intl.Collator("en");
  const flatTerms = glossaryGroups
    .flatMap((g, gi) => g.terms.map((term, ti) => ({ term, gi, ti })))
    .filter(({ term }) => matchTerm(term))
    .sort((a, b) =>
      sort === "kana"
        ? kanaCollator.compare(a.term.ja[0], b.term.ja[0])
        : alphaCollator.compare(a.term.en[0], b.term.en[0]),
    );

  const renderItem = (term: TermEntry, gi: number, ti: number) => {
    const [t, d] = locale === "ja" ? term.ja : locale === "en" ? term.en : term.zh;
    const linked = term.link ? articles.find((a) => a.slug === term.link) : undefined;
    const linkedTitle = linked
      ? locale === "ja" ? linked.title : localizedArticleFor(locale, linked).title
      : undefined;
    return (
      <div className="glossary-item" key={t} id={glossaryTermId(gi, ti)}>
        <dt>{t}</dt>
        <dd>
          {d}
          {term.link && (
            <Link className="glossary-link" href={articleHref(term.link)}>
              {copy.more}：{linkedTitle ?? term.link} →
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
  };

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
        {q ? <span className="glossary-hits">{matchCount}{copy.hits}</span> : null}
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
          {glossaryGroups.map((group, i) => (
            <a key={group.ja} href={`#${gid(group, i)}`}>{locale === "ja" ? group.ja : locale === "en" ? group.en : group.zh}</a>
          ))}
        </nav>
      )}
      {sort === "group" ? (
        glossaryGroups.map((group, i) => {
          const visibleTerms = group.terms
            .map((term, ti) => ({ term, ti }))
            .filter(({ term }) => matchTerm(term));
          if (!visibleTerms.length) return null;
          return (
            <section key={group.ja} id={gid(group, i)} className="glossary-group">
              <h2 className="listing-heading">
                {locale === "ja" ? group.ja : locale === "en" ? group.en : group.zh}
                <span className="listing-count">{visibleTerms.length}</span>
              </h2>
              <dl className="glossary-list">
                {visibleTerms.map(({ term, ti }) => renderItem(term, i, ti))}
              </dl>
              <a className="back-to-index" href="#glossary-index">{copy.back}</a>
            </section>
          );
        })
      ) : (
        <dl className="glossary-flat">
          {flatTerms.map(({ term, gi, ti }) => renderItem(term, gi, ti))}
        </dl>
      )}
      <p className="glossary-note">{copy.note}</p>
    </div>
  );
}
