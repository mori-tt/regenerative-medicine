import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/site";
import { categories } from "@/content/categories";
import { LocalizedCategory, localizedCategoryFor } from "@/components/localized-category";
const slugs = categories.map((c) => c.slug);
export const dynamicParams = false;
export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!slugs.includes(slug as (typeof slugs)[number])) notFound(); const copy = localizedCategoryFor("en", slug as (typeof slugs)[number]); return pageMetadata(copy.title, copy.description, `/en/categories/${slug}/`, true, "en"); }
export default async function EnglishCategory({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!slugs.includes(slug as (typeof slugs)[number])) notFound(); return <LocalizedCategory locale="en" slug={slug as (typeof slugs)[number]} />; }
