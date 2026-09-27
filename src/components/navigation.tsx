"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
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
  const locale = localeFromPath(usePathname());
  const prefix = localePrefix(locale);
  const { details, close } = useDismissibleDetails();
  return (
    <details className="cat-dropdown" ref={details}>
      <summary>{categoryLabel[locale]}</summary>
      <nav aria-label={categoryNavLabel[locale]}>
        {categories.map((c) => (
          <Link key={c.slug} href={`${prefix}/categories/${c.slug}/`} onClick={close}>
            {locale === "ja" ? c.label : localizedCategoryName(locale, c.slug)}
          </Link>
        ))}
      </nav>
    </details>
  );
}

export function MobileMenu() {
  const locale = localeFromPath(usePathname());
  const copy = locale === "ja" ? null : localizedShell[locale];
  const prefix = localePrefix(locale);
  const { details, close } = useDismissibleDetails();
  return (
    <details className="mobile-menu" ref={details}>
      <summary
        aria-label={
          locale === "en" ? "Menu" : locale === "zh" ? "菜单" : "メニュー"
        }
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <nav
        aria-label={
          locale === "en"
            ? "Mobile navigation"
            : locale === "zh"
              ? "移动导航"
              : "モバイルナビゲーション"
        }
      >
        <Link href={`${prefix}/`} onClick={close}>
          {copy?.home || "ホーム"}
        </Link>
        <Link href={`${prefix}/guide/`} onClick={close}>
          {copy?.guide || "はじめての方へ"}
        </Link>
        <Link href={`${prefix}/articles/`} onClick={close}>
          {copy?.articles || "記事一覧"}
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`${prefix}/categories/${c.slug}/`}
            onClick={close}
          >
            {locale === "ja" ? c.label : localizedCategoryName(locale, c.slug)}
          </Link>
        ))}
        <Link href={`${prefix}/glossary/`} onClick={close}>
          {copy?.glossary || "用語集"}
        </Link>
        <Link href={`${prefix}/editorial-policy/`} onClick={close}>
          {copy?.editorial || "編集方針"}
        </Link>
        <Link href={`${prefix}/search/`} onClick={close}>
          {copy?.search || "記事検索"}
        </Link>
      </nav>
    </details>
  );
}
