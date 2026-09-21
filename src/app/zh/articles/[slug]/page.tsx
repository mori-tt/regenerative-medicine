import { notFound } from "next/navigation";
import { articles, isVisibleArticle, visibleArticles } from "@/content/articles";
import { pageMetadata } from "@/lib/site";
import { LocalizedArticle, localizedArticleFor } from "@/components/localized-article";
export const dynamicParams = false;
export function generateStaticParams() { const params = visibleArticles(articles).map((article) => ({ slug: article.slug })); return params.length > 0 ? params : [{ slug: "__unpublished__" }]; }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const source = articles.find((article) => article.slug === slug); if (!source || !isVisibleArticle(source)) notFound(); const article = localizedArticleFor("zh", source); return pageMetadata(article.title, article.description, `/zh/articles/${slug}/`, true, "zh"); }
export default async function ChineseArticle({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const source = articles.find((article) => article.slug === slug); if (!source || !isVisibleArticle(source)) notFound(); return <LocalizedArticle locale="zh" source={source} />; }
