"use client";

import { FormEvent, useEffect, useState } from "react";
import { publicAsset } from "@/lib/site";
import type { SiteLocale } from "@/content/locales";

const chrome = {
  ja: {
    sent: "お問い合わせを送信しました。通常3営業日以内にご連絡します。",
    error: "送信できませんでした。入力内容を確認するか、時間をおいて再度お試しください。",
    name: "お名前（必須）", email: "メールアドレス（必須）", category: "お問い合わせの種類（必須）",
    choose: "選択してください",
    options: ["記事内容について", "監修・取材について", "広告・提携について", "運営について", "その他"],
    message: "お問い合わせ内容（必須）", messagePlaceholder: "記事URLや該当箇所があればご記入ください。診療情報・検査結果は送信しないでください。",
    consent: "個人情報の取り扱いに同意します", privacy: "プライバシーポリシー", submit: "送信する",
  },
  en: {
    sent: "Your inquiry has been sent. We usually reply within three business days.",
    error: "Sending failed. Check your input or try again later.",
    name: "Name (required)", email: "Email address (required)", category: "Inquiry type (required)",
    choose: "Select",
    options: ["About article content", "About review and interviews", "About advertising and partnerships", "About site operations", "Other"],
    message: "Message (required)", messagePlaceholder: "Include the article URL and relevant passage if any. Do not send medical or test information.",
    consent: "I agree to the handling of personal information", privacy: "Privacy policy", submit: "Send",
  },
  zh: {
    sent: "咨询已发送。通常3个工作日内联系。",
    error: "发送失败。请检查输入内容或稍后再试。",
    name: "姓名（必填）", email: "邮箱（必填）", category: "咨询类别（必填）",
    choose: "请选择",
    options: ["关于文章内容", "关于审核与采访", "关于广告与合作", "关于网站运营", "其他"],
    message: "咨询内容（必填）", messagePlaceholder: "如有文章URL与相关位置请填写。不要发送诊疗与检查信息。",
    consent: "同意个人信息处理", privacy: "隐私政策", submit: "发送",
  },
} as const;

export function ContactForm({ locale = "ja" }: { locale?: SiteLocale | "ja" } = {}) {
  const copy = chrome[locale];
  const [startedAt, setStartedAt] = useState("");
  const [result, setResult] = useState<"sent" | "error" | "">("");

  useEffect(() => {
    setStartedAt(String(Date.now()));
    const params = new URLSearchParams(window.location.search);
    const status = params.get("sent") === "1" ? "sent" : params.get("error") === "1" ? "error" : "";
    setResult(status);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (!startedAt) {
      event.preventDefault();
      setResult("error");
    }
  }

  return (
    <div className="contact-form-wrap">
      {result === "sent" && <p className="form-result success" role="status">{copy.sent}</p>}
      {result === "error" && <p className="form-result error" role="alert">{copy.error}</p>}
      <form className="contact-form" action={publicAsset("/contact.php")} method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="started_at" value={startedAt} />
        <div className="contact-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <label>{copy.name}<input name="name" required maxLength={80} autoComplete="name" /></label>
        <label>{copy.email}<input type="email" name="email" required maxLength={254} autoComplete="email" /></label>
        <label>{copy.category}<select name="category" required defaultValue=""><option value="" disabled>{copy.choose}</option>{copy.options.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
        <label>{copy.message}<textarea name="message" required minLength={10} maxLength={5000} rows={8} placeholder={copy.messagePlaceholder} /></label>
        <label className="contact-consent"><input type="checkbox" name="consent" value="1" required /> {copy.consent}（<a href={publicAsset(locale === "ja" ? "/privacy/" : `/${locale}/privacy/`)}>{copy.privacy}</a>）</label>
        <button className="button" type="submit">{copy.submit}</button>
      </form>
    </div>
  );
}
