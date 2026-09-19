export type ArticleImage = {
  src: string;
  alt: string;
  sourceUrl: string;
  credit: string;
  license: string;
};

const pixabay = "Pixabay Content License";
const unsplash = "Unsplash License";

export const articleImages: Record<string, ArticleImage> = {
  "doctor-consultation": {
    src: "/images/articles/doctor-consultation.jpg",
    alt: "医師と患者が診察室で相談している様子",
    sourceUrl: "https://pixabay.com/photos/doctor-patient-consultation-5710152/",
    credit: "Maximilianovich / Pixabay",
    license: pixabay,
  },
  microscope: {
    src: "/images/articles/microscope.jpg",
    alt: "蛍光染色された細胞の顕微鏡画像",
    sourceUrl: "https://unsplash.com/s/photos/microscope",
    credit: "Unsplash contributor",
    license: unsplash,
  },
  laboratory: {
    src: "/images/articles/laboratory.jpg",
    alt: "検査機器が並ぶ研究室",
    sourceUrl: "https://unsplash.com/s/photos/medical-laboratory",
    credit: "Unsplash contributor",
    license: unsplash,
  },
  "medical-research": {
    src: "/images/articles/medical-research.jpg",
    alt: "画像を確認する医師と医療画像",
    sourceUrl: "https://unsplash.com/s/photos/medical-research",
    credit: "Unsplash contributor",
    license: unsplash,
  },
  researcher: {
    src: "/images/articles/researcher.jpg",
    alt: "手術用ライトの下で見上げる医療チーム",
    sourceUrl: "https://unsplash.com/s/photos/medical-team",
    credit: "Unsplash contributor",
    license: unsplash,
  },
  "medical-team": {
    src: "/images/articles/medical-team.jpg",
    alt: "スマートフォンで情報を確認する医師",
    sourceUrl: "https://unsplash.com/s/photos/doctor",
    credit: "Unsplash contributor",
    license: unsplash,
  },
  "hospital-care": {
    src: "/images/articles/hospital-care.jpg",
    alt: "医師の白衣と聴診器",
    sourceUrl: "https://unsplash.com/s/photos/healthcare",
    credit: "Unsplash contributor",
    license: unsplash,
  },
};

const imageSets: Record<string, string[]> = {
  basics: ["microscope", "doctor-consultation", "laboratory", "medical-research"],
  "stem-cells": ["microscope", "laboratory", "researcher", "medical-research"],
  treatment: ["doctor-consultation", "hospital-care", "medical-team", "medical-research"],
  research: ["laboratory", "researcher", "microscope", "medical-team"],
};

export function articleImageFor(category: string, index: number) {
  const set = imageSets[category] ?? imageSets.basics;
  return articleImages[set[index % set.length]];
}
