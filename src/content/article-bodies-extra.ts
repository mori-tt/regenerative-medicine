// Translated bodies for the second content batch (50 articles), part 1.
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

export const articleBodiesExtraA: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "cell-sizes": b(
    ["Cell sizes differ greatly by type.", "A sense of μm units makes explanations easier to read.", "Smallness never relates to importance of workings."],
    [
      ["Size guidelines", ["Human eggs are about 0.1mm across and barely visible, but most body cells run 10–30μm (1μm is a thousandth of a millimeter). Platelets are even smaller at 2–3μm."]],
      ["Measuring and units", ["Microscope images carry scale bars. When μm and nm (nanometers, a thousandth of μm) appear, stay aware of target sizes."]],
      ["What sizes mean", ["Small red cells pass capillaries; long nerves send signals far. Shapes and sizes connect to workings."]],
    ],
    ["细胞大小因种类大不相同。", "有μm单位感，说明更易读。", "小与功能重要性无关。"],
    [
      ["大小标准", ["人卵直径约0.1毫米，肉眼勉强可见，但多数体细胞10到30微米（1微米是1毫米千分之一）。血小板更小，2到3微米左右。"]],
      ["测量与单位", ["显微镜图像附有比例尺。出现微米与纳米（纳米是微米千分之一）时，意识到对象大小。"]],
      ["大小的含义", ["红细胞小为通过毛细血管，神经长为把信号送远。形状大小与功能相连。"]],
    ],
  ),
  "blood-types": b(
    ["ABO groups differ in red cell surface markers.", "Mismatched transfusion leads to serious side effects.", "Blood types and personalities or disease risks are separate stories."],
    [
      ["What ABO grouping is", ["Red cell surface sugar-chain and other marker combinations divide groups. Plasma holds antibodies against missing types, clumping on mismatched blood entry."]],
      ["Matching in transfusion", ["Before transfusion, blood typing with crossmatching confirms matching. Matching only raises probabilities; condition observation continues."]],
      ["Myths around blood types", ["No scientific evidence decides personalities or abilities by blood type. Reported links with disease susceptibility must be viewed apart from lifestyle and other effects."]],
    ],
    ["ABO是红细胞表面标志的差异。", "不合的输血通向重副作用。", "血型与性格疾病易感是两回事。"],
    [
      ["ABO是什么", ["按红细胞表面糖链等标志组合划分。血浆中有针对缺失型的抗体，不合血液进入发生凝集反应。"]],
      ["输血中的相合确认", ["输血前用血型检验与交叉配血确认相合。相合只提高概率，状态观察继续。"]],
      ["血型的误解", ["血型决定性格能力的科学依据不存在。疾病易感关联的报告，也需与生活习惯等影响分开想。"]],
    ],
  ),
  "body-water": b(
    ["About 60% of adult bodies is water.", "Balances of water with salts (electrolytes) matter.", "Replenishing before thirst is basic."],
    [
      ["Workings of water", ["It handles blood and lymph flows, nutrition and waste transport, and temperature regulation. Slight shortages link to fatigue and lower concentration."]],
      ["What electrolytes are", ["Sodium, potassium, and other components dissolved in water carrying charges. Lost through sweat, they need salt replenishment alongside water after heavy sweating."]],
      ["Tips for intake", ["Consciously drink on waking, around bathing, and during exercise. With conditions or medicines restricting water and salts, follow physician instructions first."]],
    ],
    ["成人身体约六成是水分。", "水与盐分（电解质）平衡重要。", "口渴前补充是基本。"],
    [
      ["水分的作用", ["承担血液淋巴流动、营养废物运输与体温调节。轻微不足通向疲劳与注意力下降。"]],
      ["电解质是什么", ["钠钾等溶于水带电的成分。随汗流失，大量出汗时除水还需要盐分补充。"]],
      ["补充窍门", ["起床时、入浴前后与运动时有意识喝水。有基础病用药限制水分盐分者，优先遵医嘱。"]],
    ],
  ),
  "lymph-system": b(
    ["Lymph collects extra tissue water.", "Lymph nodes gate off foreign matter.", "Continuing swelling needs cause checks."],
    [
      ["Lymph flows", ["Water and waste seeping from capillaries gather into lymph vessels returning to veins. Muscle movements aid flows, so long still postures swell easily."]],
      ["Roles of lymph nodes", ["In neck, armpits, groin, and others, immune cells catch bacteria and viruses. Swelling with pain on infection shows these workings."]],
      ["Handling swelling", ["Passing swelling improves with rest and light movement. With one-sided swelling, continuing swelling, or pain, consult medical institutions."]],
    ],
    ["淋巴回收组织多余水分。", "淋巴结是阻挡异物的关口。", "持续水肿需确认原因。"],
    [
      ["淋巴流动", ["毛细血管渗出的水分废物聚入淋巴管回静脉。肌肉活动帮助流动，长时间同姿势易肿。"]],
      ["淋巴结的作用", ["颈腋腹股沟等处免疫细胞捕获细菌病毒。感染时肿痛是该功能的表现。"]],
      ["水肿应对", ["一过性水肿休息轻运动改善。单侧肿、长期水肿与伴痛时咨询医疗机构。"]],
    ],
  ),
  "microbiome": b(
    ["Diverse bacteria live in guts.", "Digestive help and immune links are studied.", "Beware exaggerated effects of specific foods."],
    [
      ["Gut residents", ["Trillions of bacteria supposedly live in human guts, with balances differing per person. Birth, meals, and medicines change them."]],
      ["Workings being uncovered", ["Roles in fiber breakdown, vitamin synthesis, gut defense, and immune adjustment are studied. Links with obesity and disease are examined, but causal proof is underway."]],
      ["How to live with them", ["Diverse eating with avoiding extreme exclusion and excess is basic. Medical uses like fecal transplants belong within research and care frameworks; self-judged attempts are dangerous."]],
    ],
    ["肠道住着多样细菌。", "消化帮助与免疫关系在研究。", "注意特定食品的夸大效果。"],
    [
      ["肠道居民", ["人体肠道据说住着上万亿细菌，平衡因人而异。分娩饮食药物改变之。"]],
      ["明确中的作用", ["纤维分解、维生素合成、肠道防御与免疫调节等作用在研究。肥胖疾病关联也在调查，因果阐明途中。"]],
      ["相处", ["多样饮食、避免极端去除过量摄取是基本。粪菌移植等医疗在研究诊疗框架内，自己判断实施危险。"]],
    ],
  ),
  "fever-basics": b(
    ["Fever aids immune workings as a body reaction.", "View whole conditions, not only numbers.", "Knowing visit guidelines reassures."],
    [
      ["Why fevers rise", ["Sensing bacteria and viruses, brains raise set temperatures, making heat through shivering and vessel contraction. Considered a body strategy raising immune workings."]],
      ["Handling fevers", ["Frequently take water, wear comfortable clothes, and rest. Fever reducers ease suffering; they never cure diseases themselves. Confirm usage with pharmacists."]],
      ["Signals for visits", ["With unclear consciousness, hard breathing, inability to take water, continuing high fevers, or limp infants and older adults, visit early. Share treatment-period fevers with provider contacts too."]],
    ],
    ["发热是帮助免疫的身体反应。", "不只看数字，看全身状态。", "知道就诊标准安心。"],
    [
      ["为何发热", ["感知细菌病毒，大脑调高设定温度，经战栗与血管收缩产热。认为是提高免疫功能的身体策略。"]],
      ["发热时的应对", ["勤喝水，穿宽松衣休息。退热药为缓解痛苦，不治病本身。用法问药剂师确认。"]],
      ["就诊的信号", ["意识不清、呼吸困难、喝不下水、高热持续与婴幼儿老人萎靡等早受诊。治疗中发热也分享给提供机构联系方式。"]],
    ],
  ),
  "pain-basics": b(
    ["Pain signals dangers.", "Same stimuli feel differently by person and situation.", "Communicating devices smooth care."],
    [
      ["How pain travels", ["Injury and inflammation signals reach brains through nerves, felt as pain. Reflexive hand-pulling moves through fast circuits bypassing brains."]],
      ["Why perception changes", ["Tension, anxiety, sleep shortage, and past experiences change pain perception. With chronic pain, nerve sensitivity itself may rise, needing both causal and perceptual responses."]],
      ["Communicating pain", ["Organizing places, onsets, qualities (throbbing, prickling), 0–10 strengths, and relievers serves diagnosis and treatment choices."]],
    ],
    ["疼痛是告知危险的信号。", "同样刺激感受因人因境而异。", "传达技巧让诊疗顺利。"],
    [
      ["疼痛的传递", ["受伤炎症信号经神经到脑，被感受为疼痛。反射性缩手经不经过脑的快速回路。"]],
      ["感受变化的原因", ["紧张不安、缺觉与过往经验改变疼痛感受。慢性疼痛神经敏感本身可能升高，需病因与感受两面应对。"]],
      ["疼痛的传达", ["整理部位、起始时间、性质（跳痛刺痛等）、0到10强度与缓解因素，有助诊断治疗选择。"]],
    ],
  ),
  "joints-basics": b(
    ["Joints combine bones, cartilage, ligaments, and fluids.", "Shapes decide movement directions.", "With continuing pain, review use and visit."],
    [
      ["Joint parts", ["Bone ends covered with cartilage, fluids easing sliding inside capsules, and ligaments preventing excess looseness. Muscles with tendons create movements."]],
      ["Movement types", ["Shoulders and hips move multi-directionally as ball joints; elbows and knees center on one direction as hinge joints. Forced or sudden loads against structures cause injuries."]],
      ["Protecting joints", ["Keep surrounding muscles through moderate exercise, manage weight, and mind postures. With swelling, limited ranges, or continuing pain, consult orthopedics."]],
    ],
    ["关节是骨软骨韧带滑液的组合。", "运动方向由关节形状决定。", "疼痛持续时重审用法并受诊。"],
    [
      ["关节部件", ["骨端覆软骨，关节囊内滑液助滑动，韧带防过松。肌肉肌腱产生动作。"]],
      ["运动种类", ["肩髋多方向动的球关节，肘膝以单方向为中心的铰链关节。不合结构的勉强动作与急负荷是受伤原因。"]],
      ["保护关节", ["适度运动保持周围肌肉，管理体重注意姿势。肿胀、活动受限与长期疼痛找骨科商量。"]],
    ],
  ),
  "fracture-healing": b(
    ["Fractures heal through blood, soft bone, and remodeling stages.", "Fixation with rest grounds healing.", "Rehabilitation advances stepwise by timing."],
    [
      ["Stages until healing", ["Broken sites first form blood clots, soft callus bridges, then hard bone replacement shaping up (remodeling). Periods differ by site and age."]],
      ["Roles of fixation", ["Casts and surgical hardware hold bone positions aiding repair. Self-judged removal and moving cause deformity and delayed healing."]],
      ["Recovery after healing", ["After bones connect, stiff joints with weakened muscles return through rehabilitation. Watching pain signals, raise stages following physician instructions."]],
    ],
    ["骨折经血肿、假骨与重塑阶段愈合。", "固定安静是愈合基础。", "康复看时机阶段性推进。"],
    [
      ["愈合阶段", ["断处先形成血块，软假骨架桥，经年换成硬骨整形（重塑）。期限因部位年龄而异。"]],
      ["固定的作用", ["石膏与手术内固定保持骨位置帮助修复。自行拆除活动通向变形与愈合延迟。"]],
      ["愈合后的恢复", ["骨连后僵硬关节与下降肌力靠康复恢复。看疼痛信号阶段性提高，遵医嘱。"]],
    ],
  ),
  "anemia-basics": b(
    ["Anemia means lacking blood oxygen-carrying power.", "Iron shortage is not the only cause.", "Gradual anemia can hide awareness."],
    [
      ["What happens in anemia", ["Fewer red cells and hemoglobin stall whole-body oxygen supply, causing fatigue, palpitations, breathlessness, and poor color."]],
      ["Main causes", ["Beyond iron shortage: bleeding (periods, digestive tracts), vitamin shortage, chronic diseases, and marrow working declines. Responses differ by cause, so never rely only on self-judged iron."]],
      ["Checks and visits", ["Checkup blood tests often find it, with course comparisons serving. With symptoms or flagged values, examine causes at internal medicine and others."]],
    ],
    ["贫血是血液运氧力不足。", "缺铁不是唯一原因。", "渐进贫血难察觉。"],
    [
      ["贫血发生什么", ["红细胞血红蛋白减少，全身供氧停滞，致易乏力、心悸、气促与面色差。"]],
      ["主要原因", ["缺铁外，出血（月经消化道等）、维生素不足、慢性病与骨髓功能下降等。应对因原因而异，不要只靠自行补铁。"]],
      ["确认与受诊", ["多经体检血液检查发现，经过比较有用。有症状或数值异常找内科等查原因。"]],
    ],
  ),
  "blood-pressure-basics": b(
    ["Upper values mark heart contraction; lower mark expansion.", "Measuring conditions change values.", "Home records serve diagnosis."],
    [
      ["Meanings of two numbers", ["Upper (systolic) pressure pushes blood from contracting hearts; lower (diastolic) marks vessel pressure with expanding hearts. Either side alone high needs attention."]],
      ["Measuring correctly", ["After resting minutes in quiet settings, measure at same times with same arms. Post-exercise, post-meal, and post-caffeine values run high. Institution tension raises values (white-coat hypertension) too."]],
      ["Using records", ["Two weeks of morning and evening measurements reveal trends. Bringing records serves treatment needs and medicine adjustment judgments. Target values differ by age and conditions, so confirm goals with physicians."]],
    ],
    ["上压是心脏收缩时，下压是扩张时。", "测量条件改变数值。", "家庭记录有助于诊断。"],
    [
      ["两数值的含义", ["上压（收缩期）是心脏送血时，下压（舒张期）是心脏扩张时血管压力。单侧高也要注意。"]],
      ["正确测量", ["安静环境休息数分钟后，同时间同手臂测量。运动后餐后咖啡因后偏高。医疗机构紧张升高（白大衣高血压）也有。"]],
      ["记录的利用", ["两周早晚测量看出趋势。带记录有助于治疗必要与药物调整判断。目标值因年龄基础病而异，与医生定目标。"]],
    ],
  ),
  "cholesterol-basics": b(
    ["Cholesterol itself is a necessary body component.", "Carrying differences are called good and bad.", "Meals, exercise, and medicines combine in management."],
    [
      ["Needed workings", ["It materials cell membranes and hormones. Balances matter; excesses settling on vessel walls link to arteriosclerosis."]],
      ["LDL and HDL differences", ["LDL carries cholesterol to tissues, settling causes with excesses. HDL works toward collecting extras. Tests view both with triglycerides together."]],
      ["Managing methods", ["Meal reviews, exercise, and no smoking ground care, with medicines by risks. Number goals differ by age and conditions, so fix them with physicians."]],
    ],
    ["胆固醇本身是身体必需成分。", "运送方式差异称好坏。", "饮食运动药物组合管理。"],
    [
      ["必要作用", ["是细胞膜与激素的材料。问题是量平衡，过多沉积血管壁通向动脉硬化。"]],
      ["LDL与HDL的区别", ["LDL把胆固醇运到组织，过多是沉积原因。HDL向回收多余方向工作。检验结合两者与甘油三酯一起看。"]],
      ["管理方法", ["饮食调整、运动与禁烟是基础，按风险用药。数值目标因年龄基础病而异，与医生定。"]],
    ],
  ),
  "heatstroke-dehydration": b(
    ["Replenishing before thirst is basic.", "Dizziness with nausea are danger signals.", "With consciousness changes, think emergency at once."],
    [
      ["Preventive devices", ["Mind hats, parasols, frequent breaks with water and salt replenishment on outings. Check indoor temperatures with humidity; older adults and children need special care."]],
      ["Telling symptoms apart", ["Dizziness, heavy sweating, nausea, and muscle cramps are early signs. Move somewhere cool, loosen clothes, cool bodies, and take water."]],
      ["Emergency cases", ["With unclear consciousness, inability to take water by oneself, and staying hot bodies, call ambulances. Share conditions with medicines for those under treatment."]],
    ],
    ["口渴前补充是基本。", "头晕恶心是危险信号。", "意识变化马上考虑急救。"],
    [
      ["预防巧思", ["外出留心帽子阳伞、勤休息与水分盐分补充。确认室内温湿度，老人儿童格外注意。"]],
      ["症状辨别", ["头晕大汗、恶心与肌肉痉挛是早期信号。移到阴凉处，松衣降温喝水。"]],
      ["考虑急救时", ["意识不清、无法自行喝水与身体持续发烫叫救护车。治疗中者告知基础病用药。"]],
    ],
  ),
  "cell-banks-guide": b(
    ["Public banks aim at third-party provision.", "Private storage is paid family keeping.", "Future usability is never guaranteed."],
    [
      ["What public banks are", ["Public cord blood and marrow banks test and store freely provided cells, distributing to matching patients. Mechanisms for society-wide mutual aid."]],
      ["Differences from private storage", ["Private cord blood and dental pulp storage keep for families for fees. Calmly view usability, costs, storage periods, and operator continuity."]],
      ["Viewpoints when choosing", ["With decision deadlines like before childbirth, gather materials discussing with family. Even when rushed by pitches, never decide on the spot."]],
    ],
    ["公共库以第三方提供为目的。", "民间保存是为家庭的有偿保管。", "未来可用性不保证。"],
    [
      ["公共库是什么", ["脐带血骨髓公共库检验保存无偿提供的细胞，分配给相合患者。全社会互助的机制。"]],
      ["与民间保存的区别", ["民间脐带血牙髓保存为家庭付费保管。冷静看可用性、费用、保管期限与事业者持续性。"]],
      ["选择时的视角", ["分娩前等有决定期限时，取资料家人商量。即使被劝诱催促，不当场决定重要。"]],
    ],
  ),
  "culture-media": b(
    ["Balanced liquids of nutrition, salts, and pH.", "Serum presence changes properties.", "Exchange frequency with records is also quality."],
    [
      ["Media contents", ["Beyond sugars, amino acids, vitamins, and salts, growth factors with antibiotics sometimes join. Compositions fitting target cells are chosen."]],
      ["Handling serum", ["Animal-derived components like fetal bovine serum nourish richly but need variation with infection risk management. Switching to serum-free media also advances."]],
      ["Management viewpoints", ["Exchange timing, expiry dates, storage temperatures, and lot number records support quality. In treatment explanations, ask what they grow with and check."]],
    ],
    ["营养盐分pH调平的液体。", "血清有无改变性质。", "更换频率与记录也是质量。"],
    [
      ["培养液成分", ["除糖氨基酸维生素盐类，有时含生长因子与抗生素。选适合对象细胞的组成。"]],
      ["血清的处理", ["牛胎血清等动物来源成分营养丰富，但需波动与感染风险管理。向无血清培养基切换也在推进。"]],
      ["管理视角", ["更换时机、有效期、保存温度与批号记录支撑质量。治疗说明中问“用什么培养、确认什么”。"]],
    ],
  ),
  "cell-sorting": b(
    ["Surface markers distinguish cells.", "Sorting accuracy relates to treatment quality.", "Post-sorting checks join processes."],
    [
      ["Using markers", ["Glowing labels on surface proteins (markers) distinguish target cells. Single markers never suffice, narrowing with multiple combinations."]],
      ["What cell sorters are", ["Devices reading cells one by one with light in liquid flows, distributing electrically. Used differently from magnetic bead collection."]],
      ["Purity confirmation", ["Post-sorting purity with viability measurements serve shipment and administration judgments. Confirming never-to-mix remainders like undifferentiated cells matters."]],
    ],
    ["表面标志区分细胞。", "分选精度关系治疗质量。", "分选后确认也属工程。"],
    [
      ["标志物的使用", ["给表面蛋白（标志物）贴发光标签区分目标细胞。单一标志不够，用多重组合缩小。"]],
      ["分选仪是什么", ["液流中逐个光读细胞、电分配的装置。与磁珠收集分工使用。"]],
      ["纯度确认", ["分选后纯度与存活率测定是出货给药的判断材料。确认未分化细胞残留等不应混入之物重要。"]],
    ],
  ),
  "placenta-cells": b(
    ["Small collection burden advantages.", "Workings relating to immune adjustment are studied.", "Consent with testing systems are premises for use."],
    [
      ["Source tissue features", ["Placentas, amnions, and cord tissues hold diverse cells, collectable with small mother-child burden. Attention as effective use of discarded tissues."]],
      ["Research directions", ["Inflammation adjustment with tissue repair links are studied, with applications to wounds and inflammatory diseases considered. Provision as treatment is underway in verification."]],
      ["Provision and consent", ["Use needs pre-birth explanation with consent plus infection and other testing. For private storage, calmly view costs with future usability."]],
    ],
    ["采集负担小是优点。", "免疫调节相关作用在研究。", "利用以同意检验体制为前提。"],
    [
      ["来源组织特点", ["胎盘羊膜脐带组织含多样细胞，母子负担小可采集。作为废弃组织有效利用受关注。"]],
      ["研究方向", ["炎症调节与组织修复关系在研究，考虑伤口与炎症性疾病应用。作为治疗的提供在验证途中。"]],
      ["提供与同意", ["利用需分娩前说明同意与感染等检验。民间保存冷静看费用与未来可用性。"]],
    ],
  ),
  "pancreas-progenitor": b(
    ["Supplementing beta cells is one goal.", "Immunity with long stability are challenges.", "Far from replacing standard care."],
    [
      ["What is aimed at", ["In type 1 diabetes and others, insulin-producing beta cells are lost. Studies making beta-like cells from ES and iPS cells to supplement advance."]],
      ["Rejection with stabilizing devices", ["Immunosuppressant use, encapsulating methods, and less-rejected modifications are considered to guard transplanted cells. Verifying blood sugar stability with complication effects is needed."]],
      ["Relations with current care", ["Insulin therapy with device advances support daily management. Receive cell therapy topics together with targets, stages, and risks."]],
    ],
    ["补充β细胞是目标之一。", "免疫与长期稳定性是课题。", "远未到替代标准治疗阶段。"],
    [
      ["目标", ["1型糖尿病等失去产胰岛素β细胞。从ESiPS制作β样细胞补充的研究在推进。"]],
      ["排斥与稳定化巧思", ["考虑免疫抑制药使用、包裹法与不易排斥改造来守护移植细胞。需验证血糖稳定与并发症效果。"]],
      ["与现有治疗的关系", ["胰岛素疗法与器械进步支撑日常管理。细胞治疗话题结合对象阶段风险接受。"]],
    ],
  ),
  "kidney-progenitor": b(
    ["Complex structures make kidneys hard to renew.", "Dialysis with transplantation center established care.", "Slowing progression matters first."],
    [
      ["Why it is hard", ["Kidneys gather supposedly a million nephrons, needing precise filtration with reabsorption coordination. This complexity is considered a major renewal wall."]],
      ["Research directions", ["Progenitors with organoid uses plus recovery promotion from acute injuries are studied. Improving chronic fibrotic advances is an especially hard challenge."]],
      ["What can be done now", ["Blood pressure with blood sugar management, salt reduction, medicine adjustment, and regular tests slowing progression center care. Consult specialists early about dialysis with transplant options."]],
    ],
    ["复杂结构使肾脏难再生。", "透析移植是成熟治疗中心。", "延缓进展首先重要。"],
    [
      ["困难原因", ["肾脏聚集据说百万肾单位，需精密过滤与重吸收协作。该复杂被视为巨大再生之壁。"]],
      ["研究方向", ["祖细胞与类器官利用、急性损伤恢复促进在研究。慢性纤维化改善是格外难的课题。"]],
      ["现在能做的", ["血压血糖管理、减盐、药物调整与定期检查延缓进展是中心。透析移植选项早与专科医生商量。"]],
    ],
  ),
  "lung-regeneration": b(
    ["Reproducing thin walls with vessel nets are challenges.", "Studies advance for interstitial pneumonia and other targets.", "No smoking with early visits matter first."],
    [
      ["Difficulty of structures", ["Simultaneously reproducing thin alveolar walls, capillary nets, and air passage 3D structures is needed. Settling amid breathing movements also challenges."]],
      ["Research status", ["Inflammation-adjusting uses of mesenchymal and other cells plus alveolar repair-seeking studies advance. Clinical application needs safety with function verification."]],
      ["Daily preparation", ["No smoking, dust measures, vaccines, with early visits and continuing treatment guard lungs. With continuing breathlessness, consult respiratory departments."]],
    ],
    ["薄壁与血管网再现是课题。", "以间质性肺炎等为对象研究在推进。", "禁烟早期受诊首先重要。"],
    [
      ["结构难处", ["需同时再现肺泡薄壁、毛细血管网与气道立体结构。呼吸动作中的定植也是课题。"]],
      ["研究现状", ["间充质等细胞的炎症调节用途与肺泡修复研究在推进。临床应用需安全性功能验证。"]],
      ["日常准备", ["禁烟、防尘、疫苗与早期受诊持续治疗守护肺。气促持续找呼吸科商量。"]],
    ],
  ),
  "disc-regeneration": b(
    ["Discs poorly self-repair with scarce blood.", "Images and pain do not always match.", "Conservative care with exercise is basic."],
    [
      ["What discs are", ["Cushion tissues between spinal bones, with central nuclei and surrounding rings. Aging with loads reduces water, advancing degeneration."]],
      ["Links with pain", ["Degeneration on images sometimes comes without pain, and vice versa. Pain causes vary across muscles, joints, and nerves, needing comprehensive evaluation."]],
      ["Regeneration studies", ["Studies using cells, growth factors, and scaffolds to repair nuclei exist. Strength with long results needs verification; conservative care, exercise, and posture reviews come first."]],
    ],
    ["椎间盘血流匮乏难自愈。", "影像与疼痛未必一致。", "保存疗法与运动是基本。"],
    [
      ["椎间盘是什么", ["脊柱骨间的缓冲组织，由中央髓核与周围纤维环构成。老龄负荷减少水分，推进变性。"]],
      ["与疼痛的关系", ["影像有变性也有无痛时，反之亦然。疼痛原因多样涉肌肉关节神经，需综合评价。"]],
      ["再生研究", ["有用细胞生长因子支架修复髓核的研究。需强度与长期成绩验证，先保存疗法运动与姿势调整。"]],
    ],
  ),
  "vessel-regeneration": b(
    ["Studies make new vessel networks.", "Severe ischemia is targeted.", "Walking with no smoking parallels."],
    [
      ["Thinking", ["Direction research uses vessel-making cells and growth factors to prompt detour-like vessel nets in poor-flow sites. Severe ischemia like foot ulcers with resting pain is targeted."]],
      ["Verification status", ["Walking distances, ulcer healing, and amputation avoidance are verified as indicators. Individual differences in effects with long persistence are challenges."]],
      ["Basic measures", ["No smoking, walking training, blood sugar with lipid management, and foot care ground treatment. Receive new treatment topics together with targets and stages."]],
    ],
    ["研究制作新血管网。", "重症缺血是对象。", "步行禁烟并行。"],
    [
      ["思路", ["用造血管细胞与生长因子，在血流匮乏部位促旁路样血管网方向的研究。足溃疡静息痛等重症缺血是对象。"]],
      ["验证状况", ["以步行距离、溃疡愈合与截肢回避为指标验证。效果个体差与长期持续是课题。"]],
      ["基本对策", ["禁烟、步行训练、血糖血脂管理与足护理是基础。新治疗话题结合对象阶段接受。"]],
    ],
  ),
  "bioprinting": b(
    ["Cell inks layer into 3D shapes.", "Drug discovery with study uses lead.", "Organ printing for transplant is a future challenge."],
    [
      ["Mechanisms", ["Bioinks with cells and scaffold materials layer by blueprints into 3D tissues. Relatively simple structures like skin and cartilage lead efforts."]],
      ["Current uses", ["Drug toxicity evaluation, disease recreation models, and surgical practice models serve. Vessel nets with multi-tissue combinations are next walls."]],
      ["Distances to transplant", ["Printing organs themselves with transplanting needs long function with safety verification. When viewing topics, confirm target structures with stages."]],
    ],
    ["细胞墨水分层成立体。", "制药与研究用途领先。", "移植用器官打印是未来课题。"],
    [
      ["机制", ["含细胞支架材料的生物墨水按设计图堆叠成立体组织。皮肤软骨等较单纯结构领先。"]],
      ["目前用途", ["用于药物毒性评价、疾病再现模型与手术练习模型。血管网与多组织组合是下道墙。"]],
      ["到移植的距离", ["打印器官本身与移植需长期功能安全性验证。看话题时确认对象结构与阶段。"]],
    ],
  ),
  "organ-transplant-basics": b(
    ["Donation wishes start everything.", "Allocation proceeds fairly by medical criteria.", "Immunosuppression with follow-up continues."],
    [
      ["Donation wishes", ["Insurance cards with license columns plus donor registries can show wishes. Family consent is also needed; everyday discussion matters."]],
      ["Allocation mechanisms", ["Matching, severity, and waiting periods fairly distribute through networks. Buying and selling places is banned by law."]],
      ["Life after transplant", ["Continuing rejection-suppressing medicines, infection prevention, and regular tests follow. Support systems for both donors and recipients are in place."]],
    ],
    ["捐献意愿是一切起点。", "按医学标准公平分配。", "免疫抑制与随访继续。"],
    [
      ["捐献意愿", ["保险证驾照栏与捐献登记可表示意愿。也需家人同意，日常商量重要。"]],
      ["分配机制", ["按相合性、重症度与等待期经网络公平分配。买卖顺位法律禁止。"]],
      ["移植后生活", ["继续抑制排斥的药、感染预防与定期检查。备有供受双方支援体制。"]],
    ],
  ),
  "ips-donation": b(
    ["Provided blood makes iPS cells.", "Consent can basically be withdrawn anytime.", "Provision never means direct treatment."],
    [
      ["Provision flow", ["After explained consent with signatures, blood is drawn. Through infection and other testing, research and stock iPS cells are made, evaluated, and stored."]],
      ["Consent with personal data", ["Confirm purpose, personal data handling, result publication, and withdrawal methods in explanatory documents. Ask until satisfied about anything unclear."]],
      ["Meanings of cooperation", ["Provision may link to future patients' treatments and research. But it never means direct benefits or priority treatment for donors themselves."]],
    ],
    ["提供的血液制成iPS。", "同意原则随时可撤回。", "提供不意味直接治疗。"],
    [
      ["提供流程", ["说明同意签署后采血。经感染等检验，研究与储备iPS被制作评价保存。"]],
      ["同意与个人信息", ["在说明文件中确认目的、个人信息处理、成果发表与撤回方法。不懂问到明白。"]],
      ["协作的含义", ["提供可能连到未来患者的治疗研究。但不意味提供者本人的直接收益与优先治疗。"]],
    ],
  ),
  "advance-directives": b(
    ["Organize thoughts while well.", "Share with family and clinicians.", "Review regularly."],
    [
      ["What advance directives are", ["Documents writing hopes on life-prolonging treatment and care places for times of declined capacity. Also called living wills. Legal effect handling differs by country and municipality, so confirm positioning."]],
      ["Example contents", ["Concretely write wanted and unwanted treatments, valued living, entrusted persons, and contacts. Avoid vague wording; adding reasons communicates better."]],
      ["Sharing with reviewing", ["Share contents with family and family doctors, storing with medical information. Thoughts change, so review yearly and with condition changes."]],
    ],
    ["健康时整理想法。", "与家人医疗人员分享。", "定期重审。"],
    [
      ["预先指示是什么", ["为判断能力下降时，把临终医疗与疗养场所等希望写成文章。也称生前预嘱。法律效力处理因国与自治体而异，确认定位。"]],
      ["书写内容示例", ["具体写希望与不希望的治疗、珍视的生活、托付对象与联系人。避免模糊表述，附理由更易传达。"]],
      ["分享与重审", ["与家人家庭医生分享内容，与诊疗信息一起保管。想法会变，每年与身体变化时重审。"]],
    ],
  ),
  "patient-rights": b(
    ["Rights to be explained and decide with understanding exist.", "Medical record disclosure can be requested.", "Help desks exist for disagreements."],
    [
      ["Basic rights", ["Being explained conditions and treatments, consenting and refusing with understanding, kept privacy, and never discriminated against are basic. Confirmable in institution postings and guides."]],
      ["Record and information rights", ["Disclosure requests for medical records and information provision for second opinions can be sought. Ask how to receive referrals with image data too."]],
      ["When troubled", ["When explanations feel insufficient, first tell doctors and nurses in charge. When unresolved, help desks like medical safety support centers serve."]],
    ],
    ["有获说明理解后决定的权利。", "可要求公开病历。", "意见不合有咨询方。"],
    [
      ["基本权利", ["获病情治疗说明、理解后同意拒绝、隐私受护与不受歧视是基本。可在机构揭示指南确认。"]],
      ["记录与信息权利", ["可要求病历公开申请与为第二意见的信息提供。也问转诊信与影像数据的拿法。"]],
      ["困扰时", ["感觉说明不足先告诉负责医生护士。未解决可利用医疗安全支援中心等咨询窗口。"]],
    ],
  ),
  "generic-drugs": b(
    ["Active ingredients match brand drugs.", "Lower prices advantage.", "Watch condition changes after switching."],
    [
      ["What follow-on products are", ["Drugs with same active ingredients made after patents expire. Approved through national quality checks. Additives and shapes may differ."]],
      ["Proceeding to switch", ["Tell physicians and pharmacists hopes, confirming target drugs exist. Watch effect and side-effect changes after switching, consulting early with concerns."]],
      ["Checkpoints", ["Not every drug holds follow-ons, changing with supply states. Avoid self-judged stopping and changing; manage prescriptions with medicine notebooks."]],
    ],
    ["有效成分与原研药相同。", "价格更低是优点。", "切换后观察身体变化。"],
    [
      ["后续药品是什么", ["专利过期后制造的同有效成分药。经国家质量确认批准。添加物形状可能不同。"]],
      ["切换的推进", ["告诉医生药剂师希望，确认有无对象药。切换后注意效果副作用变化，有担心早商量。"]],
      ["确认点", ["并非所有药有后续品，随供应状况改变。避免自行中止变更，用药手册管理处方。"]],
    ],
  ),
  "insurance-card-guide": b(
    ["Visits need eligibility checks.", "My Number insurance works with face authentication and others.", "Information provision consent is selectable."],
    [
      ["Checks at visits", ["Institutions check insurance eligibility. Job changes, moves, and dependent changes alter eligibility, so proceed early with changes."]],
      ["Using My Number insurance", ["Hold My Number cards over readers, verifying through face authentication or PINs. Consenting to past prescription with checkup information provision serves care."]],
      ["When troubled", ["With forgotten or unreadable cards, consult desks. Alternative means like eligibility certificates exist."]],
    ],
    ["就诊需资格确认。", "个人编号医保用人脸认证等。", "信息提供同意可选。"],
    [
      ["就诊时的确认", ["机构确认保险资格。换工作搬家与扶养变更改变资格，变更时早办手续。"]],
      ["个人编号医保的使用", ["个人编号卡贴读卡器，用人脸认证或密码确认身份。同意过往处方体检信息提供有助于诊疗。"]],
      ["困扰时", ["忘带或读不出找窗口商量。有资格确认书等替代手段。"]],
    ],
  ),
  "nursing-care-certification": b(
    ["Applications start at municipal desks.", "Investigations with reviews fix care levels.", "Make plans with care managers."],
    [
      ["Application steps", ["When persons and families apply at municipalities, hearings by investigators with physician opinions lead to reviews. Results take about a month."]],
      ["Meanings of care levels", ["Support levels 1–2 with care levels 1–5 change usable service amounts and types. With state changes, level-change applications serve."]],
      ["Making care plans", ["Discuss hopes with troubles with care managers, making plans combining home help and day services. Freely share misfits."]],
    ],
    ["申请从市区町村窗口开始。", "调查审查定要介护度。", "与照护经理做计划。"],
    [
      ["申请手续", ["本人家人向市区町村申请，调查员听取与主治医生意见书进入审查。结果约需一月。"]],
      ["要介护度的含义", ["要支援12、要介护15档改变可用服务量种类。状态变化可申请变更档次。"]],
      ["照护计划制作", ["与照护经理商量希望困难，制作组合访问照护日托等的计划。不合之处尽管说。"]],
    ],
  ),
  "driving-illness": b(
    ["Medicines and diseases can affect driving.", "Fixed diseases face notifications with aptitude tests.", "Consider alternative transport together."],
    [
      ["Effects on driving", ["Drowsy medicines, consciousness-affecting diseases, and sight with movement declines link to accidents. Check medicine sheet cautions, consulting physicians with anxieties."]],
      ["License systems", ["Fixed diseases like epilepsy and dementia face public safety commission notifications with aptitude tests. Physician certificates are sometimes sought."]],
      ["Life devices", ["When holding off driving, combine family rides, public transport, and welfare transport support. Consider continuing visits with safety together."]],
    ],
    ["药物疾病影响驾驶。", "特定疾病要申报与适性检查。", "一起考虑替代出行。"],
    [
      ["对驾驶的影响", ["致困药物、影响意识的疾病与视野运动功能下降通向事故。确认药品说明注意，不安找医生商量。"]],
      ["驾照制度", ["癫痫认知症等特定疾病是公安委员会申报与适性检查对象。有时求主治医生诊断书。"]],
      ["生活巧思", ["暂停驾驶时组合家人接送、公共交通与福利出行支援。兼顾就诊持续与安全。"]],
    ],
  ),
  "work-injury-insurance": b(
    ["Work-caused cases fall under workers' compensation.", "Other illness absences center on sickness benefits.", "Early consultation with document preparation matters."],
    [
      ["What workers' compensation is", ["Work and commuting injuries and diseases qualify, receiving treatment costs with absence compensation. Claims go to labor standards offices through employers."]],
      ["What sickness benefits are", ["For non-work diseases and injuries preventing work, enrolled health insurance pays. Consecutive absence day counts with other conditions apply, needing physician proof."]],
      ["Proceeding with steps", ["Consult workplace officers, labor and social security attorneys, and enrolled insurers early. Gather certificates with attendance records, confirming deadlines."]],
    ],
    ["工作原因属工伤保险对象。", "其他病假以伤病津贴为中心。", "早商量与文件准备重要。"],
    [
      ["工伤保险是什么", ["业务中与通勤伤病是对象，给付治疗费与休业补偿。经事业主向劳动基准监督署申请。"]],
      ["伤病津贴是什么", ["业务外疾病伤病无法工作时，加入的健康保险给付。有连续休业天数等条件，需医生证明。"]],
      ["手续推进", ["早咨询职场负责、社劳士与加入保险方。备齐诊断书考勤等，确认期限。"]],
    ],
  ),
  "medical-accident-system": b(
    ["Target cases are reported to third-party bodies.", "Family explanations with in-hospital investigations happen.", "Help desks serve."],
    [
      ["System overview", ["With medical-caused unexpected deaths and others, institutions report to investigation and support centers, conducting in-hospital investigations. Mechanisms aiming at recurrence prevention."]],
      ["Responses to families", ["Explanations to families happen around investigations. Share questions with anxieties at institution desks with support centers."]],
      ["Help desks", ["Medical safety support centers receive medical complaints with consultations. Facing them with organized course records with materials."]],
    ],
    ["对象事例报告第三方机构。", "向遗属说明与院内调查。", "可利用咨询窗口。"],
    [
      ["制度概要", ["医疗相关意外死亡等发生时，机构向医疗事故调查支援中心报告并院内调查。以防再发为目的的机制。"]],
      ["对遗属的应对", ["调查前后向遗属说明。疑问不安告诉机构窗口与咨询支援中心。"]],
      ["咨询方", ["医疗安全支援中心受理医疗投诉咨询。整理经过记录与资料面对。"]],
    ],
  ),
  "drug-allergy-record": b(
    ["Record emerging symptoms concretely.", "Note allergies in medicine notebooks.", "Declare over-the-counter drugs with supplements too."],
    [
      ["Recorded contents", ["Memo drug names, starting times, emerging symptoms with times, and responses. Photos with leftover medicines communicate better."]],
      ["Sharing with clinicians", ["Show records at visits and pharmacies, telling allergy histories every time. Carrying medicine notebooks habitually also serves emergencies."]],
      ["Living with over-the-counter drugs", ["Over-the-counter drugs with supplements also cause interactions. Declare everything in use, avoiding self-judged combining."]],
    ],
    ["具体记录出现的症状。", "在用药手册记载过敏。", "非处方药保健品也申报。"],
    [
      ["记录内容", ["备忘药名、开始服用时期、出现症状与时期、如何应对。有照片余药更易传达。"]],
      ["与医疗人员分享", ["就诊药房出示记录，每次告知过敏史。习惯携带用药手册也有助急救。"]],
      ["与非处方药的相处", ["非处方药保健品也是相互作用原因。使用中全部申报，避免自行并用。"]],
    ],
  ),
  "vaccination-adult": b(
    ["Routine with voluntary vaccinations exist.", "Conditions with medicines change cautions.", "Keep records receiving as planned."],
    [
      ["Main types", ["Influenza, newer corona, older adult pneumococcus, and others set targets with timing. Confirm targets with costs in municipal guides."]],
      ["Pre-vaccination checks", ["Accurately fill conditions, conditions, medicines, allergy histories, and pregnancy possibilities on questionnaires. Those under treatment consult physicians on timing."]],
      ["Post-vaccination cautions", ["Avoid intense exercise with drinking on shot days, knowing side-reaction signs. With concerning symptoms, contact vaccinating institutions and family doctors."]],
    ],
    ["有定期与自愿接种。", "基础病用药改变注意。", "留记录计划接种。"],
    [
      ["主要种类", ["流感新冠、高龄肺炎球菌等规定对象时期。用自治指南确认对象费用。"]],
      ["接种前确认", ["在问诊表准确填写身体状况、基础病、用药、过敏史与妊娠可能。治疗中者向主治医生商量时期。"]],
      ["接种后注意", ["当天避免剧烈运动饮酒，知道副反应信号。有担心症状联系接种机构与家庭医生。"]],
    ],
  ),
  "dental-visit-guide": b(
    ["Tests with explanations precede treatment.", "Confirm plans with costs.", "Regular checkups link to prevention."],
    [
      ["First-visit flow", ["After questionnaires with X-ray and other tests, diagnoses with treatment plan explanations follow. Prepare pain places, courses, and medicine notebooks."]],
      ["Plan with cost confirmation", ["Confirm insured with self-pay options, counts, periods, and totals. Ask on the spot about anything unclear, proceeding after understanding."]],
      ["Prevention after treatment", ["After treatment ends, maintain with regular checkups and cleaning. With conditions and medicines, confirm medical-dental coordination too."]],
    ],
    ["检查说明在治疗前。", "确认计划与费用。", "定期检查连接预防。"],
    [
      ["初诊流程", ["问诊与X光等检查后，诊断与治疗方针说明。准备疼痛部位经过与用药手册。"]],
      ["计划与费用确认", ["确认保险自费选项、次数期限总额。不懂当场问，明白再推进。"]],
      ["治疗后的预防", ["治疗结束定期检查清洁维持。有基础病用药者，也确认医科协作。"]],
    ],
  ),
  "assistive-devices": b(
    ["Made based on physician prescriptions.", "Confirm benefit system targets.", "Adjusting with practice keys mastery."],
    [
      ["Main types", ["Prosthetic hands and legs, orthotics (corsets, insoles), wheelchairs, hearing aids, and others exist. Selected by purposes with body states."]],
      ["Making flow", ["Based on physician prescriptions, specialist dealers mold, make, and complete through fitting with adjusting. Confirm benefit targets with copayments at municipalities and insurers."]],
      ["For mastering use", ["Practice with rehabilitation staff, seeking early adjusting for pain and troubles. Consider remaking with growth and shape changes."]],
    ],
    ["按医生处方制作。", "确认给付制度对象。", "调整练习是掌握关键。"],
    [
      ["主要种类", ["有假手假腿、装具（束腰鞋垫等）、轮椅与助听器等。按目的身体状态选定。"]],
      ["制作流程", ["按医生处方专业业者取模制作，经试配调整完成。给付制度对象自付向自治体保险方确认。"]],
      ["为熟练使用", ["与康复职练习，疼痛故障早调整。考虑随成长体形变化重做。"]],
    ],
  ),
  "home-safety-elderly": b(
    ["Most falls happen inside homes.", "Step, slip, and darkness measures are basic.", "Care insurance home fixes also serve."],
    [
      ["Dangerous places", ["Sills, cords, slippery baths, and dark halls with stairs are representative. Intensively review nighttime toilet routes."]],
      ["Devices with tools", ["Handrail setting, anti-slip, brightness securing, and footwear reviews work. Borrowed and purchased welfare tools can be consulted with care managers."]],
      ["Body preparation", ["Lower limb strength, balance keeping, sight with medicine reviews also link to fall prevention. Fix contact means after falling too."]],
    ],
    ["跌倒多发生在家里。", "台阶湿滑昏暗对策是基本。", "照护保险住宅改造也可用。"],
    [
      ["危险场所", ["门槛电线、湿滑浴室与昏暗走廊楼梯是代表。重点检查夜间如厕动线。"]],
      ["巧思与用具", ["扶手设置、防滑、确保亮度与鞋子调整有效。福利用具租购可咨询照护经理。"]],
      ["身体准备", ["下肢肌力平衡维持、视力药物调整也连到防跌倒。定好跌倒后联系手段。"]],
    ],
  ),
  "predatory-journals": b(
    ["Journals with merely formal reviews exist.", "Fee requests mark one sign.", "Checking journals is the first step of paper evaluation."],
    [
      ["What predatory journals are", ["A nickname for magazines gathering papers for publication fee income without sufficient review. Solicitation mails resembling real society journals sometimes arrive."]],
      ["Guideline signs", ["Guaranteed quick publication, low realness of editors, scarce past paper citations, and unremembered solicitations mark guidelines. Never judge by conclusions alone; check journals."]],
      ["Checking methods", ["Refer to major paper database inclusion with institution library guides. Beware explanations basing on suspicious papers."]],
    ],
    ["有审查流于形式的杂志。", "费用请求是标志之一。", "确认杂志是论文评价第一步。"],
    [
      ["掠夺性期刊是什么", ["不充分审查、以刊登费收入为目的集稿的杂志俗称。有时收到貌似真正学会志的邀稿邮件。"]],
      ["辨别标准", ["短期刊登保证、编委真实性低、过往论文引用少与无印象邀稿等是标准。不只看结论，确认杂志。"]],
      ["确认方法", ["参考主要论文数据库收录与所属机构图书馆指南。注意以可疑论文为据的说明。"]],
    ],
  ),
  "retractions": b(
    ["Retractions respond to errors and misconduct.", "Public reasons guide trust.", "Watch citations of retracted papers."],
    [
      ["Meanings of retraction", ["When data errors, inappropriate image handling, and review problems emerge, journals withdraw papers. One of science's self-cleaning workings."]],
      ["Reading reasons", ["Retraction notices note reasons. Honest errors differ from misconduct in meaning. Retractions without public reasons reserve evaluation."]],
      ["Readers' cautions", ["Explanations basing on retracted papers confirm later verification. Look at retraction databases with paper page displays."]],
    ],
    ["撤稿是对错误不端的应对。", "原因公开是信任标准。", "注意被撤论文的引用。"],
    [
      ["撤稿的含义", ["数据错误、图像不当处理与审查问题明确时，期刊撤下论文。科学自净作用之一。"]],
      ["原因的读法", ["撤稿通知记载原因。诚实错误与不端含义不同。无原因公开的撤稿保留评价。"]],
      ["读者的注意", ["以被撤论文为据的说明确认后续验证。看撤稿数据库与论文页显示。"]],
    ],
  ),
  "open-access": b(
    ["Publication anyone can read free.", "Author-side payment forms also exist.", "Free never equals low quality."],
    [
      ["Mechanisms", ["Traditionally run on reader subscriptions, open access freely publishes through author payments with institution support. Separate stories from review presence."]],
      ["Thinking about fees", ["Regular journals sometimes charge publication fees. Judge amount reasonableness with field rates and institution support systems. High charges alone never mark poorness."]],
      ["Readers' advantages", ["Directly reaching original papers verifies coverage accuracy. Watch published versus final version differences (pre- and post-review)."]],
    ],
    ["人人免费可读的发表。", "也有作者方付费形态。", "免费不等于低质。"],
    [
      ["机制", ["传统靠读者订阅运营，开放获取经作者付费与机构支援免费公开。与有无评议是两回事。"]],
      ["费用的看法", ["正规期刊有时收刊登费。金额妥当结合领域行情与机构支援制度看。仅高额不是粗劣标志。"]],
      ["读者的好处", ["直达原文验证报道准确。注意公开版与最终版差异（评议前后）。"]],
    ],
  ),
  "impact-factor": b(
    ["Average citation likeliness of journals.", "Never shows individual paper quality.", "Levels differ by field."],
    [
      ["Meanings of metrics", ["Journal-unit metrics calculated from how often past papers were later cited. Higher numbers mean more watched journals."]],
      ["Limits", ["Citation habits differ by field, disabling cross-field comparison. Separate from individual paper citation counts; directly linking to researcher and treatment evaluation misuses."]],
      ["Watching ad wording", ["Never equate “top journal publication” with evidence strength. Judge with paper contents (targets, methods, results, limits)."]],
    ],
    ["杂志平均被引易度。", "不表示单篇论文质量。", "水平因领域而异。"],
    [
      ["指标含义", ["由过往刊登论文之后被引次数算出的杂志单位指标。数字越高越受关注。"]],
      ["局限", ["引用习惯因领域而异，不能跨领域比较。与单篇论文被引数是两回事，直接连到研究者治疗评价是误用。"]],
      ["广告表述的注意", ["不要把“顶刊刊登”等同依据强度。用论文内容（对象方法结果局限）判断。"]],
    ],
  ),
  "guideline-reading": b(
    ["Recommendation strength differs from evidence certainty.", "Confirm making methods with update dates.", "Consult physicians for individual judgments."],
    [
      ["Viewing recommendation grades", ["Strength stages like “recommend doing” and “suggest not doing” exist. Even with strong recommendations, fit changes with patient states."]],
      ["Evidence-level labels", ["Evidence certainty (high, medium, low) is jointly noted. Even with low certainty, recommendations sometimes follow when harms are small with hoped benefits."]],
      ["How to use", ["Guidelines guide standard policy directions, never individual instruction sheets. Consult primary physicians about fit to your state. With old issue years, seek latest versions."]],
    ],
    ["推荐强度与依据确实性不同。", "确认制作方法与更新日期。", "个别判断与医生商量。"],
    [
      ["推荐度的看法", ["有“推荐做”“建议不做”等强度阶段。即使强推荐，适合度随患者状态而变。"]],
      ["证据等级标注", ["并注依据确实性（高中低）。即使确实性低，害小有望收益时也有推荐。"]],
      ["使用方法", ["指南是标准方针的参考，不是个人指示书。是否适合自己与主治医生商量。发行年旧找最新版。"]],
    ],
  ),
  "package-insert": b(
    ["Efficacy, usage, and cautions summarized.", "Check side-effect frequency classes.", "Avoid self-judged increases and decreases."],
    [
      ["Label structures", ["Efficacy, usage and dosage, warnings and contraindications, side effects, and storage are fixedly noted. Read with patient explanatory documents together."]],
      ["Reading side effects", ["Serious with other side effects plus frequency classes show. Without fearing from listing alone, ask physicians and pharmacists about frequency with responses."]],
      ["Use cautions", ["Package inserts include detailed medical professional information. Ask pharmacists about unreadable points; never self-change usage."]],
    ],
    ["功效用法注意齐备。", "确认副作用频率区分。", "避免自行增减。"],
    [
      ["记载结构", ["功效、用法用量、警告禁忌、副作用与保管固定记载。结合患者说明资料一起读。"]],
      ["副作用的读法", ["显示重大与其他副作用、频率区分。不只因刊载害怕，向医生药剂师问频率与应对。"]],
      ["利用注意", ["说明书含面向医疗人员的详细信息。读不懂问药剂师，用法不自行变更重要。"]],
    ],
  ),
  "rwd-basics": b(
    ["Use everyday care records for research.", "Positioned to complement trials.", "Bias cautions are needed."],
    [
      ["What RWD is", ["A general term for data born from everyday care like electronic charts, receipts, and registry study records. Advantages including information on people never joining trials."]],
      ["Relations with trials", ["Against strictly conditioned trials, it captures real-clinical uses with long courses. Serves post-approval safety monitoring with indication reviews."]],
      ["Reading cautions", ["Record variation with treatment-choice biases mix into results. Read with comparison devices and limit notes together."]],
    ],
    ["把日常诊疗记录用于研究。", "定位为补充试验。", "需注意偏倚。"],
    [
      ["RWD是什么", ["电子病历、收据与登记研究记录等日常诊疗产生数据的总称。有含不参加试验者信息的优点。"]],
      ["与试验的关系", ["相对严格条件的试验，把握实际临床用法与长期经过。用于批准后安全性监测与适应重审。"]],
      ["阅读注意", ["记录波动与治疗选择偏倚混入结果。结合比较巧思与局限记载一起读。"]],
    ],
  ),
  "expanded-access": b(
    ["Paths for cases unfitting normal trials.", "Never guarantees effects.", "Consider with primary physicians."],
    [
      ["Thinking about systems", ["When no other treatments exist missing trial conditions, frameworks allow unapproved drug use from humanitarian viewpoints. Names with conditions differ by country."]],
      ["Differences from expanded trials", ["Expanded trials form part of tests eyeing approval applications, involving data collection. Individual uses mainly provide for patients' benefits, with limited verification as research."]],
      ["When considering", ["Confirm implementation examples for target diseases, risks with costs, post-treatment observation, and other options with primary physicians. Calmly view hopes with verification balances."]],
    ],
    ["不合常规试验时的路。", "不保证效果。", "与主治医生一起探讨。"],
    [
      ["制度思路", ["无其他治疗又不合试验条件时，出于人道允许未批准药物使用的框架。名称条件因国而异。"]],
      ["与扩大试验的区别", ["扩大试验是以批准申请为目标的试验一环，伴随数据收集。个别使用主要为患者利益提供，作为研究的验证有限。"]],
      ["考虑时", ["与主治医生确认对象疾病实施例、风险费用、治疗后观察与其他选项。冷静看期待与验证平衡。"]],
    ],
  ),
  "first-in-human": b(
    ["Safety confirmation centers earliest stages.", "Proceed carefully from tiny amounts.", "Distinguish from treatment purposes."],
    [
      ["Purposes", ["Stages first confirming safety with in-body movements in people, starting from small numbers. Effect verification belongs to later stages."]],
      ["Proceeding devices", ["Stepwise increases from micro amounts, sufficient observation periods, and emergency systems design safety-first. Participation conditions are strictly set."]],
      ["When considering joining", ["Treatment benefits are hard to hope for at these stages. Confirm purposes, burdens, risks, and withdrawal freedom in explanatory documents, taking time to think."]],
    ],
    ["安全性确认是最初期中心。", "从微量慎重推进。", "与治疗目的区分思考。"],
    [
      ["目的", ["在人身上最初确认安全性与体内动态的阶段，从少数开始。效果验证是之后阶段的作用。"]],
      ["推进巧思", ["从微量阶段性增量、充分观察期与紧急体制安全第一设计。参加条件严格规定。"]],
      ["考虑参加时", ["该阶段难期待治疗收益。在说明文件中确认目的负担风险与退出自由，花时间思考。"]],
    ],
  ),
  "decentralized-trials": b(
    ["Aiming at lighter visit burdens.", "Target and evaluation method devices are needed.", "In-person-needing scenes also exist."],
    [
      ["What DCT is", ["How trials proceed reducing visits, supplementing partial explanations and consent, medicine checks, and symptom records with online and visiting nursing."]],
      ["Merits with challenges", ["Easing distant and work compatibility, while device operation, communication environments, and data quality securing are challenges. Fit differs by target disease."]],
      ["When considering joining", ["Confirm tests and procedures needing visits, emergency contacts, and device lending with support. Consider sharing with primary physicians too."]],
    ],
    ["以减轻来院负担为目标。", "需要对象评价方法的巧思。", "也有需面诊的场景。"],
    [
      ["DCT是什么", ["用在线与访问护理补充部分说明同意、用药确认与症状记录，减少来院次数的试验推进方式。"]],
      ["优点与课题", ["便于远方与工作兼顾，但器械操作、通信环境与数据质量确保是课题。适合度因对象疾病而异。"]],
      ["考虑参加时", ["确认需来院的检查处置、紧急联系方式与器械出借支援。也与主治医生分享探讨。"]],
    ],
  ),
  "basket-trials": b(
    ["Group targets by genes and other features.", "Verify multiple drugs and diseases together.", "Test accuracy is a premise."],
    [
      ["What basket trials are", ["Methods trying drugs gathering different-organ cancers and others holding same gene changes into one basket. Suited to verifying rare changes."]],
      ["What umbrella trials are", ["Methods assigning different drugs by gene features within one organ and disease. Shapes hanging multiple trials under one umbrella."]],
      ["Reading cautions", ["Narrow target narrowing needs careful fit viewing. Confirm test accuracy with change meaning-making too."]],
    ],
    ["按基因等特征分组对象。", "汇总验证多药多病。", "检验精度是前提。"],
    [
      ["篮子试验是什么", ["把持相同基因变化的不同器官癌症等聚一篮试药的方法。适合验证罕见变化。"]],
      ["伞式试验是什么", ["一器官疾病内按基因特征分配不同药的方法。伞下挂多试验的形态。"]],
      ["阅读注意", ["对象限定细，适合度慎重看。也确认基因检验精度与变化含义。"]],
    ],
  ),
  "digital-therapeutics": b(
    ["Programs themselves hold treatment effects.", "Used through physician prescriptions.", "Continuing mechanisms decide effects."],
    [
      ["What DTx is", ["Treatments aiming at symptom improvement through app instructions, records, and guidance for smoking, lifestyle diseases, and insomnia. Approved verifying effects in clinical trials."]],
      ["Differences from drugs", ["Rather than chemical workings, they prompt behavior change with habit settling. Side-effect types differ; usage guidance matters."]],
      ["When using", ["Confirm target diseases, usage, costs, and data handling. Distinguish ad testimonials from verified effects."]],
    ],
    ["程序本身具治疗效果。", "经医生处方使用。", "持续机制左右效果。"],
    [
      ["DTx是什么", ["对吸烟、生活习惯病与失眠等，经App指示记录指导改善症状的治疗。临床试验验证效果后批准。"]],
      ["与药的区别", ["不是化学作用，而是促进行为改变与习惯定着。副作用种类不同，使用指导重要。"]],
      ["使用时注意", ["确认对象疾病、用法、费用与数据处理。区分广告体验谈与验证效果。"]],
    ],
  ),
};
