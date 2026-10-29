import type { Metadata } from "next";
import { JsrmGuide } from "@/components/jsrm-guide";
import { pageMetadata } from "@/lib/site";
import { publication } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata(
  "日本再生医療学会とは？役割・沿革・認定制度",
  "日本再生医療学会の役割、沿革、学術活動、認定医・臨床培養士などの認定制度、関連する法制度を公式資料から詳しく整理する特集です。",
  "/jsrm/",
  publication.mode === "production",
);

export default function JsrmPage() {
  return <JsrmGuide />;
}
