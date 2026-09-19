import { notFound } from "next/navigation";
import { LocalizedJsrmChapter } from "@/components/localized-jsrm";
import { jsrmChapters } from "@/content/jsrm-chapters";
import { jsrmChapterLocales } from "@/content/jsrm-locales";
import { pageMetadata } from "@/lib/site";
import { publication } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return jsrmChapters.map((chapter) => ({ chapter: chapter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: slug } = await params;
  const translated = jsrmChapterLocales.en[slug];
  if (!translated) notFound();
  return pageMetadata(
    `${translated.title} | JSRM`,
    translated.description,
    `/en/jsrm/${slug}/`,
    publication.mode === "production",
    "en",
  );
}

export default async function EnglishJsrmChapterRoute({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: slug } = await params;
  if (!jsrmChapters.some((item) => item.slug === slug)) notFound();
  return <LocalizedJsrmChapter locale="en" slug={slug} />;
}
