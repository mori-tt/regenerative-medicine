import { articles, liveArticles, visibleArticles, type Article } from "@/content/articles";
import { glossaryGroups, glossaryTermId } from "@/content/glossary";
import { localizedArticleFor, localizedCardData } from "@/components/localized-article";
import { toCardData, type ArticleCardData } from "@/components/article-card";
import { publicAsset } from "./site";

export type SearchLocale = "ja" | "en" | "zh";
export type SearchIndexItem = ArticleCardData & { text: string };
export type SearchTerm = { id: string; term: string; keywords: string };
export type SearchIndex = { items: SearchIndexItem[]; terms: SearchTerm[] };

/** 検索インデックス（JSON）の配信パス。ページには埋め込まず、検索ページが必要になった時点で取得する。 */
export function searchIndexPath(locale: SearchLocale) {
  return publicAsset(`/search-index.${locale}.json`);
}

// サブカテゴリ共通の「掘り下げ」節は多くの記事で同文なので、検索の対象から外す
// （一致しても記事固有の情報ではなく、インデックスも肥大化する）。
const excludedSectionIds = new Set(["deeper-look"]);

function searchText(
  title: string,
  description: string,
  points: readonly string[],
  sections: readonly { id?: string; title: string; paragraphs: readonly string[] }[],
) {
  return [
    title,
    description,
    ...points,
    ...sections.filter((s) => !s.id || !excludedSectionIds.has(s.id)).flatMap((s) => [s.title, ...s.paragraphs]),
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .normalize("NFKC");
}

function itemFor(locale: SearchLocale, source: Article): SearchIndexItem {
  if (locale === "ja") {
    return { ...toCardData(source, "ja"), text: searchText(source.title, source.description, source.points, source.sections) };
  }
  const article = localizedArticleFor(locale, source);
  return {
    ...localizedCardData(locale, source),
    text: searchText(article.title, article.description, article.points, article.sections),
  };
}

export function buildSearchIndex(locale: SearchLocale): SearchIndex {
  return {
    // ストック記事は確認用のため検索対象外（一覧ページの「ストック記事を表示」ボタンでのみ参照）。
    items: liveArticles(visibleArticles(articles)).map((source) => itemFor(locale, source)),
    terms: glossaryGroups.flatMap((group, gi) =>
      group.terms.map((term, ti) => ({
        id: glossaryTermId(gi, ti),
        term: term[locale][0],
        keywords: `${term.ja[0]} ${term.en[0]} ${term.zh[0]}`.normalize("NFKC").toLocaleLowerCase(locale),
      })),
    ),
  };
}
