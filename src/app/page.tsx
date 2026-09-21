import Link from "next/link";
import { articles, categories, visibleArticles } from "@/content/articles";
import { ArticleCard, AdSlot, JsonLd } from "@/components/content";
import { CellArt, Icon } from "@/components/visuals";
import { absolute, pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata(
  "再生医療と幹細胞を、もっとわかりやすく。",
  site.description,
  "/",
);
export default function Home() {
  const featuredHref = "/guide/";
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: absolute(),
          inLanguage: "ja",
        }}
      />
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> 編集部が整理する情報ガイド
          </div>
          <h1>
            再生医療を、
            <br />
            自分の言葉で
            <br />
            <em>理解する。</em>
          </h1>
          <p>
            再生医療と幹細胞について、何が分かっていて、何が研究中なのか。
            <br />
            根拠、限界、安全性、費用を、公的資料とともに整理します。
          </p>
          <div className="hero-actions">
            <Link className="button primary" href={featuredHref}>
              はじめての再生医療 <Icon name="arrow" size={20} />
            </Link>
            <Link className="hero-secondary" href="/articles/">
              記事から探す <Icon name="arrow" size={18} />
            </Link>
          </div>
          <span className="hero-footnote">
            個別の診断や治療の判断は、医療専門家へご相談ください。
          </span>
        </div>
        <div className="hero-visual">
          <CellArt hero />
          <div className="visual-label">
            <span className="small-dot" /> イメージイラスト
            <span>細胞をモチーフにした抽象画</span>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="trust-strip">
          <div>
            <Icon name="check" />
            <span>
              記事ごとに確認状態を表示
              <small>編集・医学的確認・公開状況を分けて管理</small>
            </span>
          </div>
          <div>
            <Icon name="book" />
            <span>
              根拠となる情報を明記<small>公的機関・研究機関などの資料へ</small>
            </span>
          </div>
          <div>
            <Icon name="network" />
            <span>
              編集と広告を分ける
              <small>広告の有無は記事内容に影響しません</small>
            </span>
          </div>
        </div>
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE THE TOPICS</span>
            <h2>
              知りたいことから、探す<span className="heading-dot">。</span>
            </h2>
          </div>
          <span className="section-caption">
            あなたのペースで、理解を深める。
          </span>
        </div>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <Link
              href={`/categories/${cat.slug}/`}
              className={`category-card ${cat.color}`}
              key={cat.slug}
            >
              <div className="category-top">
                <span className="category-icon">
                  <Icon name={cat.icon} size={31} />
                </span>
                <span className="category-number">0{i + 1}</span>
              </div>
              <h3>{cat.label}</h3>
              <p>{cat.description}</p>
              <div className="category-bottom">
                <span>詳しく読む</span>
                <Icon name="arrow" size={21} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="feature-section">
        <div className="container feature">
          <div className="feature-art">
            <CellArt variant="network" />
            <span className="feature-caption">最初に読む</span>
          </div>
          <div className="feature-copy">
            <span className="eyebrow">はじめての方へ</span>
            <h2>
              再生医療の基本を、
              <br />
              ここから。
            </h2>
            <p>
              よく耳にするけれど、少し難しく感じる再生医療。
              <br />
              基本的な仕組みと、知っておきたいことをまとめました。
            </p>
            <Link className="text-link" href={featuredHref}>
              再生医療の基礎を読む{" "}
              <span>
                <Icon name="arrow" size={21} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">記事</span>
            <h2>
              一つずつ、理解を深める<span className="heading-dot">。</span>
            </h2>
          </div>
          <Link className="small-link" href="/articles/">
            記事をすべて見る <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="journal-layout">
          <div className="article-grid">
            {visibleArticles(articles)
              .slice(0, 4)
              .map((a) => (
                <ArticleCard article={a} key={a.slug} />
              ))}
          </div>
          <aside className="journal-sidebar">
            <div className="editorial-note">
              <span className="eyebrow">編集方針</span>
              <Icon name="check" size={30} />
              <h3>
                情報の確かさを、
                <br />
                大切に。
              </h3>
              <p>
                誰が、何を根拠に伝えるのか。
                <br />
                私たちの編集と監修の考え方。
              </p>
              <Link href="/editorial-policy/">
                編集方針を読む <Icon name="arrow" size={18} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="container bottom-section">
        <AdSlot />
        <div className="question-box">
          <div>
            <span className="eyebrow">治療を考える前に</span>
            <h2>治療について考えはじめたら。</h2>
            <p>
              効果だけでなく、リスクや費用も。医師に相談する前の確認事項を整理しましょう。
            </p>
          </div>
          <Link className="button outline" href="/categories/treatment/">
            確認したいことを読む <Icon name="arrow" size={19} />
          </Link>
        </div>
      </section>
      <section className="society-promo-section society-promo-section-quiet">
        <div className="container society-promo">
          <div className="society-promo-mark" aria-hidden="true">
            <span>J S R M</span>
            <small>BASED ON OFFICIAL SOURCES</small>
          </div>
          <div>
            <span className="eyebrow">公式資料を読む</span>
            <h2>日本再生医療学会を知る。</h2>
            <p>
              公開資料をもとに、学会の役割や制度情報を当サイト編集部が整理しています。学会公式サイトや、個別の治療の推奨とは別の編集記事です。
            </p>
            <Link className="text-link" href="/jsrm/">
              学会特集を読む{" "}
              <span>
                <Icon name="arrow" size={21} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
