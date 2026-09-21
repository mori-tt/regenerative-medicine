import { pageMetadata } from "@/lib/site";
import { LocalizedArticles } from "@/components/localized-articles";
export const metadata = pageMetadata("Articles", "Translated editorial manuscripts about regenerative medicine and stem cells.", "/en/articles/", true, "en");
export default function EnglishArticles() { return <LocalizedArticles locale="en" />; }
