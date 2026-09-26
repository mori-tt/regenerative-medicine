"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { categories } from "@/content/categories";
import { subcategories } from "@/content/subcategories";
import { localizedCategoryName, localizedShell, type SiteLocale } from "@/content/locales";

function localeFromPath(pathname: string): SiteLocale | "ja" {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/zh")) return "zh";
  return "ja";
}

export function MainNavigation() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const copy = locale === "ja" ? null : localizedShell[locale];
  const prefix = locale === "ja" ? "" : `/${locale}`;
  const plainLinks = [
    { href: `${prefix}/`, label: copy?.home || "ホーム" },
    { href: `${prefix}/guide/`, label: copy?.guide || "はじめての方へ" },
    { href: `${prefix}/articles/`, label: copy?.articles || "記事一覧" },
  ];
  const tailLinks = [
    { href: `${prefix}/about/`, label: copy?.about || "このサイトについて" },
  ];
  const isCurrent = (href: string) =>
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  const linkProps = (href: string) => ({
    className: isCurrent(href) ? "current" : undefined,
    "aria-current": isCurrent(href) ? ("page" as const) : undefined,
  });
  return (
    <nav
      className="main-nav container"
      aria-label={
        locale === "en"
          ? "Main navigation"
          : locale === "zh"
            ? "主导航"
            : "メインナビゲーション"
      }
    >
      {plainLinks.map((link) => (
        <Link key={link.href} href={link.href} {...linkProps(link.href)}>
          {link.label}
        </Link>
      ))}
      {categories.map((c) => {
        const href = `${prefix}/categories/${c.slug}/`;
        const label = copy ? localizedCategoryName(locale as SiteLocale, c.slug) : c.label;
        const groups = subcategories[c.slug] ?? [];
        return (
          <div className="nav-item" key={c.slug}>
            <Link href={href} {...linkProps(href)}>
              {label}
            </Link>
            {groups.length > 0 && (
              <div className="nav-panel">
                {groups.map((g) => (
                  <Link
                    key={g.key}
                    href={`${href}#sub-${g.key}`}
                    className="nav-panel-link"
                  >
                    {locale === "ja" ? g.ja : locale === "en" ? g.en : g.zh}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
      {tailLinks.map((link) => (
        <Link key={link.href} href={link.href} {...linkProps(link.href)}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function MobileMenu() {
  const details = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const copy = locale === "ja" ? null : localizedShell[locale];
  const prefix = locale === "ja" ? "" : `/${locale}`;
  function close() {
    details.current?.removeAttribute("open");
  }
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !details.current?.contains(event.target)
      )
        close();
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
            {copy ? localizedCategoryName(locale as SiteLocale, c.slug) : c.label}
          </Link>
        ))}
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
