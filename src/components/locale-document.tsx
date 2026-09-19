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
