import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/site";
import { LocalizedCategory } from "@/components/localized-category";
const slugs = ["basics", "stem-cells", "treatment", "research"] as const;
export const dynamicParams = false;
export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!slugs.includes(slug as (typeof slugs)[number])) notFound(); return pageMetadata("主题", "翻译主题页面", `/zh/categories/${slug}/`, false); }
export default async function ChineseCategory({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!slugs.includes(slug as (typeof slugs)[number])) notFound(); return <LocalizedCategory locale="zh" slug={slug as (typeof slugs)[number]} />; }
