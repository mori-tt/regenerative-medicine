import { notFound } from "next/navigation";
import { JsrmChapterPage } from "@/components/jsrm-chapter";
import { jsrmChapters } from "@/content/jsrm-chapters";
import { pageMetadata } from "@/lib/site";
import { publication } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return jsrmChapters.map((chapter) => ({ chapter: chapter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: slug } = await params;
  const chapter = jsrmChapters.find((item) => item.slug === slug);
  if (!chapter) notFound();
  return pageMetadata(`${chapter.title} | 日本再生医療学会`, chapter.description, `/jsrm/${chapter.slug}/`, publication.mode === "production");
}

export default async function JsrmChapterRoute({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: slug } = await params;
  const index = jsrmChapters.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  return <JsrmChapterPage chapter={jsrmChapters[index]} previous={jsrmChapters[index - 1]} next={jsrmChapters[index + 1]} />;
}
