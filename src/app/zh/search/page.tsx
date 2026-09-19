import { pageMetadata } from "@/lib/site";
import { LocalizedSearch } from "@/components/localized-search";
export const metadata = pageMetadata("查找文章", "浏览关于再生医学的中文翻译文章。", "/zh/search/", false);
export default function ChineseSearch() { return <LocalizedSearch locale="zh" />; }
