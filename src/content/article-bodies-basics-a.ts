// Translated bodies for basics articles, part A (cells/organs through proteins).
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

export const articleBodiesBasicsA: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "cells-tissues-organs": b(
    [
      "Bodies are cells gathered into tissues, and tissues gathered into organs.",
      "Some tissues like blood and skin renew actively; others do not.",
      "Knowing the target tissue makes explanations easier to organize.",
    ],
    [
      [
        "How gathered cells make the body",
        [
          "Human bodies are said to hold about 37 trillion cells. Cells with similar workings gathered are “tissues”; tissues combined for specific workings are “organs.”",
          "Blood, skin, muscle, bone, and nerves are each different tissues, differing in renewal speed and ease of repair.",
        ],
      ],
      [
        "Repair mechanisms already in the body",
        [
          "Healing cuts and mending bones come from built-in repair workings. Regenerative medicine aims to restore lost functions by using these mechanisms or supplementing cells.",
          "But not every tissue regenerates alike. Research progress and treatment options differ greatly by target disease and tissue.",
        ],
      ],
      [
        "Sorting frequently seen words",
        [
          "“Differentiation” means cells becoming cells with specific roles, “culture” means growing cells outside the body, and “transplantation” means returning cells or tissue to the body. Knowing meanings makes news and brochures easier to read.",
          "With unfamiliar words, check glossaries and public-agency explainer pages.",
        ],
      ],
    ],
    ["身体是细胞聚成组织、组织聚成器官。", "血液皮肤等更新活跃的组织与不活跃的组织都有。", "知道以哪种组织为目标，内容易整理。"],
    [
      ["细胞聚集成的身体", ["人体据说由约37万亿细胞构成。相同功能的细胞聚集是“组织”，组织组合发挥特定功能是“器官”。", "血液皮肤肌肉骨骼神经是不同组织，细胞更新速度与易修复性各异。"]],
      ["身体自带的修复机制", ["伤口愈合与骨折连接靠身体自带的修复功能。再生医学旨在利用这些机制或补充细胞，恢复失去的功能。", "但并非所有组织同样再生。按对象疾病组织，研究进展与治疗选项大不相同。"]],
      ["常见词语整理", ["“分化”指细胞成为有特定功能的细胞，“培养”指体外扩增细胞，“移植”指把细胞组织放回体内。懂词义新闻与说明资料更易读。", "遇到不懂的词，用术语表与公共机构解说页确认。"]],
    ],
  ),
  "regenerative-medicine-history": b(
    [
      "Transfusion and hematopoietic stem cell transplantation pioneered cell-based medicine.",
      "ES and iPS cells greatly widened research.",
      "History shows “new” never equals “established treatment.”",
    ],
    [
      [
        "Origins of cell-using medicine",
        [
          "Blood transfusion and hematopoietic stem cell transplantation for leukemia and others have long served as cell-based medicine. Cultured skin and cartilage treatments also accumulated as tissue-repair efforts.",
          "These were verified for safety and effectiveness over long years, with usage becoming defined.",
        ],
      ],
      [
        "Arrival of ES and iPS cells",
        [
          "Human ES cell establishment in 1998 and human iPS cell reports in 2007 greatly advanced research producing diverse cells. Basic and clinical studies toward neural, heart muscle, and retinal applications have since spread.",
          "But research expansion and expansion of daily-care treatments never move at the same speed. Separate breakthrough announcements from distances to practical use.",
        ],
      ],
      [
        "What stage are we at now",
        [
          "In Japan, while some treatments are approved as regenerative medical products, many remain mid-research and development. Privately provided treatments differ from insured and trial-based ones in positioning and checkpoints.",
          "With history in mind, the attitude of checking which stage each treatment sits at helps.",
        ],
      ],
    ],
    ["输血与造血干细胞移植是用细胞医疗的先驱。", "ES与iPS细胞的登场大大拓宽研究。", "懂历史就明白“新”不等于“成熟治疗”。"],
    [
      ["用细胞医疗的原点", ["血液输血与针对白血病等的造血干细胞移植，长期作为用细胞的医疗。培养表皮与软骨治疗等也作为组织修复举措积累。", "这些经长年验证安全性有效性，用法得以确定。"]],
      ["ES与iPS登场", ["1998年人ES建系、2007年人iPS报告，大大推进制造多种细胞的研究。此后以神经心肌视网膜应用为目标的基础与临床研究扩展。", "但研究扩展与日常诊疗可用治疗的扩展速度不同。把划时代发表与到实用化的距离分开想很重要。"]],
      ["现在是什么阶段", ["日本一面有作为再生医学产品获批的治疗，一面多数在研究开发途中。自由诊疗提供的治疗与保险诊疗、临床试验的治疗定位与确认点不同。", "立足历史，按每种治疗确认“处于哪个阶段”的姿态有用。"]],
    ],
  ),
  "three-approaches": b(
    [
      "Methods supplementing cells themselves and methods combining scaffolds exist.",
      "Research boosting built-in repair with drugs also advances.",
      "Different methods mean different measures and risks.",
    ],
    [
      [
        "1. Supplementing by transplanting cells",
        [
          "Methods supplementing lacking or damaged cells with externally prepared cells. Hematopoietic stem cell transplantation for blood diseases is the representative example, with applications to diverse organs studied.",
          "Whose cells to use (your own or others') and how to make target cells differ by treatment.",
        ],
      ],
      [
        "2. Building tissues with scaffolds",
        [
          "When cells alone cannot hold shapes, “tissue engineering” combines scaffold materials to make sheet-like or 3D tissues. Skin, cartilage, and heart muscle sheet studies are examples.",
          "Both shape-making techniques and verification that built tissues keep working long matter.",
        ],
      ],
      [
        "3. Drawing out built-in repair",
        [
          "Studies also prompt in-body stem cells and repair workings with drugs and proteins instead of direct transplants. Possibly lighter bodily burden, but verification is needed on whether intended workings occur at intended places.",
          "Whichever approach, effects and safety must be confirmed per treatment and disease.",
        ],
      ],
    ],
    ["有补充细胞本身的方法，也有结合支架的方法。", "用药物激发自带修复的研究也在推进。", "方法不同，效果测法与风险不同。"],
    [
      ["1. 移植细胞来补充", ["用体外准备的细胞补充不足损伤细胞的方法。针对血液病的造血干细胞移植是代表例，向多种器官的应用在研究。", "用谁的细胞（自己还是他人）、如何制作目标细胞，因治疗而异。"]],
      ["2. 结合支架造组织", ["仅细胞难保持形状时，用支架材料组合制作片状立体组织的“组织工程”手法。皮肤软骨心肌片等研究是例子。", "造形技术与制成组织长期工作的验证都重要。"]],
      ["3. 激发自带修复", ["也有不用直接移植细胞，用药物蛋白质等激发体内干细胞与修复功能的研究。身体负担可能小，但需验证是否在目标位置发生目标作用。", "无论哪种路径，效果安全性都要按治疗疾病确认。"]],
    ],
  ),
  "myths-and-facts": b(
    [
      "“New treatments” are not always “proven treatments.”",
      "Not all stem cells are alike.",
      "No evidence says pricier treatments work better.",
    ],
    [
      [
        "Myths 1–2: neither almighty nor immediately available",
        [
          "Myth 1, “regenerative medicine works for any disease”: target diseases and states are set per treatment. Individually confirm evidence fitting your disease.",
          "Myth 2, “research news means treatment next year”: long verification lies between basic research and actual treatment. Read news together with which stage it reports.",
        ],
      ],
      [
        "Myths 3–4: cell types and safety",
        [
          "Myth 3, “all stem cells are alike”: iPS, ES, and somatic stem cells differ in origin and properties. Even within one type, evaluations change with making and use.",
          "Myth 4, “my own cells are safe”: even autologous cells carry risks from culture, processing, and administration. Safety is verified per treatment.",
        ],
      ],
      [
        "Myth 5: costs versus effects",
        [
          "Myth 5, “pricier treatments work better”: price never proves effects. Compare cost breakdowns, supporting data, other options, and post-treatment care.",
          "When unsure, third-party views through primary physicians and second opinions help.",
        ],
      ],
    ],
    ["“新治疗”未必是“效果确证的治疗”。", "干细胞并非都一样。", "没有越贵越有效的依据。"],
    [
      ["误解12：非万能，也未必马上能用", ["误解1“再生医学什么病都有效”：对象疾病状态按治疗规定。请个别确认适合自己病的依据。", "误解2“研究新闻等于明年成治疗”：基础研究到实际治疗需长期验证。读新闻结合“哪个阶段的成果”一起读。"]],
      ["误解34：细胞种类与安全性", ["误解3“干细胞都一样”：iPSES体干细胞来源性质各异。即使同种，制作用法不同评价改变。", "误解4“自己细胞就安全”：即使自体，培养加工过程与给药方式也有风险。安全性按治疗验证。"]],
      ["误解5：费用与效果的关系", ["误解5“越贵越有效”：价格不是效果证明。结合费用明细、依据数据、其他选择与治疗后应对比较。", "犹豫时听主治医生与第二意见等第三方意见有用。"]],
    ],
  ),
  "body-repair-mechanisms": b(
    [
      "Inflammation signals the start of repair.",
      "Scars (marks) and regeneration are different outcomes.",
      "Organs differ in repair strengths and weaknesses.",
    ],
    [
      ["Inflammation starts repair", ["Redness and swelling around cuts signal immune and repair-related cells gathering. Inflammation itself is not the villain; view it as cleaning broken tissue and preparing repair."]],
      ["Differences between scars and regeneration", ["As deep skin wounds become marks, closing with different-structured tissue is scarring. Returning original structures and workings is regeneration. Regenerative medicine aims closer to the latter, with difficulty varying by target and conditions."]],
      ["Strengths and weaknesses by organ", ["Liver, skin, and blood actively renew and repair relatively well. Heart muscle and central nerves are said to hardly return once lost, becoming research focus areas. Knowing target organ properties clarifies stories."]],
    ],
    ["炎症是修复开始的信号。", "瘢痕（伤痕）与再生是不同结果。", "器官有修复擅长与不擅长。"],
    [
      ["炎症是修复的开始", ["伤口周围红肿是免疫与修复相关细胞聚集的信号。炎症本身不是坏人，可看作清理破损组织与准备修复的阶段。"]],
      ["瘢痕与再生的区别", ["如皮肤深伤成伤痕，用不同结构组织填补是瘢痕。恢复原结构功能是再生。再生医学以接近后者为目标，难易因对象条件而异。"]],
      ["器官的擅长不擅长", ["肝脏皮肤血液更新活跃、修复相对擅长。心肌与中枢神经据说一旦失去难回，是研究重点。知道对象器官性质，话题更易看清。"]],
    ],
  ),
  "self-vs-donor-cells": b(
    [
      "Autologous means your own cells; allogeneic means donor cells.",
      "Rejection, manufacturing time, and cost viewpoints differ.",
      "Which excels differs by treatment.",
    ],
    [
      ["Using your own cells", ["Self-collected cells are considered favorable for immune matching. But collection burden, manufacturing time and costs, and per-person quality variation challenge."]],
      ["Using others' cells", ["Pre-prepared and tested allogeneic cells can be used promptly when needed, possibly favoring quality uniformity and costs. Rejection measures and infection testing systems matter."]],
      ["Viewpoints when briefed", ["Ask who collects, checks, and uses whose cells how. Autologous-allogeneic distinctions also affect visit counts, waiting periods, and costs. Confirm individual explanations since premises differ per treatment."]],
    ],
    ["自体是自己细胞，异体是他人来源。", "排斥、制造期限与费用视角不同。", "孰优因治疗而异。"],
    [
      ["用自体细胞时", ["自己采集的细胞在免疫相合面有利。但采集负担、制造时间费用与每人质量波动是课题。"]],
      ["用异体细胞时", ["事先准备检验的异体细胞需要时迅速可用，在质量均一与费用面可能有利。排斥对策与感染等检验体制重要。"]],
      ["接受说明时的视角", ["问“谁的细胞，如何收集确认使用”。自体异体区分也关系复诊次数等待期限费用。治疗前提各异，确认个别说明。"]],
    ],
  ),
  "differentiation-basics": b(
    [
      "Differentiation is change fixing roles.",
      "Reprogramming resembles initialization.",
      "Word definitions wobble slightly by context.",
    ],
    [
      ["What differentiation is", ["As diverse body cells arise from fertilized eggs, undifferentiated cells changing into role-fixed cells is differentiation. In regenerative medicine it means making target cells like nerves and heart muscle from stem cells."]],
      ["What reprogramming is", ["It means operations returning role-fixed body cells into states able to become diverse cells. iPS cell production is the representative example. It drew attention as change opposite to normal development."]],
      ["Handling the word dedifferentiation", ["Phenomena of differentiated cells returning toward undifferentiated states are sometimes called dedifferentiation. Strictness differs across studies and materials, so confirm meanings within each material when unsure."]],
    ],
    ["分化是角色确定的变化。", "重编程接近初始化的思路。", "词语定义随语境略有浮动。"],
    [
      ["分化是什么", ["如受精卵生出身体各种细胞，未分化细胞变为角色确定细胞是分化。再生医学中指从干细胞制作神经心肌等目标细胞的工程。"]],
      ["重编程是什么", ["指把角色确定的身体细胞恢复到能成为多种细胞状态的操作。iPS制作是代表例。作为与通常发生反向的变化受关注。"]],
      ["去分化一词的处理", ["分化细胞回到未分化附近状态的现象有时称去分化。定义严格度因研究资料而异，不懂时确认该资料中的含义。"]],
    ],
  ),
  "genes-and-cells": b(
    [
      "Genes are design information for cell workings.",
      "Same genes can still work differently across cells.",
      "Gene therapy and regenerative medicine partly overlap.",
    ],
    [
      ["Genes as blueprints", ["Human cells basically share the same genome, yet become nerves or muscles through different genes read out. Which genes switch on and off makes cellular individuality."]],
      ["Proteins as actual workers", ["Proteins made from genetic information handle cellular structures and signal exchanges. In directed differentiation and reprogramming, specific factors such as genes underlying proteins key."]],
      ["Relations with gene therapy", ["Gene therapy delivering genes to supplement workings and regenerative medicine using cells are separate fields, but overlap in areas like treatments introducing genes into cells. When viewing topics, distinguish whether they handle cells or deliver genes."]],
    ],
    ["基因是细胞功能的设汁信息。", "基因相同细胞功能也不同。", "基因治疗与再生医学有重叠部分。"],
    [
      ["作为设计图的基因", ["人体细胞基本持相同基因组，但读出的基因不同而成为神经肌肉。什么基因开关构成细胞个性。"]],
      ["蛋白质是实际执行者", ["由基因信息制成的蛋白质承担细胞结构与信号往来。分化诱导与重编程中，特定因子（蛋白质之源的基因等）是关键。"]],
      ["与基因治疗的关系", ["送基因补功能的基因治疗与用细胞的再生医学是不同领域，但有向细胞导入基因的治疗等重叠领域。看话题时区分“处理细胞还是递送基因”。"]],
    ],
  ),
  "immune-basics": b(
    [
      "Immunity distinguishes self from others to protect.",
      "HLA differences relate to rejection.",
      "Suppression, matching, and engineering measures are studied.",
    ],
    [
      ["Distinguishing self from others", ["While protecting bodies from bacteria and viruses, immunity tries excluding others' cells as foreign. This is why rejection troubles organ transplantation, needing the same viewpoint in cell therapy."]],
      ["What HLA is", ["Known as white blood cell types, HLA is one marker distinguishing self from others. Better fits supposedly reject less, with less-rejected type banking advancing for iPS cell stocks."]],
      ["Thinking about measures", ["Multiple directions are studied: using your own cells, choosing matched types, using drugs suppressing immunity, and engineering hard-to-detect features. Every measure has benefits and burdens, so check per-treatment explanations."]],
    ],
    ["免疫辨别自我他者来守护。", "HLA差异关系排斥。", "研究免疫抑制与相合化等对策。"],
    [
      ["辨别自我他者", ["免疫一面抵御细菌病毒，一面试图排除他人细胞为异物。器官移植中排斥成问题即因此，细胞治疗也需同样视角。"]],
      ["HLA是什么", ["作为白细胞类型知名的HLA是辨别自我他者的标志之一。越合越不易排斥，iPS储备在推进不易排斥类型的完善。"]],
      ["对策思路", ["用自己细胞、选合型细胞、用抑制免疫的药、做不易被发现的改造等多方向研究。每种对策有利有弊，确认按治疗的说明。"]],
    ],
  ),
  "blood-basics": b(
    [
      "Blood cells come from marrow hematopoietic stem cells.",
      "Transfusion and transplantation pioneered cell-based medicine.",
      "Blood stories ground other cell therapy understanding.",
    ],
    [
      ["Main blood components", ["Red cells carry oxygen, white cells guard against infection, and platelets stop bleeding. Together with liquid plasma, they work circling the whole body."]],
      ["How hematopoiesis works", ["Blood cells are daily mass-produced from hematopoietic stem cells in marrow. Hematopoietic stem cell transplantation for leukemia and others has long served as cell therapy using these mechanisms."]],
      ["Links with regenerative medicine", ["Transplant medicine's experience with donor searching, matching confirmation, and post-transplant follow-up also serves other cell therapies' systems and safety measures. Knowing blood examples eases understanding new treatment explanations."]],
    ],
    ["血细胞由骨髓造血干细胞制造。", "输血与移植是用细胞医疗的先驱。", "血液话题是理解其他细胞治疗的基础。"],
    [
      ["血液主要成分", ["红细胞运氧，白细胞防感染，血小板止血。与液体血浆一起巡全身工作。"]],
      ["造血机制", ["血细胞由骨髓造血干细胞每天大量制造。白血病等治疗的造血干细胞移植，长期作为利用该机制的细胞治疗。"]],
      ["与再生医学的连接", ["移植医疗在供者寻找、相合确认与移植后随访的经验，也用于其他细胞治疗的制度安全对策。知道血液例子，新治疗说明更易理解。"]],
    ],
  ),
  "skin-bone-cartilage": b(
    [
      "Skin and bone lead regeneration research among tissues.",
      "Cartilage needs devices for poor blood flow.",
      "Indications and postoperative courses differ per treatment.",
    ],
    [
      ["Skin examples", ["Cultured epidermis for wide burns has been pursued as cell-growing treatments. Non-cellular elements like wound states and infection control also decide results."]],
      ["Bone examples", ["Using fracture repair powers, methods combining scaffold materials are studied and practicalized. Options change with defect sizes, sites, and general states."]],
      ["Cartilage examples", ["Knee and other cartilage poorly self-repairs for scarce vessels, so treatments using cultured chondrocytes are pursued. Postoperative rehabilitation and long follow-up matter."]],
    ],
    ["皮肤与骨是再生研究领先的组织。", "软骨血流匮乏需巧思。", "适应与术后经过因治疗而异。"],
    [
      ["皮肤例子", ["针对大面积烧伤的培养表皮，作为扩增细胞使用的治疗在推进。伤口状态与感染管理等细胞外要素也左右结果。"]],
      ["骨例子", ["利用骨折修复力，与支架材料组合等方法在研究实用化。按缺损大小部位全身状态选项改变。"]],
      ["软骨例子", ["膝等软骨血管匮乏自然修复难，用培养软骨细胞的治疗在推进。术后康复与长期随访重要。"]],
    ],
  ),
  "nerve-muscle-heart": b(
    [
      "Nerves and heart muscle represent hard-to-regenerate cases.",
      "Both cell supply and environment building challenge.",
      "View research and treatment stages separately.",
    ],
    [
      ["Neural situations", ["Brain and spinal nerves form complex circuits, supposedly hardly returning naturally once damaged. Beyond cell transplants, circuit reconnection with rehabilitation combinations are considered."]],
      ["Heart situations", ["Heart muscle constantly beats sending blood. Studies supplementing infarct-lost parts, such as heart muscle cell and sheet transplants, are pursued. Coordinating with beating and securing blood flow challenge."]],
      ["Muscle situations", ["Skeletal muscles hold repair-related cells, but large defects and advanced degeneration never fully return. Comprehensive responses combining cell therapy, rehabilitation, and braces matter."]],
    ],
    ["神经心肌是难再生的代表。", "细胞补充与环境营造都是课题。", "研究阶段与治疗阶段分开看。"],
    [
      ["神经的情况", ["脑脊髓神经构成复杂回路，据说一旦损伤自然难回。除细胞移植，考虑回路重连与康复组合。"]],
      ["心脏的情况", ["心肌不停搏动送血。补充梗塞失去部分的 heart muscle cell 与片移植等研究在推进。与搏动协调与血流确保是课题。"]],
      ["肌肉的情况", ["骨骼肌有修复相关细胞，但大缺损与进展变性不能充分恢复。细胞治疗与康复、支具组合的综合应对重要。"]],
    ],
  ),
  "age-and-regeneration": b(
    [
      "Younger bodies tend to repair more actively.",
      "Aging changes stem cell counts and workings.",
      "Age alone never decides indications.",
    ],
    [
      ["Children's healing powers", ["Children actively proliferate cells, tending to heal fractures relatively fast. But treatments on growing bodies need especially careful judgment of long-term effects."]],
      ["Changes with aging", ["With age, stem cell counts, workings, and surroundings change, supposedly slowing repair. With more conditions and medicines, benefit-burden balances need careful viewing."]],
      ["How to think about age", ["Age is one element; indications are judged with disease states and general health. Avoid simplifications like “old means ineffective” or “young means fine,” consulting individually."]],
    ],
    ["越年轻修复越活跃的倾向。", "老龄改变干细胞数量功能。", "不只凭年龄定适应。"],
    [
      ["儿童的修复力", ["儿童细胞增殖活跃，骨折等相对早愈倾向。但对成长中身体的治疗，长期影响判断格外重要。"]],
      ["随老龄的变化", ["随年龄干细胞数量功能与周围环境变化，修复变慢。据说合并症用药也增加，需仔细看收益负担平衡。"]],
      ["年龄的看法", ["年龄只是一要素，适应结合疾病状态全身健康判断。避免“高龄无效”“年轻没事”等简单化，个别商量。"]],
    ],
  ),
  "drugs-surgery-comparison": b(
    [
      "Drugs, surgery, and regenerative medicine are options, not rivals.",
      "First confirm whether standard care exists.",
      "They are sometimes combined.",
    ],
    [
      ["First confirm standard care", ["Many diseases hold standard treatments with accumulated verification of effects and safety. Before considering regenerative medicine, confirm standard contents and fit to your state."]],
      ["Each one's characteristics", ["Drugs act body-wide and adjust easily but sometimes need continuing. Surgery directly addresses structural problems but burdens bodies. Regenerative medicine aims at function recovery, but many areas remain mid-verification, with cost and visit burdens considered."]],
      ["Combination viewpoints", ["They sometimes combine, like rehabilitation with cell therapy or surgery with tissue engineering. Ask physicians about roles within whole treatment plans, not standalone effects alone."]],
    ],
    ["药物手术再生医学是选项而非竞争。", "先确认有无标准治疗。", "有时组合使用。"],
    [
      ["先确认标准治疗", ["很多病有积累效果安全性验证的标准治疗。考虑再生医学前，确认标准内容与对自己状态的适合。"]],
      ["各自特点", ["药物全身作用易调整，但有时需持续。手术直接处理结构问题，但伴随身体负担。再生医学以功能恢复为目标，但验证途中领域多，也考虑费用复诊负担。"]],
      ["组合视角", ["有时如康复与细胞治疗、手术与组织工程组合进行。不只看单独效果，问医生在整体治疗计划中的作用。"]],
    ],
  ),
  "hospital-words": b(
    [
      "Indications are targets; contraindications are conditions to avoid.",
      "Prognosis means outlooks; QOL means quality of life.",
      "Knowing meanings eases asking questions.",
    ],
    [
      ["Indications and contraindications", ["Indications mean diseases and states a treatment targets; contraindications mean conditions to avoid. Concretely ask whether your state fits indications and avoids contraindications."]],
      ["What prognosis means", ["Prognosis means outlooks for diseases and after treatment. Hearing outlooks both with and without treatment arranges decision materials."]],
      ["QOL viewpoints", ["QOL (quality of life) is a broad concept including pain, mobility, mood, and social life. Test-value improvements and QOL improvements do not always match, so sharing valued living helps."]],
    ],
    ["适应是对象，禁忌是应避条件。", "预后是预期，QOL是生活质量。", "懂词义更易提问。"],
    [
      ["适应与禁忌", ["适应指该治疗对象疾病状态，禁忌指应避条件。具体问自己状态是否符合适应、有无触及禁忌。"]],
      ["预后是什么", ["预后指疾病与治疗后的预期。问接受与不接受各自的预期，备齐选择材料。"]],
      ["QOL视角", ["QOL（生活质量）是含疼痛活动、心情社会生活的广概念。检验值改善与QOL改善未必一致，传达珍视的生活有用。"]],
    ],
  ),
  "family-discussion": b(
    [
      "Discuss facts, feelings, and hopes separately.",
      "View materials together to align premises.",
      "Fix decision deadlines and role sharing.",
    ],
    [
      ["Aligning premises", ["Share facts like conditions, options, costs, and visit burdens based on materials. When news headlines and physician explanations clash, check which information sits closer to your state."]],
      ["Sharing feelings and hopes", ["Voice anxieties, nonnegotiable living, and valued values. Hear family worries likewise, seeking gaps from lacking information rather than opposition."]],
      ["Deciding how to decide", ["Decide by when, who researches what, and how to decide. Discuss second opinions and attendance too. Keeping records helps later reviews."]],
    ],
    ["事实感受希望分开谈。", "一起看资料对齐前提。", "定好决定期限与分工。"],
    [
      ["对齐前提", ["按资料分享病情、选项、费用与就诊负担等事实。新闻标题与医生说明矛盾时，确认哪边更接近自己状态的信息。"]],
      ["传达心情希望", ["说出不安、不可让的生活与珍视的价值观。同样听取家人担心，寻找非对立而是信息不足造成的偏差。"]],
      ["定好决定方式", ["定好何时前、谁查什么、怎么定。也商量第二意见与陪诊。留记录有助于事后回顾。"]],
    ],
  ),
  "next-steps-after-basics": b(
    [
      "Three courses: mechanisms, treatment-considering, and news-reading.",
      "One article a day suffices.",
      "When lost, return to the glossary and learning guide.",
    ],
    [
      ["Courses for deeper mechanisms", ["“What are stem cells?” then “What are iPS cells?” then “What are somatic stem cells?” then “Culture, processing, and quality control” is recommended. It grasps whole pictures of cell types and making."]],
      ["Courses for considering treatment", ["Read “Questions to ask physicians” then “Costs and insurance” then “Risks and safety” then “Final pre-contract checks” in order. Consultation preparations arrange."]],
      ["Courses for mastering news", ["“Three viewpoints for reading news” then “Research stages” then “Reading evidence” then “Reading press releases” is recommended. Headlines sway you less."]],
    ],
    ["机制派、治疗考虑派与新闻派三条路线。", "一天一篇足够。", "迷茫回到术语表与学习指南。"],
    [
      ["想深入机制的路线", ["推荐“什么是干细胞？”→“iPS是什么？”→“体干细胞是什么？”→“培养加工质量管理”的顺序。把握细胞种类与制作全貌。"]],
      ["想考虑治疗的路线", ["按“向医生确认的事”→“费用与保险”→“风险与安全性”→“签约前最终检查”的顺序读。咨询准备就绪。"]],
      ["想读懂新闻的路线", ["推荐“读新闻三个视角”→“研究阶段”→“证据读法”→“新闻稿读法”的顺序。不易被标题左右。"]],
    ],
  ),
  "cell-division": b(
    [
      "Division increases cell numbers.",
      "Some cells have limited division counts.",
      "Culture needs division management.",
    ],
    [
      ["What mitosis is", ["One cell dividing into two with the same genetic information is mitosis. Growth, wound repair, and blood and other turnover rest on these repeats."]],
      ["Division counts and aging", ["Normal body cells cannot divide endlessly; count limits supposedly relate to aging and declining repair powers. Stem cells keep pools through self-renewal, but workings change with age."]],
      ["Relations with culture", ["Culture growing treatment cells needs management promoting division while keeping genetic stability. Growth power is both an advantage and a safety-check target."]],
    ],
    ["分裂增加细胞数。", "有的细胞分裂次数有限。", "培养中分裂管理重要。"],
    [
      ["体细胞分裂是什么", ["一个细胞分成持相同遗传信息的两个细胞是体细胞分裂。生长伤口修复与血液等更新靠这些重复支撑。"]],
      ["分裂次数与老化", ["通常体细胞不能无限分裂，次数上限据说关系老化与修复力下降。干细胞靠自我复制维持池，但功能随老龄改变。"]],
      ["与培养的关系", ["扩增治疗用细胞的培养，需要促分裂同时保持遗传稳定的管理。增殖力既是优点也是安全性确认对象。"]],
    ],
  ),
  "dna-basics": b(
    [
      "DNA is four-letter sequence information.",
      "Genes are meaningful segments within.",
      "Chromosome checks are also quality control.",
    ],
    [
      ["DNA structures", ["DNA records information in four base sequences. Human cell nuclei hold about 3 billion base pairs, packed into chromosomes."]],
      ["Genes and chromosomes", ["Genes are segments holding design information like proteins; the whole is called the genome. Cultured cells are checked for chromosome count and structural changes."]],
      ["Reading news", ["Phrases like “examining genes” and “editing genomes” vary in targets and methods. Check what was examined, in which cells, and at which stage."]],
    ],
    ["DNA是四字母排列的信息。", "基因是其中有意义的区段。", "染色体确认也是质量管理之一。"],
    [
      ["DNA结构", ["DNA以四种碱基排列记录信息。人体细胞核约30亿碱基对，收于染色体。"]],
      ["基因与染色体", ["基因是持蛋白质等设计信息的区段，整体称基因组。培养细胞确认染色体数结构有无变化。"]],
      ["新闻中的读法", ["“查基因”“编辑基因组”等表述对象方法各异。确认查什么、在哪种细胞、哪个阶段。"]],
    ],
  ),
  "proteins-basics": b(
    [
      "Shapes decide workings.",
      "They work as enzymes and receptors.",
      "They also appear as factors in regenerative medicine.",
    ],
    [
      ["Main roles", ["Muscle and skin materials, enzymes advancing reactions, receptors receiving signals, and transport and defense bearers work diversely."]],
      ["Relations between shapes and workings", ["Proteins work through folded 3D structures. Changed shapes from making and storage alter workings, so preparation management matters."]],
      ["Scenes in regenerative medicine", ["They appear as differentiation-promoting growth factors and intercellular signals. Seeing which factors serve which purposes organizes stories."]],
    ],
    ["形状决定功能。", "作为酶与受体工作。", "在再生医学也作为因子登场。"],
    [
      ["主要作用", ["肌肉皮肤材料、推进反应的酶、接收信号的受体、运输防御承担者等多样工作。"]],
      ["形状与功能的关系", ["蛋白质靠折叠立体结构工作。制作保存条件改变形状功能也变，制剂管理重要。"]],
      ["在再生医学的登场场景", ["作为促分化生长因子与细胞间信号登场。看“哪种因子用于什么目的”话题易整理。"]],
    ],
  ),
  "digestion-absorption": b(
    [
      "Digestion breaks down; absorption takes in.",
      "Gut lining renews actively.",
      "Nutrition also relates to recovery during treatment.",
    ],
    [
      ["Journeys of food", ["Foods break down finely through mouth, stomach, and small intestine, with nutrients absorbed in the small intestine. The large intestine adjusts water and others. Each site's cells cooperate."]],
      ["Active gut renewal", ["Gut lining renews within days, with tissue stem cells supplying. These mechanisms also apply to organoid culture and others."]],
      ["Treatment and nutrition", ["Nutritional states relate to recovery around surgery and transplantation. Meal devices and nutrition consultations sometimes join treatment plans."]],
    ],
    ["消化是分解，吸收是摄取。", "肠黏膜更新活跃。", "治疗中营养状态也关系恢复。"],
    [
      ["食物的旅程", ["经口胃小肠细分解，在小肠吸收营养。大肠调整水分等。各部位细胞协作工作。"]],
      ["肠的活跃更新", ["肠黏膜数日更新，组织干细胞供应。该机制也应用于类器官培养等。"]],
      ["治疗与营养", ["手术移植前后营养状态关系恢复。饮食巧思与营养咨询有时纳入治疗计划。"]],
    ],
  ),
  circulation: b(
    [
      "Hearts are pumps; vessels are roads.",
      "Whole-body rounds take about a minute.",
      "Blood flow also relates to cell therapy delivery.",
    ],
    [
      ["Blood circulation paths", ["Blood sent from hearts reaches the whole body through arteries, returns through veins, and receives oxygen in lungs. One round supposedly takes about a minute at rest."]],
      ["Vessel types", ["From thick arteries to thin capillaries, structures differ by site. Capillaries exchange oxygen and nutrients. Vessel network building is a major tissue-regeneration challenge."]],
      ["Relations with cell delivery", ["Where infused cells go and how many stay relate to blood flow. It grounds understanding local versus systemic administration differences."]],
    ],
    ["心脏是泵，血管是路。", "巡全身约一分钟。", "血流也关系细胞治疗的送达。"],
    [
      ["血液循环路", ["心脏送出的血液经动脉到全身，经静脉回心脏，在肺接受氧气。安静时一周约一分钟。"]],
      ["血管种类", ["从粗动脉到细毛细血管，部位结构不同。毛细血管交接氧气营养。血管网构建是组织再生巨大课题。"]],
      ["与细胞送达的关系", ["点滴给药的细胞去哪留多少与血流相关。成为理解局部与全身给药区别的基础。"]],
    ],
  ),
  respiration: b(
    [
      "Gas exchange happens in alveoli.",
      "Breathing muscles and nerves coordinate.",
      "Oxygen also relates to culture conditions.",
    ],
    [
      ["Exchange in lungs", ["In countless alveoli beyond bronchi, oxygen enters blood and carbon dioxide leaves. Wide surfaces with thin walls support efficiency."]],
      ["Breathing regulation", ["Diaphragm and other breathing muscles with nerves adjust breathing as needed. Breathlessness during exercise and illness reflects these balance changes."]],
      ["Links with culture", ["In cell culture, oxygen concentration management affects differentiation and growth. Devices mimicking in-body environments such as low oxygen are studied."]],
    ],
    ["在肺泡气体交换。", "呼吸肌与神经联动。", "氧气也关系培养条件。"],
    [
      ["在肺交换", ["支气管先无数肺泡中，氧气入血、二氧化碳排出。宽表面薄壁支撑效率。"]],
      ["呼吸调节", ["膈肌等呼吸肌与神经按需调节呼吸。运动时与生病时气促是该平衡变化。"]],
      ["与培养的连接", ["细胞培养中氧浓度管理影响分化增殖。研究模仿体内环境（低氧等）的巧思。"]],
    ],
  ),
};
