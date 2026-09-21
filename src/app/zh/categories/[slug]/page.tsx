import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/site";
import { LocalizedCategory, localizedCategoryFor } from "@/components/localized-category";
const slugs = ["basics", "stem-cells", "treatment", "research"] as const;
export const dynamicParams = false;
export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!slugs.includes(slug as (typeof slugs)[number])) notFound(); const copy = localizedCategoryFor("zh", slug as (typeof slugs)[number]); return pageMetadata(copy.title, copy.description, `/zh/categories/${slug}/`, true, "zh"); }
export default async function ChineseCategory({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!slugs.includes(slug as (typeof slugs)[number])) notFound(); return <LocalizedCategory locale="zh" slug={slug as (typeof slugs)[number]} />; }
