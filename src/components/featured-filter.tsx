"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 「おすすめ」絞り込みのトグル。
 * カード自体はサーバー描画したまま .filter-item / data-featured / data-query-hide
 * で制御するため、ここでは最も近い data-filter-scope 要素に featured-on を付け外しする。
 * CSS 側で `.filter-scope.featured-on .filter-item:not([data-featured="true"])` を非表示にする。
 */

/** スコープ内の .listing-zone を走査し、表示カードが 0 枚なら .listing-empty を出す。 */
export function refreshScope(scope: Element | null) {
  if (!scope) return;
  scope.querySelectorAll<HTMLElement>(".listing-zone").forEach((zone) => {
    const empty = zone.querySelector<HTMLElement>(".listing-empty");
    if (!empty) return;
    const items = zone.querySelectorAll<HTMLElement>(".filter-item");
    let visible = 0;
    items.forEach((item) => {
      const queryHidden = item.hasAttribute("data-query-hide");
      const featuredHidden = item.dataset.featured !== "true" && Boolean(item.closest(".filter-scope.featured-on"));
      if (!queryHidden && !featuredHidden) visible += 1;
    });
    empty.hidden = visible > 0;
  });
}

export function FeaturedButton({ label, count, total }: { label: string; count: number; total?: number }) {
  const [on, setOn] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scope = button.current?.closest("[data-filter-scope]");
    if (!scope) return;
    const sync = () => setOn(scope.classList.contains("featured-on"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(scope, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  if (count === 0 || (total !== undefined && count >= total)) return null;
  return (
    <button
      ref={button}
      type="button"
      className={`featured-toggle${on ? " active" : ""}`}
      aria-pressed={on}
      onClick={(event) => {
        const scope = event.currentTarget.closest("[data-filter-scope]");
        const next = !scope?.classList.contains("featured-on");
        scope?.classList.toggle("featured-on", next);
        setOn(next);
        refreshScope(scope);
      }}
    >
      {label} <small>{count}</small>
    </button>
  );
}
