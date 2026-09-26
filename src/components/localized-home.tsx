import Link from "next/link";
import { localizedHome, type SiteLocale } from "@/content/locales";
import { articles, categories, visibleArticles } from "@/content/articles";
import { LocalizedArticleCard } from "./localized-article";
import { CellArt, Icon } from "./visuals";

export function LocalizedHome({ locale }: { locale: SiteLocale }) {
  const copy = localizedHome[locale];
  const en = locale === "en";
  const featuredHref = `/${locale}/guide/`;
  const categoryLinks = categories.map((c) => c.slug);
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
            <span className="eyebrow">{en ? "YOUR SITUATION" : "您的情况"}</span>
            <h2>{en ? "Start from where you are." : "从您的情况开始查找。"}</h2>
          </div>
          <span className="section-caption">
            {en ? "Not sure where to start? Pick the situation closest to yours." : "不知从何开始？请选择最接近您的情况。"}
          </span>
        </div>
        <div className="intent-grid">
          <Link href={`/${locale}/categories/stem-basics/`} className="intent-card">
            <span className="intent-tag">{en ? "First time" : "初次接触"}</span>
            <strong>{en ? "Learn the basics" : "了解基础知识"}</strong>
            <p>{en ? "What stem cells are, and the big picture of regenerative medicine." : "什么是干细胞，再生医学的整体概貌。"}</p>
          </Link>
          <Link href={`/${locale}/categories/cost-access/`} className="intent-card">
            <span className="intent-tag">{en ? "Considering treatment" : "考虑治疗"}</span>
            <strong>{en ? "Deciding whether to proceed" : "是否接受治疗的考虑"}</strong>
            <p>{en ? "Costs, facility filings, what to ask, what to verify." : "费用、机构申报、该问什么、该确认什么。"}</p>
          </Link>
          <Link href={`/${locale}/categories/efficacy/`} className="intent-card">
            <span className="intent-tag">{en ? "Does it work?" : "疗效如何"}</span>
            <strong>{en ? "How much is actually proven?" : "有多少证据？"}</strong>
            <p>{en ? "Research stages vs approvals, and how to read the evidence." : "研究阶段与批准的区别，如何解读证据。"}</p>
          </Link>
          <Link href={`/${locale}/categories/safety/`} className="intent-card">
            <span className="intent-tag">{en ? "Safety" : "安全性"}</span>
            <strong>{en ? "Risks and side effects" : "风险与副作用"}</strong>
            <p>{en ? "Possible risks, eligibility, and where to get help." : "可能的风险、适用条件与求助渠道。"}</p>
          </Link>
          <Link href={`/${locale}/categories/in-body/`} className="intent-card">
            <span className="intent-tag">{en ? "Mechanisms" : "作用机制"}</span>
            <strong>{en ? "What happens inside the body?" : "体内会发生什么？"}</strong>
            <p>{en ? "Where cells go and what they may do once administered." : "细胞进入体内后的去向与可能作用。"}</p>
          </Link>
          <Link href={`/${locale}/glossary/`} className="intent-card">
            <span className="intent-tag">{en ? "Terms" : "术语"}</span>
            <strong>{en ? "Look up unfamiliar words" : "查询不熟悉的术语"}</strong>
            <p>{en ? "301-term glossary with search and article links." : "301个术语的词汇表，带搜索和文章链接。"}</p>
          </Link>
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
              className={`category-card ${categories[index].color}`}
              key={label}
            >
              <div className="category-top">
                <span className="category-icon">
                  <Icon name={categories[index].icon} size={31} />
                </span>
                <span className="category-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
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
