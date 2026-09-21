import type { Article } from "@/content/articles";
import type { EvidenceLocale } from "@/content/article-evidence";
import pubmedData from "@/content/evidence/pubmed-metadata.json";
const pubmedMetadata = pubmedData as Record<
  string,
  { authors: string[]; journal: string; year: string; doi: string }
>;

const labels = {
  ja: {
    title: "参考文献・公式資料",
    citation: "参考文献",
    scope: {
      abstract: "抄録を確認",
      "full-text": "本文を確認",
      "official-guidance": "発行元の公式資料を確認",
    },
    checked: "参照確認",
    background: "背景資料",
    note: "本文中の番号は対応する出典を示します。論文の結果は、研究対象・条件・観察期間の範囲で解釈してください。抄録のみ確認した資料はその旨を表示しています。文献の参照確認は、医師による記事監修や治療の推奨を意味しません。",
  },
  en: {
    title: "References and official sources",
    citation: "Reference",
    scope: {
      abstract: "Abstract consulted",
      "full-text": "Full text consulted",
      "official-guidance": "Publisher’s official guidance consulted",
    },
    checked: "Consulted",
    background: "Background source",
    note: "Numbers in the text link to the supporting source. Interpret findings within the study population, conditions, and follow-up. Abstract-only access is marked. Consulting sources does not constitute physician review of this article or a treatment recommendation.",
  },
  zh: {
    title: "参考文献与官方资料",
    citation: "参考文献",
    scope: {
      abstract: "已查阅摘要",
      "full-text": "已查阅正文",
      "official-guidance": "已查阅官方或学会资料",
    },
    checked: "查阅日期",
    background: "背景资料",
    note: "正文中的编号链接至对应资料。请在研究对象、条件和观察期限内理解结果。仅查阅摘要的资料会明确标注。查阅文献不代表医生已审核本文，也不代表推荐治疗。",
  },
};

export function CitationLinks({
  ids,
  references,
  locale,
}: {
  ids?: string[];
  references: Article["references"];
  locale: EvidenceLocale;
}) {
  if (!ids?.length) return null;
  return (
    <sup className="citation-links">
      {ids.map((id) => {
        const index = references.findIndex((reference) => reference.id === id);
        if (index < 0) throw new Error(`Unresolved citation: ${id}`);
        return (
          <a
            key={id}
            href={`#reference-${index + 1}`}
            aria-label={`${labels[locale].citation} ${index + 1}`}
          >
            [{index + 1}]
          </a>
        );
      })}
    </sup>
  );
}

export function ArticleReferences({
  references,
  locale,
}: {
  references: Article["references"];
  locale: EvidenceLocale;
}) {
  const copy = labels[locale];
  return (
    <section className="references" aria-labelledby="references-title">
      <h2 id="references-title">{copy.title}</h2>
      <p className="reference-policy">{copy.note}</p>
      <ol>
        {references.map((reference, index) => {
          const pmid = reference.url.match(
            /^https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)\/$/,
          )?.[1];
          const metadata = pmid ? pubmedMetadata[pmid] : undefined;
          return (
            <li id={`reference-${index + 1}`} key={reference.url}>
              <a href={reference.url} target="_blank" rel="noopener noreferrer">
                {reference.title} ↗
              </a>
              {metadata && (
                <small className="reference-detail">
                  {metadata.authors.slice(0, 3).join(", ")}
                  {metadata.authors.length > 3 ? " et al." : ""} ·{" "}
                  {metadata.journal} ({metadata.year}) · PMID: {pmid}
                  {metadata.doi && (
                    <>
                      {" "}
                      ·{" "}
                      <a
                        href={`https://doi.org/${metadata.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DOI: {metadata.doi}
                      </a>
                    </>
                  )}
                </small>
              )}
              <small className="reference-detail">
                {reference.id ? (
                  <>
                    {reference.studyType} ·{" "}
                    {reference.accessedScope &&
                      copy.scope[reference.accessedScope]}
                    {reference.checkedAt && (
                      <>
                        {" "}
                        · {copy.checked}:{" "}
                        <time dateTime={reference.checkedAt}>
                          {reference.checkedAt}
                        </time>
                      </>
                    )}
                  </>
                ) : (
                  copy.background
                )}
              </small>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
