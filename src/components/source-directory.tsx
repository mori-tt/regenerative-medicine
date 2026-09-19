import type { SiteLocale } from "@/content/locales";

type SourceGroup = { title: string; items: [string, string, string][] };

const groups: SourceGroup[] = [
  {
    title: "学会・専門家団体",
    items: [
      ["日本再生医療学会", "https://www.jsrm.jp/", "再生医療に関する学術活動、認定制度、制度・規制情報を確認するための公式サイト。"],
      ["日本再生医療学会：本会の目的", "https://www.jsrm.jp/whoweare/prospectus/", "基礎研究から臨床、倫理・法制度までを含む学際的な活動方針。"],
      ["日本再生医療学会：認定制度", "https://www.jsrm.jp/activity/certification/", "再生医療に関わる医師・細胞培養関連職種などの認定制度。"],
      ["日本再生医療学会：制度・規制情報", "https://www.jsrm.jp/activity/regulatoryaffairs/", "再生医療等安全性確保法などに関する公式情報。"],
    ],
  },
  {
    title: "大学・研究機関",
    items: [
      ["京都大学 iPS細胞研究所（CiRA）：iPS細胞Q&A", "https://www.cira.kyoto-u.ac.jp/j/faq/faq_ips.html", "iPS細胞の基礎を一般向けに確認する際の参考情報。"],
      ["国立研究開発法人 日本医療研究開発機構（AMED）：再生医療研究開発課", "https://www.amed.go.jp/program/list/13/01/index.html", "基礎から臨床段階までの研究開発支援と関連事業。"],
    ],
  },
  {
    title: "行政・規制当局",
    items: [
      ["厚生労働省：再生医療について", "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei_iryou/index.html", "制度、通知、再生医療等安全性確保法に関する最新情報。"],
      ["厚生労働省：医療広告規制", "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kokokukisei/", "医療広告を作成・掲載するときに確認する公式ガイド。"],
      ["PMDA：再生医療等製品", "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/ctp/0007.html", "再生医療等製品の定義、審査・承認関連の公式情報。"],
      ["PMDA：再生医療等製品情報検索", "https://www.pmda.go.jp/PmdaSearch/saiseiSearch/", "添付文書などの製品情報を検索するための公式データベース。"],
      ["PMDA：新再生医療等製品の承認品目一覧", "https://www.pmda.go.jp/review-services/drug-reviews/review-information/ctp/0004.html", "年度ごとの承認品目と審査資料を確認する入口。"],
      ["厚生労働省：臨床研究等提出・公開システム（jRCT）", "https://jrct.mhlw.go.jp/", "臨床研究・再生医療等研究の公開情報を検索するシステム。"],
      ["国税庁：医療費控除", "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm", "医療費控除の対象・手続きを確認する税務当局の情報。"],
    ],
  },
  {
    title: "一般向けポータル",
    items: [
      ["再生医療ポータル", "https://saiseiryo.jp/", "指定された一般向け情報ポータル。制度や個別製品の最新情報は、厚生労働省・PMDA等の一次情報と照合して確認してください。"],
    ],
  },
];

const translatedGroups: Record<SiteLocale, SourceGroup[]> = {
  en: [
    {
      title: "Academic and professional societies",
      items: [
        ["The Japanese Society for Regenerative Medicine", "https://www.jsrm.jp/", "Official site for checking academic activities, certification, and regulatory information on regenerative medicine."],
        ["JSRM: Purpose", "https://www.jsrm.jp/whoweare/prospectus/", "Interdisciplinary activity policy spanning basic research to clinical practice, ethics, and legal systems."],
        ["JSRM: Certification", "https://www.jsrm.jp/activity/certification/", "Certification for physicians and cell-culture professions involved in regenerative medicine."],
        ["JSRM: Regulatory information", "https://www.jsrm.jp/activity/regulatoryaffairs/", "Official information including the Act on the Safety of Regenerative Medicine."],
      ],
    },
    {
      title: "Universities and research institutes",
      items: [
        ["Kyoto University CiRA: iPS cell Q&A", "https://www.cira.kyoto-u.ac.jp/j/faq/faq_ips.html", "Reference for checking iPS cell basics written for the general public."],
        ["Japan Agency for Medical Research and Development (AMED): Regenerative medicine", "https://www.amed.go.jp/program/list/13/01/index.html", "R&D support and related programs from basic to clinical stages."],
      ],
    },
    {
      title: "Government and regulators",
      items: [
        ["Ministry of Health, Labour and Welfare: Regenerative medicine", "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei_iryou/index.html", "Latest information on systems, notifications, and the Act on the Safety of Regenerative Medicine."],
        ["MHLW: Medical advertising rules", "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kokokukisei/", "Official guide to check when creating or placing medical ads."],
        ["PMDA: Regenerative medical products", "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/ctp/0007.html", "Official information on definitions, review, and approval of regenerative medical products."],
        ["PMDA: Regenerative product information search", "https://www.pmda.go.jp/PmdaSearch/saiseiSearch/", "Official database for searching product information such as package inserts."],
        ["PMDA: Approved regenerative product list", "https://www.pmda.go.jp/review-services/drug-reviews/review-information/ctp/0004.html", "Entry to yearly approved products and review materials."],
        ["MHLW: jRCT clinical research system", "https://jrct.mhlw.go.jp/", "System for searching public clinical and regenerative research information."],
        ["National Tax Agency: Medical expense deductions", "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm", "Tax authority information on deduction eligibility and procedures."],
      ],
    },
    {
      title: "Portals for the public",
      items: [
        ["Regenerative Medicine Portal", "https://saiseiryo.jp/", "A designated public information portal. Cross-check the latest system and product information against primary sources such as MHLW and PMDA."],
      ],
    },
  ],
  zh: [
    {
      title: "学会与专家团体",
      items: [
        ["日本再生医学学会", "https://www.jsrm.jp/", "确认再生医学学术活动、认定制度与制度规制信息的官方网站。"],
        ["学会宗旨", "https://www.jsrm.jp/whoweare/prospectus/", "包含基础研究到临床、伦理与法制度的跨学科活动方针。"],
        ["认定制度", "https://www.jsrm.jp/activity/certification/", "面向再生医学相关医生与细胞培养相关职业的认定制度。"],
        ["制度与规制信息", "https://www.jsrm.jp/activity/regulatoryaffairs/", "关于再生医学安全性确保法等的官方信息。"],
      ],
    },
    {
      title: "大学与研究机构",
      items: [
        ["京都大学iPS细胞研究所（CiRA）：iPS问答", "https://www.cira.kyoto-u.ac.jp/j/faq/faq_ips.html", "面向一般读者确认iPS基础的参考信息。"],
        ["日本医疗研究开发机构（AMED）：再生医学研发", "https://www.amed.go.jp/program/list/13/01/index.html", "从基础到临床阶段的研发支援与相关事业。"],
      ],
    },
    {
      title: "行政与监管机构",
      items: [
        ["厚生劳动省：再生医学", "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei_iryou/index.html", "制度、通知与再生医学安全性确保法的最新信息。"],
        ["厚生劳动省：医疗广告规制", "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kokokukisei/", "制作刊登医疗广告时确认的官方指南。"],
        ["PMDA：再生医学产品", "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/ctp/0007.html", "再生医学产品的定义、审查与批准相关官方信息。"],
        ["PMDA：再生医学产品信息检索", "https://www.pmda.go.jp/PmdaSearch/saiseiSearch/", "检索说明书等产品信息的官方数据库。"],
        ["PMDA：新再生医学产品批准目录", "https://www.pmda.go.jp/review-services/drug-reviews/review-information/ctp/0004.html", "确认年度批准产品与审查资料的入口。"],
        ["厚生劳动省：临床研究公开系统（jRCT）", "https://jrct.mhlw.go.jp/", "检索临床研究与再生医学研究公开信息的系统。"],
        ["国税厅：医疗费扣除", "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm", "确认医疗费扣除对象与手续的税务当局信息。"],
      ],
    },
    {
      title: "面向公众的门户",
      items: [
        ["再生医学门户", "https://saiseiryo.jp/", "指定的公众信息门户。制度与个别产品的最新信息，请与厚生劳动省、PMDA等一手信息对照确认。"],
      ],
    },
  ],
};

const chrome = {
  ja: {
    intro: "このサイトでは、一般向けの説明を作る際に、大学・研究機関、学会、行政・規制当局の公開情報を優先して参照します。出典元のページ内容や制度は更新されるため、重要な判断では必ずリンク先の最新版をご確認ください。",
    note: "出典の掲載は、各機関の見解を本サイトが保証することや、特定の治療を推奨することを意味しません。引用・利用条件は各サイトの規約に従います。",
  },
  en: {
    intro: "When preparing explanations for the general public, this site prioritizes public information from universities, research institutes, societies, and government regulators. Source pages and systems are updated, so always check the linked latest versions for important decisions.",
    note: "Listing a source never means this site guarantees the organization's views or recommends any specific treatment. Quotation and use follow each site's terms.",
  },
  zh: {
    intro: "本站在制作面向一般读者的说明时，优先参照大学、研究机构、学会与行政监管机构的公开信息。来源页面与制度会更新，重要判断请务必确认链接的最新版。",
    note: "刊登来源不意味本站保证各机构观点或推荐特定治疗。引用与利用条件遵循各网站规则。",
  },
} as const;

export function SourceDirectory({ locale = "ja" }: { locale?: SiteLocale | "ja" } = {}) {
  const list = locale === "ja" ? groups : translatedGroups[locale];
  const copy = chrome[locale];
  return <div className="source-directory">
    <p>{copy.intro}</p>
    {list.map((group) => <section key={group.title}>
      <h2>{group.title}</h2>
      <ul className="source-list">
        {group.items.map(([title, url, description]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title} ↗</a><p>{description}</p></li>)}
      </ul>
    </section>)}
    <p className="source-note">{copy.note}</p>
  </div>;
}
