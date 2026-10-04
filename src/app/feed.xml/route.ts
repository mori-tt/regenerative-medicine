import { articles, categoryFor, isReviewed, isVisibleArticle, publishBaseDate } from "@/content/articles";
import { absolute, site } from "@/lib/site";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const rfc822 = (date: string) => new Date(`${date}T00:00:00+09:00`).toUTCString();

/**
 * 公開中かつ監修済みの記事だけを載せる RSS フィード（サイトマップと同じ掲載条件）。
 * プレビュービルドでは production 以外の記事が feed に載らないよう同じ絞り込みを使う。
 */
export function GET() {
  const listed = articles.filter((a) => isVisibleArticle(a) && isReviewed(a));
  const updated = publishBaseDate();
  const items = listed
    .map(
      (article) => `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(absolute(`/articles/${article.slug}/`))}</link>
      <guid isPermaLink="true">${escapeXml(absolute(`/articles/${article.slug}/`))}</guid>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(categoryFor(article.category).label)}</category>
      <pubDate>${rfc822(article.publishedAt ?? updated)}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${escapeXml(absolute())}</link>
    <description>${escapeXml(site.description)}</description>
    <language>ja</language>
    <lastBuildDate>${rfc822(updated)}</lastBuildDate>
    <atom:link href="${escapeXml(absolute("/feed.xml"))}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
