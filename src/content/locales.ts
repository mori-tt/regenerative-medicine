export type SiteLocale = "en" | "zh";

export const localizedHome = {
  en: {
    eyebrow: "KNOWLEDGE FOR YOUR NEXT STEP",
    title: ["Understand regenerative medicine.", "Make your next decision", "with clarity."],
    intro: "Clear, careful information about regenerative medicine and stem cells—what is known, what is still being studied, and what to ask your doctor.",
    start: "Start with the basics", footnote: "Understanding comes before making a medical decision.", visual: "Abstract cell illustration", floating: "Complex ideas, explained clearly.", floatingSmall: "A reader-first guide to regenerative medicine", topics: "Explore topics", topicTitle: "Learn at your own pace.", topicCaption: "Choose a subject to begin.", guideEyebrow: "START HERE", guideTitle: "What is regenerative medicine?", guideBody: "A careful introduction to the difference between research, approved products, and individual treatment decisions.", guideLink: "Read the introduction", journal: "Build your understanding step by step.", promise: "Evidence, limitations, and questions to ask are shown together.", disclaimer: "This site provides general information, not diagnosis or treatment. Please consult a qualified healthcare professional for personal medical decisions.",
    categories: [["The basics", "Start with the essential concepts and vocabulary."], ["Stem cells", "Learn how iPS cells, ES cells, and somatic stem cells differ."], ["Considering treatment", "Questions about evidence, safety, cost, and consent."], ["Research & news", "How to read research results without overestimating them."]],
  },
  zh: {
    eyebrow: "KNOWLEDGE FOR YOUR NEXT STEP",
    title: ["了解再生医学。", "为下一步选择，", "建立清晰的理解。"],
    intro: "用清晰、谨慎的方式介绍再生医学与干细胞：哪些已经明确，哪些仍在研究，以及就诊时可以询问什么。",
    start: "从基础开始", footnote: "充分了解，是做出医疗决定的第一步。", visual: "细胞主题的抽象插画", floating: "把复杂内容讲清楚。", floatingSmall: "以读者为中心的再生医学指南", topics: "探索主题", topicTitle: "按照自己的节奏学习。", topicCaption: "选择一个主题开始阅读。", guideEyebrow: "从这里开始", guideTitle: "什么是再生医学？", guideBody: "介绍研究、已批准产品和个人治疗决定之间的重要区别。", guideLink: "阅读入门文章", journal: "一步一步加深理解。", promise: "同时说明证据、局限性以及可以向医生询问的问题。", disclaimer: "本网站提供一般性信息，不构成诊断或治疗建议。涉及个人医疗决定时，请咨询有资质的医疗专业人员。",
    categories: [["再生医学基础", "从基本概念和常用词汇开始。"], ["认识干细胞", "了解 iPS 细胞、ES 细胞和体性干细胞的区别。"], ["考虑治疗时", "整理证据、安全性、费用和知情同意相关问题。"], ["研究与新闻", "学习如何阅读研究结果，避免过度解读。"]],
  },
} as const;

export type LocalizedArticle = { title: string; description: string; category: string; points: string[]; sections: [string, string, string][] };
export const localizedArticle: Record<"en" | "zh", LocalizedArticle> = {
  en: {
    title: "What Is Regenerative Medicine? A Careful Introduction", description: "A plain-language guide to the term, the difference between research and care, and questions to ask before considering treatment.", category: "The basics",
    points: ["The term regenerative medicine does not by itself prove effectiveness or safety.", "Research findings and treatment available to patients must be checked separately.", "A personal treatment decision requires individual medical assessment."],
    sections: [["An entry point to regenerative medicine", "Regenerative medicine is a field that aims to restore damaged tissues or functions using cells, tissues, biomaterials, genes, or related approaches. It is not one single treatment.", "Identify what is being restored, which cells or materials are used, and whether the information describes laboratory work, animal research, a clinical study, or an approved medical product."], ["Research is not the same as available care", "A result in cells or animals can be an important scientific step without proving that a treatment benefits people. Human studies need to be read with their participants, comparison group, outcome measures, follow-up period, and limitations in mind.", "The phrase ‘uses stem cells’ is not enough to evaluate a treatment. Ask which disease was studied, how the cells were manufactured and tested, and what is still unknown."], ["Questions before considering treatment", "Ask about the expected benefit, the evidence supporting it, possible harms, alternatives, total cost, and what happens if the treatment does not help.", "This site does not diagnose or recommend an individual treatment. Discuss personal decisions with your treating physician or a relevant specialist."], ["How to connect this knowledge to care", "Basic knowledge is only one part of a medical decision. Separate the purpose of treatment, the evidence for benefit, the possible harms, and the alternatives instead of judging by the word ‘regenerative’ alone.", "Turn unclear terms into specific questions about the target patient, method, evaluation period, and uncertainties."], ["A practical checklist", "Check whether the information concerns people, how many participants were included, how long they were followed, and whether harms are reported alongside benefits.", "Do not start or stop treatment based only on this article. Confirm current regulatory and product information with official sources such as MHLW or PMDA."]],
  },
  zh: {
    title: "什么是再生医学？谨慎理解基础知识", description: "用通俗语言介绍再生医学、研究与临床治疗的区别，以及考虑治疗前可以询问的问题。", category: "再生医学基础",
    points: ["“再生医学”这个词本身不能证明疗效或安全性。", "研究成果与患者可以接受的治疗必须分别确认。", "个人治疗决定需要结合具体情况进行医学评估。"],
    sections: [["了解再生医学的入口", "再生医学是一个旨在恢复受损组织或功能的医学领域，可能使用细胞、组织、生物材料、基因等方法。它并不是一种单一的治疗。", "确认希望恢复的是什么、使用什么细胞或材料，以及资料描述的是实验室研究、动物研究、临床研究，还是已经批准的医疗产品。"], ["研究成果不等于可以接受的治疗", "在细胞或动物中的结果可能是重要的科学进展，但不能直接证明对患者有效。阅读人体研究时，也要关注参加者、对照组、评价指标、随访时间和研究局限。", "仅仅说明“使用干细胞”并不足以评价治疗。应询问研究针对什么疾病、细胞如何制造和检测，以及目前仍有哪些未知。"], ["考虑治疗前可以询问什么", "可以询问预期收益、支持收益的证据、可能的伤害、其他治疗选择、总费用，以及治疗没有帮助时的安排。", "本网站不能进行诊断，也不推荐个人治疗。涉及个人决定时，请与主治医生或相关疾病的专科医生讨论。"], ["把知识连接到医疗决定", "基础知识只是医疗决定的一部分。不要只根据“再生”这个词判断，而要分别确认治疗目的、获益证据、可能的伤害和其他选择。", "遇到不清楚的词，可以具体询问适用人群、方法、评价时间和未知之处。"], ["阅读时的实用检查表", "确认资料是否以人为对象、参加人数、随访时间，以及是否同时说明了伤害和收益。没有数据或声称对所有人都有效的表述，需要谨慎看待。", "不要只根据本文开始或停止治疗。最新的制度和产品信息，请通过厚生劳动省、PMDA等官方资料确认。"]],
  },
};

export const localizedShell = {
  en: {
    logoName: "Regenerative Medicine Guide", logoAria: "Regenerative Medicine Guide home", tagline: "Clearer information for your next medical decision.", preview: "Preview · manuscripts are awaiting medical review", promise: "One careful step at a time.", editorial: "Editorial policy", supervision: "Medical review", search: "Find articles", searchAria: "Find articles", home: "Home", about: "About this site", basics: "The basics", stemCells: "Stem cells", treatment: "Considering treatment", research: "Research & news", menu: "Open menu", guide: "Getting started", glossary: "Glossary", faq: "FAQ", safety: "Safety", regulation: "Rules & systems", advertising: "Advertising", terms: "Terms of use", privacy: "Privacy policy", disclaimer: "Important notice", contact: "Contact", updates: "Updates", corrections: "Corrections & updates", citations: "Citations & reuse", accessibility: "Accessibility", siteGuide: "Site guide", footerLead: "Understanding comes before choice.\nA careful guide connecting regenerative medicine with people.", footerDisclaimer: "This site provides general information and is not a substitute for diagnosis or treatment. Please consult a qualified healthcare professional.", copyright: "KNOWLEDGE FOR YOUR NEXT STEP.",
  },
  zh: {
    logoName: "再生医学指南", logoAria: "再生医学指南首页", tagline: "为下一步医疗决定提供清晰的信息。", preview: "预览版 · 原稿正在等待医学审核", promise: "一步一步，谨慎理解。", editorial: "编辑方针", supervision: "医学审核", search: "查找文章", searchAria: "查找文章", home: "首页", about: "关于本网站", basics: "再生医学基础", stemCells: "认识干细胞", treatment: "考虑治疗时", research: "研究与新闻", menu: "打开菜单", guide: "入门指南", glossary: "术语表", faq: "常见问题", safety: "安全性", regulation: "制度与法规", advertising: "广告刊登", terms: "使用条款", privacy: "隐私政策", disclaimer: "重要说明", contact: "联系我们", updates: "更新信息", corrections: "勘误与更新", citations: "引用与转载", accessibility: "无障碍", siteGuide: "网站地图", footerLead: "充分了解，是做出选择的第一步。\n连接再生医学与每个人的谨慎指南。", footerDisclaimer: "本网站提供一般性信息，不能替代诊断或治疗。涉及个人医疗决定时，请咨询有资质的医疗专业人员。", copyright: "KNOWLEDGE FOR YOUR NEXT STEP.",
  },
} as const;
