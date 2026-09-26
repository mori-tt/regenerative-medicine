// 模式図のカード・フローステップで使う小さなピクトグラム。
// 24×24 のストロークアイコン。装飾目的であり、医学的な精確さを示すものではない。

export type IconName =
  | "cell" | "cells" | "split" | "dna" | "flask" | "tube" | "syringe" | "drop"
  | "heart" | "brain" | "bone" | "money" | "calendar" | "clipboard" | "check"
  | "warning" | "magnify" | "book" | "person" | "group" | "hospital" | "phone"
  | "food" | "moon" | "eye" | "bulb" | "share" | "mesh" | "snow" | "send"
  | "bug" | "shield" | "wound" | "layers" | "arrow" | "organ" | "pill"
  | "scalpel" | "gov" | "clock" | "run" | "mouth" | "dome";

export function VisualIcon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "cell" && <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></>}
      {name === "cells" && <><circle cx="8" cy="9" r="4" /><circle cx="16" cy="7" r="3" /><circle cx="13" cy="16" r="4" /></>}
      {name === "split" && <><circle cx="8" cy="12" r="5" /><circle cx="16" cy="12" r="5" /></>}
      {name === "dna" && <><path d="M7 3c0 6 10 6 10 9s-10 3-10 9" /><path d="M17 3c0 6-10 6-10 9s10 3 10 9" /><path d="M8.5 7.5h7M8.5 16.5h7" /></>}
      {name === "flask" && <><path d="M9 3h6" /><path d="M10 3v5l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 8V3" /><path d="M8 15h8" /></>}
      {name === "tube" && <><path d="M9 3h6" /><path d="M10 3v14a2 2 0 0 0 4 0V3" /><path d="M10 12h4" /></>}
      {name === "syringe" && <><path d="m4 20 5-5" /><path d="M9 9l6 6" /><path d="M12 6l6 6" /><path d="m13 5 2-2 6 6-2 2" /><path d="m18 4 2 2" /></>}
      {name === "drop" && <path d="M12 3S6.5 9.5 6.5 14a5.5 5.5 0 0 0 11 0C17.5 9.5 12 3 12 3z" />}
      {name === "heart" && <path d="M12 20C6 15 3.5 12 3.5 8.5A4.4 4.4 0 0 1 12 6a4.4 4.4 0 0 1 8.5 2.5C20.5 12 18 15 12 20z" />}
      {name === "brain" && <><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.5A3.5 3.5 0 0 0 8 19a3 3 0 0 0 4-1.5V6.5A3 3 0 0 0 9 4z" /><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.5A3.5 3.5 0 0 1 16 19a3 3 0 0 1-4-1.5" /></>}
      {name === "bone" && <path d="M6.5 6.5a2 2 0 1 1 3.5 1.5l4.5 4.5a2 2 0 1 1 1 3.5 2 2 0 1 1-3.5-1.5l-4.5-4.5a2 2 0 1 1-1-3.5z" />}
      {name === "money" && <><circle cx="12" cy="12" r="9" /><path d="M8.5 7l3.5 4 3.5-4M12 11v6M9.5 13h5M9.5 16h5" /></>}
      {name === "calendar" && <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></>}
      {name === "clipboard" && <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4h6v3H9z" /><path d="m9 13 2 2 4-4" /></>}
      {name === "check" && <path d="m4.5 12.5 5 5 10-11" />}
      {name === "warning" && <><path d="M12 3 2.5 20h19z" /><path d="M12 9v5" /><circle cx="12" cy="17" r="0.4" fill="currentColor" /></>}
      {name === "magnify" && <><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 6 6" /></>}
      {name === "book" && <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 5.5v15" /><path d="M20 18H6.5" /></>}
      {name === "person" && <><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></>}
      {name === "group" && <><circle cx="9" cy="9" r="3.5" /><circle cx="17" cy="9.5" r="2.8" /><path d="M3 20a6 6 0 0 1 12 0M14.5 20a5 5 0 0 1 7-4.5" /></>}
      {name === "hospital" && <><rect x="4" y="4" width="16" height="17" rx="2" /><path d="M12 8v6M9 11h6" /></>}
      {name === "phone" && <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>}
      {name === "food" && <><path d="M12 7a6 6 0 0 1 6 6c0 4-3 8-6 8s-6-4-6-8a6 6 0 0 1 6-6z" /><path d="M12 7c0-2 1.5-3.5 3.5-4" /></>}
      {name === "moon" && <path d="M19 13A8 8 0 1 1 11 4a6.5 6.5 0 0 0 8 9z" />}
      {name === "eye" && <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.5" /></>}
      {name === "bulb" && <><circle cx="12" cy="10" r="6" /><path d="M9.5 19h5M10.5 21.5h3" /><path d="M9 10c0-1.5 1-2.5 2-3" /></>}
      {name === "share" && <><circle cx="6" cy="12" r="3" /><circle cx="17" cy="5" r="3" /><circle cx="17" cy="19" r="3" /><path d="m8.7 10.5 5.6-4M8.7 13.5l5.6 4" /></>}
      {name === "mesh" && <><rect x="4" y="4" width="16" height="16" rx="1.5" /><path d="M9.3 4v16M14.7 4v16M4 9.3h16M4 14.7h16" /></>}
      {name === "snow" && <><path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" /></>}
      {name === "send" && <path d="M3.5 12h13m-4-4.5 4.5 4.5-4.5 4.5" />}
      {name === "bug" && <><circle cx="12" cy="12" r="6" /><path d="M12 6V3M6.8 7.8 4.5 5.5M17.2 7.8l2.3-2.3M6.8 16.2l-2.3 2.3M17.2 16.2l2.3 2.3M6 12H3M21 12h-3" /></>}
      {name === "shield" && <><path d="M12 3 5 5.5v6c0 4.5 3 7.5 7 9.5 4-2 7-5 7-9.5v-6z" /><path d="m9 12 2 2 4-4" /></>}
      {name === "wound" && <><rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-20 12 12)" /><circle cx="10" cy="11" r="0.8" fill="currentColor" /><circle cx="14" cy="13" r="0.8" fill="currentColor" /></>}
      {name === "layers" && <><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></>}
      {name === "arrow" && <path d="M4 12h14m-5-5 5 5-5 5" />}
      {name === "organ" && <path d="M12 3c4 0 7 3 7 8 0 3-2 5-3.5 5S13 15 13 13s2-3 2-5-1-5-3-5z" />}
      {name === "pill" && <><rect x="4" y="9" width="16" height="7" rx="3.5" transform="rotate(-35 12 12)" /><path d="m9.7 9.5 4.6 6" /></>}
      {name === "scalpel" && <><path d="M4 20l9-3 8-12-4-1z" /><path d="M13 17l7-4" /></>}
      {name === "gov" && <><path d="M4 8 12 3l8 5" /><path d="M4 20h16M6 10v8M10.5 10v8M13.5 10v8M18 10v8" /></>}
      {name === "clock" && <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>}
      {name === "run" && <path d="M13 4 9 12l4 1-2 7 7-9-4-1z" />}
      {name === "mouth" && <><path d="M5 13a7 5 0 0 1 14 0" /><path d="M8 13v3M12 13.5V17M16 13v3" /></>}
      {name === "dome" && <path d="M4 19a8 8 0 0 1 16 0M8 19v-4M12 19v-6M16 19v-4" />}
    </svg>
  );
}
