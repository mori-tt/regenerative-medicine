"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { SearchIndex, SearchIndexItem, SearchLocale } from "@/lib/search-index";
import { ArticleCard } from "./article-card";
import { Icon } from "./visuals";

const copy = {
  ja: {
    inputLabel: "記事のキーワードを入力",
    placeholder: "キーワードで探す（例：幹細胞、費用）",
    filterLabel: "カテゴリで絞り込み",
    all: "すべて",
    status: (n: number, q: string) => `${n}件の記事${q ? ` · 「${q}」の検索結果` : ""}`,
    loading: "記事データを読み込んでいます…",
    error: "検索データを読み込めませんでした。ページを再読み込みするか、記事一覧からお探しください。",
    terms: "関連する用語",
    empty: ["条件に一致する記事は見つかりませんでした。", "別のキーワードでお試しください。"],
    popular: "よく検索されるキーワード：",
    byCategory: "カテゴリから探す：",
    clear: "検索条件をクリア",
    noscript: "検索にはJavaScriptが必要です。記事一覧からもお探しいただけます。",
    articles: "記事一覧へ",
    keywords: ["幹細胞", "iPS細胞", "エクソソーム", "費用", "副作用", "効果", "保険", "美容"],
  },
  en: {
    inputLabel: "Enter keywords",
    placeholder: "Search by keyword (e.g. iPS, cost)",
    filterLabel: "Filter by category",
    all: "All",
    status: (n: number, q: string) => `${n} articles${q ? ` · results for “${q}”` : ""}`,
    loading: "Loading articles…",
    error: "The search data could not be loaded. Reload the page or browse the article list.",
    terms: "Related terms",
    empty: ["No articles matched your search.", "Try different keywords."],
    popular: "Popular keywords:",
    byCategory: "Browse by category:",
    clear: "Clear search",
    noscript: "Search requires JavaScript. You can also browse the article list.",
    articles: "All articles",
    keywords: ["stem cells", "iPS cells", "exosomes", "cost", "safety", "efficacy", "insurance", "anti-aging"],
  },
  zh: {
    inputLabel: "输入关键词",
    placeholder: "关键词搜索（例如：干细胞、费用）",
    filterLabel: "按分类筛选",
    all: "全部",
    status: (n: number, q: string) => `${n}篇文章${q ? ` · “${q}”的搜索结果` : ""}`,
    loading: "正在加载文章数据…",
    error: "无法加载搜索数据。请重新加载页面，或从文章列表查找。",
    terms: "相关术语",
    empty: ["没有找到符合条件的文章。", "请换关键词试试。"],
    popular: "热门关键词：",
    byCategory: "按分类浏览：",
    clear: "清除搜索条件",
    noscript: "搜索功能需要 JavaScript。您也可以从文章列表查找。",
    articles: "文章列表",
    keywords: ["干细胞", "iPS细胞", "外泌体", "费用", "安全性", "疗效", "保险", "抗衰老"],
  },
} as const;

type LoadState = { status: "loading" } | { status: "error" } | { status: "ready"; index: SearchIndex; lower: string[] };

const normalize = (value: string, locale: SearchLocale) => value.normalize("NFKC").toLocaleLowerCase(locale);

export function ArticleSearch({
  locale,
  indexUrl,
  categories,
}: {
  locale: SearchLocale;
  indexUrl: string;
  categories: { slug: string; label: string }[];
}) {
  const text = copy[locale];
  const prefix = locale === "ja" ? "" : `/${locale}`;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [state, setState] = useState<LoadState>({ status: "loading" });
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
    setRestored(true);
  }, []);

  // インデックスはページに埋め込まず、検索ページを開いた時にだけ取得する（HTMLの肥大化を防ぐ）。
  useEffect(() => {
    const controller = new AbortController();
    fetch(indexUrl, { signal: controller.signal })
      .then((res) => (res.ok ? (res.json() as Promise<SearchIndex>) : Promise.reject(new Error(String(res.status)))))
      .then((index) => setState({ status: "ready", index, lower: index.items.map((item) => normalize(item.text, locale)) }))
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) setState({ status: "error" });
      });
    return () => controller.abort();
  }, [indexUrl, locale]);

  // 検索語をURLに反映して、共有・ブラウザバック時に同じ結果を再現できるようにする。
  // URL から state を復元し終えるまでは書き戻さない。
  useEffect(() => {
    if (!restored) return;
    const url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set("q", query.trim());
    else url.searchParams.delete("q");
    if (url.href !== window.location.href) window.history.replaceState(null, "", url);
  }, [query, restored]);

  const terms = useMemo(() => normalize(query, locale).trim().split(/\s+/).filter(Boolean), [query, locale]);
  const { results, termHits } = useMemo(() => {
    if (state.status !== "ready") return { results: [] as SearchIndexItem[], termHits: [] as SearchIndex["terms"] };
    return {
      results: state.index.items.filter(
        (item, i) => (category === "all" || item.category === category) && terms.every((t) => state.lower[i].includes(t)),
      ),
      termHits: terms.length ? state.index.terms.filter((g) => terms.every((t) => g.keywords.includes(t))) : [],
    };
  }, [state, category, terms]);

  return (
    <>
      <div className="search-form" role="search">
        <Icon name="search" size={21} />
        <input
          aria-label={text.inputLabel}
          type="search"
          placeholder={text.placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="filter-links" aria-label={text.filterLabel}>
        {[{ slug: "all", label: text.all }, ...categories].map((c) => (
          <button
            type="button"
            key={c.slug}
            onClick={() => setCategory(c.slug)}
            className={category === c.slug ? "active" : ""}
            aria-pressed={category === c.slug}
          >
            {c.label}
          </button>
        ))}
      </div>
      <noscript>
        <p className="search-status">
          {text.noscript} <Link href={`${prefix}/articles/`}>{text.articles} →</Link>
        </p>
      </noscript>
      <p className="search-status" role="status" aria-live="polite" aria-busy={state.status === "loading"}>
        {state.status === "loading" ? text.loading : state.status === "error" ? text.error : text.status(results.length, query.trim())}
        {state.status === "error" && (
          <>
            {" "}
            <Link href={`${prefix}/articles/`}>{text.articles} →</Link>
          </>
        )}
      </p>
      {termHits.length > 0 && (
        <div className="search-term-hits">
          <p className="search-term-label">{text.terms}</p>
          <ul>
            {termHits.slice(0, 10).map((t) => (
              <li key={t.id}>
                <Link href={`${prefix}/glossary/#${t.id}`}>{t.term}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {state.status !== "ready" ? null : results.length ? (
        <div className="listing-grid">
          {results.map((item) => (
            <ArticleCard article={item} key={item.slug} highlight={terms} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>
            {text.empty[0]}
            <br />
            {text.empty[1]}
          </p>
          <div className="search-suggest">
            <p className="search-suggest-label">{text.popular}</p>
            <div className="kw-chips">
              {text.keywords.map((kw) => (
                <button key={kw} type="button" className="kw-chip" onClick={() => setQuery(kw)}>
                  {kw}
                </button>
              ))}
            </div>
            <p className="search-suggest-label">{text.byCategory}</p>
            <div className="kw-chips">
              {categories.map((c) => (
                <Link key={c.slug} className="kw-chip" href={`${prefix}/categories/${c.slug}/`}>
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            {text.clear}
          </button>
        </div>
      )}
    </>
  );
}
