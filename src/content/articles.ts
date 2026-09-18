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
export type Reviewer = {
  name: string;
  credentials: string;
  affiliation: string;
  profileUrl: string;
  reviewedAt: string;
};
export type Article = {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  updatedAt: string;
  readingMinutes: number;
  status: "draft" | "published";
  reviewer?: Reviewer;
  publishedAt?: string;
  illustration: "cells" | "network" | "scope" | "cross";
  points: string[];
  sections: { id: string; title: string; paragraphs: string[] }[];
  references: { title: string; url: string }[];
};
const cira = {
  title: "京都大学iPS細胞研究所 CiRA：iPS細胞とは？",
  url: "https://www.cira.kyoto-u.ac.jp/j/faq/faq_ips.html",
};
const patient = {
  title: "京都大学iPS細胞研究所 CiRA：患者さん向け情報",
  url: "https://www.cira.kyoto-u.ac.jp/j/faq/faq_patient.html",
};
const mhlw = {
  title: "厚生労働省：再生医療について",
  url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei_iryou/index.html",
};

// 雛形用の短い原稿です。監修・出典精査・加筆後に公開してください。
export const articles: Article[] = [
  {
    slug: "what-is-regenerative-medicine",
    title: "再生医療とは？ はじめに知っておきたい基礎知識",
    description:
      "言葉の意味から、研究と治療の違いまで。再生医療について理解するための、最初の一歩。",
    category: "basics",
    updatedAt: "2026-09-19",
    readingMinutes: 2,
    status: "draft",
    illustration: "cells",
    points: [
      "再生医療という言葉だけで、効果や安全性は判断できません。",
      "研究段階と、実際に受けられる医療を区別して確認します。",
      "具体的な治療の判断には、個別の情報と医師への相談が必要です。",
    ],
    sections: [
      {
        id: "overview",
        title: "再生医療を知るための入り口",
        paragraphs: [
          "再生医療は、細胞などを用いて、損なわれた組織や機能の回復を目指す医療の分野です。ひとつの決まった治療法を指す言葉ではありません。",
          "このサイトでは、細胞の種類、研究の段階、治療ごとの情報を分けて整理していきます。",
        ],
      },
      {
        id: "research-and-care",
        title: "研究の成果と、治療として使えること",
        paragraphs: [
          "研究に関するニュースを読むときは、細胞を用いた実験なのか、動物での研究なのか、人を対象にした研究なのかを確かめましょう。研究結果だけで、自分に適した治療かどうかは判断できません。",
        ],
      },
      {
        id: "questions",
        title: "治療を検討する前に確認したいこと",
        paragraphs: [
          "対象となる病気、期待される効果の根拠、主なリスク、他の選択肢、費用を確認しましょう。分からないことを書き出し、主治医や提供する医療機関に相談することが大切です。",
        ],
      },
    ],
    references: [mhlw, patient],
  },
  {
    slug: "stem-cell-types",
    title: "幹細胞とは？ iPS細胞・ES細胞・体性幹細胞の違い",
    description: "幹細胞の基本的な働きと、代表的な種類を整理します。",
    category: "stem-cells",
    updatedAt: "2026-09-19",
    readingMinutes: 2,
    status: "draft",
    illustration: "network",
    points: [
      "幹細胞には、増える能力と別の種類の細胞になる能力があります。",
      "由来や性質によって、幹細胞は区別されます。",
    ],
    sections: [
      {
        id: "stem-cells",
        title: "幹細胞の基本的な働き",
        paragraphs: [
          "幹細胞を理解する鍵は、自分と同じ性質の細胞を作る「自己複製」と、別の種類の細胞になる「分化」です。すべての幹細胞が同じ性質を持っているわけではありません。",
        ],
      },
      {
        id: "types",
        title: "種類と由来を区別する",
        paragraphs: [
          "iPS細胞は、体の細胞に特定の因子を導入するなどして作られる多能性幹細胞です。ES細胞は初期の胚に由来し、体性幹細胞は体の組織に存在します。",
          "細胞の種類だけで治療の有効性や安全性が決まるわけではありません。治療ごとの検証を確認する必要があります。",
        ],
      },
    ],
    references: [cira],
  },
  {
    slug: "questions-before-treatment",
    title: "再生医療を検討するとき、医師に確認したいこと",
    description:
      "納得して相談するために。根拠、リスク、費用についての質問を整理しましょう。",
    category: "treatment",
    updatedAt: "2026-09-19",
    readingMinutes: 2,
    status: "draft",
    illustration: "cross",
    points: [
      "自分の病気に対する根拠を尋ねましょう。",
      "他の治療の選択肢も含めて相談しましょう。",
      "費用と治療後の対応を、事前に確認しましょう。",
    ],
    sections: [
      {
        id: "evidence",
        title: "効果とリスクについて聞く",
        paragraphs: [
          "「私の病気や状態に対して、どのような研究がありますか」「効果が得られない可能性や、主なリスクは何ですか」と質問してみましょう。説明を持ち帰って検討することも大切です。",
        ],
      },
      {
        id: "alternatives",
        title: "他の選択肢と、費用を確認する",
        paragraphs: [
          "他の治療法との違い、治療を受けない場合の見通し、検査や通院を含めた費用の総額について確認します。体調が変化した際の連絡先や診療体制も聞いておきましょう。",
        ],
      },
    ],
    references: [patient, mhlw],
  },
  {
    slug: "reading-research-news",
    title: "再生医療のニュースを読むための、3つの視点",
    description:
      "「研究で分かったこと」を正しく受け止めるための、ニュースの読み方。",
    category: "research",
    updatedAt: "2026-09-19",
    readingMinutes: 2,
    status: "draft",
    illustration: "scope",
    points: [
      "誰を対象にした研究か確認します。",
      "どのような結果を、どれくらいの期間観察したか確認します。",
      "発表元や原著論文までたどってみましょう。",
    ],
    sections: [
      {
        id: "stage",
        title: "1. 研究の段階を確認する",
        paragraphs: [
          "細胞や動物を使った研究の成果を、人への治療効果と同じ意味で受け取らないようにします。人を対象とする研究でも、対象人数や目的を確かめる必要があります。",
        ],
      },
      {
        id: "results",
        title: "2. 結果と限界を一緒に読む",
        paragraphs: [
          "何を比較し、何を測り、どれくらいの期間を観察した研究なのかを見ます。記事の見出しだけでなく、研究の限界について書かれた部分も読みましょう。",
        ],
      },
      {
        id: "source",
        title: "3. 元になった情報へ進む",
        paragraphs: [
          "大学や研究機関の発表、原著論文などへのリンクを確認します。情報がいつ発表されたものかも、理解するうえで大切です。",
        ],
      },
    ],
    references: [
      {
        title: "京都大学iPS細胞研究所 CiRA：ニュース",
        url: "https://www.cira.kyoto-u.ac.jp/j/pressrelease/",
      },
    ],
  },
];

export function isReviewed(article: Article) {
  return (
    article.status === "published" &&
    Boolean(
      article.publishedAt &&
      article.reviewer?.name &&
      article.reviewer.credentials &&
      article.reviewer.affiliation &&
      article.reviewer.profileUrl &&
      article.reviewer.reviewedAt,
    )
  );
}
export function categoryFor(slug: CategorySlug) {
  return categories.find((c) => c.slug === slug)!;
}
