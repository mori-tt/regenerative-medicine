import { buildSearchIndex } from "@/lib/search-index";

// 静的書き出し時に out/search-index.ja.json として生成される検索インデックス。
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSearchIndex("ja"));
}
