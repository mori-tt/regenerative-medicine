export type EvidenceReference = { title: string; url: string };

const pubmed = (pmid: string, title: string): EvidenceReference => ({
  title: `PubMed PMID ${pmid}：${title}`,
  url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
});

/**
 * 記事の主張を直接裏付ける「引用」ではなく、論点の背景と研究の限界を
 * 読者が確認するための参考論文。個別疾患・個別治療の効果を示すものではない。
 */
export const evidenceReferences = {
  evidence: pubmed("27160381", "Evidence-based clinical practice: threats to validity and how to minimise them"),
  decisionAids: pubmed("17324194", "A systematic review of information in decision aids"),
  regenerativeOverview: pubmed("36507264", "Regenerative medicine applications: an overview of clinical trials"),
  cellTranslation: pubmed("35269990", "Stem cell therapy: from idea to clinical practice"),
  cellSafety: pubmed("28722289", "Safety assessment of adipose-derived cell therapy in clinical trials"),
  strokeMetaAnalysis: pubmed("27977331", "Cell therapies administered in the chronic phase after stroke: a meta-analysis"),
  iPSCTranslation: pubmed("41059336", "Clinical translation of human iPSC technologies: advances and safety concerns"),
  tissueEngineering: pubmed("40290901", "Tissue engineering and regenerative medicine: perspectives and challenges"),
  tissueEthics: pubmed("36112697", "The ethical implications of tissue engineering for regenerative purposes"),
  trialHierarchy: pubmed("10861325", "Randomized, controlled trials, observational studies, and the hierarchy of research designs"),
};

export const evidenceReferencesByCategory = {
  basics: [evidenceReferences.evidence, evidenceReferences.decisionAids],
  "stem-cells": [evidenceReferences.cellTranslation, evidenceReferences.iPSCTranslation, evidenceReferences.cellSafety],
  treatment: [evidenceReferences.decisionAids, evidenceReferences.cellSafety, evidenceReferences.evidence],
  research: [evidenceReferences.evidence, evidenceReferences.trialHierarchy, evidenceReferences.regenerativeOverview],
} as const;

export const evidenceSectionsByCategory = {
  basics: {
    title: "論文を読むときの注意点",
    paragraphs: [
      "医学論文は、対象者、比較対象、評価項目、追跡期間、研究の限界を確認して初めて意味を読み取れます。細胞や動物を使った研究、観察研究、臨床試験、系統的レビューはそれぞれ答えられる問いが異なり、論文があることだけで人への効果や安全性が確定するわけではありません。",
      "このページの参考論文は、記事の背景や研究の読み方を確認するための資料です。個人の診断・治療の適否を判断する資料ではありません。症状や検査結果に関する判断は、現在の診療情報を持つ医療者に相談してください。",
    ],
  },
  "stem-cells": {
    title: "幹細胞研究のエビデンスと限界",
    paragraphs: [
      "幹細胞研究では、細胞の由来、培養・精製方法、品質管理、投与方法、対象疾患、追跡期間を分けて確認します。細胞を作れることや前臨床モデルで変化が見られることは、臨床上の利益が確認されたことと同じではありません。",
      "臨床応用には、製造の再現性、未分化細胞や遺伝子変化の管理、免疫反応、腫瘍形成などの長期的な安全性評価が必要です。参考論文は有望性と未解決の課題を併記しており、治療の推奨や効果の保証ではありません。",
    ],
  },
  treatment: {
    title: "治療を検討するときの根拠の確認",
    paragraphs: [
      "治療の説明では、研究結果だけでなく、自分と似た対象者で得られた結果か、何と比較したか、どの結果をどの期間で評価したかを確認します。小規模研究や単一施設の報告は、仮説や可能性を示しても、すべての人に同じ効果があることを示すものではありません。",
      "利益だけでなく、既知のリスク、まだ分からない点、代替治療、費用、治療後の観察と緊急時対応を文書で確認してください。この記事は一般情報であり、個別の治療を勧めるものではありません。",
    ],
  },
  research: {
    title: "研究結果の強さと不確実性",
    paragraphs: [
      "研究結果の強さは、研究デザインだけで決まりません。対象者の選び方、比較群、評価方法、欠測、追跡期間、利益相反、結果の再現性を確認します。系統的レビューやメタ解析にも、研究の偏りや異質性が引き継がれることがあります。",
      "見出しの『有望』『画期的』という表現は、承認や標準治療を意味しません。原著論文、研究登録、公的な承認情報を確認し、記事の更新日以後に情報が変わっていないかも確認してください。",
    ],
  },
} as const;

export function evidenceForCategory(category: keyof typeof evidenceReferencesByCategory): EvidenceReference[] {
  return evidenceReferencesByCategory[category].slice();
}
