import { LocalizedJsrmGuide } from "@/components/localized-jsrm";
import { jsrmGuideLocales } from "@/content/jsrm-locales";
import { pageMetadata } from "@/lib/site";
import { publication } from "@/lib/site-config";

export const metadata = pageMetadata(
  jsrmGuideLocales.en.title,
  jsrmGuideLocales.en.description,
  "/en/jsrm/",
  publication.mode === "production",
  "en",
);

export default function EnglishJsrmPage() {
  return <LocalizedJsrmGuide locale="en" />;
}
