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

/** 予約公開の基準日 (YYYY-MM-DD、日本時間)。プレビュー時は NEXT_PUBLIC_PREVIEW_DATE で上書き可。 */
export function publishBaseDate(now: Date = new Date()): string {
  return publicationDate(
    now,
    publication.mode,
    process.env.NEXT_PUBLIC_PREVIEW_DATE,
  );
}
