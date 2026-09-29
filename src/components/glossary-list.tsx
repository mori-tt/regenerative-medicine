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
  /** あいうえおソート用の読み（ひらがな or 表示名）。 */
  kana: string;
  link?: { href: string; title: string };
  ref?: { title: string; url: string };
};
export type GlossaryGroupView = { id: string; label: string; terms: GlossaryTermView[] };

const labels = {
  ja: { index: "分類から探す", more: "くわしく読む", source: "出典", search: "用語を検索", hits: "件ヒット", total: "語収録", note: "用語の意味は文脈で変わることがあります。治療の説明で分からない言葉があれば、その場で医療者に確認しましょう。", sort: "並び替え：", sortGroup: "カテゴリ別", sortKana: "あいうえお順", sortAlpha: "ローマ字・ABC順", back: "索引に戻る ↑", focusLead: "記事で使われていた用語です。", all: "用語集をすべて見る" },
  en: { index: "Browse by group", more: "Read more", source: "Source", search: "Search terms", hits: "hits", total: "terms", note: "Word meanings can shift with context. If a term in a treatment explanation is unclear, ask the provider directly.", sort: "Sort:", sortGroup: "By category", sortKana: "By kana", sortAlpha: "A–Z", back: "Back to index ↑", focusLead: "This term appeared in the article.", all: "Browse the full glossary" },
  zh: { index: "按分类查找", more: "延伸阅读", source: "出处", search: "搜索术语", hits: "条结果", total: "个术语", note: "术语的含义可能因语境而异。治疗说明中如有不明白的词，请当场向医务人员确认。", sort: "排序：", sortGroup: "按类别", sortKana: "按日文五十音", sortAlpha: "按罗马字/ABC", back: "返回索引 ↑", focusLead: "本文中使用的术语。", all: "查看全部术语" },
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
      sort === "kana" ? kanaCollator.compare(a.kana, b.kana) : alphaCollator.compare(a.names[1], b.names[1]),
    );

  // 五十音の行。カタカナ・濁音・半濁音・小書きは清音の行に寄せる。
  const kanaRow = (ch: string) => {
    const hira = ch.replace(/[\u30a1-\u30f6]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60)).replace("ゔ", "う").replace("ヰ", "い").replace("ヱ", "え");
    const c = hira.charCodeAt(0);
    if (c >= 0x3041 && c <= 0x304a) return "あ";
    if (c >= 0x304b && c <= 0x3054) return "か";
    if (c >= 0x3055 && c <= 0x305e) return "さ";
    if (c >= 0x305f && c <= 0x3069) return "た";
    if (c >= 0x306a && c <= 0x306e) return "な";
    if (c >= 0x306f && c <= 0x307d) return "は";
    if (c >= 0x307e && c <= 0x3082) return "ま";
    if ((c >= 0x3083 && c <= 0x3088) || c === 0x3094) return "や";
    if (c >= 0x3089 && c <= 0x308d) return "ら";
    if (c >= 0x308e && c <= 0x3093) return "わ";
    return "その他";
  };
  const kanaOrder = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "その他"];
  const buckets: { key: string; terms: GlossaryTermView[] }[] =
    sort === "kana"
      ? kanaOrder
          .map((key) => ({ key, terms: flatTerms.filter((t) => kanaRow(t.kana) === key) }))
          .filter((b) => b.terms.length > 0)
      : Array.from(new Set(flatTerms.map((t) => (/^[a-z]/i.test(t.names[1]) ? t.names[1][0].toUpperCase() : "#"))))
          .map((key) => ({ key, terms: flatTerms.filter((t) => (/^[a-z]/i.test(t.names[1]) ? t.names[1][0].toUpperCase() : "#") === key) }));

  // 検索中は一致箇所を <mark> で強調する
  const mark = (text: string) => {
    if (!q) return text;
    const needle = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(${needle})`, "gi");
    const parts = text.split(re);
    return parts.map((part, i) =>
      i % 2 ? <mark key={i} className="glossary-mark">{part}</mark> : part,
    );
  };

  const renderItem = (term: GlossaryTermView) => {
    // フラット表示では並び替えに使った別名を補助表示する（英字頭の和語などで位置を分かりやすくする）
    const alt = sort === "alpha" ? term.names[1] : sort === "kana" && term.kana !== term.term ? term.kana : null;
    return (
      <div className="glossary-item" key={term.id} id={term.id}>
        <dt>
          {mark(term.term)}
          {alt && alt !== term.term && <span className="glossary-alt">{alt}</span>}
        </dt>
        <dd>
          {mark(term.definition)}
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
  };

  return (
    <div className="glossary">
      <div className="glossary-tools">
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
      </div>
      <nav className="filter-links" id="glossary-index" aria-label={copy.index}>
        {sort === "group"
          ? groups.map((group) => (
              <a key={group.id} href={`#${group.id}`}>{group.label}</a>
            ))
          : buckets.map((bucket) => (
              <a key={bucket.key} href={`#gl-${sort}-${bucket.key}`}>{bucket.key}</a>
            ))}
      </nav>
      {/* 記事から #gt-* 付きで開いたときはCSS(:target)でこのリード文と対象用語だけを表示する */}
      <p className="glossary-focus-lead">
        {copy.focusLead}
        <a className="glossary-focus-all" href="#glossary-index">{copy.all} →</a>
      </p>
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
        buckets.map((bucket) => (
          <section key={bucket.key} id={`gl-${sort}-${bucket.key}`} className="glossary-group">
            <h2 className="listing-heading glossary-flat-heading">
              {bucket.key}
              <span className="listing-count">{bucket.terms.length}</span>
            </h2>
            <dl className="glossary-flat">{bucket.terms.map(renderItem)}</dl>
            <a className="back-to-index" href="#glossary-index">{copy.back}</a>
          </section>
        ))
      )}
      <p className="glossary-note">{copy.note}</p>
    </div>
  );
}
