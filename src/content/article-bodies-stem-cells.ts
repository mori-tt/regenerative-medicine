// Full translated bodies (points + sections) for stem-cell-category articles.
export type ArticleBodyLocale = {
  points: string[];
  sections: { title: string; paragraphs: string[] }[];
};

function b(
  enPoints: string[],
  enSections: [string, string[]][],
  zhPoints: string[],
  zhSections: [string, string[]][],
): { en: ArticleBodyLocale; zh: ArticleBodyLocale } {
  return {
    en: {
      points: enPoints,
      sections: enSections.map(([title, paragraphs]) => ({ title, paragraphs })),
    },
    zh: {
      points: zhPoints,
      sections: zhSections.map(([title, paragraphs]) => ({ title, paragraphs })),
    },
  };
}

export const articleBodiesStemCells: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "stem-cell-types": b(
    [
      "Stem cells can multiply and become other cell types.",
      "They are distinguished by origin and properties.",
    ],
    [
      ["Basic functions of stem cells", ["The keys to stem cells are self-renewal, making cells with the same properties, and differentiation into other cell types. Not every stem cell shares the same properties."]],
      [
        "Distinguishing types and origins",
        [
          "iPS cells are pluripotent stem cells made by introducing factors into body cells. ES cells derive from early embryos, and somatic stem cells live in body tissues.",
          "Cell type alone never decides a treatment's effectiveness or safety. Verification per treatment must be checked.",
        ],
      ],
    ],
    ["干细胞有增殖与成为其他种类细胞的能力。", "按来源与性质区分干细胞。"],
    [
      ["干细胞的基本功能", ["理解干细胞的关键是制造同性质细胞的“自我复制”与成为其他种类细胞的“分化”。并非所有干细胞性质相同。"]],
      ["区分种类与来源", ["iPS 细胞是向身体细胞导入特定因子等制成的多能干细胞。ES 细胞源自早期胚胎，体干细胞存在于身体组织。", "仅凭细胞种类不能决定治疗有效性与安全性。需要确认按治疗的验证。"]],
    ],
  ),
  "ips-cells-explained": b(
    [
      "iPS cells are made by adding factors to body cells.",
      "They serve both differentiation and drug-discovery research.",
      "Clinical applications advance through stepwise verification.",
    ],
    [
      [
        "How they are made",
        [
          "iPS cells are made by introducing factors into skin, blood, or other body cells, shifting them into a state able to become many cell types. Research spread from mouse reports in 2006 and human reports in 2007.",
          "Methods using patients' own cells and methods using pre-prepared allogeneic stocks are considered for different purposes and diseases.",
        ],
      ],
      [
        "Two uses: therapy and drug discovery",
        [
          "One use aims at regenerative transplantation of neural, heart muscle, and retinal cells. The other recreates diseased cells to search drug candidates and study disease mechanisms.",
          "In both cases, differentiation efficiency, impurity control, and long-term safety confirmation remain challenges.",
        ],
      ],
      [
        "Clinical status and cautions",
        [
          "In Japan, clinical research and trials have advanced for age-related macular degeneration, heart disease, Parkinson's disease, and others. Both achievements and challenges are reported, and expanding indications continues under careful verification.",
          "Saying “it uses iPS cells” alone never describes a treatment. Check the target disease, cell manufacturing, delivery systems, and public procedures.",
        ],
      ],
    ],
    ["iPS 细胞是向身体细胞加因子等制成。", "用于分化与制药研究。", "治疗应用在阶段性验证中推进。"],
    [
      ["如何制成", ["iPS 细胞是向皮肤血液等身体细胞导入特定因子等，使其变为能成为多种细胞的状态。2006年小鼠、2007年人报告为起点研究扩展。", "有用患者自己制作的方法，也有用事先准备的异体储备的方法，按目的疾病分工探讨。"]],
      ["治疗与制药两种用途", ["一是制作神经、心肌与视网膜等细胞、以移植为目标的再生医学应用；二是再现疾病细胞寻找药物候选、研究疾病机制的利用。", "两种情况分化效率、杂质管理与长期安全性确认都是课题。"]],
      ["临床应用现状与注意", ["日本以老年黄斑变性、心脏病与帕金森病等为对象的临床研究、试验已推进。成果与课题两面都有报告，适应扩充在谨慎验证下继续。", "仅说“用了iPS细胞”不能说明治疗内容。请确认对象疾病、细胞制作、实施体制与公共手续。"]],
    ],
  ),
  "es-cells-explained": b(
    [
      "ES cells are pluripotent stem cells established from early embryos.",
      "Making and using them follows strict ethical procedures.",
      "They complement iPS cells, with uses studied for each.",
    ],
    [
      [
        "Characteristics of ES cells",
        [
          "ES cells are made from cells of the very early stage when fertilized eggs repeatedly divide. Able to differentiate into many cell types, they serve regenerative medicine and basic research on development and differentiation.",
          "While notable for growth and ease of differentiation, they do not come from patients themselves, so managing immune rejection in transplantation is one challenge.",
        ],
      ],
      [
        "Ethical rules and procedures",
        [
          "Making and using ES cells follows strict procedures for donor consent and review. Research institutions proceed through ethics committee review along guidelines.",
          "Knowing these mechanisms makes words like “establishment,” “distribution,” and “use” in news and brochures easier to understand.",
        ],
      ],
      [
        "Viewing differences from iPS cells",
        [
          "Both iPS and ES cells are pluripotent, but differ in origin, production, and issues around immunity and ethics. Research uses both by purpose, building on each other's findings.",
          "From a treatment-considering standpoint, confirming which guidelines and reviews a treatment passed matters more than cell type names.",
        ],
      ],
    ],
    ["ES 细胞是源自早期胚胎的多能干细胞。", "制作与使用有严格伦理手续。", "与iPS各有长短，按用途研究分工。"],
    [
      ["ES 细胞的特点", ["ES 细胞由受精卵反复分裂的极早期细胞制成。能分化为多种细胞，用于再生医学与发生分化基础研究。", "增殖力与易分化是特点，但非患者自身来源，移植时免疫排斥应对是课题之一。"]],
      ["伦理规则与手续", ["ES 细胞制作与使用规定提供者同意与审查等严格手续。研究机构经伦理审查委员会审查、按指引研究。", "知道这些机制，新闻与说明资料中“建系”“分配”“使用”等词更易理解。"]],
      ["与iPS区别的看法", ["iPS 与 ES 都有多能性，但来源、制作方法与免疫伦理论点不同。研究按目的两者并用，互用知见。", "考虑治疗的立场，比细胞种类名更重要的是确认该治疗经过什么指引审查。"]],
    ],
  ),
  "somatic-stem-cells": b(
    [
      "Somatic stem cells live in specific tissues and serve repair.",
      "Hematopoietic stem cells have long served transplant medicine.",
      "Check “mesenchymal” pitches together with targets and administration.",
    ],
    [
      [
        "Stem cells inside the body",
        [
          "Somatic stem cells live in bone marrow, fat, nerves, and other tissues, serving daily cell turnover and wound repair. Their differentiation range is generally narrower than pluripotent stem cells.",
          "Because properties differ by tissue, distinguish which tissue's which cells instead of lumping them as “stem cells.”",
        ],
      ],
      [
        "Representative types",
        [
          "Hematopoietic stem cells produce blood cells and serve hematopoietic stem cell transplantation for leukemia and others. Mesenchymal stem cells are studied for differentiation into bone, cartilage, and fat and for effects on surrounding cells. Neural, skin, and other stem cells each maintain their tissues.",
          "When private-care pitches only say “stem cells,” ask about source tissue, cell type, and whether processing occurred.",
        ],
      ],
      [
        "How they relate to treatment",
        [
          "Treatments using somatic stem cells include established insured care, options under trial and clinical research verification, and privately provided ones. Even with the same cell name, evaluations differ when target diseases or administration differ.",
          "Confirm indications, supporting studies, risks, costs, and other options as a set.",
        ],
      ],
    ],
    ["体干细胞存在于特定组织，参与修复。", "造血干细胞长期用于移植医疗。", "“间充质”说明要结合对象与给药一起确认。"],
    [
      ["身体里的干细胞", ["体干细胞存在于骨髓、脂肪与神经等各种组织，参与日常细胞更新与伤口修复。分化范围一般比多能干细胞窄。", "因组织性质不同，不要笼统说“干细胞”，区分哪种组织哪种细胞。"]],
      ["代表性种类", ["造血干细胞制造血细胞，用于白血病等治疗的造血干细胞移植。间充质干细胞研究向骨软骨脂肪分化与对周围细胞的作用。神经与皮肤干细胞等各自维持组织。", "自由诊疗说明只写“干细胞”时，问来源组织、细胞种类与有无加工。"]],
      ["与治疗的关系", ["用体干细胞的治疗有作为保险诊疗成熟的、作为临床试验临床研究验证中的、作为自由诊疗提供的。即使细胞名相同，对象疾病与给药不同评价各异。", "把适应、依据研究、风险、费用与其他选择成套确认很重要。"]],
    ],
  ),
  "cell-culture-and-quality": b(
    [
      "Culture and processing steps decide treatment quality.",
      "Sterility and unintended-cell contamination are checked.",
      "Facility systems and procedures are checkpoints too.",
    ],
    [
      [
        "Flow from collection to administration",
        [
          "Cell-based treatments follow collection, culture and processing, testing, then administration. Cell types, amounts, and routes are set per treatment, advancing through layered records and checks.",
          "More steps need more oversight. When briefed, asking for the whole flow makes understanding easier.",
        ],
      ],
      [
        "Viewpoints for checking quality",
        [
          "Checks cover bacterial contamination, sufficient target-cell contents, and unexpected changes. Transport and storage conditions also affect quality.",
          "Ask how quality is checked and how results are explained.",
        ],
      ],
      [
        "Checking facilities and procedures",
        [
          "Processing facility systems and whether procedures under laws like the Act on the Safety of Regenerative Medicine were completed are important checkpoints. Provider materials and Ministry information confirm positioning.",
          "Process transparency helps judge treatment calmly.",
        ],
      ],
    ],
    ["培养加工工程决定治疗质量。", "确认无菌与非目标细胞混入等。", "设施体制与手续也是确认点。"],
    [
      ["从采集到给药的流程", ["用细胞的治疗经采集、培养加工、检验与给药。细胞种类数量与给药途径按治疗规定，经层层记录确认推进。", "工程越多越需要管理之眼。接受说明时请对方展示整体流程更易理解。"]],
      ["确认质量的视角", ["确认有无细菌等混入、目标细胞是否充足、有无意外变化。运输保存条件也关系质量。", "问“如何确认质量”“结果如何说明”。"]],
      ["设施与手续的确认", ["加工设施体制与有无法规手续是重要确认点。用提供机构说明资料与厚生劳动省信息确认定位。", "工程透明有助于冷静判断治疗。"]],
    ],
  ),
  "hematopoietic-transplant": b(
    [
      "Donor hematopoietic stem cells rebuild the blood system.",
      "Matching, conditioning, and complication measures come as one.",
      "Long experience grounds systems and safety measures.",
    ],
    [
      ["How transplantation works", ["After reducing diseased cells with heavy chemotherapy or radiation, donor hematopoietic stem cells are infused to restore normal blood production. Bone marrow and cord blood bank systems support it."]],
      ["Complications and measures", ["Complications such as infections and graft-versus-host disease (GVHD) exist, with prevention and early-response systems in place. Indications and donor conditions are judged carefully by disease, age, and general condition."]],
      ["Hints for other cell therapies", ["Transplant medicine's experience with matching checks, long follow-up, and registry-based accumulation also serves newer cell therapy evaluation. Knowing established care clarifies verification levels for new treatments."]],
    ],
    ["用供者造血干细胞重建血液机制。", "相合性、前处理与并发症对策一体。", "长期经验是制度与安全对策的基础。"],
    [
      ["移植机制", ["用大量化疗放疗减少病细胞后，点滴供者造血干细胞，恢复正常血液生成。靠骨髓库与脐带血库机制支撑。"]],
      ["并发症与对策", ["有感染与移植物抗宿主病（GVHD）等并发症，备有预防与早期应对体制。适应与供者条件按疾病年龄全身状态慎重判断。"]],
      ["对其他细胞治疗的启示", ["移植医疗在相合确认、长期随访与登记积累的经验，也用于新细胞治疗评价。知道成熟治疗的样子，新治疗验证水平更易看清。"]],
    ],
  ),
  "mesenchymal-basics": b(
    [
      "Check source tissues and definitions in materials.",
      "Both differentiation and effects on surroundings are studied.",
      "Names alone never judge effects.",
    ],
    [
      ["What mesenchymal stem cells are", ["Cell groups from bone marrow, fat, and others, studied for differentiation into bone, cartilage, and fat and for effects on surrounding cells. Definitions and property ranges differ across studies and products."]],
      ["Two ways of working", ["Both replacing lost tissue itself and aiding surroundings through repair-related signals are discussed. Which dominates differs by disease and administration."]],
      ["Checkpoints when briefed", ["Ask as a set about source tissue, cell specifications and tests, routes with counts, supporting studies, and costs. Words like “stem cells” or “regeneration” alone never describe contents."]],
    ],
    ["来源组织与定义用资料确认。", "分化与对周围的作用两面都在研究。", "仅凭名称不能判断效果。"],
    [
      ["间充质干细胞是什么", ["从骨髓脂肪等获得的、研究向骨软骨脂肪分化与对周围细胞作用的细胞群。定义与性质幅度因研究产品而异，并非铁板一块。"]],
      ["两种作用思路", ["讨论置换失去组织本身的作用，与发出炎症修复相关信号帮助周围的作用两面。何者为主因对象疾病与给药而异。"]],
      ["接受说明时的确认点", ["成套问来源组织、细胞规格检验、给药途径次数、依据研究与费用。仅“干细胞”“再生”二词不能说明内容。"]],
    ],
  ),
  "neural-stem-cells": b(
    [
      "Rebuilding neural circuits is the major challenge.",
      "Research advances for Parkinson's, spinal cord injury, and others.",
      "Combinations with rehabilitation matter too.",
    ],
    [
      ["Why it is hard", ["Nerves work only through correct connections. Beyond supplying cells, circuit connection and controlling unwanted growth need stepwise verification."]],
      ["Main targets and research", ["Clinical research and trials using neural cells made from iPS and other cells advance for Parkinson's disease, spinal cord injury, and cerebral infarction. They step from safety confirmation to effectiveness verification."]],
      ["Relations with rehabilitation", ["Post-transplant functional recovery needs rehabilitation. It is positioned as part of comprehensive plans, not cell therapy alone. Judging targets and timing matters too."]],
    ],
    ["神经回路重建是巨大课题。", "帕金森与脊髓损伤等研究在推进。", "与康复的组合也重要。"],
    [
      ["为何困难", ["神经只有连对对象才工作。除补充细胞，还需回路连接与不需要增殖的控制，在阶段性验证中。"]],
      ["主要对象与研究", ["以帕金森病、脊髓损伤与脑梗塞等为对象，用iPS等制成的神经细胞的临床研究试验在推进。从安全性确认走向有效性验证。"]],
      ["与康复的关系", ["移植后功能恢复离不开康复。定位为综合治疗计划一部分，而非细胞治疗单独。对象与时机的判断也重要。"]],
    ],
  ),
  "tissue-stem-cells": b(
    [
      "Turnover speeds differ by tissue.",
      "Gut and skin are active; muscle works when needed.",
      "Links with cancer are also studied.",
    ],
    [
      ["Actively renewing tissues", ["Gut lining, skin, and blood renew huge cell numbers daily, with tissue stem cells supplying them. Uncovering these mechanisms also serves culture techniques and disease understanding."]],
      ["Tissues working when needed", ["Like muscle satellite cells, some stem cells rest quietly and activate upon injury. Aging and disease weakening this work is studied."]],
      ["Applications to culture techniques", ["Techniques maintaining and growing tissue stem cells outside the body, like intestinal organoid culture, serve disease recreation and drug evaluation. Therapeutic application needs safety verification."]],
    ],
    ["组织更新速度各异。", "肠皮肤活跃，肌肉按需工作。", "与癌症的关系也在研究。"],
    [
      ["更新活跃的组织", ["肠黏膜皮肤血液每天大量更新，组织干细胞供应。这些机制阐明也连到培养技术与疾病理解。"]],
      ["需要时工作的组织", ["如肌肉卫星细胞，平时安静待机，受伤时激活。用老龄疾病削弱该功能在研究中。"]],
      ["向培养技术的应用", ["肠类器官培养等体外维持扩增组织干细胞的技术，用于疾病再现与药物评价。治疗应用需安全性验证。"]],
    ],
  ),
  "ips-stock": b(
    [
      "Banking considers HLA types.",
      "Shorter time and costs are hoped for.",
      "Quality control and consent systems support it.",
    ],
    [
      ["The stock idea", ["Because making cells per patient costs time and money, efforts prepare and evaluate iPS cells from donors with less-rejected HLA types in advance. They can be differentiated and used promptly when needed."]],
      ["Division with made-to-order cells", ["Autologous making favors matching but struggles with time and cost. Stocks favor speed and uniformity, with uses considered by disease and urgency."]],
      ["Supporting mechanisms", ["It operates under donor recruitment and consent, infection and other testing, quality confirmation, and distribution procedures. Covered types and operations are reviewed as research advances."]],
    ],
    ["考虑HLA类型的储备在推进。", "期待缩短时间费用。", "靠质量管理与同意机制支撑。"],
    [
      ["储备的思路", ["按患者制作耗时费钱，事先准备评价不易排斥HLA型供者来源iPS细胞。需要时迅速分化利用。"]],
      ["与个别制作的分工", ["自体制作在相合性有利，但期限费用是课题。储备在迅速均一有利，按对象疾病紧急分工探讨。"]],
      ["支撑机制", ["在供者招募同意、感染等检验、质量确认与分配手续体制下运营。随研究进展调整对象类型与运营。"]],
    ],
  ),
  "differentiation-purification": b(
    [
      "Differentiation efficiency differs by method.",
      "Managing remaining undifferentiated cells matters.",
      "Purification and confirmation steps support safety.",
    ],
    [
      ["What directed differentiation is", ["Steps adjusting culture conditions and factors to produce target cells like heart muscle, nerves, and retina from stem cells. Methods stepping through development-like stages are studied."]],
      ["Why purification matters", ["Remaining off-target or undifferentiated cells in products can cause unintended workings. Techniques raising purity using surface markers and metabolic differences are developed."]],
      ["Confirmation viewpoints", ["Purity, viability, and functional tests happen before shipment and administration. In treatment explanations, ask how they make and what they check."]],
    ],
    ["分化效率因方法而异。", "残留未分化细胞等的管理重要。", "纯化确认工程支撑安全。"],
    [
      ["分化诱导是什么", ["调整培养条件与因子，从干细胞制作心肌神经视网膜等目标细胞的工程。研究模仿发生过程分阶段的方法。"]],
      ["纯化的重要性", ["制成品残留非目标与未分化细胞，可能导致意外作用。开发利用表面标志与代谢差异提高纯度的技术。"]],
      ["确认视角", ["出货给药前做纯度、存活率与功能试验。治疗说明中问“如何制作、确认什么”。"]],
    ],
  ),
  "genome-editing-difference": b(
    [
      "Genome editing rewrites genetic information.",
      "Combined research uses exist too.",
      "Ethical and safety issues belong to each.",
    ],
    [
      ["What genome editing is", ["Technologies modifying specific genes for uncovering causes and developing treatments. Issues differ between use in outside-body cells and direct inside-body use."]],
      ["Combination examples", ["Studies add genome editing to iPS cells to recreate diseases or engineer less-rejected features. Such stages become considerable only through accumulated verification of each technology."]],
      ["Ethical cautions", ["Changes inherited by next generations (germline effects) face strict debate and regulation. When viewing topics, check whether targets are somatic cells and which research stage applies."]],
    ],
    ["基因组编辑是改写遗传信息的技术。", "也有组合使用的研究。", "伦理安全论点各自存在。"],
    [
      ["基因组编辑是什么", ["靶向改造特定基因，用于阐明病因与开发治疗的技术。体外细胞利用与体内直接利用论点不同。"]],
      ["组合示例", ["有给iPS加基因组编辑再现疾病、做不易排斥改造的研究。各自技术验证积累到一定阶段才可探讨。"]],
      ["伦理注意", ["传给下一代的变化（生殖系影响）有严格讨论与规制。看话题时确认对象是体细胞、处于什么研究阶段。"]],
    ],
  ),
  "autologous-allogeneic": b(
    [
      "Autologous courses start from collection and take time.",
      "Allogeneic courses favor speed and uniformity.",
      "Visit counts and cost structures differ.",
    ],
    [
      ["Autologous flows", ["They proceed through tissue collection, culture and processing, testing, and administration, with waiting during manufacturing. Own cells reassure, while collection burden and manufacturing variation challenge."]],
      ["Allogeneic flows", ["Because pre-prepared and tested cells are used, fitting indications proceed promptly. Rejection measures, infection testing systems, and long follow-up cooperation are premises."]],
      ["Questions when comparing", ["Line up manufacturing periods, visit counts, total costs, rejection and infection measures, and post-treatment observation periods. Fit with your life and values is also important decision material."]],
    ],
    ["自体从采集开始耗时。", "异体在迅速均一有利。", "复诊次数与费用结构不同。"],
    [
      ["自体的流程", ["经组织采集、培养加工、检验与给药推进，制造期间需等待。自己细胞安心，但采集负担与制造波动是课题。"]],
      ["异体的流程", ["用事先准备检验的细胞，适应吻合可迅速推进。以排斥对策、感染检验体制与长期随访协力为前提。"]],
      ["比较时的问题", ["并列问制造期限、复诊次数、总额、排斥感染对策与治疗后观察期限。与自己生活价值观的相容也是重要判断材料。"]],
    ],
  ),
  "tumorigenicity-safety": b(
    [
      "Growth power is both an advantage and a concern.",
      "Remaining undifferentiated cells are checked.",
      "Animal tests and long observation verify.",
    ],
    [
      ["What is concerned", ["For pluripotent and highly proliferative cells, off-purpose growth and tumor formation possibilities are considered. Multilayered checks include managing genetic changes during culture."]],
      ["Safety test examples", ["Tumorigenicity tests through animal administration, chromosome checks, and purity measurements combine. Evaluations rest on stacked confirmations, not single tests."]],
      ["Long observation in people", ["Fixed-period tracking follows clinical application too. When participating, confirm observation contents, periods, and contact systems. Consult promptly with worrying symptoms."]],
    ],
    ["增殖力既是优点也是担忧。", "未分化细胞残留等是确认对象。", "经动物试验与长期观察验证。"],
    [
      ["担忧什么", ["多能与高增殖细胞考虑非目的增殖与成瘤可能。含培养中遗传变化管理，多层确认。"]],
      ["安全性试验示例", ["组合动物给药成瘤试验、染色体确认与纯度测定。不靠单一试验，靠多重确认积累评价。"]],
      ["在人身上长期观察", ["临床应用后也做一定期追踪调查。参加时确认观察内容期限与联系体制。有不安症状迅速商量。"]],
    ],
  ),
  "hla-rejection": b(
    [
      "HLA is one marker involved in rejection.",
      "Matching never zeroes rejection.",
      "It combines with drugs and cellular devices.",
    ],
    [
      ["What HLA is", ["Markers of selfhood on almost all cells, with diverse type combinations. Transfusion and transplantation consider this matching; better fits supposedly reject less."]],
      ["Limits of matching", ["Even with matches, rejection from minor differences can occur. Matching only lowers probability, never guarantees. It is managed with immunosuppressants and follow-up."]],
      ["Devices in cell therapy", ["Research directions include matched stocks, hard-to-detect modifications, and site selection such as immune-privileged places. Strategies differ by disease."]],
    ],
    ["HLA是涉及排斥的标志之一。", "配型也不能让排斥归零。", "与药物、细胞巧思组合。"],
    [
      ["HLA是什么", ["几乎所有细胞上表示自我的标志，类型组合多样。输血移植考虑该配型，越合越不易排斥。"]],
      ["配型的局限", ["即使配型，微小差异的排斥也可能发生。配型只降低概率，不保证。与免疫抑制药、随访组合管理。"]],
      ["细胞治疗的巧思", ["研究方向有用配型储备、不易被免疫发现的改造、选免疫难达部位等给药部位。策略因疾病而异。"]],
    ],
  ),
  "ips-drug-discovery": b(
    [
      "Patient-derived cells recreate diseases.",
      "Drug candidates can be searched efficiently.",
      "Paths to personalized medicine open too.",
    ],
    [
      ["Recreating diseases", ["iPS cells made from patients' cells differentiate into nerves, heart muscle, and others to recreate disease features on dishes. It serves research on hard-to-sample rare diseases."]],
      ["Searching drug candidates", ["Screening tries many compounds on recreated cells to find effect signs. Cases leading to repurposing existing drugs are also reported."]],
      ["Applications per person", ["Directions checking drug responsiveness and side-effect susceptibility with personal cells are also explored. Practical use needs reproducibility and evaluation-standard development, with research continuing."]],
    ],
    ["用患者来源细胞再现疾病。", "高效寻找药物候选。", "也通向个体化医疗。"],
    [
      ["疾病再现", ["患者细胞制成的iPS分化为神经心肌等，在皿上再现疾病特征。有助于难取样的罕见病研究。"]],
      ["药物候选寻找", ["在再现细胞上试多种化合物找效果迹象的筛选。有报告连到老药新用。"]],
      ["对每个人的应用", ["也在摸索用个人细胞查药物易效与副作用易出的方向。实用需再现性与评价基准完善，研究继续中。"]],
    ],
  ),
  "organoids-intro": b(
    [
      "3D structures differ from flat cultures.",
      "They serve disease recreation and drug evaluation.",
      "Transplant applications are coming challenges.",
    ],
    [
      ["What organoids are", ["Tiny 3D tissues made from stem cells, recreating parts of organ structures and workings. Diverse kinds including brain, gut, liver, and kidney are reported."]],
      ["Main uses", ["They serve uncovering developmental mechanisms, infection studies, and drug toxicity and effect evaluation. They also draw attention as complements to animal experiments."]],
      ["Limits and futures", ["Reproducing vessels and immune systems plus size and maturity variation challenge. Transplant applications need function and safety verification, with stepwise research advancing."]],
    ],
    ["立体结构是与平面培养的区别。", "用于疾病再现与药物评价。", "移植应用是今后课题。"],
    [
      ["类器官是什么", ["由干细胞制成的微小立体组织，再现器官结构功能的一部分。脑肠肝肾等多样种类有报告。"]],
      ["主要用途", ["用于阐明发生机制、感染研究与药物毒性效果评价。也作为补充动物实验的手段受关注。"]],
      ["局限与未来", ["血管免疫再现与大小成熟度差异是课题。移植应用需功能安全性验证，在阶段性研究中。"]],
    ],
  ),
  "exosomes-notes": b(
    [
      "Research directions avoiding cells themselves.",
      "Uniformity and standardization of preparations challenge.",
      "View efficacy claims together with evidence.",
    ],
    [
      ["What exosomes are", ["Tiny granules cells release, carrying proteins, nucleic acids, and others. Believed involved in intercellular communication, they are studied for diagnostic and therapeutic applications."]],
      ["Practical challenges", ["Contents vary easily by origin and manufacturing, with quality standardization and effect elucidation underway. Distinguish research-stage findings from provision as treatment."]],
      ["When briefed", ["Confirm target diseases, supporting studies, manufacturing and quality control, risks, costs, and other options. Beware deterministic effect displays and pitches for expensive contracts."]],
    ],
    ["是不用细胞本身方向的研究。", "制剂均一化规格化是课题。", "功效表述与依据成套看。"],
    [
      ["外泌体是什么", ["细胞释放的微小颗粒，运送蛋白质核酸等。认为参与细胞间联络，研究诊断治疗应用。"]],
      ["实用化课题", ["内容易因来源制造法而变，质量规格化与作用阐明途中。区分研究阶段成果与作为治疗的提供。"]],
      ["接受说明时", ["确认对象疾病、依据研究、制造质量管理、风险、费用与其他选择。注意断定效果的表述与高额合同劝诱。"]],
    ],
  ),
  "cell-cycle": b(
    ["Repeat division and interphase.", "Checkpoints suppress abnormalities.", "Culture conditions affect cycles."],
    [
      ["Cycle stages", ["They consist of S phase replicating DNA, M phase dividing, and G1 and G2 between. Some cells enter resting G0 as needed."]],
      ["Monitoring mechanisms", ["Mechanisms inspect DNA damage and replication flaws, stopping, repairing, or removing on abnormalities. Broken monitoring relates to cancer and others."]],
      ["Relations with culture", ["Growth factors, density, and nutrition change cycles. Manufacturing balances growth with stability."]],
    ],
    ["重复分裂期与间期。", "检查点抑制异常。", "培养条件影响周期。"],
    [
      ["周期阶段", ["由复制DNA的S期、分裂的M期与之间G1G2期构成。按需有进入休止G0的细胞。"]],
      ["监视机制", ["有点检DNA损伤与复制差错的机制，异常则停止修复去除。该监视破绽与癌症等相关。"]],
      ["与培养的关系", ["生长因子密度营养改变周期。制造兼顾增殖与稳定。"]],
    ],
  ),
  "asymmetric-division": b(
    ["Divide into stem and differentiated cells.", "It serves pool maintenance.", "Disorder relates to disease."],
    [
      ["What asymmetric division is", ["A division producing one daughter keeping stem properties and one heading to differentiation in a single round. Understood as a device preventing stem depletion."]],
      ["Division with symmetric division", ["Symmetric division making two same-property cells increases numbers as needed. They are used differently by developmental stages and tissue states."]],
      ["Disorder and disease", ["Allocation disorder possibly relating to maintenance failure and abnormal growth is an important basic research theme."]],
    ],
    ["分成干细胞与分化细胞。", "有助于维持池。", "紊乱与疾病相关。"],
    [
      ["非对称分裂是什么", ["一次分裂产生保持干细胞性质的子细胞与走向分化的子细胞的分法。可看作防干细胞枯竭的巧思。"]],
      ["与对称分裂的分工", ["按需用制造两同性质细胞的对称分裂增数。按发生阶段与组织状态分工。"]],
      ["紊乱与疾病", ["分配紊乱可能关系维持不良与异常增殖，是基础研究重要主题。"]],
    ],
  ),
  "stemcell-niche": b(
    ["Dwellings decide workings.", "Vessels and stromal cells join.", "Reproducing environments keys culture."],
    [
      ["The niche idea", ["Stem cells rest on environments (niches) of surrounding cells, scaffolds, and signal molecules. Same cells behave differently when places change."]],
      ["Composing elements", ["Vascular endothelial cells, stromal cells, extracellular matrix, and oxygen levels are elements. They are studied in detail in marrow, hair follicles, and others."]],
      ["Applications to culture", ["Reproducing niches keys stem maintenance culture and directed differentiation. Scaffold and factor devices are studied."]],
    ],
    ["居所决定行为。", "血管间质细胞参与。", "环境再现是培养关键。"],
    [
      ["微环境的观点", ["干细胞靠周围细胞、支架与信号分子构成的环境（微环境）支撑。同样细胞换地方行为改变。"]],
      ["构成要素", ["血管内皮细胞、间质细胞、细胞外基质与氧浓度等是要素。在骨髓毛囊等详查。"]],
      ["向培养的应用", ["微环境再现是干细胞维持培养与分化诱导的关键。研究支架与因子巧思。"]],
    ],
  ),
  "cell-signaling": b(
    ["Secreted, contact, and electrical signals exist.", "They build developmental paths.", "They apply to directed differentiation."],
    [
      ["Signal types", ["Secreted factors reaching distant cells, contact signals with neighbors, and nerve-like electrical signals exist. Combinations make complex instructions."]],
      ["Roles in development", ["Concentration gradients and timing decide cell fates. Directed differentiation mimics these processes."]],
      ["Therapeutic applications", ["Effects through secretion, like mesenchymal cells' workings on surroundings, are studied. Identifying workings challenges."]],
    ],
    ["有分泌、接触与电信号。", "形成发生路径。", "应用于分化诱导。"],
    [
      ["信号种类", ["有到达远处细胞的分泌因子、相邻接触信号与神经样电信号。组合成复杂指令。"]],
      ["在发生中的作用", ["浓度梯度与时机决定细胞命运。分化诱导模仿该过程。"]],
      ["向治疗的应用", ["研究经分泌的作用如间充质对周围的働き。特定作用是课题。"]],
    ],
  ),
  "growth-factors": b(
    ["Workings differ by type.", "Concentration and timing matter.", "Preparation quality control is needed."],
    [
      ["Representative examples", ["FGF, EGF, PDGF, VEGF, TGF-beta and others relate to growth, angiogenesis, and differentiation. Workings differ by target cells."]],
      ["Use in culture", ["Directed differentiation switches factors by stage. Animal-derived component handling and quality uniformity are managed."]],
      ["Cautions in therapy", ["Studies administering factors themselves also exist, but dosage and target control challenge. Evidence and safety confirmation are needed."]],
    ],
    ["种类不同作用不同。", "浓度时机重要。", "制剂质量管理必要。"],
    [
      ["代表性例子", ["FGFEGFPDGFVEGFTGF-β等，关系增殖、血管新生与分化。作用因对象细胞而异。"]],
      ["在培养中的使用", ["分化诱导按阶段切换因子。动物来源成分处理与质量均一是管理对象。"]],
      ["治疗中的注意", ["也有直接给药因子的研究，但用量与靶向控制是课题。需要依据与安全性确认。"]],
    ],
  ),
  scaffolds: b(
    ["Shapes and stiffness affect cells.", "Degradability and safety are required.", "Decellularized tissues are also used."],
    [
      ["Material types", ["Collagen and other living-derived materials plus biodegradable polymers and other synthetics exist. Stiffness and structures change cell behavior."]],
      ["Design viewpoints", ["Pore sizes, degradation speeds, and vessel entry ease are considered. Designs must fit target tissues."]],
      ["Decellularized uses", ["Studies use skeletons with cells removed from organs. Immunity and strength challenge, with verification continuing."]],
    ],
    ["形状硬度影响细胞。", "分解性安全性是要件。", "也有脱细胞组织利用。"],
    [
      ["材料种类", ["有胶原等生物来源材料与生物降解聚合物等合成材料。硬度结构改变细胞行为。"]],
      ["设计视角", ["考虑孔大小、分解速度与血管易入性。需要配合对象组织的设计。"]],
      ["脱细胞利用", ["有用去除器官细胞的骨架的研究。免疫强度是课题，验证继续中。"]],
    ],
  ),
  bioreactors: b(
    ["Stirring and perfusion grow uniformly.", "Automation reduces variation.", "They operate with quality tests as sets."],
    [
      ["Why mass culture is needed", ["Treatments need many cells, exceeding manual dish limits. Uniformity and sterility securing also challenge."]],
      ["Device devices", ["Stirred tanks, hollow fibers, and perfusion cultures deliver nutrients and oxygen. Sensors monitor states with records kept."]],
      ["Relations with quality", ["Changed devices can change cell properties. Equivalence confirmation and process control matter."]],
    ],
    ["搅拌灌流均匀培养。", "自动化减少波动。", "与质量试验成套运营。"],
    [
      ["为何需要大量培养", ["治疗需要大量细胞，皿手工有极限。均一无菌确保也是课题。"]],
      ["装置巧思", ["搅拌槽、中空纤维与灌流培养输送营养氧气。用传感器监视状态并留记录。"]],
      ["与质量的关系", ["装置改变细胞性质也可能变。同等性确认与工程管理重要。"]],
    ],
  ),
  cryopreservation: b(
    ["Ice crystals damage cells.", "Protectants and cooling speeds key.", "Post-thaw confirmation is needed."],
    [
      ["Difficulty of freezing", ["Intra- and extracellular ice crystals and osmotic changes cause damage. Conditions differ by type and tissue."]],
      ["Main methods", ["DMSO and other protectants with stepwise cooling, rapid freezing (vitrification), and others exist. Verification per target is needed."]],
      ["Post-thaw confirmation", ["Viability and function confirmation plus protectant removal happen. Storage periods and record management are also quality parts."]],
    ],
    ["冰晶损伤细胞。", "保护剂与降温速度是关键。", "融化后需要确认。"],
    [
      ["冷冻的难处", ["细胞内外冰晶与渗透压变化是损伤原因。种类组织条件各异。"]],
      ["主要方法", ["有DMSO等保护剂与阶段降温、急速冷冻（玻璃化）等。需要按对象验证。"]],
      ["融化后确认", ["做存活率功能确认与保护剂去除。保存期限与记录管理也是质量一部分。"]],
    ],
  ),
  "cord-blood-cells": b(
    ["They include hematopoietic stem cells.", "Small cell counts challenge.", "Public banks distribute them."],
    [
      ["Included cells", ["They include hematopoietic stem and progenitor cells for transplantation. Limited collection amounts supposedly suit children and lighter patients."]],
      ["Actual use", ["They serve transplantation after matching confirmation. Rapid availability advantages, with devices combining multiple cord bloods too."]],
      ["Bank mechanisms", ["Public banks freely provide, test, store, and distribute. Understand differences from private storage when choosing."]],
    ],
    ["含造血干细胞。", "细胞数少是课题。", "经公共库分配。"],
    [
      ["所含细胞", ["含造血干细胞与祖细胞用于移植。采集量有限，据说适合儿童与体重轻者。"]],
      ["利用实际", ["经相合确认用于移植。有迅速可用的优点，也有组合多份脐带血的巧思。"]],
      ["库机制", ["公共库无偿提供检验保存分配。理解与民间保存的区别来选。"]],
    ],
  ),
  "dental-pulp-stem": b(
    ["Small collection burden advantages.", "Neural and other differentiation is studied.", "Clinical application lies ahead."],
    [
      ["Collection-source features", ["Obtained from extracted baby and wisdom teeth, drawing attention for small collection burden. Using storage services needs cost and system confirmation."]],
      ["Research directions", ["Differentiation into nerves, bones, and others plus secretion-mediated workings are studied. Provision as treatment remains under verification."]],
      ["When considering storage", ["Future usability is uncertain. Calmly view costs, storage periods, and operator continuity."]],
    ],
    ["采集负担小是优点。", "研究向神经等分化。", "临床应用尚早。"],
    [
      ["采集源特点", ["从拔除乳牙智齿获得，采集负担小受关注。利用保存服务需确认费用体制。"]],
      ["研究方向", ["研究向神经骨骼等分化与经分泌的作用。作为治疗的提供在验证途中。"]],
      ["考虑保存时", ["未来可用性不确定。冷静看费用、保管期限与事业者持续性。"]],
    ],
  ),
  "adipose-stem": b(
    ["Amounts secure relatively easily.", "Processing changes positioning.", "Checking indications with evidence is a must."],
    [
      ["Collection features", ["Relatively many cells supposedly come from fat tissue. Collection itself is medical practice with burden and complications."]],
      ["Processing differences", ["Centrifugation, enzyme treatment, and culture presence change cell contents and legal positioning. Confirm process details in explanations."]],
      ["Checkpoints", ["Ask as sets about target diseases, evidence, risks, costs, and other options. Distinguishing cosmetic from therapeutic purposes matters too."]],
    ],
    ["量易确保。", "加工有无改变定位。", "适应与依据确认必须。"],
    [
      ["采集特点", ["据说从脂肪组织可得较多细胞。采集本身是医疗行为，有负担与并发症。"]],
      ["加工差异", ["离心酶处理与有无培养改变细胞内容与法律定位。说明中确认工程细节。"]],
      ["确认点", ["成套问对象疾病、依据、风险、费用与其他选择。区分美容目的与治疗目的也重要。"]],
    ],
  ),
  "bone-marrow-system": b(
    ["Red marrow performs hematopoiesis.", "Fatty marrow grows with age.", "Collection happens at institutions."],
    [
      ["Marrow types", ["Blood-making active red marrow and fat-rich yellow marrow exist. Children widely hold red marrow, with distributions changing by age."]],
      ["Actual collection", ["Marrow fluid collection happens under anesthesia with pain and bleeding burden. Provision and collection systems are in place."]],
      ["Donor registration", ["Registering with marrow banks leads to provision for matching patients. Check conditions and procedures in public guidance."]],
    ],
    ["红骨髓造血。", "随老龄脂肪髓增加。", "采集在医疗机构进行。"],
    [
      ["骨髓种类", ["有造血活跃的红骨髓与脂肪多的黄骨髓。儿童广泛是红骨髓，随老龄分布变化。"]],
      ["采集实际", ["骨髓液采集在麻醉下进行，有疼痛出血等负担。备有提供采集体制。"]],
      ["供者登记", ["向骨髓库登记通向给相合患者的提供。条件手续用公共机构指南确认。"]],
    ],
  ),
  "satellite-cells": b(
    ["They quietly wait normally.", "Damage activates them to repair.", "Aging weakens their work."],
    [
      ["Waiting stem cells", ["Stuck to muscle fiber surfaces, they normally rest from dividing. Upon injury and exercise loads they wake to proliferate and differentiate for repair."]],
      ["Relations with aging", ["Aging lowers counts and functions, complicating muscle recovery and maintenance. Exercise and nutrition relating to maintenance are studied."]],
      ["Therapeutic applications", ["Transplant studies for muscle diseases exist, but engraftment and spread securing challenge. Combinations with rehabilitation are premises."]],
    ],
    ["平时安静待机。", "损伤激活修复。", "随老龄功能衰退。"],
    [
      ["待机的干细胞", ["贴在肌纤维表面，平时休止分裂。受伤与运动负荷醒来，增殖分化修复。"]],
      ["与老龄的关系", ["老龄降低数量功能，肌肉恢复维持变难。研究运动营养与维持的关系。"]],
      ["向治疗的应用", ["有肌肉疾病移植研究，但生着扩散确保是课题。以康复组合为前提。"]],
    ],
  ),
  "intestinal-stem": b(
    ["They renew within days.", "Crypts house the stem cells.", "Culture techniques serve disease research."],
    [
      ["Gut structures", ["Made of villi and crypts, crypt-bottom stem cells supply differentiated cells. Systems supporting both absorption and defense."]],
      ["Organoid culture", ["Techniques growing stem cells three-dimensionally can recreate gut structures. They serve disease recreation and drug evaluation."]],
      ["Links with disease", ["Links with inflammatory bowel disease and cancer are studied. Transplant applications remain under verification."]],
    ],
    ["数日更新。", "隐窝是干细胞居所。", "培养技术用于疾病研究。"],
    [
      ["肠结构", ["由绒毛与隐窝构成，隐窝底部干细胞供应分化细胞。支撑吸收与防御两立的体制。"]],
      ["类器官培养", ["立体培养干细胞的技术可再现肠结构。用于疾病再现与药物评价。"]],
      ["与疾病的关系", ["研究与炎症性肠病、癌症的关系。移植应用在验证途中。"]],
    ],
  ),
  "liver-progenitor": b(
    ["Mature hepatocyte division centers.", "Progenitors work by conditions.", "Fibrosis complicates regeneration."],
    [
      ["Liver's regenerative power", ["After partial resection, remaining hepatocyte division recovers it. A property supporting transplant and liver resection medicine."]],
      ["Progenitor roles", ["Normally quiet, cell groups activating under strong injury conditions are studied. Origins and abilities are being uncovered."]],
      ["Fibrosis walls", ["Chronic inflammation advancing fibrosis outpaces regeneration. Early cause measures with follow-up matter."]],
    ],
    ["成熟肝细胞分裂是中心。", "祖细胞按条件工作。", "纤维化进展再生困难。"],
    [
      ["肝脏再生力", ["部分切除后残留肝细胞分裂恢复。支撑移植医疗与肝切除的性质。"]],
      ["祖细胞的作用", ["平时安静，强损伤条件下激活的细胞群在研究中。来源能力在阐明。"]],
      ["纤维化之壁", ["慢性炎症纤维化进展，再生追不上。早期病因对策与随访重要。"]],
    ],
  ),
  "corneal-regeneration": b(
    ["The limbus houses the stem cells.", "Shortage lowers vision.", "Sheet transplants are pursued."],
    [
      ["Limbal roles", ["The limbus between cornea and conjunctiva holds stem cells supplying corneal epithelium. Losing them through burns and others leads to opacity and vision loss."]],
      ["Sheet transplants", ["Cultured epithelial sheet transplants are pursued. Oral mucosa-derived and other methods are studied, with indications and long results under verification."]],
      ["Daily eye protection", ["UV, dryness, and trauma prevention matter. Consult ophthalmologists early with abnormalities."]],
    ],
    ["角膜缘是干细胞居所。", "不足则视力下降。", "在做片状移植。"],
    [
      ["角膜缘的作用", ["角膜结膜交界的角膜缘有干细胞，供应角膜上皮。烧伤等失去导致混浊视力下降。"]],
      ["片状移植", ["在做培养上皮片移植。口腔黏膜来源等方法也在研究，适应与长期成绩在验证。"]],
      ["日常护眼", ["紫外干燥外伤预防重要。有异常早咨询眼科。"]],
    ],
  ),
  "cartilage-repair-deep": b(
    ["Poor vessels make repair hard.", "Load-bearing strength is needed.", "Think together with rehabilitation."],
    [
      ["Why it is hard", ["Cartilage poorly holds vessels and nerves, slowing cell supply and repair. Joint loads and friction also toughen conditions."]],
      ["Treatment options", ["Conservative care, marrow stimulation, and cultured chondrocyte transplantation exist, with choices changing by defect size, site, and age. Judging indications matters."]],
      ["Postoperative courses", ["Gradual load resumption and strength training combine. Long follow-up confirms states."]],
    ],
    ["血管匮乏修复困难。", "需要耐负荷强度。", "与康复一体思考。"],
    [
      ["困难原因", ["软骨血管神经匮乏，细胞供应修复难推进。关节负荷摩擦也使条件严苛。"]],
      ["治疗选项", ["有保存疗法、骨髓刺激与培养软骨细胞移植等，按缺损大小部位年龄选择。适应判断重要。"]],
      ["术后经过", ["组合负荷阶段性恢复与肌力训练。长期随访确认状态。"]],
    ],
  ),
  "tendon-ligament": b(
    ["They are made of collagen bundles.", "Poor-blood areas heal slowly.", "Judging conservative vs. surgery matters."],
    [
      ["Tendon and ligament structures", ["Fibrous tissues connecting muscle to bone and bone to bone, enduring strong tension. Blood flow and healing ease differ by site."]],
      ["Handling injuries", ["Conservative care with rest, braces, and rehabilitation plus surgery for ruptures exist. Return-to-play and work timing is planned individually."]],
      ["Regeneration research", ["Studies using cells, growth factors, and scaffolds exist, but strength and re-rupture evaluation is needed. Check evidence stages."]],
    ],
    ["由胶原束构成。", "血流匮乏部位愈合慢。", "保存与手术的判断重要。"],
    [
      ["肌腱韧带结构", ["连接肌肉骨骼、骨骼骨骼的纤维组织，耐强张力。部位血流与易愈性不同。"]],
      ["损伤应对", ["有安静支具康复的保存疗法，与断裂等手术。重返赛场工作时期个别计划。"]],
      ["再生研究", ["有用细胞生长因子支架的研究，但需强度与再断裂评价。确认依据阶段。"]],
    ],
  ),
  "hair-regeneration": b(
    ["Hair cycles renew growth.", "Follicles hold stem cells.", "Established regenerative treatments are underway."],
    [
      ["What hair cycles are", ["Growth, regression, and rest repeat, involving follicle stem cells. Hair loss causes differ by type."]],
      ["Current options", ["Oral, topical, and transplant options exist, considered by cause and progress. Compare effects, side effects, and costs."]],
      ["Research status", ["Follicle reconstruction and other studies advance, but provision as treatment remains under verification. Beware deterministic ads."]],
    ],
    ["按毛周期生长更替。", "毛囊有干细胞。", "成熟的再生治疗在途中。"],
    [
      ["毛周期是什么", ["重复生长期退行期休止期，毛囊干细胞参与。脱发原因因种类而异。"]],
      ["目前应对", ["有内服外用与植发等选项，按原因进展探讨。比较效果副作用费用。"]],
      ["研究现状", ["毛囊重构等研究在推进，但作为治疗的提供在验证途中。注意断定性广告。"]],
    ],
  ),
  "tooth-regeneration": b(
    ["Recreating tooth development keys.", "Chewing strength must endure.", "Prevention and early care are basic."],
    [
      ["Research directions", ["Studies recreating epithelial-mesenchymal interactions to make tooth-germ-like structures advance. Controlling eruption and occlusion challenges."]],
      ["Current care", ["Cavity and gum prevention and early care plus prosthetics and implants center. Mouth health also relates to the whole body."]],
      ["Viewing topics", ["Animal results and human application distance apart. Check stages when receiving them."]],
    ],
    ["再现牙齿发生是关键。", "需耐咀嚼力。", "预防早期治疗是基本。"],
    [
      ["研究方向", ["再现上皮间充质相互作用、制作牙胚样结构的研究在推进。萌出咬合控制是课题。"]],
      ["目前治疗", ["蛀牙牙周预防早期治疗与修复种植是中心。口腔健康也与全身相关。"]],
      ["话题看法", ["动物成果与人体应用有距离。确认阶段来接受。"]],
    ],
  ),
  "inner-ear-regeneration": b(
    ["Hair cells supposedly hardly return.", "Hearing aids and cochlear implants are established.", "Regeneration studies step forward."],
    [
      ["Hearing loss types", ["Conductive and sensorineural types exist, handled differently by cause. Early visits with cause identification matter."]],
      ["Established support", ["Hearing aids, cochlear implants, and hearing rehabilitation support life. Fitting and training continuation decide effects."]],
      ["Regeneration challenges", ["Studies aiming at hair cell regeneration and nerve protection advance. Clinical application needs safety and function verification."]],
    ],
    ["毛细胞据说难恢复。", "助听器人工耳蜗是成熟手段。", "再生研究阶段性推进。"],
    [
      ["难听种类", ["有传导性与感音性，因原因应对不同。早期就诊与原因特定重要。"]],
      ["成熟支援", ["助听器人工耳蜗与听觉康复支撑生活。适配与训练持续左右效果。"]],
      ["再生的挑战", ["以毛细胞再生与神经保护为目标的研究在推进。临床应用需安全性功能验证。"]],
    ],
  ),
  "retina-regeneration": b(
    [
      "Retinal pigment epithelium supplementation is targeted.",
      "Sheet and suspension methods exist.",
      "Vision function evaluation matters.",
    ],
    [
      ["Target diseases", ["In age-related macular degeneration and others, retinal supporting tissues damage and vision lowers. Division with existing drug therapies is considered."]],
      ["Transplant methods", ["Cell suspension and sheet tissue transplants are studied. Engraftment, rejection, and long vision functions are evaluated."]],
      ["Eye health basics", ["No smoking, UV measures, and regular ophthalmology visits matter. Consult early with vision changes."]],
    ],
    ["视网膜色素上皮补充是对象。", "有片状与悬液方法。", "视功能评价重要。"],
    [
      ["对象疾病", ["老年黄斑变性等视网膜支撑组织受损、视力下降。与现有药物疗法的分工在探讨。"]],
      ["移植方法", ["研究细胞悬液与片状组织移植。生着排斥与长期视功能是评价对象。"]],
      ["眼睛健康基本", ["禁烟紫外对策与定期眼科受诊重要。视力变化早商量。"]],
    ],
  ),
  "spinal-cord-detail": b(
    [
      "Post-injury scars wall off recovery.",
      "Subacute and chronic strategies differ.",
      "Combinations with rehabilitation are premises.",
    ],
    [
      ["Post-injury changes", ["Inflammation and scar formation advance, creating nerve-regeneration-blocking environments. Interventions targetable differ by timing."]],
      ["Clinical research status", ["Trials of subacute-stage cell transplants and others advance. Safety and functional recovery are verified stepwise."]],
      ["Life support", ["Complication prevention, independence support, and work and housing arrangements matter. Medicine and welfare coordinate support."]],
    ],
    ["损伤后瘢痕成壁。", "亚急性期与慢性期策略不同。", "以康复并用为前提。"],
    [
      ["损伤后变化", ["炎症瘢痕形成推进，形成妨碍神经再生的环境。按时期可瞄准的介入不同。"]],
      ["临床研究现状", ["以亚急性期为对象的细胞移植试验等在推进。安全性与功能恢复阶段性验证。"]],
      ["生活支援", ["并发症预防、自立支援与就业居住安排重要。医疗福利协作支撑。"]],
    ],
  ),
  "heart-sheet-detail": b(
    [
      "Cell sheets supplement function.",
      "Linking with blood flow challenges.",
      "Combined with standard care.",
    ],
    [
      ["What sheet engineering is", ["Cells are harvested sheet-like with temperature-responsive dishes and transplanted onto heart surfaces. Secretion-mediated effects are also hoped for."]],
      ["Targets and positioning", ["Severe heart failure and others are targeted, considered against drug therapy, ventricular assist devices, and transplantation. Indications are judged strictly."]],
      ["Evaluation viewpoints", ["Heart function, exercise tolerance, and long outcomes are evaluated. View standalone effects and roles within whole plans."]],
    ],
    ["用细胞片补充功能。", "与血流的协作是课题。", "与标准治疗组合。"],
    [
      ["片状工程是什么", ["用温敏培养皿把细胞片状回收，移植到心脏表面。也期待经分泌的效果。"]],
      ["对象与定位", ["重症心衰等是对象，与药物疗法、辅助人工心脏与移植的关系中探讨。适应严格判断。"]],
      ["评价视角", ["评价心功能、运动耐量与长期结局。看单独效果与整体计划中的作用。"]],
    ],
  ),
  "direct-reprogramming": b(
    [
      "Conversion without iPS stages.",
      "Efficiency and purity challenge.",
      "Direct in-body conversion is also studied.",
    ],
    [
      ["What direct conversion is", ["Methods introducing factors into skin and other cells to convert directly into nerves, heart muscle, and others. Shorter periods and lower tumorigenicity possibilities are discussed."]],
      ["Challenges", ["Conversion efficiency, maturity, and long-term stability challenge. Therapeutic application needs much verification."]],
      ["In-body attempts", ["Attempts converting in-body glia and others into nerves also exist. Target control and safety securing are premises."]],
    ],
    ["不经iPS化的转换。", "效率纯度是课题。", "也在研究体内直接转换。"],
    [
      ["直接转换是什么", ["向皮肤等细胞导入因子，直接转换为神经心肌等的方法。讨论缩短期限与降低成瘤可能。"]],
      ["课题", ["转换效率、成熟度与长期稳定性是课题。治疗应用需大量验证。"]],
      ["体内的尝试", ["也有把体内胶质等转换为神经的尝试。以靶向控制与安全确保为前提。"]],
    ],
  ),
};
