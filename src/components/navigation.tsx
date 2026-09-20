"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { categories } from "@/content/articles";
import { localizedShell, type SiteLocale } from "@/content/locales";

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
  const links = [
    { href: `${prefix}/`, label: copy?.home || "ホーム" },
    { href: `${prefix}/guide/`, label: copy?.guide || "はじめての方へ" },
    { href: `${prefix}/articles/`, label: copy?.articles || "記事一覧" },
    ...categories.map((c) => ({
      href: `${prefix}/categories/${c.slug}/`,
      label: copy ? { basics: copy.basics, "stem-cells": copy.stemCells, treatment: copy.treatment, research: copy.research }[c.slug] : c.label,
    })),
    { href: `${prefix}/about/`, label: copy?.about || "このサイトについて" },
  ];
  return (
    <nav className="main-nav container" aria-label={locale === "en" ? "Main navigation" : locale === "zh" ? "主导航" : "メインナビゲーション"}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "current" : undefined}
          aria-current={pathname === link.href ? "page" : undefined}
        >
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
  return (
    <details className="mobile-menu" ref={details}>
      <summary aria-label={copy?.menu || "メニューを開く"}>☰</summary>
      <nav>
        {categories.map((c) => (
          <Link key={c.slug} href={`${prefix}/categories/${c.slug}/`} onClick={close}>
            {copy ? { basics: copy.basics, "stem-cells": copy.stemCells, treatment: copy.treatment, research: copy.research }[c.slug] : c.label}
          </Link>
        ))}
        <Link href={`${prefix}/guide/`} onClick={close}>{copy?.guide || "はじめての方へ"}</Link>
        <Link href={`${prefix}/articles/`} onClick={close}>{copy?.articles || "記事一覧"}</Link>
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
