import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/site-shell";
import { LocaleDocument, SkipLink } from "@/components/locale-document";
import { absolute, publiclyIndexable, site, siteTaglineFor } from "@/lib/site";
import "./globals.css";
import "./editorial.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${siteTaglineFor.ja}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  robots: { index: publiclyIndexable, follow: true },
  openGraph: { locale: "ja_JP", type: "website", siteName: site.name },
  icons: { icon: absolute("/icon.svg") },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfcf8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <LocaleDocument />
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
