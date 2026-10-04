import { buildFeedXml } from "@/lib/feed";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildFeedXml("ja"), {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
