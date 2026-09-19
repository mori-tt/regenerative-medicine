import { notFound } from "next/navigation";
import { infoPages } from "@/content/pages";
import { pageMetadata } from "@/lib/site";
import { LocalizedInfo, type InfoSlug } from "@/components/localized-info";
const pages = infoPages.map((page) => page.slug) as InfoSlug[];
export const dynamicParams = false;
export function generateStaticParams() { return pages.map((page) => ({ page })); }
export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) { const { page } = await params; if (!pages.includes(page as InfoSlug)) notFound(); return pageMetadata("Information", "Translated site information", `/en/${page}/`, false); }
export default async function EnglishInfo({ params }: { params: Promise<{ page: string }> }) { const { page } = await params; if (!pages.includes(page as InfoSlug)) notFound(); return <LocalizedInfo locale="en" slug={page as InfoSlug} />; }
