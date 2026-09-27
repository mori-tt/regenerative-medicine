import Link from "next/link";
import Image from "next/image";
import { bannerAds } from "@/content/ads";
import { absolute, publicAsset } from "@/lib/site";

export { ArticleCard, Marked, toCardData, type ArticleCardData } from "./article-card";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function Breadcrumbs({
  items,
  homeLabel = "ホーム",
  homeHref = "/",
  locale = "ja",
}: {
  items: { label: string; href?: string }[];
  homeLabel?: string;
  homeHref?: string;
  locale?: "ja" | "en" | "zh";
}) {
  const all = [{ label: homeLabel, href: homeHref }, ...items];
  return (
    <>
      <nav className="breadcrumbs" aria-label={locale === "en" ? "Breadcrumbs" : locale === "zh" ? "面包屑导航" : "パンくずリスト"}>
        {all.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="crumb-separator">/</span>}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href ? { item: absolute(item.href) } : {}),
          })),
        }}
      />
    </>
  );
}
const adLabel = { ja: "広告", en: "Advertisement", zh: "广告" } as const;

export function AdSlot({ compact = false, locale = "ja" }: { compact?: boolean; locale?: "ja" | "en" | "zh" }) {
  const ad = bannerAds[compact ? "article" : "home"];
  if (ad)
    return (
      <aside className="ad-slot" aria-label={`${adLabel[locale]}：${ad.advertiser}`}>
        <span className="ad-label">{adLabel[locale]} · {ad.advertiser}</span>
        <a href={ad.href} target="_blank" rel="sponsored noopener noreferrer">
          <Image
            src={publicAsset(ad.image)}
            alt={ad.alt}
            width={ad.width}
            height={ad.height}
            unoptimized
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      </aside>
    );
  return null;
}
