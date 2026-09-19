const groups = [
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
] as const;

export function SourceDirectory() {
  return <div className="source-directory">
    <p>このサイトでは、一般向けの説明を作る際に、大学・研究機関、学会、行政・規制当局の公開情報を優先して参照します。出典元のページ内容や制度は更新されるため、重要な判断では必ずリンク先の最新版をご確認ください。</p>
    {groups.map((group) => <section key={group.title}>
      <h2>{group.title}</h2>
      <ul className="source-list">
        {group.items.map(([title, url, description]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title} ↗</a><p>{description}</p></li>)}
      </ul>
    </section>)}
    <p className="source-note">出典の掲載は、各機関の見解を本サイトが保証することや、特定の治療を推奨することを意味しません。引用・利用条件は各サイトの規約に従います。</p>
  </div>;
}
