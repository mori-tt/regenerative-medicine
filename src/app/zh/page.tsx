import { pageMetadata, siteTaglineFor } from "@/lib/site";
import { LocalizedHome } from "@/components/localized-home";
export const metadata = pageMetadata(siteTaglineFor.zh, "关于再生医学和干细胞的清晰、谨慎的基础信息。", "/zh/", true, "zh", { home: true });
export default function ChineseHome() { return <LocalizedHome locale="zh" />; }
