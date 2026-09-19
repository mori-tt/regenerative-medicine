"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher({ current = "ja" }: { current?: "ja" | "en" | "zh" }) {
  const pathname = usePathname();
  const active = pathname.startsWith("/en") ? "en" : pathname.startsWith("/zh") ? "zh" : current;
  const basePath = pathname.replace(/^\/(en|zh)(?=\/|$)/, "") || "/";
  const isJapaneseOnlyPath = /^\/jsrm(?:\/|$)/.test(basePath);
  const safePath = isJapaneseOnlyPath || /^\/(?:_not-found|404)(?:\/|$)/.test(basePath) ? "/" : basePath;
  return <nav className="language-switcher" aria-label="Language selection"><span>LANGUAGE</span><Link href={safePath} className={active === "ja" ? "current" : undefined}>日本語</Link><Link href={`/en${safePath === "/" ? "/" : safePath}`} className={active === "en" ? "current" : undefined}>English</Link><Link href={`/zh${safePath === "/" ? "/" : safePath}`} className={active === "zh" ? "current" : undefined}>中文</Link></nav>;
}
