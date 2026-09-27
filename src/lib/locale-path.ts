export type UiLocale = "ja" | "en" | "zh";

const localePattern = /^\/(en|zh)(?=\/|$)/;

/** URL のパスから表示言語を判定する（/en/... → en、/zh/... → zh、それ以外は ja）。 */
export function localeFromPath(pathname: string): UiLocale {
  const match = localePattern.exec(pathname);
  return match ? (match[1] as UiLocale) : "ja";
}

/** 言語別のURL接頭辞（ja は空文字）。 */
export function localePrefix(locale: UiLocale): string {
  return locale === "ja" ? "" : `/${locale}`;
}

/** 言語接頭辞を外した共通パス（言語切替リンクの生成に使う）。 */
export function stripLocale(pathname: string): string {
  return pathname.replace(localePattern, "") || "/";
}

/** `<html lang>` に入れる値。 */
export const htmlLangFor: Record<UiLocale, string> = { ja: "ja", en: "en", zh: "zh-CN" };
