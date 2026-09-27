"use client";

import {
  Children,
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type FeaturedState = { on: boolean; setOn: (v: boolean) => void };
const FeaturedContext = createContext<FeaturedState>({
  on: false,
  setOn: () => {},
});

/** 「おすすめのみ」絞り込みのON/OFFを共有するスコープ。入れ子にすると親のONを引き継ぐ。 */
export function FeaturedScope({ children }: { children: ReactNode }) {
  const parent = useContext(FeaturedContext);
  const [self, setSelf] = useState(false);
  return (
    <FeaturedContext.Provider value={{ on: self || parent.on, setOn: setSelf }}>
      {children}
    </FeaturedContext.Provider>
  );
}

/** おすすめ絞り込みトグル。所属する FeaturedScope の状態を切り替える。 */
export function FeaturedButton({
  label,
  count,
}: {
  label: string;
  count: number;
}) {
  const { on, setOn } = useContext(FeaturedContext);
  return (
    <button
      type="button"
      className={`featured-toggle${on ? " active" : ""}`}
      aria-pressed={on}
      onClick={() => setOn(!on)}
    >
      {label} <small>{count}</small>
    </button>
  );
}

/** スコープがONの間、featured=true のカードだけを出す listing-grid。 */
export function FeaturedOnlyGrid({
  children,
  featured,
  empty,
}: {
  children: ReactNode;
  featured: boolean[];
  empty: string;
}) {
  const { on } = useContext(FeaturedContext);
  const cards = Children.toArray(children);
  const shown = on ? cards.filter((_, i) => featured[i]) : cards;
  return shown.length ? (
    <div className="listing-grid">{shown}</div>
  ) : (
    <div className="empty-state">
      <p>{empty}</p>
    </div>
  );
}

/** スコープがONの間はまるごと隠す（コラムなど対象外のセクション用）。 */
export function FeaturedHidden({ children }: { children: ReactNode }) {
  const { on } = useContext(FeaturedContext);
  return on ? null : <>{children}</>;
}
