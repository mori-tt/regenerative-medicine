import { glossaryGroups, glossaryTermId } from "@/content/glossary";
import { articles, visibleArticles } from "@/content/articles";
import { localizedArticleFor } from "./localized-article";
import { GlossaryList, type GlossaryGroupView, type GlossaryLocale } from "./glossary-list";

// Server component: resolves linked article titles here so the client bundle
// never includes the article dataset or the three-language glossary source.
// Links are only emitted for articles that exist in the current build.
export function Glossary({ locale = "ja" }: { locale?: GlossaryLocale }) {
  const prefix = locale === "ja" ? "" : `/${locale}`;
  const bySlug = new Map(visibleArticles(articles).map((a) => [a.slug, a]));
  const groups: GlossaryGroupView[] = glossaryGroups.map((group, gi) => ({
    id: `glossary-group-${gi}`,
    label: group[locale],
    terms: group.terms.map((term, ti) => {
      const [t, d] = term[locale];
      const linked = term.link ? bySlug.get(term.link) : undefined;
      return {
        id: glossaryTermId(gi, ti),
        term: t,
        definition: d,
        names: [term.ja[0], term.en[0], term.zh[0]],
        /** あいうえお順の読み（未設定は表示名を使用） */
        kana: term.yomi ?? term.ja[0],
        ...(linked
          ? {
              link: {
                href: `${prefix}/articles/${linked.slug}/`,
                title: locale === "ja" ? linked.title : localizedArticleFor(locale, linked).title,
              },
            }
          : {}),
        ...(term.ref ? { ref: term.ref } : {}),
      };
    }),
  }));
  return <GlossaryList locale={locale} groups={groups} />;
}
