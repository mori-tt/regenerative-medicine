"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { categories } from "@/content/categories";
import { localizedCategoryName, localizedShell } from "@/content/locales";
import { localeFromPath, localePrefix } from "@/lib/locale-path";

/** `<details>` 製メニュー共通の挙動：外側クリック・Escape・リンク選択で閉じる。 */
function useDismissibleDetails() {
  const details = useRef<HTMLDetailsElement>(null);
  const close = () => details.current?.removeAttribute("open");
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !details.current?.contains(event.target)) close();
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && details.current?.open) {
        close();
        details.current.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return { details, close };
}

const categoryLabel = { ja: "カテゴリ", en: "Categories", zh: "分类" } as const;
const categoryNavLabel = { ja: "カテゴリ一覧", en: "Categories", zh: "分类" } as const;

/** PCヘッダーのカテゴリドロップダウン。 */
export function CategoryDropdown() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const prefix = localePrefix(locale);
  const { details, close } = useDismissibleDetails();
  return (
    <details className="cat-dropdown" ref={details}>
      <summary>{categoryLabel[locale]}</summary>
      <nav aria-label={categoryNavLabel[locale]}>
        {categories.map((c) => (
          <Link key={c.slug} href={`${prefix}/categories/${c.slug}/`} onClick={close} aria-current={pathname === `${prefix}/categories/${c.slug}/` ? "page" : undefined}>
            {locale === "ja" ? c.label : localizedCategoryName(locale, c.slug)}
          </Link>
        ))}
      </nav>
    </details>
  );
}

export function CategoryPicker({ label, selected, count, children }: { label: string; selected: string; count?: number; children: ReactNode }) {
  const { details, close } = useDismissibleDetails();
  return (
    <details className="category-navigation-menu" ref={details} onClick={(event) => {
      if (event.target instanceof Element && event.target.closest("a")) close();
    }}>
      <summary>
        <span className="category-selection">
          <span className="category-selection-label">{label}</span>
          <span>{selected}{count !== undefined && <small>{count}</small>}</span>
        </span>
      </summary>
      {children}
    </details>
  );
}

export function MobileMenu() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const copy = locale === "ja" ? null : localizedShell[locale];
  const prefix = localePrefix(locale);
  const { details, close } = useDismissibleDetails();
  const links = [
    { href: `${prefix}/`, label: copy?.home || "ホーム" },
    { href: `${prefix}/guide/`, label: copy?.guide || "はじめての方へ" },
    { href: `${prefix}/articles/`, label: copy?.articles || "記事一覧" },
    { href: `${prefix}/search/`, label: copy?.search || "記事検索" },
    { href: `${prefix}/glossary/`, label: copy?.glossary || "用語集" },
  ];
  return (
    <details className="mobile-menu" ref={details}>
      <summary aria-label={locale === "en" ? "Menu" : locale === "zh" ? "菜单" : "メニュー"}>
        <svg className="menu-icon-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg className="menu-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="m6 6 12 12M6 18 18 6" />
        </svg>
      </summary>
      <nav aria-label={locale === "en" ? "Mobile navigation" : locale === "zh" ? "移动导航" : "モバイルナビゲーション"}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={close} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>
        ))}
        <div className="mobile-menu-group">
          <p>{categoryNavLabel[locale]}</p>
          {categories.map((c) => (
            <Link key={c.slug} href={`${prefix}/categories/${c.slug}/`} onClick={close} aria-current={pathname === `${prefix}/categories/${c.slug}/` ? "page" : undefined}>
              {locale === "ja" ? c.label : localizedCategoryName(locale, c.slug)}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-group">
          <p>{locale === "ja" ? "このサイトについて" : locale === "en" ? "About this site" : "关于本网站"}</p>
          <Link href={`${prefix}/editorial-policy/`} onClick={close}>{copy?.editorial || "編集方針"}</Link>
          <Link href={`${prefix}/supervision/`} onClick={close}>{copy?.supervision || "医師監修について"}</Link>
          <Link href={`${prefix}/contact/`} onClick={close}>{copy?.contact || "お問い合わせ"}</Link>
        </div>
      </nav>
    </details>
  );
}
