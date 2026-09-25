import type { SiteLocale } from "@/content/locales";
import type { CSSProperties } from "react";

type VisualKind = "approaches" | "flow" | "evidence" | "comparison" | "safety" | "biodistribution" | "homing" | "paracrine" | "bbb" | "therapies";
type ArticleVisualLocale = SiteLocale | "ja";

const visualBySlug: Record<string, VisualKind> = {
  "three-approaches": "approaches",
  "treatment-flow": "flow",
  "clinical-trials-guide": "flow",
  "stages-of-research": "evidence",
  "evidence-levels": "evidence",
  "reading-research-news": "evidence",
  "randomized-trials": "evidence",
  "statistics-intro": "evidence",
  "self-vs-donor-cells": "comparison",
  "cost-and-insurance": "comparison",
  "risks-and-safety": "safety",
  "iv-stem-cell-journey": "biodistribution",
  "stem-cell-biodistribution": "biodistribution",
  "stem-cell-survival": "biodistribution",
  "stem-cell-homing": "homing",
  "stem-cell-brain-bbb": "bbb",
  "paracrine-effect": "paracrine",
  "msc-secretome": "paracrine",
  "stem-cell-mechanism": "paracrine",
  "stemcell-exosome-prp": "therapies",
};

const copy = {
  ja: {
    label: "理解のための模式図",
    note: "概念を整理するための図です。具体的な適応、効果、リスク、費用は治療ごとの説明資料で確認してください。",
    approaches: ["細胞を補う", "足場と組み合わせる", "体の修復を促す"],
    flow: ["相談・検査", "説明・同意", "採取・製造・投与", "経過観察"],
    evidence: ["基礎・非臨床", "初期の臨床研究", "比較を伴う臨床試験", "複数研究の蓄積"],
    comparisonHeaders: ["観点", "自分の細胞", "他人由来の細胞"],
    comparisonRows: [
      ["準備", "採取・製造が必要", "事前準備・検査が必要"],
      ["確認点", "採取の負担・品質", "適合・免疫・感染症対策"],
      ["判断", "治療ごとの説明を確認", "治療ごとの説明を確認"],
    ],
    costHeaders: ["位置づけ", "費用の確認ポイント"],
    costRows: [["保険診療", "自己負担割合と対象範囲"], ["治験・臨床研究", "研究ごとの負担・補償"], ["自由診療", "総額・追加費用・中止時の扱い"]],
    safety: ["投与時の反応", "感染・免疫・アレルギー", "治療後の経過", "長期的な懸念"],
    distribution: [
      ["静脈点滴", "細胞を含む製剤を投与", "100%"],
      ["肺", "多くが毛細血管に捕捉", "大部分"],
      ["肝臓・脾臓", "一部が再分布", "一部"],
      ["損傷組織", "集積は限定的", "ごく一部"],
    ],
    homingSteps: ["血流中を移動", "血管壁に弱く接着", "しっかり接着", "血管壁を通過", "組織へ移行"],
    paracrineLeft: "投与された細胞",
    paracrineCenter: "分泌される物質（成長因子・サイトカイン・エクソソーム）",
    paracrineRight: "周囲の細胞・免疫への働きかけ",
    bbbSteps: ["血流中の細胞", "血液脳関門（通過は限定的）", "脳組織（到達は少量）"],
    therapyHeaders: ["観点", "幹細胞治療", "エクソソーム", "PRP"],
    therapyRows: [
      ["使うもの", "生きた細胞", "細胞由来の小胞", "自分の血小板"],
      ["細胞を含む", "含む", "含まない", "含まない"],
      ["培養", "あり（製剤による）", "なし（細胞は使わない）", "なし"],
      ["エビデンス", "疾患ごとに検証中", "整備途上の新しい領域", "適応ごとに評価が分かれる"],
    ],
    paperFigureLabel: "研究データ（論文図表）",
    paperFigureNote: "マウスに51Cr標識間葉系幹細胞を静脈投与した後の臓器分布。1時間後は肺に60%以上が集まり、24時間後は肝臓への割合が増えています。動物実験における一条件の結果であり、人の治療にそのまま当てはまりません。",
  },
  en: {
    label: "Conceptual diagram",
    note: "This diagram organizes concepts. Confirm treatment-specific eligibility, benefits, risks, and costs in the provider's materials.",
    approaches: ["Replace cells", "Combine with a scaffold", "Stimulate repair"],
    flow: ["Consultation and tests", "Explanation and consent", "Collection, manufacture, and administration", "Follow-up"],
    evidence: ["Basic / preclinical", "Early clinical research", "Comparative clinical trial", "Accumulated evidence"],
    comparisonHeaders: ["Point", "Patient's own cells", "Donor cells"],
    comparisonRows: [["Preparation", "Collection and manufacture", "Preparation and testing"], ["Check", "Collection burden and quality", "Compatibility, immunity, infection control"], ["Decision", "Confirm treatment-specific details", "Confirm treatment-specific details"]],
    costHeaders: ["Setting", "What to check"],
    costRows: [["Insurance care", "Coverage and out-of-pocket share"], ["Trial / research", "Study-specific costs and compensation"], ["Self-pay care", "Total, extra fees, cancellation"]],
    safety: ["Administration reactions", "Infection, immunity, allergy", "Follow-up", "Long-term concerns"],
    distribution: [
      ["IV infusion", "Cell product administered", "100%"],
      ["Lung", "Most cells trapped in capillaries", "Most"],
      ["Liver / spleen", "Some cells redistribute", "A fraction"],
      ["Injured tissue", "Limited accumulation", "Small fraction"],
    ],
    homingSteps: ["In the bloodstream", "Weak adhesion to vessel wall", "Firm adhesion", "Crossing the vessel wall", "Into tissue"],
    paracrineLeft: "Administered cells",
    paracrineCenter: "Secreted factors (growth factors, cytokines, exosomes)",
    paracrineRight: "Effects on nearby cells and immunity",
    bbbSteps: ["Cells in blood", "Blood-brain barrier (limited passage)", "Brain tissue (small arrival)"],
    therapyHeaders: ["Point", "Stem cell therapy", "Exosomes", "PRP"],
    therapyRows: [
      ["Material", "Living cells", "Cell-derived vesicles", "Your platelets"],
      ["Contains cells", "Yes", "No", "No"],
      ["Culture", "Yes (product-dependent)", "No cells used", "None"],
      ["Evidence", "Under evaluation per condition", "Developing field", "Conclusions differ by indication"],
    ],
    paperFigureLabel: "Study data (published figure)",
    paperFigureNote: "Organ distribution after IV infusion of Cr-51-labeled MSCs in mice: over 60% in the lung at 1 hour, with the liver share rising by 24 hours. This is one condition in an animal experiment and does not directly apply to human treatment.",
  },
  zh: {
    label: "理解用概念图",
    note: "本图用于整理概念。具体适用性、获益、风险和费用请确认每项治疗的说明资料。",
    approaches: ["补充细胞", "与支架结合", "促进身体修复"],
    flow: ["咨询与检查", "说明与同意", "采集、制造与给药", "随访观察"],
    evidence: ["基础・非临床", "早期临床研究", "比较性临床试验", "研究积累"],
    comparisonHeaders: ["视点", "自己的细胞", "供者细胞"],
    comparisonRows: [["准备", "需要采集・制造", "需要事前准备・检查"], ["确认", "采集负担・质量", "适配・免疫・感染控制"], ["判断", "确认治疗说明", "确认治疗说明"]],
    costHeaders: ["位置", "费用确认点"],
    costRows: [["保险诊疗", "适用范围与自付比例"], ["试验・临床研究", "研究特定的负担与补偿"], ["自费诊疗", "总额・追加费用・中止处理"]],
    safety: ["给药时反应", "感染・免疫・过敏", "治疗后随访", "长期风险关注"],
    distribution: [
      ["静脉输注", "输注含细胞制剂", "100%"],
      ["肺", "多数滞留于毛细血管", "大部分"],
      ["肝・脾", "一部分再分布", "部分"],
      ["损伤组织", "聚集有限", "少量"],
    ],
    homingSteps: ["在血流中移动", "与血管壁弱黏附", "牢固黏附", "穿越血管壁", "迁入组织"],
    paracrineLeft: "输注的细胞",
    paracrineCenter: "分泌物质（生长因子・细胞因子・外泌体）",
    paracrineRight: "对周围细胞与免疫的作用",
    bbbSteps: ["血液中的细胞", "血脑屏障（通过受限）", "脑组织（到达量小）"],
    therapyHeaders: ["视点", "干细胞治疗", "外泌体", "PRP"],
    therapyRows: [
      ["所用材料", "活细胞", "细胞来源囊泡", "自体血小板"],
      ["是否含细胞", "含", "不含", "不含"],
      ["是否培养", "有（因制剂而异）", "不使用细胞", "无"],
      ["证据", "按疾病评估中", "发展中的新领域", "结论因适应证而异"],
    ],
    paperFigureLabel: "研究数据（论文图）",
    paperFigureNote: "小鼠静脉输注51Cr标记间充质干细胞后的器官分布：1小时后肺占60%以上，24小时后肝占比上升。这是动物实验在特定条件下的结果，不能直接外推至人体治疗。",
  },
} as const;

export function ArticleVisual({ slug, locale = "ja" }: { slug: string; locale?: ArticleVisualLocale }) {
  const kind = visualBySlug[slug];
  if (!kind) return null;
  const text = copy[locale];

  return (
    <figure className={`article-visual article-visual-${kind}`}>
      <div className="article-visual-heading">
        <span>{text.label}</span>
      </div>
      {kind === "approaches" && (
        <div className="visual-cards visual-cards-three">
          {text.approaches.map((item, index) => <div className="visual-card" key={item}><b>{index + 1}</b><span>{item}</span></div>)}
        </div>
      )}
      {kind === "flow" && (
        <div className="visual-flow">
          {text.flow.map((item, index) => <div className="visual-flow-step" key={item}><b>{index + 1}</b><span>{item}</span></div>)}
        </div>
      )}
      {kind === "evidence" && (
        <div className="visual-ladder">
          {text.evidence.map((item, index) => <div className="visual-ladder-step" key={item} style={{ "--step": index + 1 } as CSSProperties}><b>{index + 1}</b><span>{item}</span></div>)}
        </div>
      )}
      {kind === "comparison" && (
        <div className="visual-table-wrap">
          <table className="visual-table">
            <thead><tr>{(slug === "cost-and-insurance" ? text.costHeaders : text.comparisonHeaders).map((item) => <th key={item}>{item}</th>)}</tr></thead>
            <tbody>{(slug === "cost-and-insurance" ? text.costRows : text.comparisonRows).map((row) => <tr key={row[0]}>{row.map((item) => <td key={item}>{item}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      {kind === "safety" && <div className="visual-cards visual-cards-four">{text.safety.map((item) => <div className="visual-card" key={item}><span>{item}</span></div>)}</div>}
      {kind === "biodistribution" && (
        <div className="visual-dist">
          {text.distribution.map(([place, desc, scale]) => (
            <div className="visual-dist-row" key={place}>
              <b>{place}</b>
              <span>{desc}</span>
              <em>{scale}</em>
            </div>
          ))}
        </div>
      )}
      {kind === "homing" && (
        <div className="visual-flow visual-flow-five">
          {text.homingSteps.map((item, index) => <div className="visual-flow-step" key={item}><b>{index + 1}</b><span>{item}</span></div>)}
        </div>
      )}
      {kind === "paracrine" && (
        <div className="visual-paracrine">
          <div className="visual-card"><b>1</b><span>{text.paracrineLeft}</span></div>
          <div className="visual-paracrine-arrow">→</div>
          <div className="visual-card"><b>2</b><span>{text.paracrineCenter}</span></div>
          <div className="visual-paracrine-arrow">→</div>
          <div className="visual-card"><b>3</b><span>{text.paracrineRight}</span></div>
        </div>
      )}
      {kind === "bbb" && (
        <div className="visual-flow">
          {text.bbbSteps.map((item, index) => <div className="visual-flow-step" key={item}><b>{index + 1}</b><span>{item}</span></div>)}
        </div>
      )}
      {kind === "therapies" && (
        <div className="visual-table-wrap">
          <table className="visual-table">
            <thead><tr>{text.therapyHeaders.map((item) => <th key={item}>{item}</th>)}</tr></thead>
            <tbody>{text.therapyRows.map((row) => <tr key={row[0]}>{row.map((item) => <td key={item}>{item}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      <figcaption>{text.note}</figcaption>
      {slug === "stem-cell-biodistribution" && (
        <div className="paper-figure">
          <p className="paper-figure-label">{text.paperFigureLabel}</p>
          <img
            src="/images/articles/msc-biodistribution-eggenhofer-2012.jpg"
            alt={
              locale === "en"
                ? "Bar charts showing organ distribution of radioactivity after IV infusion of Cr-51-labeled MSCs in mice: over 60% in lungs at 1 hour, liver share rising at 24 hours"
                : locale === "zh"
                  ? "论文柱状图：小鼠静脉输注51Cr标记间充质干细胞后各器官放射活性分布，1小时后肺占60%以上，24小时后肝占比上升"
                  : "マウスに51Cr標識間葉系幹細胞を静脈投与した後の各臓器の放射活性分布。投与1時間後は肺に60%以上、24時間後は肝臓への割合が増加する論文の棒グラフ"
            }
            loading="lazy"
          />
          <p className="paper-figure-caption">
            {text.paperFigureNote}{" "}
            {locale === "en" ? "Source: " : locale === "zh" ? "出处：" : "出典："}
            Eggenhofer E et al. Frontiers in Immunology 2012;3:297, Figure 2 (CC BY).
          </p>
        </div>
      )}
    </figure>
  );
}
