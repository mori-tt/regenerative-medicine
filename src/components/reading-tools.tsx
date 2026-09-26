"use client";
import { useEffect, useRef, useState } from "react";

/** 読了プログレスバー + ページ上部へ戻るボタン + 目次の現在位置ハイライト */
export function ReadingTools({ labelTop = "ページ上部へ戻る" }: { labelTop?: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.width = `${pct * 100}%`;
      setShowTop(window.scrollY > 800);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const links = [...document.querySelectorAll<HTMLAnchorElement>('.toc a[href^="#"]')];
    const sections = [...document.querySelectorAll<HTMLElement>(".article-body section[id], .article-body [id]")];
    if (!links.length || !sections.length) return;
    const byId = new Map(links.map((l) => [l.hash.slice(1), l]));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.removeAttribute("data-active"));
            byId.get(e.target.id)?.setAttribute("data-active", "true");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div ref={barRef} className="reading-progress" aria-hidden="true" />
      <button
        type="button"
        className={`back-to-top${showTop ? " show" : ""}`}
        aria-label={labelTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
