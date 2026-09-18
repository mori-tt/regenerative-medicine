"use client";
import { useState } from "react";
import { articles, categories } from "@/content/articles";
import { ArticleCard } from "./content";
import { Icon } from "./visuals";

export function ArticleSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const terms = query
    .normalize("NFKC")
    .toLocaleLowerCase("ja")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const results = articles.filter(
    (a) =>
      (category === "all" || a.category === category) &&
      terms.every((t) =>
        [
          a.title,
          a.description,
          ...a.points,
          ...a.sections.flatMap((s) => [s.title, ...s.paragraphs]),
        ]
          .join(" ")
          .normalize("NFKC")
          .toLocaleLowerCase("ja")
          .includes(t),
      ),
  );
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
