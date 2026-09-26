import Link from "next/link";
import { termsInText } from "@/content/glossary";
import type { SiteLocale } from "@/content/locales";

type TermLocale = SiteLocale | "ja";

const labels = {
  ja: { heading: "この記事に出てくる用語", more: "用語集で確認する", all: "用語集をすべて見る" },
  en: { heading: "Terms used in this article", more: "See glossary", all: "Browse the full glossary" },
  zh: { heading: "本文中出现的术语", more: "查看术语表", all: "查看全部术语" },
} as const;

export function ArticleTerms({ text, locale = "ja" }: { text: string; locale?: TermLocale }) {
  const terms = termsInText(text, locale);
  if (terms.length === 0) return null;
  const copy = labels[locale];
  const prefix = locale === "ja" ? "" : `/${locale}`;
  return (
    <aside className="article-terms" aria-label={copy.heading}>
      <p className="article-terms-heading">{copy.heading}</p>
      <ul>
        {terms.map((t) => (
          <li key={t.id}>
            <Link href={`${prefix}/glossary/#${t.id}`}>{t.term}</Link>
          </li>
        ))}
        <li className="article-terms-all">
          <Link href={`${prefix}/glossary/`}>{copy.all} →</Link>
        </li>
      </ul>
    </aside>
  );
}
