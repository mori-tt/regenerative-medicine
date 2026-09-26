import type { SiteLocale } from "@/content/locales";
import { defaultVisualFor } from "@/content/subcategories";
import type { CSSProperties } from "react";

type VisualKind = "approaches" | "flow" | "evidence" | "comparison" | "safety" | "biodistribution" | "homing" | "paracrine" | "bbb" | "therapies" | "celltypes" | "contents" | "cost" | "checkpoints" | "repair" | "skinaging" | "routes" | "sources" | "positioning" | "riskchain" | "eligibility" | "bodymap" | "disease" | "lifestyle" | "support" | "science" | "levels" | "genepath" | "genome" | "organoid" | "niche" | "tumor" | "threer" | "division" | "pipeline" | "cellcycle" | "bloodflow" | "digestive" | "immune" | "healing" | "transplant" | "reprogram" | "printing" | "scaffold" | "bank" | "discovery" | "differentiation" | "timeline" | "donation";
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
  "stem-cell-antiaging-evidence": "evidence",
  "stem-cell-efficacy-evidence": "evidence",
  "stem-cell-effect-duration": "evidence",
  "press-release-reading": "evidence",
  "case-reports-registries": "evidence",
  "negative-trials": "evidence",
  "guideline-reading": "evidence",
  "treatment-eligibility-process": "flow",
  "ips-donation": "bank",
  "cells-tissues-organs": "levels",
  "genes-and-cells": "genepath",
  "dna-basics": "genepath",
  "proteins-basics": "genepath",
  "cell-division": "cellcycle",
  "cell-cycle": "cellcycle",
  "blood-basics": "bloodflow",
  "blood-types": "bloodflow",
  "circulation": "bloodflow",
  "respiration": "bloodflow",
  "digestion-absorption": "digestive",
  "microbiome": "digestive",
  "immune-basics": "immune",
  "antibodies-vaccines": "immune",
  "allergy-basics": "immune",
  "hla-rejection": "immune",
  "fracture-healing": "healing",
  "age-and-regeneration": "healing",
  "regenerative-medicine-history": "timeline",
  "blood-donation-basics": "donation",
  "hematopoietic-transplant": "transplant",
  "organ-transplant-basics": "transplant",
  "tumorigenicity-safety": "tumor",
  "genome-editing-difference": "genome",
  "organoids-intro": "organoid",
  "direct-reprogramming": "reprogram",
  "differentiation-basics": "differentiation",
  "asymmetric-division": "division",
  "stemcell-niche": "niche",
  "bioprinting": "printing",
  "scaffolds": "scaffold",
  "ips-stock": "bank",
  "cell-banks-guide": "bank",
  "biobank-basics": "bank",
  "cryopreservation": "bank",
  "ips-drug-discovery": "discovery",
  "animal-testing-3rs": "threer",
  "microscope-world": "science",
  "bench-to-bedside": "evidence",
  "overseas-research": "science",
  "health-checkups": "support",
  "family-doctor": "support",
  "mental-health-decision": "support",
  "disabilities-support": "support",
  "rehabilitation-basics": "support",
};

/** 汎用カードレンダリング（値は [ラベル, 説明] の配列）。既存の専用ブロックで描画される種別は含めない。 */
const CARD_KINDS = ["disease", "lifestyle", "support", "science", "levels", "genepath", "genome", "organoid", "niche", "tumor", "threer", "division"] as const;
type CardKind = (typeof CARD_KINDS)[number];

/** 汎用番号フローレンダリング（値は文字列配列）。既存の専用ブロックで描画される種別は含めない。 */
const FLOW_KINDS = ["pipeline", "cellcycle", "bloodflow", "digestive", "immune", "healing", "transplant", "reprogram", "printing", "scaffold", "bank", "discovery", "differentiation", "timeline", "donation"] as const;
type FlowKind = (typeof FLOW_KINDS)[number];

function isCardKind(kind: VisualKind): kind is CardKind {
  return (CARD_KINDS as readonly string[]).includes(kind);
}
function isFlowKind(kind: VisualKind): kind is FlowKind {
  return (FLOW_KINDS as readonly string[]).includes(kind);
}

const ALL_KINDS: ReadonlySet<string> = new Set([
  "approaches", "flow", "evidence", "comparison", "safety", "biodistribution", "homing", "paracrine", "bbb", "therapies",
  "celltypes", "contents", "cost", "checkpoints", "repair", "skinaging", "routes", "sources", "positioning", "riskchain", "eligibility",
  "bodymap", "disease", "lifestyle", "support", "science", "levels", "genepath", "genome", "organoid", "niche", "tumor", "threer", "division",
  "pipeline", "cellcycle", "bloodflow", "digestive", "immune", "healing", "transplant", "reprogram", "printing", "scaffold", "bank", "discovery", "differentiation", "timeline", "donation",
]);
function isVisualKind(value: string): value is VisualKind {
  return ALL_KINDS.has(value);
}

const copy = {
  ja: {
    label: "理解のための模式図",
    titles: {
      approaches: "再生医療の3つのアプローチ",
      flow: "治療の流れ",
      evidence: "研究の段階と確かさ",
      comparison: "自分の細胞と他人由来の細胞の比較",
      safety: "確認したい安全性のポイント",
      biodistribution: "点滴した細胞の行き先（動物実験をもとにした概念図）",
      homing: "細胞が血管から組織へ入る流れ",
      paracrine: "分泌される物質が周りの細胞に働きかける",
      bbb: "血液脳関門が細胞の通過を制限する",
      therapies: "幹細胞・エクソソーム・PRPの違い",
      celltypes: "代表的な幹細胞の3つの種類",
      contents: "製剤に含まれるものと投与経路",
      cost: "費用の構成",
      checkpoints: "確認したい5つのポイント",
      repair: "組織が修復される流れ",
      skinaging: "皮膚の老化と研究アプローチ",
      routes: "投与経路の3つのパターン",
      sources: "細胞の採取源の比較",
      positioning: "薬・手術・再生医療の位置づけ",
      riskchain: "感染が起こり得る工程",
      eligibility: "治療の適否を考える枠組み",
      bodymap: "体の主な部位と役割",
      disease: "病気を考える枠組み",
      lifestyle: "体を整える基本",
      support: "相談できる相手と窓口",
      science: "科学が進む手順",
      levels: "細胞から体への階層",
      genepath: "遺伝情報から体の働きへ",
      genome: "ゲノム編集と細胞技術の違い",
      organoid: "オルガノイドをつくる",
      niche: "幹細胞を支える「ニッチ」",
      tumor: "腫瘍化のリスクを考える",
      threer: "動物実験の3R原則",
      division: "非対称分裂で幹細胞を保つ",
      pipeline: "細胞の加工・品質の流れ",
      cellcycle: "細胞分裂の流れ",
      bloodflow: "血液の循環",
      digestive: "食べ物が体になるまで",
      immune: "免疫がはたらく流れ",
      healing: "組織が治る流れ",
      transplant: "細胞・臓器移植の流れ",
      reprogram: "細胞を別の細胞に変える",
      printing: "組織を「印刷」する流れ",
      scaffold: "足場と細胞で組織をつくる",
      bank: "細胞・試料の保存と供給",
      discovery: "細胞を使った創薬の流れ",
      differentiation: "幹細胞が分化する",
      timeline: "細胞治療の歩み",
      donation: "献血の流れ",
    },
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
    vessel: "血管内",
    tissue: "組織",
    brain: "脳組織",
    bodymap: [
      ["脳", "指令塔。神経系の中枢"],
      ["心臓", "血液を送るポンプ"],
      ["肺", "酸素を取り込む臓器"],
      ["肝臓・腎臓", "代謝と老廃物の処理"],
      ["腸", "栄養の吸収と免疫"],
      ["骨・筋肉", "体を支え動かす組織"],
    ],
    disease: [
      ["要因", "遺伝・生活習慣・加齢などの背景"],
      ["体の変化", "細胞や組織に起きる変化"],
      ["症状", "表面に現れるサイン"],
      ["相談・治療", "受診の目安と治療の選択肢"],
    ],
    lifestyle: [
      ["食事", "体の材料をととのえる"],
      ["運動", "筋肉・骨・心肺を保つ"],
      ["睡眠", "修復と休息の時間"],
      ["健診", "異変を早く見つける"],
    ],
    support: [
      ["自分で確認", "信頼できる情報源で調べる"],
      ["家族に相談", "考え方や体調を共有する"],
      ["制度・窓口", "公的な支援と相談窓口"],
      ["医療機関", "かかりつけ医・専門医に相談"],
    ],
    science: [
      ["観察", "現象を記録する"],
      ["仮説", "説明できる考えを立てる"],
      ["検証", "実験・研究で確かめる"],
      ["共有", "結果を論文などで公開する"],
    ],
    levels: [
      ["細胞", "体の最小の働き手"],
      ["組織", "似た細胞の集まり"],
      ["臓器", "複数の組織が働き合う"],
      ["個体", "臓器が協調して生命を維持"],
    ],
    genepath: [
      ["DNA", "遺伝情報の設計図"],
      ["タンパク質", "体の働きを担う分子"],
      ["細胞の働き", "組織や臓器の活動になる"],
    ],
    genome: [
      ["ゲノム編集", "DNAの配列を書き換える技術"],
      ["細胞技術", "細胞を採取・培養して使う技術"],
    ],
    organoid: [
      ["幹細胞", "出発点となる細胞"],
      ["立体培養", "条件を整え立体的に育てる"],
      ["ミニ臓器", "病気のモデルや薬の評価に使う"],
    ],
    niche: [
      ["幹細胞", "分かれて供給を担う細胞"],
      ["周囲の細胞・基質", "支えて信号を出す環境"],
      ["ニッチ", "幹細胞の働きを保つ微小環境"],
    ],
    tumor: [
      ["増殖の力", "増える性質は治療の鍵でもある"],
      ["残存・腫瘍リスク", "想定外の増殖が起きる可能性"],
      ["安全性試験", "腫瘍化の有無を事前に評価する"],
    ],
    threer: [
      ["Replacement", "代替法の利用"],
      ["Reduction", "動物の数を減らす"],
      ["Refinement", "苦痛を軽減する"],
    ],
    division: [
      ["分裂前", "1個の幹細胞"],
      ["非対称分裂", "2種類の細胞に分かれる"],
      ["分裂後", "幹細胞1個＋分化する細胞1個"],
    ],
    pipeline: ["採取", "培養", "品質確認", "投与"],
    cellcycle: ["DNAの複製", "分裂の準備", "細胞の分裂", "2つの細胞へ"],
    bloodflow: ["肺で酸素を得る", "心臓から送り出す", "全身を巡る", "心臓へ戻る"],
    digestive: ["食べる", "消化する", "吸収する", "体の材料になる"],
    immune: ["異物の侵入", "免疫細胞の検知", "攻撃・調整", "記憶して備える"],
    healing: ["損傷", "炎症", "細胞の再生", "成熟（リモデリング）"],
    transplant: ["提供・採取", "適合の評価", "輸注・移植", "経過観察と生着"],
    reprogram: ["体の細胞", "因子や薬剤で変換", "目的の細胞へ"],
    printing: ["細胞と材料", "3Dデータで設計", "印刷する", "品質を評価"],
    scaffold: ["足場材料", "細胞の定着", "組織らしい構造へ"],
    bank: ["提供", "検査と記録", "凍結保存", "必要時に配布"],
    discovery: ["患者由来の細胞", "薬の候補を評価", "毒性を確認", "治験へ"],
    differentiation: ["幹細胞", "未熟な細胞", "組織をつくる細胞へ"],
    timeline: ["輸血", "臓器移植", "骨髄移植", "細胞治療の時代へ"],
    donation: ["申し込み", "健康チェック", "採血", "患者への輸血に使われる"],
  },
  en: {
    label: "Conceptual diagram",
    titles: {
      approaches: "Three approaches in regenerative medicine",
      flow: "The treatment process",
      evidence: "Research stages and certainty",
      comparison: "Your own cells vs donor cells",
      safety: "Safety points to check",
      biodistribution: "Where infused cells go (conceptual diagram based on animal studies)",
      homing: "How cells move from a vessel into tissue",
      paracrine: "Secreted substances act on neighboring cells",
      bbb: "The blood-brain barrier limits cell passage",
      therapies: "Stem cells, exosomes, and PRP compared",
      celltypes: "Three representative types of stem cells",
      contents: "What a product contains and how it is given",
      cost: "How costs add up",
      checkpoints: "Five points to check",
      repair: "How tissue repair proceeds",
      skinaging: "Skin aging and the research approach",
      routes: "Three administration routes",
      sources: "Where stem cells are collected",
      positioning: "Drugs, surgery, and regenerative medicine",
      riskchain: "Where infection can enter the process",
      eligibility: "How treatment eligibility is considered",
      bodymap: "Main parts of the body and their roles",
      disease: "A framework for thinking about illness",
      lifestyle: "Daily habits that keep the body running",
      support: "People and desks you can consult",
      science: "How science advances",
      levels: "From cells to the whole body",
      genepath: "From genetic information to body function",
      genome: "Genome editing vs cell technology",
      organoid: "How organoids are made",
      niche: "The niche that supports stem cells",
      tumor: "Thinking about tumor risk",
      threer: "The 3Rs of animal research",
      division: "Keeping stem cells by asymmetric division",
      pipeline: "Cell processing and quality",
      cellcycle: "The cell division cycle",
      bloodflow: "Blood circulation",
      digestive: "From food to body material",
      immune: "How immunity works",
      healing: "How tissue heals",
      transplant: "Cell and organ transplantation",
      reprogram: "Converting one cell type into another",
      printing: "Printing tissue",
      scaffold: "Building tissue on a scaffold",
      bank: "Storing and supplying cells and samples",
      discovery: "Drug discovery using cells",
      differentiation: "How stem cells differentiate",
      timeline: "The path to cell therapy",
      donation: "The blood donation process",
    },
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
    vessel: "Inside the vessel",
    tissue: "Tissue",
    brain: "Brain tissue",
    bodymap: [
      ["Brain", "The command center of the nervous system"],
      ["Heart", "The pump that moves blood"],
      ["Lungs", "Take in oxygen"],
      ["Liver and kidneys", "Metabolism and waste handling"],
      ["Gut", "Nutrient absorption and immunity"],
      ["Bone and muscle", "Tissues that support and move the body"],
    ],
    disease: [
      ["Causes", "Backgrounds such as genes, lifestyle, and age"],
      ["Changes in the body", "What happens to cells and tissues"],
      ["Symptoms", "Signs that appear on the surface"],
      ["Consultation and treatment", "When to seek care and the options"],
    ],
    lifestyle: [
      ["Diet", "Supplies the body's building blocks"],
      ["Exercise", "Keeps muscle, bone, and heart-lung function"],
      ["Sleep", "Time for repair and rest"],
      ["Checkups", "Find changes early"],
    ],
    support: [
      ["Check yourself", "Look up reliable sources"],
      ["Talk with family", "Share your thinking and condition"],
      ["Systems and desks", "Public support and consultation services"],
      ["Medical providers", "Ask your own doctors and specialists"],
    ],
    science: [
      ["Observation", "Record the phenomenon"],
      ["Hypothesis", "Form an explanation to test"],
      ["Verification", "Test it in experiments and studies"],
      ["Sharing", "Publish results in papers and reports"],
    ],
    levels: [
      ["Cells", "The smallest workers of the body"],
      ["Tissues", "Groups of similar cells"],
      ["Organs", "Several tissues working together"],
      ["Organism", "Organs in coordination sustaining life"],
    ],
    genepath: [
      ["DNA", "The blueprint of genetic information"],
      ["Proteins", "Molecules that do the body's work"],
      ["Cell activity", "Becomes the function of tissues and organs"],
    ],
    genome: [
      ["Genome editing", "Rewrites the DNA sequence"],
      ["Cell technology", "Collects and cultures cells for use"],
    ],
    organoid: [
      ["Stem cells", "The starting cells"],
      ["3D culture", "Grown under tuned conditions"],
      ["Mini-organ", "Used to model disease and evaluate drugs"],
    ],
    niche: [
      ["Stem cell", "Divides to supply new cells"],
      ["Surrounding cells and matrix", "Support and send signals"],
      ["The niche", "A microenvironment that keeps stemness"],
    ],
    tumor: [
      ["Growth potential", "The ability to multiply is also therapeutic"],
      ["Residual tumor risk", "Unintended growth is possible"],
      ["Safety testing", "Tumorigenicity is evaluated beforehand"],
    ],
    threer: [
      ["Replacement", "Use alternatives where possible"],
      ["Reduction", "Use fewer animals"],
      ["Refinement", "Reduce distress"],
    ],
    division: [
      ["Before division", "One stem cell"],
      ["Asymmetric division", "Splits into two different cells"],
      ["After division", "One stem cell plus one differentiating cell"],
    ],
    pipeline: ["Collection", "Culture", "Quality checks", "Administration"],
    cellcycle: ["DNA replication", "Preparing to divide", "Cell division", "Two cells"],
    bloodflow: ["Oxygen in the lungs", "Pumped out by the heart", "Circulates the body", "Returns to the heart"],
    digestive: ["Eating", "Digestion", "Absorption", "Becomes body material"],
    immune: ["Invaders enter", "Immune cells detect", "Attack and regulate", "Memory is formed"],
    healing: ["Injury", "Inflammation", "Cell regrowth", "Maturation (remodeling)"],
    transplant: ["Donation and collection", "Compatibility evaluation", "Infusion or grafting", "Follow-up and engraftment"],
    reprogram: ["Body cells", "Conversion by factors or drugs", "Becoming target cells"],
    printing: ["Cells and materials", "Design with 3D data", "Print", "Evaluate quality"],
    scaffold: ["Scaffold material", "Cells attach", "Becomes tissue-like structure"],
    bank: ["Donation", "Testing and records", "Frozen storage", "Distributed when needed"],
    discovery: ["Patient-derived cells", "Evaluate drug candidates", "Check toxicity", "Toward clinical trials"],
    differentiation: ["Stem cells", "Immature cells", "Becoming tissue cells"],
    timeline: ["Blood transfusion", "Organ transplantation", "Bone marrow transplant", "The era of cell therapy"],
    donation: ["Sign up", "Health checks", "Blood draw", "Used for patient transfusion"],
  },
  zh: {
    label: "理解用概念图",
    titles: {
      approaches: "再生医学的三种路径",
      flow: "治疗流程",
      evidence: "研究阶段与证据强度",
      comparison: "自体细胞与异体细胞的比较",
      safety: "需要确认的安全性要点",
      biodistribution: "输注细胞的去向（基于动物实验的概念图）",
      homing: "细胞从血管进入组织的过程",
      paracrine: "分泌物质作用于邻近细胞",
      bbb: "血脑屏障限制细胞通过",
      therapies: "干细胞、外泌体与PRP的区别",
      celltypes: "三种代表性干细胞",
      contents: "制剂所含成分与给药途径",
      cost: "费用的构成",
      checkpoints: "需要确认的五个要点",
      repair: "组织修复的过程",
      skinaging: "皮肤老化与研究思路",
      routes: "三种给药途径",
      sources: "干细胞采集来源的比较",
      positioning: "药物、手术与再生医学的定位",
      riskchain: "可能发生感染的环节",
      eligibility: "治疗适用性的判断框架",
      bodymap: "身体的主要部位与功能",
      disease: "理解疾病的框架",
      lifestyle: "维持身体的基本生活习惯",
      support: "可以咨询的对象与渠道",
      science: "科学研究推进的步骤",
      levels: "从细胞到个体的层级",
      genepath: "从遗传信息到身体功能",
      genome: "基因组编辑与细胞技术的区别",
      organoid: "类器官的制备",
      niche: "支撑干细胞的微环境",
      tumor: "成瘤风险的思考",
      threer: "动物实验的3R原则",
      division: "通过非对称分裂保留干细胞",
      pipeline: "细胞加工与质量流程",
      cellcycle: "细胞分裂的过程",
      bloodflow: "血液循环",
      digestive: "食物成为身体材料的过程",
      immune: "免疫发挥作用的过程",
      healing: "组织愈合的过程",
      transplant: "细胞与器官移植的流程",
      reprogram: "将细胞转变为另一种细胞",
      printing: "「打印」组织的过程",
      scaffold: "用支架与细胞构建组织",
      bank: "细胞与样本的保存和供应",
      discovery: "利用细胞进行药物研发",
      differentiation: "干细胞的分化",
      timeline: "细胞治疗的发展历程",
      donation: "献血的流程",
    },
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
    vessel: "血管内",
    tissue: "组织",
    brain: "脑组织",
    bodymap: [
      ["脑", "神经系统的中枢"],
      ["心脏", "输送血液的泵"],
      ["肺", "摄入氧气的器官"],
      ["肝脏・肾脏", "代谢与废物处理"],
      ["肠道", "营养吸收与免疫"],
      ["骨骼・肌肉", "支撑并驱动身体的组织"],
    ],
    disease: [
      ["诱因", "遗传、生活习惯、年龄等背景"],
      ["身体的变化", "细胞和组织发生的变化"],
      ["症状", "表现在外的信号"],
      ["就诊与治疗", "就诊的时机与治疗选择"],
    ],
    lifestyle: [
      ["饮食", "提供身体的原材料"],
      ["运动", "保持肌肉、骨骼与心肺功能"],
      ["睡眠", "修复与休息的时间"],
      ["体检", "及早发现异常"],
    ],
    support: [
      ["自己确认", "查阅可靠的信息来源"],
      ["与家人商量", "分享想法与身体状况"],
      ["制度与咨询", "公共支持与咨询渠道"],
      ["医疗机构", "咨询自己的主治医生和专家"],
    ],
    science: [
      ["观察", "记录现象"],
      ["假设", "提出可以检验的解释"],
      ["验证", "通过实验与研究确认"],
      ["分享", "以论文等形式公开结果"],
    ],
    levels: [
      ["细胞", "身体最小的工作者"],
      ["组织", "相似细胞的集合"],
      ["器官", "多种组织协同工作"],
      ["个体", "器官协调维持生命"],
    ],
    genepath: [
      ["DNA", "遗传信息的设计图"],
      ["蛋白质", "承担身体功能的分子"],
      ["细胞活动", "形成组织与器官的功能"],
    ],
    genome: [
      ["基因组编辑", "改写DNA序列的技术"],
      ["细胞技术", "采集、培养细胞用于医疗"],
    ],
    organoid: [
      ["干细胞", "作为起点的细胞"],
      ["立体培养", "在调控条件下立体生长"],
      ["迷你器官", "用于疾病模型与药物评估"],
    ],
    niche: [
      ["干细胞", "分裂并负责供应的细胞"],
      ["周围细胞与基质", "提供支持与信号的环境"],
      ["微环境", "维持干细胞功能的微小环境"],
    ],
    tumor: [
      ["增殖能力", "增殖既是治疗的关键"],
      ["残留・肿瘤风险", "可能发生预期外的增殖"],
      ["安全性试验", "事先评估是否成瘤"],
    ],
    threer: [
      ["Replacement", "尽可能使用替代方法"],
      ["Reduction", "减少动物数量"],
      ["Refinement", "减轻动物痛苦"],
    ],
    division: [
      ["分裂前", "一个干细胞"],
      ["非对称分裂", "分成两种不同的细胞"],
      ["分裂后", "一个干细胞＋一个分化细胞"],
    ],
    pipeline: ["采集", "培养", "质量确认", "给药"],
    cellcycle: ["DNA复制", "分裂准备", "细胞分裂", "成为两个细胞"],
    bloodflow: ["在肺获得氧", "由心脏泵出", "流经全身", "回到心脏"],
    digestive: ["进食", "消化", "吸收", "成为身体的材料"],
    immune: ["异物侵入", "免疫细胞发现", "攻击与调节", "形成记忆以备下次"],
    healing: ["损伤", "炎症", "细胞再生", "成熟（重塑）"],
    transplant: ["捐献・采集", "相容性评估", "输注・移植", "随访与植入"],
    reprogram: ["体细胞", "经因子或药物转化", "成为目标细胞"],
    printing: ["细胞与材料", "用3D数据设计", "打印", "评估质量"],
    scaffold: ["支架材料", "细胞附着", "形成类组织结构"],
    bank: ["捐献", "检测与记录", "冷冻保存", "需要时配发"],
    discovery: ["患者来源细胞", "评估候选药物", "确认毒性", "走向临床试验"],
    differentiation: ["干细胞", "未成熟细胞", "成为组织细胞"],
    timeline: ["输血", "器官移植", "骨髓移植", "进入细胞治疗时代"],
    donation: ["报名", "健康检查", "采血", "用于患者输血"],
  },
} as const;

export function ArticleVisual({ slug, locale = "ja", category }: { slug: string; locale?: ArticleVisualLocale; category?: string }) {
  let kind = visualBySlug[slug];
  if (!kind && category) {
    const fallback = defaultVisualFor(category, slug);
    if (fallback && isVisualKind(fallback)) kind = fallback;
  }
  if (!kind) return null;
  const text = copy[locale];

  return (
    <figure className={`article-visual article-visual-${kind}`}>
      <div className="article-visual-heading">
        <span>{text.titles[kind] ?? text.label}</span>
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
      {kind === "biodistribution" && <BiodistributionDiagram text={text} />}
      {kind === "homing" && <HomingDiagram text={text} />}
      {kind === "paracrine" && <ParacrineDiagram text={text} />}
      {kind === "bbb" && <BbbDiagram text={text} />}
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
      {kind === "bodymap" && <BodymapDiagram text={text} />}
      {isCardKind(kind) && (
        <div className="visual-cards">
          {text[kind].map(([label, desc]) => (
            <div className="visual-card visual-card-labeled" key={label}>
              <b>{label}</b>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      )}
      {isFlowKind(kind) && (
        <div className="visual-flow">
          {text[kind].map((item: string, index: number) => <div className="visual-flow-step" key={item}><b>{index + 1}</b><span>{item}</span></div>)}
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

type VisualCopy = (typeof copy)[keyof typeof copy];

function BiodistributionDiagram({ text }: { text: VisualCopy }) {
  const rows = text.distribution;
  return (
    <svg className="visual-svg" viewBox="0 0 680 250" role="img" aria-label={text.titles.biodistribution}>
      {/* 点滴 */}
      <g>
        <rect x="38" y="52" width="40" height="56" rx="7" fill="#e8efe4" stroke="#718b68" strokeWidth="1.5" />
        <line x1="58" y1="52" x2="58" y2="38" stroke="#718b68" strokeWidth="2" />
        <line x1="58" y1="108" x2="58" y2="150" stroke="#718b68" strokeWidth="2" />
        <path d="M58 150 l-6 14 l6 8 l6 -8 z" fill="#718b68" />
        <text x="58" y="88" textAnchor="middle" fontSize="11" fill="#4f614b">{rows[0][0]}</text>
      </g>
      {/* 肺への太い矢印（大部分） */}
      <path d="M92 122 L178 122" stroke="#718b68" strokeWidth="7" fill="none" markerEnd="url(#arrowBig)" />
      {/* 肺 */}
      <g>
        <ellipse cx="222" cy="105" rx="34" ry="46" fill="#d9e8d5" stroke="#718b68" strokeWidth="1.5" />
        <ellipse cx="272" cy="105" rx="34" ry="46" fill="#d9e8d5" stroke="#718b68" strokeWidth="1.5" />
        <ellipse cx="230" cy="96" rx="4" ry="4" fill="#718b68" />
        <ellipse cx="262" cy="112" rx="4" ry="4" fill="#718b68" />
        <ellipse cx="243" cy="126" rx="4" ry="4" fill="#718b68" />
        <ellipse cx="255" cy="86" rx="4" ry="4" fill="#718b68" />
        <text x="247" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#4f614b">{rows[1][0]}</text>
        <text x="247" y="200" textAnchor="middle" fontSize="11" fill="#718b68">{rows[1][1]}（{rows[1][2]}）</text>
      </g>
      {/* 肝・脾への中程度の矢印（一部） */}
      <path d="M300 122 L388 122" stroke="#9caf91" strokeWidth="4" fill="none" markerEnd="url(#arrowMid)" strokeDasharray="none" />
      {/* 肝臓・脾臓 */}
      <g>
        <rect x="400" y="86" width="104" height="66" rx="14" fill="#eef3e9" stroke="#9caf91" strokeWidth="1.5" />
        <ellipse cx="428" cy="116" rx="4" ry="4" fill="#9caf91" />
        <ellipse cx="466" cy="126" rx="4" ry="4" fill="#9caf91" />
        <text x="452" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#4f614b">{rows[2][0]}</text>
        <text x="452" y="200" textAnchor="middle" fontSize="11" fill="#718b68">{rows[2][1]}（{rows[2][2]}）</text>
      </g>
      {/* 損傷組織への細い破線矢印（ごく一部） */}
      <path d="M516 122 L566 122" stroke="#c2cdb8" strokeWidth="2" strokeDasharray="6 5" fill="none" markerEnd="url(#arrowSmall)" />
      {/* 損傷組織 */}
      <g>
        <path d="M604 92 l8 16 18 2 -13 12 4 18 -17 -9 -17 9 4 -18 -13 -12 18 -2 z" fill="#fdf0d8" stroke="#c9a24a" strokeWidth="1.5" />
        <text x="604" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#4f614b">{rows[3][0]}</text>
        <text x="604" y="200" textAnchor="middle" fontSize="11" fill="#718b68">{rows[3][1]}（{rows[3][2]}）</text>
      </g>
      <defs>
        <marker id="arrowBig" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#718b68" /></marker>
        <marker id="arrowMid" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#9caf91" /></marker>
        <marker id="arrowSmall" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#c2cdb8" /></marker>
      </defs>
    </svg>
  );
}

function HomingDiagram({ text }: { text: VisualCopy }) {
  const steps = text.homingSteps;
  const cellXs = [95, 235, 375, 515];
  return (
    <svg className="visual-svg" viewBox="0 0 680 250" role="img" aria-label={text.titles.homing}>
      {/* 血管 */}
      <rect x="20" y="52" width="600" height="92" fill="#fbf6ee" stroke="#d8ccb8" strokeWidth="1" />
      <rect x="20" y="52" width="600" height="7" fill="#d8ccb8" />
      <rect x="20" y="137" width="600" height="7" fill="#d8ccb8" />
      <text x="30" y="46" fontSize="11" fill="#a08d6f">{text.vessel}</text>
      {/* 組織 */}
      <rect x="20" y="168" width="600" height="52" fill="#f0e9df" />
      <text x="30" y="196" fontSize="11" fill="#a08d6f">{text.tissue}</text>
      {/* 細胞：移動→弱接着→強接着→通過 */}
      {cellXs.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={i === 0 ? 96 : i === 1 ? 108 : i === 2 ? 116 : 128} r="16" fill="#dfe9d8" stroke="#718b68" strokeWidth="1.5" />
          <circle cx={x} cy={i === 0 ? 96 : i === 1 ? 108 : i === 2 ? 116 : 128} r="7" fill="#9caf91" />
          <circle cx={x} cy={72} r="10" fill="#718b68" />
          <text x={x} y={76} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">{i + 1}</text>
          <text x={x} y={i === 3 ? 158 : i === 0 ? 88 : 84} textAnchor="middle" fontSize="10" fill="#5b6b57">
            {steps[i]}
          </text>
          {i < 3 && <path d={`M${x + 20} ${i === 0 ? 96 : i === 1 ? 108 : 116} L${cellXs[i + 1] - 22} ${i + 1 === 1 ? 108 : i + 1 === 2 ? 116 : 128}`} stroke="#b7c4ae" strokeWidth="1.5" strokeDasharray="4 4" />}
        </g>
      ))}
      {/* 組織への移行 */}
      <path d="M515 148 L515 186" stroke="#718b68" strokeWidth="2" markerEnd="url(#arrowMid)" />
      <circle cx="515" cy="196" r="14" fill="#dfe9d8" stroke="#718b68" strokeWidth="1.5" />
      <circle cx="515" cy="196" r="6" fill="#9caf91" />
      <circle cx="515" cy="72" r="10" fill="#718b68" />
      <text x="515" y="76" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">5</text>
      <text x="560" y="196" fontSize="10" fill="#5b6b57">{steps[4]}</text>
      <defs>
        <marker id="arrowMid" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#718b68" /></marker>
      </defs>
    </svg>
  );
}

function ParacrineDiagram({ text }: { text: VisualCopy }) {
  return (
    <svg className="visual-svg" viewBox="0 0 680 240" role="img" aria-label={text.titles.paracrine}>
      {/* 投与された細胞 */}
      <g>
        <circle cx="110" cy="105" r="54" fill="#d9e8d5" stroke="#718b68" strokeWidth="2" />
        <circle cx="110" cy="105" r="24" fill="#9caf91" />
        <text x="110" y="196" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4f614b">{text.paracrineLeft}</text>
      </g>
      {/* 分泌される物質 */}
      <g fill="#718b68">
        <circle cx="210" cy="76" r="4" /><circle cx="240" cy="64" r="4" />
        <circle cx="222" cy="104" r="4" /><circle cx="258" cy="98" r="4" />
        <circle cx="206" cy="134" r="4" /><circle cx="246" cy="142" r="4" />
        <circle cx="292" cy="70" r="4" /><circle cx="310" cy="112" r="4" /><circle cx="288" cy="148" r="4" />
      </g>
      <path d="M180 82 C 260 60, 330 62, 430 78" stroke="#9caf91" strokeWidth="2" fill="none" markerEnd="url(#arrowMid)" />
      <path d="M180 128 C 260 150, 330 148, 430 132" stroke="#9caf91" strokeWidth="2" fill="none" markerEnd="url(#arrowMid)" />
      <text x="305" y="40" textAnchor="middle" fontSize="11" fill="#5b6b57">{text.paracrineCenter}</text>
      {/* 周囲の細胞 */}
      <g>
        <circle cx="500" cy="72" r="30" fill="#eef3e9" stroke="#9caf91" strokeWidth="1.5" />
        <circle cx="500" cy="72" r="12" fill="#c2cdb8" />
        <circle cx="512" cy="146" r="30" fill="#eef3e9" stroke="#9caf91" strokeWidth="1.5" />
        <circle cx="512" cy="146" r="12" fill="#c2cdb8" />
        <text x="506" y="196" textAnchor="middle" fontSize="12" fontWeight="700" fill="#4f614b">{text.paracrineRight}</text>
      </g>
      <defs>
        <marker id="arrowMid" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#9caf91" /></marker>
      </defs>
    </svg>
  );
}

function BodymapDiagram({ text }: { text: VisualCopy }) {
  const labels = text.bodymap;
  return (
    <svg className="visual-svg" viewBox="0 0 680 250" role="img" aria-label={text.titles.bodymap}>
      {/* 人体シルエット */}
      <g fill="#d9e8d5" stroke="#718b68" strokeWidth="1.5">
        <circle cx="95" cy="44" r="26" />
        <path d="M65 78 q30 -10 60 0 l6 78 q0 14 -10 22 l-4 56 q-2 10 -12 10 h-20 q-10 0 -12 -10 l-4 -56 q-10 -8 -10 -22 z" />
        <rect x="44" y="82" width="14" height="78" rx="7" />
        <rect x="132" y="82" width="14" height="78" rx="7" />
      </g>
      {/* 臓器ドット */}
      <g>
        <circle cx="95" cy="46" r="7" fill="#9caf91" />
        <circle cx="95" cy="104" r="7" fill="#9caf91" />
        <circle cx="95" cy="128" r="7" fill="#9caf91" />
        <circle cx="95" cy="154" r="7" fill="#9caf91" />
        <circle cx="95" cy="208" r="7" fill="#9caf91" />
        <circle cx="139" cy="116" r="7" fill="#9caf91" />
      </g>
      {/* 引き出し線とラベル（左列3、右列3） */}
      <g fontSize="12">
        {labels.map(([name, desc], i) => {
          const col = i < 3 ? 0 : 1;
          const row = i % 3;
          const x = 210 + col * 235;
          const y = 62 + row * 62;
          return (
            <g key={name}>
              <rect x={x} y={y - 24} width="215" height="46" rx="8" fill="#f6f8f2" stroke="#dfe7d8" />
              <circle cx={x + 16} cy={y - 1} r="6" fill="#718b68" />
              <text x={x + 30} y={y - 5} fontWeight="700" fill="#4f614b">{name}</text>
              <text x={x + 30} y={y + 13} fill="#718b68" fontSize="10">{desc}</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function BbbDiagram({ text }: { text: VisualCopy }) {
  return (
    <svg className="visual-svg" viewBox="0 0 680 240" role="img" aria-label={text.titles.bbb}>
      {/* 血管 */}
      <rect x="60" y="46" width="520" height="80" fill="#fbf6ee" stroke="#d8ccb8" strokeWidth="1" />
      <text x="70" y="40" fontSize="11" fill="#a08d6f">{text.vessel}</text>
      {/* BBBの壁 */}
      <rect x="60" y="126" width="520" height="14" fill="#c9a24a" opacity="0.85" />
      <text x="72" y="136" fontSize="10" fill="#fff" fontWeight="700">{text.bbbSteps[1]}</text>
      {/* 脳組織 */}
      <rect x="60" y="170" width="520" height="50" fill="#eef3e9" rx="10" />
      <text x="72" y="199" fontSize="11" fill="#5b6b57">{text.brain}</text>
      {/* 血管内の細胞（ほとんどが通過できない） */}
      <g>
        <circle cx="180" cy="86" r="16" fill="#dfe9d8" stroke="#718b68" strokeWidth="1.5" />
        <circle cx="180" cy="86" r="7" fill="#9caf91" />
        <circle cx="300" cy="96" r="16" fill="#dfe9d8" stroke="#718b68" strokeWidth="1.5" />
        <circle cx="300" cy="96" r="7" fill="#9caf91" />
        <circle cx="420" cy="86" r="16" fill="#dfe9d8" stroke="#718b68" strokeWidth="1.5" />
        <circle cx="420" cy="86" r="7" fill="#9caf91" />
        {/* 通過を妨げられる印 */}
        <text x="300" y="126" textAnchor="middle" fontSize="16" fill="#c9a24a" fontWeight="700">✕</text>
        {/* ごく一部が通過 */}
        <circle cx="520" cy="158" r="7" fill="#dfe9d8" stroke="#718b68" strokeWidth="1.5" />
        <circle cx="520" cy="196" r="7" fill="#dfe9d8" stroke="#718b68" strokeWidth="1.5" />
      </g>
      <text x="180" y="60" fontSize="10" fill="#5b6b57">{text.bbbSteps[0]}</text>
      <text x="560" y="196" fontSize="10" fill="#5b6b57">{text.bbbSteps[2]}</text>
    </svg>
  );
}
