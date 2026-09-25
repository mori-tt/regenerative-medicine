export const categories = [
  {
    slug: "stem-basics",
    label: "幹細胞の基礎",
    en: "STEM CELL BASICS",
    description:
      "幹細胞とは何か、普通の細胞との違い、再生医療との関係から。最初に知りたい基礎知識。",
    icon: "cells",
    color: "green",
  },
  {
    slug: "in-body",
    label: "体の中での動き",
    en: "INSIDE THE BODY",
    description:
      "投与された幹細胞が体内でどこへ行き、どう分布し、どう働くのかを解説します。",
    icon: "network",
    color: "teal",
  },
  {
    slug: "anti-aging",
    label: "美容・エイジング",
    en: "BEAUTY & AGING",
    description:
      "若返り・肌への期待と、科学的に分かっていること・分かっていないことを区別します。",
    icon: "scope",
    color: "rose",
  },
  {
    slug: "efficacy",
    label: "効果とエビデンス",
    en: "EVIDENCE",
    description:
      "治療の効果はどこまで科学的に確かめられているのか。研究の確かさを読み解きます。",
    icon: "book",
    color: "purple",
  },
  {
    slug: "safety",
    label: "安全性とリスク",
    en: "SAFETY",
    description:
      "副作用・感染・禁忌など、治療を受ける前に知っておきたいリスクを整理します。",
    icon: "cross",
    color: "amber",
  },
  {
    slug: "cell-types",
    label: "幹細胞の種類",
    en: "CELL TYPES",
    description:
      "脂肪・骨髄・臍帯由来の違い、自家と他家、採取から培養までを比較します。",
    icon: "cells",
    color: "blue",
  },
  {
    slug: "compare-therapies",
    label: "治療法の比較",
    en: "COMPARISONS",
    description:
      "幹細胞・エクソソーム・PRPなど、混同されやすい治療の違いを整理します。",
    icon: "scope",
    color: "slate",
  },
  {
    slug: "cost-access",
    label: "費用と受診の準備",
    en: "COST & ACCESS",
    description:
      "費用・保険・クリニック選び・説明の受け方。受診前に確認したい実務情報。",
    icon: "check",
    color: "sand",
  },
  {
    slug: "mechanisms",
    label: "仕組みと研究",
    en: "MECHANISMS",
    description:
      "ホーミング・パラクリン作用・免疫への働きなど、少し深い仕組みと研究の読み方。",
    icon: "network",
    color: "olive",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function categoryFor(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug)!;
}
