import media from "./article-media.json";

export type ArticleImage = (typeof media.assets)[keyof typeof media.assets] & { key: string };
export const articleImages = Object.fromEntries(
  Object.entries(media.assets).map(([key, image]) => [key, { ...image, key }]),
) as Record<string, ArticleImage>;

export function articleImageFor(category: string, index: number, imageKey?: string) {
  const set = media.categoryDefaults[category as keyof typeof media.categoryDefaults] ?? media.categoryDefaults["stem-basics"];
  const key = imageKey ?? set[index % set.length];
  return articleImages[key] ?? articleImages[set[index % set.length]];
}

const imageBySrc = new Map(Object.values(articleImages).map((image) => [image.src, image]));

/** 画像パスからメタデータ（寸法・代替テキスト・出典）を引く。 */
export function articleImageBySrc(src: string | undefined): ArticleImage | undefined {
  return src ? imageBySrc.get(src) : undefined;
}

export function articleImageAlt(src: string | undefined, locale: "ja" | "en" | "zh"): string | undefined {
  const image = articleImageBySrc(src);
  if (!image) return undefined;
  return locale === "en" ? image.altEn : locale === "zh" ? image.altZh : image.alt;
}
