import { articles, categoryFor, isReviewed, isVisibleArticle, publishBaseDate } from "@/content/articles";
import { localizedArticleFor } from "@/components/localized-article";
import { localizedHome, type SiteLocale } from "@/content/locales";
import { absolute, localizedPath, site, siteNameFor, type SiteLocaleCode } from "@/lib/site";

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const rfc822 = (date: string) => new Date(`${date}T00:00:00+09:00`).toUTCString();

const feedLanguage: Record<SiteLocaleCode, string> = { ja: "ja", en: "en", zh: "zh-cn" };

const channelDescription = (locale: SiteLocaleCode) =>
  locale === "ja" ? site.description : localizedHome[locale as SiteLocale].intro;

/**
 * 公開中かつ監修済みの記事だけを載せる RSS フィード（サイトマップと同じ掲載条件）。
 * プレビュービルドでは production 以外の記事が feed に載らないよう同じ絞り込みを使う。
 */
export function buildFeedXml(locale: SiteLocaleCode = "ja"): string {
  const listed = articles.filter((a) => isVisibleArticle(a) && isReviewed(a));
  const updated = publishBaseDate();
  const items = listed
    .map((article) => {
      const text = locale === "ja"
        ? { title: article.title, description: article.description, category: categoryFor(article.category).label }
        : localizedArticleFor(locale as SiteLocale, article);
      const link = absolute(localizedPath(`/articles/${article.slug}/`, locale));
      return `    <item>
      <title>${escapeXml(text.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(text.description)}</description>
      <category>${escapeXml(text.category)}</category>
      <pubDate>${rfc822(article.publishedAt ?? updated)}</pubDate>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteNameFor(locale))}</title>
    <link>${escapeXml(absolute(localizedPath("/", locale)))}</link>
    <description>${escapeXml(channelDescription(locale))}</description>
    <language>${feedLanguage[locale]}</language>
    <lastBuildDate>${rfc822(updated)}</lastBuildDate>
    <atom:link href="${escapeXml(absolute(localizedPath("/feed.xml", locale)))}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}
