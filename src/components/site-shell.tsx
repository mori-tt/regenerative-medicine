import Link from "next/link";
import { MainNavigation, MobileMenu } from "./navigation";
import { indexable, site } from "@/lib/site";
import { Icon } from "./visuals";
import { LanguageSwitcher } from "./language-switcher";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="再生医療ノート ホーム">
      <span className="logo-mark">
        <Icon name="cells" size={32} />
      </span>
      <span>
        再生医療<span className="logo-light">ノート</span>
        <small>REGENERATIVE MEDICINE NOTE</small>
      </span>
    </Link>
  );
}
export function Header() {
  return (
    <>
      <div className="topline">
        <div className="container">
          <span>再生医療と幹細胞を、もっとわかりやすく。</span>
          <span>
            {indexable
              ? "一つずつ、確かな理解へ。"
              : "プレビュー版 · 医師監修前のサンプルを掲載"}
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-main">
          <Logo />
          <div className="header-links">
            <Link href="/editorial-policy/">私たちの編集方針</Link>
            <Link href="/supervision/">
              医師監修について <span>↗</span>
            </Link>
          </div>
          <Link className="search-link" href="/search/" aria-label="記事を検索">
            <Icon name="search" />
            <span>記事を探す</span>
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
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Logo />
            <p>
              知ることから、はじまる選択。
              <br />
              再生医療とあなたをつなぐ、情報のノート。
            </p>
          </div>
          <div className="footer-links">
            <Link href="/guide/">はじめての方へ</Link>
            <Link href="/glossary/">用語集</Link>
            <Link href="/faq/">よくある質問</Link>
            <Link href="/safety/">安全性の考え方</Link>
            <Link href="/regulation/">制度と法律</Link>
            <Link href="/about/">運営について</Link>
            <Link href="/editorial-policy/">編集方針</Link>
            <Link href="/supervision/">医師監修について</Link>
            <Link href="/advertising/">広告掲載について</Link>
            <Link href="/terms/">利用規約</Link>
            <Link href="/privacy/">プライバシーポリシー</Link>
            <Link href="/disclaimer/">利用上の注意</Link>
            <Link href="/corrections/">訂正・更新の方針</Link>
            <Link href="/citations/">引用・転載</Link>
            <Link href="/accessibility/">アクセシビリティ</Link>
            <Link href="/site-guide/">サイトマップ</Link>
            <Link href="/updates/">更新情報</Link>
            <Link href="/contact/">お問い合わせ</Link>
          </div>
        </div>
        <p className="disclaimer">
          本サイトは情報提供を目的としており、診断・治療の代わりとなるものではありません。治療については、医師にご相談ください。
        </p>
        <div className="footer-bottom">
          <span>© 2026 {site.name}</span>
          <span>KNOWLEDGE FOR YOUR NEXT STEP.</span>
        </div>
      </div>
    </footer>
  );
}
