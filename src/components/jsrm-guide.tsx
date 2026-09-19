import Link from "next/link";
import { Breadcrumbs, JsonLd } from "./content";
import { Icon } from "./visuals";
import { jsrmCertification, jsrmSources, jsrmTimeline } from "@/content/jsrm";
import { jsrmChapters } from "@/content/jsrm-chapters";
import { publication } from "@/lib/site-config";

export function JsrmGuide() {
  return (
    <div className="container inner-page jsrm-page">
      <Breadcrumbs items={[{ label: "日本再生医療学会" }]} />
      {publication.showPreparationNotices && <div className="draft-notice">この特集は公式資料をもとにした編集部の情報整理です。個別の診断・治療・契約判断を示すものではありません。</div>}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "日本再生医療学会とは？役割・沿革・認定制度を詳しく解説",
          description: "日本再生医療学会の役割、沿革、認定制度、制度情報を公式資料から整理した解説。",
          author: { "@type": "Organization", name: "再生医療ガイド" },
          about: { "@type": "Organization", name: "一般社団法人 日本再生医療学会" },
        }}
      />

      <header className="jsrm-hero">
        <div>
          <span className="eyebrow">JAPANESE SOCIETY FOR REGENERATIVE MEDICINE</span>
          <h1>日本再生医療学会を知る。</h1>
          <p>
            再生医療に関する研究、臨床、細胞加工、倫理、法制度をつなぐ学術団体です。
            学会の役割と認定制度を、患者さんにも分かる言葉で整理します。
          </p>
          <div className="jsrm-hero-actions">
            <a className="button primary" href="https://www.jsrm.jp/" target="_blank" rel="noopener noreferrer">
              学会公式サイトを見る <Icon name="arrow" size={20} />
            </a>
            <span>公式情報をもとに整理 · 2026年9月更新</span>
          </div>
        </div>
        <div className="jsrm-hero-mark" aria-hidden="true">
          <span>J S R M</span>
          <small>REGENERATIVE MEDICINE</small>
        </div>
      </header>

      <section className="jsrm-intro-grid">
        <div>
          <span className="eyebrow">WHY IT MATTERS</span>
          <h2>学会の名前だけで、治療の良し悪しは決まりません。</h2>
        </div>
        <div>
          <p>
            学会は、専門家が研究や教育、制度について議論する場です。学会に所属していることや、認定資格を持っていることは、医師の専門性を知る手がかりになります。
          </p>
          <p>
            ただし、個別の治療が自分に合うか、効果があるか、安全かどうかは、病気、症状、検査結果、治療方法、根拠、リスクを別々に確認して判断します。
          </p>
        </div>
      </section>

      <section className="jsrm-chapters-section">
        <div className="section-heading">
          <div><span className="eyebrow">THE 10-CHAPTER GUIDE</span><h2>学会を10章で読み解く<span className="heading-dot">。</span></h2></div>
          <span className="section-caption">気になるテーマから読めます</span>
        </div>
        <div className="jsrm-chapters-grid">
          {jsrmChapters.map((chapter) => <Link href={`/jsrm/${chapter.slug}/`} key={chapter.slug} className="jsrm-chapter-card"><span>{chapter.number}</span><div><small>{chapter.eyebrow}</small><h3>{chapter.title}</h3><p>{chapter.description}</p></div><Icon name="arrow" size={19} /></Link>)}
        </div>
      </section>

      <section className="jsrm-section">
        <div className="section-heading">
          <div><span className="eyebrow">WHAT THE SOCIETY DOES</span><h2>日本再生医療学会の役割<span className="heading-dot">。</span></h2></div>
        </div>
        <div className="jsrm-role-grid">
          <article><span>01</span><h3>専門領域をつなぐ</h3><p>臨床医学、基礎医学、細胞工学、組織工学、材料工学、生命倫理、法律、医療経済などを横断して、再生医療の課題を扱います。</p></article>
          <article><span>02</span><h3>研究と教育を支える</h3><p>学術集会、機関誌、ニューズレター、学会賞、教育コンテンツなどを通して、研究成果と知識を共有します。</p></article>
          <article><span>03</span><h3>安全性と制度を考える</h3><p>細胞の品質・安全性、細胞加工、再生医療等安全性確保法に関する情報や考え方を専門家向けに発信しています。</p></article>
          <article><span>04</span><h3>人材を認定・育成する</h3><p>医師、歯科医師、細胞培養技術者、細胞培養加工施設に関わる認定制度を設け、再生医療を支える人材を育てています。</p></article>
        </div>
      </section>

      <section className="jsrm-history-section">
        <div className="jsrm-history-copy">
          <span className="eyebrow">A BRIEF HISTORY</span>
          <h2>研究会から、<br />分野を支える学会へ。</h2>
          <p>公式の沿革から、再生医療が細胞療法だけでなく、組織工学、歯科、臨床、制度へと広がってきた流れをたどれます。</p>
          <a className="text-link" href="https://www.jsrm.jp/whoweare/pastandpresent/" target="_blank" rel="noopener noreferrer">公式の沿革を見る <span><Icon name="arrow" size={20} /></span></a>
        </div>
        <ol className="jsrm-timeline">
          {jsrmTimeline.map(([year, event]) => <li key={year}><time>{year}</time><span>{event}</span></li>)}
        </ol>
      </section>

      <section className="jsrm-section">
        <div className="section-heading">
          <div><span className="eyebrow">CERTIFICATION</span><h2>認定制度をどう読むか<span className="heading-dot">。</span></h2></div>
          <a className="small-link" href="https://www.jsrm.jp/activity/certification/" target="_blank" rel="noopener noreferrer">公式の認定制度 <Icon name="arrow" size={18} /></a>
        </div>
        <p className="jsrm-section-lead">学会は、法令・倫理・細胞加工などの教育プログラムや試験を通じて、複数の専門職を認定しています。資格の意味はそれぞれ異なります。</p>
        <div className="jsrm-certification-grid">
          {jsrmCertification.map((item, index) => <article key={item.title}><span className="category-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
        </div>
        <div className="jsrm-caution"><Icon name="check" size={28} /><div><strong>大切な線引き</strong><p>認定資格は、資格要件に関する情報です。特定の治療の有効性、安全性、費用対効果、あなたへの適応を保証するものではありません。</p></div></div>
      </section>

      <section className="jsrm-law-section">
        <div>
          <span className="eyebrow">LAW & SAFETY</span>
          <h2>制度情報は、更新日と用語に注意する。</h2>
        </div>
        <div>
          <p>学会の「新法関連情報」には、細胞加工、無菌操作、細胞保管、提供計画の雛形など、専門的な資料が掲載されています。</p>
          <p>公式サイトは、2025年5月31日に改正法が施行され、掲載資料には改正前の用語が残る場合があると案内しています。制度を調べるときは、資料の作成日・改訂日と、厚生労働省やPMDAの最新情報をあわせて確認してください。</p>
          <a className="text-link" href="https://www.jsrm.jp/activity/regulatoryaffairs/" target="_blank" rel="noopener noreferrer">新法関連情報を見る <span><Icon name="arrow" size={20} /></span></a>
        </div>
      </section>

      <section className="jsrm-reader-section">
        <span className="eyebrow">FOR READERS</span>
        <h2>治療を検討するときの確認リスト</h2>
        <div className="jsrm-checklist">
          {["対象となる病気・症状・患者条件", "研究・承認・臨床研究・自由診療などの位置づけ", "期待される利益を支える研究や比較対象", "既知のリスク、不確実性、治療後の観察", "他の治療、経過観察、セカンドオピニオン", "採取・加工・投与・検査・通院を含む総額と契約条件"].map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="jsrm-reviewer-section">
        <div><span className="eyebrow">MEDICAL REVIEW AT THIS SITE</span><h2>千原良友先生の所属学会として</h2><p>当サイトでは、千原良友先生を監修者として掲載しています。日本再生医療学会への所属は、先生のプロフィールに記載された所属情報の一つです。学会の所属と、記事ごとの監修範囲・監修日・治療の評価は分けて表示します。</p></div>
        <Link className="button outline" href="/supervision/">監修者プロフィールを見る <Icon name="arrow" size={19} /></Link>
      </section>

      <section className="jsrm-sources">
        <span className="eyebrow">PRIMARY SOURCES</span>
        <h2>公式情報・参考ページ</h2>
        <div>{jsrmSources.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div>
      </section>
    </div>
  );
}
