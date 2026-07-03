import { useCallback, useEffect, useRef, useState } from "react";

const LIGHT_URL = "https://lighthemee.netlify.app/";

type Phase =
  | "idle"
  | "icon-spin"
  | "ripple-to-light"
  | "light-visible"
  | "icon-spin-sun"
  | "ripple-to-dark"
  | "done-dark";

export function ThemeSwitcher() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const moonBtnRef = useRef<HTMLButtonElement>(null);
  const sunBtnRef = useRef<HTMLButtonElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const schedule = (ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  const getBtnOrigin = (ref: React.RefObject<HTMLButtonElement | null>) => {
    if (!ref.current) return { x: window.innerWidth - 42, y: 42 };
    const r = ref.current.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };

  const goToLight = useCallback(() => {
    if (phase !== "idle" && phase !== "done-dark") return;
    setOrigin(getBtnOrigin(moonBtnRef));
    setPhase("icon-spin");
    schedule(420, () => setPhase("ripple-to-light"));
    schedule(1350, () => setPhase("light-visible"));
  }, [phase]);

  const goToDark = useCallback(() => {
    if (phase !== "light-visible") return;
    setOrigin(getBtnOrigin(sunBtnRef));
    setPhase("icon-spin-sun");
    schedule(420, () => setPhase("ripple-to-dark"));
    schedule(1350, () => setPhase("done-dark"));
    schedule(1650, () => setPhase("idle"));
  }, [phase]);

  const isLight = phase === "light-visible" || phase === "icon-spin-sun";
  const showRippleLight = phase === "ripple-to-light";
  const showRippleDark = phase === "ripple-to-dark";

  const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  const maxR = Math.ceil(Math.sqrt(vw ** 2 + vh ** 2));

  return (
    <>
      {/* Light-theme iframe */}
      <iframe
        src={LIGHT_URL}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          zIndex: 40,
          opacity: isLight ? 1 : 0,
          pointerEvents: isLight ? "auto" : "none",
        }}
        title="Light theme"
      />

      {/* Sun button — floats over the iframe */}
      <button
        ref={sunBtnRef}
        onClick={goToDark}
        aria-label="Switch to dark theme"
        disabled={phase !== "light-visible"}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 60,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid oklch(0.75 0.16 85 / 0.5)",
          background: "oklch(0.97 0.02 85 / 0.88)",
          backdropFilter: "blur(12px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px oklch(0.75 0.16 85 / 0.3)",
          transition: "box-shadow 300ms, transform 300ms, opacity 300ms",
          opacity: isLight ? 1 : 0,
          pointerEvents: isLight ? "auto" : "none",
          animation:
            phase === "icon-spin-sun"
              ? "icon-spin-glow-sun 420ms cubic-bezier(0.4,0,0.2,1) forwards"
              : undefined,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.boxShadow = "0 6px 28px oklch(0.75 0.16 85 / 0.55), 0 0 0 4px oklch(0.75 0.16 85 / 0.15)";
          el.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.boxShadow = "0 4px 20px oklch(0.75 0.16 85 / 0.3)";
          el.style.transform = "scale(1)";
        }}
      >
        <SunIcon />
      </button>

      {/* Moon button — dark page */}
      <button
        ref={moonBtnRef}
        onClick={goToLight}
        aria-label="Switch to light theme"
        disabled={phase !== "idle" && phase !== "done-dark"}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 60,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid oklch(0.78 0.14 82 / 0.4)",
          background: "oklch(0.22 0.06 45 / 0.85)",
          backdropFilter: "blur(12px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px oklch(0.78 0.14 82 / 0.25)",
          transition: "box-shadow 300ms, transform 300ms, opacity 300ms",
          opacity: isLight ? 0 : 1,
          pointerEvents: isLight ? "none" : "auto",
          animation:
            phase === "icon-spin"
              ? "icon-spin-glow 420ms cubic-bezier(0.4,0,0.2,1) forwards"
              : undefined,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.boxShadow = "0 6px 28px oklch(0.78 0.14 82 / 0.45), 0 0 0 4px oklch(0.78 0.14 82 / 0.12)";
          el.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.boxShadow = "0 4px 20px oklch(0.78 0.14 82 / 0.25)";
          el.style.transform = "scale(1)";
        }}
      >
        <MoonIcon />
      </button>

      {/* Ripple: dark → light (ivory circle) */}
      {showRippleLight && (
        <Ripple
          x={origin.x}
          y={origin.y}
          maxR={maxR}
          color="oklch(0.97 0.02 85)"
          zIndex={55}
        />
      )}

      {/* Ripple: light → dark (sacred dark circle) */}
      {showRippleDark && (
        <Ripple
          x={origin.x}
          y={origin.y}
          maxR={maxR}
          color="oklch(0.14 0.02 45)"
          zIndex={55}
        />
      )}
    </>
  );
}

function Ripple({
  x, y, maxR, color, zIndex,
}: {
  x: number; y: number; maxR: number; color: string; zIndex: number;
}) {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          background: color,
          width: maxR * 2,
          height: maxR * 2,
          left: x - maxR,
          top: y - maxR,
          animation: "ripple-expand 930ms cubic-bezier(0.4,0,0.2,1) forwards",
          willChange: "transform",
        }}
      />
    </div>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="oklch(0.85 0.14 82)" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="oklch(0.55 0.15 55)" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3"  />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  );
}
