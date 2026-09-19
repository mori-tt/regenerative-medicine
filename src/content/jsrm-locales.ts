import type { SiteLocale } from "./locales";

export type JsrmGuideLocale = {
  title: string;
  description: string;
  heroTitle: string;
  heroBody: string;
  officialSite: string;
  officialNote: string;
  whyTitle: string;
  whyBody: string[];
  chaptersTitle: string;
  chaptersCaption: string;
  rolesTitle: string;
  roles: [string, string][];
  historyTitle: string;
  historyBody: string;
  historyLink: string;
  timeline: [string, string][];
  certTitle: string;
  certLead: string;
  certOfficial: string;
  certs: [string, string][];
  certCautionTitle: string;
  certCautionBody: string;
  lawTitle: string;
  lawBody: string[];
  lawLink: string;
  checklistTitle: string;
  checklist: string[];
  reviewerTitle: string;
  reviewerBody: string;
  reviewerLink: string;
  sourcesTitle: string;
};

export const jsrmGuideLocales: Record<SiteLocale, JsrmGuideLocale> = {
  en: {
    title: "Understanding the Japanese Society for Regenerative Medicine",
    description:
      "Roles, history, certification, and regulatory information of the society, organized from official materials.",
    heroTitle: "Understanding the Japanese Society for Regenerative Medicine.",
    heroBody:
      "An academic society connecting research, clinical practice, cell processing, ethics, and legal systems in regenerative medicine. Its roles and certification are explained in plain words.",
    officialSite: "Visit the official society site",
    officialNote: "Organized from official materials · Updated September 2026",
    whyTitle: "A society's name alone never decides whether a treatment is good.",
    whyBody: [
      "The society is a forum where specialists discuss research, education, and systems. Membership or certification helps you understand a physician's background.",
      "Whether an individual treatment suits you, works, or is safe must still be judged separately through the disease, symptoms, test results, methods, evidence, and risks.",
    ],
    chaptersTitle: "Reading the society in 10 chapters.",
    chaptersCaption: "Start from the theme you care about",
    rolesTitle: "What the society does.",
    roles: [
      ["Connecting specialties", "It addresses regenerative medicine across clinical and basic medicine, cell and tissue engineering, materials science, bioethics, law, and health economics."],
      ["Supporting research and education", "It shares findings and knowledge through meetings, journals, newsletters, awards, and educational content."],
      ["Thinking about safety and systems", "It publishes expert information on cell quality and safety, cell processing, and the Act on the Safety of Regenerative Medicine."],
      ["Certifying and training people", "It certifies physicians, dentists, cell culture technologists, and facility staff who support regenerative medicine."],
    ],
    historyTitle: "From a study group to a field-supporting society.",
    historyBody:
      "The official history traces how regenerative medicine expanded from cell therapy into tissue engineering, dentistry, clinical practice, and regulation.",
    historyLink: "See the official history",
    timeline: [
      ["1992", "Predecessor cell therapy study group launched"],
      ["2001", "Study group dissolved to found the Japanese Society for Regenerative Medicine"],
      ["2002", "First annual meeting held; journal publishing began"],
      ["2008", "Merged with the Japanese Society for Tissue Engineering"],
      ["2009", "Merged with the Japanese Regenerative Dentistry Forum"],
      ["2012", "Incorporated as a general incorporated association"],
      ["2015", "Launched the journal Regenerative Therapy"],
      ["2018", "Joined the Japan Medical Association"],
    ],
    certTitle: "How to read the certification system.",
    certLead:
      "Through education programs and examinations in law, ethics, and cell processing, the society certifies multiple professions. Each credential means something different.",
    certOfficial: "Official certification page",
    certs: [
      ["Certified Regenerative Medicine Physician", "A system checking responsibility for explaining standard care, knowledge of culture methods and cell properties, indication judgment with specialists, ethical and legal knowledge, and sufficient experience."],
      ["Cell Processing Facility Manager", "Covers knowledge and practical ability in facility structure, manufacturing, quality control, and operational management."],
      ["Senior Clinical Cultivator / Clinical Cultivator", "Certification for technologists in cell culture and processing. It does not directly certify treatment effects for patients."],
    ],
    certCautionTitle: "An important line",
    certCautionBody:
      "Certification describes qualification requirements. It never guarantees the effectiveness, safety, cost-effectiveness, or suitability of any specific treatment for you.",
    lawTitle: "For regulatory information, watch dates and wording.",
    lawBody: [
      "The “new law” pages carry specialist materials on cell processing, aseptic operation, cell storage, and provision-plan templates.",
      "The official site notes the amended act took effect on May 31, 2025, and older wording may remain in materials. Always check document dates alongside current MHLW and PMDA information.",
    ],
    lawLink: "See the regulatory information",
    checklistTitle: "A checklist for considering treatment",
    checklist: [
      "Target disease, symptoms, and patient conditions",
      "Positioning: research, approved care, clinical research, or private care",
      "Studies and comparators supporting the expected benefit",
      "Known risks, uncertainties, and post-treatment observation",
      "Other options, watchful waiting, and second opinions",
      "Total cost including collection, processing, administration, tests, and visits, plus contract terms",
    ],
    reviewerTitle: "As the society of reviewer Dr. Chihara",
    reviewerBody:
      "This site lists Yoshitomo Chihara as a medical reviewer. Membership in the Japanese Society for Regenerative Medicine is one affiliation in his profile. Society membership and per-article review scope, dates, and treatment evaluations are shown separately.",
    reviewerLink: "See the reviewer policy",
    sourcesTitle: "Official information and references",
  },
  zh: {
    title: "了解日本再生医学学会",
    description: "从官方资料整理学会的作用、沿革、认定制度与制度信息。",
    heroTitle: "了解日本再生医学学会。",
    heroBody:
      "连接再生医学研究、临床、细胞加工、伦理与法制度的学术团体。用易懂的语言整理学会的作用与认定制度。",
    officialSite: "查看学会官方网站",
    officialNote: "基于官方资料整理 · 2026年9月更新",
    whyTitle: "仅凭学会名称，无法判断治疗的好坏。",
    whyBody: [
      "学会是专家讨论研究、教育与制度的场所。是否所属、有无认定资格，是了解医生专业背景的线索。",
      "个别治疗是否适合自己、是否有效、是否安全，仍需通过疾病、症状、检查结果、治疗方法、依据与风险分别判断。",
    ],
    chaptersTitle: "用十章读懂学会。",
    chaptersCaption: "从感兴趣的主题读起",
    rolesTitle: "日本再生医学学会的作用。",
    roles: [
      ["连接专业领域", "横跨临床医学、基础医学、细胞工程、组织工程、材料工程、生命伦理、法律与医疗经济，处理再生医学课题。"],
      ["支撑研究与教育", "通过学术集会、期刊、通讯、学会奖和教育内容分享研究成果与知识。"],
      ["思考安全与制度", "面向专家发布细胞质量与安全性、细胞加工、《再生医学安全性确保法》相关信息与观点。"],
      ["认定与培养人才", "设立面向医生、牙科医生、细胞培养技术人员与加工设施相关人员的认定制度，培养支撑再生医学的人才。"],
    ],
    historyTitle: "从研究会到支撑领域的学会。",
    historyBody: "从官方沿革可以追溯再生医学从细胞治疗扩展到组织工程、牙科、临床与制度的历程。",
    historyLink: "查看官方沿革",
    timeline: [
      ["1992", "前身细胞治疗研究会成立"],
      ["2001", "研究会解散并成立日本再生医学学会"],
      ["2002", "举办第一届学术总会，开始发行学会志"],
      ["2008", "与日本组织工程学会合并"],
      ["2009", "与日本再生牙科论坛合并"],
      ["2012", "法人化为一般社团法人"],
      ["2015", "创刊 Regenerative Therapy 杂志"],
      ["2018", "加入日本医学会"],
    ],
    certTitle: "认定制度的读法。",
    certLead: "学会通过法规、伦理与细胞加工等教育项目和考试认定多个职业。各项资格含义不同。",
    certOfficial: "官方认定制度页面",
    certs: [
      ["再生医学认定医", "确认说明标准医疗内容的责任、细胞培养方法与性质知识、与专科医生协作的适应判断、伦理与法律知识、充分经验等的制度。"],
      ["细胞培养加工设施管理士", "面向加工设施的结构设备、制造、质量管理与运营管理的知识与实务能力。"],
      ["高级临床培养士·临床培养士", "面向细胞培养与加工技术人员的认定。不直接认定对患者的治疗效果。"],
    ],
    certCautionTitle: "重要的分界",
    certCautionBody: "认定资格是关于资格要件的信息。不保证特定治疗的有效性、安全性、费用效果和对你的适应性。",
    lawTitle: "查制度信息时注意更新日期与用语。",
    lawBody: [
      "“新法相关信息”刊登细胞加工、无菌操作、细胞保管与提供计划模板等专业资料。",
      "官方网站说明改正法于2025年5月31日施行，资料中可能残留改正前用语。查制度时请结合资料制作与修订日期，以及厚生劳动省和 PMDA 的最新信息一起确认。",
    ],
    lawLink: "查看新法相关信息",
    checklistTitle: "考虑治疗时的确认清单",
    checklist: [
      "对象疾病、症状与患者条件",
      "定位：研究、已批准医疗、临床研究与自由诊疗中的哪一种",
      "支撑预期收益的研究与比较对象",
      "已知风险、不确定性与治疗后观察",
      "其他治疗、随访观察与第二诊疗意见",
      "包含采集、加工、给药、检查与复诊的总额与合同条件",
    ],
    reviewerTitle: "作为千原良友医生的所属学会",
    reviewerBody:
      "本站将千原良友医生列为审核者。对日本再生医学学会的所属是其简介中记载的所属信息之一。学会所属与按文章的审核范围、审核日期与治疗评价分开标示。",
    reviewerLink: "查看审核方针",
    sourcesTitle: "官方信息与参考页面",
  },
};

export type JsrmChapterLocale = {
  title: string;
  description: string;
  sections: { title: string; paragraphs: string[] }[];
};

export const jsrmChapterLocales: Record<SiteLocale, Record<string, JsrmChapterLocale>> = {
  en: {
    "01-overview": {
      title: "What the society is",
      description: "Its purpose, the fields it covers, and how patients should position it.",
      sections: [
        {
          title: "The society's basic role",
          paragraphs: [
            "The Japanese Society for Regenerative Medicine is a general incorporated association contributing to human health and welfare through the advancement, development, and training of regenerative medicine. Its official site provides a venue where researchers and clinicians share information and present findings.",
            "It is not itself a hospital or clinic, nor does it directly provide treatments to patients. Think of it as a common foundation where specialists build discussion on meetings, journals, education, certification, and regulatory and safety information.",
          ],
        },
        {
          title: "Regenerative medicine is not one treatment name",
          paragraphs: [
            "Its prospectus describes regenerative medicine as a field aiming to restore function of impaired tissues and organs through active use of cells. Methods and target diseases vary across cells, tissues, genes, and materials.",
            "Explaining that something “uses stem cells” alone never establishes effectiveness or safety. Always check the target disease, cell or product type, research stage, administration, comparators, and follow-up period.",
          ],
        },
        {
          title: "How readers can use it",
          paragraphs: [
            "The official site is an entry to specialist primary information. Reading it never determines an individual diagnosis or treatment suitability. Use society information as background for questions to your physician and as clues for checking systems and credentials.",
          ],
        },
      ],
    },
    "02-history": {
      title: "Background and history",
      description: "From the cell therapy study group to a broader field.",
      sections: [
        {
          title: "Starting from a predecessor",
          paragraphs: [
            "According to the official history, the predecessor cell therapy study group launched in April 1992 and was dissolved to found the Japanese Society for Regenerative Medicine in May 2001. The first annual meeting and journal publishing began in 2002.",
            "This shows regenerative medicine did not appear suddenly as one new technology, but grew from accumulated cell-based research and treatment into an organized expert forum.",
          ],
        },
        {
          title: "Mergers with tissue engineering and dentistry",
          paragraphs: [
            "The history records a 2008 merger with the tissue engineering society and a 2009 merger with the regenerative dentistry forum. Regenerative medicine never ends with cells alone, touching tissue structure, materials, and oral and dental fields.",
            "When reading articles or news, checking which specialty produced the result helps organize its meaning and limits.",
          ],
        },
        {
          title: "Incorporation and academic foundations",
          paragraphs: [
            "The society was incorporated in 2012, launched Regenerative Therapy in 2015, and joined the Japan Medical Association in 2018. Its history is also a process of growing from a presentation venue into an academic foundation with education, certification, regulation, and journals.",
          ],
        },
      ],
    },
    "03-academic-activities": {
      title: "Meetings, journals, and education",
      description: "How the society shares findings and trains specialists.",
      sections: [
        {
          title: "What meetings are for",
          paragraphs: [
            "At meetings, researchers and clinicians present and discuss findings, clinical experience, techniques, and regulatory issues. Presented content matters, but not every presentation equals a peer-reviewed paper or an established treatment.",
            "When news covers a presentation, check the format, sample size, comparators, endpoints, follow-up, conflicts of interest, and whether a peer-reviewed paper exists. Never judge effects from a flashy title alone.",
          ],
        },
        {
          title: "Journals and research output",
          paragraphs: [
            "The official menu lists journals, back numbers, and newsletters. Specialist journals record findings as a foundation for later studies.",
            "When reading papers, look beyond titles and conclusions to design, participants, controls, primary endpoints, adverse events, missing data, and follow-up. Even promising results need stages before they improve real patients.",
          ],
        },
        {
          title: "Roles of educational content",
          paragraphs: [
            "The society also guides reference books and educational content for certification. Specialist materials help learn cell processing and law in depth, but contain many difficult terms. Cross-check unfamiliar parts with MHLW, PMDA, and patient materials from research institutes, and confirm treatment explanations with clinicians.",
          ],
        },
      ],
    },
    "04-certification": {
      title: "Certification systems and what credentials mean",
      description: "Certified physicians, cultivators, and points patients often misunderstand.",
      sections: [
        {
          title: "A system for multiple professions",
          paragraphs: [
            "The society certifies regenerative medicine physicians, cell processing facility managers, senior clinical cultivators, and clinical cultivators. Official explanations describe education programs and examinations in law, ethics, and cell processing.",
            "Its feature is distinguishing who handles which step: medical practice, facility management, manufacturing and quality control, and culture techniques. Check who holds which role.",
          ],
        },
        {
          title: "Requirements for certified physicians",
          paragraphs: [
            "Requirements include responsibility for explaining standard care, knowledge of culture methods and cell properties, indication judgment with disease specialists, ethical and legal knowledge, and sufficient experience.",
            "These qualify physicians to explain regenerative medicine and coordinate appropriately. They never guarantee that any specific treatment is effective, safe, cost-effective, or suitable for you.",
          ],
        },
        {
          title: "Separate credentials from treatment evaluation",
          paragraphs: [
            "When considering treatment, check the target disease, evidence, positioning among approved, research, and private options, risks, alternatives, and aftercare alongside credentials. A credential informs you about a clinician; it never automatically recommends a treatment.",
          ],
        },
      ],
    },
    "05-law-and-regulation": {
      title: "Regenerative medicine and legal systems",
      description: "The Safety Act, cell processing, and provision plans from a patient viewpoint.",
      sections: [
        {
          title: "Regulatory information as material for safety thinking",
          paragraphs: [
            "The regulatory pages carry materials on aseptic operation, cell storage, provision-plan templates, and quality and safety evaluation of processed cell products. Systems are frameworks for conducting research and care safely.",
            "Having procedures and having a treatment that is effective and safe for you are separate matters. Never take legal or notification status as proof of effect.",
          ],
        },
        {
          title: "Beware the amended act and old wording",
          paragraphs: [
            "The official site notes the amended act took effect on May 31, 2025, and older wording may remain in materials. Check creation and revision dates with wording definitions, and cross-check current MHLW and PMDA information.",
          ],
        },
        {
          title: "What patients can ask",
          paragraphs: [
            "You can ask which law and system the offer falls under, whether it is research or care, whether explanatory and consent documents exist, what is observed after treatment and where, and where to contact in emergencies. If answers stay vague while you are rushed to sign, take materials home and consult another clinician.",
          ],
        },
      ],
    },
    "06-public-research": {
      title: "Public research and industry-academia collaboration",
      description: "Reading JST and AMED-linked public research apart from treatment.",
      sections: [
        {
          title: "Why public research pages exist",
          paragraphs: [
            "The official site links to JST, MHLW science projects, AMED, and the national consortium. Regenerative medicine is hard for any single organization to advance alone across basic research, clinical studies, product development, regulation, and ethics.",
            "These pages show the overall research and support landscape. Adoption into a public project never means an individual treatment's effectiveness is established.",
          ],
        },
        {
          title: "Distinguishing research stages",
          paragraphs: [
            "Preclinical work with cells or animals, human clinical studies, development toward approval, and post-approval care answer different questions. Check who was studied, against what, what was measured, and how long they were followed.",
            "Findings may lead to future treatments while not yet supporting any treatment available today. Separate hope from establishment.",
          ],
        },
        {
          title: "Conflicts of interest and transparency",
          paragraphs: [
            "Relationships with researchers and companies, funding, and presenter positions affect interpretation. A conflict never invalidates research by itself, but disclosure and independent verification or replication help judge it.",
          ],
        },
      ],
    },
    "07-cell-processing": {
      title: "Cell processing facilities and quality control",
      description: "Steps from collection to administration, and why quality control matters.",
      sections: [
        {
          title: "Steps behind treatment",
          paragraphs: [
            "Cell-based care involves collection, transport, culture and processing, quality checks, storage, administration, records, and post-treatment observation. Where, by whom, and by which procedure cells are handled affects safety and reproducibility.",
            "Patient explanations tend to emphasize administration, but processing and quality explanations matter too. Check material origins, mix-up prevention, aseptic operation, testing, and deviation handling.",
          ],
        },
        {
          title: "Facility management and personnel certification",
          paragraphs: [
            "Certification covers facility managers and cultivators supporting cell handling. These systems professionally support equipment, operation, quality control, and techniques.",
            "Credentials alone never determine a whole facility's quality. Look at operation records, responsibility systems, test results, abnormality responses, and post-treatment tracking as one picture.",
          ],
        },
        {
          title: "Questions when briefed",
          paragraphs: [
            "Confirm in writing whether cells are autologous or allogeneic, the period from collection to administration, processing sites, quality-check items, storage, handling when cells cannot be used, and contacts if problems arise after treatment.",
          ],
        },
      ],
    },
    "08-compensation": {
      title: "Compensation systems and preparation after treatment",
      description: "Support insurance for private care and clinical research, plus pre-contract checks.",
      sections: [
        {
          title: "What compensation covers",
          paragraphs: [
            "The official site guides support insurance for private practice and clinical research. Compensation is one preparation for health damage linked to treatment or research.",
            "Having insurance or compensation never means treatment is risk-free or effective. Check covered events, scope, claims, and exclusions in explanatory and contract documents.",
          ],
        },
        {
          title: "Costs to confirm before signing",
          paragraphs: [
            "For private care, total the first quote plus collection, processing, administration, tests, visits, hospitalization, additional care, and emergency responses. Refund and cancellation terms when stopping or missing planned sessions matter too.",
            "High price, fame, or “latest technology” wording never proves effects. Never sign on the briefing day; take documents home and consider them.",
          ],
        },
        {
          title: "Thinking through after treatment",
          paragraphs: [
            "Confirm observation periods, test contents, who reviews results, adverse-event contacts, night and holiday responses, and information sharing when visiting other hospitals. Look at whether post-treatment plans are concrete, not only pre-treatment explanations.",
          ],
        },
      ],
    },
    "09-membership-and-education": {
      title: "Membership and learning entries",
      description: "Who joins the society and what information is accessible, in plain words.",
      sections: [
        {
          title: "A society open to individuals and corporations",
          paragraphs: [
            "The society widely invites individuals and corporations understanding and supporting its aims. Its official site offers journals, meetings, the latest information, and presentation venues.",
            "Membership is a system for joining research, education, and exchange. It never means general patients cannot read public materials without joining. Use public documents and member-only specialist information separately.",
          ],
        },
        {
          title: "Information general readers can use",
          paragraphs: [
            "News, prospectus, history, certification, regulatory information, and FAQs are published to explain the society's work. Specialist-heavy pages read easier when you first check headings and update dates, then dig only into needed themes.",
            "When reading to find institutions, never conclude from certification alone. Combine it with institutional explanations, target diseases, costs, conflicts of interest, and aftercare systems.",
          ],
        },
        {
          title: "Translating specialist information for patients",
          paragraphs: [
            "The society's role centers on sharing information among specialists. Rather than taking specialist documents as ads or treatment explanations, turn unfamiliar words into questions. This guide introduces official materials with their positioning and limits.",
          ],
        },
      ],
    },
    "10-for-patients-and-reviewer": {
      title: "How patients should read, and Dr. Chihara's review",
      description: "Final checkpoints to avoid confusing affiliation, review, and evidence.",
      sections: [
        {
          title: "Affiliation is one clue",
          paragraphs: [
            "A physician belonging to the society is one piece of information about background and interests. It never means the society approved an individual treatment or guarantees effects.",
            "This site lists the society affiliation from Dr. Yoshitomo Chihara's official profile. Affiliation and per-article review scope, dates, and confirmations are shown separately.",
          ],
        },
        {
          title: "Meaning and limits of physician review",
          paragraphs: [
            "Physician review checks medical wording, distinctions between research stages and treatment, and explanations of risks and alternatives. Review raises accountability; it never guarantees an individual treatment's effectiveness or safety.",
            "Article pages matter for who checked what, when, and in which scope. Check qualifications and affiliations alongside update dates, references, open questions, and advertising relations.",
          ],
        },
        {
          title: "Six final questions",
          paragraphs: [
            "1) Is this research, clinical research, approved care, or private care? 2) Are my disease and condition included? 3) Do comparative studies support effects? 4) What are the main risks and unknowns? 5) What are the alternatives and aftercare plans? 6) What are the total costs and stopping terms? Society and credential names never replace these questions.",
          ],
        },
      ],
    },
  },
  zh: {
    "01-overview": {
      title: "学会是什么",
      description: "学会的目的、涉及领域，以及患者应如何定位。",
      sections: [
        {
          title: "学会的基本作用",
          paragraphs: [
            "日本再生医学学会（The Japanese Society for Regenerative Medicine）是以再生医学的进步、发展与培养、为人类健康与福祉做贡献为目的的一般社团法人。官方网站为研究者、医疗人员提供分享信息与发表成果的场所。",
            "学会本身不是医院或诊所，也不是直接向患者提供特定治疗的组织。可以理解为通过学术集会、会志、教育、认定与制度、安全性信息，为专家搭建共同基础的团体。",
          ],
        },
        {
          title: "再生医学不是一个治疗名称",
          paragraphs: [
            "设立宗旨将再生医学说明为积极利用细胞、以恢复功能障碍组织器官功能为目标的领域。细胞、组织、基因与材料等，方法与对象疾病各不相同。",
            "仅凭“使用干细胞”等说明，无法评价治疗的有效性与安全性。需要具体确认对象疾病、细胞与产品种类、研究阶段、给药方法、比较对象与观察期限。",
          ],
        },
        {
          title: "对读者的用途",
          paragraphs: [
            "学会官方网站是寻找专业一手信息的入口。但读官方网站并不能决定个人诊断与治疗是否合适。请把学会信息作为向主治医生提问的背景知识，以及确认制度与资格的线索使用。",
          ],
        },
      ],
    },
    "02-history": {
      title: "设立背景与沿革",
      description: "从细胞治疗研究会开始的学会历程与领域扩展。",
      sections: [
        {
          title: "从前身出发",
          paragraphs: [
            "据官方沿革，前身细胞治疗研究会于1992年4月成立，2001年5月解散并成立日本再生医学学会。2002年举办第一届学术总会并开始发行会志。",
            "这表明再生医学不是作为一种新技术突然出现，而是在细胞研究与治疗积累的背景下，专家讨论场所有组织地形成。",
          ],
        },
        {
          title: "与组织工程与牙科的合并",
          paragraphs: [
            "沿革记录2008年与日本组织工程学会合并、2009年与日本再生牙科论坛合并。再生医学不止于细胞，还与组织结构、材料与口腔牙科等不同专业相接。",
            "读文章与新闻时，确认是哪个专业领域的成果，有助于整理研究的意义与局限。",
          ],
        },
        {
          title: "法人化与学术基础",
          paragraphs: [
            "2012年法人化为一般社团法人，2015年创刊 Regenerative Therapy，2018年加入日本医学会。学会历史也是从发表场所发展为包含教育、认定、制度与专业期刊的学术基础的过程。",
          ],
        },
      ],
    },
    "03-academic-activities": {
      title: "学术集会、会志与教育",
      description: "学会分享成果、培养专家的机制。",
      sections: [
        {
          title: "学术集会的目的",
          paragraphs: [
            "学术集会中，研究者与医疗人员发表并讨论研究成果、临床经验、技术与制度课题。发表内容重要，但学会发表阶段并非全部是经同行评议的论文或成熟治疗。",
            "在新闻中看到学会发表时，确认发表形式、对象人数、比较对象、评价项目、随访期限、利益冲突与有无评议论文。不要仅凭醒目标题判断治疗效果。",
          ],
        },
        {
          title: "机构期刊与研究成果",
          paragraphs: [
            "官方菜单刊登机构期刊、过刊与通讯。专业期刊记录成果，成为后续研究参照的基础。",
            "读论文时不仅看标题与结论，还要看研究设计、对象、对照组、主要评价项目、不良事件、缺失与随访期限。有希望的结果到真正改善患者，还需阶段验证。",
          ],
        },
        {
          title: "教育内容的作用",
          paragraphs: [
            "学会还介绍认定制度的参考书与教育内容。面向专家的资料有助于深入学习细胞加工与法规，但有许多难懂术语。不懂之处请对照厚生劳动省、PMDA 与研究机构的患者资料，治疗说明请向医疗人员确认。",
          ],
        },
      ],
    },
    "04-certification": {
      title: "认定制度与资格的含义",
      description: "再生医学认定医、临床培养士等制度与患者易误解点。",
      sections: [
        {
          title: "面向多职业的制度",
          paragraphs: [
            "日本再生医学学会认定再生医学认定医、细胞培养加工设施管理士、高级临床培养士与临床培养士等。官方说明通过法规、伦理与细胞加工等教育项目和考试确认一定学识与能力。",
            "特点是不只看医生的诊疗能力，还区分加工设施管理、制造与质量管理、培养技术等。需要确认谁承担哪个环节的资格。",
          ],
        },
        {
          title: "再生医学认定医的要求",
          paragraphs: [
            "学会提出的认定医要求包括说明标准医疗内容的责任、细胞培养方法与性质知识、与疾病专科医生协作的适应判断、伦理与法律知识、充分经验等。",
            "这是为说明再生医学、进行恰当协作与判断的资格要求。仅凭有资格，不能保证特定治疗的有效性、安全性、费用效果与对患者的适应性。",
          ],
        },
        {
          title: "区分资格与治疗评价",
          paragraphs: [
            "考虑治疗时，除确认资格，还要确认对象疾病、治疗依据、批准·研究·自由诊疗定位、风险、替代方案与治疗后应对。资格是了解医疗者的一条信息，不是自动推荐治疗的印章。",
          ],
        },
      ],
    },
    "05-law-and-regulation": {
      title: "再生医学与法制度",
      description: "从患者视角整理安全性确保法、细胞加工与提供计划。",
      sections: [
        {
          title: "制度信息是思考安全的材料",
          paragraphs: [
            "新法相关信息刊登无菌操作、细胞保管、提供计划模板与人细胞加工产品质量安全性评价等资料。制度是为安全实施研究与医疗而设的手续与基准框架。",
            "有制度手续与个别治疗对自己有效安全是两回事。不要把法规与申报有无当作治疗效果的证明。",
          ],
        },
        {
          title: "注意改正法与旧用语",
          paragraphs: [
            "官方网站说明改正法于2025年5月31日施行，资料中可能残留改正前用语。需要确认制作与修订日期、用语定义，并对照厚生劳动省与 PMDA 的现行信息。",
          ],
        },
        {
          title: "患者可以提问的事",
          paragraphs: [
            "可以问属于哪部法律与制度、是研究还是诊疗、有无说明与同意文件、治疗后在哪里观察什么、紧急联系方式是哪里。回答含糊却催促签约时，请带回资料并咨询其他医疗人员。",
          ],
        },
      ],
    },
    "06-public-research": {
      title: "公共研究与产学官合作",
      description: "从研究与治疗的区别解读与 JST·AMED 合作的公共研究信息。",
      sections: [
        {
          title: "放置公共研究信息的意义",
          paragraphs: [
            "官方网站有 JST、厚生劳动科学特别研究、AMED 与再生医学国家联盟等的介绍。再生医学难由单一机构推进基础研究、临床研究、产品开发、规制与伦理。",
            "公共研究页面是了解学会参与的研究与支援全貌的入口。但被研究经费与公共项目采纳，不意味个别治疗有效性确立。",
          ],
        },
        {
          title: "区分研究阶段",
          paragraphs: [
            "用细胞与动物的临床前研究、以人为对象的临床研究、以申报为目标的开发与批准后诊疗，能回答的问题不同。确认以谁为对象、与什么比较、测量什么、随访多久。",
            "研究成果有通向未来治疗的可能，同时未必是患者现可利用治疗的依据。需要分开展望与确立。",
          ],
        },
        {
          title: "利益冲突与透明度",
          paragraphs: [
            "研究者与企业的关系、资金提供与发表者立场，是影响结果解释的信息。有利益冲突本身不使研究无效，但公开有无与独立验证、再现研究存在与否是判断材料。",
          ],
        },
      ],
    },
    "07-cell-processing": {
      title: "细胞加工设施与质量管理",
      description: "采集、加工、保管与给药工程，以及质量管理为何重要。",
      sections: [
        {
          title: "治疗背后的工程",
          paragraphs: [
            "使用细胞的医疗涉及采集、运输、培养加工、质量确认、保管、给药、记录与治疗后观察多个环节。在哪里、由谁、按什么步骤处理细胞，关系安全性与再现性。",
            "面向患者的说明易只强调给药场景，加工工程与质量管理说明同样重要。确认原料来源、防混淆、无菌操作、检验与偏离应对等。",
          ],
        },
        {
          title: "设施管理与人才认定",
          paragraphs: [
            "认定制度有细胞培养加工设施管理士与临床培养士等承担细胞加工的人才制度。这是为专业支撑处理细胞的设备、运营、质量管理与技术的机制。",
            "仅凭资格不能决定设施整体质量。要看运营记录、质量管理责任体制、检验结果、异常应对与治疗后随访是否一体说明。",
          ],
        },
        {
          title: "接受说明时的问题",
          paragraphs: [
            "请书面确认细胞是自体还是异体、采集到给药的期限、加工场所、质量确认项目、保管方法、无法使用时的处理，以及出问题时的联系方式。",
          ],
        },
      ],
    },
    "08-compensation": {
      title: "补偿制度与治疗后的准备",
      description: "整理自由诊疗与临床研究相关补偿制度，以及签约前确认事项。",
      sections: [
        {
          title: "补偿制度处理什么",
          paragraphs: [
            "官方网站有自由诊疗与临床研究各自再生医学支持保险的介绍。补偿制度是思考治疗与研究相关健康损害时保障的机制之一。",
            "有保险与补偿制度，不意味治疗无风险或保证效果。在说明与合同中确认对象事件、补偿范围、申请方法与除外情形。",
          ],
        },
        {
          title: "签约前确认的费用",
          paragraphs: [
            "自由诊疗不仅合计首次报价，还要合计采集、加工、给药、检查、复诊、住院、追加治疗与紧急应对费用。中止或未接受预定次数时的退款与取消条件同样重要。",
            "昂贵、有名设施、最新技术说明，都不是效果证明。说明当天不要签约，带回书面材料留出考虑时间。",
          ],
        },
        {
          title: "包含治疗后一起思考",
          paragraphs: [
            "确认治疗后观察期限、检查内容、结果由谁确认、不良事件联系方式、夜间假日应对，以及到其他医院就诊时的信息共享。不仅看治疗前说明，还要看治疗后计划是否具体。",
          ],
        },
      ],
    },
    "09-membership-and-education": {
      title: "会员制度与学习入口",
      description: "谁参加学会、能接触什么信息，用一般读者也能懂的方式整理。",
      sections: [
        {
          title: "个人与法人可参加的学会",
          paragraphs: [
            "日本再生医学学会广泛寻求理解并赞同宗旨的个人与法人加入。官方网站介绍接触会志、学会与最新信息，以及发表成果的机会。",
            "成为会员是参加研究、教育与交流的制度。不意味一般患者不入会就读不到公开资料。区分公开资料与会员专业信息使用。",
          ],
        },
        {
          title: "一般读者可用的信息",
          paragraphs: [
            "官方网站的新闻、设立宗旨、沿革、认定制度、新法相关信息与 FAQ 等为了解学会活动而公开。专业术语多的页面，先看标题与更新日期，只深挖必要主题会更易读。",
            "为找医疗机构而读时，不要仅凭认定信息下结论，结合医疗机构说明、对象疾病、费用、利益冲突与治疗后体制一起确认。",
          ],
        },
        {
          title: "把专业信息翻译给患者",
          paragraphs: [
            "学会作用以专家间信息共享为中心。患者不要把专业资料直接当广告与治疗说明接受，把不懂的词转化为问题使用为好。本指南附带官方资料定位与局限进行介绍。",
          ],
        },
      ],
    },
    "10-for-patients-and-reviewer": {
      title: "患者的读法与千原医生的审核",
      description: "为不混淆学会所属、医生审核与治疗依据的最后检查点。",
      sections: [
        {
          title: "学会所属是一条线索",
          paragraphs: [
            "医生所属日本再生医学学会，是了解其经历与专业关心的信息之一。但所属不意味学会批准个别治疗，也不意味学会保证治疗效果。",
            "本站刊登千原良友医生官方简介中记载的学会所属信息。所属信息与按文章的审核范围、审核日期与确认内容分开确认。",
          ],
        },
        {
          title: "医生审核的含义与局限",
          paragraphs: [
            "医生审核是确认文章医学表述、研究阶段与治疗区分、风险与替代方案说明等的工程。审核有无是提高文章说明责任的信息，不保证个别治疗有效性与安全性。",
            "文章页重要的是谁、何时、确认了什么范围。除审核者资格与所属，还要确认更新日期、参考资料、未确定点与广告关系。",
          ],
        },
        {
          title: "最后确认六个问题",
          paragraphs: [
            "①属于研究·临床研究·已批准医疗·自由诊疗中的哪一种，②自己的疾病与状态是否在对象内，③有无支撑效果的比较研究，④主要风险与未知点是什么，⑤其他选择与治疗后计划是什么，⑥总额与中止条件是什么。学会名与资格名不能成为省略这些问题的理由。",
          ],
        },
      ],
    },
  },
};
