import { pageMetadata } from "@/lib/site";
import { LocalizedHome } from "@/components/localized-home";
export const metadata = pageMetadata("再生医学笔记", "关于再生医学和干细胞的清晰、谨慎的基础信息。", "/zh/", false);
export default function ChineseHome() { return <LocalizedHome locale="zh" />; }
