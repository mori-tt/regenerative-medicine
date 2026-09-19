import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/site";
import { LocalizedArticle, localizedArticleFor } from "@/components/localized-article";
export const dynamicParams = false;
export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const source = articles.find((article) => article.slug === slug); if (!source) notFound(); const article = localizedArticleFor("zh", source); return pageMetadata(article.title, article.description, `/zh/articles/${slug}/`, false, "zh"); }
export default async function ChineseArticle({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const source = articles.find((article) => article.slug === slug); if (!source) notFound(); return <LocalizedArticle locale="zh" source={source} />; }
