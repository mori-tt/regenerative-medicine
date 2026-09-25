// Full translated bodies (points + sections) for the new search-intent articles.
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

export const articleBodiesStemTopics: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "what-is-stem-cell": b(
    [
      "Stem cells combine self-renewal—making more stem cells—with differentiation into other cell types.",
      "They differ from ordinary cells whose roles are already fixed.",
      "The name 'stem cell' alone does not establish a treatment's benefit or safety.",
    ],
    [
      ["Definition: two abilities", [
        "A stem cell can divide to make more cells like itself (self-renewal) and turn into other cell types such as muscle, bone, or blood (differentiation). It helps to picture them as cells that remain a 'source' for tissues.",
        "The label covers many different cells. Origin, production method, and the range of cell types they can become all differ.",
      ]],
      ["How they differ from ordinary cells", [
        "Skin cells or red blood cells already have fixed roles and cannot become bone or nerve. Stem cells sit upstream and can become several cell types depending on conditions.",
        "Not all stem cells can become everything: pluripotent cells like iPS and ES cells have broad potential, while somatic stem cells in marrow or fat differentiate within a limited range.",
      ]],
      ["Why they attract attention", [
        "Stem cells are studied to replace lost cells or to support the body's own repair through the signals they release. Some uses, such as hematopoietic stem cell transplantation, are established; others remain under study.",
        "The phrase 'stem cells' alone tells you nothing about what is administered or how it works—confirm origin, processing, route, and target condition for each treatment.",
      ]],
      ["What to confirm", [
        "If materials only say 'stem cells,' ask which tissue the cells come from, whether they are yours or donor-derived, whether they were cultured, and what the treatment targets.",
        "Treatments in research and treatments delivered under regulatory procedures differ in how firmly they are supported.",
      ]],
    ],
    ["干细胞兼具自我更新与分化为其他细胞的能力。", "与功能已确定的普通细胞不同。", "'干细胞'之名本身不能证明疗效与安全性。"],
    [
      ["定义：两种能力", [
        "干细胞能分裂产生同类细胞（自我更新），也能分化为肌肉、骨、血液等其他细胞（分化）。可以把它们理解为组织的'来源'细胞。",
        "这一名称涵盖多种不同细胞，其来源、制备方式与分化范围各不相同。",
      ]],
      ["与普通细胞的差异", [
        "皮肤细胞、红细胞的角色已经固定，无法变成骨或神经。干细胞处于上游阶段，可依条件分化为多种细胞。",
        "并非所有干细胞都无所不能：iPS、ES等可多向分化，而骨髓、脂肪中的体性干细胞分化范围有限。",
      ]],
      ["受到关注的原因", [
        "干细胞被研究用于补充损失的细胞，或借助其分泌的信号协助身体修复。造血干细胞移植已属成熟应用，其余多仍在研究中。",
        "只说'干细胞'并不能说明注入什么、如何起效——请逐项确认来源、加工、途径与目标疾病。",
      ]],
      ["需要确认的点", [
        "若说明中只写'干细胞'，请询问细胞来源、自体还是异体、是否培养、治疗针对什么。",
        "研究阶段与经制度程序提供的疗法，其依据强度并不相同。",
      ]],
    ],
  ),
  "stem-cell-treatment-contents": b(
    [
      "Stem cell treatment administers a preparation of cultured cells suspended in fluid.",
      "The product may contain more than cells—suspending fluid and stabilizing additives.",
      "What to confirm differs by route: IV drip versus local injection.",
    ],
    [
      ["What is inside the preparation", [
        "What enters the body is cells—collected and usually culture-expanded—suspended in a solution such as saline. The cell itself is the active component; cell count, tissue origin, and autologous vs donor status vary by treatment.",
        "Preparations may also contain excipients and, for frozen products, residual cryoprotectants such as DMSO. Ask for the ingredient list and allergy considerations before administration.",
      ]],
      ["How the cells were made is part of the contents", [
        "Cells used directly after collection and cells expanded over weeks differ in state and in what else they carry. Culture media and serum components may remain in trace amounts.",
        "Ask not only 'what goes in' but 'how these cells were produced'—request the steps from collection to dosing in writing.",
      ]],
      ["Routes differ", [
        "IV infusion distributes the product through the bloodstream; injections into joints or skin stay near the site. Route changes both where cells go and which risks apply.",
        "The idea that IV delivery reaches the whole body evenly does not match measured distribution—see the 'Inside the body' category for details.",
      ]],
    ],
    ["干细胞治疗注入的是悬浮于液体的培养细胞制剂。", "制剂除细胞外还可能含悬浮液与添加成分。", "需确认的内容因给药途径而异。"],
    [
      ["制剂内含什么", [
        "进入体内的是经采集、通常培养扩增后悬浮于生理盐水等液体中的细胞。细胞本身是主要成分；细胞数、组织来源、自体或异体因疗法而异。",
        "制剂还可能含稳定剂等辅料，冷冻制剂可能残留DMSO等冷冻保护剂。给药前应确认成分与过敏可能性。",
      ]],
      ["细胞的制备过程也是内容的一部分", [
        "采集后直接使用与经数周培养扩增的细胞在状态及所含物质上不同，培养基与血清成分可能有微量残留。",
        "不仅要问'注入什么'，还应问'细胞如何制备'，并以书面形式确认从采集到给药的全过程。",
      ]],
      ["给药途径的差异", [
        "静脉输注使制剂随血流分布；关节腔或皮下注射则留在局部。途径不同，细胞去向与风险也不同。",
        "'输注即遍布全身'的说法与实测分布并不一致——详见'体内的动向'栏目。",
      ]],
    ],
  ),
  "iv-stem-cell-journey": b(
    [
      "IV-infused stem cells first accumulate in the lung capillaries (pulmonary first-pass).",
      "Most infused cells disappear from the body within days to weeks.",
      "Benefit is hypothesized through secreted signals, not necessarily long-lived cells.",
    ],
    [
      ["Right after infusion: the lung first", [
        "Cells entering a vein travel through the right heart and reach the lung first. Because they are larger than capillaries, many are transiently trapped there—'pulmonary first-pass.'",
        "The cells do not spread evenly through the body. Distribution depends on cell size, condition, and administration method, as repeated in animal studies.",
      ]],
      ["What happens while cells sit in the lung", [
        "Trapped cells remain active and are thought to secrete anti-inflammatory substances. In mice, lung-trapped MSCs secreted TSG-6, an anti-inflammatory protein, affecting systemic inflammation.",
        "Cell arrival at the target is not the only route of action—signals from lung-retained cells may act at a distance.",
      ]],
      ["Afterwards: redistribution and disappearance", [
        "Over time some cells leave the lung and redistribute to the liver and spleen, but the fraction is limited. Studies report that most IV MSCs do not migrate beyond the lung long term.",
        "Signal from infused cells typically becomes undetectable within days to weeks—'cells stay forever' is not supported.",
      ]],
      ["Disappearance is not the same as failure", [
        "Persistence is not required for benefit. Current thinking assigns much of the effect to secreted factors and to how the immune system handles dying cells.",
        "If a provider says 'the cells go to X and repair it,' ask what evidence exists for the route, distribution, and clearance of that specific product.",
      ]],
    ],
    ["静脉输注的干细胞首先聚集在肺毛细血管（肺首过效应）。", "多数输注细胞在数日至数周内从体内消失。", "疗效被认为经由分泌信号而非长期存活的细胞。"],
    [
      ["输注后即刻：先到肺", [
        "进入静脉的细胞经右心首先到达肺，因大于毛细血管直径而多被暂时截留——即'肺首过'。",
        "细胞并不会均匀分布全身，其分布随细胞大小、状态与给药方式而变化，动物研究反复证实了这一点。",
      ]],
      ["滞留肺内时发生什么", [
        "滞留细胞仍具活性，被认为分泌抗炎物质。小鼠研究显示肺内滞留的MSC分泌抗炎蛋白TSG-6，影响全身炎症。",
        "细胞到达靶部位并非唯一作用途径——肺内细胞释放的信号可远程起效。",
      ]],
      ["随后：再分布与消失", [
        "随时间推移部分细胞离开肺，再分布至肝、脾，但比例有限。多数静脉MSC不会长期越过肺迁移。",
        "输注细胞的信号通常在数日至数周内无法检出——'细胞长期留存'并无依据。",
      ]],
      ["消失不等于无效", [
        "获益并不需要细胞长期存在。目前认为作用主要来自分泌因子及免疫系统处理凋亡细胞的过程。",
        "若被告知'细胞会到某处修复'，请就该产品的给药途径、分布与清除询问依据。",
      ]],
    ],
  ),
  "stem-cell-biodistribution": b(
    [
      "After IV infusion most cells are trapped in the lung; some later redistribute to liver and spleen.",
      "Accumulation at injured tissue ('homing') is reported but usually involves only a fraction of the dose.",
      "Distribution data mostly come from animal studies; human whole-body quantification is scarce.",
    ],
    [
      ["How distribution is measured", [
        "Cell whereabouts are studied by labeling cells with fluorescent, luminescent, or radioactive markers and tracking them by imaging or tissue examination. Most data come from animal models; direct human measurement is limited.",
        "Read distribution claims as estimates built on animal models and limited clinical data.",
      ]],
      ["Distribution to lung, liver, spleen", [
        "Immediately after IV infusion, many cells are trapped in lung capillaries. Later, some leave the lung and redistribute to reticuloendothelial organs such as liver and spleen—an arc described across animal studies.",
        "Brain arrival is more limited still: the blood-brain barrier keeps the fraction reaching brain tissue small after IV infusion.",
      ]],
      ["Do cells gather at injured tissue?", [
        "Preferential accumulation at injured or inflamed tissue (homing) is reported, but the fraction arriving is a small part of the dose; 'nearly all cells reach the lesion' is not supported.",
        "The fraction varies with cell type, preconditioning, timing, and disease—check the conditions of each study.",
      ]],
      ["Factors that shape distribution", [
        "Cell diameter, culture conditions, dose, and route (IV, intra-arterial, local) all change distribution; engineering approaches aim to raise target-organ arrival.",
        "If a provider claims delivery to a specific organ, ask which study and which route support it—different routes produce different distributions.",
      ]],
    ],
    ["静脉输注后多数细胞滞留于肺，随后部分再分布至肝、脾。", "向损伤组织聚集（归巢）有报道，但通常仅占剂量的一小部分。", "分布数据多来自动物实验，人体全身定量数据稀缺。"],
    [
      ["分布如何测量", [
        "通过荧光、发光或放射性标记追踪细胞并借助成像或组织检查来研究其去向。多数数据来自动物模型，人体直接测量有限。",
        "请把分布的说法视为基于动物模型与有限临床数据的推断。",
      ]],
      ["肺、肝、脾的分布", [
        "静脉输注后大量细胞滞留肺毛细血管，随后部分离肺，再分布至肝、脾等网状内皮器官——多项动物研究描绘了同一过程。",
        "到达脑部更为有限：血脑屏障使静脉输注后进入脑组织的细胞占比很小。",
      ]],
      ["细胞会聚集在损伤组织吗", [
        "有向损伤或炎症组织聚集（归巢）的报道，但到达量只占剂量的一小部分；'几乎全部到达病灶'并不成立。",
        "聚集比例随细胞种类、预处理、时机与疾病而变——请核对各研究的条件。",
      ]],
      ["影响分布的因素", [
        "细胞直径、培养条件、剂量与给药途径（静脉、动脉、局部）都会改变分布；也有研究通过工程手段提高靶器官到达率。",
        "若被告知能送达特定器官，请询问其依据来自哪项研究、哪种给药途径——途径不同，分布不同。",
      ]],
    ],
  ),
  "stem-cell-survival": b(
    [
      "IV MSCs are reported to largely disappear within days to weeks.",
      "Effects are hypothesized via secreted factors, not durable engraftment.",
      "How long cells persist and how long benefit lasts are separate questions.",
    ],
    [
      ["What 'engraftment' means", [
        "Engraftment means administered cells take up residence and keep working. Some therapies assume it (hematopoietic transplant); IV MSC therapy generally does not.",
        "Ask whether a given therapy is designed around engraftment—the answer changes how persistence should be read.",
      ]],
      ["What tracking studies show", [
        "In animals, IV MSC signal fades quickly in the lung and falls below detection within days to weeks. Data supporting long-term engraftment and differentiation into tissue cells are scarce.",
        "Time to clearance varies with cell type, condition, route, and species—no single 'disappearance date' exists.",
      ]],
      ["Why disappearance is not failure", [
        "Secreted factors released while cells live, and immune processing of dying cells, may mediate effects. Short survival is consistent with therapies designed around secretion rather than replacement.",
        "Judge claims accordingly: therapies promising persistence need engraftment evidence; those promising secretion need secretion evidence.",
      ]],
    ],
    ["据报道静脉MSC大多在数日至数周内消失。", "疗效被认为经由分泌因子而非持久定植。", "细胞存续时间与疗效持续时间是两个不同问题。"],
    [
      ["'定植'的含义", [
        "定植指输注细胞在组织中安居并持续发挥作用。造血干细胞移植以定植为前提，而静脉MSC治疗一般并不以此为前提。",
        "请询问所讨论的疗法是否以定植为设计依据——答案决定应如何看待存续时间。",
      ]],
      ["示踪研究的结论", [
        "动物实验中静脉MSC的肺内信号迅速减弱，数日至数周内低于检出限。支持长期定植并分化为组织细胞的数据很少。",
        "清除时间随细胞种类、状态、途径与物种而不同，不存在统一的'消失天数'。",
      ]],
      ["消失为何不等于失败", [
        "存活期分泌的因子以及凋亡细胞被免疫处理的过程仍可能介导疗效。短暂存活与以分泌为设计前提的疗法并不矛盾。",
        "以留存为卖点的疗法需要定植证据；以分泌为卖点的疗法需要分泌物证据——请分别核对。",
      ]],
    ],
  ),
  "stem-cell-homing": b(
    [
      "Homing is the sequence by which blood-borne cells move into injured tissue.",
      "It depends on signals from damaged tissue and molecules on the cell surface.",
      "Only a fraction of the dose reaches the lesion—'almost all arrives' is not accurate.",
    ],
    [
      ["What homing is", [
        "Homing describes cells moving from the bloodstream into a specific tissue—injured tissue releases signals such as chemokines, and surface receptors on cells respond.",
        "The term is also used for leukocyte trafficking; in stem cell contexts it means administered cells accumulating at damaged or inflamed sites.",
      ]],
      ["The adhesion cascade", [
        "To exit blood, cells roll along the vessel wall, adhere firmly, then migrate between endothelial cells—an 'adhesion cascade' similar to leukocytes.",
        "MSCs perform this cascade less efficiently than leukocytes, one reason arrival at lesions is limited.",
      ]],
      ["How much actually arrives", [
        "Animal studies report preferential accumulation at injured tissue, but only a fraction of the dose. Engineering approaches—transient surface modification or targeting molecules—are being studied to raise arrival.",
        "'Homing to injured sites' is supported as a direction, but the amount, timing, and link to benefit must be checked per therapy.",
      ]],
      ["Limits", [
        "Homing efficiency varies with cell type, injury timing, and route; signals fade with time and IV cells are first trapped in the lung.",
        "Accumulation is not the same as benefit—what the gathered cells do also needs evidence.",
      ]],
    ],
    ["归巢是血液细胞迁入损伤组织的一系列过程。", "依赖损伤组织信号与细胞表面分子的配合。", "到达病灶的只是剂量的一部分，'几乎全部到达'并不准确。"],
    [
      ["什么是归巢", [
        "归巢指细胞从血流迁入特定组织：损伤组织释放趋化因子等信号，细胞表面受体作出响应。",
        "该词也用于白细胞迁移；在干细胞语境中，指输注细胞在损伤或炎症部位的聚集。",
      ]],
      ["黏附级联", [
        "细胞离开血流需在血管壁滚动、牢固黏附、再从内皮细胞间迁出——类似白细胞的'黏附级联'。",
        "间充质干细胞完成该级联的效率低于白细胞，这是病灶到达有限的原因之一。",
      ]],
      ["实际到达多少", [
        "动物研究报道了对损伤组织的偏向聚集，但仅占剂量一部分。短暂表面修饰、靶向分子等工程手段正被研究以提高到达率。",
        "'向损伤部位归巢'在方向上有依据，但聚集量、时机与疗效的关联须逐项核实。",
      ]],
      ["归巢的局限", [
        "归巢效率随细胞类型、损伤时机与给药途径而变；信号会随时间减弱，静脉给药又先经肺截留。",
        "聚集不等于获益——到达的细胞在做什么也需要证据。",
      ]],
    ],
  ),
  "stem-cell-brain-bbb": b(
    [
      "The blood-brain barrier limits what enters the brain—large cells even more so.",
      "After IV infusion, only a small fraction of cells reaches brain tissue.",
      "Claims of brain delivery need route-specific evidence.",
    ],
    [
      ["What the blood-brain barrier is", [
        "Brain vessels restrict substance entry to protect the brain. Most drugs, particles, and pathogens cannot cross, and passage of whole cells is even more difficult.",
        "In stroke or injury the barrier may be compromised, which can change penetration—but that differs from the intact brain.",
      ]],
      ["What studies show", [
        "Tracking studies generally report small amounts of cells reaching brain tissue after IV dosing. In stroke models, benefits may be mediated by secreted factors rather than cells entering the brain.",
        "The simple picture of IV cells migrating into the brain and becoming neurons is not supported by current research.",
      ]],
      ["Other delivery routes", [
        "Intra-arterial, intrathecal, and intranasal routes are under study for brain delivery. These differ from IV infusion in invasiveness and risk, and most remain investigational.",
        "Different routes mean different distribution and different risks—evaluate them separately.",
      ]],
      ["Reading 'reaches the brain' claims", [
        "When stem cell treatment is offered for brain disease, ask separately about the route, evidence of arrival (animal or human), and measured clinical effects.",
        "Secreted-factor effects are possible even when cell arrival is small—but that is a different claim requiring its own evidence.",
      ]],
    ],
    ["血脑屏障限制进入脑内的物质，细胞的通过更加受限。", "静脉输注后到达脑组织的细胞占比很小。", "声称'能到达脑'需要按给药途径核对的依据。"],
    [
      ["什么是血脑屏障", [
        "脑血管限制物质进入以保护脑。多数药物、颗粒与病原体难以通过，完整细胞的通过更为困难。",
        "卒中或外伤时屏障功能下降，通透性可能增加——但与正常脑的情况不同。",
      ]],
      ["研究所显示的到达情况", [
        "示踪研究普遍报告静脉给药后到达脑组织的细胞很少。在卒中模型中，获益可能由分泌因子介导而非细胞进入脑内。",
        "'静脉细胞迁入脑内并变成神经元'的简单图景缺乏现有研究支持。",
      ]],
      ["其他给药途径", [
        "动脉内、鞘内与鼻腔给药等脑靶向途径正在研究中，其侵入性与风险均不同于静脉输注，且多处于研究阶段。",
        "途径不同则分布与风险不同，应分别评估。",
      ]],
      ["如何解读'到达脑'的说法", [
        "针对脑疾病的干细胞治疗，应分别询问给药途径、到达证据（动物还是人体）与实际测量的疗效。",
        "即便细胞到达量小，分泌因子的作用仍有可能——但这是另一种主张，需要各自的证据。",
      ]],
    ],
  ),
  "stem-cell-antiaging-evidence": b(
    [
      "'Rejuvenation' is ambiguous—appearance and physical function are separate questions.",
      "Small trials in aging frailty exist, but they are limited in size and follow-up.",
      "Choosing a treatment on the word 'rejuvenation' alone is risky.",
    ],
    [
      ["Unpacking 'rejuvenation'", [
        "The word covers different outcomes—skin appearance, walking speed, blood markers—each requiring its own evidence and measurement.",
        "Separate marketing phrases from measured endpoints in clinical studies.",
      ]],
      ["What clinical research has tested", [
        "Small trials of IV allogeneic MSCs in aging frailty reported improvement in measures like walking distance, but enrollment was small and follow-up short; generalizable benefit is not established.",
        "For skin rejuvenation, small studies of cells or secretions exist, but confirmatory comparative trials are lacking.",
      ]],
      ["What is still unknown", [
        "Duration of benefit, who benefits, and long-term safety all remain under study. For cosmetic use the benefit-risk calculus differs from treating disease.",
        "'There is research' is not the same as 'it will work for you'—check the study's subjects, size, and endpoints.",
      ]],
      ["Reading anti-aging claims", [
        "Ask which measures were tested, over what period, and in whom. Photos and testimonials are not evidence of effect.",
        "Aging is not a disease, so no settled yardstick exists for 'treatment as rejuvenation'—weigh expectations against cost and risk.",
      ]],
    ],
    ["'年轻化'含义模糊——外观与身体机能需分别评估。", "针对老年虚弱的小型试验存在，但规模与随访有限。", "仅凭'年轻化'一词选择治疗是有风险的。"],
    [
      ["拆解'年轻化'", [
        "这个词涵盖不同结果——皮肤外观、步行速度、血液指标——各自需要独立的证据与测量。",
        "请把宣传措辞与临床研究的实测终点区分开。",
      ]],
      ["临床研究验证了什么", [
        "针对老年虚弱的小型异体MSC静脉试验报告了步行距离等指标的改善，但入组少、随访短，无法确立可推广的获益。",
        "皮肤年轻化方面也有细胞或分泌物的小规模研究，但缺乏确证性比较试验。",
      ]],
      ["仍不清楚的部分", [
        "获益持续时间、适用人群与长期安全性均在研究中。用于美容目的时，获益与风险的权衡不同于疾病治疗。",
        "'有研究'不等于'对你有效'——请核对研究对象、规模与评价指标。",
      ]],
      ["如何解读抗衰老宣传", [
        "询问检测了哪些指标、随访多久、对象是谁。照片与体验谈不构成疗效证据。",
        "衰老并非疾病，'作为治疗的年轻化'没有既定评价标准——请理性权衡期待与费用、风险。",
      ]],
    ],
  ),
  "stem-cell-skin-aging": b(
    [
      "Skin aging involves cellular changes—declining fibroblast function and collagen loss.",
      "Research examines whether stem cells or their secretions can act on skin cells.",
      "Firm clinical evidence for cosmetic benefit remains limited.",
    ],
    [
      ["What happens in skin aging", [
        "Aging and UV exposure (photoaging) reduce fibroblast activity and degrade collagen and elastin—the basis of wrinkles, laxity, and loss of elasticity.",
        "Because the changes are cellular, acting on skin cells via cells or secretions is a coherent research question.",
      ]],
      ["What research shows", [
        "Studies report that adipose-derived MSCs and their secretions can affect fibroblasts and collagen production in damaged skin models—mostly cell culture, animal work, or small observations rather than definitive human outcomes.",
        "Secretion-based approaches (conditioned media, exosome products) are studied and offered, but composition quality and standardization remain challenges.",
      ]],
      ["Offerings and cautions", [
        "Aesthetic clinics offer stem cell therapy, stem cell conditioned media, and exosome products. Despite similar names, products with and without living cells differ in intended action and risk.",
        "If told 'wrinkles disappear' or 'rejuvenates,' ask which measures were evaluated (hydration, elasticity, imaging), over what period, and against what comparison.",
      ]],
    ],
    ["皮肤老化涉及成纤维细胞功能下降与胶原流失等细胞层面变化。", "研究探讨干细胞及其分泌物对皮肤细胞的作用。", "确立美容获益的临床证据仍有限。"],
    [
      ["皮肤老化的机制", [
        "衰老与紫外线（光老化）使成纤维细胞活性下降，胶原与弹性蛋白减少变性——这是皱纹、松弛与弹性下降的基础。",
        "由于变化发生在细胞层面，'用细胞或分泌物作用于皮肤'作为研究问题是成立的。",
      ]],
      ["研究所显示的内容", [
        "研究报告脂肪来源MSC及其分泌物在受损皮肤模型中可影响成纤维细胞与胶原生成——多为细胞实验、动物实验或小规模观察，而非确定的人体结局。",
        "基于分泌物的方法（培养上清、外泌体制剂）也在研究和提供中，但成分质量与标准化仍是难点。",
      ]],
      ["现有项目与注意点", [
        "美容机构提供干细胞治疗、干细胞培养上清与外泌体制剂等。名称相近，但含活细胞与否在预期作用与风险上不同。",
        "若宣称'去皱''年轻化'，请询问评估指标（水分、弹性、影像）、观察期与对照情况。",
      ]],
    ],
  ),
  "stem-cell-cosmetic-medicine": b(
    [
      "Aesthetic uses include adipose-derived cells, SVF, conditioned media, and exosome products.",
      "Most expected benefits remain at research stage and are not established treatments.",
      "Serious adverse events have been reported abroad with unapproved products.",
    ],
    [
      ["What is offered", [
        "Offerings include infusion of one's own adipose-derived stem cells, stromal vascular fraction (SVF) from fat, and conditioned media or exosome products—aimed at skin quality or scarring.",
        "Despite similar names, products containing living cells differ from secretion-only products in intended action, risk, and required controls.",
      ]],
      ["Evidence status", [
        "Small studies and case reports exist, but large comparative trials establishing cosmetic benefit are scarce. Using the name 'adipose-derived stem cells' is not itself evidence of cosmetic effect.",
        "When providers cite 'research showing benefit,' check whether it was a cell experiment, animal study, small observation, or comparative trial.",
      ]],
      ["Reported risks", [
        "In the US, serious adverse events including bacterial infections followed unapproved stem cell and exosome products, prompting safety notifications. Self-pay treatments do not undergo the same public confirmation of quality and benefit as approved products.",
        "Cosmetic aims mean the treatment is optional by nature, so even small risks warrant stricter comparison.",
      ]],
      ["Points to check", [
        "Confirm in writing the filed provision plan, product contents (cells vs media vs exosomes), facility controls, evidence for the claimed effect, and costs including refund terms.",
        "Also confirm what happens if there is no effect and who to contact about complications.",
      ]],
    ],
    ["美容用途包括脂肪来源细胞、SVF、培养上清与外泌体制剂。", "多数预期效果仍处研究阶段，并非确立的治疗。", "海外已报告未获批产品导致的严重不良事件。"],
    [
      ["现有项目", [
        "项目包括自体脂肪来源干细胞输注、脂肪间质血管组分（SVF）、培养上清或外泌体制剂——宣称用于肤质或瘢痕。",
        "名称相近，但含活细胞的制剂与仅含分泌物的制剂在预期作用、风险与管理要求上不同。",
      ]],
      ["验证现状", [
        "有小规模研究与病例报告，但确立美容获益的大型比较试验不足；'脂肪来源干细胞'这一名称本身不是美容效果的证据。",
        "当提供方称'有研究证明有效'时，请确认是细胞实验、动物实验、小规模观察还是比较试验。",
      ]],
      ["已报告的风险", [
        "美国曾发生未获批干细胞与外泌体产品导致细菌感染等严重不良事件并发布安全通知。自费项目未经与获批产品同等的质量与疗效公共确认。",
        "美容项目本质上属于'可不做'的选择，因此即便是小风险也应更严格权衡。",
      ]],
      ["需确认的要点", [
        "请以书面确认提供计划申报情况、制剂内容（细胞/上清/外泌体的区分）、生产设施管理、声称效果的依据以及含退款条件的费用。",
        "同时确认无效时的处理与并发症的联络方式。",
      ]],
    ],
  ),
  "stem-cell-efficacy-evidence": b(
    [
      "'Does it work?' can only be answered per condition and per treatment.",
      "Established therapies (e.g., hematopoietic transplant) differ from investigational ones.",
      "Distinguish approved, insured, research, and self-paid care.",
    ],
    [
      ["There is no single answer", [
        "'Stem cell therapy' names a whole space of combinations—cell type, origin, processing, route, disease. A result for one combination does not transfer to another.",
        "Ask not 'does stem cell therapy work' but 'what is the evidence for this treatment for this condition.'",
      ]],
      ["Established therapies", [
        "Hematopoietic stem cell transplantation for leukemias is established after long validation. Japan also has approved regenerative medicine products, though indications are limited.",
        "Even established treatments are evaluated individually—'established' does not mean effective for everyone.",
      ]],
      ["Investigational therapies", [
        "For knee osteoarthritis, heart disease, stroke and others, trials report improvement on some endpoints alongside inconsistent or limited results. Meta-analyses indicate acceptable safety but call for more trials to confirm efficacy.",
        "Self-pay offerings often sit in this investigational zone without the public review that approval or insurance coverage involves.",
      ]],
      ["How to evaluate claims", [
        "Check: human or animal data; comparator present; what was measured; follow-up length. 'There is a paper' is not 'benefit proven for you.'",
        "Have providers state the specific basis for claims in words you can verify.",
      ]],
    ],
    ["'是否有效'只能按疾病与疗法分别回答。", "已确立疗法（如造血干细胞移植）与研究中的疗法有别。", "请区分获批、医保、临床研究与自费诊疗。"],
    [
      ["没有统一答案", [
        "'干细胞治疗'是细胞类型、来源、加工、途径与疾病的组合空间，一个组合的结论不能平移到另一个。",
        "不要问'干细胞治疗是否有效'，而要问'这一疗法对这一疾病有什么证据'。",
      ]],
      ["已确立的疗法", [
        "白血病等的造血干细胞移植经长期验证已确立。日本也有获批的再生医疗产品，但适应证有限。",
        "即便确立的疗法也需个体化评估——'确立'不等于对人人有效。",
      ]],
      ["研究中的疗法", [
        "在膝骨关节炎、心脏病、卒中等领域，试验报告部分指标改善，也存在结果不一致或有限的报告；荟萃分析提示安全性尚可，但有效性仍需更多试验。",
        "自费项目常处于这一研究区间，未经过获批或医保所要求的公共审查。",
      ]],
      ["如何评估疗效说法", [
        "核对：数据来自人体还是动物；有无对照；测量什么；随访多久。'有论文'不等于'对你已证明有效'。",
        "请提供方用可核实的语言说明声称效果的具体依据。",
      ]],
    ],
  ),
  "stem-cell-effect-duration": b(
    [
      "Duration differs by treatment, condition, and endpoint—there is no universal period.",
      "Many trials follow patients for months to a year; longer durability is often untested.",
      "Cell persistence and duration of benefit do not coincide.",
    ],
    [
      ["Measuring 'how long it lasts'", [
        "Asking about duration requires knowing what is measured (pain, function, imaging) and for how long patients were observed. Short-term change and one-to-several-year status are separate questions.",
        "A study's 'effect' lives inside that study's observation window; benefit beyond it is unknown from that study alone.",
      ]],
      ["Observed durations in trials", [
        "Intra-articular MSC trials in knee osteoarthritis report improvement over six months to about a year, with variable durability beyond that. Systemic infusion trials likewise observe in months.",
        "Claims such as 'works for life' or 'lasts years' need follow-up data that supports them.",
      ]],
      ["Cell persistence vs benefit duration", [
        "Cells may clear within days to weeks while secreted-factor or immune effects persist—benefit can outlast cell survival, or fade despite surviving cells.",
        "Ask 'how long does benefit last' and 'which study supports that' separately.",
      ]],
      ["What shapes duration", [
        "Disease progression, dose, repeat dosing, and lifestyle all matter. Before signing, confirm what happens if the effect fades and what retreatment conditions apply.",
      ]],
    ],
    ["持续时间因疗法、疾病与指标而异，没有统一的期限。", "多数试验随访数月至一年；更长期的持续性往往未经检验。", "细胞存续时间与疗效持续时间并不一致。"],
    [
      ["'持续多久'如何测量", [
        "讨论持续时间需明确测量什么（疼痛、功能、影像）以及观察了多久。短期变化与一至数年的状态是不同的问题。",
        "研究的'疗效'仅存在于该研究的观察窗口内；超出窗口的效果无法从该研究判断。",
      ]],
      ["试验中观察到的时长", [
        "膝骨关节炎关节腔MSC试验报告6个月至约1年的改善，之后持续时间不一；全身输注试验也多为按月观察。",
        "'终身有效''数年有效'等说法需要相应的随访数据支持。",
      ]],
      ["细胞存续与疗效持续是两回事", [
        "细胞可能在数日至数周内清除，而分泌因子或免疫效应仍在——疗效可比细胞存活更久，也可能在细胞存活时消失。",
        "请分别询问'疗效持续多久'与'依据哪项研究'。",
      ]],
      ["影响持续的因素", [
        "疾病进展、剂量、是否重复给药及生活方式均有影响。签约前请确认效果减弱时的处理与追加给药条件。",
      ]],
    ],
  ),
  "iv-stem-cell-safety": b(
    [
      "IV delivery raises concerns including transient fever, allergic-type reactions, and lodging in fine vessels.",
      "A meta-analysis of trials found no clear link to serious harm, within trial settings.",
      "Product quality and monitoring during infusion determine real-world safety.",
    ],
    [
      ["Anticipated risks", [
        "Risks considered for IV cell delivery include cells transiently lodging in lung capillaries, infusion-related fever or allergic-type reactions, and risks from product contamination. Cell size and aggregation are discussed in this context.",
        "These are monitored possibilities, not certainties.",
      ]],
      ["What trial-level summaries show", [
        "A meta-analysis of MSC trials (SafeCell) found no association with acute toxicity, organ complications, death, or malignancy, with a possible link to transient fever. Participants were trial subjects under controlled products and settings.",
        "The finding bounds what was observed in trials—it does not automatically extend to every self-pay product, facility, or method.",
      ]],
      ["What shapes safety", [
        "Manufacturing and quality control, dose and infusion rate, vital-sign monitoring, and emergency arrangements all matter. Ask what monitoring occurs and where patients go if problems arise.",
      ]],
      ["Conditions needing extra care", [
        "Severe cardiopulmonary disease, coagulation disorders, and active infection can complicate IV delivery. Disclose all conditions and medicines and leave suitability to individual medical evaluation.",
      ]],
    ],
    ["静脉给药存在一过性发热、过敏样反应及滞留微细血管等顾虑。", "临床试验荟萃分析在试验条件下未发现与严重伤害的明确关联。", "制剂质量与输注中监护决定实际安全性。"],
    [
      ["预想的风险", [
        "静脉给药的顾虑包括细胞暂时滞留肺毛细血管、输注相关发热或过敏样反应，以及制剂污染的风险。细胞大小与聚集性也在此被讨论。",
        "这些是需要监护的可能性，并非必然发生。",
      ]],
      ["试验层面汇总的结果", [
        "MSC临床试验荟萃分析（SafeCell）未发现与急性毒性、器官并发症、死亡或恶性肿瘤的相关性，但提示与一过性发热可能相关。受试者为受控条件下的试验参与者。",
        "该结论限定于试验中观察到的范围，不能直接外推至所有自费产品、机构与方法。",
      ]],
      ["决定安全性的因素", [
        "生产与质量控制、剂量与输注速度、生命体征监护与应急安排都很重要。请确认监护方式及异常时的转诊去向。",
      ]],
      ["需特别注意的情况", [
        "严重心肺疾病、凝血异常与活动性感染可能使静脉给药复杂化。请如实告知病情与用药，适用与否交由医生个体化评估。",
      ]],
    ],
  ),
  "autologous-safety": b(
    [
      "Autologous cells avoid immune rejection and donor-derived infection in principle.",
      "Risks remain across harvest, culture, and administration.",
      "'My own cells, therefore no side effects' does not hold.",
    ],
    [
      ["Advantages of autologous cells", [
        "Using your own cells avoids rejection of foreign cells and transmission of donor infections, and often removes the need for immunosuppression.",
        "This is a relative advantage over donor-derived cells—not zero risk.",
      ]],
      ["Residual risks at each step", [
        "Harvesting fat or marrow is invasive with bleeding, infection, and anesthesia risks. Culture introduces contamination and long-culture change concerns. Administration carries procedural and product-quality risks.",
        "'Own cells' reduces risk, but each step still requires management.",
      ]],
      ["What to check", [
        "Ask about harvest method and burden, culture duration and quality tests, final release testing such as sterility, and post-infusion monitoring. Beyond 'it is safe because it is yours,' look for written process controls.",
      ]],
    ],
    ["自体细胞原则上可避免免疫排斥与供者感染传播。", "采集、培养与给药各环节仍存在风险。", "'是自己的细胞所以无副作用'并不成立。"],
    [
      ["自体细胞的优势", [
        "使用自身细胞可避免对异体细胞的免疫排斥与供者感染传播，多数情况下也无需免疫抑制剂。",
        "这是相对异体细胞的优势，而非零风险。",
      ]],
      ["各环节残留的风险", [
        "脂肪或骨髓采集属于侵入性操作，有出血、感染与麻醉风险；培养过程存在污染与长期培养变化的问题；给药环节则涉及操作与制剂质量风险。",
        "'自体'降低风险，但各步骤仍需管理。",
      ]],
      ["需要确认的内容", [
        "请询问采集方法与负担、培养时长与质检、放行检测（如无菌）及输注后观察。除'自体所以安全'的说法外，还应看书面流程管理。",
      ]],
    ],
  ),
  "stem-cell-infection-risk": b(
    [
      "Cell products require sterile manufacture; weak control can cause infection.",
      "Bacterial infections have been reported abroad after contaminated stem cell products.",
      "Confirm the facility's controls and release testing.",
    ],
    [
      ["Routes of infection", [
        "Infection can arise at harvest or injection sites, through contamination during culture, donor-derived pathogens in allogeneic products, or contamination during freezing, transport, and preparation.",
        "The risk concerns the whole chain—medical procedure plus handling of biological material.",
      ]],
      ["Reported cases", [
        "US authorities' MMWR reported bacterial infections in patients after bacterially contaminated cord-blood-derived stem cell products. Transmission risk through cell and tissue products, and donor screening, have long been documented.",
        "These cases do not mean every treatment is dangerous—they show real harm is possible when controls fail.",
      ]],
      ["Controls that reduce risk", [
        "Cell processing facility standards, release tests (sterility, endotoxin, mycoplasma), donor screening, and process records are the pillars. Ask which tests are performed and how results are shared.",
      ]],
      ["Questions for the facility", [
        "Where are cells processed? Which sterility tests are run? Who do I contact if I develop fever after administration? These are basic infection-risk questions.",
      ]],
    ],
    ["细胞制剂以无菌生产为前提，管理不善可导致感染。", "海外曾报告受污染干细胞产品导致的细菌感染。", "请确认机构的管理与放行检测。"],
    [
      ["感染途径", [
        "感染可发生于采集或注射部位、培养过程污染、异体产品的供者病原体，以及冷冻、运输与配制环节。",
        "风险贯穿整个链条——医疗操作与生物材料管理。",
      ]],
      ["已报告的案例", [
        "美国MMWR报告多例患者输注受细菌污染的脐带血来源干细胞产品后发生细菌感染。细胞与组织产品传播感染的风险及供者筛查早有文献记载。",
        "这些案例不等于所有治疗都危险，而是说明管理失效时可造成实际伤害。",
      ]],
      ["降低风险的管理", [
        "细胞加工设施标准、放行检测（无菌、内毒素、支原体）、供者筛查与流程记录是支柱。请询问具体检测项目及结果告知方式。",
      ]],
      ["可向机构确认的问题", [
        "细胞在哪里加工？做哪些无菌检测？输注后发热联系谁？这些是感染风险的基本问题。",
      ]],
    ],
  ),
  "stem-cell-contraindications": b(
    [
      "Suitability is assessed individually—there is no single contraindication list.",
      "Active cancer, infection, pregnancy, and immunosuppression call for careful evaluation.",
      "Discuss with your own doctors, not only the provider.",
    ],
    [
      ["No universal list", [
        "Because 'stem cell treatment' covers many different therapies, no shared contraindication list exists. Suitability depends on the disease, cell type, route, and your condition.",
        "Trials define exclusion criteria; the conditions they list indicate states that are hard to evaluate or potentially higher risk.",
      ]],
      ["Conditions needing careful evaluation", [
        "Active malignancy (concern that cells may affect growth), active infection, pregnancy or breastfeeding, severe cardiopulmonary disease, coagulation disorders or anticoagulants, and immunosuppressive therapy commonly require careful assessment.",
        "These are not absolute bans—they are situations where benefit and risk must be weighed especially carefully. Do not self-judge; share information and consult your doctor.",
      ]],
      ["Eligibility screening", [
        "Adequate provision involves blood tests, imaging, and history review before deciding. Be cautious of providers saying 'anyone can receive it' without evaluation.",
      ]],
      ["Coordinate with your doctors", [
        "If you have ongoing conditions, consult your usual physician as well as the provider. Split information across doctors makes suitability hard to judge.",
      ]],
    ],
    ["适用与否需个体评估，无统一禁忌清单。", "活动性肿瘤、感染、妊娠、免疫抑制等需慎重评估。", "除提供机构外也应与自己的主治医生商议。"],
    [
      ["没有统一清单", [
        "干细胞治疗涵盖多种疗法，没有共同禁忌清单。适用性取决于疾病、细胞类型、途径与自身状况。",
        "临床试验设有排除标准；其中所列情况提示评估困难或潜在高风险的群体。",
      ]],
      ["需慎重评估的情况", [
        "活动性恶性肿瘤（担心细胞参与增殖）、活动性感染、妊娠哺乳、严重心肺疾病、凝血异常或抗凝药使用、免疫抑制治疗中通常需要慎重评估。",
        "这些并非绝对禁忌，而是需特别权衡获益与风险的情形。请勿自行判断，应与医生沟通。",
      ]],
      ["适用性筛查", [
        "规范的提供会先进行血液检查、影像与病史评估后再判断。对不经评估就说'人人都能做'的机构要保持警惕。",
      ]],
      ["与自己的医生沟通", [
        "有慢性病者除提供机构外还应咨询主治医生。信息分散在不同医生处会使适用性难以判断。",
      ]],
    ],
  ),
  "bone-marrow-vs-adipose": b(
    [
      "Bone marrow and fat are the representative sources of MSCs.",
      "Harvest burden and yield differ; cell properties share much in common.",
      "Which is 'better' depends on use and conditions—no universal winner.",
    ],
    [
      ["The two sources", [
        "Bone marrow MSCs come from marrow aspirated from the iliac crest; adipose MSCs come from suctioned subcutaneous fat. Marrow aspiration is more invasive; fat yields more easily—but both procedures carry risk.",
        "Both then rely on the same step: culturing adherent cells to expand MSCs.",
      ]],
      ["Comparative studies", [
        "Donor-matched comparisons find broad similarity in surface markers and basic differentiation, with differences reported in proliferation and differentiation tendencies. 'Better' depends on purpose and conditions.",
        "These are culture-condition comparisons; they do not directly compare patient outcomes.",
      ]],
      ["How they are used", [
        "Adipose-derived cells are common in aesthetic and self-pay regenerative care; bone marrow-derived cells appear in orthopedic and trial settings. Usage reflects harvest practicality as much as biology.",
      ]],
      ["What to ask", [
        "Why this source? What are the harvest burden and risks? Source alone does not rank effectiveness.",
      ]],
    ],
    ["骨髓与脂肪是间充质干细胞的代表来源。", "采集负担与得量不同，细胞性质则多有共通。", "孰优孰劣取决于用途与条件，没有绝对答案。"],
    [
      ["两种来源", [
        "骨髓MSC取自髂骨骨髓穿刺液；脂肪MSC取自抽吸的皮下脂肪。骨髓穿刺侵入性较强，脂肪较易获取，但两者都有操作风险。",
        "之后都经同样步骤：培养贴壁细胞以扩增MSC。",
      ]],
      ["比较研究", [
        "同一供者的比较显示表面标志与基本分化潜能高度相似，增殖与分化倾向上有差异报告。'更好'取决于目的与条件。",
        "这些是培养条件下的比较，并不直接对应患者结局优劣。",
      ]],
      ["使用方式", [
        "脂肪来源常见于美容与自费再生医疗；骨髓来源见于骨科与研究场景。使用差异不仅反映生物学，也反映采集便利性。",
      ]],
      ["应询问的内容", [
        "为什么选择这个来源？采集负担与风险是什么？仅凭来源无法判断疗效优劣。",
      ]],
    ],
  ),
  "stem-cell-sources": b(
    [
      "Stem cells are collected from fat, bone marrow, umbilical cord, and dental pulp.",
      "Sources differ in harvest burden and cell characteristics.",
      "Cord-derived cells are necessarily donor-derived, not autologous.",
    ],
    [
      ["Main sources", [
        "Fat is easy to aspirate and widely used in self-pay care; marrow requires puncture with greater burden but a long research history; cord (Wharton's jelly) uses postnatal tissue with no harvest morbidity for the donor but is allogeneic; dental pulp from extracted teeth is also studied.",
        "Reported differences in proliferative traits and secreted-factor tendencies exist across sources.",
      ]],
      ["Harvest burden", [
        "Autologous harvest means you undergo the procedure (liposuction or marrow aspiration) with its burden and risk. With donor-derived cells there is no harvest burden for you, but donor testing and manufacturing control become the issues.",
        "'Easy to collect' is not itself a measure of treatment quality—weigh harvest burden and cell suitability separately.",
      ]],
      ["Source and self/donor status", [
        "Fat and marrow can be autologous or allogeneic. Cord, cord blood, and placenta are effectively allogeneic. Your own vs donor cells matters for immunity, infection, and preparation time.",
      ]],
      ["Points to confirm", [
        "Where do the cells come from? Autologous or donor? What is the harvest burden and risk? Confirm these early in any explanation.",
      ]],
    ],
    ["干细胞可从脂肪、骨髓、脐带、牙髓等采集。", "各来源在采集负担与细胞特性上不同。", "脐带来源必然为异体，而非自体。"],
    [
      ["主要来源", [
        "脂肪易抽吸、在自费诊疗中常用；骨髓穿刺负担较大但研究历史长；脐带（华通氏胶）利用分娩后组织、对供者无采集创伤但属异体；拔除牙的牙髓也在研究中。",
        "据报道不同来源在增殖特性与分泌因子倾向上存在差异。",
      ]],
      ["采集负担", [
        "自体采集意味着本人要承受抽脂或骨髓穿刺的负担与风险；异体来源则本人无采集负担，但供者检测与生产管理成为问题。",
        "'易采集'本身不是疗效指标——请分开看待采集负担与细胞适用性。",
      ]],
      ["来源与自体/异体的关系", [
        "脂肪与骨髓可为自体或异体；脐带、脐血与胎盘实质上为异体。自体或异体关系到免疫、感染与准备时间。",
      ]],
      ["需确认的点", [
        "细胞来自哪里？自体还是异体？采集的负担与风险如何？请尽早确认。",
      ]],
    ],
  ),
  "stemcell-exosome-prp": b(
    [
      "Stem cell therapy uses living cells; exosome therapy uses cell-derived vesicles; PRP uses your own platelets.",
      "They differ in material and proposed action but are often lumped together as 'regenerative medicine.'",
      "Knowing what is administered is the basis for comparison.",
    ],
    [
      ["What each therapy uses", [
        "Stem cell therapy administers collected, usually cultured cells. Exosome therapy uses preparations containing extracellular vesicles released by cells—no living cells. PRP concentrates platelets from your own blood, without cell culture.",
        "The first dividing lines: are living cells administered, is it your own material, is culture involved?",
      ]],
      ["Proposed actions differ", [
        "Stem cells are thought to act through secreted factors (paracrine) and interaction with tissue. Exosome therapy uses a subset of those secretions. PRP aims at local repair via growth factors released from platelets.",
        "None amounts to a simple 'tissue regenerates' picture—each is under condition-specific evaluation.",
      ]],
      ["Evidence and regulation", [
        "PRP has accumulated comparative trials in orthopedics; conclusions differ by indication. Stem cell therapy varies by disease. Exosome products are a newer area with standards and regulation still developing.",
        "Same-sounding names do not mean same evidence or same regulatory status.",
      ]],
      ["How to compare", [
        "Ask in order: what is administered, is it autologous, how is it made, what evidence exists, what does it cost and what are the risks.",
      ]],
    ],
    ["干细胞治疗用活细胞；外泌体治疗用细胞分泌的囊泡；PRP用自体血小板。", "三者材料与作用机制不同，却常被统称为'再生医学'。", "弄清注入体内的是什么，是比较的基础。"],
    [
      ["各自使用什么", [
        "干细胞治疗输注经采集、通常培养的细胞；外泌体治疗使用细胞分泌的细胞外囊泡制剂，不含活细胞；PRP将自体血液中的血小板浓缩，不涉及细胞培养。",
        "先分清：是否含活细胞、是否自体、是否经过培养。",
      ]],
      ["预期作用不同", [
        "干细胞被认为通过分泌因子（旁分泌）及与组织的相互作用起效；外泌体治疗利用其中一部分分泌物；PRP通过血小板释放的生长因子促进局部修复。",
        "三者都不是'组织再生'的简单图景，均需按适应证分别评估。",
      ]],
      ["证据与监管", [
        "PRP在骨科领域已有比较试验积累，但结论因适应证而异；干细胞治疗因疾病不同；外泌体制剂属较新领域，标准与监管仍在完善。",
        "名称相近不代表证据与监管地位相同。",
      ]],
      ["如何比较", [
        "按顺序确认：注入什么、是否自体、如何制备、有何证据、费用与风险如何。",
      ]],
    ],
  ),
  "five-points-before-treatment": b(
    [
      "Check the evidence for your specific condition.",
      "Confirm risks, alternatives, costs, and the provider's arrangements in writing.",
      "Take materials home and consult others before deciding.",
    ],
    [
      ["1. Evidence for your condition", [
        "Ask 'what research exists for my condition specifically.' Check the target disease, eligible population, and measured outcomes—results for other diseases do not transfer.",
      ]],
      ["2. Risks and alternatives", [
        "Ask about possible side effects and complications, the chance of no benefit, and other treatment options—including what happens if you do not receive this treatment.",
      ]],
      ["3. The full cost picture", [
        "Confirm the total cost across collection, culture, administration, visits, and tests; additional fees; and the terms if you stop or see no benefit. High cost is not proof of effect.",
      ]],
      ["4. Provision arrangements and filing", [
        "Check the provision plan filing under the Act on the Safety of Regenerative Medicine, the cell processing facility, and emergency arrangements. A filing is not a guarantee of effect, but it is a starting check.",
      ]],
      ["5. Take time before deciding", [
        "Take the explanation materials home and consult your doctor, family, or a second opinion. Pressure to sign on the spot is itself a warning sign.",
      ]],
    ],
    ["核对针对自己病情的疗效依据。", "以书面确认风险、替代方案、费用与提供体制。", "把资料带回家与他人商量后再决定。"],
    [
      ["1. 针对自身状况的证据", [
        "请问'对我的这个病有什么研究'。确认目标疾病、适用人群与评价指标——其他疾病的结果不能直接套用。",
      ]],
      ["2. 风险与替代方案", [
        "询问可能的副作用与并发症、无效的可能性，以及其他治疗选择——包括不接受该治疗时的预期病程。",
      ]],
      ["3. 费用全貌", [
        "以书面确认采集、培养、给药、复诊与检查的总费用、追加费用以及中止或无效时的处理。费用高并不等于疗效好。",
      ]],
      ["4. 提供体制与申报", [
        "确认依《再生医疗等安全性确保法》提交的提供计划、细胞加工设施与应急体制。有申报不代表疗效保证，但这是基本的核查点。",
      ]],
      ["5. 不要急于决定", [
        "把说明资料带回家，与主治医生、家人或第二诊疗意见商议。催促当场签约本身就是警示信号。",
      ]],
    ],
  ),
  "paracrine-effect": b(
    [
      "Paracrine action means substances secreted by a cell act on neighboring cells.",
      "For MSCs, secreted factors are now considered the main route of effect.",
      "This idea underlies cell-free approaches such as exosome products.",
    ],
    [
      ["What paracrine action is", [
        "Cells secrete hormones, cytokines, growth factors, and extracellular vesicles that act on nearby cells, dampening inflammation or promoting repair.",
        "Unlike endocrine action through the bloodstream to the whole body, paracrine action is mainly local.",
      ]],
      ["How thinking shifted", [
        "Early work expected infused cells to engraft and become new tissue cells. Tracking studies found limited engraftment, and attention moved to secreted factors—the 'paracrine hypothesis.'",
        "In a mouse study, lung-trapped MSCs secreted the anti-inflammatory protein TSG-6 and reduced distant cardiac inflammation—evidence that secretion can act without cells reaching the target.",
      ]],
      ["What is secreted", [
        "Growth factors (VEGF, HGF), cytokines (IL-6), anti-inflammatory mediators (TSG-6, PGE2) and extracellular vesicles including exosomes. Which of them matter varies by model and condition.",
        "Secretion profiles change with cell source and culture conditions—'paracrine effect' is not a uniform claim.",
      ]],
      ["What this means for reading therapy claims", [
        "If secretion is the main route, 'what the cells secrete' matters more than 'where cells persist.' It also grounds cell-free approaches using conditioned media or exosome products.",
        "Either way, benefit must be demonstrated per treatment—mechanism is not proof.",
      ]],
    ],
    ["旁分泌作用指细胞分泌的物质作用于邻近细胞。", "间充质干细胞的作用现认为主要经由分泌因子。", "这一思路也是外泌体等无细胞疗法的基础。"],
    [
      ["什么是旁分泌作用", [
        "细胞分泌激素、细胞因子、生长因子与细胞外囊泡，作用于邻近细胞，抑制炎症或促进修复。",
        "与经血流作用于全身的内分泌不同，旁分泌主要是局部性的。",
      ]],
      ["认识的转变", [
        "早期研究期待输注细胞定植并变成新的组织细胞；示踪研究显示定植有限，关注点转向分泌因子——即'旁分泌假说'。",
        "小鼠实验中肺内滞留的MSC分泌抗炎蛋白TSG-6并减轻远处心肌炎症，说明分泌物可在细胞不到达靶组织的情况下发挥作用。",
      ]],
      ["分泌的物质", [
        "生长因子（VEGF、HGF）、细胞因子（IL-6）、抗炎介质（TSG-6、PGE2）与含外泌体的细胞外囊泡。何者起作用因模型与条件而异。",
        "分泌谱随细胞来源与培养条件而变，'旁分泌有效'不能一概而论。",
      ]],
      ["对理解疗法的意义", [
        "若分泌是主要途径，'细胞分泌什么'比'细胞留在哪里'更重要。它也构成了使用培养上清或外泌体制剂的无细胞方法的基础。",
        "无论哪种方式，疗效都需逐项验证——机制不等于疗效证明。",
      ]],
    ],
  ),
  "msc-secretome": b(
    [
      "The 'secretome' is everything stem cells secrete—cytokines, growth factors, extracellular vesicles.",
      "Exosomes are small membrane vesicles carrying signals between cells.",
      "Secretion-based products need separate evaluation from cell therapy.",
    ],
    [
      ["What the secretome is", [
        "The secretome covers soluble proteins (cytokines, growth factors) and extracellular vesicles released by cells; conditioned media is liquid containing the secretome.",
        "Its composition varies with cell source, culture conditions, and stimulation—'conditioned media' is not a fixed substance.",
      ]],
      ["Cytokines and growth factors", [
        "MSCs are reported to secrete VEGF (vessel growth), HGF (repair), IL-6 and TGF-β (inflammation regulation), and anti-inflammatory PGE2 and TSG-6—these drive the paracrine action on surrounding cells.",
      ]],
      ["Exosomes", [
        "Exosomes are membrane vesicles tens to ~150 nm across carrying miRNAs and proteins—cargo exchanged between cells that can alter recipient behavior.",
        "Cell-free therapy using them is an active research area, but product standardization, quality control, and regulatory status are still developing.",
      ]],
      ["Secretion-based products", [
        "Conditioned media and exosome products are offered in aesthetic and other settings; composition, consistency, and supporting evidence need per-product confirmation. A product without cells is not 'stem cell therapy.'",
      ]],
    ],
    ["'分泌组'是干细胞分泌的全部物质——细胞因子、生长因子与细胞外囊泡。", "外泌体是在细胞间传递信号的小膜泡。", "分泌物制剂需要独立于细胞治疗进行评估。"],
    [
      ["什么是分泌组", [
        "分泌组涵盖细胞分泌的可溶性蛋白（细胞因子、生长因子）与细胞外囊泡；条件培养基即含分泌组的液体。",
        "其组成随细胞来源、培养条件与刺激而变——'培养上清'并非固定成分的物质。",
      ]],
      ["细胞因子与生长因子", [
        "据报道MSC分泌VEGF（血管生成）、HGF（修复）、IL-6与TGF-β（炎症调节）以及抗炎的PGE2、TSG-6等——这些构成对周围细胞的旁分泌作用。",
      ]],
      ["外泌体", [
        "外泌体是直径数十至约150纳米的膜泡，携带miRNA与蛋白质，是细胞间交换的'货物'，可改变接收细胞的行为。",
        "基于外泌体的无细胞治疗是活跃研究领域，但制剂标准化、质量控制与监管定位仍在完善中。",
      ]],
      ["分泌物制剂", [
        "培养上清与外泌体制剂已在美容等领域提供；成分、一致性与支持证据需逐项确认。不含细胞的产品不应称作'干细胞治疗'。",
      ]],
    ],
  ),
  "msc-immunomodulation": b(
    [
      "MSCs are reported to modulate immune cells including T cells, B cells, NK cells, and macrophages.",
      "This property drives research into transplant immunity and inflammatory disease.",
      "'Suppressing immunity' carries both benefit and risk.",
    ],
    [
      ["What immunomodulation means", [
        "MSCs are reported to dampen excessive immune responses—suppressing T-cell proliferation and shifting the balance between inflammatory and regulatory cells in laboratory and animal studies.",
        "This is 'adjusting the balance,' not 'boosting immunity.'",
      ]],
      ["Mechanistic routes", [
        "Reported mediators include PGE2, IDO, TGF-β, and extracellular vesicles; effects of immune cells processing dying MSCs are also studied.",
        "Strength varies with cell state, source, and the inflammatory environment—the same action does not occur every time.",
      ]],
      ["Studied applications", [
        "Applications under study include transplant rejection, GVHD, and inflammatory disease. This immune relationship also underlies why allogeneic MSC use is considered feasible.",
      ]],
      ["Two sides of 'suppressing immunity'", [
        "Dampening excess inflammation can help, but weakening needed defenses is a theoretical risk. Active infection or malignancy calls for especially careful evaluation.",
      ]],
    ],
    ["据报道MSC可调节T细胞、B细胞、NK细胞与巨噬细胞等。", "这一性质推动了在移植免疫与炎症性疾病中的研究。", "'抑制免疫'同时意味着获益与风险。"],
    [
      ["什么是免疫调节", [
        "据报道MSC可抑制过强的免疫反应——在实验与动物研究中抑制T细胞增殖，并改变炎症性与调节性细胞的平衡。",
        "这是'调整平衡'，而非'增强免疫力'。",
      ]],
      ["作用途径", [
        "报道的介质包括PGE2、IDO、TGF-β与细胞外囊泡；免疫细胞处理凋亡MSC产生的效应也在研究中。",
        "作用强度随细胞状态、来源与炎症环境而变，并非每次都相同。",
      ]],
      ["研究中的应用方向", [
        "研究中的方向包括移植排斥、GVHD与炎症性疾病。MSC与免疫的这种关系也是'异体可用'的部分依据。",
      ]],
      ["'抑制免疫'的双面性", [
        "抑制过度炎症可能带来获益，但理论上也有削弱必要防御的风险。活动性感染或恶性肿瘤时尤需慎重评估。",
      ]],
    ],
  ),
  "stem-cell-mechanism": b(
    [
      "Two models explain stem cell therapy: cell replacement and paracrine (secreted-factor) action.",
      "For many IV uses, paracrine signaling is now considered the main route.",
      "A mechanism description is a hypothesis, not proof of benefit.",
    ],
    [
      ["Two models of action", [
        "In the cell-replacement model, administered cells engraft and differentiate to replace tissue. In the paracrine model, secreted factors act on surrounding cells and the immune system.",
        "The same words 'stem cell therapy' can assume different models, changing what 'works' would even mean.",
      ]],
      ["Does replacement actually happen?", [
        "In hematopoietic transplantation, engraftment and rebuilding is the real mechanism. For IV MSCs, tracking studies show limited long-term engraftment and differentiation.",
        "Claims built on 'cells becoming tissue' need engraftment evidence to match.",
      ]],
      ["Why the secretion model rose", [
        "Effects were observed despite limited engraftment, moving attention to secreted factors. Lung-retained cells affecting distant organs have been reported.",
        "In this model the questions are 'what is secreted' and 'what signals cells respond to' rather than 'where cells settle.'",
      ]],
      ["Reading mechanism claims", [
        "Mechanism describes how benefit could occur—not that it does. Clinical efficacy still needs trials.",
        "Ask which model a therapy assumes and which studies support it.",
      ]],
    ],
    ["干细胞治疗有两种作用模型：细胞替代与旁分泌。", "多数静脉用途现认为以旁分泌为主要途径。", "机制说明是假说，不是疗效证明。"],
    [
      ["两种作用模型", [
        "细胞替代模型指输注细胞定植并分化以替代组织；旁分泌模型指分泌因子作用于周围细胞与免疫系统。",
        "同是'干细胞治疗'，所依据的模型不同，'有效'的含义也不同。",
      ]],
      ["替代真的会发生吗", [
        "造血移植中定植与重建是真实机制；而静脉MSC的示踪研究显示长期定植与分化有限。",
        "以'细胞变成组织'为依据的说法需要相应的定植证据。",
      ]],
      ["分泌模型为何兴起", [
        "在定植有限的情况下仍观察到效应，使关注点转向分泌因子；已有肺内滞留细胞影响远隔器官的报道。",
        "这一模型下要问的是'分泌什么''对什么信号响应'，而非'细胞在何处定居'。",
      ]],
      ["如何解读机制说法", [
        "机制描述的是'可能如何起效'，而非'确实有效'；临床有效性仍需试验验证。",
        "请询问疗法所依据的模型及支持研究。",
      ]],
    ],
  ),
};
