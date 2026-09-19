import { pageMetadata } from "@/lib/site";
import { LocalizedSearch } from "@/components/localized-search";
export const metadata = pageMetadata("Find articles", "Browse translated articles about regenerative medicine.", "/en/search/", false, "en");
export default function EnglishSearch() { return <LocalizedSearch locale="en" />; }
