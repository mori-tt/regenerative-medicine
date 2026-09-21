import basics from "./evidence/basics.json";
import stemCells from "./evidence/stem-cells.json";
import treatment from "./evidence/treatment.json";
import research from "./evidence/research.json";

export type EvidenceLocale = "ja" | "en" | "zh";
export type EvidenceSource = {
  id: string;
  title: string;
  url: string;
  studyType: string;
  accessedScope: "abstract" | "full-text" | "official-guidance";
  checkedAt: string;
};
export type CitedSection = {
  id: string;
  title: string;
  paragraphs: string[];
  paragraphReferences?: string[][];
};
export type ArticleEvidence = {
  sources: EvidenceSource[];
  locales: Record<
    EvidenceLocale,
    {
      sections: {
        title: string;
        paragraphs: { text: string; sourceIds: string[] }[];
      }[];
    }
  >;
  corrections: {
    locale: EvidenceLocale;
    old: string;
    new: string;
    reason: string;
    sourceIds: string[];
  }[];
  auditNote: string;
};

export const articleEvidence: Record<string, ArticleEvidence> = {
  ...basics,
  ...stemCells,
  ...treatment,
  ...research,
} as Record<string, ArticleEvidence>;

export function evidenceSectionsFor(
  slug: string,
  locale: EvidenceLocale,
): CitedSection[] {
  const entry = articleEvidence[slug];
  return (entry?.locales[locale]?.sections ?? []).map((section, index) => ({
    id: `${slug}-literature-${index + 1}`,
    title: section.title,
    paragraphs: section.paragraphs.map((paragraph) => paragraph.text),
    paragraphReferences: section.paragraphs.map(
      (paragraph) => paragraph.sourceIds,
    ),
  }));
}

/** Exact manuscript corrections stay auditable beside the source that supports them. */
export function correctArticleText(
  slug: string,
  locale: EvidenceLocale,
  text: string,
): string {
  return (articleEvidence[slug]?.corrections ?? [])
    .filter((correction) => correction.locale === locale)
    .reduce(
      (value, correction) => value.replaceAll(correction.old, correction.new),
      text,
    );
}

export function correctArticleSections<
  T extends { title: string; paragraphs: string[] },
>(
  slug: string,
  locale: EvidenceLocale,
  sections: T[],
): (T & { paragraphReferences?: string[][] })[] {
  return sections.map((section) => ({
    ...section,
    title: correctArticleText(slug, locale, section.title),
    paragraphs: section.paragraphs.map((text) =>
      correctArticleText(slug, locale, text),
    ),
    paragraphReferences: section.paragraphs.map((text) => [
      ...new Set(
        (articleEvidence[slug]?.corrections ?? [])
          .filter(
            (correction) =>
              correction.locale === locale && text.includes(correction.old),
          )
          .flatMap((correction) => correction.sourceIds),
      ),
    ]),
  }));
}
