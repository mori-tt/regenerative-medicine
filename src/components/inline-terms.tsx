import type { ReactNode } from "react";
import { InlineTerm } from "./inline-term";

export type InlineTerm = { id: string; term: string; definition: string; matched?: string };

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const moreLabels = {
  ja: "用語集で確認する",
  en: "See in glossary",
  zh: "查看术语表",
} as const;

/**
 * 本文テキスト中の用語を用語集ポップアップに変換する。
 * ポップアップは定義と用語集ページへのリンクを表示する。
 * 同一記事内では各用語の最初の出現のみリンク化し、リンクの乱立を防ぐ。
 * used は記事ごとに新しい Set を渡すこと。
 */
export function linkTerms(
  text: string,
  terms: InlineTerm[],
  used: Set<string>,
  prefix: string,
  locale: keyof typeof moreLabels = "ja",
): ReactNode[] {
  const parts: ReactNode[] = [text];
  for (const { id, term, definition, matched } of terms) {
    if (used.has(id)) continue;
    const surface = matched ?? term;
    if (surface.length < 2) continue;
    const isLatin = /^[A-Za-z][A-Za-z0-9 -]*$/.test(surface);
    const re = new RegExp(isLatin ? `\\b${escapeRe(surface)}\\b` : escapeRe(surface), isLatin ? "i" : "");
    let replaced = false;
    for (let i = 0; i < parts.length && !replaced; i++) {
      const seg = parts[i];
      if (typeof seg !== "string") continue;
      const m = seg.match(re);
      if (!m || m.index === undefined) continue;
      const before = seg.slice(0, m.index);
      const after = seg.slice(m.index + m[0].length);
      const node = (
        <InlineTerm
          key={`${id}-${i}`}
          text={m[0]}
          term={term}
          definition={definition}
          href={`${prefix}/glossary/#${id}`}
          moreLabel={moreLabels[locale]}
        />
      );
      parts.splice(i, 1, ...(before ? [before, node] : [node]), ...(after ? [after] : []));
      used.add(id);
      replaced = true;
    }
  }
  return parts;
}
