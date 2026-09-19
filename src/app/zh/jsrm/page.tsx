import { LocalizedJsrmGuide } from "@/components/localized-jsrm";
import { jsrmGuideLocales } from "@/content/jsrm-locales";
import { pageMetadata } from "@/lib/site";
import { publication } from "@/lib/site-config";

export const metadata = pageMetadata(
  jsrmGuideLocales.zh.title,
  jsrmGuideLocales.zh.description,
  "/zh/jsrm/",
  publication.mode === "production",
  "zh",
);

export default function ChineseJsrmPage() {
  return <LocalizedJsrmGuide locale="zh" />;
}
