import Link from "next/link";
import type { ReactNode } from "react";

export type InlineTerm = { id: string; term: string };

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * 本文テキスト中の用語を用語集へのリンクに変換する。
 * 同一記事内では各用語の最初の出現のみリンク化し、リンクの乱立を防ぐ。
 * used は記事ごとに新しい Set を渡すこと。
 */
export function linkTerms(
  text: string,
  terms: InlineTerm[],
  used: Set<string>,
  prefix: string,
): ReactNode[] {
  const parts: ReactNode[] = [text];
  for (const { id, term } of terms) {
    if (used.has(id) || term.length < 2) continue;
    const isLatin = /^[A-Za-z][A-Za-z0-9 -]*$/.test(term);
    const re = new RegExp(isLatin ? `\\b${escapeRe(term)}\\b` : escapeRe(term), isLatin ? "i" : "");
    let replaced = false;
    for (let i = 0; i < parts.length && !replaced; i++) {
      const seg = parts[i];
      if (typeof seg !== "string") continue;
      const m = seg.match(re);
      if (!m || m.index === undefined) continue;
      const before = seg.slice(0, m.index);
      const after = seg.slice(m.index + m[0].length);
      const node = (
        <Link key={`${id}-${i}`} className="term-link" href={`${prefix}/glossary/#${id}`}>
          {m[0]}
        </Link>
      );
      parts.splice(i, 1, ...(before ? [before, node] : [node]), ...(after ? [after] : []));
      used.add(id);
      replaced = true;
    }
  }
  return parts;
}
