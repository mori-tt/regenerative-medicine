import {
  absolute,
  localizedPath,
  site,
  siteNameFor,
  siteTaglineFor,
  type SiteLocaleCode,
} from "./site";

const inLanguage: Record<SiteLocaleCode, string> = {
  ja: "ja",
  en: "en",
  zh: "zh-CN",
};

/** 運営組織。全ページの publisher / author から同じ @id で参照する。 */
function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${absolute()}#organization`,
    name: site.name,
    alternateName: [site.nameEn, site.nameZh],
    url: absolute(),
    logo: { "@type": "ImageObject", url: absolute("/icon.svg") },
  };
}

/** 個別ページ用の WebPage ノード。isPartOf / publisher でホームの WebSite・Organization に接続する。 */
export function webPageNode(
  locale: SiteLocaleCode,
  path: string,
  name: string,
  description: string,
  type:
    | "WebPage"
    | "ContactPage"
    | "CollectionPage"
    | "SearchResultsPage" = "WebPage",
) {
  const url = absolute(localizedPath(path, locale));
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: inLanguage[locale],
    isPartOf: {
      "@id": `${absolute(localizedPath("/", locale))}#website`,
    },
    publisher: { "@id": `${absolute()}#organization` },
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
