"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./visuals";

const copy = {
  ja: {
    ask: "この記事は役に立ちましたか？",
    yes: "はい",
    no: "いいえ",
    thanks: "ご意見をありがとうございます。",
    detail: "詳しいご意見・ご質問はこちらから（3営業日以内に回答）",
    correction: "誤記・修正のご指摘",
    note: "個別の病状相談は受け付けていません。診療に関することは医療機関へご相談ください。",
  },
  en: {
    ask: "Was this article helpful?",
    yes: "Yes",
    no: "No",
    thanks: "Thank you for your feedback.",
    detail: "Share detailed comments or questions (we reply within 3 business days)",
    correction: "Report an error or correction",
    note: "We cannot answer individual medical consultations. Please consult your healthcare provider.",
  },
  zh: {
    ask: "这篇文章对您有帮助吗？",
    yes: "有帮助",
    no: "没有",
    thanks: "感谢您的反馈。",
    detail: "如需详细意见或咨询，请通过表单联系（3个工作日内回复）",
    correction: "报告错误或修正建议",
    note: "我们无法回答个人医疗咨询。请咨询您的医疗机构。",
  },
} as const;

export function ArticleFeedback({
  slug,
  locale = "ja",
}: {
  slug: string;
  locale?: "ja" | "en" | "zh";
}) {
  const c = copy[locale];
  const [voted, setVoted] = useState<string | null>(null);

  useEffect(() => {
    const key = `feedback-${slug}`;
    const stored = localStorage.getItem(key);
    if (stored) setVoted(stored);
  }, [slug]);

  function vote(value: "yes" | "no") {
    const key = `feedback-${slug}`;
    localStorage.setItem(key, value);
    setVoted(value);
  }

  const contactHref =
    locale === "ja"
      ? `/contact/?category=article&article=${encodeURIComponent(slug)}`
      : `/${locale}/contact/?category=article&article=${encodeURIComponent(slug)}`;
  const correctionHref =
    locale === "ja"
      ? `/contact/?category=correction&article=${encodeURIComponent(slug)}`
      : `/${locale}/contact/?category=correction&article=${encodeURIComponent(slug)}`;

  return (
    <section className="article-feedback" aria-labelledby="feedback-heading">
      <h2 id="feedback-heading" className="feedback-question">
        {c.ask}
      </h2>
      {!voted ? (
        <div className="feedback-buttons">
          <button type="button" className="feedback-btn yes" onClick={() => vote("yes")}>
            <Icon name="check" size={18} /> {c.yes}
          </button>
          <button type="button" className="feedback-btn no" onClick={() => vote("no")}>
            {c.no}
          </button>
        </div>
      ) : (
        <p className="feedback-thanks" role="status">
          {c.thanks}
        </p>
      )}
      <div className="feedback-links">
        <Link href={contactHref} className="feedback-link">
          {c.detail} →
        </Link>
        <Link href={correctionHref} className="feedback-link subtle">
          {c.correction} →
        </Link>
      </div>
      <p className="feedback-note">{c.note}</p>
    </section>
  );
}
