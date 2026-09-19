import { pageMetadata } from "@/lib/site";
import { LocalizedArticles } from "@/components/localized-articles";
export const metadata = pageMetadata("文章列表", "关于再生医学和干细胞的中文编辑原稿。", "/zh/articles/", false, "zh");
export default function ChineseArticles() { return <LocalizedArticles locale="zh" />; }
