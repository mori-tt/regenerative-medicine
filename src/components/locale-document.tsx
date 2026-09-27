"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { htmlLangFor, localeFromPath } from "@/lib/locale-path";

// 静的書き出しでは scripts/fix-html-lang.mjs が <html lang> を書き換える。
// ここはクライアント遷移（ja → en など）で lang が古くならないようにする補助。
export function LocaleDocument() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = htmlLangFor[localeFromPath(pathname)];
  }, [pathname]);
  return null;
}

const skipLabel = { ja: "本文へスキップ", en: "Skip to content", zh: "跳到正文" } as const;

export function SkipLink() {
  const locale = localeFromPath(usePathname());
  return (
    <a className="skip-link" href="#main">
      {skipLabel[locale]}
    </a>
  );
}
