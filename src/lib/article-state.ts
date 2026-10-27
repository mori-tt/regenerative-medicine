import { publicationDate } from "./article-review";
import { publication } from "./site-config";
import type { Article } from "@/content/articles";
export type ArticleBuildMode = "scheduled" | "all";
export const articleBuildMode: ArticleBuildMode =
  process.env.NEXT_PUBLIC_ARTICLE_BUILD_MODE === "all" ? "all" : "scheduled";

export function isReviewed(article: Article) {
  return (
    article.status === "published" &&
    Boolean(
      article.publishedAt &&
      article.reviewer?.name &&
      article.reviewer.credentials &&
      article.reviewer.affiliation &&
      article.reviewer.profileUrl &&
      article.reviewer.reviewedAt,
    )
  );
}

/**
 * 構造化データ・OGP向けの更新日。updatedAt が公開日より前になるケース
 * （予約公開で publishAt=deployDate を使う場合）に crawlers が日付の
 * 前後関係を疑わないよう、dateModified は datePublished 以降に丸める。
 */
export function articleDateModified(article: {
  updatedAt: string;
  publishedAt?: string;
}): string {
  return article.publishedAt && article.updatedAt < article.publishedAt
    ? article.publishedAt
    : article.updatedAt;
}

/** 予約公開の基準日 (YYYY-MM-DD、日本時間)。プレビュー時は NEXT_PUBLIC_PREVIEW_DATE で上書き可。 */
export function publishBaseDate(now: Date = new Date()): string {
  return publicationDate(
    now,
    publication.mode,
    process.env.NEXT_PUBLIC_PREVIEW_DATE,
  );
}
