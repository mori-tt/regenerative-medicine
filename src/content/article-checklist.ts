// 手続き系記事向けの「確認項目の例」セクション。
// 説明文書・契約書・提供計画に書かれているべき項目を、読者が照合できる形で示す。

import type { SiteLocale } from "./locales";

type ChecklistEntry = { ja: string[]; en: string[]; zh: string[] };

const checklists: Record<string, ChecklistEntry> = {
  "jibihi-contract": {
    ja: [
      "・使用する細胞の種類と由来（自家／他家、採取部位）",
      "・提供計画の届出の有無と届出番号",
      "・効果の根拠となった研究や資料の参照先",
      "・想定されるリスクと起きた場合の対応",
      "・費用の内訳（採取・培養・投与・経過観察）と支払い方法",
      "・契約解除・中断時の返金条件",
      "・経過観察の期間と内容",
      "・個人情報・診療記録の取り扱い",
    ],
    en: [
      "• Cell type and source (autologous/allogeneic, collection site)",
      "• Whether a provision plan was filed, and its number",
      "• References for the claimed benefit",
      "• Anticipated risks and the response plan",
      "• Itemized costs (collection, culture, administration, follow-up) and payment terms",
      "• Cancellation and refund conditions",
      "• Follow-up period and content",
      "• Handling of personal information and medical records",
    ],
    zh: [
      "• 使用细胞的种类与来源（自体/异体、采集部位）",
      "• 提供计划的申报情况及编号",
      "• 疗效依据的研究或资料出处",
      "• 预期风险及发生时的应对",
      "• 费用明细（采集、培养、给药、随访）与支付方式",
      "• 解除或中断时的退款条件",
      "• 随访期限与内容",
      "• 个人信息与诊疗记录的处理",
    ],
  },
  "informed-consent-howto": {
    ja: [
      "・治療の目的と内容が具体的か",
      "・効果の根拠が「研究段階」か「承認済み」か明記されているか",
      "・リスクと起きた場合の対応が書かれているか",
      "・代替となる治療の選択肢があるか",
      "・費用と支払い条件が明記されているか",
      "・質問の機会と考える時間が確保されているか",
      "・連絡先と相談窓口が書かれているか",
    ],
    en: [
      "• Is the purpose and content specific?",
      "• Does it state whether the benefit is research-stage or approved?",
      "• Are risks and the response plan described?",
      "• Are alternatives mentioned?",
      "• Are costs and payment terms stated?",
      "• Is there room for questions and time to decide?",
      "• Are contacts and consultation channels listed?",
    ],
    zh: [
      "• 治疗目的和内容是否具体？",
      "• 是否写明疗效依据处于研究阶段还是已获批？",
      "• 是否写明风险及发生时的应对？",
      "• 是否提及替代治疗方案？",
      "• 是否写明费用与支付条件？",
      "• 是否有提问机会和思考时间？",
      "• 是否写明联系方式和咨询窗口？",
    ],
  },
  "treatment-eligibility-process": {
    ja: [
      "・どのリスク区分（第1種〜第3種）に該当するか",
      "・提供計画が届出済みか（届出番号の確認）",
      "・審査した委員会の名称",
      "・細胞加工を外部委託する場合の施設の届出状況",
      "・治療開始までに必要な検査と期間",
      "・同意書面の写しが受け取れるか",
    ],
    en: [
      "• Which risk class it falls under (Class I–III)",
      "• Whether the provision plan is filed (confirm the filing number)",
      "• The name of the reviewing committee",
      "• Whether outsourced cell-processing facilities are registered",
      "• Tests and time required before treatment",
      "• Whether you receive a copy of the consent form",
    ],
    zh: [
      "• 属于哪个风险分级（第一类至第三类）",
      "• 提供计划是否已申报（确认编号）",
      "• 审查委员会的名称",
      "• 委托细胞加工时相关机构的申报情况",
      "• 治疗前需要的检查与时间",
      "• 能否获得同意书的副本",
    ],
  },
  "treatment-flow": {
    ja: [
      "・初診で確認すること（持参物・既往歴・薬）",
      "・検査と適否判定のスケジュール",
      "・採取・培養の期間",
      "・投与日と投与方法",
      "・経過観察の予定（頻度・内容・期間）",
      "・費用の支払いタイミング",
      "・中止・中断の連絡先",
    ],
    en: [
      "• What to confirm at the first visit (documents, history, medications)",
      "• Schedule for tests and eligibility assessment",
      "• Collection and culture period",
      "• Administration date and method",
      "• Follow-up plan (frequency, content, duration)",
      "• Payment timing",
      "• Contact for interruption or cancellation",
    ],
    zh: [
      "• 初诊需确认的事项（携带物、病史、用药）",
      "• 检查与适用性判断的日程",
      "• 采集与培养周期",
      "• 给药日期与方式",
      "• 随访计划（频率、内容、期限）",
      "• 费用支付时间",
      "• 中断或停止的联系方式",
    ],
  },
  "hospital-choice": {
    ja: [
      "・提供計画の届出が確認できるか",
      "・説明に効果の根拠と段階が書かれているか",
      "・リスク説明が具体的か",
      "・費用の内訳が明確か",
      "・相談への対応が丁寧か",
      "・緊急時・中止時の連絡先があるか",
      "・口コミや広告だけでなく、文書で確認できるか",
    ],
    en: [
      "• Can the filed provision plan be confirmed?",
      "• Does the explanation state the evidence and its stage?",
      "• Is the risk explanation specific?",
      "• Is the cost breakdown clear?",
      "• Are consultations handled carefully?",
      "• Are emergency and cancellation contacts given?",
      "• Can claims be confirmed in documents, not just reviews or ads?",
    ],
    zh: [
      "• 能否确认提供计划的申报？",
      "• 说明中是否写明疗效依据及其阶段？",
      "• 风险说明是否具体？",
      "• 费用明细是否清楚？",
      "• 咨询应对是否认真？",
      "• 是否有紧急或停止时的联系方式？",
      "• 能否以文件确认而非仅靠口碑或广告？",
    ],
  },
  "first-visit-prep": {
    ja: [
      "・保険証・各種受給者証",
      "・既往歴・現在の症状のメモ",
      "・使用中の薬・サプリの一覧",
      "・検査結果・診療情報提供書（あれば）",
      "・聞きたいことのメモ",
      "・家族や付き添いの同行の可否",
    ],
    en: [
      "• Insurance card and benefit certificates",
      "• Notes on history and current symptoms",
      "• List of medications and supplements",
      "• Test results and referral letters (if any)",
      "• A written list of questions",
      "• Whether family or a companion can attend",
    ],
    zh: [
      "• 医保卡及各类受给证",
      "• 病史与当前症状的笔记",
      "• 正在使用的药物与补充剂清单",
      "• 检查结果与介绍信（如有）",
      "• 想问的问题备忘录",
      "• 家属或陪同可否同往",
    ],
  },
};

export function checklistSectionsFor(slug: string, locale: SiteLocale | "ja") {
  const entry = checklists[slug];
  if (!entry) return [];
  const title = locale === "ja" ? "書類・説明で確認したい項目の例" : locale === "en" ? "What to check in documents" : "文件与说明中应确认的项目";
  const intro = locale === "ja"
    ? "以下は確認の目安です。すべてが必須ではありませんが、抜けている項目は施設に確認してください。"
    : locale === "en"
      ? "A reference checklist — not every item is mandatory, but ask the clinic about anything missing."
      : "以下为参考清单——并非所有项目都必须具备，但缺失项请向机构确认。";
  const items = locale === "ja" ? entry.ja : locale === "en" ? entry.en : entry.zh;
  return [{ id: "checklist", title, paragraphs: [intro, ...items] }];
}
