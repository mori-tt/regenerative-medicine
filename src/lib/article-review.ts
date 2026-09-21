export type ArticleReviewRecord = {
  publishAt?: string;
  imageKey?: string;
  lastEditedAt?: string;
  publishedAt?: string;
  medicalStatus?: string;
  legalStatus?: string;
  reviewer?: {
    status?: string;
    name?: string;
    reviewedAt?: string;
    scope?: string;
  };
};

function actualDate(value: string | undefined): value is string {
  return Boolean(
    value &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value,
  );
}

export function publicationDate(
  now: Date,
  mode: string,
  previewDate?: string,
): string {
  if (mode !== "production" && actualDate(previewDate)) return previewDate;
  return new Date(now.getTime() + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

/** Editing or scheduling an article never substitutes for recorded professional review. */
export function reviewRecordReady(
  record: ArticleReviewRecord | undefined,
  profileEnabled: boolean,
  today: string,
): boolean {
  if (!record || !profileEnabled) return false;
  const review = record.reviewer;
  return (
    record.medicalStatus === "reviewed" &&
    record.legalStatus === "reviewed" &&
    review?.status === "reviewed" &&
    Boolean(review.name?.trim() && review.scope?.trim()) &&
    actualDate(review.reviewedAt) &&
    review.reviewedAt <= today &&
    actualDate(record.publishedAt) &&
    record.publishedAt <= today &&
    (!record.lastEditedAt || review.reviewedAt >= record.lastEditedAt)
  );
}
