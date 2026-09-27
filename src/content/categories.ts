export const categories = [
  {
    slug: "stem-basics",
    label: "幹細胞の基礎",
    en: "STEM CELL BASICS",
    description:
      "幹細胞とは何か、普通の細胞との違い、再生医療との関係から。最初に知りたい基礎知識。",
    icon: "cells",
    color: "green",
    kicker: { ja: "基礎知識", en: "The basics", zh: "基础知识" },
  },
  {
    slug: "health-basics",
    label: "体と健康の基礎",
    en: "BODY & HEALTH",
    description:
      "細胞・臓器の働き、身近な病気、検査や暮らしの健康知識。再生医療を読む土台になる体の話。",
    icon: "cross",
    color: "slate",
    kicker: { ja: "基礎知識", en: "The basics", zh: "基础知识" },
  },
  {
    slug: "in-body",
    label: "体の中での動き",
    en: "INSIDE THE BODY",
    description:
      "投与された幹細胞が体内でどこへ行き、どう分布し、どう働くのかを解説します。",
    icon: "network",
    color: "teal",
    kicker: { ja: "体内動態", en: "Inside the body", zh: "体内动态" },
  },
  {
    slug: "anti-aging",
    label: "美容・エイジング",
    en: "BEAUTY & AGING",
    description:
      "若返り・肌への期待と、科学的に分かっていること・分かっていないことを区別します。",
    icon: "scope",
    color: "rose",
    kicker: { ja: "美容", en: "Beauty & aging", zh: "美容・抗衰老" },
  },
  {
    slug: "efficacy",
    label: "効果とエビデンス",
    en: "EVIDENCE",
    description:
      "治療の効果はどこまで科学的に確かめられているのか。研究の確かさを読み解きます。",
    icon: "book",
    color: "purple",
    kicker: { ja: "エビデンス", en: "Evidence", zh: "证据解读" },
  },
  {
    slug: "safety",
    label: "安全性とリスク",
    en: "SAFETY",
    description:
      "副作用・感染・禁忌など、治療を受ける前に知っておきたいリスクを整理します。",
    icon: "cross",
    color: "amber",
    kicker: { ja: "安全性", en: "Safety", zh: "安全性" },
  },
  {
    slug: "cell-types",
    label: "幹細胞の種類",
    en: "CELL TYPES",
    description:
      "脂肪・骨髄・臍帯由来の違い、自家と他家、採取から培養までを比較します。",
    icon: "cells",
    color: "blue",
    kicker: { ja: "細胞の種類", en: "Cell types", zh: "细胞种类" },
  },
  {
    slug: "compare-therapies",
    label: "治療法の比較",
    en: "COMPARISONS",
    description:
      "幹細胞・エクソソーム・PRPなど、混同されやすい治療の違いを整理します。",
    icon: "scope",
    color: "slate",
    kicker: { ja: "治療の比較", en: "Comparisons", zh: "疗法比较" },
  },
  {
    slug: "cost-access",
    label: "費用と受診の準備",
    en: "COST & ACCESS",
    description:
      "費用・保険・クリニック選び・説明の受け方。受診前に確認したい実務情報。",
    icon: "check",
    color: "sand",
    kicker: { ja: "費用・受診", en: "Cost & access", zh: "费用・就诊" },
  },
  {
    slug: "mechanisms",
    label: "仕組みと研究",
    en: "MECHANISMS",
    description:
      "ホーミング・パラクリン作用・免疫への働きなど、少し深い仕組みと研究の読み方。",
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
  return article.kind === "column" ? columnKicker[locale] : categoryFor(article.category).kicker[locale];
}
