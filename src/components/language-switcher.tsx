"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, stripLocale, type UiLocale } from "@/lib/locale-path";

const languages: { locale: UiLocale; label: string; lang: string }[] = [
  { locale: "ja", label: "日本語", lang: "ja" },
  { locale: "en", label: "English", lang: "en" },
  { locale: "zh", label: "中文", lang: "zh-CN" },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const active = localeFromPath(pathname);
  const basePath = stripLocale(pathname);
  const safePath = /^\/(?:_not-found|404)(?:\/|$)/.test(basePath) ? "/" : basePath;
  return (
    <nav className="language-switcher" aria-label="Language selection">
      <span>LANGUAGE</span>
      {languages.map(({ locale, label, lang }) => (
        <Link
          key={locale}
          href={locale === "ja" ? safePath : `/${locale}${safePath}`}
          lang={lang}
          hrefLang={lang}
          className={active === locale ? "current" : undefined}
          aria-current={active === locale ? "true" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
