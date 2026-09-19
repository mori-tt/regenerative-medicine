import type { SiteLocale } from "./locales";

export type InfoLocaleSection = { title: string; paragraphs: string[] };
export type InfoLocaleContent = {
  title: string;
  description: string;
  sections: InfoLocaleSection[];
};

function en(
  title: string,
  description: string,
  sections: [string, string[]][],
): InfoLocaleContent {
  return {
    title,
    description,
    sections: sections.map(([sectionTitle, paragraphs]) => ({
      title: sectionTitle,
      paragraphs,
    })),
  };
}

function zh(
  title: string,
  description: string,
  sections: [string, string[]][],
): InfoLocaleContent {
  return {
    title,
    description,
    sections: sections.map(([sectionTitle, paragraphs]) => ({
      title: sectionTitle,
      paragraphs,
    })),
  };
}

export const infoLocales: Record<SiteLocale, Record<string, InfoLocaleContent>> = {
  en: {
    about: en(
      "About this site",
      "Why this guide exists, who it is for, and how it is operated.",
      [
        [
          "A guide connecting regenerative medicine with you",
          [
            "Regenerative Medicine Guide is an information site for people who want to learn about regenerative medicine and stem cells. It organizes basic knowledge, how to read research, and questions to check before considering treatment, always with sources.",
            "It does not guarantee treatment outcomes or recommend any specific treatment for everyone.",
          ],
        ],
        [
          "Current operating status",
          [
            "At the official launch, the operator name, address, and contact will be disclosed as operator information. Before launch, please note that some pages describe preparations that are still in progress.",
          ],
        ],
        [
          "Editorial work and advertising",
          [
            "In the future, part of the operating costs may be covered by advertising revenue. Advertising payments never change article evaluations, and every ad is clearly labelled.",
          ],
        ],
      ],
    ),
    "editorial-policy": en(
      "Editorial policy",
      "What we value to deliver reliable and understandable information.",
      [
        [
          "1. Information you can trace to its evidence",
          [
            "We check materials from public agencies, research institutions, academic societies, and original papers, and list sources readers can consult. We distinguish the research stage, the patients studied, what is known, and what is still unknown.",
          ],
        ],
        [
          "2. Review by physicians",
          [
            "Formal medical articles are reviewed by physicians in the relevant specialty. We disclose the scope, date, specialty, and affiliation of each review, and never label an unreviewed draft as reviewed.",
          ],
        ],
        [
          "3. Updates and corrections are recorded",
          [
            "Each article shows its update date and is rechecked when medical knowledge or regulations change. Important corrections record what changed, why, and when. Error reports are accepted through the contact page.",
          ],
        ],
        [
          "4. Advertising and editorial work are separated",
          [
            "Ads are always labelled as advertising or PR. Conflicts of interest between advertisers and reviewers or authors are disclosed, and advertising payments are managed separately from editorial decisions.",
          ],
        ],
        [
          "5. A transparent production process",
          [
            "AI may assist drafting, but editors verify every source before publication and expert review is sought when needed. Medical decisions are never based on AI output alone.",
          ],
        ],
      ],
    ),
    supervision: en(
      "Medical review",
      "A transparent review system where reviewers and scope are visible.",
      [
        [
          "The review system is being prepared",
          [
            "Physician review is planned. No articles have completed review yet and no reviewer profiles are finalized. Only information with consent will be published once contracts and identity verification are complete.",
            "Articles by reviewer Yoshitomo Chihara are prepared under the same rule: scope and review dates are shown per article.",
          ],
        ],
        [
          "What reviewer profiles include",
          [
            "Name, affiliation, specialty, verified qualifications and career, a link to the profile, and the articles reviewed. Conflicts of interest with advertisers are also disclosed.",
          ],
        ],
        [
          "Each article records its review",
          [
            "Medical statements, consistency with cited sources, and wording about benefits and risks are checked. Articles carry the review date and scope, and are re-reviewed after major changes. Review does not guarantee individual treatment outcomes or safety.",
          ],
        ],
      ],
    ),
    advertising: en(
      "Advertising",
      "Delivering clinic information appropriately to people who want to learn.",
      [
        [
          "About advertising inquiries",
          [
            "Banner ads from clinics and medical institutions are planned for the future. Recruitment is still being prepared and no ads are currently served. Rates, periods, and the media kit will be published once operations are ready.",
          ],
        ],
        [
          "Planned ad placements",
          [
            "Placements below articles on the top page and in the sidebar or below the body on article pages are planned. Layouts keep readability on desktop and mobile and never obstruct medical information.",
          ],
        ],
        [
          "Content screening and labelling",
          [
            "The advertiser, landing page, wording, and period are checked before placement. Compliance with medical advertising laws and guidelines is verified individually, and claims that guarantee outcomes or assert superiority without evidence are rejected.",
            "Every ad is labelled, and payment never buys recommendations or reviewer endorsements in articles.",
          ],
        ],
        [
          "Steps to placement",
          [
            "Inquiry, screening of ad content and landing page, terms and contract confirmation, submission, display check, then launch. Wording that needs legal judgment is checked with specialists.",
          ],
        ],
      ],
    ),
    privacy: en(
      "Privacy policy",
      "How information received through the contact form and site operations is handled.",
      [
        [
          "Current site functions",
          [
            "Article search runs inside your browser. The contact form collects your name, email address, inquiry type, and message for replies, content verification, and operations. Access logs stored by the hosting provider follow that provider's policy.",
          ],
        ],
        [
          "Information received through inquiries",
          [
            "Form submissions are forwarded to the operator's email address. They are not stored in the site database, but may remain in mailboxes or backups. This is not a channel for medical care, so please do not send detailed medical information such as histories or test results.",
          ],
        ],
        [
          "Preparation for the official launch",
          [
            "The operator, address, contact, retention periods, security measures, third-party sharing, and disclosure request procedures will be finalized to match actual operations before launch. When analytics or ad services are introduced, the data sent, recipients, and purposes will be explained.",
          ],
        ],
      ],
    ),
    contact: en(
      "Contact",
      "Feedback on articles and inquiries about review and advertising.",
      [
        [
          "Contact desk",
          [
            "We accept comments on article content, interview and review requests, advertising inquiries, and questions about operations. Medical consultations, diagnoses, and appointment bookings are not handled here.",
          ],
        ],
        [
          "Reporting article issues",
          [
            "Please share the article URL, the relevant passage, your comment, and the source if you have a reference. Do not include personal symptoms or test results. Editors review every report.",
            "The contact form on the Japanese page is currently the primary channel. English and Chinese inquiries can be sent in the message field.",
          ],
        ],
      ],
    ),
    sources: en(
      "Sources and references",
      "Public information from universities, research institutes, societies, and regulators.",
      [
        [
          "Primary sources we check",
          [
            "CiRA at Kyoto University for iPS cell basics, the Ministry of Health, Labour and Welfare for regenerative medicine systems, PMDA for approved products, AMED and JST for public research, and the Japanese Society for Regenerative Medicine for academic and regulatory information.",
          ],
        ],
        [
          "How to use this page",
          [
            "The Japanese sources page lists every reference with links. Source materials are updated by their publishers, so always check the original publication date alongside our article update dates.",
          ],
        ],
      ],
    ),
    guide: en(
      "Getting started: a learning guide",
      "Where to start, reading paths by goal, and how to use this site.",
      [
        [
          "If you read only one article",
          [
            "Start with “What is regenerative medicine? Basic knowledge to begin with.” Once you understand the term and the difference between research and care, every later article becomes much easier.",
            "It takes about two minutes. Look up unfamiliar words in the glossary as you go.",
          ],
        ],
        [
          "Reading paths by goal",
          [
            "To learn mechanisms, read “The basics” then “Stem cells.” To consider treatment, start with the question lists, cost, and risk articles under “Considering treatment.”",
            "If a news story raised a question, the “Research and news” reading guides help. Category pages let you choose by theme.",
          ],
        ],
        [
          "How to use this site",
          [
            "Each article opens with key points. Reading only the key points is fine when time is short. Use the table of contents to jump to sections of interest when you want detail.",
            "Search combines keywords and categories. Individual medical consultations are not offered, so always discuss treatment decisions with a physician.",
          ],
        ],
      ],
    ),
    glossary: en(
      "Glossary: words in regenerative medicine",
      "Stem cells, differentiation, culture. Words found in news and brochures explained.",
      [
        [
          "Words about cells",
          [
            "Stem cell: a general term for cells capable of self-renewal and differentiation, distinguished by origin and properties. Pluripotent stem cell: stem cells able to become many cell types, such as iPS and ES cells. Somatic stem cell: stem cells found in body tissues, such as hematopoietic and mesenchymal stem cells.",
            "Differentiation: a stem cell becoming a cell with a specific role. Self-renewal: producing cells with the same properties. Culture: growing cells outside the body.",
          ],
        ],
        [
          "Words about treatment and research",
          [
            "Transplantation: returning cells or tissue to the body. Autologous transplantation uses your own cells; allogeneic transplantation uses donor cells. Clinical trial: a study conducted toward approval. Clinical research: medical research involving people in general. Indication: the disease or condition a treatment targets.",
            "Regenerative medical products: a category of cell-based products approved under the Pharmaceuticals and Medical Devices Act. The Act on the Safety of Regenerative Medicine: the law governing review procedures and delivery systems for cell therapies including private practice.",
          ],
        ],
        [
          "Words about reading information",
          [
            "Evidence: accumulated research, with different strength by type, from case reports and observational studies to randomized trials. Informed consent: agreement based on sufficient explanation. Second opinion: an additional opinion sought from another physician.",
            "Meanings shift with context. When treatment explanations use unfamiliar words, ask the medical staff on the spot.",
          ],
        ],
      ],
    ),
    faq: en(
      "Frequently asked questions",
      "Costs, pain, visits, and where to consult. Answers to expected reader questions.",
      [
        [
          "Questions about learning",
          [
            "Q. Where should I start? A. Begin with the learning guide and “What is regenerative medicine?” Q. Is the review scope shown? A. Each article lists its update date, sources, and editorial checks.",
            "Q. What is the difference between news and articles? A. News reports new announcements quickly, while explainer articles organize background and limitations. Reading both together is recommended.",
          ],
        ],
        [
          "Questions about considering treatment",
          [
            "Q. Can it be used for my disease? A. Each treatment has defined indications. This site cannot judge individual cases, so consult your primary physician or a specialist.",
            "Q. How much does it cost? A. Insurance, trials, and private care work differently. See the cost and insurance article for checklists. Q. Is it painful or does it need hospitalization? A. It depends on collection and administration. Ask the provider for the concrete process and burden.",
          ],
        ],
        [
          "Questions about where to consult",
          [
            "Q. Can I consult this site about my care? A. Individual diagnosis and treatment consultations are not offered. Please consult your family doctor or a specialist first.",
            "Q. What if I find an error? A. Share the URL and passage through the contact page. Editors review every report.",
          ],
        ],
      ],
    ),
    safety: en(
      "Safety first",
      "A yardstick for comparing benefits and risks calmly.",
      [
        [
          "Safety is checked per treatment",
          [
            "Regenerative medicine cannot be judged as safe or dangerous as a whole. Evaluations change with the cell type, manufacturing, administration, target disease, and delivery system.",
            "Start from what harms have been reported, how often, and how long patients were followed.",
          ],
        ],
        [
          "Three records to check",
          [
            "First, procedure records: whether review and notification under the law were completed. Second, data records: whether supporting studies and adverse event reports exist. Third, system records: whether emergency responses and follow-up are defined.",
            "Look for these in brochures and consent documents.",
          ],
        ],
        [
          "Signals to pause",
          [
            "No explanation of evidence, no explanation of risks, pressure to sign quickly, or refusal to allow comparison with alternatives are reasons to stop.",
            "Opinions from disinterested third parties such as your primary physician or a second opinion help.",
          ],
        ],
      ],
    ),
    regulation: en(
      "Rules and systems",
      "The Safety Act, the PMD Act, and medical advertising. Frameworks to know before seeking treatment.",
      [
        [
          "Roles of the two laws",
          [
            "The Act on the Safety of Regenerative Medicine sets review, notification, and delivery requirements for providing cell therapies through private practice or clinical research. The Pharmaceuticals and Medical Devices Act governs approval and post-marketing surveillance of regenerative medical products.",
            "Which framework a treatment falls under changes which documents to check.",
          ],
        ],
        [
          "Provision plans and certified committees",
          [
            "Provision under the Safety Act involves review by a certified committee and submission of a provision plan to the Ministry of Health, Labour and Welfare. Providers can state the procedure names and numbers in their explanations.",
            "Completing procedures signals a system is in place, but it does not guarantee safety.",
          ],
        ],
        [
          "Medical advertising rules",
          [
            "Advertising by medical institutions is regulated by the Medical Care Act and guidelines. Displays of unsubstantiated effects or exaggerated superiority are inappropriate. Check sources and wording carefully when reading ads.",
            "Read ads separately from editorial articles. This site always labels ads as such.",
          ],
        ],
      ],
    ),
    terms: en(
      "Terms of use",
      "Requests for using this site. A draft before the official launch.",
      [
        [
          "Use of information",
          [
            "Content provides general information and is not a substitute for diagnosis or treatment. Always consult a physician for individual decisions. Articles are updated and their timeliness and completeness are not guaranteed.",
            "When source materials are updated, the originals take precedence.",
          ],
        ],
        [
          "Quotations and links",
          [
            "Brief quotations with clear attribution and links to the top page or articles are generally welcome. Misleading excerpts and displays that could be mistaken for advertising should be avoided.",
            "Conditions for commercial reproduction and bulk API access will be added at the official launch.",
          ],
        ],
        [
          "Disclaimer and changes",
          [
            "This site provides general information and does not exclude liability that cannot be excluded by law, including cases of willful misconduct or gross negligence by the operator. Terms and content may change without notice, with important changes announced on this page.",
            "Questions can be sent through the contact page.",
          ],
        ],
      ],
    ),
    corrections: en(
      "Corrections and updates",
      "How errors are handled and how articles are updated.",
      [
        [
          "Handling corrections",
          [
            "When factual errors are found, content is verified and promptly fixed, with important corrections recording the passage, reason, and date inside the article. Minor wording fixes and substantive corrections are handled separately.",
          ],
        ],
        [
          "Update guidelines",
          [
            "Related articles are rechecked when systems change or new findings emerge. Use each article's update date to judge freshness. Note publication timing when citing older information.",
          ],
        ],
        [
          "How to report issues",
          [
            "Share the URL, passage, comment, and source reference through the contact page. Editors verify reports and consult reviewers when needed.",
          ],
        ],
      ],
    ),
    citations: en(
      "Citations and reuse",
      "Conditions for quoting, linking, and reproducing articles.",
      [
        [
          "About links",
          [
            "Links to the top page and articles are generally welcome without prior contact. Quoting in misleading contexts and displays suggesting an official relationship should be avoided.",
          ],
        ],
        [
          "Quotation conditions",
          [
            "Brief quotations with attribution (site name, article title, URL) are allowed. Full-text reproduction, translated reproduction, and bulk commercial use will have separate conditions at the official launch.",
          ],
        ],
        [
          "Figures and images",
          [
            "Please do not reproduce figures or illustrations without permission. Educational or press use can be discussed through the contact page.",
          ],
        ],
      ],
    ),
    disclaimer: en(
      "Using medical information safely",
      "Disclaimers and requests for safe use of this site's information.",
      [
        [
          "Not a substitute for diagnosis or treatment",
          [
            "Content provides general explanations and does not indicate individual diagnoses or treatment plans. Always consult a physician about symptoms and treatment decisions. Seek care promptly in emergencies.",
          ],
        ],
        [
          "Limits of information",
          [
            "Medical knowledge and systems change. Check article update dates and original publication timing, and compare with the latest information. Report errors or questions through the contact page.",
          ],
        ],
        [
          "Separation from advertising",
          [
            "Ads are always labelled and kept separate from editorial articles. Ad content is the advertiser's responsibility and does not represent this site's recommendations.",
          ],
        ],
      ],
    ),
    accessibility: en(
      "Web accessibility",
      "Our approach and efforts toward a site everyone can read.",
      [
        [
          "What we aim for",
          [
            "We consider text size, color contrast, keyboard operation, and screen-reader reading. Technical terms carry explanations, and key points come first.",
          ],
        ],
        [
          "Current measures",
          [
            "Heading structures are organized, alternative text is added, and generous line spacing and margins are kept. Skip links and breadcrumbs ease navigation.",
          ],
        ],
        [
          "Accepting improvements",
          [
            "If any passage is hard to read or operate, please tell us through the contact page. Feedback is addressed step by step.",
          ],
        ],
      ],
    ),
    "site-guide": en(
      "Site map and page list",
      "A guide to every page, searchable by purpose.",
      [
        [
          "Finding articles",
          [
            "The article list shows every article, category pages group them by theme, and keyword search narrows by words and categories. The learning guide and basics category are recommended first.",
          ],
        ],
        [
          "Operation and policy pages",
          [
            "About, editorial policy, medical review, advertising, terms, privacy, corrections, citations, disclaimers, and accessibility pages disclose how the site is operated.",
          ],
        ],
        [
          "When you need help",
          [
            "The FAQ and glossary answer questions. Contact the operators through the contact page for anything else. Medical consultations are not handled, so discuss health matters with medical institutions.",
          ],
        ],
      ],
    ),
    updates: en(
      "Updates",
      "New articles and site improvements.",
      [
        [
          "Recent updates",
          [
            "The site now organizes articles by category with reading-order guides. Each article page shows its update date.",
          ],
        ],
        [
          "Upcoming work",
          [
            "Completion of physician review, rechecking of sources, added figures, and search improvements are planned. Display switches sequentially as review completes.",
          ],
        ],
        [
          "Handling past notices",
          [
            "After the official launch, major changes and corrections are announced on this page with dates and details.",
          ],
        ],
      ],
    ),
  },
  zh: {
    about: zh(
      "关于本网站",
      "介绍本指南的目的、适用读者和运营方式。",
      [
        [
          "连接再生医学与你的信息指南",
          [
            "再生医学指南是为想要了解再生医学和干细胞的人准备的信息网站。整理基础知识、研究阅读方法、考虑治疗前的确认事项，并附上信息来源。",
            "本网站不保证治疗效果，也不一律推荐特定治疗。",
          ],
        ],
        [
          "目前的运营状况",
          [
            "正式发布时，将公开运营者名称、地址和联系方式等运营者信息。发布前请注意，部分页面描述的是仍在准备中的事项。",
          ],
        ],
        [
          "关于编辑与广告",
          [
            "将来可能用部分广告收入维持运营。广告的有无和金额不会改变文章评价，所有广告都会清楚标明。",
          ],
        ],
      ],
    ),
    "editorial-policy": zh(
      "编辑方针",
      "为提供可靠、易懂的信息，写文章时重视的事项。",
      [
        [
          "1. 提供可以追溯证据的信息",
          [
            "核对公共机构、研究机构、学会资料和原始论文，并刊登读者可以查阅的来源。区分研究阶段、研究对象人群、已明确事项和未知事项进行说明。",
          ],
        ],
        [
          "2. 由医生进行内容审核",
          [
            "正式医疗解说文章由相关专业领域的医生审核。公开审核范围、审核日期、专业领域和所属，未完成审核的原稿不会标注为“已审核”。",
          ],
        ],
        [
          "3. 记录更新与勘误",
          [
            "每篇文章显示更新日期，医学知识或制度变化时重新核对。重要勘误会在文章中记录位置、理由和日期。错误指正可通过联系页面提交。",
          ],
        ],
        [
          "4. 区分广告与编辑",
          [
            "广告会标明“广告”或“PR”。如广告主与审核者、作者有利害关系会予以公开，刊登费用与编辑判断分开管理。",
          ],
        ],
        [
          "5. 公开制作过程",
          [
            "写稿时可能辅助使用 AI，但发布前编辑会核对来源，必要文章会经专家确认。不会仅以 AI 输出作为医学判断依据。",
          ],
        ],
      ],
    ),
    supervision: zh(
      "医学审核",
      "审核者与审核范围清晰可见的透明审核体制。",
      [
        [
          "审核体制正在准备中",
          [
            "计划由医生进行审核。目前还没有完成审核的文章，也没有确定的审核医生介绍。合同与身份确认完成后，只刊登获得许可的信息。",
            "千原良友医生的文章同样按此规则管理，按文章显示审核范围和审核日期。",
          ],
        ],
        [
          "审核医生介绍将刊登的信息",
          [
            "计划刊登姓名、所属、专业领域、已确认的资格与经历、个人简介链接和审核过的文章。如与广告主有利害关系，也会说明。",
          ],
        ],
        [
          "按文章记录审核",
          [
            "确认文章整体医学表述、与引用信息的一致性、效果与风险表述。刊登审核日期和确认范围，内容大幅变更时重新审核。审核不保证个别治疗效果和安全性。",
          ],
        ],
      ],
    ),
    advertising: zh(
      "广告刊登",
      "为想了解再生医学的人恰当传达医疗机构信息。",
      [
        [
          "关于广告刊登咨询",
          [
            "将来计划接受诊所、医疗机构等的横幅广告。目前正在准备招募，尚未投放广告。费用、刊登期限和媒体资料将在运营体制完善后公开。",
          ],
        ],
        [
          "计划中的刊登位置",
          [
            "设想在首页文章下方、文章详情侧边栏和正文下方刊登。在电脑和手机上保持易读性，采用不妨碍医疗信息阅读的位置。",
          ],
        ],
        [
          "刊登内容的审核与标示方针",
          [
            "确认投放主体、链接目标、表述和刊登期限后刊登。逐一确认是否符合医疗广告相关法规和指南，不接受保证治疗效果或无根据的优良性表述。",
            "会标明广告，与编辑文章区分。不会设立通过付费在文章中获得推荐或审核者推荐的机制。",
          ],
        ],
        [
          "刊登流程",
          [
            "计划流程为：咨询→确认广告内容与链接→确认条件与合同→提交素材→确认显示→开始刊登。需要个别法律判断的表述会向专家确认。",
          ],
        ],
      ],
    ),
    privacy: zh(
      "隐私政策",
      "关于通过咨询表单等获取信息的处理方式。",
      [
        [
          "本站当前功能",
          [
            "文章搜索在浏览器的本地执行。咨询表单获取姓名、邮箱、咨询类别和正文，用于回复、文章内容核对和运营对应。托管服务商保存的访问日志遵循该服务商的处理方式。",
          ],
        ],
        [
          "咨询中收到的信息",
          [
            "表单内容会转发到运营者邮箱。不保存在站内数据库，但可能残留在邮箱或备份中。本窗口不处理诊疗事务，请不要发送病史、检查结果等详细医疗信息。",
          ],
        ],
        [
          "正式发布时的完善",
          [
            "运营主体、地址、联系方式、保存期限、安全管理、第三方提供、公开等请求方式，将结合实际运营体制确定并在发布前更新。引入访问分析或广告服务时，会说明发送的信息、发送对象和利用目的。",
          ],
        ],
      ],
    ),
    contact: zh(
      "联系我们",
      "关于文章意见、审核、广告刊登咨询的窗口。",
      [
        [
          "咨询窗口",
          [
            "受理文章内容指正、采访与审核、广告刊登、运营相关联系。不处理医疗咨询、诊断和治疗预约。",
          ],
        ],
        [
          "关于文章内容的指正",
          [
            "请告知对象文章 URL、相关位置、指正内容，如有参考资料请提供来源。请不要写个人症状和检查结果，编辑会核对内容。",
            "目前以日文页面的咨询表单为主要渠道，英文和中文咨询可在正文栏填写。",
          ],
        ],
      ],
    ),
    sources: zh(
      "信息来源与参考网站",
      "以大学、研究机构、学会、行政和监管机构的公开信息为中心进行核对。",
      [
        [
          "核对的主要来源",
          [
            "京都大学 iPS 细胞研究所 CiRA 的 iPS 基础知识、厚生劳动省的再生医学制度、PMDA 的已批准产品、AMED 和 JST 的公共研究、日本再生医学学会的学术与制度信息。",
          ],
        ],
        [
          "本页面的使用方法",
          [
            "日文的来源页面列出全部参考文献与链接。来源资料会由发布方更新，请结合原文发布时间和本文更新日期一起确认。",
          ],
        ],
      ],
    ),
    guide: zh(
      "初次阅读指南：学习方法",
      "从哪里读起？按目的的学习顺序和本站使用方法。",
      [
        [
          "如果只读一篇文章",
          [
            "请先读《什么是再生医学？初次需要了解的基础知识》。理解词语含义和研究与治疗的区别后，其他文章会好读得多。",
            "约需 2 分钟。遇到不懂的词，可边查术语表边阅读。",
          ],
        ],
        [
          "按目的的学习顺序",
          [
            "想学机制的人按“再生医学基础”→“认识干细胞”的顺序，想考虑治疗的人从“考虑治疗时”的问题集、费用和风险文章读起。",
            "因新闻产生疑问的人可读“研究与新闻”的阅读方法系列。可从分类页面选择感兴趣的主题。",
          ],
        ],
        [
          "本站的使用方法",
          [
            "每篇文章开头有要点总结。时间不够时只读要点也可以。想详细了解时可从目录跳到感兴趣的章节。",
            "文章搜索可组合关键词与分类。本站不处理个别医疗咨询，治疗判断请务必咨询医生。",
          ],
        ],
      ],
    ),
    glossary: zh(
      "术语表：再生医学用语",
      "干细胞、分化、培养……解释新闻和说明资料中出现的词语。",
      [
        [
          "关于细胞的词语",
          [
            "干细胞：具有自我复制和分化能力的细胞的总称，按来源和性质区分。多能干细胞：能成为身体多种细胞的干细胞，如 iPS 细胞和 ES 细胞。体干细胞：存在于身体组织中的干细胞，如造血干细胞和间充质干细胞等。",
            "分化：干细胞成为具有特定功能的细胞。自我复制：产生与自己性质相同的细胞。培养：在体外扩增细胞。",
          ],
        ],
        [
          "关于治疗与研究的词语",
          [
            "移植：将细胞或组织放回体内。用自己的细胞为自体移植，用他人细胞为异体移植。临床试验：以获批为目标进行的临床试验。临床研究：以人为对象的医学研究的总称。适应症：该治疗针对的疾病或状态。",
            "再生医学产品：在《药品医疗器械法》下获批的、使用细胞等的产品类别。《再生医学安全性确保法》：规定自由诊疗等中细胞治疗提供体制和审查手续的法律。",
          ],
        ],
        [
          "关于信息阅读的词语",
          [
            "证据：研究的积累，按病例报告、观察性研究、随机对照试验等种类，强度不同。知情同意：在获得充分说明基础上的同意。第二诊疗意见：向另一位医生寻求的第二意见。",
            "词语含义会随语境变化。治疗说明中有不懂的词，请当场向医务人员确认。",
          ],
        ],
      ],
    ),
    faq: zh(
      "常见问题",
      "费用、疼痛、就诊、咨询去向。整理读者可能提出的问题。",
      [
        [
          "关于学习方法的问题",
          [
            "问：从哪里读起？答：请先读《初次指南：学习方法》和《什么是再生医学？》。问：能看到文章的确认范围吗？答：每篇文章记载更新日期、来源和编辑确认事项。",
            "问：新闻和文章有什么区别？答：新闻是新发表的速报，解说文章是包含背景与局限的整理。建议两者结合阅读。",
          ],
        ],
        [
          "关于考虑治疗的问题",
          [
            "问：能用于我的病吗？答：每种治疗都有适应症。本站无法做个别判断，请咨询主治医生或相关疾病的专科医生。",
            "问：费用大概多少？答：保险、临床试验、自由诊疗的机制不同。“费用与保险”一文整理了确认项目。问：会痛或住院吗？答：因采集和给药方式而异。请向提供机构确认具体流程与负担。",
          ],
        ],
        [
          "关于咨询去向的问题",
          [
            "问：能向本站做医疗咨询吗？答：不处理个别诊断与治疗咨询。请先咨询家庭医生或相关疾病的专科医疗机构。",
            "问：发现错误怎么办？答：请通过联系页面告知对象 URL 与相关位置，编辑会核对。",
          ],
        ],
      ],
    ),
    safety: zh(
      "安全性",
      "为冷静比较效果与风险，提供安全性的标尺。",
      [
        [
          "安全性按每种治疗确认",
          [
            "不能笼统说“再生医学安全/危险”。细胞种类、制作方法、给药方式、目标疾病和实施体制的组合不同，评价也不同。",
            "确认的起点是：报告了哪些伤害、频率如何、进行了多长期随访。",
          ],
        ],
        [
          "想确认的三项记录",
          [
            "一是手续记录：是否经过法规规定的审查和申报；二是数据记录：是否有依据研究和副作用报告；三是体制记录：是否规定了紧急应对和治疗后随访。",
            "看看说明资料和同意文件中是否写明这些。",
          ],
        ],
        [
          "犹豫时的信号",
          [
            "没有依据说明、没有风险说明、催促签约、不让比较其他选择——出现这些迹象请停下来。",
            "听取主治医生或第二诊疗意见等无利害第三方意见会有帮助。",
          ],
        ],
      ],
    ),
    regulation: zh(
      "制度与法规",
      "安全性确保法、药机法、医疗广告。在寻找治疗前想了解的框架。",
      [
        [
          "两部法律的作用",
          [
            "《再生医学安全性确保法》规定以自由诊疗或临床研究提供细胞治疗时的审查、申报和实施体制。《药品医疗器械法（药机法）》规定作为再生医学产品的批准和上市后调查机制。",
            "考虑中的治疗属于哪个框架，决定了需要确认的资料不同。",
          ],
        ],
        [
          "提供计划与认定委员会",
          [
            "在安全性确保法下的提供，需要经过认定再生医学委员会审查、向厚生劳动省提交提供计划等手续。可在提供机构的说明中确认手续名称与编号。",
            "经过手续是了解体制的线索，但不是安全性的保证。",
          ],
        ],
        [
          "医疗广告规则",
          [
            "医疗机构广告受医疗法和指南规制，无根据的效果表述和优良性夸大并不恰当。看广告时注意有无来源和表述是否严谨。",
            "广告与编辑文章分开阅读。本站也坚持广告必须标明的方针。",
          ],
        ],
      ],
    ),
    terms: zh(
      "使用条款",
      "使用本站时的约定。正式发布前的草案。",
      [
        [
          "关于信息利用",
          [
            "刊登信息以提供一般信息为目的，不能代替诊断与治疗。个别判断请务必咨询医生。文章内容会更新，不保证最新性和完整性。",
            "来源资料更新时，以来源方为准。",
          ],
        ],
        [
          "关于引用与链接",
          [
            "在标明来源基础上的简短引用，以及首页、文章的链接原则上欢迎。但请避免易引起误解的截取和易被误认为广告的标示。",
            "正式发布时将追加营利性转载和 API 大量获取的条件。",
          ],
        ],
        [
          "免责与变更",
          [
            "本站以提供一般信息为目的，不免除运营者因故意或重大过失等、依法不能免责的责任。条款与刊登内容可能不经预告变更，重要变更将在本页通知。",
            "不明事项请通过联系页面联系。",
          ],
        ],
      ],
    ),
    corrections: zh(
      "勘误与更新",
      "公开出错时的应对和文章更新规则。",
      [
        [
          "勘误应对",
          [
            "发现事实错误时，核对内容后迅速修正，重要勘误在文章中记录勘误位置、理由和日期。区分轻微文字修正与涉及内容的勘误处理。",
          ],
        ],
        [
          "更新标准",
          [
            "制度变更或出现新知识时，重新核对相关文章。请以每篇文章的更新日期判断信息新鲜度。引用旧信息时注意发表时间。",
          ],
        ],
        [
          "指正方法",
          [
            "请通过联系页面告知对象 URL、相关位置、指正内容和参考资料来源。编辑核对，必要时向审核者确认。",
          ],
        ],
      ],
    ),
    citations: zh(
      "引用与转载",
      "整理文章引用、链接和转载的条件。",
      [
        [
          "关于链接",
          [
            "原则上欢迎链接首页和各文章，无需事先联系。但请避免在易引起误解的语境中引用，或假装官方关系的标示。",
          ],
        ],
        [
          "引用条件",
          [
            "在标明来源（网站名、文章名、URL）基础上的简短引用可行。全文转载、翻译转载和营利性大量利用，将在正式发布时另定条件。",
          ],
        ],
        [
          "图片的处理",
          [
            "站内图版和插图请勿擅自转载。出于教育、报道目的的使用请通过联系页面咨询。",
          ],
        ],
      ],
    ),
    disclaimer: zh(
      "重要说明",
      "为安全使用本站信息，关于免责与请求的说明。",
      [
        [
          "不能代替诊断与治疗",
          [
            "刊登信息为一般解说，不表示个别诊断和治疗方针。症状与治疗判断请务必咨询医生。紧急时请迅速到医疗机构就诊。",
          ],
        ],
        [
          "信息的局限",
          [
            "医学知识与制度会变化。请确认文章更新日期与来源发表时间，并与最新信息对照。刊登内容有误或不明之处，请通过联系告知。",
          ],
        ],
        [
          "与广告的区分",
          [
            "广告必须标明，与编辑文章区分。广告内容由广告主负责，不表示本站推荐。",
          ],
        ],
      ],
    ),
    accessibility: zh(
      "无障碍",
      "以人人易读为目标的举措与想法。",
      [
        [
          "目标",
          [
            "考虑文字大小、颜色对比、键盘操作和读屏朗读。专业术语附带说明，坚持先展示要点的结构。",
          ],
        ],
        [
          "目前的应对",
          [
            "整理标题结构、添加替代文本、确保足够行距与留白。通过跳转正文链接和面包屑方便移动。",
          ],
        ],
        [
          "接受改进",
          [
            "如有难读或难操作之处，请通过联系页面告知。将根据反馈依次改进。",
          ],
        ],
      ],
    ),
    "site-guide": zh(
      "网站地图",
      "本站全部页面的指南，可按目的查找。",
      [
        [
          "查找文章",
          [
            "文章一览页可找全部文章，分类页可按主题查找，关键词搜索可组合词语与分类。推荐先看学习指南与基础分类。",
          ],
        ],
        [
          "运营与方针页面",
          [
            "在关于本站、编辑方针、医学审核、广告刊登、使用条款、隐私政策、勘误与更新、引用与转载、重要说明、无障碍等页面公开运营想法。",
          ],
        ],
        [
          "遇到困难时",
          [
            "常见问题与术语表可消除疑问，仍需联系运营时请到联系页面。医疗咨询不予处理，身体问题请咨询医疗机构。",
          ],
        ],
      ],
    ),
    updates: zh(
      "更新信息",
      "汇总文章新增与网站改进的通知。",
      [
        [
          "最近的更新",
          [
            "按分类整理文章并完善阅读顺序指南。每篇文章的更新日期显示在文章页。",
          ],
        ],
        [
          "今后的计划",
          [
            "计划完成医生审核、重新精查来源、追加图版和改进搜索功能。从完成审核的文章起依次切换显示。",
          ],
        ],
        [
          "过去通知的处理",
          [
            "正式发布后，将在本页通知重大变更与勘误，记录日期与变更内容。",
          ],
        ],
      ],
    ),
  },
};
