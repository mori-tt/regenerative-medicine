import Link from "next/link";
import { articles, categories, visibleArticles } from "@/content/articles";
import { ArticleCard, AdSlot, JsonLd } from "@/components/content";
import { CellArt, Icon } from "@/components/visuals";
import { absolute, pageMetadata, site } from "@/lib/site";
import { publication } from "@/lib/site-config";

export const metadata = pageMetadata(
  "再生医療と幹細胞を、もっとわかりやすく。",
  site.description,
  "/",
);
export default function Home() {
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
            <span /> KNOWLEDGE FOR YOUR NEXT STEP
          </div>
          <h1>
            再生医療を知る。
            <br />
            これからの選択に、
            <br />
            <em>確かな理解を。</em>
          </h1>
          <p>
            期待も、疑問も、一つずつ。
            <br />
            再生医療と幹細胞のことを、
            <br className="mobile-only" />
            わかりやすく、丁寧に伝えます。
          </p>
          <Link
            className="button primary"
            href="/articles/what-is-regenerative-medicine/"
          >
            はじめての再生医療 <Icon name="arrow" size={20} />
          </Link>
          <span className="hero-footnote">
            知ることが、自分らしい選択の第一歩。
          </span>
        </div>
        <div className="hero-visual">
          <CellArt hero />
          <div className="visual-label">
            <span className="small-dot" /> LIFE, SCIENCE & YOU{" "}
            <span>細胞をモチーフにしたイメージ</span>
          </div>
          <div className="hero-floating">
            <Icon name="book" size={23} />
            <span>
              難しいことを、やさしく。
              <small>あなたの「知りたい」に寄り添うメディア</small>
            </span>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="trust-strip">
          <div>
            <Icon name="check" />
            <span>
              医師監修を前提とした編集体制
              <small>記事ごとに出典と確認範囲を整理しています</small>
            </span>
          </div>
          <div>
            <Icon name="book" />
            <span>
              根拠となる情報を明記<small>公的機関・研究機関などの出典へ</small>
            </span>
          </div>
          <div>
            <Icon name="network" />
            <span>
              中立的な情報提供<small>編集記事と広告を明確に区別します</small>
            </span>
          </div>
        </div>
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE TOPICS</span>
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
                <span>{cat.en}</span>
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
            <span className="feature-caption">FIRST STEP GUIDE</span>
          </div>
          <div className="feature-copy">
            <span className="eyebrow">はじめての方へ</span>
            <h2>
              「再生医療って、なんだろう？」
              <br />
              その疑問から、はじめよう。
            </h2>
            <p>
              よく耳にするけれど、少し難しく感じる再生医療。
              <br />
              基本的な仕組みと、知っておきたいことをまとめました。
            </p>
            <Link
              className="text-link"
              href="/articles/what-is-regenerative-medicine/"
            >
              再生医療の基礎を読む{" "}
              <span>
                <Icon name="arrow" size={21} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="society-promo-section">
        <div className="container society-promo">
          <div className="society-promo-mark" aria-hidden="true"><span>J S R M</span><small>OFFICIAL SOURCE GUIDE</small></div>
          <div>
            <span className="eyebrow">SPECIAL FEATURE</span>
            <h2>日本再生医療学会を知る。</h2>
            <p>再生医療を支える学会の役割、認定制度、制度情報を公式資料から整理しました。千原良友先生の所属学会についても、治療の判断と混同しないように解説します。</p>
            <Link className="text-link" href="/jsrm/">学会特集を読む <span><Icon name="arrow" size={21} /></span></Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE JOURNAL</span>
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
            {visibleArticles(articles).slice(1, 4).map((a) => (
              <ArticleCard article={a} key={a.slug} compact />
            ))}
          </div>
          <aside className="journal-sidebar">
            <div className="editorial-note">
              <span className="eyebrow">OUR PROMISE</span>
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
            <span className="eyebrow">BEFORE YOUR DECISION</span>
            <h2>治療について考えはじめたら。</h2>
            <p>
              効果だけでなく、リスクや費用も。医師に相談する前の確認事項を整理しましょう。
            </p>
          </div>
          <Link
            className="button outline"
            href="/articles/questions-before-treatment/"
          >
            確認したいことを読む <Icon name="arrow" size={19} />
          </Link>
        </div>
      </section>
    </>
  );
}
