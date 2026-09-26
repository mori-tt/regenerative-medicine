import Link from "next/link";
import type { CategorySlug } from "@/content/categories";
import type { SiteLocale } from "@/content/locales";

type ClosingLocale = SiteLocale | "ja";

const copy = {
  ja: {
    heading: "まとめと次に読む",
    noteTitle: "この記事の使い方",
    note: "この記事は一般的な情報提供を目的としたもので、個別の診断・治療の勧誘や推奨ではありません。研究段階の内容は将来変わる可能性があります。具体的な判断は、主治医や医療機関、公的な相談窓口にご確認ください。",
    links: [
      { href: "/glossary/", label: "用語集（281語・出典付き）" },
      { href: "/sources/", label: "情報の出どころと調べ方" },
      { href: "/advertising/", label: "広告表現の注意点" },
      { href: "/articles/questions-before-treatment/", label: "治療前に確認すべき質問" },
    ],
    closing: {
      "stem-basics": "基礎概念が固まったら、次は「どう使われているか（投与方法・体内での動き）」「どこまで証明されているか（エビデンス）」の記事に進むと、説明資料を見たときに違和感に気づきやすくなります。",
      "in-body": "投与された細胞の行方は研究で一部解明されていますが、「どこに届くか＝そこで働くか」は同じではありません。効果の説明と体内分布の知見を分けて考えることが大切です。",
      "anti-aging": "若返り・美容をうたう提供には慎重さが必要です。「研究で示されたこと」と「臨床で確かめられたこと」の違いを確認し、誇大な表現は広告規制の観点からも疑ってかかりましょう。",
      "efficacy": "効果の判断はエビデンスの質と量に基づきます。単一の報告や体験談ではなく、比較試験や系統的レビューの蓄積を確認することが、誤った期待を避ける基本です。",
      "safety": "リスクは治療の種類・経路・細胞の由来で変わります。「安全だから進める」ではなく「リスクと利益を比較して判断する」ことが重要です。不安な点は施設に確認し、納得できるまで決断を急がないでください。",
      "cell-types": "細胞の種類と由来で性質・リスク・研究段階が異なります。同じ「幹細胞治療」という言葉でも中身が違うことがあるため、施設に細胞の種類と根拠を確認しましょう。",
      "compare-therapies": "幹細胞・エクソソーム・PRPは別の性質を持つ別々の提供です。比較は「細胞自体を入れるか・分泌物だけか・自分の血液由来か」「承認・届出・研究のどの段階か」で整理できます。",
      "cost-access": "自由診療は全額自己負担です。費用・内容・リスク・契約解除を書面で確認し、迷ったらセカンドオピニオンや消費者窓口を使いましょう。",
      "mechanisms": "作用の仕組みは仮説と確認済みの部分が混在しています。「だから効く」と短絡せず、どの段階まで確認されているかを資料や記事で確かめる姿勢が役立ちます。",
    } as Record<CategorySlug, string>,
  },
  en: {
    heading: "Summary & further reading",
    noteTitle: "How to use this article",
    note: "This article is general information — not a diagnosis or treatment recommendation. Research-stage findings may change. For personal decisions, consult your physician or public health resources.",
    links: [
      { href: "/en/glossary/", label: "Glossary (281 terms with sources)" },
      { href: "/en/sources/", label: "Our sources & how to verify" },
      { href: "/en/advertising/", label: "Advertising rules" },
      { href: "/en/articles/questions-before-treatment/", label: "Questions to ask before treatment" },
    ],
    closing: {
      "stem-basics": "Once the basics are clear, move on to how cells are used and how much has been proven — you'll spot overstated claims more easily.",
      "in-body": "Where administered cells go and whether they act there are separate questions — keep biodistribution findings apart from efficacy claims.",
      "anti-aging": "Be cautious of rejuvenation claims. Distinguish what research showed from what clinical care has established, and view exaggerated advertising critically.",
      "efficacy": "Judge efficacy by the quality and weight of evidence — comparative trials and reviews, not single reports or testimonials.",
      "safety": "Risk varies by treatment type, route, and cell source. Compare risks and benefits rather than assuming safety — and don't rush.",
      "cell-types": "Cell types differ in properties, risks, and research stage. Ask clinics which cells they use and what evidence supports them.",
      "compare-therapies": "Stem cells, exosomes, and PRP are distinct offerings. Compare by what's delivered and which regulatory stage they're in.",
      "cost-access": "Private care is fully self-paid. Confirm costs, content, risks, and cancellation in writing — and consider a second opinion.",
      "mechanisms": "Mechanisms mix hypotheses with confirmed findings. Check which stage each claim is actually supported by.",
    } as Record<CategorySlug, string>,
  },
  zh: {
    heading: "总结与延伸阅读",
    noteTitle: "本文的使用方式",
    note: "本文为一般性信息，不是个体诊断或治疗的建议。研究阶段的内容可能改变。具体判断请咨询主治医生或医疗机构。",
    links: [
      { href: "/zh/glossary/", label: "术语表（281条・附出处）" },
      { href: "/zh/sources/", label: "信息来源与核实方法" },
      { href: "/zh/advertising/", label: "广告表述的注意事项" },
      { href: "/zh/articles/questions-before-treatment/", label: "治疗前应确认的问题" },
    ],
    closing: {
      "stem-basics": "掌握基础概念后，建议继续阅读投与方式和证据强度相关内容，更容易发现夸大宣传。",
      "in-body": "细胞到达哪里与是否发挥作用是两个问题，请将体内分布知识与疗效主张分开判断。",
      "anti-aging": "对“返老还童”“美容”类宣传需保持谨慎，区分研究阶段与临床确立的内容。",
      "efficacy": "疗效判断基于证据的质量与数量，请参考对照试验和系统综述而非单一报告或体验谈。",
      "safety": "风险因治疗类型、途径和细胞来源而异，请比较风险与获益后再判断，不要急于决定。",
      "cell-types": "不同细胞种类的性质、风险和研究阶段各异，请向机构确认使用的细胞类型及其依据。",
      "compare-therapies": "干细胞、外泌体、PRP是不同性质的治疗方法，可分别从成分和所处阶段比较。",
      "cost-access": "自费诊疗全额自付，请以书面确认费用、内容、风险和解除条款，必要时寻求第二意见。",
      "mechanisms": "作用机制中既有假说也有已确认的部分，请确认各主张所处的证据阶段。",
    } as Record<CategorySlug, string>,
  },
} as const;

export function ArticleClosing({ category, locale = "ja" }: { category: CategorySlug; locale?: ClosingLocale }) {
  const c = copy[locale];
  return (
    <>
      <section className="article-closing">
        <h2>{c.heading}</h2>
        <p>{c.closing[category]}</p>
        <ul className="closing-links">
          {c.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label} →</Link>
            </li>
          ))}
        </ul>
      </section>
      <aside className="article-note">
        <p className="article-note-title">{c.noteTitle}</p>
        <p>{c.note}</p>
      </aside>
    </>
  );
}
