import type { Metadata } from "next";
import { JsrmGuide } from "@/components/jsrm-guide";
import { pageMetadata } from "@/lib/site";
import { publication } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata(
  "日本再生医療学会とは？役割・沿革・認定制度",
  "日本再生医療学会の役割、沿革、認定制度、制度情報を公式資料から詳しく整理します。",
  "/jsrm/",
  publication.mode === "production",
);

export default function JsrmPage() {
  return <JsrmGuide />;
}
