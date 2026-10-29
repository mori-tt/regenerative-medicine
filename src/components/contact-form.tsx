"use client";

import { FormEvent, useEffect, useState } from "react";
import { publicAsset } from "@/lib/site";
import type { SiteLocale } from "@/content/locales";

type Step = "input" | "confirm";

type SubmitStatus =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const chrome = {
  ja: {
    sent: "お問い合わせを受け付けました。通常3営業日以内にご連絡します。",
    error:
      "送信できませんでした。入力内容を確認するか、時間をおいて再度お試しください。",
    name: "お名前（必須）",
    email: "メールアドレス（必須）",
    category: "お問い合わせの種類（必須）",
    choose: "選択してください",
    options: [
      ["article", "記事内容について"],
      ["correction", "誤記・修正のご指摘"],
      ["review", "監修・取材について"],
      ["advertising", "広告・提携について"],
      ["operations", "運営について"],
      ["other", "その他"],
    ],
    message: "お問い合わせ内容（必須）",
    messagePlaceholder:
      "記事URLや該当箇所があればご記入ください。診療情報・検査結果は送信しないでください。",
    consent: "個人情報の取り扱いに同意します",
    privacy: "プライバシーポリシー",
    submit: "入力内容を確認する",
    confirmTitle: "入力内容の確認",
    confirmNote:
      "以下の内容で送信します。内容をご確認の上「送信する」を押してください。修正する場合は「入力に戻る」で編集画面に戻れます。",
    back: "入力に戻る",
    send: "送信する",
    sending: "送信中...",
    staticHost:
      "このプレビューサイトではフォーム送信は動作しません。本番サイトのお問い合わせページから送信してください。",
    nameRow: "お名前",
    emailRow: "メールアドレス",
    categoryRow: "お問い合わせの種類",
    messageRow: "お問い合わせ内容",
    consentRow: "個人情報の取り扱い",
    agreed: "同意する",
    notAgreed: "未同意",
  },
  en: {
    sent: "Your inquiry has been sent. We usually reply within three business days.",
    error: "Sending failed. Check your input or try again later.",
    name: "Name (required)",
    email: "Email address (required)",
    category: "Inquiry type (required)",
    choose: "Select",
    options: [
      ["article", "About article content"],
      ["correction", "Report an error or correction"],
      ["review", "About review and interviews"],
      ["advertising", "About advertising and partnerships"],
      ["operations", "About site operations"],
      ["other", "Other"],
    ],
    message: "Message (required)",
    messagePlaceholder:
      "Include the article URL and relevant passage if any. Do not send medical or test information.",
    consent: "I agree to the handling of personal information",
    privacy: "Privacy policy",
    submit: "Review your input",
    confirmTitle: "Confirm your input",
    confirmNote:
      'Please review the details below and press "Send" to submit. To make changes, press "Back" to return to the form.',
    back: "Back",
    send: "Send",
    sending: "Sending...",
    staticHost:
      "Form submission is disabled on this preview site. Please use the contact page on the production site.",
    nameRow: "Name",
    emailRow: "Email address",
    categoryRow: "Inquiry type",
    messageRow: "Message",
    consentRow: "Privacy policy consent",
    agreed: "Agreed",
    notAgreed: "Not agreed",
  },
  zh: {
    sent: "咨询已发送。通常3个工作日内联系。",
    error: "发送失败。请检查输入内容或稍后再试。",
    name: "姓名（必填）",
    email: "邮箱（必填）",
    category: "咨询类别（必填）",
    choose: "请选择",
    options: [
      ["article", "关于文章内容"],
      ["correction", "报告错误或修正"],
      ["review", "关于审核与采访"],
      ["advertising", "关于广告与合作"],
      ["operations", "关于网站运营"],
      ["other", "其他"],
    ],
    message: "咨询内容（必填）",
    messagePlaceholder: "如有文章URL与相关位置请填写。不要发送诊疗与检查信息。",
    consent: "同意个人信息处理",
    privacy: "隐私政策",
    submit: "确认输入内容",
    confirmTitle: "确认输入内容",
    confirmNote:
      "请确认以下内容后按「发送」。如需修改，请按「返回输入」返回编辑页面。",
    back: "返回输入",
    send: "发送",
    sending: "发送中...",
    staticHost: "此预览站点不支持表单提交。请通过正式网站的咨询页面发送。",
    nameRow: "姓名",
    emailRow: "邮箱",
    categoryRow: "咨询类别",
    messageRow: "咨询内容",
    consentRow: "个人信息处理",
    agreed: "同意",
    notAgreed: "未同意",
  },
} as const;

export function ContactForm({
  locale = "ja",
}: { locale?: SiteLocale | "ja" } = {}) {
  const copy = chrome[locale];
  const [startedAt, setStartedAt] = useState("");
  const [step, setStep] = useState<Step>("input");
  const [result, setResult] = useState<"sent" | "error" | "">("");
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });
  const [staticHost, setStaticHost] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const returnPath = locale === "ja" ? "/contact/" : `/${locale}/contact/`;

  useEffect(() => {
    setStartedAt(String(Date.now()));
    // GitHub Pages 等の静的ホストでは contact.php が実行されないため送信を止める
    if (window.location.hostname.endsWith("github.io")) setStaticHost(true);
    const params = new URLSearchParams(window.location.search);
    const statusParam =
      params.get("sent") === "1"
        ? "sent"
        : params.get("error") === "1"
          ? "error"
          : "";
    setResult(statusParam);
    const cat = params.get("category");
    if (cat && copy.options.some(([v]) => v === cat)) setCategory(cat);
    const article = params.get("article");
    if (article) {
      setMessage(
        locale === "ja"
          ? `対象記事: /articles/${article}/\n\n内容：`
          : locale === "en"
            ? `Article: /en/articles/${article}/\n\nDetails:`
            : `相关文章: /zh/articles/${article}/\n\n内容：`,
      );
    }
  }, [copy, locale]);

  const categoryLabel = (value: string) =>
    copy.options.find(([v]) => v === value)?.[1] ?? value;

  function handleConfirm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "idle" });
    setStep("confirm");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    if (staticHost) {
      setStatus({ type: "error", message: copy.error });
      return;
    }
    setStatus({ type: "submitting" });

    try {
      const res = await fetch(publicAsset("/contact.php"), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          category,
          message,
          consent: consent ? "1" : "0",
          website: "",
          locale,
          started_at: startedAt,
          return_path: returnPath,
        }),
      });

      let data: { success?: boolean; message?: string } = {};
      try {
        data = await res.json();
      } catch {
        // JSON でない応答の場合はフォールバック
      }

      if (res.ok && data.success) {
        setStatus({ type: "success", message: copy.sent });
        setName("");
        setEmail("");
        setCategory("");
        setMessage("");
        setConsent(false);
        setStep("input");
      } else {
        setStatus({
          type: "error",
          message: data.message || copy.error,
        });
      }
    } catch {
      setStatus({ type: "error", message: copy.error });
    }
  }

  const statusBanner = (
    <>
      {status.type === "success" && (
        <p className="form-result success" role="status">
          {status.message}
        </p>
      )}
      {status.type === "error" && (
        <p className="form-result error" role="alert">
          {status.message}
        </p>
      )}
    </>
  );

  // ── 確認画面 ──
  if (step === "confirm") {
    return (
      <div className="contact-form-wrap">
        <h2 className="contact-confirm-title">{copy.confirmTitle}</h2>
        <p className="contact-confirm-note">{copy.confirmNote}</p>
        <dl className="contact-confirm-list">
          <div>
            <dt>{copy.nameRow}</dt>
            <dd>{name}</dd>
          </div>
          <div>
            <dt>{copy.emailRow}</dt>
            <dd>{email}</dd>
          </div>
          <div>
            <dt>{copy.categoryRow}</dt>
            <dd>{categoryLabel(category)}</dd>
          </div>
          <div>
            <dt>{copy.messageRow}</dt>
            <dd className="whitespace-pre-wrap">{message}</dd>
          </div>
          <div>
            <dt>{copy.consentRow}</dt>
            <dd>{consent ? copy.agreed : copy.notAgreed}</dd>
          </div>
        </dl>
        {statusBanner}
        <div className="contact-confirm-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => setStep("input")}
            disabled={status.type === "submitting"}
          >
            {copy.back}
          </button>
          <button
            type="button"
            className="button"
            onClick={handleSubmit}
            disabled={status.type === "submitting"}
          >
            {status.type === "submitting" ? copy.sending : copy.send}
          </button>
        </div>
      </div>
    );
  }

  // ── 入力画面 ──
  return (
    <div className="contact-form-wrap">
      {staticHost && (
        <p className="form-result error" role="status">
          {copy.staticHost}
        </p>
      )}
      {result === "sent" && !status.type.startsWith("success") && (
        <p className="form-result success" role="status">
          {copy.sent}
        </p>
      )}
      {result === "error" && !staticHost && status.type === "idle" && (
        <p className="form-result error" role="alert">
          {copy.error}
        </p>
      )}
      <form className="contact-form" onSubmit={handleConfirm}>
        <input type="hidden" name="started_at" value={startedAt} />
        <input type="hidden" name="locale" value={locale} />
        <input type="hidden" name="return_path" value={returnPath} />
        <div className="contact-trap" aria-hidden="true">
          <label>
            Website
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value=""
              onChange={() => {}}
            />
          </label>
        </div>
        <label>
          {copy.name}
          <input
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          {copy.email}
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          {copy.category}
          <select
            name="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              {copy.choose}
            </option>
            {copy.options.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          {copy.message}
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={8}
            placeholder={copy.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <label className="contact-consent">
          <input
            type="checkbox"
            name="consent"
            value="1"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            {copy.consent}（
            <a
              href={publicAsset(
                locale === "ja" ? "/privacy/" : `/${locale}/privacy/`,
              )}
            >
              {copy.privacy}
            </a>
            ）
          </span>
        </label>
        {statusBanner}
        <button className="button" type="submit">
          {copy.submit}
        </button>
      </form>
    </div>
  );
}
