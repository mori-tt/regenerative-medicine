// Translated versions of the per-category guide sections appended to every
// article (mirrors depthByCategory in articles.ts).
import type { SiteLocale } from "./locales";

export type GuideSection = { title: string; paragraphs: string[] };

export const articleGuideSections: Record<SiteLocale, Record<string, GuideSection[]>> = {
  en: {
    "stem-basics": [
      {
        title: "Connecting this knowledge to treatment discussions",
        paragraphs: [
          "Basic knowledge is only part of deciding whether to receive a specific treatment. Without guessing effects from cell names or the word “regeneration,” confirm target diseases and symptoms, treatment purposes, and standard treatments for comparison separately.",
          "The same words can mean different things in research and in clinic brochures. Turning written terms into questions about target patients, methods, evaluation periods, and unknowns reduces misunderstandings.",
        ],
      },
      {
        title: "Checklist items to confirm",
        paragraphs: [
          "When reading, check whether studies target people, how many participants and how long, whether harms appear alongside benefits, and whether the story sits within approved scopes or research plans. Beware explanations without numbers and wording that sounds effective for everyone.",
          "Treatment decisions rest on examinations, tests, histories, and medicines judged by physicians. Never start or stop treatment from this article alone; consult primary or disease-specialist physicians with questions.",
        ],
      },
    ],
    "cell-types": [
      {
        title: "Cell names alone never evaluate",
        paragraphs: [
          "Names like iPS, ES, and mesenchymal stem cells show origins and properties, never guaranteeing treatment effectiveness. Even under one name, differentiation methods, possible contaminating cells, doses, sites, and quality tests differ.",
          "When briefed, confirm source and final cell types, manufacturing sites, quality tests, storage, and administration. Beyond asking “is it safe,” ask how which risks are monitored.",
        ],
      },
      {
        title: "Distances from research to human treatment",
        paragraphs: [
          "Making cells, seeing changes in animals, and confirming benefits in people are separate stages. Even for human studies, results mean nothing without target diseases, comparison methods, endpoints, and follow-up periods.",
          "When considering study participation or private care, confirm research plans, approval and notification positioning, cost sharing, and responses to adverse events in writing.",
        ],
      },
    ],
    "cost-access": [
      {
        title: "Four axes to confirm in consultations",
        paragraphs: [
          "In consultations, concretize purposes like easing symptoms, keeping functions, or improving test values. Then ask for side-by-side explanations of supporting evidence, possible harms with frequency, other options, and outlooks without treatment.",
          "Suitability never rests on disease names alone. Share with clinicians the conditions affecting judgment: symptom levels, imaging and test results, age, conditions, medicines, and pregnancy possibilities.",
        ],
      },
      {
        title: "Viewing contracts, costs, and aftercare as one plan",
        paragraphs: [
          "For private care, total collection, processing, administration, hospitalization, test, visit, and additional treatment costs, checking refund, stopping, cancellation, and installment terms before signing. High prices themselves never prove effects.",
          "Confirm post-treatment observation periods, contacts, emergency visit destinations, adverse-event reporting, and next options when effects are poor. When rushed to sign or when risk and alternative explanations are thin, take materials home and consult third parties.",
        ],
      },
    ],
    mechanisms: [
      {
        title: "Turning results into four questions",
        paragraphs: [
          "Reading news, translate into who was targeted, against what, what was measured, and over which period. Cellular and imaging changes do not always mean improved symptoms or living.",
          "Limits include small numbers, lacking comparators, short follow-ups, shrinking participants, and evaluators knowing treatments. Limits never mean failure; they show how far results may extend.",
        ],
      },
      {
        title: "Checking original materials and update dates",
        paragraphs: [
          "Without judging from coverage and publicity alone, move on to papers, study registrations, review reports, and package inserts. For research-stage articles, check publication dates plus whether results are peer-reviewed, replicated in later studies, and carry serious adverse events or open challenges.",
          "Systems and approval states update, so confirm latest information on Ministry of Health, Labour and Welfare, PMDA, and other official pages. Systems and approved scopes may have changed after this article's update date.",
        ],
      },
    ],
  },
  zh: {
    "stem-basics": [
      {
        title: "把这些知识连接到治疗话题时",
        paragraphs: [
          "基础知识只是决定是否接受特定治疗的材料一部分。不凭细胞名与“再生”二词推测效果，分别确认对象疾病症状、治疗目的与比较的标准治疗。",
          "同样词语在研究与医疗机构说明中含义可能不同。把资料词语换成关于对象者、方法、评价期限与未知之处的问题，可减少误解。",
        ],
      },
      {
        title: "想确认的检查项目",
        paragraphs: [
          "阅读时确认是否以人为对象、多少人数期限、是否与收益一起展示不利、是否在批准范围与研究计划内。注意没有数字的说明与听似对所有人有效的表述。",
          "治疗与否按诊察检查既往史用药由医生判断。不要仅凭本文中止开始治疗，有疑问咨询主治医生与对象疾病专科医生。",
        ],
      },
    ],
    "cell-types": [
      {
        title: "仅凭细胞名无法评价",
        paragraphs: [
          "iPS、ES与间充质干细胞等名称表示起点与性质，不保证治疗有效性。即使同名，分化方法、可能混入细胞、给药量部位与质量检验各异。",
          "接受说明时确认使用细胞来源与最终细胞种类、制造场所、质量试验、保存方法与给药方法。不要止于“安全吗”，问到什么风险如何监测。",
        ],
      },
      {
        title: "从研究到人体治疗的距离",
        paragraphs: [
          "能制细胞、在动物见变化与在人确认收益是不同阶段。即使以人为对象，不看对象疾病、比较方法、评价项目与随访期限，无法判断结果含义。",
          "考虑研究参加与自由诊疗时，用书面确认研究计划、批准申报定位、费用负担与不良事件应对。",
        ],
      },
    ],
    "cost-access": [
      {
        title: "门诊确认四轴",
        paragraphs: [
          "咨询中把目的具体为减轻症状、维持功能与改善检验值等。在此上并列请对方说明预期收益依据、可能伤害与频率、其他选择与不治疗预期。",
          "适不适合不只凭病名决定。与医疗人员分享影响判断的条件：症状程度、影像检查结果、年龄、合并症、用药与妊娠可能等。",
        ],
      },
      {
        title: "把合同费用与治疗后作为一个计划看",
        paragraphs: [
          "自由诊疗合计初诊外采集加工给药住院检查复诊追加治疗费用，签约前确认退款中止取消与分期条件。高额本身不是效果证明。",
          "确认治疗后观察期限、联系方式、紧急就诊方、不良事件报告方法与效果不佳时下个选项。被催促签约、风险替代说明不足时，带回资料咨询第三方。",
        ],
      },
    ],
    mechanisms: [
      {
        title: "把研究结果变成四个问题",
        paragraphs: [
          "读新闻换成以谁为对象、与什么比较、测量什么、哪个期限的结果。细胞与影像变化未必意味患者症状生活改善。",
          "研究局限有例数少、无比较对象、随访短、中途参加者减少与评价者知道治疗等。局限不是失败，而是表示结果可推广多远的信息。",
        ],
      },
      {
        title: "确认原始资料与更新日期",
        paragraphs: [
          "不只凭报道宣传判断，进到论文、研究登记、审查报告与说明书等原始资料。研究阶段文章除发表日，还确认结果是否经评议、后续研究是否再现、有无重大不良事件与未解课题。",
          "制度批准状况会更新，最新信息请用厚生劳动省PMDA等官方页确认。本文更新日之后制度批准范围也可能变化。",
        ],
      },
    ],
  },
};
