import type { MetadataRoute } from "next";
import { absolute, indexable } from "@/lib/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  // noindex をクローラが読み取れるよう、準備中もクロールは禁止しない。
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(indexable ? { sitemap: absolute("/sitemap.xml") } : {}),
  };
}
