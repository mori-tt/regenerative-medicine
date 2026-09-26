"use client";
import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/content/articles";
import { categories } from "@/content/categories";
import { glossaryGroups, glossaryTermId } from "@/content/glossary";
import { ArticleCard } from "./content";
import { Icon } from "./visuals";

export function ArticleSearch({ items }: { items: (Article & { searchText: string })[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const glossaryIndex = glossaryGroups.flatMap((g, gi) =>
    g.terms.map((t, ti) => ({
      id: glossaryTermId(gi, ti),
      term: t.ja[0],
      keywords: `${t.ja[0]} ${t.en[0]} ${t.zh[0]}`.toLocaleLowerCase(),
    })),
  );
  const terms = query
    .normalize("NFKC")
    .toLocaleLowerCase("ja")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const results = items.filter(
    (a) =>
      (category === "all" || a.category === category) &&
      terms.every((t) =>
        a.searchText
          .normalize("NFKC")
          .toLocaleLowerCase("ja")
          .includes(t),
      ),
  );
  const termHits =
    terms.length === 0
      ? []
      : glossaryIndex.filter((g) => terms.every((t) => g.keywords.includes(t)));
  return (
    <>
      <div className="search-form" role="search">
        <Icon name="search" size={21} />
        <input
          aria-label="記事のキーワードを入力"
          type="search"
          placeholder="キーワードで探す（例：幹細胞、費用）"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="filter-links" aria-label="カテゴリで絞り込み">
        {[{ slug: "all", label: "すべて" }, ...categories].map((c) => (
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
      <p className="search-status" role="status" aria-live="polite">
        {results.length}件の記事{query && ` · 「${query}」の検索結果`}
      </p>
      {termHits.length > 0 && (
        <div className="search-term-hits">
          <p className="search-term-label">関連する用語</p>
          <ul>
            {termHits.slice(0, 10).map((t) => (
              <li key={t.id}>
                <Link href={`/glossary/#${t.id}`}>{t.term}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {results.length ? (
        <div className="listing-grid">
          {results.map((a) => (
            <ArticleCard article={a} key={a.slug} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>
            条件に一致する記事は見つかりませんでした。
            <br />
            別のキーワードでお試しください。
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            検索条件をクリア
          </button>
        </div>
      )}
    </>
  );
}
