"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LocaleDocument() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : pathname.startsWith("/zh") ? "zh-CN" : "ja";
  }, [pathname]);
  return null;
}

export function SkipLink() {
  const pathname = usePathname();
  const label = pathname.startsWith("/en")
    ? "Skip to content"
    : pathname.startsWith("/zh")
      ? "跳到正文"
      : "本文へスキップ";
  return (
    <a className="skip-link" href="#main">
      {label}
    </a>
  );
}
