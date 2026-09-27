import { pageMetadata, siteTaglineFor } from "@/lib/site";
import { LocalizedHome } from "@/components/localized-home";
export const metadata = pageMetadata(siteTaglineFor.en, "Careful, plain-language information about regenerative medicine and stem cells.", "/en/", true, "en", { home: true });
export default function EnglishHome() { return <LocalizedHome locale="en" />; }
