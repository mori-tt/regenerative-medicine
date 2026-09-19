"use client";
import { useState } from "react";
import Link from "next/link";
import { articles, categories, visibleArticles } from "@/content/articles";
import { articleLocales } from "@/content/article-locales";
import { Breadcrumbs } from "./content";
import { localizedArticleFor } from "./localized-article";
import type { SiteLocale } from "@/content/locales";

const categoryNames: Record<SiteLocale, Record<string, string>> = {
  en: {
    all: "All",
    basics: "The basics",
    "stem-cells": "Stem cells",
    treatment: "Considering treatment",
    research: "Research & news",
  },
  zh: {
    all: "全部",
    basics: "再生医学基础",
    "stem-cells": "认识干细胞",
    treatment: "考虑治疗时",
    research: "研究与新闻",
  },
};

export function LocalizedSearch({ locale }: { locale: SiteLocale }) {
  const en = locale === "en";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const terms = query
    .normalize("NFKC")
    .toLocaleLowerCase("en")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const results = visibleArticles(articles).filter((source) => {
    if (category !== "all" && source.category !== category) return false;
    if (terms.length === 0) return true;
    const translated = articleLocales[source.slug]?.[locale];
    const haystack = [
      translated?.title ?? "",
      translated?.description ?? "",
      source.slug.replaceAll("-", " "),
      localizedArticleFor(locale, source).title,
    ]
      .join(" ")
      .normalize("NFKC")
      .toLocaleLowerCase("en");
    return terms.every((term) => haystack.includes(term));
  });
  return (
    <div className="container inner-page">
      <Breadcrumbs
        homeLabel={en ? "Home" : "首页"}
        homeHref={`/${locale}/`}
        locale={locale}
        items={[{ label: en ? "Find articles" : "查找文章" }]}
      />
      <div className="page-heading">
        <span className="eyebrow">FIND YOUR NEXT READ</span>
        <h1>{en ? "Find what you want to learn." : "寻找你想了解的内容。"}</h1>
        <p>
          {en
            ? "Search translated editorial manuscripts by keyword and category."
            : "用关键词与分类组合，查找翻译编辑原稿。"}
        </p>
      </div>
      <div className="search-form" role="search">
        <input
          aria-label={en ? "Enter keywords" : "输入关键词"}
          type="search"
          placeholder={en ? "Search by keyword (e.g. iPS, cost)" : "关键词搜索（例如：干细胞、费用）"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="filter-links" aria-label={en ? "Filter by category" : "按分类筛选"}>
        {[{ slug: "all" }, ...categories].map((c) => (
          <button
            type="button"
            key={c.slug}
            onClick={() => setCategory(c.slug)}
            className={category === c.slug ? "active" : ""}
            aria-pressed={category === c.slug}
          >
            {categoryNames[locale][c.slug] ?? c.slug}
          </button>
        ))}
      </div>
      <p className="search-status" role="status" aria-live="polite">
        {en
          ? `${results.length} articles${query ? ` · results for “${query}”` : ""}`
          : `${results.length}篇文章${query ? ` · “${query}”的搜索结果` : ""}`}
      </p>
      {results.length ? (
        <div className="listing-grid">
          {results.map((source) => {
            const article = localizedArticleFor(locale, source);
            return (
              <article className="article-card" key={source.slug}>
                <div className="article-card-body">
                  <h2>
                    <Link href={`/${locale}/articles/${source.slug}/`}>{article.title}</Link>
                  </h2>
                  <p>{article.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <p>
            {en ? (
              <>
                No articles matched your search.
                <br />
                Try different keywords.
              </>
            ) : (
              <>
                没有找到符合条件的文章。
                <br />
                请换关键词试试。
              </>
            )}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            {en ? "Clear search" : "清除搜索条件"}
          </button>
        </div>
      )}
    </div>
  );
}
