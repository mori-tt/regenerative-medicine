import type { Metadata } from "next";
import { Header, Footer } from "@/components/site-shell";
import { LocaleDocument, SkipLink } from "@/components/locale-document";
import { absolute, publiclyIndexable, site } from "@/lib/site";
import "./globals.css";
import "./editorial.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | 再生医療と幹細胞を、もっとわかりやすく。`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  robots: { index: publiclyIndexable, follow: true },
  openGraph: { locale: "ja_JP", type: "website", siteName: site.name },
  icons: { icon: absolute("/icon.svg") },
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
