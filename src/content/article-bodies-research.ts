// Full translated bodies (points + sections) for research-category articles.
// Paragraph counts mirror the Japanese source sections.
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

export const articleBodiesResearch: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "japanese-society-for-regenerative-medicine": b(
    [
      "The Japanese Society for Regenerative Medicine is an academic society spanning medicine, life science, engineering, ethics, and legal systems.",
      "Certification systems check knowledge, experience, ethics, and legal understanding; they do not guarantee any individual treatment's effect.",
      "When considering treatment, check the target disease, evidence, safety, cost, and regulatory positioning separately from society or credential names.",
    ],
    [
      [
        "What the society does",
        [
          "The Japanese Society for Regenerative Medicine aims to contribute to human health and welfare through the advancement, development, and training of regenerative medicine, providing a venue where researchers and clinicians share information and present findings.",
          "Regenerative medicine involves not only clinical and basic medicine but also molecular and cellular biology, developmental and cell engineering, tissue engineering, materials science, bioethics, law, and health economics. The society's role is therefore to connect these specialties, not to introduce a single therapy.",
        ],
      ],
      [
        "History and expanding academic activities",
        [
          "According to its official history, the predecessor cell therapy study group launched in 1992 and became the Japanese Society for Regenerative Medicine in 2001, later merging with tissue engineering and regenerative dentistry groups, incorporating, and joining the Japan Medical Association.",
          "Its official site lists meetings, journals, newsletters, awards, educational content, public research, certification, and regulatory information. When reading news, check whether a society announcement recommends treatment for individual patients or only shares research and regulatory information.",
        ],
      ],
      [
        "What certification confirms",
        [
          "The society guides certification for regenerative medicine physicians, cell processing facility managers, and senior and clinical cultivators, checking a defined level of learning through education programs and written examinations in law, ethics, and cell processing.",
          "Certified physician requirements include responsibility for explaining standard care, knowledge of culture methods and cell properties, indication judgment with disease specialists, ethical and legal knowledge, and sufficient experience. Certification never guarantees that every treatment a physician offers is effective or safe.",
        ],
      ],
      [
        "Reading regulatory and safety information",
        [
          "The official site compiles laws, committees, research, and notifications concerning the safety of regenerative medicine. These are specialist sources for facilities and researchers; patients should not read a law or system name as proof of an approved or established treatment.",
          "The site notes an amended act took effect on May 31, 2025, with older wording remaining in some materials. Always check document dates alongside current Ministry of Health, Labour and Welfare and PMDA information.",
          "When considering treatment, confirm at least the target disease and patient conditions, the positioning among research, approved, clinical-research, and private options, the evidence for expected benefit, known risks and uncertainties, post-treatment observation and emergency care, and total costs with stopping and refund terms.",
        ],
      ],
      [
        "Using official information for your own judgment",
        [
          "The society's official site is one primary source for its activities, education, certification, research, and regulatory information, but never a page that decides an individual diagnosis or treatment choice. Never conclude from a society name, credential, or news headline alone; check the original material and its update date.",
          "The same separation applies to Dr. Yoshitomo Chihara's listed society membership: membership and the per-article review scope, dates, and treatment evaluations are considered separately.",
        ],
      ],
    ],
    [
      "日本再生医学学会是横跨医学、生命科学、工程、伦理与法制度的学术团体。",
      "再生医学认定医等认定制度确认知识、经验、伦理与法律理解，不保证个别治疗效果。",
      "考虑治疗时，除学会名与资格名，还要分别确认对象疾病、依据、安全性、费用与制度定位。",
    ],
    [
      [
        "学会是做什么的团体",
        [
          "日本再生医学学会以再生医学的进步、发展与培养、为人类健康与福祉做贡献为目标，为研究者与医疗人员提供分享信息与发表成果的场所。",
          "再生医学不仅涉及临床与基础医学，还涉及分子细胞生物学、发生工程、细胞工程、组织工程、材料工程、生命伦理、法律与医疗经济。因此学会的作用不是介绍某一种治疗，而是连接多个专业领域。",
        ],
      ],
      [
        "设立背景与学术活动的扩展",
        [
          "据官方沿革，前身细胞治疗研究会于1992年成立，2001年成为日本再生医学学会，之后与组织工程学会、再生牙科论坛合并，法人化并加入日本医学会。",
          "官方网站刊登学术集会、会志、通讯、学会奖、教育内容、公共研究、认定制度与新法相关信息。读新闻与研究成果时，区分学会发布是个别患者的治疗推荐，还是研究与制度的信息提供。",
        ],
      ],
      [
        "认定制度确认什么",
        [
          "学会介绍再生医学认定医、细胞培养加工设施管理士、高级临床培养士与临床培养士等认定制度，通过法规、伦理与细胞加工等教育项目和笔试确认一定学识。",
          "认定医要求包括说明标准医疗内容的责任、细胞培养方法与性质知识、与疾病专科医生协作的适应判断、伦理与法律知识、充分经验等。但有认定资格，不意味该医生提供的所有治疗都有效安全。",
        ],
      ],
      [
        "看制度与安全性信息时",
        [
          "官方网站汇总与再生医学安全性确保相关的法律，以及委员会、研究与通知等制度信息。这些是提供机构与研究者确认的专业信息源。患者阅读时，不要仅凭法律名与制度名就判断为“已批准治疗”或“效果确立的治疗”。",
          "官方网站说明改正法于2025年5月31日施行，资料中可能残留改正前用语并陆续更新。读制度信息时，结合资料制作与修订日期，以及厚生劳动省与 PMDA 的现行信息一起确认。",
          "考虑治疗时，至少确认对象疾病与患者条件、研究·批准·临床研究·自由诊疗中的定位、支撑预期收益的依据、已知风险与不确定性、治疗后观察与紧急应对、总额与中止退款条件。",
        ],
      ],
      [
        "把官方信息用于自己的判断",
        [
          "学会官方网站是确认学会活动、教育、认定、研究与制度信息的一手来源之一，但不是决定个别诊断与治疗选择的页面。不要仅凭学会名称、认定资格与新闻标题下结论，请确认原始资料与更新日期。",
          "千原良友医生刊登的学会所属信息同样如此：学会所属与按文章的审核范围、审核日期与治疗评价分开看待。",
        ],
      ],
    ],
  ),
  "reading-research-news": b(
    [
      "Check who the study targeted.",
      "Check what result was observed and over how long.",
      "Trace back to the announcement source and the original paper.",
    ],
    [
      [
        "1. Check the research stage",
        [
          "Do not take findings from cell or animal studies as if they meant treatment effects in people. Even for human studies, confirm participant numbers and purpose.",
        ],
      ],
      [
        "2. Read results together with limits",
        [
          "Look at what was compared, what was measured, and how long participants were observed. Read the limitations section, not only the headline.",
        ],
      ],
      [
        "3. Move on to the original source",
        [
          "Check links to university or institute announcements and original papers. When the information was published matters for understanding it.",
        ],
      ],
    ],
    ["确认以谁为研究对象。", "确认观察了什么结果、观察了多久。", "追溯到发布方与原始论文。"],
    [
      ["1. 确认研究阶段", ["不要把细胞与动物研究成果当作对人的治疗效果。即使是以人为对象的研究，也要确认对象人数与目的。"]],
      ["2. 结果与局限一起读", ["看比较了什么、测量了什么、观察了多久。不仅读标题，也读关于研究局限的部分。"]],
      ["3. 进到原始信息", ["确认大学与研究机构发布、原始论文等的链接。信息是何时发表的，对理解也很重要。"]],
    ],
  ),
  "stages-of-research": b(
    [
      "Verification accumulates in order: basic, nonclinical, then clinical.",
      "Human studies also have stages (phases).",
      "Later stages reveal more and cover wider populations.",
    ],
    [
      [
        "Basic research: uncovering mechanisms",
        [
          "This stage uses cells and animals to study disease mechanisms and cell behavior, producing new differentiation methods and disease models.",
          "These important findings do not directly show effects or safety in people.",
        ],
      ],
      [
        "Nonclinical research: checks before moving to people",
        [
          "Animals and other models are used to study administration, dosage, and toxicity, including how cells behave in the body and whether unexpected effects occur.",
          "Results determine whether human studies may proceed.",
        ],
      ],
      [
        "Clinical trials: verification in people",
        [
          "Verification starts with safety in small groups, then widens to effectiveness and optimal conditions, using randomization and blinding to reduce bias.",
          "After approval, post-marketing surveillance continues to gather information and usage may be revised.",
        ],
      ],
    ],
    ["按基础、非临床、临床的顺序积累验证。", "以人为对象的研究也有阶段。", "阶段越靠后，了解越多，对象越广。"],
    [
      ["基础研究：阐明机制", ["用细胞与动物研究疾病机制与细胞行为，产生新的分化方法与疾病模型。", "该阶段成果重要，但不直接证明对人的效果与安全性。"]],
      ["非临床研究：进入人体前的确认", ["用动物等研究给药方法、用量与毒性，探讨细胞在体内行为与有无意外影响。", "据此判断能否进入以人为对象的研究。"]],
      ["临床试验：在人身上验证", ["从少数人安全性确认开始，扩大对象验证有效性与最佳条件，用随机化与盲法减少偏倚。", "批准后也通过上市后调查等收集信息，用法可能被重新评估。"]],
    ],
  ),
  "evidence-levels": b(
    [
      "Strength of evidence differs by study type.",
      "Check participant numbers, comparators, and observation periods.",
      "Accumulation across studies matters more than a single paper.",
    ],
    [
      [
        "A yardstick for strength",
        [
          "Case reports and small series are valuable clues but vulnerable to chance and bias. Trials with comparators and systematic reviews of them are generally considered stronger evidence.",
          "In fields like regenerative medicine where large trials are hard to organize, read type and limits together.",
        ],
      ],
      [
        "Checkpoints when reading papers",
        [
          "Confirm who was studied, how many, against what, what was measured, and for how long. Look at side effects, dropout handling, and conflict-of-interest disclosures alongside main results.",
          "Reading the methods and results, not only the abstract, reveals gaps between headlines and findings.",
        ],
      ],
      [
        "Judge by accumulation, not one study",
        [
          "Replication by different teams and converging directions across studies matter more than one good result. Guidelines and public evaluations are built on such accumulation.",
          "When unsure, seek expert help such as your physician, library references, or public consultation services.",
        ],
      ],
    ],
    ["依据强度因研究种类而异。", "确认对象人数、比较对象与观察期限。", "比起单篇论文，多项研究的积累更重要。"],
    [
      ["依据强度的标尺", ["病例报告与少数例报告是宝贵线索，但易受偶然与偏倚影响。设比较对照的试验及其系统综述一般被视为更强依据。", "在再生医学这类难做大规模试验的领域，把种类与局限放在一起看。"]],
      ["读论文时的确认点", ["确认以谁为对象、多少人、与什么比较、测量什么、观察多久。除主要结果，也看副作用、脱落处理与利益冲突公开。", "不仅读摘要，也读方法与结果章，易发现与标题印象的出入。"]],
      ["不看一篇，看积累", ["比起单一好结果，不同团队的再现与多项研究方向的一致更重要。指南与公共机构评价正是基于这种积累制定。", "不懂时借助主治医生、图书馆参考咨询与公共咨询窗口等专家帮助。"]],
    ],
  ),
  "approved-products-japan": b(
    [
      "Approved products define target diseases and usage.",
      "Conditional and time-limited approval assumes further verification.",
      "Check the latest status in public information.",
    ],
    [
      [
        "How approval works",
        [
          "Regenerative medical products are reviewed for quality, efficacy, and safety under the Pharmaceuticals and Medical Devices Act, with a pathway for early approval with conditions and time limits when efficacy is presumed and safety confirmed. Approval and insurance coverage are separate procedures.",
          "Approval always comes as a set: for which disease and condition, and how to use it.",
        ],
      ],
      [
        "How to look them up",
        [
          "Approval status by disease can be checked in Ministry of Health, Labour and Welfare and PMDA publications. Tracing product names, indications, conditions, and post-marketing results reveals the whole picture.",
          "News alone hides conditions and narrowing of indications, so going to primary sources matters.",
        ],
      ],
      [
        "Distinguishing off-label provision",
        [
          "Distinguish approved uses from off-scope or private-practice provision. For the latter, check evidence, safety verification, costs, and alternatives even more carefully.",
          "When unsure, consulting a specialist in the target disease is recommended.",
        ],
      ],
    ],
    ["已批准产品规定对象疾病与用法。", "附条件、期限批准是以追加验证为前提的机制。", "最新情况请用公共机构信息确认。"],
    [
      ["批准机制", ["再生医学产品按《药品医疗器械法》审查质量、有效性与安全性，有效性被推定且安全性确认时，可附条件与期限早期批准。批准与能否用医保是不同手续。", "批准总是成套的：什么病的什么状态、怎么用。"]],
      ["查找方法示例", ["按疾病的批准情况可在厚生劳动省与 PMDA 公开资料中确认。追踪产品名、对象、批准条件与上市后调查结果，可把握全貌。", "仅看报道难见条件与对象限定，追溯原始资料很重要。"]],
      ["区分批准外提供", ["区分已批准用法与批准范围外、自由诊疗的提供。后者更要仔细确认依据、安全性验证、费用与其他选择。", "犹豫时建议咨询对象疾病的专科医生。"]],
    ],
  ),
  "future-perspectives": b(
    [
      "Diverse research advances, from mini-organs to sheet technologies.",
      "Challenges such as blood vessels and immunity are also clear.",
      "Keep a balance of hope and verification while watching.",
    ],
    [
      [
        "Organoids and recreating disease",
        [
          "Tiny 3D tissues called organoids, made from stem cells, help uncover disease mechanisms and evaluate drugs. They never fully reproduce the body but give more lifelike information than flat cultures.",
          "While applications to drug discovery and personalized medicine are hoped for, reproducibility and standardized evaluation remain challenges.",
        ],
      ],
      [
        "Challenges toward organ regeneration",
        [
          "Research advances toward functional tissues and organs, from heart muscle sheets and 3D tissues to decellularized organs. Building blood-vessel networks and mechanisms that keep working long-term are major hurdles.",
          "Stay aware of the distance between animal results and human application.",
        ],
      ],
      [
        "Toward care fitted to each person",
        [
          "Both directions are explored: personalization using one's own cells, and rapid delivery using banked cells. Practical issues of cost, manufacturing time, and quality uniformity continue to be verified.",
          "When reading news, the habit of reading target, scale, stage, and remaining challenges together helps.",
        ],
      ],
    ],
    ["类器官与薄片技术等多样研究在推进。", "血管与免疫等需克服的课题也明确。", "保持期待与验证的平衡来关注。"],
    [
      ["类器官与疾病再现", ["由干细胞制成的微小立体组织“类器官”用于阐明疾病机制与评价药物。虽不能完全再现人体，但比传统平面培养更接近生体信息。", "期待制药与个体化医疗应用，同时再现性与评价方法标准化是课题。"]],
      ["器官再生的挑战", ["心肌片、立体组织与脱细胞器官利用等，以有功能的组织器官为目标的研究在推进。构建血管网与长期工作的机制是巨大难关。", "意识到动物实验成果与人体应用的距离。"]],
      ["面向每个人的医疗", ["用自己细胞的个体化方向，与用储备细胞快速送达的方向都在摸索。费用、制造周期与质量均一等实用课题也在验证。", "接触新闻时，把对象、规模、阶段与遗留课题放在一起读的习惯有用。"]],
    ],
  ),
  "bench-to-bedside": b(
    [
      "Back-and-forth between basic and clinical work is key.",
      "Physicians, researchers, and companies collaborate.",
      "Learning from failure is also translation.",
    ],
    [
      ["What translation means", ["It means connecting basic findings to human application and bringing clinical questions back to the bench. Understanding deepens through going back and forth, not one direction."]],
      ["Who carries it", ["Physicians, basic researchers, statistics and ethics specialists, and company developers are involved. Patient and public involvement (PPI) perspectives are also valued."]],
      ["Why it takes time", ["Confirming safety, stabilizing manufacturing, and addressing regulation take time. Understand that this field prioritizes certainty over speed."]],
    ],
    ["基础与临床的往返是关键。", "医生、研究者与企业协作。", "从失败学习也是桥梁。"],
    [
      ["桥梁是什么", ["指把基础研究成果接到人体应用，再把临床疑问带回基础的往返。不是单向，而是来回加深理解。"]],
      ["谁来承担", ["医生、基础研究者、统计与伦理专家、企业开发负责人等参与。患者与市民参与（PPI）视角也受重视。"]],
      ["耗时原因", ["安全性确认、制造稳定化与规制应对耗时。理解这是比速度更重确实性的领域。"]],
    ],
  ),
  "randomized-trials": b(
    [
      "Random grouping reduces bias.",
      "Blinding suppresses expectations.",
      "It is not almighty; limits exist too.",
    ],
    [
      ["What randomization means", ["Participants are lottery-divided into treatment and control groups to even out backgrounds. A basic device to avoid distortion from intentional selection."]],
      ["What blinding is", ["Hiding who received which treatment suppresses evaluation bias. In cell therapies, the nature of procedures can make full blinding difficult."]],
      ["Understanding limits", ["Rare diseases with limited participants or urgent situations can make trials hard to run. Read trial types together with their limits."]],
    ],
    ["分组减少偏倚。", "盲法抑制主观臆断。", "并非万能，也有局限。"],
    [
      ["随机化的含义", ["抽签把参加者分到治疗组与对照组，拉平背景。是避免人为选择扭曲的基本巧思。"]],
      ["盲法是什么", ["不告知谁接受了哪种治疗，抑制评价的主观臆断。细胞治疗因手法性质，有时难完全盲法。"]],
      ["理解局限", ["对象有限的罕见病与紧急情况有时难实施。把试验种类与局限放在一起读。"]],
    ],
  ),
  "case-reports-registries": b(
    [
      "Case reports start discoveries.",
      "Registries grasp the whole picture.",
      "Combining both matters.",
    ],
    [
      ["Value of case reports", ["Records of rare courses or unexpected responses seed new hypotheses. But they are vulnerable to chance and bias and never prove effects."]],
      ["What registries are", ["Systems registering and tracking cases from many institutions in a fixed format. They help grasp real-world use and long-term courses."]],
      ["Readers' lessons", ["Stay aware of reporting bias toward good cases. In registry studies, check selection and follow-up rates."]],
    ],
    ["病例报告是发现的起点。", "登记掌握整体情况。", "两者结合重要。"],
    [
      ["病例报告的价值", ["罕见经过与意外反应的记录是新假设的源泉。但易受偶然与偏倚影响，不能证明效果。"]],
      ["登记是什么", ["以固定格式登记追踪多机构病例的机制。有助于把握实际使用与长期经过。"]],
      ["读者的心得", ["意识到好病例易被报告的发表偏倚。登记研究中确认对象选择与随访率。"]],
    ],
  ),
  endpoints: b(
    [
      "Decide what to measure in advance.",
      "Distinguish true goals from surrogate markers.",
      "Patient-centered measures matter too.",
    ],
    [
      ["What primary endpoints are", ["The central yardstick judging trial success is fixed beforehand. An important promise preventing after-the-fact interpretation."]],
      ["Handling surrogate markers", ["Markers measured instead of true goals like survival or daily function are called surrogates. Correlation does not equal agreement, so read carefully."]],
      ["Patient-reported outcomes", ["Measures patients report themselves, such as pain and ease of movement (PRO), are also valued. Look at both test values and lived experience."]],
    ],
    ["事先决定测量什么。", "区分真正目的与替代指标。", "以患者为中心的指标也重要。"],
    [
      ["主要评价项目是什么", ["事先定下判断试验成败的中心标尺。是防止事后解释的重要约定。"]],
      ["替代指标的处理", ["代替生存与生活功能等真正目的测量的影像与检验值称为替代指标。相关不等于一致，谨慎阅读。"]],
      ["患者报告结局", ["疼痛与活动 ease 等患者自己报告的指标（PRO）也受重视。检验值与生活实感两面看。"]],
    ],
  ),
  "peer-review": b(
    [
      "Peer review is advance inspection by experts.",
      "Publication never guarantees correctness.",
      "Preprints are pre-review sharing.",
    ],
    [
      ["How peer review works", ["Submitted papers are checked by independent experts on methods and interpretation, who request revisions or extra experiments. Passing papers appear in journals."]],
      ["Limits of peer review", ["Review never fully prevents errors or misconduct. Evaluations settle through post-publication verification, replication, and retractions. Avoid concluding from a single paper."]],
      ["Reading preprints", ["A system for quickly sharing pre-review manuscripts, excellent for speed. Stay aware they are unreviewed and watch for gaps with later reviewed versions and coverage."]],
    ],
    ["同行评议是专家的事前检查。", "刊登不等于正确保证。", "预印本是评议前共享。"],
    [
      ["评议机制", ["投稿论文由独立专家检查方法与解释，要求修改与追加实验。通过的刊登于期刊。"]],
      ["评议的局限", ["评议不能完全防止错误与不端。评价经发表后验证、追试与撤稿而定。不要凭单篇论文下结论。"]],
      ["预印本的读法", ["迅速共享评议前原稿的机制，时效性强。意识到未评议，注意与之后评议版、报道的出入。"]],
    ],
  ),
  "press-release-reading": b(
    [
      "Releases guide you to key points.",
      "Check target, scale, and stage.",
      "Move on to original papers and materials.",
    ],
    [
      ["Roles of releases", ["Press releases broadcast research highlights, centered on achievements. Limits and next challenges live in original papers and supplements."]],
      ["Three things to check", ["Confirm who was targeted, at what scale, and at which stage (cells, animals, or people). Watch how numbers are read (relative vs. absolute)."]],
      ["Where to go next", ["Trace source pages, original papers, and trial registries. Mind the age of announcements and look for follow-ups."]],
    ],
    ["发布文是要点指南。", "确认对象、规模与阶段。", "进到原始论文与资料。"],
    [
      ["发布文的作用", ["新闻稿是广泛传达研究要点的文书，以成果强调为中心。局限与下步课题详见原始论文与补充资料。"]],
      ["确认三点", ["确认以谁为对象、多大规模、哪个阶段（细胞·动物·人）的成果。注意数字读法（相对·绝对）。"]],
      ["下一步去向", ["追溯发布方页面、原始论文与试验登记信息。留意发布日期新旧，寻找后续。"]],
    ],
  ),
  "statistics-intro": b(
    [
      "The n is the number of participants and cases.",
      "Look at width (confidence intervals) with points (estimates).",
      "Statistical significance and clinical meaning differ.",
    ],
    [
      ["What the n means", ["Smaller samples mean larger chance effects. Good results in a few cases weigh differently from comparative trials in hundreds. Check scale first."]],
      ["Reading confidence intervals", ["Effect estimates have width. Wider means more uncertainty; narrower means more precision. Read width together with point values."]],
      ["Statistical vs. clinical meaning", ["Even with statistical differences, life changes can be small. Consider effect sizes and what they mean for patients."]],
    ],
    ["n 是对象人数与例数。", "看宽度（置信区间）与点（估计值）。", "有显著差异与临床意义不同。"],
    [
      ["n 的含义", ["对象越少偶然影响越大。数例好结果与数百例比较试验分量不同。先确认规模。"]],
      ["置信区间的看法", ["效果估计有宽度。越宽不确定越大，越窄越精密。点值与宽度一起读。"]],
      ["统计显著与临床意义", ["即使有统计差异，生活变化也可能小。结合差异大小（效应量）与对患者的含义思考。"]],
    ],
  ),
  "conflict-of-interest": b(
    [
      "Check funding and interest disclosures.",
      "Interests do not equal misconduct.",
      "Look at design and data transparency.",
    ],
    [
      ["Where disclosures live", ["Funding sources and authors' affiliations and shareholdings appear at paper ends or on presentation slides. Releases may omit them, so check originals."]],
      ["How to view interests", ["Industry ties are often essential for development and are not immediately problems. Evaluate alongside design appropriateness and data openness."]],
      ["Readers' checkpoints", ["Look for trial registration, published protocols, and complete reporting of results. Whether negative results are also published hints at trustworthiness."]],
    ],
    ["确认资金与利害公开。", "利害不等于不端。", "看设计与数据透明度。"],
    [
      ["公开在哪里", ["资金来源与作者所属、持股等记于论文末尾与发表幻灯片。发布文可能省略，请用原始资料确认。"]],
      ["利害的看法", ["与企业关系有时对开发不可或缺，不立即成问题。结合设计恰当性与数据公开状况评价。"]],
      ["读者的确认点", ["看试验登记、计划书公开与结果完整报告。否定结果是否也发表是可信线索。"]],
    ],
  ),
  "overseas-research": b(
    [
      "Approval systems differ by country.",
      "Overseas private-care situations are separate matters.",
      "Check the positioning in Japan.",
    ],
    [
      ["Differences in systems", ["Approval mechanisms and regenerative medicine frameworks differ by country. Treatments accepted abroad are not handled the same in Japan."]],
      ["Care seeking treatment abroad", ["With medical tourism, handling troubles and continuing follow-up become harder. Confirm post-return care systems in advance."]],
      ["Confirming in Japan", ["Check which Japanese framework a treatment falls under through your physician, specialists, and public information. Never judge from overseas headlines alone."]],
    ],
    ["批准制度因国而异。", "海外自由诊疗情况是另一回事。", "确认在日本的定位。"],
    [
      ["制度差异", ["批准机制与再生医学框架因国而异。海外认可的治疗在日本未必同样处理。"]],
      ["赴海外接受治疗的注意", ["医疗旅游中，麻烦应对与随访持续变难。事先确认回国后诊疗体制。"]],
      ["在日本的确认方", ["通过主治医生、专科医生与公共信息，确认对象治疗在日本属哪个框架。不要仅凭海外报道标题判断。"]],
    ],
  ),
  "negative-trials": b(
    [
      "Negative results are also important findings.",
      "Exploring reasons leads to next steps.",
      "Beware publication bias.",
    ],
    [
      ["What negative results mean", ["Trials that could not show effects reveal issues in participant selection, dosage, and evaluation. Separate what was learned from what remains unknown."]],
      ["What publication bias is", ["Good results publish more easily, making the whole picture look rosier. Check alignment between registered plans and publications."]],
      ["Using them for next steps", ["Analyses of negative trials improve next designs through narrowing targets and combination therapies. Judge by accumulation, not single success or failure."]],
    ],
    ["阴性结果也是重要发现。", "探索原因通向下步。", "注意发表偏倚。"],
    [
      ["阴性结果的含义", ["未能显示效果的试验揭示对象选择、用量与评价方法的课题。区分明确了什么与未知什么来读。"]],
      ["发表偏倚是什么", ["好结果易发表，整体显得乐观。确认登记计划与发表的对应。"]],
      ["用于下一步", ["阴性试验分析经缩小对象、探讨联合疗法等改善下个设计。不看单次成败，看积累。"]],
    ],
  ),
  "long-term-followup": b(
    [
      "Short and long terms show different things.",
      "Check how dropouts were handled.",
      "Participants' cooperation grows knowledge.",
    ],
    [
      ["Short vs. long differences", ["Whether early improvements last and whether late adverse events appear only emerge through long observation. Read observation length together with results."]],
      ["Handling dropouts", ["Many participants lost to follow-up can distort results. Check follow-up rates and analysis descriptions."]],
      ["Cooperating with follow-up", ["Post-participation visits and questionnaires become decision materials for future patients. Confirm burden contents and periods in advance."]],
    ],
    ["短期与长期所见不同。", "确认脱落者的处理。", "参加者的协助培育知识。"],
    [
      ["短期与长期的区别", ["初期改善是否持续、有无迟发不良事件，长期观察才知道。观察期限与结果一起看。"]],
      ["脱落者的处理", ["脱离随访的参加者多，结果可能扭曲。确认随访率与分析方法记载。"]],
      ["对随访的协助", ["参加后的复诊与问卷成为未来患者的判断材料。事先确认负担内容与期限。"]],
    ],
  ),
  "how-to-find-trials": b(
    [
      "Searchable in registration databases.",
      "Check eligibility criteria.",
      "Consider together with your physician.",
    ],
    [
      ["Searching registries", ["Clinical research registrations can be searched by disease or treatment keywords, listing purpose, eligibility, sites, and contacts."]],
      ["Reading eligibility", ["Age, stage, conditions, and prior treatments decide participation. Even if you seem to fit, final judgment comes from the research team's examination."]],
      ["Consulting your physician", ["Share candidates with your physician and discuss fit with your condition and history. Consider referrals and visit feasibility too."]],
    ],
    ["可在登记数据库找。", "确认入选条件。", "与主治医生一起探讨。"],
    [
      ["登记信息的找法", ["用病名与疗法关键词搜索临床研究登记信息。记载目的、对象条件、实施机构与联系方式。"]],
      ["入选条件的读法", ["年龄、病期、合并症与既往治疗等条件决定能否参加。看似符合，最终判断也由研究团队诊察决定。"]],
      ["与主治医生商量", ["找到候选与主治医生分享，商量与病情、治疗史的相性。结合转诊必要与就诊现实探讨。"]],
    ],
  ),
  "world-products": b(
    [
      "Authority publications are primary sources.",
      "Always view targets with conditions.",
      "Beware gaps with news coverage.",
    ],
    [
      ["Going to primary sources", ["Approval contents can be checked in each country's regulator publications, listing product names, indications, usage, warnings, and conditions."]],
      ["Care comparing countries", ["The same product can differ by country in targets and conditions. Compare contents, not only approval status."]],
      ["Living with news coverage", ["Phrases like “world-first” or “breakthrough” should be read with narrowing of targets and conditional-approval contexts. Mind original dates and versions too."]],
    ],
    ["当局公开资料是一手信息。", "对象与条件成套看。", "注意与报道的出入。"],
    [
      ["追溯一手信息", ["批准内容可在各国监管当局公开资料中确认。记载产品名、对象、用法、警告与批准条件。"]],
      ["跨国比较的注意", ["同一产品对象与条件也可能因国而异。不仅看批准有无，看到内容差异。"]],
      ["与报道的相处", ["“世界首例”“划时代”等表述，与对象限定、附条件批准语境一起读。注意原文日期与版本。"]],
    ],
  ),
};
