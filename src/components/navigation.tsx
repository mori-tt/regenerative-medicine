"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { categories } from "@/content/articles";

export function MainNavigation() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "ホーム" },
    ...categories.map((c) => ({
      href: `/categories/${c.slug}/`,
      label: c.label,
    })),
    { href: "/about/", label: "このサイトについて" },
  ];
  return (
    <nav className="main-nav container" aria-label="メインナビゲーション">
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
  function close() {
    details.current?.removeAttribute("open");
  }
  return (
    <details className="mobile-menu" ref={details}>
      <summary aria-label="メニューを開く">☰</summary>
      <nav>
        {categories.map((c) => (
          <Link key={c.slug} href={`/categories/${c.slug}/`} onClick={close}>
            {c.label}
          </Link>
        ))}
        <Link href="/editorial-policy/" onClick={close}>
          編集方針
        </Link>
        <Link href="/search/" onClick={close}>
          記事検索
        </Link>
      </nav>
    </details>
  );
}
