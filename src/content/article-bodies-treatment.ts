// Full translated bodies (points + sections) for treatment-category articles.
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

export const articleBodiesTreatment: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "questions-before-treatment": b(
    [
      "Ask about the evidence for your own disease.",
      "Discuss other treatment options as well.",
      "Confirm costs and post-treatment care in advance.",
    ],
    [
      ["Asking about benefits and risks", ["Ask what studies exist for your disease and condition, what the chance of no benefit is, and what the main risks are. Taking explanations home to consider is also important."]],
      ["Confirming alternatives and costs", ["Check differences from other treatments, the outlook without treatment, and the total cost including tests and visits. Ask in advance for contacts and care systems if your condition changes."]],
    ],
    ["询问针对自己疾病的依据。", "把其他治疗选择也纳入商量。", "事先确认费用与治疗后应对。"],
    [
      ["问效果与风险", ["问针对自己的疾病与状态有什么研究、没有效果的可能性与主要风险是什么。把说明带回去考虑也很重要。"]],
      ["确认其他选择与费用", ["确认与其他治疗的区别、不治疗的预期，以及含检查复诊的费用总额。事先问清身体变化时的联系方式与诊疗体制。"]],
    ],
  ),
  "cost-and-insurance": b(
    [
      "Some treatments use insurance; others are private care.",
      "Check totals, extra costs, refunds, and stopping terms.",
      "Never judge effects by price alone.",
    ],
    [
      [
        "Three shapes of costs",
        [
          "Insurance-covered treatments charge defined copayment rates. For trials and clinical research, cost handling is set per study and written in explanatory documents. Private care is basically fully self-paid, with amounts differing by institution.",
          "First confirm which positioning your treatment falls under.",
        ],
      ],
      [
        "Items to check in estimates",
        [
          "Ask for totals including first-visit fees, tests, cell processing, administration, visits, hospitalization, and follow-up. Confirm handling when there is no effect or treatment stops midway, plus responses and costs when complications occur.",
          "Receive it in writing and take time home to compare.",
        ],
      ],
      [
        "Pause when rushed to sign",
        [
          "Beware pitches rushing decisions with “discount if you sign today” or “few slots left.” Medical advertising rules deem unsubstantiated effect claims and fear-arousing wording inappropriate.",
          "When questions remain, consult your primary physician or another institution and think from multiple viewpoints.",
        ],
      ],
    ],
    ["有用保险的治疗，也有自由诊疗。", "确认总额、追加费用与退款中止处理。", "不只凭费用判断效果很重要。"],
    [
      ["三种费用形态", ["保险诊疗的治疗按规定自付比例接受。临床试验与临床研究按研究规定费用处理并记入说明文件。自由诊疗原则全额自费，金额因机构而异。", "先确认自己考虑的治疗属于哪种定位。"]],
      ["估算想确认的项目", ["询问含初诊费、检查费、细胞加工费、给药费、复诊住院费与治疗后诊察费的总额。事先确认无效果或中途中止的处理，以及并发症时的应对与费用。", "拿到书面材料，带回去留出比较时间。"]],
      ["被催促签约时停下来", ["注意以“今天签约打折”“名额不多”等话术催促判断的说明。医疗广告规则认为无根据的效果表述与煽动不安的表述不恰当。", "有疑问时咨询主治医生或其他医疗机构，多视角思考。"]],
    ],
  ),
  "risks-and-safety": b(
    [
      "Check possible harms and their frequency, not only effects.",
      "Both short-term reactions and long-term follow-up matter.",
      "Ask in advance for contacts and systems when conditions change.",
    ],
    [
      [
        "Examples of main risks",
        [
          "Beyond general risks such as pain, swelling, fever, allergy, infection, and thrombosis from administration, each cell type and site carries specific risks. Long-term concerns such as tumorigenicity also need stage-appropriate explanations.",
          "Ask concretely what harms have been reported and how often.",
        ],
      ],
      [
        "Follow-up after treatment",
        [
          "Confirm visit intervals, test contents, symptoms to watch, and emergency contacts after treatment. Cooperation with long-term tracking studies may also be requested.",
          "Keeping symptom diaries or medicine notebooks makes consultation easier.",
        ],
      ],
      [
        "Weighing benefits against harms",
        [
          "Line up expected benefits (likelihood of improvement and strength of evidence) against harms (risks, burden, costs, lost alternative opportunities). Ask physicians about the outlook without treatment too.",
          "When unsure, pausing and talking with family and your primary physician helps.",
        ],
      ],
    ],
    ["不仅看效果，也确认可能伤害与频率。", "短期反应与长期随访都重要。", "事先问清身体变化的联系方式与应对体制。"],
    [
      ["主要风险示例", ["除给药伴随的疼痛肿胀、发热、过敏、感染与血栓等一般风险，还有按细胞种类与给药部位的特有风险。成瘤等长期担忧也需要按研究阶段说明。", "具体问报告了哪些伤害、频率如何。"]],
      ["治疗后随访", ["确认治疗后复诊间隔、检查内容、注意症状与紧急联系方式。也可能被请求协力长期追踪调查。", "准备症状日记与用药手册等记录手段，方便咨询。"]],
      ["权衡利弊", ["并列思考预期收益（症状改善可能性与依据强度）与不利（风险、负担、费用与其他治疗机会损失）。把不治疗的预期也问医生。", "犹豫时停一停，与家人、主治医生商量有用。"]],
    ],
  ),
  "second-opinion": b(
    [
      "Second opinions help confirm diagnoses and plans.",
      "Preparing referral letters and test materials smooths consultation.",
      "Sort out thinking for when opinions differ.",
    ],
    [
      ["What a second opinion is", ["A second opinion means asking a different physician about diagnosis and plans. It is positioned as consultation to add decision materials, not as a transfer or booking.", "Multiple viewpoints help especially when considering new options like regenerative medicine."]],
      ["Preparing for smooth consultation", ["Bring referral letters, test results, images, treatment history, and materials on the treatment under consideration. Summarize questions in a memo to fit the consultation time.", "Telling your primary physician honestly and requesting needed materials is customary."]],
      ["When opinions differ", ["Physicians disagreeing is not unusual. Compare strength of evidence, fit with your values and life, and visit feasibility.", "Do not rush the final decision; take time to talk again with your primary physician."]],
    ],
    ["第二诊疗意见有助于确认诊断与治疗方针。", "准备转诊信与检查资料让咨询顺利。", "整理意见分歧时的思路。"],
    [
      ["第二诊疗意见是什么", ["第二诊疗意见指向今主治医生之外的医生征求诊断与治疗方针的意见。定位为增加判断材料的咨询，而非转院与预约。", "考虑再生医学等新选择时，多视角尤其有用。"]],
      ["让咨询顺利的准备", ["准备转诊信、检查结果、影像、既往治疗经过与考虑中治疗的资料。把想问的记成备忘，保证时间内咨询。", "一般如实告诉主治医生并请求提供必要资料。"]],
      ["意见不同时", ["医生见解分歧并不罕见。结合依据强度、与自己价值观生活的相容与就诊现实比较。", "最终决定不要急，留出与主治医生再谈的时间。"]],
    ],
  ),
  "clinical-trials-guide": b(
    [
      "Trials and clinical research have both treatment and research faces.",
      "Read explanatory and consent documents carefully.",
      "You may basically withdraw at any time after joining.",
    ],
    [
      [
        "Differences between trials and clinical research",
        [
          "Trials are studies conducted toward approval of drugs, devices, or regenerative medical products under strict standards. Clinical research more broadly means medical research involving people, differing by study in purpose and method.",
          "Both rest on free will; declining never brings care disadvantages as a rule.",
        ],
      ],
      [
        "Explanation and consent",
        [
          "Confirm purpose, methods, expected benefits and risks, other treatments, cost sharing, personal data handling, and responses to health damage in explanatory documents. Ask until satisfied about anything unclear.",
          "Hearing explanations with family and taking them home to consider also matter.",
        ],
      ],
      [
        "During and after participation",
        [
          "Confirm visit and test burden, prohibited concomitant treatments, and withdrawal procedures. Contact the research team promptly with condition changes.",
          "Study results do not always link directly to your own care. Confirm how results are published too.",
        ],
      ],
    ],
    ["临床试验与临床研究兼具治疗与研究两面。", "仔细确认说明文件与同意书内容。", "参加后原则上随时可退出。"],
    [
      ["临床试验与临床研究的区别", ["临床试验是以药品、医疗器械与再生医学产品获批为目标、在严格标准下实施的试验。临床研究更广指以人为对象的医学研究，目的方法因研究而异。", "两者都基于自由意志，不参加原则上不受诊疗不利。"]],
      ["说明与同意", ["在说明文件中确认目的、方法、预期收益与风险、其他治疗、费用负担、个人信息处理与健康损害应对。不懂之处问到明白。", "与家人一起听说明、带回去考虑等也很重要。"]],
      ["参加中与参加后", ["确认复诊次数与检查负担、不能并用的治疗、有无中途退出手续。身体变化迅速联系研究团队。", "研究结果未必直接连到自己的治疗。结果发表方式也在说明中确认。"]],
    ],
  ),
  "first-visit-prep": b(
    ["Summarize history, tests, and medicines on one sheet.", "Narrow questions to three.", "Bring materials on the treatment under consideration."],
    [
      ["What to bring", ["Prepare referral letters, test results and image data, medicine notebooks, and memos of treatment history. A chronological list helps physicians grasp your case."]],
      ["How to communicate", ["Concretely share the most troubling symptom, since when, how it changed, and scenes of daily difficulty. If you hope for a treatment, bring its materials and points you want to know."]],
      ["Confirming on the spot", ["Ask about diagnostic views, next tests and visit timing, other options, and referrals. Ask back about anything vague and memo it."]],
    ],
    ["把经过、检查与用药汇总在一张纸。", "把想问的压缩到三个。", "带上考虑中治疗的资料。"],
    [
      ["携带物品", ["准备转诊信、检查结果与影像数据、用药手册与治疗经过备忘。有时间线一览医生易把握。"]],
      ["表达技巧", ["具体传达最困扰的症状、何时起、如何变化与生活中困难的场景。有希望的治疗时带上资料与想知道的点。"]],
      ["当场确认", ["问诊断看法、下步检查与复诊时机、其他选择与有无转诊。理解模糊处当场追问并记录。"]],
    ],
  ),
  "informed-consent-howto": b(
    ["Ask the trio: benefits, risks, alternatives.", "Confirm unfamiliar words on the spot.", "Take time home to think."],
    [
      ["The trio to ask", ["Ask expected benefits including strength of evidence, main risks with frequency, and other options including no treatment. These three ground decisions."]],
      ["Lowering word barriers", ["Freely ask for paraphrases of technical terms. Asking “in my case, what happens?” deepens understanding."]],
      ["Securing decision time", ["When pressed for instant answers, check whether taking it home is allowed. Receive consent copies and decide after sharing with family and your physician."]],
    ],
    ["问收益、风险与替代三点。", "不懂的词当场确认。", "带回去留出思考时间。"],
    [
      ["必问三点", ["问预期收益（含依据强度）、主要风险与频率、其他选择（含不治疗）。三点齐全判断才有基础。"]],
      ["降低词语壁垒", ["专业术语尽管要求换说法。用“比如我就怎么样”结合自身问，理解更深。"]],
      ["确保决定时间", ["被要求当场即答时，确认能否带回考虑。拿到同意书复印件，与家人、主治医生分享后再定。"]],
    ],
  ),
  "treatment-flow": b(
    ["Each step has checks and records.", "Foresee waits and visit counts.", "Observation after treatment closes one round."],
    [
      ["From consultation to consent", ["Proceed in order: first consultation, eligibility tests, explanation and consent. Some cases do not fit or suit other treatments; results decide plans."]],
      ["Collection, manufacturing, administration", ["Autologous cells need collection and manufacturing time. Outpatient or inpatient administration, counts and intervals differ by treatment. Confirm the day's flow and cautions beforehand."]],
      ["Follow-up after treatment", ["Effect judgment timing, visit intervals, warning symptoms, and emergency contacts are shown. Do not stop visits by self-judgment; contact early with changes."]],
    ],
    ["每一步都有确认与记录。", "预估等待与复诊次数。", "治疗后观察是一个段落。"],
    [
      ["从咨询到同意", ["按初次咨询、适应确认检查、说明与同意的顺序推进。也有不适合或更适合其他治疗的情况，据检查结果定方针。"]],
      ["采集、制造与给药", ["自体细胞需要采集与制造时间。门诊还是住院、次数间隔因治疗而异。事先确认当天流程与注意。"]],
      ["治疗后随访", ["会给出效果判定时期、复诊间隔、注意症状与紧急联系方式。不要自行停诊，有变化早联系。"]],
    ],
  ),
  "insurance-care": b(
    ["Check covered diseases and institutions in public information.", "Referral letters smooth the way.", "Know the mixed-care principle too."],
    [
      ["Searching in public information", ["Combine Ministry of Health, Labour and Welfare and PMDA publications, society information, and family doctor guidance. Tracing by product or disease names to originals is surest."]],
      ["Proceeding to visits", ["First consult your family doctor or a disease specialist and take referrals as needed. Some treatments have limited providers, so weigh visit feasibility too."]],
      ["Thinking about mixed care", ["Combining insured and private care is basically restricted. Confirm with institutions whether exceptions such as combined medical expenses apply."]],
    ],
    ["用公共信息确认对象疾病与机构。", "有转诊信更顺利。", "也了解混合诊疗原则。"],
    [
      ["在公共信息中查找", ["结合厚生劳动省与 PMDA 公开资料、学会信息与家庭医生指引。用产品名与疾病名追溯原文最可靠。"]],
      ["就诊推进", ["先咨询家庭医生或疾病专科医生，按需转诊。有的治疗实施机构有限，结合就诊现实探讨。"]],
      ["混合诊疗的思路", ["保险诊疗与自由诊疗并用原则受限。含保险外并用疗养费等例外有无，向医疗机构确认。"]],
    ],
  ),
  "jibihi-contract": b(
    ["Check totals and extra-cost terms.", "Look at stopping and cancellation handling.", "Confirm complication responses and costs."],
    [
      ["Cost wording", ["Check each cost for tests, processing, administration, and visits with totals, conditions and costs for extra doses, and payment timing. Compare spoken explanations against writing."]],
      ["Stopping and cancellation terms", ["Confirm post-manufacturing stops, postponement for poor condition, cooling-off and cancellation availability with refunds. Get unclear points answered in writing before signing."]],
      ["Complications and help desks", ["Confirm care systems, cost sharing, contacts, and record keeping when complications occur. Know consumer-trouble desks such as consumer centers exist too."]],
    ],
    ["确认总额与追加费用条件。", "看中止解约的处理。", "确认并发症应对与费用。"],
    [
      ["费用记载", ["确认检查、加工、给药与复诊各项费用与总额、追加给药条件费用与支付时期。对照口头说明与书面是否一致。"]],
      ["中止解约条件", ["确认制造开始后中止、身体不佳延期、冷静期解约可行与退款额。签署前把不明点拿到书面答复。"]],
      ["并发症与咨询窗口", ["确认并发症时诊疗体制、费用负担、联系方式与记录保管。也知道消费生活中心等消费者纠纷咨询方的存在。"]],
    ],
  ),
  "advertising-literacy": b(
    ["Testimonials are not evidence.", "Watch deterministic effect claims.", "Look for sources."],
    [
      ["Basic medical advertising rules", ["The Medical Care Act restricts unsubstantiated effect claims, exaggerated superiority, and improper comparative ads. Conditions for lifted restrictions and help-desk wording are also defined."]],
      ["Reading photos and testimonials", ["Stay aware good results may be cherry-picked and shooting conditions may differ. Personal experiences are precious, but fit to you needs separate verification."]],
      ["Checkpoints when viewing ads", ["Look for target diseases, evidence sources, risk wording, total cost displays, and consultation and cancellation terms. Ask both the institution and your physician with questions."]],
    ],
    ["体验谈不是依据。", "注意断定性效果表述。", "看有无来源。"],
    [
      ["医疗广告基本规则", ["医疗法限制无根据的效果表述、优良性夸大与不当比较广告。也规定限定解除要件与咨询窗口记载。"]],
      ["病例照片与体验谈的读法", ["意识到好结果可能被挑选、拍摄条件不同。个人体验宝贵，但是否适合自己需另行验证。"]],
      ["看广告时的确认点", ["看是否写对象疾病、依据来源、风险记载、费用总额标示与咨询解约条件。有疑问问医疗机构与主治医生双方。"]],
    ],
  ),
  "trouble-help": b(
    ["For condition changes, first contact providers and physicians.", "For contracts, consumer centers and peers.", "Keeping records speeds solutions."],
    [
      ["With condition changes", ["For fever, strong pain or swelling, or breathlessness, promptly contact the provider's emergency line. Share with your family doctor too and record dates, symptoms, and responses."]],
      ["With contract troubles", ["For cancellation and refund disputes, consumer centers and the National Consumer Affairs Center help. Bring contracts, receipts, brochures, and communication records for smooth consultation."]],
      ["Questions about ads and displays", ["Suspicious ad displays can be reported to prefectural medical guidance offices and related bodies. Saved screens and URLs help."]],
    ],
    ["身体变化先联系提供机构与主治医生。", "合同找消费生活中心等。", "留记录让解决更快。"],
    [
      ["身体有变化时", ["发热、剧痛肿胀与气促等迅速联系提供机构紧急电话。同时分享给家庭医生，记录日期症状应对。"]],
      ["合同困扰时", ["解约退款纠纷可利用消费生活中心与国民生活中心咨询窗口。带上合同、收据、说明资料与往来记录咨询更顺利。"]],
      ["对广告标示的疑问", ["认为不当的广告标示可向都道府县医疗指导部门等提供信息。保存画面与 URL 有用。"]],
    ],
  ),
  aftercare: b(
    ["Effects have judgment timing.", "Symptom records aid judgment.", "Confirm daily-life cautions."],
    [
      ["When to judge effects", ["Evaluation timing differs by treatment type and disease. Avoid premature judgment or self-interruption; be evaluated on physicians' schedules."]],
      ["How to record", ["Simply record pain, movement, medicines, and activity. Smartphone memos or diaries suffice. Changes become objectively communicable."]],
      ["Daily-life cautions", ["Confirm bathing, exercise, alcohol, and concomitant medicine handling after treatment. When rehabilitation combines, continue as planned."]],
    ],
    ["效果判定有时机。", "症状记录帮助判断。", "确认生活注意。"],
    [
      ["何时判断效果", ["评价时期因治疗种类与疾病而异。避免过早判断与自行中断，按医生给出的日程接受评价。"]],
      ["记录方法", ["简单记录疼痛、活动、用药与运动量。手机备忘与日记足够。变化可客观传达。"]],
      ["生活注意", ["确认治疗后洗浴、运动、饮酒与并用药的处理。结合康复时按计划继续。"]],
    ],
  ),
  "pain-burden": b(
    ["Burden differs by collection and administration methods.", "Foresee visit counts and periods.", "Plan work and family adjustments too."],
    [
      ["Pain and procedure burden", ["Fat or marrow collection and joint administration differ in pain and rest needs. Confirm anesthesia, pain relief, and whether companions are needed."]],
      ["Visit outlook", ["Ask counts and periods for tests, collection, administration, and follow-up, plus feasibility from afar. Think in total burden including travel and lodging."]],
      ["Adjusting with life", ["Arrange leave, caregiving and childcare sharing, and emergency contacts in advance. Reasonable plans help continue treatment to the end."]],
    ],
    ["采集给药方法不同负担不同。", "预估复诊次数与期限。", "把工作家庭协调纳入计划。"],
    [
      ["疼痛与处置负担", ["脂肪与骨髓采集、关节给药等，疼痛与安静必要性不同。确认麻醉镇痛方法与当天是否需陪同。"]],
      ["复诊预期", ["问检查、采集、给药与随访的次数期限，以及远方就诊可行。含交通住宿按总负担思考。"]],
      ["与生活的协调", ["事先安排休假、照护育儿分担与紧急联系体制。不勉强的计划有助于坚持到最后。"]],
    ],
  ),
  "family-decision": b(
    ["Estimating the person's wishes is basic.", "Prior discussion and records help.", "Think together with clinicians."],
    [
      ["Centering the person's wishes", ["Even with limited capacity, estimate wishes from values and past words. Sort family hopes apart from the person's wishes."]],
      ["Advance preparation", ["Discuss treatment views and entrusted persons while well and record them. Consulting family doctors about expressing wishes in care settings also works."]],
      ["Consulting the care team", ["Take repeated time with physicians, nurses, and social workers. Record reasons and courses and share among family."]],
    ],
    ["推定本人意愿是基本。", "事先商量与记录有用。", "与医疗人员一起想。"],
    [
      ["以本人意愿为中心", ["即使判断能力不足，也以价值观与过往发言为线索推定意愿。区分家人希望与本人意愿整理。"]],
      ["事先准备", ["健康时谈好对治疗的想法与托付对象并记录。向家庭医生咨询在医疗照护场景表达意愿的方法也有效。"]],
      ["与医疗团队商量", ["留出与医生护士社工多次详谈的时间。记录判断理由与经过，在家人间分享。"]],
    ],
  ),
  "elderly-points": b(
    ["Share all conditions and medicines.", "Consider fall and cognitive aspects too.", "Arrange visit companions."],
    [
      ["Organizing conditions and medicines", ["Anticoagulants and diabetes drugs can affect procedures. Share medicine notebooks and full histories and confirm stopping or adjustments."]],
      ["Physical and cognitive aspects", ["Request explanations matching mobility, hearing, vision, and understanding pace. Companions and written key points help."]],
      ["Visit and life support", ["Decide transport, companions, and emergency networks in advance. Share with care managers when care services coordinate."]],
    ],
    ["把合并症与用药全部共享。", "也顾及跌倒与认知。", "安排就诊陪同体制。"],
    [
      ["整理基础病与药物", ["抗凝药与糖尿病药等有影响处置的药。共享用药手册与全部既往史，确认停药调整。"]],
      ["身体功能与认知", ["要求配合移动、听力视力与理解节奏的说明。同行者陪同与书面要点有用。"]],
      ["就诊与生活支援", ["定好接送陪同与紧急联系网。需照护服务协作时也分享给照护经理。"]],
    ],
  ),
  "children-points": b(
    ["Watch long-term effects on growth.", "Explaining to children (assent) matters too.", "Think extra carefully about research participation."],
    [
      ["Care for growth", ["Treating growing bodies needs long-term observation. Consult pediatric specialists including effects on future options."]],
      ["Explaining to children", ["Explain in age-appropriate words and confirm children's feelings through assent. Discuss handling of disliked procedures and school-life care too."]],
      ["Care with research", ["Pediatric research follows strict procedures. Confirm purpose, burden, freedom to withdraw, and result handling with guardians, taking time to think."]],
    ],
    ["看对成长的长期影响。", "向儿童说明（赞同）也重要。", "研究参加格外慎重。"],
    [
      ["对成长的照顾", ["治疗成长中的身体，长期观察重要。含对未来选择的影响，与儿科专科医生商量。"]],
      ["向儿童说明", ["用符合年龄的语言说明，确认孩子心情的赞同很重要。也商量不愿接受处置的处理与学校生活照顾。"]],
      ["研究的慎重", ["以儿童为对象的研究有严格手续。与监护人一起确认目的、负担、退出自由与结果处理，花时间思考。"]],
    ],
  ),
  "final-checklist": b(
    ["Check the trio: indications, evidence, risks.", "Look at costs, contracts, and care systems.", "Compare with other options."],
    [
      ["Five medical items", ["Confirm whether your disease is indicated, what supporting studies exist, main risks with frequency, effect judgment timing and methods, and other options with no-treatment outlooks. Get vague points answered in writing."]],
      ["Five contract and cost items", ["Confirm totals with extra costs, stopping and cancellation with refunds, complication responses with costs, visit counts with periods, and record keeping with contacts. Compare speech against writing."]],
      ["Five comparison and consultation items", ["Arrange differences from standard care, your physician's view, second-opinion needs, family agreement, and decision deadlines. Sign only after accepting everything."]],
    ],
    ["确认适应、依据与风险三点。", "看费用合同与应对体制。", "与其他选择比较。"],
    [
      ["医疗五项", ["确认自己的病是否适应、依据研究是什么、主要风险与频率、效果判定时期方法、其他选择与不治疗预期。模糊处拿书面答复。"]],
      ["合同费用五项", ["确认总额与追加费用、中止解约与退款、并发症应对与费用、复诊次数期限、记录保管与联系方式。对照口头与书面。"]],
      ["比较咨询五项", ["理顺与标准治疗区别、主治医生看法、第二意见必要、家人共识与决定期限。全部接受再签署。"]],
    ],
  ),
  "online-care": b(
    ["First visits have conditions.", "Some situations need in-person care.", "Communication and record preparation matter."],
    [
      ["Basic rules", ["Online care follows guidelines with conditions on first visits and prescriptions. Confirm whether your needs fit beforehand."]],
      ["Division of use", ["It suits course consultations and second-opinion supplements. Palpation, procedures, and detailed tests need in-person visits."]],
      ["Preparation tips", ["Prepare test data, medicine notebooks, and question memos, and join from quiet settings. Keep records and share with physicians."]],
    ],
    ["初诊有条件。", "有的场景需要面诊。", "沟通与记录准备重要。"],
    [
      ["基本规则", ["在线诊疗有指引，初诊与处方处理有条件。事先确认能否对应。"]],
      ["分工", ["适合经过咨询与第二意见补充。触诊、处置与精密检查需要面诊。"]],
      ["准备窍门", ["准备检查数据、用药手册与问题备忘，在安静环境参加。留记录与医生分享。"]],
    ],
  ),
  "referral-letters": b(
    ["History and tests are handed over.", "It affects selected-care fees.", "Reverse referrals return you locally."],
    [
      ["Roles of referral letters", ["Diagnoses, courses, and test results are written in, preventing duplicate tests and mix-ups. Large-hospital first visits change fees with or without letters."]],
      ["What selected-care fees are", ["Visiting large hospitals without referrals costs special fees. Consulting local institutions first is basically the flow."]],
      ["Reverse-referral flows", ["After specialist phases, return to local institutions for follow-up. Shared information enables seamless care."]],
    ],
    ["经过与检查被交接。", "关系到选定疗养费。", "逆转诊回到地区。"],
    [
      ["转诊信的作用", ["记载诊断、治疗经过与检查结果，防止重复检查与出入。大医院初诊有无转诊信费用不同。"]],
      ["选定疗养费是什么", ["无转诊信看大医院收特别费用。基本流程先在地区医疗机构商量。"]],
      ["逆转诊流程", ["专科治疗告一段落后回到地区医疗机构随访。信息共享带来无缝应对。"]],
    ],
  ),
  "medical-records": b(
    ["You have disclosure request rights.", "Procedures and fees differ by institution.", "They serve second opinions."],
    [
      ["Thinking about disclosure", ["Patients can request disclosure of medical records. It helps understand conditions and treatments and consult other hospitals."]],
      ["Procedure flows", ["Submit applications, verify identity, and pay fees to receive copies. Confirm periods and scope with institutions."]],
      ["Using records", ["Organize courses chronologically, memo questions, and face next visits. Check image data formats too."]],
    ],
    ["有公开申请权利。", "手续费用因机构而异。", "可用于第二意见。"],
    [
      ["公开的思路", ["患者可要求公开病历。有助于理解病情治疗与其他医院咨询。"]],
      ["手续流程", ["经提交申请、身份确认与手续费支付拿到复印件。期限范围向机构确认。"]],
      ["记录的利用", ["按时间线整理经过，记下疑问迎接下次门诊。也确认影像数据格式。"]],
    ],
  ),
  "hospital-choice": b(
    ["Check track records for target diseases.", "Look at coordination and approachability.", "Consider visit feasibility."],
    [
      ["Reading track records", ["Check care records, specialist staffing, and equipment for target diseases. Look at complication systems, not only case counts."]],
      ["Judging fit", ["Polite explanations, ease of questions, waits, and booking ease matter too. Record first-visit impressions."]],
      ["Visit feasibility", ["Consider distance, transport, and companions. For distant care, confirm coordination with nearby providers."]],
    ],
    ["确认对象疾病的实绩。", "看协作与好商量。", "考虑就诊现实。"],
    [
      ["实绩的看法", ["确认对象疾病诊疗实绩、专科医生配置与设备。不只看件数，也看并发症应对体制。"]],
      ["相性的判断", ["说明是否细致、是否好提问、等待与预约难易也重要。记下初诊印象。"]],
      ["就诊现实", ["结合距离、交通与陪同思考。远方时确认与附近的协作。"]],
    ],
  ),
  "emergency-care": b(
    ["When unsure, use consultation lines.", "Prepare to share conditions and medicines.", "Confirm contacts during treatment."],
    [
      ["When to call", ["For consciousness changes, severe chest pain, breathing difficulty, or paralysis, call 119 promptly. When unsure, emergency consultation lines help."]],
      ["Information to share", ["Memo conditions, medicines, allergies, family doctors, and ongoing treatments, and share with emergency teams and family in advance."]],
      ["Care during trials and treatment", ["During trial or cell therapy participation, confirm research teams' emergency contacts. Tell emergency visits about participation."]],
    ],
    ["犹豫时用咨询电话。", "准备传达基础病与用药。", "治疗中确认联系方式。"],
    [
      ["呼叫标准", ["意识变化、剧烈胸痛呼吸困难与麻痹等迅速打119。犹豫时可利用急救咨询窗口。"]],
      ["传达信息", ["把基础病、用药、过敏、家庭医生与治疗中内容记成备忘，事先与急救队家人分享。"]],
      ["试验治疗参加中的注意", ["临床试验与细胞治疗参加中确认研究团队紧急联系方式。急诊时告知参加中。"]],
    ],
  ),
  "pharmacy-use": b(
    ["Their role is unified medicine management.", "Check interactions.", "Declare supplements too."],
    [
      ["Pharmacists' roles", ["They check duplication, interactions, and side-effect signs in coordination with physicians. Having a regular pharmacy eases noticing changes."]],
      ["Using medicine notebooks", ["Record prescription and over-the-counter drugs and show them at visits and pharmacies. Note allergy and side-effect histories too."]],
      ["Living with supplements", ["Supplements can affect medicines. Always declare use and avoid starting or stopping by self-judgment."]],
    ],
    ["作用是药品统一管理。", "确认相互作用。", "保健品也申报。"],
    [
      ["药剂师的作用", ["确认重复、相互作用与副作用迹象，与医生协作。有固定药房易发现变化。"]],
      ["用药手册的使用", ["记录处方药与非处方药，就诊与药房出示。也记过敏与副作用史。"]],
      ["与保健品的相处", ["保健品也会影响药物。使用中务必申报，避免自行开始停止。"]],
    ],
  ),
  "nursing-care-link": b(
    ["It connects medicine and care.", "Care plans are the base.", "Sharing changes matters."],
    [
      ["Supporting people", ["Visiting nurses, care managers, helpers, and rehabilitation staff coordinate. Know each role in advance."]],
      ["What care plans are", ["Plans combining needed support are reviewed with conditions. Share hopes and troubles frankly."]],
      ["Sharing information", ["Share treatment contents and cautions with supporters and contact early with changes. Contact books and records help."]],
    ],
    ["连接医疗与照护。", "照护计划是基础。", "分享变化重要。"],
    [
      ["支撑的人们", ["访问护士、照护经理、帮手与康复职种协作。事先知道各自作用。"]],
      ["照护计划是什么", ["组合必要支援的计划，随状态调整。坦率传达希望与困难。"]],
      ["信息分享", ["与支援者分享治疗内容与注意，有变化早联系。联络本与记录有用。"]],
    ],
  ),
  "home-care": b(
    ["Home visits are planned; house calls are ad hoc.", "Confirming 24-hour systems matters.", "Consider family burden too."],
    [
      ["Home care vs. house calls", ["Home care means regular planned visits; house calls mean ad hoc visits for sudden changes. Confirm combined systems."]],
      ["Usage flows", ["Coordinate through family doctors, community support centers, and care managers. Confirm night and holiday contacts."]],
      ["Family viewpoints", ["Plan caregiving burden and respite use too. Sustainable systems without strain are key to continuing."]],
    ],
    ["访问诊疗有计划，往诊临时。", "确认24小时体制重要。", "也考虑家人负担。"],
    [
      ["访问诊疗与往诊", ["访问诊疗指定期计划访问，往诊指急变时临时访问。确认两者组合的体制。"]],
      ["利用流程", ["经家庭医生、地区综合支援中心与照护经理协调。确认夜间假日联系方式。"]],
      ["家人视角", ["把照护负担与喘息利用也纳入计划。不勉强的体制是持续的关键。"]],
    ],
  ),
  "work-balance": b(
    ["Balance-support systems exist.", "Physicians' notes bridge the way.", "Share visit plans."],
    [
      ["Available systems", ["Injury and sickness allowances, leave systems, reduced hours, and balance-support coordinators exist. Check with work rules too."]],
      ["Coordinating with physicians", ["Workplace accommodations are discussed based on physicians' notes. Concretely share what you can and want to avoid."]],
      ["Sharing visit plans", ["Share visit frequency and condition waves with workplaces and fix backup systems. Sustainable paces last longest."]],
    ],
    ["有两立支援制度。", "主治医生的意见书是桥梁。", "分享就诊计划。"],
    [
      ["可用制度", ["有伤病津贴、休职制度、短时工作与两立支援协调员等。结合就业规则确认。"]],
      ["与主治医生的协作", ["职场照顾按主治医生意见书商量。具体传达能做什么、想避什么。"]],
      ["分享就诊计划", ["与职场分享就诊频率与身体波动，定好替代体制。不勉强的节奏最长久。"]],
    ],
  ),
  "cost-simulation": b(
    ["Separate direct and indirect costs.", "Include extra-dose terms.", "Compare across multiple options."],
    [
      ["Direct costs", ["List visits, tests, processing, administration, drugs, and travel. For private care, always receive written totals."]],
      ["Indirect burdens", ["Count travel, lodging, companion leave, and care-service use too. Easily overlooked burdens."]],
      ["How to compare", ["Line up options in rows and compare evidence strength with visit counts together. Never decide by amounts alone."]],
    ],
    ["区分直接费与间接费。", "纳入追加给药条件。", "多个选项比较。"],
    [
      ["直接费用", ["列出门诊、检查、加工、给药、药物与交通。自由诊疗务必拿到总额书面。"]],
      ["间接负担", ["交通、住宿、陪同误工与照护服务利用也计入。易遗漏的负担。"]],
      ["比较技巧", ["按选项分行排列，结合依据强度与复诊次数一起比。不只凭金额决定很重要。"]],
    ],
  ),
  "high-cost-care": b(
    ["Monthly copayments have caps.", "Categories differ by income.", "Prior limit certificates are convenient."],
    [
      ["System overview", ["When insured copayments exceed set amounts, excesses are reimbursed. Caps differ by age and income."]],
      ["Limit certificates", ["Receiving certificates in advance and showing them caps window payments at limits. Apply through your insurer."]],
      ["Excluded costs", ["Private-care costs and extra bed charges fall outside. Confirm insurance vs. private-care distinctions."]],
    ],
    ["月自付有上限。", "按所得划分档次。", "事先申请限额认定证方便。"],
    [
      ["制度概要", ["保险诊疗自付超一定额时返还超额。上限因年龄所得而异。"]],
      ["限额认定证", ["事先拿到认定证出示，窗口支付封顶到上限。向加入的保险方申请。"]],
      ["对象外费用", ["自由诊疗费用与差额床位费等在对象外。确认保险与自由诊疗的区分。"]],
    ],
  ),
  "tax-deduction": b(
    ["Annual medical spending qualifies.", "Some travel counts too.", "Keeping receipts is basic."],
    [
      ["System overview", ["When yearly medical spending exceeds set amounts, income deductions apply. Treatment-purpose private care can also qualify."]],
      ["Managing records", ["Keep receipts, statements, and travel records. National Tax Agency forms help prepare statements."]],
      ["Where to confirm", ["Confirm eligibility through tax offices and agency guidance. Treatment-content proof is sometimes needed."]],
    ],
    ["年度医疗费为对象。", "交通费部分也含。", "保管收据是基本。"],
    [
      ["制度概要", ["一年医疗费超一定额可享所得扣除。以治疗为目的的自由诊疗也可能对象。"]],
      ["记录管理", ["保管收据明细与就诊交通记录。明细制作可用国税厅格式。"]],
      ["确认方", ["对象与否向税务署与国税厅指南确认。有时需要治疗内容证明。"]],
    ],
  ),
  "insurance-review": b(
    ["Check public coverage first.", "Work backward from needed amounts.", "Honor disclosure duties."],
    [
      ["Public coverage as base", ["Build on public protections like high-cost care and sickness allowances, supplementing shortfalls with private insurance."]],
      ["Estimating needed amounts", ["List treatment, living, and loan costs and see gaps with savings. Excessive coverage strains household budgets."]],
      ["Disclosure and consultation", ["Accurately disclose conditions and visit histories. Never decide on the spot under pushy pitches; take comparison time."]],
    ],
    ["先确认公共保障。", "从必要额倒推。", "遵守告知义务。"],
    [
      ["公共保障是基础", ["踏上高额疗养费与伤病津贴等公共保障，不足用商业保险补是基本思路。"]],
      ["必要额估算", ["列出治疗费、生活费与贷款，看与存款的差。过度保障压迫家计。"]],
      ["告知与咨询", ["基础病与就诊史准确告知。不安的劝诱不要当场定，留出比较时间。"]],
    ],
  ),
  "decision-aids": b(
    ["Visualize options.", "Help organize values.", "Ground dialogue with physicians."],
    [
      ["What decision aids are", ["Materials organizing benefits, harms, and probabilities per option help satisfying decisions. They are developed per disease."]],
      ["Clarifying values", ["Score what you value (likelihood of cure, burden, life effects) and seek fitting choices."]],
      ["Using in visits", ["Bring filled tables and align with physicians. Share even indecision itself."]],
    ],
    ["把选项可视化。", "有助于整理价值观。", "是与医生对话的基础。"],
    [
      ["决策辅助是什么", ["整理各选项收益不利与概率的资料，帮助做出满意决定。按疾病开发。"]],
      ["价值观明确化", ["给重视什么（治愈可能、负担与生活影响等）打分，寻找适合自己的选择。"]],
      ["在门诊的使用", ["带上填好的表与医生磨合。连无法决定也分享。"]],
    ],
  ),
  "patient-groups": b(
    ["Sharing experiences supports you.", "Verify medical judgments separately.", "Choose sustainable involvement."],
    [
      ["How to find them", ["Search groups by disease or region and use hospital and support-center guidance. Online gatherings exist too."]],
      ["How to use them", ["Gain living tips and visit know-how. Hear treatment-effect stories aware of individual differences."]],
      ["Keeping distance", ["You are free to leave when it does not fit. Watch personal-data handling and pitches."]],
    ],
    ["经验分享成为支撑。", "医疗判断另行确认。", "选择不勉强的参与方式。"],
    [
      ["寻找方法", ["按疾病与地区搜索患者会，利用医疗机构与咨询支援中心指引。也有线上聚会。"]],
      ["利用方法", ["获得生活巧思与就诊窍门等鲜活信息。听治疗效果话题意识到个体差。"]],
      ["保持距离", ["感觉不合可自由离开。注意个人信息处理与劝诱。"]],
    ],
  ),
  "counseling-support": b(
    ["Aiming at early adjustment of gaps.", "Neutral standpoints support you.", "Every prefecture has desks."],
    [
      ["What medical mediation is", ["It promotes dialogue between patients and clinicians to resolve gaps. The goal is restoring dialogue, not handling complaints."]],
      ["Medical safety support centers", ["Set up by prefectures and others, they receive medical complaints and consultations. Remember them for troubled times."]],
      ["Preparing consultations", ["Organize course memos and materials and clarify wishes before facing them. Consider family attendance too."]],
    ],
    ["以早期调节分歧为目的。", "中立立场支撑。", "各都道府县有窗口。"],
    [
      ["医疗调解是什么", ["促进患者与医疗者对话，帮助消除分歧。目的不是处理投诉而是恢复对话。"]],
      ["医疗安全支援中心", ["设于都道府县等，受理医疗投诉与咨询。困扰时记得作为咨询方。"]],
      ["咨询准备", ["整理经过备忘与资料，明确期望再面对。也考虑家人陪同。"]],
    ],
  ),
  "palliative-care": b(
    ["Not only for end-of-life stages.", "Pain and anxiety are targets.", "Early combined use is recommended."],
    [
      ["What palliative care is", ["Care easing body pain and heart suffering from illness and supporting life. It can parallel treatment from early after diagnosis."]],
      ["Team makeup", ["Physicians, nurses, pharmacists, psychologists, and social workers join. Available in outpatient, ward, and home settings."]],
      ["Triggers for use", ["Consult primary physicians when pain, insomnia, or anxiety persist. Telling without enduring matters."]],
    ],
    ["不只是终末期。", "疼痛与不安是对象。", "建议早期并用。"],
    [
      ["缓和医疗是什么", ["缓解疾病伴随的身体疼痛与心理痛苦、支撑生活的照护。诊断早期可与治疗并行接受。"]],
      ["团队构成", ["医生护士药剂师心理职社工等参与。门诊病房居家可用。"]],
      ["利用契机", ["疼痛失眠不安持续时咨询主治医生。不忍耐、说出来重要。"]],
    ],
  ),
  "rehab-after-treatment": b(
    ["Concretize goals.", "Raise loads stepwise.", "Records sustain continuing."],
    [
      ["Setting goals", ["Set life-connected goals like walking distances, stairs, and work return. Share with deadlines."]],
      ["Stepwise progress", ["Raise loads in order of range, strength, and endurance. Adjust watching pain and swelling signals."]],
      ["Continuing devices", ["Habituate homework and review with records. Plateaus signal content review."]],
    ],
    ["把目标具体化。", "阶段性加负荷。", "记录帮助坚持。"],
    [
      ["目标设定", ["立下步行距离、楼梯与复工等与生活相连的目标。结合期限分享。"]],
      ["阶段性推进", ["按活动度、肌力与耐力顺序加负荷。看疼痛肿胀信号调整。"]],
      ["坚持技巧", ["把家中课题习惯化，用记录回顾。停滞期是内容调整的信号。"]],
    ],
  ),
  "oral-care-during": b(
    ["The mouth is an infection entry.", "Dental visits before treatment are advised.", "Moisture and cleanliness are basic."],
    [
      ["Why it matters", ["Mouth bacteria lead to aspiration pneumonia and systemic infection. Oral care around treatment prevents complications."]],
      ["Preparation before treatment", ["Finish cavity and gum treatment and tartar removal. Time extractions as needed."]],
      ["Daily care", ["Continue careful brushing, gargling, and moisture. Consult early with mouth sores."]],
    ],
    ["口是感染入口。", "建议治疗前看牙科。", "保湿与清洁是基本。"],
    [
      ["为何重要", ["口腔细菌通向误吸性肺炎与全身感染。治疗前后口腔护理是并发症预防一环。"]],
      ["治疗前准备", ["处理完蛀牙牙周与牙石。需拔牙调整时期。"]],
      ["日常护理", ["坚持细致刷牙、漱口与保湿。有口内炎早商量。"]],
    ],
  ),
  "distant-travel-care": b(
    ["Estimate travel burden.", "Lodging support systems exist.", "Confirm coordination nearby."],
    [
      ["Travel planning", ["Assume durations, transfers, and responses to condition changes. Decide companions and transport in advance."]],
      ["Lodging devices", ["Check patient lodgings and subsidies. Ask about consecutive-night discounts and companion handling too."]],
      ["Local coordination", ["Consult whether tests and follow-up can share locally. Fix information-sharing methods in advance."]],
    ],
    ["估算移动负担。", "有住宿支援制度。", "确认与附近的协作。"],
    [
      ["移动计划", ["设想耗时、换乘与身体变化应对。事先定好陪同与交通方式。"]],
      ["住宿技巧", ["确认患者用住宿设施与补助有无。也问连泊折扣与陪同者处理。"]],
      ["与当地协作", ["商量检查与随访能否当地分担。定好信息分享方法。"]],
    ],
  ),
  "language-support": b(
    ["Communicate in short segments.", "Use figures and real things.", "Confirm interpreter arrangements."],
    [
      ["Plain Japanese", ["Shorten sentences, paraphrase loanwords, and lead with key points. Request paraphrases for confirmation."]],
      ["Visual aids", ["Figures, models, real things, and translated materials aid understanding. Ask about take-home materials."]],
      ["Using interpreters", ["Confirm with institutions whether medical interpreter dispatch or phone interpretation exists. Stay aware of family-interpreter limits too."]],
    ],
    ["短句分段传达。", "用图与实物。", "确认口译安排。"],
    [
      ["简明日语", ["缩短单句，换说外来语，先讲要点。要求换说法确认。"]],
      ["视觉辅助", ["图、模型、实物与翻译资料帮助理解。问有无带回资料。"]],
      ["口译利用", ["向机构确认医疗口译派遣与电话口译有无。也意识到家人翻译的局限。"]],
    ],
  ),
  "treatment-diary": b(
    ["Narrow items to continue.", "Keep both numbers and states.", "Bring to visits."],
    [
      ["Items to record", ["Narrow to about five: pain, movement, medicines, sleep, exercise, and mood. 0–10 staging is handy."]],
      ["Tips for continuing", ["Build into habits like one minute before sleep. Choose whichever lasts, apps or paper."]],
      ["Using in visits", ["Bring change graphs and memos to share with physicians. They help judge effects and review plans."]],
    ],
    ["压缩项目以坚持。", "数值与状态都留。", "带到门诊。"],
    [
      ["记录项目", ["压缩到疼痛、活动、用药、睡眠、运动与心情五项左右。0到10分级方便。"]],
      ["坚持窍门", ["组入习惯如睡前一分钟记录。应用与纸选能坚持的。"]],
      ["在门诊的利用", ["带上变化图表与备忘与医生分享。有助于效果判定与计划调整。"]],
    ],
  ),
  "reviewing-treatment": b(
    ["Fix judgment timing in advance.", "Re-ask reasons for continuing.", "Secure next options."],
    [
      ["Timing reviews", ["Share effect judgment timing and criteria with physicians in advance. Open-ended continuing grows burden."]],
      ["The sunk-cost trap", ["Continuing for spent money and time distorts judgment. Rethink with future outlooks."]],
      ["Proceeding to stop", ["Plan stopping procedures, follow-up, and switching to other options with physicians. Keep records for next steps."]],
    ],
    ["事先定好判定时期。", "重问继续的理由。", "确保下个选项。"],
    [
      ["评估时机", ["事先与医生分享效果判定时期与基准。无限期继续增加负担。"]],
      ["沉没成本陷阱", ["以投入费用时间为由继续会扭曲判断。用今后预期重新想。"]],
      ["中止的推进", ["与医生计划中止手续、随访与切换其他选项。留记录用于下步。"]],
    ],
  ),
  "childcare-balance": b(
    ["Secure multiple caregivers.", "Look up usable systems.", "Sharing around you is key."],
    [
      ["Caregivers and support", ["Combine family, family support, temporary care, and visiting care options. Fix emergency contact networks."]],
      ["Using systems", ["Check childcare and caregiving leave and child nursing leave systems. Consult workplaces and municipal desks."]],
      ["Sharing and adjusting", ["Share visit schedules early and fix backup systems. Not stockpiling strain matters."]],
    ],
    ["确保多个托付方。", "查可用制度。", "向周围分享是关键。"],
    [
      ["托付与支援", ["组合家人、家庭支援、临时托管与访问照护等选项。定好紧急联系网。"]],
      ["制度利用", ["确认育儿休业、照护休业与子女看护假等制度。咨询职场与自治窗口。"]],
      ["分享与调整", ["早分享就诊日程，定好替代体制。不积压勉强重要。"]],
    ],
  ),
  "medical-payment-help": b(
    ["Early consultation widens options.", "Confirm installments and deferrals.", "Look for support programs."],
    [
      ["Consulting first", ["Consult medical clerks and social workers early. Payment adjustments are sometimes possible."]],
      ["Support mechanisms", ["High-cost care loans, municipal subsidies, and free or low-cost care exist. Check eligibility."]],
      ["Private-care cautions", ["Consider large private-care contracts carefully. Confirm totals and cancellation terms before loan contracts."]],
    ],
    ["早商量拓宽选项。", "确认分期缓缴。", "寻找支援制度。"],
    [
      ["先商量", ["早向医疗机构医事课与社工商量。有时可调整支付方式。"]],
      ["支援机制", ["有高额疗养费贷款、自治体补助与免费低额诊疗等。确认对象条件。"]],
      ["自由诊疗的注意", ["慎重考虑自由诊疗大额合同。贷款合同前确认总额与解约条件。"]],
    ],
  ),
};
