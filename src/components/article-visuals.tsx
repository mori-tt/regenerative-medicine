import type { SiteLocale } from "@/content/locales";
import type { CSSProperties } from "react";

type VisualKind = "approaches" | "flow" | "evidence" | "comparison" | "safety" | "biodistribution" | "homing" | "paracrine" | "bbb" | "therapies" | "celltypes" | "contents" | "cost" | "checkpoints" | "repair" | "skinaging" | "routes" | "sources" | "positioning" | "riskchain" | "eligibility";
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
  "what-is-stem-cell": "celltypes",
  "stem-cell-types": "celltypes",
  "somatic-stem-cells": "celltypes",
  "mesenchymal-basics": "celltypes",
  "stem-cell-treatment-contents": "contents",
  "insurance-care": "cost",
  "cost-simulation": "cost",
  "five-points-before-treatment": "checkpoints",
  "questions-before-treatment": "checkpoints",
  "hospital-choice": "checkpoints",
  "informed-consent-howto": "checkpoints",
  "final-checklist": "checkpoints",
  "stem-cell-cosmetic-medicine": "checkpoints",
  "exosome-cosmetic-claims": "checkpoints",
  "body-repair-mechanisms": "repair",
  "stem-cell-skin-aging": "skinaging",
  "stem-cell-administration-routes": "routes",
  "autologous-allogeneic": "comparison",
  "bone-marrow-vs-adipose": "sources",
  "stem-cell-sources": "sources",
  "exosomes-notes": "therapies",
  "prp-therapy-basics": "therapies",
  "drugs-surgery-comparison": "positioning",
  "stem-cell-infection-risk": "riskchain",
  "stem-cell-contraindications": "eligibility",
  "iv-stem-cell-safety": "safety",
  "autologous-safety": "safety",
  "tumorigenicity-safety": "safety",
  "stem-cell-antiaging-evidence": "evidence",
  "stem-cell-efficacy-evidence": "evidence",
  "stem-cell-effect-duration": "evidence",
  "press-release-reading": "evidence",
  "case-reports-registries": "evidence",
  "negative-trials": "evidence",
  "guideline-reading": "evidence",
  "treatment-eligibility-process": "flow",
  "ips-donation": "flow",
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
    celltypes: [
      ["ES細胞", "受精卵由来。幅広い細胞に変わる力を持つ。倫理面の配慮が必要"],
      ["iPS細胞", "体の細胞から作る多能性細胞。病気モデルや再生医療で研究中"],
      ["間葉系幹細胞", "骨髄・脂肪・臍帯などから採取。分泌物による作用が注目される"],
    ],
    contents: [
      ["細胞", "採取・培養した細胞。由来・細胞数・自家か他家かを確認"],
      ["懸濁液・添加物", "生理食塩水などの液。冷凍保存品は保存剤が残ることがある"],
      ["投与経路", "点滴・局所注射など。経路で行き先とリスクが変わる"],
    ],
    cost: [
      ["採取", "脂肪や骨髄を採る操作の費用"],
      ["培養・検査", "細胞の増殖と品質検査の費用"],
      ["投与", "点滴や注射の費用"],
      ["通院・経過", "診察・検査・追加投与の費用"],
    ],
    checkpoints: [
      ["根拠", "その病気へのエビデンスはあるか"],
      ["リスク", "副作用・合併症・効かない可能性"],
      ["代替案", "他の治療・経過観察との比較"],
      ["費用", "総額・追加費用・中止時の扱い"],
      ["体制", "提供計画の届出・連絡先・緊急時対応"],
    ],
    repair: ["組織の損傷", "損傷部からの信号", "細胞・分泌物の働きかけ", "修復の評価"],
    skinaging: [
      ["加齢・紫外線", "線維芽細胞の機能低下とコラーゲン減少"],
      ["シワ・たるみ", "弾力の低下として表面に現れる"],
      ["研究アプローチ", "細胞や分泌物が皮膚に働きかけるかを研究中"],
    ],
    routes: [
      ["静脈（点滴）", "全身に行き渡る設計。肺で多くが捕捉される"],
      ["動脈", "標的臓器に近い血管から送る。操作の負担あり"],
      ["局所", "関節・皮膚などへ直接注射。分布は局所に限定"],
    ],
    sources: [
      ["脂肪", "吸引で採取。美容分野で多く使われる"],
      ["骨髄", "穿刺で採取。研究の歴史が長い"],
      ["臍帯", "出産時の組織を利用。他家由来が中心"],
    ],
    positioning: [
      ["薬物治療", "確立した選択肢。効果と副作用が明確なことが多い"],
      ["手術", "確立した選択肢。侵襲はあるが確実性が高い場合も"],
      ["再生医療", "多くが研究段階。他の選択肢と比較して考える"],
    ],
    riskchain: [
      ["採取・注射部位", "皮膚を通す操作での感染リスク"],
      ["培養・加工", "無菌管理が品質を左右する"],
      ["製剤・輸送", "汚染製剤による感染の報告がある"],
      ["投与後", "発熱など異変時の連絡先を確認"],
    ],
    eligibility: [
      ["慎重評価が必要な状態", "活動性のがん・感染症・妊娠・免疫抑制治療中など"],
      ["確認すること", "持病・服用薬の申告、採血や画像などの適否評価"],
      ["相談する人", "提供施設だけでなく主治医にも相談"],
    ],
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
    celltypes: [
      ["ES cells", "Derived from early embryos. Broad differentiation potential; ethical considerations apply"],
      ["iPS cells", "Pluripotent cells made from body cells. Studied for disease models and regenerative uses"],
      ["Mesenchymal stem cells", "Collected from bone marrow, fat, umbilical cord. Their secretions attract attention"],
    ],
    contents: [
      ["Cells", "Collected and cultured cells. Confirm origin, count, autologous vs donor"],
      ["Fluid and additives", "Saline-based suspension; frozen products may retain cryoprotectant"],
      ["Administration route", "IV infusion or local injection; route changes destination and risks"],
    ],
    cost: [
      ["Collection", "Procedure to harvest fat or bone marrow"],
      ["Culture and testing", "Cell expansion and quality control"],
      ["Administration", "Infusion or injection"],
      ["Visits and follow-up", "Consultations, tests, retreatment"],
    ],
    checkpoints: [
      ["Evidence", "Is there research for your condition?"],
      ["Risks", "Side effects, complications, chance of no benefit"],
      ["Alternatives", "Other treatments or watchful waiting"],
      ["Costs", "Total, extra fees, cancellation terms"],
      ["Arrangements", "Filed provision plan, contacts, emergencies"],
    ],
    repair: ["Tissue injury", "Signals from the injury", "Action of cells or secretions", "Assessing repair"],
    skinaging: [
      ["Aging and UV", "Reduced fibroblast activity and collagen loss"],
      ["Wrinkles and laxity", "Appear on the surface as loss of elasticity"],
      ["Research approach", "Whether cells or secretions can act on skin is under study"],
    ],
    routes: [
      ["Intravenous (drip)", "Designed to spread systemically; most cells are trapped in the lung"],
      ["Intra-arterial", "Delivered via vessels near the target organ; procedural burden"],
      ["Local", "Direct injection into joints or skin; distribution stays local"],
    ],
    sources: [
      ["Adipose tissue", "Collected by aspiration. Common in aesthetic care"],
      ["Bone marrow", "Collected by puncture. Long research history"],
      ["Umbilical cord", "Uses postnatal tissue. Mainly donor-derived"],
    ],
    positioning: [
      ["Drug therapy", "Established option; benefits and side effects often well defined"],
      ["Surgery", "Established option; invasive but sometimes more certain"],
      ["Regenerative medicine", "Much of it still in research; compare with the alternatives"],
    ],
    riskchain: [
      ["Harvest and injection sites", "Infection risk at the skin-penetrating procedure"],
      ["Culture and processing", "Aseptic control determines quality"],
      ["Product and transport", "Infections after contaminated products reported"],
      ["After administration", "Confirm who to contact about fever or changes"],
    ],
    eligibility: [
      ["Conditions needing careful evaluation", "Active cancer, infection, pregnancy, immunosuppressive therapy, etc."],
      ["What is checked", "Disclosure of conditions and medicines; blood tests, imaging"],
      ["Who to consult", "Your own doctors, not only the provider"],
    ],
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
    celltypes: [
      ["ES细胞", "来源于早期胚胎，分化潜能广泛，需伦理方面的考虑"],
      ["iPS细胞", "由体细胞制备的多能细胞，用于疾病模型与再生医学研究"],
      ["间充质干细胞", "取自骨髓、脂肪、脐带等，其分泌物作用备受关注"],
    ],
    contents: [
      ["细胞", "经采集、培养的细胞。请确认来源、细胞数、自体或异体"],
      ["悬液与添加剂", "以生理盐水等为基础的悬液；冷冻制剂可能残留冷冻保护剂"],
      ["给药途径", "静脉输注或局部注射，途径决定去向与风险"],
    ],
    cost: [
      ["采集", "采集脂肪或骨髓的操作费用"],
      ["培养与检测", "细胞扩增与质量检测费用"],
      ["给药", "输注或注射费用"],
      ["复诊与随访", "诊察、检查、追加给药费用"],
    ],
    checkpoints: [
      ["依据", "针对该疾病是否有证据"],
      ["风险", "副作用、并发症、无效的可能"],
      ["替代方案", "与其他治疗或观察等待的比较"],
      ["费用", "总额、追加费用、中止时的处理"],
      ["体制", "提供计划申报、联络方式、紧急应对"],
    ],
    repair: ["组织损伤", "损伤部位的信号", "细胞或分泌物的作用", "修复的评估"],
    skinaging: [
      ["衰老与紫外线", "成纤维细胞活性下降与胶原流失"],
      ["皱纹与松弛", "表现为皮肤表面弹性下降"],
      ["研究思路", "细胞或其分泌物能否作用于皮肤正在研究中"],
    ],
    routes: [
      ["静脉输注", "按全身分布设计；多数细胞滞留于肺"],
      ["动脉", "经靶器官附近血管给药，操作负担较大"],
      ["局部", "直接注射至关节、皮肤等，分布限于局部"],
    ],
    sources: [
      ["脂肪", "抽吸采集，美容领域常用"],
      ["骨髓", "穿刺采集，研究历史较长"],
      ["脐带", "利用分娩后的组织，主要为异体来源"],
    ],
    positioning: [
      ["药物治疗", "已确立的选择，疗效与副作用通常明确"],
      ["手术", "已确立的选择，虽有创伤但有时确定性更高"],
      ["再生医学", "多数仍处研究阶段，应与其他选择比较"],
    ],
    riskchain: [
      ["采集与注射部位", "穿刺皮肤的操作存在感染风险"],
      ["培养与加工", "无菌管理决定质量"],
      ["制剂与运输", "已有受污染制剂致感染的报告"],
      ["给药后", "确认发热等异常时的联系方式"],
    ],
    eligibility: [
      ["需慎重评估的情况", "活动性肿瘤、感染、妊娠、免疫抑制治疗中等"],
      ["确认内容", "申报病情与用药，进行血液、影像等适用性评估"],
      ["咨询对象", "除提供机构外也应咨询自己的主治医生"],
    ],
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
      {(kind === "celltypes" || kind === "contents" || kind === "skinaging" || kind === "routes" || kind === "sources" || kind === "positioning" || kind === "eligibility") && (
        <div className="visual-cards visual-cards-three">
          {text[kind].map(([label, desc]) => (
            <div className="visual-card visual-card-labeled" key={label}>
              <b>{label}</b>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      )}
      {(kind === "cost" || kind === "riskchain") && (
        <div className="visual-cards visual-cards-four">
          {text[kind].map(([label, desc]) => (
            <div className="visual-card visual-card-labeled" key={label}>
              <b>{label}</b>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      )}
      {kind === "checkpoints" && (
        <div className="visual-cards visual-cards-five">
          {text.checkpoints.map(([label, desc], index) => (
            <div className="visual-card visual-card-labeled" key={label}>
              <b><i>{index + 1}</i>{label}</b>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      )}
      {kind === "repair" && (
        <div className="visual-flow">
          {text.repair.map((item, index) => <div className="visual-flow-step" key={item}><b>{index + 1}</b><span>{item}</span></div>)}
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
