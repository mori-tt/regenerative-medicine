import { notFound } from "next/navigation";
import { infoPages } from "@/content/pages";
import { pageMetadata } from "@/lib/site";
import { LocalizedInfo, infoTitleFor, type InfoSlug } from "@/components/localized-info";
const pages = infoPages.map((page) => page.slug) as InfoSlug[];
export const dynamicParams = false;
export function generateStaticParams() { return pages.map((page) => ({ page })); }
export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) { const { page } = await params; if (!pages.includes(page as InfoSlug)) notFound(); return pageMetadata(infoTitleFor("zh", page as InfoSlug), "翻译网站信息", `/zh/${page}/`, false); }
export default async function ChineseInfo({ params }: { params: Promise<{ page: string }> }) { const { page } = await params; if (!pages.includes(page as InfoSlug)) notFound(); return <LocalizedInfo locale="zh" slug={page as InfoSlug} />; }
