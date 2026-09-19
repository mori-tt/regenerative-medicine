import Link from "next/link";
import { Breadcrumbs, JsonLd } from "./content";
import { Icon } from "./visuals";
import type { JsrmChapter } from "@/content/jsrm-chapters";
import { publication } from "@/lib/site-config";

export function JsrmChapterPage({ chapter, previous, next }: { chapter: JsrmChapter; previous?: JsrmChapter; next?: JsrmChapter }) {
  return (
    <div className="container inner-page jsrm-chapter-page">
      <Breadcrumbs items={[{ label: "日本再生医療学会", href: "/jsrm/" }, { label: chapter.title }]} />
      {publication.showPreparationNotices && <div className="draft-notice">この章は公式資料をもとにした編集部の情報整理です。個別の診断・治療・契約判断を示すものではありません。</div>}
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: chapter.title, description: chapter.description, author: { "@type": "Organization", name: "再生医療ガイド" }, about: { "@type": "Organization", name: "一般社団法人 日本再生医療学会" } }} />
      <header className="jsrm-chapter-header">
        <span className="eyebrow">{chapter.number} · {chapter.eyebrow}</span>
        <h1>{chapter.title}</h1>
        <p>{chapter.description}</p>
      </header>
      <div className="jsrm-chapter-layout">
        <aside className="jsrm-chapter-nav">
          <span className="eyebrow">10 CHAPTERS</span>
          <Link href="/jsrm/">総合案内に戻る</Link>
          <span className="jsrm-chapter-nav-current">{chapter.number} {chapter.title}</span>
          {previous && <Link href={`/jsrm/${previous.slug}/`}>← {previous.number} {previous.title}</Link>}
          {next && <Link href={`/jsrm/${next.slug}/`}>{next.number} {next.title} →</Link>}
        </aside>
        <article className="jsrm-chapter-body">
          {chapter.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <section className="jsrm-chapter-sources"><h2>公式情報・参考ページ</h2>{chapter.sources.map(([label, url]) => url.startsWith("/") ? <p key={url}><Link href={url}>{label} →</Link></p> : <p key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a></p>)}</section>
        </article>
      </div>
      <nav className="jsrm-chapter-pager" aria-label="章の移動">
        {previous ? <Link href={`/jsrm/${previous.slug}/`}><small>PREVIOUS</small><span><Icon name="arrow" size={18} />{previous.title}</span></Link> : <span />}
        {next ? <Link href={`/jsrm/${next.slug}/`}><small>NEXT</small><span>{next.title}<Icon name="arrow" size={18} /></span></Link> : <span />}
      </nav>
    </div>
  );
}
