import { useId } from "react";

export function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "search" ? (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4.5 4.5" />
        </>
      ) : name === "arrow" ? (
        <>
          <path d="M4 12h15m-5-5 5 5-5 5" />
        </>
      ) : name === "check" ? (
        <>
          <path d="m8 12 3 3 5-6" />
          <path d="m12 2 8 4v6c0 5-8 9-8 9s-8-4-8-9V6Z" />
        </>
      ) : name === "cross" ? (
        <>
          <rect x="3" y="5" width="18" height="15" rx="3" />
          <path d="M9 5V3h6v2m-3 5v6m-3-3h6" />
        </>
      ) : name === "scope" ? (
        <>
          <path d="m10 3 5 5-4 4-5-5Zm-5 7-2 2m12-2a6 6 0 0 1-1 12M4 21h15M6 16h8" />
        </>
      ) : name === "network" ? (
        <>
          <circle cx="12" cy="12" r="4" />
          <circle cx="4" cy="4" r="2" />
          <circle cx="20" cy="5" r="2" />
          <circle cx="6" cy="21" r="2" />
          <path d="m6 6 3 3m6 0 3-3m-8 10-3 3m9-3 4 4" />
        </>
      ) : name === "book" ? (
        <>
          <path d="M12 5v16M3 3c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2Z" />
        </>
      ) : (
        <>
          <circle cx="9" cy="10" r="7" />
          <circle cx="9" cy="10" r="2" />
          <path d="M17 9a6 6 0 1 1-9 9" />
          <circle cx="17" cy="16" r="1.5" />
        </>
      )}
    </svg>
  );
}

export function CellArt({
  variant = "cells",
  hero = false,
  label = "細胞をモチーフにした抽象イラスト（模式的な表現）",
}: {
  variant?: string;
  hero?: boolean;
  label?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 640 440"
      preserveAspectRatio="xMidYMid slice"
      className={`cell-art ${hero ? "hero-art" : ""}`}
      role="img"
      aria-label={label}
    >
      <defs>
        <radialGradient id={`${id}-bg`}>
          <stop stopColor="#e5f1e9" />
          <stop offset="1" stopColor="#c8ddd1" />
        </radialGradient>
        <radialGradient id={`${id}-cell`} cx="35%" cy="28%">
          <stop stopColor="#fafdf7" stopOpacity=".96" />
          <stop offset=".4" stopColor="#d5e5ce" stopOpacity=".84" />
          <stop offset=".8" stopColor="#96b89a" stopOpacity=".9" />
          <stop offset="1" stopColor="#eff7e5" />
        </radialGradient>
        <radialGradient id={`${id}-core`} cx="30%" cy="25%">
          <stop stopColor="#a6c69e" />
          <stop offset=".65" stopColor="#668e6d" />
          <stop offset="1" stopColor="#507b5b" />
        </radialGradient>
        <filter
          id={`${id}-shadow`}
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feDropShadow
            dx="6"
            dy="15"
            stdDeviation="17"
            floodColor="#50765c"
            floodOpacity=".2"
          />
        </filter>
        <pattern
          id={`${id}-grid`}
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r=".8" fill="#fff" opacity=".6" />
        </pattern>
      </defs>
      <rect width="640" height="440" fill={`url(#${id}-bg)`} />
      <rect width="640" height="440" fill={`url(#${id}-grid)`} />
      <g fill="none" stroke="#f5fcf6" opacity=".65">
        <circle cx="358" cy="207" r="172" />
        <circle cx="358" cy="207" r="208" />
        <path d="M0 220h640M360 0v440" strokeDasharray="3 8" />
      </g>
      {(variant === "network"
        ? [
            [270, 175, 98],
            [410, 258, 85],
            [440, 82, 40],
            [128, 306, 52],
          ]
        : variant === "scope"
          ? [
              [300, 195, 121],
              [453, 307, 57],
              [145, 70, 37],
            ]
          : variant === "cross"
            ? [
                [310, 212, 119],
                [457, 100, 50],
                [131, 325, 39],
              ]
            : [
                [349, 190, 119],
                [225, 303, 78],
                [487, 314, 53],
                [141, 94, 32],
              ]
      ).map(([x, y, r], i) => (
        <g key={i} filter={`url(#${id}-shadow)`}>
          <circle
            cx={x}
            cy={y}
            r={r}
            fill={`url(#${id}-cell)`}
            stroke="#f3f8e9"
            strokeWidth="2"
          />
          <circle
            cx={x}
            cy={y}
            r={r - 7}
            fill="none"
            stroke="#739c7d"
            strokeOpacity=".35"
          />
          <circle
            cx={x + 7}
            cy={y + 6}
            r={r * 0.34}
            fill={`url(#${id}-core)`}
            stroke="#dae9c7"
            strokeWidth="3"
          />
          {Array.from({ length: 17 }, (_, j) => {
            const a = j * 2.4;
            const d = r * (0.47 + (j % 3) * 0.11);
            return (
              <ellipse
                key={j}
                cx={x + Math.cos(a) * d}
                cy={y + Math.sin(a) * d}
                rx={3 + (j % 3)}
                ry="2.5"
                fill={j % 2 ? "#a0be91" : "#f1f5da"}
                opacity=".7"
                transform={`rotate(${j * 30} ${x + Math.cos(a) * d} ${y + Math.sin(a) * d})`}
              />
            );
          })}
          <path
            d={`M${x - r * 0.73} ${y - r * 0.18} Q${x - r * 0.63} ${y - r * 0.72} ${x - r * 0.05} ${y - r * 0.8}`}
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            opacity=".6"
          />
        </g>
      ))}
      <g fill="#729b82" opacity=".3">
        <circle cx="82" cy="218" r="6" />
        <circle cx="540" cy="73" r="9" />
        <circle cx="564" cy="223" r="4" />
        <circle cx="377" cy="391" r="5" />
      </g>
      {hero && (
        <>
          <path
            d="M426 114h88l25-28"
            fill="none"
            stroke="#557862"
            strokeOpacity=".6"
          />
          <circle cx="426" cy="114" r="3" fill="#557862" />
          <text
            x="39"
            y="399"
            fill="#557862"
            fontFamily="sans-serif"
            fontSize="10"
            letterSpacing="3"
          >
            THE SCIENCE OF POSSIBILITY
          </text>
          <text
            x="570"
            y="400"
            fill="#557862"
            fontFamily="sans-serif"
            fontSize="11"
          >
            01 / 04
          </text>
        </>
      )}
    </svg>
  );
}
