import Link from "next/link";
import { availableCategories } from "@/content/articles";
import { localizedCategoryName } from "@/content/locales";
import { localePrefix, type UiLocale } from "@/lib/locale-path";
import { FeaturedButton } from "./featured-filter";
import { CategoryPicker } from "./navigation";

const copy = {
  ja: {
    label: "カテゴリから探す",
    category: "カテゴリ",
    all: "すべての記事",
    featured: "おすすめ",
  },
  en: {
    label: "Browse by category",
    category: "Category",
    all: "All articles",
    featured: "Featured",
  },
  zh: {
    label: "按分类浏览",
    category: "分类",
    all: "全部文章",
    featured: "推荐",
  },
} as const;

export function CategoryNavigation({
  locale = "ja",
  current,
  counts,
  total,
  featuredCount,
  hideFeatured = featuredCount === 0,
}: {
  locale?: UiLocale;
  current?: string;
  counts?: Record<string, number>;
  total?: number;
  featuredCount: number;
  /** 全記事がおすすめで絞り込みの意味がないときは非表示にする */
  hideFeatured?: boolean;
}) {
  const text = copy[locale];
  const prefix = localePrefix(locale);
  const items = [
    { slug: "all", label: text.all, href: `${prefix}/articles/`, count: total },
    ...availableCategories().map((category) => ({
      slug: category.slug,
      label:
        locale === "ja"
          ? category.label
          : localizedCategoryName(locale, category.slug),
      href: `${prefix}/categories/${category.slug}/`,
      count: counts?.[category.slug],
    })),
  ];
  const selected = items.find((item) => item.slug === current) ?? items[0];
  const links = () =>
    items.map((item) => (
      <Link
        key={item.slug}
        href={item.href}
        className={item.slug === selected.slug ? "active" : undefined}
        aria-current={item.slug === selected.slug ? "page" : undefined}
      >
        {item.label}
        {item.count !== undefined && <small>{item.count}</small>}
      </Link>
    ));

  return (
    <nav className="category-navigation" aria-label={text.label}>
      <div className="category-navigation-links filter-links">{links()}</div>
      <CategoryPicker
        label={text.category}
        selected={selected.label}
        count={selected.count}
      >
        <div className="filter-links">{links()}</div>
      </CategoryPicker>
      {!hideFeatured && (
        <FeaturedButton label={text.featured} count={featuredCount} />
      )}
    </nav>
  );
}
