"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  /** 本文中に表示される表記（用語集の表示名と異なる場合あり） */
  text: string;
  /** 用語集での正式な用語名 */
  term: string;
  definition: string;
  href: string;
  moreLabel: string;
};

/**
 * 本文中の用語。クリックで定義をポップアップ表示し、
 * 用語集ページの該当項目へリンクする。
 */
export function InlineTerm({ text, term, definition, href, moreLabel }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span ref={ref} className="term-wrap">
      <button
        type="button"
        className="term-link term-button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {text}
      </button>
      {open && (
        <span className="term-pop" role="tooltip">
          <b className="term-pop-title">{term}</b>
          <span className="term-pop-def">{definition}</span>
          <Link className="term-pop-link" href={href}>
            {moreLabel} →
          </Link>
        </span>
      )}
    </span>
  );
}
