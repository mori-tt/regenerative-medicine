export const categories = [
  {
    slug: "basics",
    label: "再生医療の基礎",
    en: "THE BASICS",
    description:
      "まずはここから。再生医療の考え方と、知っておきたい言葉を整理します。",
    icon: "cells",
    color: "green",
  },
  {
    slug: "stem-cells",
    label: "幹細胞を知る",
    en: "STEM CELLS",
    description: "iPS細胞、ES細胞、体性幹細胞。それぞれの特徴を学びます。",
    icon: "network",
    color: "blue",
  },
  {
    slug: "treatment",
    label: "治療を考える",
    en: "YOUR CHOICES",
    description:
      "費用、安全性、医師への質問。治療を検討する前の情報をまとめます。",
    icon: "cross",
    color: "sand",
  },
  {
    slug: "research",
    label: "研究とニュース",
    en: "RESEARCH",
    description: "研究の成果と、医療で使えることの違いを丁寧に読み解きます。",
    icon: "scope",
    color: "purple",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function categoryFor(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug)!;
}
