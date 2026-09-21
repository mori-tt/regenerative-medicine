import Link from "next/link";
import { localizedHome, type SiteLocale } from "@/content/locales";
import { articles, visibleArticles } from "@/content/articles";
import { LocalizedArticleCard } from "./localized-article";
import { CellArt, Icon } from "./visuals";

export function LocalizedHome({ locale }: { locale: SiteLocale }) {
  const copy = localizedHome[locale];
  const en = locale === "en";
  const featuredHref = `/${locale}/guide/`;
  const categoryLinks = ["basics", "stem-cells", "treatment", "research"];
  return (
    <div lang={en ? "en" : "zh-CN"} className="localized-page">
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> {copy.eyebrow}
          </div>
          <h1>
            {copy.title[0]}
            <br />
            {copy.title[1]}
            <br />
            <em>{copy.title[2]}</em>
          </h1>
          <p>{copy.intro}</p>
          <div className="hero-actions">
            <Link className="button primary" href={featuredHref}>
              {copy.start} <Icon name="arrow" size={20} />
            </Link>
            <Link className="hero-secondary" href={`/${locale}/articles/`}>
              {en ? "Explore articles" : "浏览文章"}{" "}
              <Icon name="arrow" size={18} />
            </Link>
          </div>
          <span className="hero-footnote">{copy.footnote}</span>
        </div>
        <div className="hero-visual">
          <CellArt
            hero
            label={en ? "Abstract cell illustration" : "抽象细胞插画"}
          />
          <div className="visual-label">
            <span className="small-dot" /> LIFE, SCIENCE & YOU{" "}
            <span>{copy.visual}</span>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{copy.topics}</span>
            <h2>{copy.topicTitle}</h2>
          </div>
          <span className="section-caption">{copy.topicCaption}</span>
        </div>
        <div className="category-grid">
          {copy.categories.map(([label, description], index) => (
            <Link
              href={`/${locale}/categories/${categoryLinks[index]}/`}
              className={`category-card ${["green", "blue", "sand", "purple"][index]}`}
              key={label}
            >
              <div className="category-top">
                <span className="category-icon">
                  <Icon
                    name={["cells", "network", "cross", "scope"][index]}
                    size={31}
                  />
                </span>
                <span className="category-number">0{index + 1}</span>
              </div>
              <h3>{label}</h3>
              <p>{description}</p>
              <div className="category-bottom">
                <span>{en ? "Explore topic" : "了解更多"}</span>
                <Icon name="arrow" size={21} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="feature-section">
        <div className="container feature">
          <div className="feature-art">
            <CellArt
              variant="network"
              label={
                en ? "Abstract cell network illustration" : "抽象细胞网络插画"
              }
            />
            <span className="feature-caption">{copy.guideEyebrow}</span>
          </div>
          <div className="feature-copy">
            <span className="eyebrow">{copy.guideEyebrow}</span>
            <h2>{copy.guideTitle}</h2>
            <p>{copy.guideBody}</p>
            <Link className="text-link" href={featuredHref}>
              {copy.guideLink}{" "}
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
            <span className="eyebrow">THE JOURNAL</span>
            <h2>{copy.journal}</h2>
          </div>
          <Link className="small-link" href={`/${locale}/articles/`}>
            {en ? "View all articles" : "查看全部文章"}{" "}
            <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="journal-layout">
          <div className="article-grid">
            {visibleArticles(articles)
              .slice(0, 4)
              .map((source) => (
                <LocalizedArticleCard
                  key={source.slug}
                  source={source}
                  locale={locale}
                />
              ))}
          </div>
          <aside className="journal-sidebar">
            <div className="editorial-note">
              <span className="eyebrow">EDITORIAL PROMISE</span>
              <h3>{en ? "Evidence. Context. Clarity." : "重视信息的依据。"}</h3>
              <p>{copy.promise}</p>
              <Link href={`/${locale}/editorial-policy/`}>
                {en ? "Our editorial policy" : "阅读编辑方针"}{" "}
                <Icon name="arrow" size={18} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <p className="container disclaimer localized-disclaimer">
        {copy.disclaimer}
      </p>
    </div>
  );
}
