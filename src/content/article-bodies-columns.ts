// Translated bodies for scheduled columns (publishAt-gated).
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

export const articleBodiesColumns: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "thermometer-guide": b(
    ["Values differ by measuring site.", "Resting before measuring matters.", "Records serve visits."],
    [
      ["Differences by site", ["Armpit, ear, and forehead measure through different mechanisms, shifting values even at the same timing. Grasp normal temperatures per site."]],
      ["Tips for correct measuring", ["Avoid post-exercise, post-bath, and post-meal moments, resting minutes before measuring. With suspected dead batteries and misuses, confirm through other methods too."]],
      ["Using records", ["Memo morning and evening temperatures with symptoms for visit decision materials. Share treatment-period fevers with provider contacts too."]],
    ],
    ["测量部位不同数值不同。", "测量前安静重要。", "记录有助于受诊。"],
    [
      ["部位差异", ["腋下耳朵额头测量机制不同，同时刻数值也可能偏。按部位把握平热。"]],
      ["正确测量窍门", ["避开运动后入浴后与饮食后，休息数分钟再测。怀疑没电与用法偏差时，用其他方法确认。"]],
      ["记录的利用", ["备忘早晚体温与症状，作为受诊判断材料。治疗中发热也分享给提供机构联系方式。"]],
    ],
  ),
  "blood-donation-basics": b(
    ["Types differ in eligibility with intervals.", "Day-of questionnaires with tests happen.", "Post-session rest with water matters."],
    [
      ["Donation types", ["Whole blood with component donations set age, weight, and hemoglobin conditions with intervals until next times."]],
      ["Day flow", ["Through reception, questionnaires, and advance checks of blood pressure with blood, donations follow. With poor condition days, hold off without strain for next times."]],
      ["Post-session cautions", ["Rest awhile, taking water. Avoid intense exercise with drinking on donation days, telling staff with feeling sick."]],
    ],
    ["种类不同条件间隔各异。", "当天有问诊检查。", "结束后休息喝水重要。"],
    [
      ["献血种类", ["全血献血与成分献血规定年龄体重血红蛋白等条件，以及到下次的间隔。"]],
      ["当天流程", ["经接待、问诊与血压血液事前检查后采血。身体不佳的日子不勉强，留待下次。"]],
      ["结束后注意", ["休息一会喝水。当天避免剧烈运动饮酒，不舒服告诉工作人员。"]],
    ],
  ),
  "microscope-world": b(
    ["Optical with electronic scopes show different things.", "Staining clarifies structures.", "Science centers offer experiences too."],
    [
      ["Microscope types", ["Optical microscopes suit living cell observation; electronic microscopes capture fine 3D structures. Used differently by purposes."]],
      ["Staining devices", ["Transparent cells hardly show as-is, so dyes separate nuclei with skeletons for visibility. Fluorescent methods also exist."]],
      ["Places to see", ["Science centers with museum exhibitions plus public lectures sometimes offer microscope experiences. Check holding information before going out."]],
    ],
    ["光学与电子镜所见不同。", "染色让结构易见。", "科学馆也可体验。"],
    [
      ["显微镜种类", ["光学显微镜适合活细胞观察，电子显微镜捕捉细微立体结构。按用途分工。"]],
      ["染色巧思", ["透明细胞直接难见，用色素染分核与骨架易见。也有荧光方法。"]],
      ["可看的场所", ["科学馆博物馆展示与公开讲座有时有显微镜体验。出门前确认举办信息。"]],
    ],
  ),
  "ips-nobel-story": b(
    ["Won the 2012 Physiology or Medicine prize.", "Awards mark one research starting point.", "Clinical applications advance stepwise."],
    [
      ["Awarded contents", ["Professor Shinya Yamanaka shared the 2012 Nobel Prize in Physiology or Medicine with Dr. Gurdon for discovering matured cells can return to pluripotent states."]],
      ["Path after awarding", ["Around the award, research support with CiRA systems arranged, spreading clinical studies, iPS stocks, and drug-discovery applications. Meanwhile, long verification continues toward establishment as treatment."]],
      ["Living with prize topics", ["Awards show research importance but never guarantee individual treatment effects. View progress individually per target disease."]],
    ],
    ["2012年获生理学医学奖。", "获奖是研究起点之一。", "临床应用阶段性推进。"],
    [
      ["获奖内容", ["山中伸弥教授以成熟细胞可回到多能状态的发现，与格登博士共获2012年诺贝尔生理学医学奖。"]],
      ["获奖后的路", ["以获奖为契机研究支援与CiRA体制完善，临床研究、iPS储备与制药应用扩展。同时，向作为治疗的确立长期验证继续。"]],
      ["与获奖话题的相处", ["获奖显示研究重要，但不保证个别治疗效果。按对象疾病个别看进展。"]],
    ],
  ),
  "organoid-ethics": b(
    ["Handling of brain organoids is debated.", "Consciousness presence can never be confirmed.", "Guideline making advances internationally."],
    [
      ["What is questioned", ["As brain-mimicking organoids sophisticate, how far to treat as things and how to think about consciousness possibilities are debated."]],
      ["Rule movements", ["Societies with bioethics bodies in each country begin organizing thinking on making purposes, scales, and evaluation of transplant with consciousness. Reviewed with research advances."]],
      ["Receiving as readers", ["Topics like “possible consciousness” gather interest, but current science holds no confirming means. Receive topics apart from verification stages."]],
    ],
    ["脑类器官的处理在议论。", "有无意识无法确认。", "指引制定在国际推进。"],
    [
      ["被问什么", ["模仿脑的类器官高度化后，把到何种程度当作物品、如何思考意识可能在议论。"]],
      ["规则动向", ["各国学会与生命伦理机构开始整理制作目的规模、移植与意识评价思路。结合研究进展重审。"]],
      ["作为读者的接受", ["“可能有意识”等话题聚关注，但现科学无确认手段。区分话题与验证阶段接受。"]],
    ],
  ),
  "home-culture-myth": b(
    ["Sterile operation is mandatory.", "Temperature with gas management is needed.", "Using homemade cells is dangerous."],
    [
      ["Sterile walls", ["Cell culture dies on bacterial and fungal contamination, needing dedicated clean facilities with trained operation. Home environments never secure it."]],
      ["Environment management", ["Temperatures, carbon dioxide levels, media exchange timing, and quality checks manage many conditions with records. Imitative reproduction never works."]],
      ["Dangers of casual attempts", ["Returning homemade cells and cultures into bodies risks serious dangers like infections. Never engage such pitches and products."]],
    ],
    ["无菌操作必须。", "温度气体管理必要。", "使用自制细胞危险。"],
    [
      ["无菌之壁", ["细胞培养怕细菌真菌污染，需专用洁净设备与训练操作。家庭环境无法确保。"]],
      ["环境管理", ["温度二氧化碳浓度、培养液更换时机与质量确认，众多条件连记录管理。模仿再现不行。"]],
      ["轻率尝试的危险", ["把自制细胞培养物放回体内有感染等重大危险。不要碰这类劝诱商品。"]],
    ],
  ),
  "first-aid-basics": b(
    ["Securing safety comes first.", "Pressure bleeding control with emergency calls is basic.", "Course attendance prepares."],
    [
      ["Securing safety first", ["Avoid traffic, fire, and other dangers; never collapsing yourself comes first. Seek surrounding help, sharing roles."]],
      ["Bleeding with reporting", ["Pressure bleeding control with clean cloths, consciousness with breathing checks, and emergency calls are basic. Follow dispatcher instructions."]],
      ["Learning chances", ["Fire departments with municipal lifesaving courses teach CPR with AED use. Regular reviewing supports emergency moments."]],
    ],
    ["确保安全第一。", "压迫止血与呼救是基本。", "听课成为准备。"],
    [
      ["先确保安全", ["避开交通火气等危险，自己不倒下第一。求周围帮助，分工。"]],
      ["止血与通报", ["干净布压迫止血、意识呼吸确认与119通报是基本。遵指令员指示应对。"]],
      ["学习机会", ["消防署与自治体救命讲习教心肺复苏与AED使用。定期复习成为万一时的支撑。"]],
    ],
  ),
  "medicine-storage": b(
    ["Watch humidity, light, and temperatures.", "Honor expiry dates.", "Consult pharmacies about leftovers."],
    [
      ["Storage basics", ["Avoid direct sunlight with high heat and humidity, storing beyond children's reach. Medicines instructed for cool places manage in refrigerators."]],
      ["Thinking about expiry", ["Post-opening usable periods differ by forms; eye drops and others run short. Never use expired, discolored, and odd-smelling medicines; consult pharmacies."]],
      ["Handling leftovers", ["Without stockpiling unfinished medicines, have visits and pharmacies adjust them. Never hand over through self-judgment to others."]],
    ],
    ["注意潮湿光照温度。", "遵守有效期。", "剩余药咨询药房。"],
    [
      ["保管基本", ["避开直射高温高湿，放儿童够不到处。指示冷藏的药放冰箱管理。"]],
      ["期限的看法", ["开封后可用期限因剂型而异，眼药水等较短。过期变色异味药不用，咨询药房。"]],
      ["剩余药处理", ["不囤积未服完的药，就诊药房调整。不自行转给他人。"]],
    ],
  ),
  "nobel-prize-guide": b(
    ["Basic research achievements are targeted.", "Separate stories from treatment establishment.", "Reach prize reason originals."],
    [
      ["Prize targets", ["Physiology or Medicine prizes often honor basic discoveries like disease mechanism uncovering, evaluated over years after announcing."]],
      ["Living with coverage", ["Receive headlines like “directly linked to treatment” confirming research stages. Moving on to reason explanatory materials with original papers deepens understanding."]],
      ["Using for learning", ["Around awards, rereading related basic articles clarifies whole research pictures."]],
    ],
    ["基础研究功绩是对象。", "与治疗确立是两回事。", "追溯获奖理由原文。"],
    [
      ["奖的对象", ["生理学医学奖多授予疾病机制阐明等基础发现，经多年评价。"]],
      ["与报道的相处", ["“直通治疗”等标题确认研究阶段接受。进到获奖理由解说资料与原文理解加深。"]],
      ["用于学习", ["以获奖为契机重读相关基础文章，研究全貌易见。"]],
    ],
  ),
  "science-events": b(
    ["Universities with institutes hold public events.", "Advance applications are sometimes needed.", "Prepared questions deepen learning."],
    [
      ["Event types", ["Public lectures, facility tours, science center exhibitions, and online streams exist. Choose confirming target ages with specialty levels."]],
      ["Finding methods", ["University and institute event guides, municipal bulletins, and library boards source information. Popular plans need early applications."]],
      ["Joining tips", ["Preparing memos of unknown words with questions deepens dialogues with researchers. Tour records serve later learning."]],
    ],
    ["大学研究所办公开活动。", "有时需事先申请。", "准备问题加深学习。"],
    [
      ["场所种类", ["有公开讲座、设施参观、科学馆企划展与在线直播。确认对象年龄专业度选择。"]],
      ["查找方法", ["大学研究机构活动指南、自治体广报与图书馆揭示是信息源。热门企划需早申请。"]],
      ["参加窍门", ["准备不懂词语备忘与问题，与研究者对话加深。参观记录有助于之后学习。"]],
    ],
  ),
};
