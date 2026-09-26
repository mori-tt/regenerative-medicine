// 下層カテゴリ（サブカテゴリ）定義。
// 各カテゴリ内で記事を検索意図別のグループに分け、
// 配列の先頭から優先度の高い順に並べる（先頭グループ＝そのカテゴリの「まず読む」導線）。
// slugs に含まれない記事は最後の catch-all グループに自動的に回る。

export type SubcategoryGroup = {
  key: string;
  ja: string;
  en: string;
  zh: string;
  desc?: { ja: string; en: string; zh: string };
  slugs: string[];
};

export const subcategories: Record<string, SubcategoryGroup[]> = {
  "stem-basics": [
    {
      key: "stem-cell-fundamentals",
      ja: "幹細胞と再生医療の基本",
      en: "Stem cells and regenerative medicine",
      zh: "干细胞与再生医学基础",
      desc: { ja: "幹細胞の定義・種類・再生医療の成り立ちを最初に押さえる記事群です。", en: "Foundational articles on what stem cells are and how regenerative medicine began.", zh: "干细胞定义、种类与再生医学起源的基础文章。" },
      slugs: [
        "what-is-stem-cell",
        "what-is-regenerative-medicine",
        "stem-cell-types",
        "three-approaches",
        "stem-cell-treatment-contents",
        "ips-cells-explained",
        "es-cells-explained",
        "somatic-stem-cells",
        "regenerative-medicine-history",
        "cells-tissues-organs",
        "next-steps-after-basics",
      ],
    },
    {
      key: "body-mechanisms",
      ja: "体のしくみの基礎",
      en: "How the body works",
      zh: "身体机制基础",
      desc: { ja: "細胞の分裂・遺伝子・組織の修復など、体の働きの基礎を整理します。", en: "Cell division, genes, and tissue repair — the body's basic mechanics.", zh: "细胞分裂、基因与组织修复等身体机制的基础整理。" },
      slugs: [
        "cell-division",
        "genes-and-cells",
        "skin-bone-cartilage",
      ],
    },
    {
      key: "health-and-life",
      ja: "健康と暮らし",
      en: "Health and daily life",
      zh: "健康与日常生活",
      desc: { ja: "高齢化社会や暮らしの中での医療の位置づけを考えます。", en: "How medicine fits into an aging society and daily life.", zh: "老龄化社会与日常生活中医疗的定位。" },
      slugs: [
        "aging-society",
      ],
    },
  ],
  "health-basics": [
    {
      key: "body-systems",
      ja: "体のしくみと器官",
      en: "Body systems & organs",
      zh: "身体机制与器官",
      desc: { ja: "血液・循環・脳・肝腎など、体の器官の働きを整理します。", en: "How organs like the blood, circulation, brain, and liver work.", zh: "血液、循环、脑、肝肾等器官机制的整理。" },
      slugs: [
        "blood-basics", "dna-basics", "proteins-basics", "nerve-muscle-heart",
        "digestion-absorption", "circulation", "respiration", "kidney-liver",
        "brain-basics", "senses", "teeth-bones-growth", "hormones",
        "lymph-system", "body-water", "cell-sizes", "blood-types",
        "joints-basics", "microscope-world",
      ],
    },
    {
      key: "common-illness",
      ja: "身近な病気とけが",
      en: "Common conditions & injuries",
      zh: "常见疾病与外伤",
      desc: { ja: "がん・糖尿病・認知症など、身近な病気と細胞の関係を解説します。", en: "Common diseases and their connection to cells.", zh: "癌症、糖尿病、认知症等常见疾病与细胞的关系。" },
      slugs: [
        "cancer-basics", "diabetes-lifestyle", "allergy-basics", "antibodies-vaccines",
        "osteoporosis-basics", "dementia-basics", "stroke-basics", "heart-attack-basics",
        "thyroid-disease-basics", "anemia-basics", "blood-pressure-basics", "cholesterol-basics",
        "fever-basics", "pain-basics", "fracture-healing", "microbiome",
      ],
    },
    {
      key: "daily-health",
      ja: "暮らしと健康習慣",
      en: "Daily health & lifestyle",
      zh: "日常生活与健康习惯",
      desc: { ja: "食事・運動・睡眠・健診など、日々の健康の土台を扱います。", en: "Everyday health foundations — diet, exercise, sleep, checkups.", zh: "饮食、运动、睡眠、体检等日常健康基础。" },
      slugs: [
        "nutrition-basics", "exercise-basics", "sleep-basics", "mental-health-decision",
        "health-checkups", "family-doctor", "rehabilitation-basics", "disabilities-support",
        "heatstroke-dehydration", "thermometer-guide", "blood-donation-basics",
      ],
    },
  ],
  "in-body": [
    {
      key: "how-administered",
      ja: "投与方法と経路",
      en: "How cells are administered",
      zh: "给药方式与途径",
      desc: { ja: "点滴・局所注射・動脈投与など、細胞の入れ方を整理します。", en: "How cells are administered — IV, local injection, arterial routes.", zh: "点滴、局部注射、动脉给药等给药途径的整理。" },
      slugs: ["stem-cell-administration-routes", "stem-cell-treatment-contents"],
    },
    {
      key: "after-infusion",
      ja: "投与後の体内での動き",
      en: "What happens after infusion",
      zh: "输注后的体内动向",
      desc: { ja: "投与された細胞が体内でどう動くかを追います。", en: "What happens to cells once inside the body.", zh: "输注后细胞在体内的动向。" },
      slugs: [
        "iv-stem-cell-journey",
        "stem-cell-biodistribution",
        "stem-cell-survival",
      ],
    },
    {
      key: "where-they-reach",
      ja: "行き先と届き方",
      en: "Where cells reach and how",
      zh: "到达部位与机制",
      desc: { ja: "細胞がどの臓器に集まるか、脳に届くかを考えます。", en: "Where cells accumulate, and whether they reach the brain.", zh: "细胞聚集在哪些器官、能否到达大脑。" },
      slugs: [
        "stem-cell-homing",
        "stem-cell-brain-bbb",
        "body-repair-mechanisms",
      ],
    },
  ],
  "anti-aging": [
    {
      key: "scientific-evidence",
      ja: "科学的な検証状況",
      en: "Scientific evidence",
      zh: "科学验证现状",
      desc: { ja: "抗老化・若返りの研究がどこまで進んでいるかを整理します。", en: "What anti-aging research has and hasn't established.", zh: "抗衰老与“年轻化”研究的进展程度。" },
      slugs: ["stem-cell-antiaging-evidence", "stem-cell-skin-aging"],
    },
    {
      key: "aesthetic-offerings",
      ja: "美容医療の実態",
      en: "Aesthetic offerings",
      zh: "美容医疗的实际情况",
      desc: { ja: "美容目的の提供の現状と、確認すべき点をまとめます。", en: "Cosmetic offerings — what's available and what to check.", zh: "美容类服务的现状与应确认事项。" },
      slugs: [
        "stem-cell-cosmetic-medicine",
        "exosome-cosmetic-claims",
        "age-and-regeneration",
      ],
    },
  ],
  efficacy: [
    {
      key: "efficacy-status",
      ja: "効果の検証状況",
      en: "Evidence for effectiveness",
      zh: "疗效的验证现状",
      desc: { ja: "承認・届出・研究の違いと、効果の確かさの見方です。", en: "Approval vs filing vs research — and how to read claims of benefit.", zh: "批准、申报、研究的区别与疗效确凿性的解读。" },
      slugs: [
        "stem-cell-efficacy-evidence",
        "stem-cell-effect-duration",
        "myths-and-facts",
        "approved-products-japan",
        "world-products",
      ],
    },
    {
      key: "research-stages",
      ja: "研究の段階と種類",
      en: "Research stages and types",
      zh: "研究阶段与类型",
      desc: { ja: "基礎研究から臨床試験まで、段階ごとの意味を整理します。", en: "From bench to bedside — what each research stage means.", zh: "从基础研究到临床试验各阶段的意义。" },
      slugs: [
        "stages-of-research",
        "evidence-levels",
        "randomized-trials",
        "case-reports-registries",
        "endpoints",
        "negative-trials",
        "long-term-followup",
        "first-in-human",
        "expanded-access",
        "decentralized-trials",
        "basket-trials",
        "digital-therapeutics",
      ],
    },
    {
      key: "reading-research",
      ja: "研究情報の読み方",
      en: "How to read research",
      zh: "研究信息的阅读方法",
      desc: { ja: "ニュース・論文・登録情報の読み方を解説します。", en: "How to read research news, papers, and registries.", zh: "新闻、论文与注册信息的解读方法。" },
      slugs: [
        "reading-research-news",
        "press-release-reading",
        "statistics-intro",
        "conflict-of-interest",
        "peer-review",
        "guideline-reading",
        "package-insert",
        "rwd-basics",
        "how-to-find-trials",
        "predatory-journals",
        "retractions",
        "open-access",
        "impact-factor",
      ],
    },
  ],
  safety: [
    {
      key: "treatment-risks",
      ja: "治療のリスク",
      en: "Treatment risks",
      zh: "治疗风险",
      desc: { ja: "起こりうるリスクと、説明で確認すべき点を整理します。", en: "Possible risks and what to confirm in explanations.", zh: "可能发生的风险与说明中应确认的点。" },
      slugs: [
        "risks-and-safety",
        "iv-stem-cell-safety",
        "autologous-safety",
        "stem-cell-infection-risk",
        "tumorigenicity-safety",
        "hla-rejection",
      ],
    },
    {
      key: "eligibility",
      ja: "受けられるかの判断",
      en: "Eligibility",
      zh: "适用性判断",
      desc: { ja: "受けられる条件・禁忌・主治医との相談について。", en: "Eligibility, contraindications, and consulting your doctor.", zh: "可接受治疗的条件、禁忌与主治医生的咨询。" },
      slugs: ["stem-cell-contraindications", "questions-before-treatment"],
    },
    {
      key: "trouble-and-relief",
      ja: "トラブル時と救済制度",
      en: "Troubles and relief systems",
      zh: "出现问题与救济制度",
      desc: { ja: "困ったときの相談先と救済制度をまとめます。", en: "Where to turn when things go wrong, and relief systems.", zh: "遇到问题时的咨询渠道与救济制度。" },
      slugs: ["trouble-help", "drug-side-effect-relief-system"],
    },
  ],
  "cell-types": [
    {
      key: "cell-kinds",
      ja: "細胞の種類",
      en: "Types of cells",
      zh: "细胞的种类",
      desc: { ja: "造血・間葉系・iPS・ESなど、細胞の種類ごとの違いです。", en: "Hematopoietic, MSC, iPS, ES — how cell types differ.", zh: "造血、间充质、iPS、ES等细胞种类的差异。" },
      slugs: [
        "mesenchymal-basics",
        "adipose-stem",
        "hematopoietic-transplant",
        "neural-stem-cells",
        "tissue-stem-cells",
        "satellite-cells",
        "intestinal-stem",
        "bone-marrow-system",
        "liver-progenitor",
      ],
    },
    {
      key: "collection-sources",
      ja: "採取源の違い",
      en: "Collection sources",
      zh: "采集来源的差异",
      desc: { ja: "骨髄・脂肪・臍帯など、採取元による違いを整理します。", en: "Bone marrow, fat, cord — how sources differ.", zh: "骨髓、脂肪、脐带等采集来源的差异。" },
      slugs: [
        "stem-cell-sources",
        "bone-marrow-vs-adipose",
        "umbilical-cord-tissue-cells",
        "cord-blood-cells",
        "pregnancy-cordblood",
        "dental-pulp-stem",
        "placenta-cells",
      ],
    },
    {
      key: "self-vs-donor",
      ja: "自家と他家",
      en: "Autologous vs allogeneic",
      zh: "自体与异体",
      desc: { ja: "自分の細胞か他人の細胞か、利点と注意点です。", en: "Your own cells vs donor cells — trade-offs to know.", zh: "自体细胞与异体细胞的利弊与注意点。" },
      slugs: [
        "autologous-allogeneic",
        "self-vs-donor-cells",
        "ips-stock",
        "ips-donation",
        "cell-banks-guide",
      ],
    },
    {
      key: "culture-and-quality",
      ja: "培養と品質管理",
      en: "Culture and quality",
      zh: "培养与质量管理",
      desc: { ja: "培養・品質管理・届出の仕組みを解説します。", en: "Culture, quality control, and facility filings.", zh: "培养、质量管理与申报制度。" },
      slugs: [
        "cell-culture-and-quality",
        "culture-media",
        "cryopreservation",
        "bioreactors",
        "cell-sorting",
        "differentiation-purification",
        "cell-processing-license-system",
      ],
    },
  ],
  "compare-therapies": [
    {
      key: "cell-free-therapies",
      ja: "細胞なし・血液由来の治療",
      en: "Cell-free and blood-derived therapies",
      zh: "无细胞与血液来源疗法",
      desc: { ja: "エクソソーム・PRPなど、細胞を使わない治療との違いです。", en: "Exosomes, PRP, and other cell-free approaches.", zh: "外泌体、PRP等不使用细胞的治疗方式。" },
      slugs: ["stemcell-exosome-prp", "exosomes-notes", "prp-therapy-basics"],
    },
    {
      key: "vs-conventional",
      ja: "従来治療との比較",
      en: "Compared with standard care",
      zh: "与常规疗法的比较",
      desc: { ja: "標準治療との比較で考える、再生医療の位置づけです。", en: "Regenerative medicine next to standard care.", zh: "与标准治疗相比较下的再生医学定位。" },
      slugs: ["drugs-surgery-comparison"],
    },
  ],
  "cost-access": [
    {
      key: "cost-and-coverage",
      ja: "費用と保険",
      en: "Costs and coverage",
      zh: "费用与保险",
      desc: { ja: "自由診療の費用・保険・税制度を整理します。", en: "Private-care costs, insurance, and tax treatment.", zh: "自费诊疗的费用、保险与税务制度。" },
      slugs: [
        "cost-and-insurance",
        "insurance-care",
        "jibihi-contract",
        "cost-simulation",
        "high-cost-care",
        "tax-deduction",
        "insurance-review",
        "medical-payment-help",
        "insurance-card-guide",
        "generic-drugs",
      ],
    },
    {
      key: "before-consultation",
      ja: "受診前の準備と確認",
      en: "Preparation before visiting",
      zh: "就诊前的准备与确认",
      desc: { ja: "受診前の準備・質問の仕方・説明の受け方です。", en: "Preparing for consultations and asking the right questions.", zh: "就诊前的准备、提问方式与听取说明的方法。" },
      slugs: [
        "five-points-before-treatment",
        "hospital-choice",
        "informed-consent-howto",
        "first-visit-prep",
        "treatment-flow",
        "second-opinion",
        "final-checklist",
        "hospital-words",
        "referral-letters",
        "medical-records",
        "treatment-eligibility-process",
        "clinical-trials-guide",
        "online-care",
        "emergency-care",
        "decision-aids",
      ],
    },
    {
      key: "spotting-ads",
      ja: "広告・情報の見分け方",
      en: "Reading ads and claims",
      zh: "广告与信息的辨别",
      desc: { ja: "広告表現の規制と、疑わしい表現の見分け方です。", en: "How medical advertising is regulated, and red flags.", zh: "医疗广告的规制与可疑表述的辨别。" },
      slugs: ["advertising-literacy", "before-after-ad-regulation"],
    },
    {
      key: "during-and-after",
      ja: "治療中・治療後",
      en: "During and after treatment",
      zh: "治疗中与治疗后",
      desc: { ja: "治療中・治療後の経過観察と生活の整え方です。", en: "Follow-up care and daily life during and after treatment.", zh: "治疗中・治疗后的随访与生活安排。" },
      slugs: [
        "aftercare",
        "rehab-after-treatment",
        "pain-burden",
        "treatment-diary",
        "reviewing-treatment",
        "oral-care-during",
        "distant-travel-care",
        "pharmacy-use",
        "drug-allergy-record",
        "medicine-storage",
      ],
    },
    {
      key: "life-and-support",
      ja: "暮らし・制度・支援",
      en: "Daily life and support systems",
      zh: "生活・制度与支持",
      desc: { ja: "仕事・介護・家族など、制度と支援の使い方です。", en: "Work, caregiving, family — systems and support.", zh: "工作、护理、家庭相关的制度与支援。" },
      slugs: [
        "family-discussion",
        "family-decision",
        "elderly-points",
        "children-points",
        "work-balance",
        "childcare-balance",
        "patient-groups",
        "counseling-support",
        "palliative-care",
        "nursing-care-link",
        "home-care",
        "nursing-care-certification",
        "work-injury-insurance",
        "driving-illness",
        "medical-accident-system",
        "vaccination-adult",
        "dental-visit-guide",
        "assistive-devices",
        "home-safety-elderly",
        "first-aid-basics",
        "language-support",
        "advance-directives",
        "patient-rights",
      ],
    },
  ],
  mechanisms: [
    {
      key: "cell-mechanisms",
      ja: "細胞の働きと作用機序",
      en: "Cellular mechanisms",
      zh: "细胞的作用机制",
      desc: { ja: "幹細胞が働く仕組み（分化・分泌・ニッチ）を解説します。", en: "How stem cells may act — differentiation, secretion, niches.", zh: "干细胞的作用机制（分化、分泌、微环境）。" },
      slugs: [
        "stem-cell-mechanism",
        "paracrine-effect",
        "msc-secretome",
        "msc-immunomodulation",
        "cell-signaling",
        "growth-factors",
        "cell-cycle",
        "asymmetric-division",
        "stemcell-niche",
        "differentiation-basics",
        "immune-basics",
      ],
    },
    {
      key: "regeneration-research",
      ja: "再生の研究テーマ",
      en: "Regeneration research topics",
      zh: "再生研究主题",
      desc: { ja: "臓器ごとの再生研究の進み具合を整理します。", en: "Progress in regeneration research, organ by organ.", zh: "各器官再生研究的进展程度。" },
      slugs: [
        "future-perspectives",
        "bench-to-bedside",
        "organoids-intro",
        "ips-drug-discovery",
        "genome-editing-difference",
        "scaffolds",
        "bioprinting",
        "corneal-regeneration",
        "cartilage-repair-deep",
        "tendon-ligament",
        "hair-regeneration",
        "tooth-regeneration",
        "inner-ear-regeneration",
        "retina-regeneration",
        "spinal-cord-detail",
        "heart-sheet-detail",
        "direct-reprogramming",
        "pancreas-progenitor",
        "kidney-progenitor",
        "lung-regeneration",
        "disc-regeneration",
        "vessel-regeneration",
        "organ-transplant-basics",
        "overseas-research",
      ],
    },
    {
      key: "science-and-society",
      ja: "科学との関わり方",
      en: "Engaging with science",
      zh: "与科学的关系",
      desc: { ja: "ノーベル賞・学会・倫理など、科学と社会の接点です。", en: "Prizes, societies, and ethics — science meets society.", zh: "诺贝尔奖、学会、伦理等科学与社会的交汇。" },
      slugs: [
        "japanese-society-for-regenerative-medicine",
        "ips-nobel-story",
        "nobel-prize-guide",
        "science-events",
        "organoid-ethics",
        "home-culture-myth",
        "animal-testing-3rs",
        "biobank-basics",
      ],
    },
  ],
};

export type GroupedArticles<T extends { slug: string }> = {
  group: SubcategoryGroup;
  articles: T[];
};

/** カテゴリ内の記事をサブカテゴリ順・優先度順にグルーピングする。
 *  未分類の記事は最後に「その他」グループとして返す。 */
export function groupArticlesBySubcategory<T extends { slug: string }>(
  category: string,
  list: T[],
  fallbackLabel: { ja: string; en: string; zh: string },
): GroupedArticles<T>[] {
  const groups = subcategories[category] ?? [];
  const bySlug = new Map(list.map((a) => [a.slug, a]));
  const used = new Set<string>();
  const result: GroupedArticles<T>[] = [];

  for (const group of groups) {
    const articlesInGroup = group.slugs
      .filter((slug) => {
        const has = bySlug.has(slug);
        if (has) used.add(slug);
        return has;
      })
      .map((slug) => bySlug.get(slug)!);
    if (articlesInGroup.length > 0) {
      result.push({ group, articles: articlesInGroup });
    }
  }

  const rest = list.filter((a) => !used.has(a.slug));
  if (rest.length > 0) {
    result.push({
      group: { key: "others", ...fallbackLabel, slugs: [] },
      articles: rest,
    });
  }
  return result;
}

/** カテゴリの「まず読む」記事（各サブカテゴリ先頭から優先順に picks 件）。 */
export function featuredSlugs(category: string, picks = 3): string[] {
  const groups = subcategories[category] ?? [];
  const out: string[] = [];
  for (const g of groups) {
    for (const slug of g.slugs) {
      if (out.length >= picks) return out;
      out.push(slug);
    }
  }
  return out;
}

/** 記事が属するサブカテゴリを返す（未定義なら undefined）。 */
export function subcategoryOf(category: string, slug: string): SubcategoryGroup | undefined {
  return (subcategories[category] ?? []).find((g) => g.slugs.includes(slug));
}

/** サブカテゴリごとのデフォルト図版（article-visuals の VisualKind 名）。 */
const subcategoryVisual: Record<string, string[]> = {
  "stem-basics/stem-cell-fundamentals": ["celltypes", "levels"],
  "stem-basics/body-mechanisms": ["bodymap", "levels"],
  "stem-basics/common-diseases": ["disease", "support"],
  "stem-basics/health-and-life": ["lifestyle", "support"],
  "health-basics/body-systems": ["bodymap", "levels"],
  "health-basics/common-illness": ["disease", "support"],
  "health-basics/daily-health": ["lifestyle", "support"],
  "in-body/how-administered": ["routes", "biodistribution"],
  "in-body/after-infusion": ["biodistribution", "homing"],
  "in-body/where-they-reach": ["homing", "biodistribution"],
  "anti-aging/scientific-evidence": ["skinaging", "evidence"],
  "anti-aging/aesthetic-offerings": ["checkpoints", "therapies"],
  "efficacy/efficacy-status": ["evidence", "repair"],
  "efficacy/research-stages": ["evidence", "timeline"],
  "efficacy/reading-research": ["evidence", "science"],
  "safety/treatment-risks": ["riskchain", "eligibility"],
  "safety/eligibility": ["eligibility", "checkpoints"],
  "safety/trouble-and-relief": ["support", "checkpoints"],
  "cell-types/cell-kinds": ["celltypes", "differentiation"],
  "cell-types/collection-sources": ["sources", "bank"],
  "cell-types/self-vs-donor": ["comparison", "bank"],
  "cell-types/culture-and-quality": ["pipeline", "bank"],
  "compare-therapies/cell-free-therapies": ["therapies", "paracrine"],
  "compare-therapies/vs-conventional": ["positioning", "repair"],
  "cost-access/cost-and-coverage": ["cost", "checkpoints"],
  "cost-access/before-consultation": ["checkpoints", "eligibility"],
  "cost-access/spotting-ads": ["checkpoints", "evidence"],
  "cost-access/during-and-after": ["support", "repair"],
  "cost-access/life-and-support": ["support", "lifestyle"],
  "mechanisms/cell-mechanisms": ["paracrine", "differentiation"],
  "mechanisms/regeneration-research": ["repair", "science"],
  "mechanisms/science-and-society": ["science", "evidence"],
};

/** 記事固有の指定がない場合の図版をサブカテゴリから引く（先頭が冒頭用、2枚目は本文中）。 */
export function defaultVisualFor(category: string, slug: string): string[] {
  const group = subcategoryOf(category, slug);
  return group ? (subcategoryVisual[`${category}/${group.key}`] ?? []) : [];
}
