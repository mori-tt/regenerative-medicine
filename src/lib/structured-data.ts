import { absolute, localizedPath, site, siteNameFor, siteTaglineFor, type SiteLocaleCode } from "./site";

const inLanguage: Record<SiteLocaleCode, string> = { ja: "ja", en: "en", zh: "zh-CN" };

/** 運営組織。全ページの publisher / author から同じ @id で参照する。 */
export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${absolute()}#organization`,
    name: site.name,
    alternateName: [site.nameEn, site.nameZh],
    url: absolute(),
    logo: { "@type": "ImageObject", url: absolute("/icon.svg") },
    ...(site.contactEmail ? { email: site.contactEmail } : {}),
  };
}

/** トップページ用：WebSite（サイト内検索の SearchAction 付き）と Organization を @graph でまとめる。 */
export function siteGraph(locale: SiteLocaleCode) {
  const home = absolute(localizedPath("/", locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      {
        "@type": "WebSite",
        "@id": `${home}#website`,
        name: siteNameFor(locale),
        description: siteTaglineFor[locale],
        url: home,
        inLanguage: inLanguage[locale],
        publisher: { "@id": `${absolute()}#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${absolute(localizedPath("/search/", locale))}?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
