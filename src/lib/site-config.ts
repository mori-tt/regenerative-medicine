import rawConfig from "@/content/site-config.json";

const envBoolean = (value: string | undefined, fallback: boolean) => value === undefined ? fallback : value === "true";

export const publication = {
  ...rawConfig.publication,
  mode: process.env.NEXT_PUBLIC_PUBLICATION_MODE || rawConfig.publication.mode,
  showPreviewBanner: envBoolean(process.env.NEXT_PUBLIC_SHOW_PREVIEW_BANNER, rawConfig.publication.showPreviewBanner),
  showPreparationNotices: envBoolean(process.env.NEXT_PUBLIC_SHOW_PREPARATION_NOTICES, rawConfig.publication.showPreparationNotices),
};

export const medicalReviewer = {
  ...rawConfig.medicalReviewer,
  enabled: envBoolean(process.env.NEXT_PUBLIC_MEDICAL_REVIEWER_ENABLED, rawConfig.medicalReviewer.enabled),
  planned: envBoolean(process.env.NEXT_PUBLIC_MEDICAL_REVIEWER_PLANNED, rawConfig.medicalReviewer.planned),
};

/** 一斉公開日 (YYYY-MM-DD)。デプロイ日が決まったら site-config.json の deployDate を更新する。
 *  この日付になるまで、本番モードでは記事は非表示、プレビュー（ARTICLE_BUILD_MODE=all）では全表示。 */
export const deployDate = (process.env.NEXT_PUBLIC_DEPLOY_DATE || rawConfig.deployDate || "2026-10-01").trim();
