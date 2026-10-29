export const categories = [
  {
    slug: "stem-basics",
    label: "幹細胞の基礎",
    en: "STEM CELL BASICS",
    description:
      "幹細胞とは何か、普通の細胞との違い、自己複製と分化のしくみ、再生医療との関係まで。最初に知りたい基礎知識をまとめています。",
    icon: "cells",
    color: "green",
    kicker: { ja: "基礎知識", en: "The basics", zh: "基础知识" },
  },
  {
    slug: "health-basics",
    label: "体と健康の基礎",
    en: "BODY & HEALTH",
    description:
      "細胞・臓器の働き、身近な病気、検査や暮らしの健康知識を解説します。再生医療の説明を正しく読むための土台になる体の話です。",
    icon: "cross",
    color: "slate",
    kicker: { ja: "基礎知識", en: "The basics", zh: "基础知识" },
  },
  {
    slug: "in-body",
    label: "体の中での動き",
    en: "INSIDE THE BODY",
    description:
      "投与された幹細胞は体内でどこへ行き、どう働くのか。分布・生着・消失に関する研究と、「届く＝効く」ではない理由を解説します。",
    icon: "network",
    color: "teal",
    kicker: { ja: "体内動態", en: "Inside the body", zh: "体内动态" },
  },
  {
    slug: "anti-aging",
    label: "美容・エイジング",
    en: "BEAUTY & AGING",
    description:
      "若返り・美容への期待と、科学的に分かっていること・分かっていないことを区別します。広告規制の観点から誇大な表現を見抜く視点も整理します。",
    icon: "scope",
    color: "rose",
    kicker: { ja: "美容", en: "Beauty & aging", zh: "美容・抗衰老" },
  },
  {
    slug: "efficacy",
    label: "効果とエビデンス",
    en: "EVIDENCE",
    description:
      "治療の効果はどこまで科学的に確かめられているのか。症例報告からランダム化比較試験・系統的レビューまで、エビデンスの強さと読み解き方を整理します。",
    icon: "book",
    color: "purple",
    kicker: { ja: "エビデンス", en: "Evidence", zh: "证据解读" },
  },
  {
    slug: "safety",
    label: "安全性とリスク",
    en: "SAFETY",
    description:
      "副作用・感染・禁忌など、再生医療の治療を受ける前に知っておきたいリスクを、治療の種類や経路ごとの違いも含めて整理します。",
    icon: "cross",
    color: "amber",
    kicker: { ja: "安全性", en: "Safety", zh: "安全性" },
  },
  {
    slug: "cell-types",
    label: "幹細胞の種類",
    en: "CELL TYPES",
    description:
      "ES細胞・iPS細胞・間葉系幹細胞の違い、脂肪・骨髄・臍帯などの由来、自家と他家の区別、採取から培養までの流れを比較します。",
    icon: "cells",
    color: "blue",
    kicker: { ja: "細胞の種類", en: "Cell types", zh: "细胞种类" },
  },
  {
    slug: "compare-therapies",
    label: "治療法の比較",
    en: "COMPARISONS",
    description:
      "幹細胞治療・エクソソーム・PRPなど、混同されやすい治療の違いを「何を体に入れるか」「研究のどの段階か」で整理します。比較すると説明資料の読み違いに気づきやすくなります。",
    icon: "scope",
    color: "slate",
    kicker: { ja: "治療の比較", en: "Comparisons", zh: "疗法比较" },
  },
  {
    slug: "cost-access",
    label: "費用と受診の準備",
    en: "COST & ACCESS",
    description:
      "費用・保険・クリニック選び・説明の受け方など、受診前に確認したい実務情報を整理します。自由診療は全額自己負担となるため、契約前の確認項目も解説します。",
    icon: "check",
    color: "sand",
    kicker: { ja: "費用・受診", en: "Cost & access", zh: "费用・就诊" },
  },
  {
    slug: "mechanisms",
    label: "仕組みと研究",
    en: "MECHANISMS",
    description:
      "ホーミング・パラクリン作用・免疫への働きなど、少し深い仕組みと、仮説と確認済みの知見を分けて研究結果を読み解く方法を解説します。",
    icon: "network",
    color: "olive",
    kicker: { ja: "仕組み・研究", en: "Mechanisms", zh: "机制・研究" },
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function categoryFor(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug)!;
}

const columnKicker = { ja: "コラム", en: "Column", zh: "专栏" } as const;

/** 記事カードの種別ラベル（コラム or カテゴリ別の短い呼び名）。 */
export function cardKicker(
  article: { category: CategorySlug; kind?: "core" | "column" },
  locale: "ja" | "en" | "zh" = "ja",
): string {
  return article.kind === "column"
    ? columnKicker[locale]
    : categoryFor(article.category).kicker[locale];
}
