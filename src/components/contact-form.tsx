"use client";

import { FormEvent, useEffect, useState } from "react";
import { publicAsset } from "@/lib/site";

export function ContactForm() {
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
      {result === "sent" && <p className="form-result success" role="status">お問い合わせを送信しました。通常3営業日以内にご連絡します。</p>}
      {result === "error" && <p className="form-result error" role="alert">送信できませんでした。入力内容を確認するか、時間をおいて再度お試しください。</p>}
      <form className="contact-form" action={publicAsset("/contact.php")} method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="started_at" value={startedAt} />
        <div className="contact-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <label>お名前（必須）<input name="name" required maxLength={80} autoComplete="name" /></label>
        <label>メールアドレス（必須）<input type="email" name="email" required maxLength={254} autoComplete="email" /></label>
        <label>お問い合わせの種類（必須）<select name="category" required defaultValue=""><option value="" disabled>選択してください</option><option value="記事内容について">記事内容について</option><option value="監修・取材について">監修・取材について</option><option value="広告・提携について">広告・提携について</option><option value="運営について">運営について</option><option value="その他">その他</option></select></label>
        <label>お問い合わせ内容（必須）<textarea name="message" required minLength={10} maxLength={5000} rows={8} placeholder="記事URLや該当箇所があればご記入ください。診療情報・検査結果は送信しないでください。" /></label>
        <label className="contact-consent"><input type="checkbox" name="consent" value="1" required /> 個人情報の取り扱いに同意します（<a href={publicAsset("/privacy/")}>プライバシーポリシー</a>）</label>
        <button className="button" type="submit">送信する</button>
      </form>
    </div>
  );
}
