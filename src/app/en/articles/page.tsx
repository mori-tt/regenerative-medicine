import { pageMetadata } from "@/lib/site";
import { LocalizedArticles } from "@/components/localized-articles";
export const metadata = pageMetadata("Articles", "Translated editorial manuscripts about regenerative medicine and stem cells.", "/en/articles/", false);
export default function EnglishArticles() { return <LocalizedArticles locale="en" />; }
