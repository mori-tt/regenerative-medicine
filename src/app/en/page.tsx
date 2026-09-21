import { pageMetadata } from "@/lib/site";
import { LocalizedHome } from "@/components/localized-home";
export const metadata = pageMetadata("Regenerative Medicine Guide", "Careful, plain-language information about regenerative medicine and stem cells.", "/en/", true, "en");
export default function EnglishHome() { return <LocalizedHome locale="en" />; }
