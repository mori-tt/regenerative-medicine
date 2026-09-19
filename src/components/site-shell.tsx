"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainNavigation, MobileMenu } from "./navigation";
import { site } from "@/lib/site";
import { Icon } from "./visuals";
import { LanguageSwitcher } from "./language-switcher";
import { localizedShell, type SiteLocale } from "@/content/locales";
import { publication } from "@/lib/site-config";

function localeFromPath(pathname: string): SiteLocale | "ja" {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/zh")) return "zh";
  return "ja";
}

function localizedHomePath(locale: SiteLocale | "ja") {
  return locale === "ja" ? "/" : `/${locale}/`;
}

export function Logo({ locale = "ja" }: { locale?: SiteLocale | "ja" }) {
  const copy = locale === "ja" ? null : localizedShell[locale];
  return (
    <Link href={localizedHomePath(locale)} className={`logo ${locale === "en" ? "logo-en" : locale === "zh" ? "logo-zh" : ""}`} aria-label={copy?.logoAria || "再生医療ガイド ホーム"}>
      <span className="logo-mark">
        <Icon name="cells" size={32} />
      </span>
      <span>
        {copy ? copy.logoName : <>再生医療<span className="logo-light">ガイド</span></>}
        <small>REGENERATIVE MEDICINE GUIDE</small>
      </span>
    </Link>
  );
}
export function Header() {
  const locale = localeFromPath(usePathname());
  const copy = locale === "ja" ? null : localizedShell[locale];
  return (
    <>
      <div className="topline">
        <div className="container">
          <span>{copy?.tagline || "再生医療と幹細胞を、もっとわかりやすく。"}</span>
          <span>
            {publication.showPreviewBanner
              ? copy?.preview || "プレビュー版 · 医師監修前のサンプルを掲載"
              : copy?.promise || "一つずつ、確かな理解へ。"}
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-main">
          <Logo locale={locale} />
          <div className="header-links">
            <Link href={locale === "ja" ? "/editorial-policy/" : `/${locale}/editorial-policy/`}>{copy?.editorial || "私たちの編集方針"}</Link>
            <Link href={locale === "ja" ? "/supervision/" : `/${locale}/supervision/`}>
              {copy?.supervision || "医師監修について"} <span>↗</span>
            </Link>
          </div>
          <Link className="search-link" href={locale === "ja" ? "/search/" : `/${locale}/search/`} aria-label={copy?.searchAria || "記事を検索"}>
            <Icon name="search" />
            <span>{copy?.search || "記事を探す"}</span>
          </Link>
          <LanguageSwitcher />
          <MobileMenu />
        </div>
        <MainNavigation />
      </header>
    </>
  );
}
export function Footer() {
  const locale = localeFromPath(usePathname());
  const copy = locale === "ja" ? null : localizedShell[locale];
  const path = (slug: string) => locale === "ja" ? `/${slug}/` : `/${locale}/${slug}/`;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Logo locale={locale} />
            <p>{copy ? copy.footerLead.split("\n").map((line) => <span key={line}>{line}<br /></span>) : <>知ることから、はじまる選択。<br />再生医療とあなたをつなぐ、情報ガイド。</>}</p>
          </div>
          <div className="footer-links">
            <Link href={path("guide")}>{copy?.guide || "はじめての方へ"}</Link><Link href={path("glossary")}>{copy?.glossary || "用語集"}</Link><Link href={path("faq")}>{copy?.faq || "よくある質問"}</Link><Link href={path("safety")}>{copy?.safety || "安全性の考え方"}</Link><Link href={path("regulation")}>{copy?.regulation || "制度と法律"}</Link><Link href={path("about")}>{copy?.about || "運営について"}</Link><Link href={path("editorial-policy")}>{copy?.editorial || "編集方針"}</Link><Link href={path("supervision")}>{copy?.supervision || "医師監修について"}</Link><Link href={path("advertising")}>{copy?.advertising || "広告掲載について"}</Link><Link href={path("terms")}>{copy?.terms || "利用規約"}</Link><Link href={path("privacy")}>{copy?.privacy || "プライバシーポリシー"}</Link><Link href={path("disclaimer")}>{copy?.disclaimer || "利用上の注意"}</Link><Link href={path("corrections")}>{copy?.corrections || "訂正・更新の方針"}</Link><Link href={path("citations")}>{copy?.citations || "引用・転載"}</Link><Link href={path("sources")}>{copy?.sources || "情報源・参考サイト"}</Link><Link href={path("accessibility")}>{copy?.accessibility || "アクセシビリティ"}</Link><Link href={path("site-guide")}>{copy?.siteGuide || "サイトマップ"}</Link><Link href={path("updates")}>{copy?.updates || "更新情報"}</Link><Link href={path("contact")}>{copy?.contact || "お問い合わせ"}</Link>
          </div>
        </div>
        <p className="disclaimer">{copy?.footerDisclaimer || "本サイトは情報提供を目的としており、診断・治療の代わりとなるものではありません。治療については、医師にご相談ください。"}</p>
        <div className="footer-bottom">
          <span>© 2026 {site.name}</span>
          <span>KNOWLEDGE FOR YOUR NEXT STEP.</span>
        </div>
      </div>
    </footer>
  );
}
