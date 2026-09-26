import Link from "next/link";
import { glossaryGroups } from "@/content/glossary";
import type { SiteLocale } from "@/content/locales";

type GlossLocale = SiteLocale | "ja";

const labels = {
  ja: { index: "分類から探す", more: "関連記事", note: "用語の意味は文脈で変わることがあります。治療の説明で分からない言葉があれば、その場で医療者に確認しましょう。" },
  en: { index: "Browse by group", more: "Related article", note: "Word meanings can shift with context. If a term in a treatment explanation is unclear, ask the provider directly." },
  zh: { index: "按分类查找", more: "相关文章", note: "术语的含义可能因语境而异。治疗说明中如有不明白的词，请当场向医务人员确认。" },
} as const;

function gid(group: { ja: string }, index: number) {
  return `glossary-group-${index}`;
}

export function Glossary({ locale = "ja" }: { locale?: GlossLocale }) {
  const copy = labels[locale];
  const prefix = locale === "ja" ? "" : `/${locale}`;
  const articleHref = (slug: string) => `${prefix}/articles/${slug}/`;
  return (
    <div className="glossary">
      <nav className="filter-links" aria-label={copy.index}>
        {glossaryGroups.map((group, i) => (
          <a key={group.ja} href={`#${gid(group, i)}`}>{locale === "ja" ? group.ja : locale === "en" ? group.en : group.zh}</a>
        ))}
      </nav>
      {glossaryGroups.map((group, i) => (
        <section key={group.ja} id={gid(group, i)} className="glossary-group">
          <h2 className="listing-heading">
            {locale === "ja" ? group.ja : locale === "en" ? group.en : group.zh}
            <span className="listing-count">{group.terms.length}</span>
          </h2>
          <dl className="glossary-list">
            {group.terms.map((term) => {
              const [t, d] = locale === "ja" ? term.ja : locale === "en" ? term.en : term.zh;
              return (
                <div className="glossary-item" key={t}>
                  <dt>{t}</dt>
                  <dd>
                    {d}
                    {term.link && (
                      <Link className="glossary-link" href={articleHref(term.link)}>
                        {copy.more} →
                      </Link>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>
      ))}
      <p className="glossary-note">{copy.note}</p>
    </div>
  );
}
