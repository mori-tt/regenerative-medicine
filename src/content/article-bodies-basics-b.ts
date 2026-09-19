// Translated bodies for basics articles, part B (kidney/liver through family doctor).
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

export const articleBodiesBasicsB: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "kidney-liver": b(
    [
      "Kidneys filter; livers center metabolism.",
      "These organs show few subjective symptoms.",
      "They affect drug amounts and treatment plans.",
    ],
    [
      ["Kidney workings", ["They filter blood, excreting waste and extra water as urine, keeping blood pressure and water balance. Declined functions also affect drug excretion."]],
      ["Liver workings", ["It handles diverse roles like nutrient storage and conversion, harmful substance detoxification, and blood component synthesis. It is also known as a highly regenerative organ."]],
      ["When considering treatment", ["Kidney and liver function values relate to drug amounts and procedure availability. Ask physicians about test meanings and confirm medicine and meal cautions."]],
    ],
    ["肾脏过滤，肝脏是代谢中心。", "是自觉症状少的器官。", "关系药量与治疗计划。"],
    [
      ["肾脏功能", ["过滤血液，把废物多余水分作尿排出，保持血压水分平衡。功能下降影响药物排泄。"]],
      ["肝脏功能", ["承担营养储转换、有害物质解毒与血液成分合成等多彩作用。也以再生能力高知名。"]],
      ["考虑治疗时", ["肾肝功能数值关系药量与处置可行。向医生问检验值含义，确认用药饮食注意。"]],
    ],
  ),
  "brain-basics": b(
    [
      "Neurons transmit signals.",
      "Regions share roles.",
      "Post-damage recovery needs conditions.",
    ],
    [
      ["Brain cells", ["Signal-transmitting neurons (neurons) cooperate with glial cells handling support, nutrition, and cleaning. Counts are vast, with connections creating workings."]],
      ["Regional role sharing", ["Movement, sensation, language, memory, and emotion hold rough regional roles. Damage sites cause different symptoms for this reason."]],
      ["Difficulty of repair", ["Rebuilding lost circuits is never easy. Studies combining cell transplants, rehabilitation, and environment building advance."]],
    ],
    ["神经细胞传递信号。", "部位分工。", "损伤后恢复需要条件。"],
    [
      ["脑细胞", ["传信号的神经细胞（神经元）与承担支撑营养清扫的胶质细胞协作。数量庞大，连接产生功能。"]],
      ["部位分工", ["运动感觉语言记忆情感等，部位有大致分工。损伤部位出现症状不同即因此。"]],
      ["修复的难", ["重建失去的回路不容易。组合细胞移植、康复与环境营造的研究在推进。"]],
    ],
  ),
  senses: b(
    [
      "Retinas are also called parts of brains.",
      "Inner-ear hair cells supposedly hardly return.",
      "Combinations with sensory aids matter.",
    ],
    [
      ["How eyes work", ["Corneas and lenses gather light, retinas convert into signals sent to brains. Studies using iPS-derived retinal cells advance for age-related macular degeneration and others."]],
      ["How ears work", ["Sound vibrations convert into signals at inner-ear hair cells. In mammals, once lost they supposedly hardly return, with regeneration and hearing-aid research continuing."]],
      ["Combinations with aids", ["Glasses, hearing aids, and visual and hearing rehabilitation support plus regeneration-seeking research are two wheels. First secure life-quality-keeping means."]],
    ],
    ["视网膜也称脑的一部分。", "内耳毛细胞据说难恢复。", "与感觉辅助手段的组合重要。"],
    [
      ["眼睛机制", ["角膜晶状体聚光，视网膜变信号送脑。以老年黄斑变性等为对象，用iPS来源视网膜细胞的研究在推进。"]],
      ["耳朵机制", ["声音振动在内耳毛细胞变信号。哺乳类一旦失去据说难回，再生与助听手段研究继续。"]],
      ["与辅助的组合", ["眼镜助听器与视觉听觉康复等支援，和以再生为目标的研究是两轮。先确保维持生活质量的手段。"]],
    ],
  ),
  "teeth-bones-growth": b(
    [
      "Bones repeat breaking and making.",
      "Baby-to-permanent tooth exchange exists.",
      "Growing-stage treatments need long views.",
    ],
    [
      ["Bone remodeling", ["Bones repeat absorption by osteoclasts with formation by osteoblasts, keeping strength. During growth, shapes also change with lengthening."]],
      ["Tooth exchange and regeneration research", ["Baby-to-permanent exchange is a body-built regeneration example. Dental research including lost-tooth regeneration and dental pulp stem cell use also advances."]],
      ["Viewpoints for growing-stage treatment", ["Growing-stage treatments look ahead to effects on future growth. Consult pediatric specialists with long outlooks."]],
    ],
    ["骨重复破坏与 निर्माण。", "有乳牙到恒牙的替换。", "成长期治疗需长期视角。"],
    [
      ["骨重塑", ["骨重复破骨细胞吸收与成骨细胞形成，保持强度。成长期随伸长形状也变。"]],
      ["牙齿替换与再生研究", ["乳牙到恒牙替换是身体内置再生的例子。失去牙齿再生与牙髓干细胞利用等牙科研究也在推进。"]],
      ["成长期治疗的视角", ["成长期治疗着眼对未来成长的影响。与儿科专科医生商量长期预期。"]],
    ],
  ),
  hormones: b(
    [
      "Tiny amounts work body-wide.",
      "They relate to growth, metabolism, and reproduction.",
      "Balance disorders lead to disease.",
    ],
    [
      ["Endocrine mechanisms", ["Hormones from thyroid, pancreas, and other endocrine glands travel by blood to work on distant organs. A slowly spreading network unlike nerves."]],
      ["Representative examples", ["Insulin adjusting blood sugar, hormones relating to growth and metabolism, and stress-response hormones exist. Excess and shortage lead to diverse symptoms."]],
      ["Links with treatment", ["Hormone-related diseases center on drug adjustment. Without confusing with regenerative medicine topics, confirm standard care per target disease."]],
    ],
    ["微量作用全身。", "关系生长代谢生殖。", "平衡紊乱通向疾病。"],
    [
      ["内分泌机制", ["甲状腺胰腺等内分泌腺出的激素经血运到远处器官。是与神经不同的缓慢扩散联络网。"]],
      ["代表性例子", ["有调血糖的胰岛素、关系生长代谢的激素与应激激素等。过不足通向多种症状。"]],
      ["与治疗的关系", ["激素相关疾病以药物调整为中心。不与再生医学话题混淆，确认按对象疾病的标准治疗。"]],
    ],
  ),
  "antibodies-vaccines": b(
    [
      "Antibodies are molecules binding markers.",
      "Vaccines train memories.",
      "Antibody drugs and vaccines are separate things.",
    ],
    [
      ["How antibodies work", ["B-cell-made antibodies bind pathogen and other markers to aid exclusion. After one bout, memory cells remain, speeding next responses."]],
      ["Vaccine thinking", ["Weakened pathogens and others pre-make immune memories, preparing for real infections. Both effects and side reactions are verified, with targets and counts set."]],
      ["Differences from cell therapy", ["Vaccines and antibody drugs mainly intervene at molecular levels, differing from cell transplants in mechanisms. When viewing topics, distinguish targets from methods."]],
    ],
    ["抗体是结合标志的分子。", "疫苗是制造记忆的训练。", "抗体药与疫苗是两回事。"],
    [
      ["抗体作用", ["B细胞制的抗体结合病原体等标志帮助排除。得过一次残留记忆细胞，下次应答更快。"]],
      ["疫苗思路", ["用弱化病原体等事先制造免疫记忆，备战真正感染。效果副作用两面验证，规定对象次数。"]],
      ["与细胞治疗的区别", ["疫苗与抗体药主要在分子层面介入，与细胞移植机制不同。看话题时区分对象与方法。"]],
    ],
  ),
  "allergy-basics": b(
    [
      "It reacts to inherently harmless things.",
      "IgE and histamine join.",
      "Symptomatic and causal measures exist.",
    ],
    [
      ["Allergy mechanisms", ["Immunity overreacts to pollen, foods, and others, causing sneezes, itches, and in severe cases whole-body symptoms. Constitution and environments join."]],
      ["Representative types", ["Hay fever, food allergies, asthma, and atopic dermatitis exist. Symptom patterns and handling differ by type."]],
      ["Living with them", ["Cause avoidance, drug-based symptom easing, and constitution-improving treatments exist. Self-judged restrictions are dangerous, so plan with physicians."]],
    ],
    ["对本无害之物反应。", "IgE与组胺参与。", "有对症与病因对策。"],
    [
      ["过敏机制", ["免疫对花粉食物等过度反应，致喷嚏瘙痒，重则全身症状。体质环境参与。"]],
      ["代表性种类", ["有花粉症、食物过敏、哮喘与特应性皮炎等。症状出法与应对因种类而异。"]],
      ["相处", ["有原因回避、药物缓解症状与改善体质的治疗等。自行限制危险，与医生立计划。"]],
    ],
  ),
  "cancer-basics": b(
    [
      "Accumulated genetic damage joins.",
      "Early detection with standard care is basic.",
      "Immunotherapy and regenerative medicine are separate things.",
    ],
    [
      ["What cancer is", ["Diseases where accumulated genetic damage spreads uncontrollably growing cells. Properties and treatments differ greatly by type and progress."]],
      ["Standard care thinking", ["Surgery, drug therapy, and radiation combine, advancing along guidelines. Immune checkpoint inhibitors and others are also positioned per target."]],
      ["Differences from regenerative medicine", ["Cancer immunotherapy and regenerative medicine differ in both purposes and methods. Pitches touting cancer as targets for private-care provision need especially careful checking."]],
    ],
    ["基因损伤积累参与。", "早期发现与标准治疗是基本。", "免疫疗法与再生医学是两回事。"],
    [
      ["癌症是什么", ["基因损伤积累、无节制增殖细胞扩散的病。性质治疗因种类进展大不相同。"]],
      ["标准治疗思路", ["组合手术药物放疗，按指南推进。免疫检查点抑制剂等也按对象定位。"]],
      ["与再生医学的区别", ["癌症免疫疗法与再生医学目的方法都不同。以癌症为对象宣称的自由诊疗说明需格外慎重确认。"]],
    ],
  ),
  "diabetes-lifestyle": b(
    [
      "Insulin shortage and resistance join.",
      "Meals, exercise, and drugs basically combine.",
      "Cell transplant studies are underway.",
    ],
    [
      ["Blood sugar mechanisms", ["Insulin from pancreatic beta cells adjusts blood sugar. Lowered secretion and resistance continuing high blood sugar leads to complications."]],
      ["Daily management", ["Continuing meals, exercise, medicines, and regular tests centers. Understand number meanings and fix reasonable goals with physicians."]],
      ["Cell therapy studies", ["Studies transplanting insulin-producing cells and others advance, but immunity, long stability, and other challenges abound, far from replacing standard care."]],
    ],
    ["胰岛素不足与不易起效参与。", "饮食运动药物组合是基本。", "细胞移植研究在途中。"],
    [
      ["血糖机制", ["胰岛β细胞出的胰岛素调血糖。分泌下降与作用变差致高血糖持续通向并发症。"]],
      ["日常管理", ["坚持饮食运动服药定期检查是中心。理解数值含义，与医生定不勉强的目标。"]],
      ["细胞治疗研究", ["移植产胰岛素细胞等的研究在推进，但免疫长期稳定性等课题多，远未到替代标准治疗阶段。"]],
    ],
  ),
  "pregnancy-cordblood": b(
    [
      "Cord blood supplies hematopoietic stem cells.",
      "Public banks and private storage are separate things.",
      "Decide before childbirth.",
    ],
    [
      ["What cord blood is", ["Blood remaining in cords and placentas, including hematopoietic stem cells. Collection happens at childbirth, considered low-burden for mother and child."]],
      ["Public banks vs. private storage", ["Public banks freely serve third-party provision; private storage is paid family keeping. Purposes and costs differ, so never confuse them."]],
      ["Viewpoints when deciding", ["Confirm usability, costs, storage periods, and operator systems, discussing with family before childbirth. Even when rushed by pitches, stopping matters."]],
    ],
    ["脐带血是造血干细胞供给源。", "公共库与民间保存是两回事。", "分娩前决定。"],
    [
      ["脐带血是什么", ["脐带胎盘残留血液，含造血干细胞。采集在分娩时进行，据说母子负担小。"]],
      ["公共库与民间保存", ["公共库是以第三方提供为目的的无偿机制，民间保存是为家庭的有偿保管。目的费用都不同，不要混淆很重要。"]],
      ["决定时的视角", ["确认利用可能、费用、保管期限与事业者体制，分娩前家人商量。即使被劝诱催促，停下来重要。"]],
    ],
  ),
  "aging-society": b(
    [
      "Degenerative diseases and organ failure grow.",
      "Care and medical-cost relations are also issues.",
      "Both hopes and verification are needed.",
    ],
    [
      ["Growing diseases", ["In joint degeneration, heart failure, neurodegenerative diseases, and others growing with age, recovering lost functions challenges. One background of hopes placed on regenerative medicine."]],
      ["Links with society", ["Themes also relating to care burden, medical costs, and working-style changes. Technical advances proceed as sets with system and cost debates."]],
      ["Calm views", ["Hope sizes and distances to practical use are separate things. View progress individually per target disease."]],
    ],
    ["变性疾病与器官衰竭增加。", "与照护医疗费的关系也是论点。", "期待与验证两轮必要。"],
    [
      ["增加的病", ["关节变性、心衰与神经变性疾病等随老龄增加，恢复失去功能是课题。是寄予再生医学期待的背景之一。"]],
      ["与社会的关系", ["也是与照护负担、医疗费与工作方式变化相关的主题。技术进步与制度费用讨论成套推进。"]],
      ["冷静的看法", ["期待大小与到实用距离是两回事。按对象疾病个别看进展。"]],
    ],
  ),
  "disabilities-support": b(
    [
      "Medicine and welfare hold separate desks.",
      "Handbook, pension, and other systems exist.",
      "Using help desks is the shortcut.",
    ],
    [
      ["Main systems", ["Physical, intellectual, and mental disability handbooks, independence support medicine, disability pensions, and prosthetics exist. Municipalities guide targets and procedures."]],
      ["Help desks", ["Municipal disability welfare officers, core support centers, and hospital social workers consult. Connect without carrying alone."]],
      ["Relations with medicine", ["New treatments including regenerative medicine and life-support systems must be considered separately. Arrange treatment judgments with living support in parallel."]],
    ],
    ["医疗与福利窗口各异。", "有手册年金等制度。", "利用咨询窗口是捷径。"],
    [
      ["主要制度", ["有身体智力精神残障手册、自立支援医疗、残障年金与辅具等。对象手续由自治体指南。"]],
      ["咨询窗口", ["市区町村残障福利担当、基干咨询支援中心与医院社工是咨询方。不要独自承担去连接。"]],
      ["与医疗的关系", ["含再生医学的新治疗与生活支援制度要分开想。治疗判断与生活支援并行整备。"]],
    ],
  ),
  "rehabilitation-basics": b(
    [
      "It aims at regaining lost functions.",
      "Three therapies share roles.",
      "Synergy with cell therapy is hoped for.",
    ],
    [
      ["Three therapies", ["Physical therapy supports movement, occupational therapy supports daily motions, and speech-hearing therapy supports speaking and eating functions. Proceed sharing goals."]],
      ["Timing and continuing", ["Stages run from acute through recovery to maintenance, with continuing mattering. Understand that judging effects takes time."]],
      ["Combinations with regenerative medicine", ["Post-cell-transplant functional recovery needs rehabilitation. Check whether treatment plans include it."]],
    ],
    ["以重获失去功能为目标。", "三种疗法分工。", "期待与细胞治疗相乘。"],
    [
      ["三种疗法", ["理学疗法支撑动作，作业疗法支撑生活动作，语言听觉疗法支撑说话进食功能。共享目标推进。"]],
      ["时期与持续", ["从急性期到恢复期维持期有阶段，持续重要。理解效果判定耗时。"]],
      ["与再生医学的组合", ["细胞移植后功能恢复离不开康复。确认治疗计划是否纳入。"]],
    ],
  ),
  "nutrition-basics": b(
    [
      "Materials, energy, and regulators exist.",
      "Proteins are repair materials.",
      "Extreme restrictions backfire.",
    ],
    [
      ["Five major nutrients", ["Balancing proteins, fats, carbohydrates, vitamins, and minerals is basic. Each plays material, fuel, and regulatory roles."]],
      ["Repair and nutrition", ["Wound repair and muscle keeping need proteins and energy. Consult physicians and dietitians about pre- and post-treatment meals."]],
      ["Beware extreme information", ["Check evidence for exaggerated specific-food effects and extreme restrictions. Watch supplement-drug combinations too."]],
    ],
    ["有材料能量调节者。", "蛋白质是修复材料。", "极端限制适得其反。"],
    [
      ["五大营养素", ["蛋白质脂质碳水维生素矿物质的平衡是基本。各自有材料燃料调节作用。"]],
      ["修复与营养", ["伤口修复与肌肉维持需要蛋白质能量。治疗前后饮食与医生管理营养师商量。"]],
      ["注意极端信息", ["特定食品夸大效果与极端限制确认依据。保健品与药物同服也要注意。"]],
    ],
  ),
  "exercise-basics": b(
    [
      "It works on strength, bones, and heart-lungs.",
      "Continuing matters more than intensity.",
      "Confirm with physicians during treatment.",
    ],
    [
      ["Exercise effects", ["Strength keeping, bone density holding, heart-lung function and mood improvements are hoped for. Start by raising daily activity amounts."]],
      ["Continuing devices", ["Start short, record and review. Never ignore pain and breathlessness signals; adjust contents."]],
      ["Cautions during treatment", ["Postoperative and post-administration exercise limits differ per treatment. Confirm start timing and contents with physicians and physical therapists."]],
    ],
    ["对肌力骨骼心肺有效。", "持续比强度重要。", "治疗中向医生确认。"],
    [
      ["运动效果", ["期待肌力维持、骨密度保持与心肺功能心情改善。从增加生活中活动量开始。"]],
      ["坚持技巧", ["从短时开始，记录回顾。不忽视疼痛气促信号，调整内容。"]],
      ["治疗中的注意", ["术后给药后运动限制因治疗而异。开始时期内容向医生理疗师确认。"]],
    ],
  ),
  "sleep-basics": b(
    [
      "Growth hormones secrete during sleep.",
      "Rhythms and light relate.",
      "With continuing troubles, consult specialists.",
    ],
    [
      ["Sleep roles", ["It supposedly relates to body repair, memory organizing, and immunity adjustment. Continuing shortage affects condition and judgment."]],
      ["Devices raising quality", ["Review wake-sleep rhythms, morning light, and pre-sleep caffeine and screen handling. Short naps are guides."]],
      ["Consultation guides", ["With continuing snoring, apnea, and strong daytime sleepiness, consult institutions. Avoid self-judged sleep medicine use."]],
    ],
    ["生长激素在睡眠中分泌。", "节律与光相关。", "烦恼持续找专家商量。"],
    [
      ["睡眠作用", ["据说关系身体修复、记忆整理与免疫调节。不足持续影响身体状态与判断力。"]],
      ["提高质量的巧思", ["调整起睡节律、晨光与睡前咖啡因屏幕 Umgang。午睡宜短。"]],
      ["咨询标准", ["打鼾呼吸暂停与日间强困意持续时咨询医疗机构。避免自行判断用安眠药。"]],
    ],
  ),
  "mental-health-decision": b(
    [
      "Anxiety is a natural reaction.",
      "Writing out and sharing help.",
      "With continuing suffering, consult.",
    ],
    [
      ["What anxiety is", ["Disease and treatment uncertainties burden everyone. When collecting too much information confuses, arrange and prioritize for now."]],
      ["Coping devices", ["Writing worries out, sharing with trusted people, and securing rest and sleep are basic. Think separating feelings from facts."]],
      ["Help desks", ["Cancer support centers, psychiatry and psychosomatic departments, and municipal desks exist. Connect early when suffering continues."]],
    ],
    ["不安是自然反应。", "写出分享有帮助。", "痛苦持续去商量。"],
    [
      ["不安的真面目", ["疾病治疗的不确定谁都负担。收集信息过多混乱时，暂且整理定优先。"]],
      ["应对技巧", ["写出担心、与信赖的人分享与确保休息睡眠是基本。分开心情与事实思考。"]],
      ["咨询方", ["有癌症咨询支援中心、精神科心疗内科与自治咨询窗口等。痛苦持续早连接。"]],
    ],
  ),
  "health-checkups": b(
    [
      "Checkups and screenings differ in purposes.",
      "Never leave “needs detailed exams” alone.",
      "View results over years.",
    ],
    [
      ["Differences between checkups and screenings", ["General checkups aim at lifestyle-disease prevention; cancer screenings aim at early detection. Target ages and intervals are set."]],
      ["When told needs detailed exams", ["Detailed exams are next stages for definitive diagnoses. Receive them promptly at referrals without leaving alone. Ask physicians about anxieties."]],
      ["Viewing yearly changes", ["Trends matter more than single-year values. Store results and share with family doctors."]],
    ],
    ["体检与筛查目的不同。", "要精密检查不放置。", "结果按经年看。"],
    [
      ["体检与筛查的区别", ["特定体检等以生活习惯病预防、癌症筛查以早期发现为目的。规定对象年龄间隔。"]],
      ["被说要精密检查时", ["精密检查是确定诊断的下阶段。不要放置，在转诊方迅速接受。不安处问医生。"]],
      ["看经年变化", ["比单年值推移更重要。保管结果，与家庭医生分享。"]],
    ],
  ),
  "family-doctor": b(
    [
      "Starting points for daily consultations.",
      "Bridges to specialists.",
      "Unify information.",
    ],
    [
      ["Family doctors' roles", ["They handle daily condition management, test interpretation, specialist referrals, and medicine organizing. Continuing visits ease noticing changes."]],
      ["Finding and relating", ["Choose by accessibility, polite explanations, and coordination attitudes. Bring medicine notebooks and checkup results to share courses."]],
      ["Using referrals", ["When considering new treatments, family doctors' views become compasses. Consult bringing materials under consideration."]],
    ],
    ["日常咨询的起点。", "向专科医生的桥梁。", "统一信息。"],
    [
      ["家庭医生的作用", ["承担日常健康管理、检验解释、专科转诊与用药整理。持续就诊易发现变化。"]],
      ["寻找相处", ["以好去、说明细致与协作姿态为标准选。带上用药手册体检结果分享经过。"]],
      ["转诊的利用", ["考虑新治疗时，家庭医生意见是指南针。带上考虑中的资料商量。"]],
    ],
  ),
};
