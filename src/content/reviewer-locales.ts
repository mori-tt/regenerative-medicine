import type { SiteLocale } from "./locales";

export type ReviewerLocale = {
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  career: string[];
  societies: string[];
  reviewScope: string;
  statusNote: string;
  photoAlt: string;
  photoCredit: string;
  photoSource: string;
  profileLink: string;
  eyebrow: string;
  credentialsHeading: string;
  careerHeading: string;
  societiesHeading: string;
  scopeHeading: string;
};

export const reviewerLocales: Record<SiteLocale, ReviewerLocale> = {
  en: {
    name: "Dr. Yoshitomo Chihara",
    title: "Director, Norris Beauty Clinic",
    bio: "After working as a urologist in general hospitals and clinics, with research in reconstructive techniques and molecular pathology, he moved into cosmetic clinical practice. He values counselling that respects patients' wishes alongside clear explanations as a physician.",
    credentials: [
      "Licensed physician (insurer physician)",
      "Certified occupational physician, Japan Medical Association",
      "Ph.D., Nara Medical University",
      "Qualified for post-mortem examination",
      "Designated physician under Article 15-1 of the Physically Disabled Persons Welfare Act (kidney, bladder, or rectal dysfunction)",
    ],
    career: [
      "1999 Resident, Department of Urology, Nara Medical University",
      "2000 Medical staff, Department of Urology, Takko-kai Takoh General Hospital",
      "2001 Graduate school, Nara Medical University",
      "2005 Medical staff, Department of Urology, Nara Medical University",
      "2006 Medical staff, Department of Urology, Nara Hospital (at the time)",
      "2006 Medical staff, Department of Urology, Nara Hospital (at the time)",
      "2007 Postdoctoral researcher, Norris Cancer Center, University of Southern California",
      "2009 Section chief, Division of Pathology, National Cancer Center (at the time)",
      "2010 Lecturer, Department of Molecular Pathology, Nara Medical University",
      "2015 Director, Department of Urology, Saiseikai Chuwa Hospital",
      "2019 Director, Sakae Central Clinic (now Amore Clinic)",
      "Jan 2022– Opened Norris Beauty Clinic, serving as Director",
    ],
    societies: ["The Japanese Society for Regenerative Medicine"],
    reviewScope:
      "Reviews medical wording in articles on regenerative medicine and stem cells, distinctions between research stages and treatment, and explanations of risks, alternatives, and costs. Review does not guarantee any individual treatment's effect or safety.",
    statusNote:
      "Each article page records its review date and scope. Listing societies or qualifications never means recommending any specific treatment, institution, or product.",
    photoAlt: "Profile photo of Dr. Yoshitomo Chihara",
    photoCredit: "Photo: Norris Beauty Clinic (official profile photo)",
    photoSource: "Photo source",
    profileLink: "See the official profile",
    eyebrow: "MEDICAL REVIEWER",
    credentialsHeading: "Qualifications",
    careerHeading: "Career",
    societiesHeading: "Societies",
    scopeHeading: "Review scope",
  },
  zh: {
    name: "千原良友医生",
    title: "Norris美容诊所 院长",
    bio: "作为泌尿外科医生在综合医院与诊所工作，并从事成形术与分子病理学研究，后进入美容医疗临床。重视尊重患者希望的咨询，以及作为医生的说明。",
    credentials: [
      "保险医",
      "日本医生会认定产业医",
      "奈良县立医科大学 博士",
      "尸体解剖资格",
      "身体残疾人福祉法第15条第1项规定的医生（肾脏、膀胱或直肠功能障碍）",
    ],
    career: [
      "1999 奈良县立医科大学泌尿外科 住院医",
      "2000 多根综合医院泌尿外科 医员",
      "2001 奈良县立医科大学研究生院",
      "2005 奈良县立医科大学泌尿外科 医员",
      "2006 奈良医院（当时）泌尿外科 医员",
      "2007 南加州大学 Norris癌症中心 博士研究员",
      "2009 国立癌症中心（当时）研究所 病理部 室长",
      "2010 奈良县立医科大学分子病理学讲座 讲师",
      "2015 济生会中和医院泌尿外科 部长",
      "2019 荣中央诊所 院长（现Amore诊所）",
      "2022年1月起 Norris美容诊所开院、院长",
    ],
    societies: ["日本再生医学学会"],
    reviewScope:
      "确认再生医学与干细胞相关文章的医学表述、研究阶段与治疗的区分、风险与替代方案、费用相关说明。审核不保证个别治疗效果与安全性。",
    statusNote:
      "按文章在文章页记录审核日期与确认范围。刊登所属学会与资格不意味推荐特定治疗、医疗机构与产品。",
    photoAlt: "千原良友医生个人照片",
    photoCredit: "照片提供：Norris美容诊所（官方简介照片）",
    photoSource: "照片来源",
    profileLink: "查看官方简介",
    eyebrow: "MEDICAL REVIEWER",
    credentialsHeading: "资格",
    careerHeading: "经历",
    societiesHeading: "所属学会",
    scopeHeading: "审核范围",
  },
};
