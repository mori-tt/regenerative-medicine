import { pageMetadata } from "@/lib/site";
import { LocalizedHome } from "@/components/localized-home";
export const metadata = pageMetadata("Regenerative Medicine Note", "Careful, plain-language information about regenerative medicine and stem cells.", "/en/", false);
export default function EnglishHome() { return <LocalizedHome locale="en" />; }
