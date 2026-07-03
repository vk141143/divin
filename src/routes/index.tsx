import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import templeHero from "@/assets/temple-hero.jpg";
import mandala from "@/assets/mandala.png";
import parchment from "@/assets/parchment.jpg";
import gitaArt from "@/assets/gita.jpg";
import ramayanaArt from "@/assets/ramayana.jpg";
import templeCard from "@/assets/temple-card.jpg";
import meditationArt from "@/assets/meditation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ananta — Eternal Wisdom. Timeless Truth." },
      { name: "description", content: "A sacred mobile experience reconnecting you with Dharma, devotion and the timeless wisdom of ancient India." },
    ],
  }),
  component: Index,
});

/* ---------- ambience ---------- */

function Diyas() {
  const lamps = [
    { top: "12%", left: "6%", size: 10, delay: "0s" },
    { top: "26%", left: "92%", size: 8, delay: "1.2s" },
    { top: "58%", left: "3%", size: 12, delay: "0.6s" },
    { top: "72%", left: "95%", size: 9, delay: "1.8s" },
    { top: "88%", left: "10%", size: 10, delay: "0.3s" },
    { top: "40%", left: "97%", size: 7, delay: "2.1s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      {lamps.map((l, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-flicker shadow-diya"
          style={{
            top: l.top,
            left: l.left,
            width: l.size,
            height: l.size,
            background: "radial-gradient(circle, oklch(0.95 0.15 80) 0%, oklch(0.7 0.16 55) 60%, transparent 100%)",
            animationDelay: l.delay,
          }}
        />
      ))}
    </div>
  );
}

function Particles() {
  const [dots] = useState(() =>
    Array.from({ length: 28 }, (_, i) => ({
      left: `${(i * 37) % 100}%`,
      size: 1 + ((i * 7) % 3),
      delay: `${(i % 12) * 1.4}s`,
      duration: `${18 + (i % 10) * 2}s`,
      opacity: 0.15 + ((i * 11) % 20) / 100,
    })),
  );
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: d.left,
            bottom: "-20px",
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animation: `drift ${d.duration} linear infinite`,
            animationDelay: d.delay,
            filter: "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
}

function Petals() {
  const [petals] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      left: `${(i * 53) % 100}%`,
      delay: `${(i * 3) % 30}s`,
      duration: `${22 + (i % 5) * 4}s`,
      size: 10 + (i % 4) * 4,
    })),
  );
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: p.left,
            top: "-40px",
            width: p.size,
            height: p.size,
            animation: `petal-fall ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        >
          <svg viewBox="0 0 20 20" className="h-full w-full">
            <path d="M10 1 C6 6 4 10 10 19 C16 10 14 6 10 1 Z" fill="oklch(0.75 0.13 20 / 0.55)" />
          </svg>
        </span>
      ))}
    </div>
  );
}

/* ---------- decorative primitives ---------- */

function OmSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <text x="50" y="72" textAnchor="middle" fontSize="80" fill="currentColor" fontFamily="serif">ॐ</text>
    </svg>
  );
}

function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 text-gold/70">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" opacity="0.8"/></svg>
      {label && <span className="font-display text-[10px] tracking-[0.4em] uppercase">{label}</span>}
      <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" opacity="0.8"/></svg>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}

function ArchFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 400" className="absolute inset-0 h-full w-full text-gold/40" aria-hidden preserveAspectRatio="none">
        <path d="M10 390 L10 100 Q10 10 100 10 Q190 10 190 100 L190 390" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 390 L18 100 Q18 18 100 18 Q182 18 182 100 L182 390" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      </svg>
      {children}
    </div>
  );
}

/* ---------- phone frame ---------- */

function Phone({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="relative mx-auto w-[300px] shrink-0">
      {label && (
        <div className="mb-4 text-center font-display text-[10px] tracking-[0.4em] text-gold/80 uppercase">
          {label}
        </div>
      )}
      <div className="relative rounded-[42px] bg-gold-gradient p-[3px] shadow-manuscript">
        <div className="rounded-[40px] bg-[oklch(0.14_0.03_45)] p-[6px]">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[34px] ring-gold-inset">
            {/* notch */}
            <div className="absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex h-8 items-end justify-between px-6 pb-1 text-[10px] font-medium text-ink/70">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span>●●●</span>
        <span>􀛨</span>
      </span>
    </div>
  );
}

function BottomNav({ active }: { active: string }) {
  const items = [
    { k: "home", label: "Home", d: "M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V11z" },
    { k: "library", label: "Library", d: "M4 4h4v16H4zM10 4h4v16h-4zM16 6l4-1 3 15-4 1z" },
    { k: "emotions", label: "Heart", d: "M12 21s-7-4.5-9.5-9.5C.5 6.5 5 3 8.5 5 10 5.7 11 7 12 8c1-1 2-2.3 3.5-3 3.5-2 8 1.5 6 6.5C19 16.5 12 21 12 21z" },
    { k: "temples", label: "Temples", d: "M12 2 L15 5 V8 H18 V12 H21 V22 H3 V12 H6 V8 H9 V5 Z" },
    { k: "profile", label: "You", d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 9a8 8 0 0 1 16 0z" },
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 border-t border-bronze/30 bg-[oklch(0.9_0.05_82)]/95 px-3 pb-4 pt-2 backdrop-blur">
      <div className="flex justify-between">
        {items.map((it) => {
          const on = active === it.k;
          return (
            <button key={it.k} className="flex flex-1 flex-col items-center gap-0.5">
              <svg viewBox="0 0 24 24" className={`h-5 w-5 ${on ? "text-saffron" : "text-ink/50"}`}>
                <path d={it.d} fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <span className={`text-[9px] ${on ? "text-saffron font-semibold" : "text-ink/50"}`}>{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- individual screens ---------- */

function ScreenIntro() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-sacred">
      <img src={templeHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.05_40)]/40 via-transparent to-[oklch(0.1_0.03_40)]/90" />
      <img src={mandala} alt="" className="absolute left-1/2 top-[18%] h-64 w-64 -translate-x-1/2 opacity-40 animate-rotate-slow" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-24 text-center">
        <div className="mb-6 text-6xl text-gold animate-float-slow" style={{ textShadow: "0 0 40px oklch(0.75 0.16 65 / 0.6)" }}>ॐ</div>
        <h1 className="font-display text-4xl tracking-[0.25em] text-gold-shimmer">ANANTA</h1>
        <div className="mt-2 font-serif italic text-sm text-ivory/80">Eternal Wisdom · Timeless Truth</div>
        <div className="mt-8 max-w-[220px] font-serif text-[13px] italic leading-relaxed text-ivory/70">
          "May wisdom guide every step<br />of your journey."
        </div>
        <div className="mt-10 flex items-center gap-2 text-gold/70">
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-[9px] font-display tracking-[0.4em]">PREPARING</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>
      </div>
    </div>
  );
}

function ScreenDashboard() {
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundImage: `url(${parchment})`, backgroundSize: "cover" }}>
      <div className="absolute inset-0 bg-parchment/60" />
      <div className="relative z-10 flex h-full flex-col">
        <StatusBar />
        <div className="flex items-center justify-between px-5 pb-2">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-bronze"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div className="font-display text-[11px] tracking-[0.35em] text-maroon">ANANTA</div>
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-bronze"><path d="M12 2a6 6 0 0 0-6 6v3l-2 4h16l-2-4V8a6 6 0 0 0-6-6zM9 19a3 3 0 0 0 6 0" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>
        </div>

        <div className="flex-1 overflow-hidden px-4 pb-20 pt-1">
          {/* Greeting */}
          <div className="mb-3">
            <div className="font-serif text-[19px] leading-tight text-maroon">
              जय श्री कृष्ण, <span className="italic">Vishnu</span>
            </div>
            <div className="text-[10px] text-ink/60">May this dawn bring you peace ✦ Sunday, Śrāvaṇa 12</div>
          </div>

          {/* Verse card */}
          <div className="relative mb-3 overflow-hidden rounded-2xl border border-bronze/30 bg-gradient-to-br from-[oklch(0.9_0.06_78)] to-[oklch(0.82_0.09_65)] p-3 shadow-manuscript">
            <img src={mandala} alt="" className="absolute -right-8 -top-8 h-32 w-32 opacity-15" />
            <div className="text-[8px] font-display tracking-[0.35em] text-bronze">TODAY'S VERSE · गीता २.४७</div>
            <div className="font-devanagari mt-1 text-[11px] leading-snug text-maroon">
              कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
            </div>
            <div className="font-serif mt-1 text-[10px] italic leading-snug text-ink/75">
              "You have the right to work, but never to its fruits."
            </div>
            <div className="mt-2 flex gap-1.5">
              <button className="rounded-full bg-saffron px-2.5 py-1 text-[9px] font-semibold text-ivory">▶ Listen</button>
              <button className="rounded-full border border-bronze/40 px-2.5 py-1 text-[9px] text-maroon">Reflect</button>
            </div>
          </div>

          {/* Two column mini cards */}
          <div className="mb-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-bronze/30 bg-ivory/70 p-2">
              <div className="text-[8px] font-display tracking-[0.3em] text-bronze">STREAK</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-serif text-2xl text-maroon">47</span>
                <span className="text-[9px] text-ink/60">days</span>
              </div>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className="h-1.5 flex-1 rounded-full" style={{ background: i < 5 ? "oklch(0.68 0.17 55)" : "oklch(0.85 0.05 75)" }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-bronze/30 bg-ivory/70 p-2">
              <div className="text-[8px] font-display tracking-[0.3em] text-bronze">MEDITATION</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-serif text-2xl text-maroon">21</span>
                <span className="text-[9px] text-ink/60">min today</span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-[oklch(0.85_0.05_75)]">
                <div className="h-full rounded-full bg-saffron" style={{ width: "70%" }} />
              </div>
            </div>
          </div>

          {/* Continue reading */}
          <div className="mb-3 flex gap-2 rounded-xl border border-bronze/30 bg-ivory/60 p-2">
            <img src={ramayanaArt} alt="" className="h-14 w-14 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="text-[8px] font-display tracking-[0.3em] text-bronze">CONTINUE READING</div>
              <div className="font-serif text-[13px] leading-tight text-maroon">Ramayana</div>
              <div className="text-[9px] text-ink/60">Yuddha Kāṇḍa · Chapter 18</div>
              <div className="mt-1 h-1 w-full rounded-full bg-[oklch(0.85_0.05_75)]">
                <div className="h-full rounded-full bg-copper" style={{ width: "42%" }} />
              </div>
            </div>
          </div>

          {/* Nearby temple */}
          <div className="relative overflow-hidden rounded-xl border border-bronze/30 shadow-manuscript">
            <img src={templeCard} alt="" className="h-20 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.05_40)]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <div className="text-[8px] font-display tracking-[0.3em] text-gold/90">TEMPLE NEARBY</div>
              <div className="font-serif text-[13px] text-ivory">Śrī Ranganātha Temple</div>
              <div className="text-[9px] text-ivory/70">2.1 km · Open until 9:00 PM</div>
            </div>
          </div>
        </div>

        <BottomNav active="home" />
      </div>
    </div>
  );
}

function ScreenReader() {
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundImage: `url(${parchment})`, backgroundSize: "cover" }}>
      <div className="absolute inset-0 bg-parchment/70" />
      <div className="relative z-10 flex h-full flex-col">
        <StatusBar />
        <div className="flex items-center justify-between px-4 pb-2">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-bronze"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
          <div className="text-center">
            <div className="font-display text-[10px] tracking-[0.35em] text-maroon">BHAGAVAD GĪTĀ</div>
            <div className="text-[8px] text-ink/60">Chapter 12 · Bhakti Yoga</div>
          </div>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-bronze"><path d="M5 3v18l7-4 7 4V3z" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>
        </div>

        {/* Manuscript */}
        <div className="mx-3 mb-2 flex-1 overflow-hidden rounded-2xl border-2 border-double border-bronze/40 bg-gradient-to-b from-[oklch(0.94_0.05_82)] to-[oklch(0.88_0.07_75)] shadow-manuscript">
          <div className="relative h-full overflow-hidden p-4">
            <img src={mandala} alt="" className="absolute -right-14 -top-14 h-40 w-40 opacity-10" />
            <img src={mandala} alt="" className="absolute -bottom-16 -left-16 h-40 w-40 opacity-10" />

            <div className="mb-2 flex justify-center">
              <svg viewBox="0 0 40 8" className="w-24 text-bronze/60"><path d="M0 4 L14 4 M20 4 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M26 4 L40 4" stroke="currentColor" strokeWidth="0.6" fill="none"/></svg>
            </div>

            <div className="font-devanagari text-[13px] leading-relaxed text-maroon" style={{ textAlign: "justify" }}>
              अद्वेष्टा सर्वभूतानां <span className="bg-gold/40 px-0.5 rounded">मैत्रः</span> करुण एव च।
              <br />निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥
            </div>

            <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />

            <div className="font-serif text-[11px] italic leading-relaxed text-ink/85">
              adveṣṭā sarva-bhūtānāṁ<br />maitraḥ karuṇa eva ca<br />nirmamo nirahaṅkāraḥ<br />sama-duḥkha-sukhaḥ kṣamī
            </div>

            <div className="my-3 flex items-center justify-center gap-2 text-bronze/60">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-[8px] font-display tracking-[0.4em]">MEANING</span>
              <span className="h-px w-8 bg-bronze/40" />
            </div>

            <div className="font-serif text-[11px] leading-relaxed text-ink/90">
              One who is <em>free of enmity</em> to all beings, friendly and compassionate, without possessiveness or ego, equal in sorrow and joy, and forgiving…
            </div>
          </div>
        </div>

        {/* Reader toolbar */}
        <div className="mx-3 mb-3 flex items-center justify-between rounded-full border border-bronze/30 bg-ivory/80 px-3 py-1.5">
          {[
            { d: "M6 4h9a3 3 0 0 1 3 3v14l-7-4-8 4V6a2 2 0 0 1 2-2z", label: "Save" },
            { d: "M4 5h16M4 12h16M4 19h10", label: "Notes" },
            { d: "M9 18V5l12-2v13M9 18a3 3 0 1 1-3-3M21 16a3 3 0 1 1-3-3", label: "Audio" },
            { d: "M3 12h18M12 3v18", label: "Font" },
            { d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20", label: "Lang" },
          ].map((t) => (
            <button key={t.label} className="flex flex-col items-center gap-0.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-bronze"><path d={t.d} stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
              <span className="text-[8px] text-ink/60">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="pb-3" />
      </div>
    </div>
  );
}

function ScreenEmotions() {
  const emotions = [
    { k: "Anger", c: "oklch(0.55 0.19 25)", ico: "🔥" },
    { k: "Fear", c: "oklch(0.42 0.12 260)", ico: "☾" },
    { k: "Love", c: "oklch(0.72 0.13 15)", ico: "❤" },
    { k: "Grief", c: "oklch(0.45 0.06 240)", ico: "❉" },
    { k: "Hope", c: "oklch(0.7 0.15 90)", ico: "☀" },
    { k: "Stress", c: "oklch(0.55 0.13 45)", ico: "✦" },
    { k: "Success", c: "oklch(0.65 0.15 65)", ico: "♛" },
    { k: "Confusion", c: "oklch(0.5 0.1 300)", ico: "?" },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden" style={{ backgroundImage: `url(${parchment})`, backgroundSize: "cover" }}>
      <div className="absolute inset-0 bg-parchment/70" />
      <div className="relative z-10 flex h-full flex-col">
        <StatusBar />
        <div className="px-5 pb-2 text-center">
          <div className="font-display text-[10px] tracking-[0.35em] text-bronze">HRIDAYA · हृदय</div>
          <h2 className="font-serif text-xl leading-tight text-maroon">What does your heart carry today?</h2>
          <p className="mx-auto mt-1 max-w-[220px] text-[10px] italic text-ink/60">
            Let the Gītā answer. Choose an emotion and receive verses, stories & a guided practice.
          </p>
        </div>

        <div className="flex-1 overflow-hidden px-4 pt-2">
          <div className="grid grid-cols-2 gap-2.5">
            {emotions.map((e) => (
              <div
                key={e.k}
                className="group relative overflow-hidden rounded-2xl border border-bronze/30 p-3 shadow-manuscript"
                style={{ background: `linear-gradient(140deg, ${e.c} 0%, oklch(0.35 0.08 40) 120%)` }}
              >
                <div className="text-2xl text-ivory/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}>{e.ico}</div>
                <div className="mt-4 font-serif text-[13px] text-ivory">{e.k}</div>
                <div className="text-[9px] italic text-ivory/70">Wisdom · Verse · Prayer</div>
                <svg viewBox="0 0 60 30" className="absolute -bottom-1 -right-1 h-10 w-16 text-ivory/10" aria-hidden>
                  <path d="M30 2 Q10 15 30 28 Q50 15 30 2 Z" fill="currentColor" />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <BottomNav active="emotions" />
      </div>
    </div>
  );
}

function ScreenTemples() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[oklch(0.9_0.05_82)]">
      <div className="relative z-10 flex h-full flex-col">
        <StatusBar />
        <div className="flex items-center justify-between px-4 pb-2">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-bronze"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
          <div className="font-display text-[11px] tracking-[0.35em] text-maroon">TEMPLES NEARBY</div>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-bronze"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.4" fill="none"/><path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.4"/></svg>
        </div>

        {/* Faux map */}
        <div className="relative mx-3 mb-3 h-40 overflow-hidden rounded-2xl border border-bronze/30 shadow-manuscript">
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, oklch(0.86 0.05 82), oklch(0.78 0.07 72))",
          }} />
          {/* faux roads */}
          <svg viewBox="0 0 300 160" className="absolute inset-0 h-full w-full text-bronze/30" preserveAspectRatio="none">
            <path d="M0 90 Q80 40 160 80 T300 60" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M40 0 Q60 80 120 160" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <path d="M200 0 Q220 90 260 160" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <circle cx="70" cy="30" r="18" fill="oklch(0.82 0.07 82)" />
            <circle cx="220" cy="110" r="24" fill="oklch(0.82 0.07 82)" />
          </svg>
          {/* markers */}
          {[
            { top: "38%", left: "22%" },
            { top: "62%", left: "58%" },
            { top: "28%", left: "72%" },
            { top: "70%", left: "30%" },
          ].map((m, i) => (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-full" style={{ top: m.top, left: m.left }}>
              <svg viewBox="0 0 24 32" className="h-7 w-5 text-saffron drop-shadow-md">
                <path d="M12 0 C4 0 0 6 0 12 C0 22 12 32 12 32 C12 32 24 22 24 12 C24 6 20 0 12 0 Z" fill="currentColor" />
                <circle cx="12" cy="12" r="4" fill="oklch(0.95 0.03 85)" />
              </svg>
            </div>
          ))}
          <div className="absolute bottom-2 right-2 rounded-full border border-bronze/30 bg-ivory/80 px-2 py-0.5 text-[9px] text-ink/70">
            Bengaluru · 4 temples
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3 pb-20">
          {[
            { name: "Śrī Ranganātha Temple", dist: "2.1 km", meta: "Vaiṣṇava · Open · 4.8 ★" },
            { name: "Kāla Bhairava Mandir", dist: "3.4 km", meta: "Śaiva · Ārati 6:30 PM · 4.7 ★" },
            { name: "Lakṣmī Nārasiṁha", dist: "4.2 km", meta: "Live Darśan · 4.9 ★" },
          ].map((t, i) => (
            <div key={i} className="mb-2 flex gap-2 rounded-xl border border-bronze/30 bg-ivory/80 p-2">
              <img src={templeCard} alt="" className="h-14 w-14 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="font-serif text-[13px] leading-tight text-maroon">{t.name}</div>
                <div className="text-[9px] text-ink/60">{t.meta}</div>
                <div className="mt-1 flex gap-1">
                  <span className="rounded-full bg-saffron/15 px-2 py-0.5 text-[8px] font-semibold text-saffron">Directions</span>
                  <span className="rounded-full border border-bronze/40 px-2 py-0.5 text-[8px] text-bronze">Darśan</span>
                </div>
              </div>
              <div className="text-right text-[9px] text-ink/50">{t.dist}</div>
            </div>
          ))}
        </div>
        <BottomNav active="temples" />
      </div>
    </div>
  );
}

/* ---------- feature strip ---------- */

function FeaturePillar({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="relative flex flex-col items-center px-4 text-center">
      <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-[oklch(0.25_0.07_40)] text-gold shadow-diya">
        {icon}
      </div>
      <div className="font-display text-[11px] tracking-[0.3em] text-gold">{title}</div>
      <div className="mt-2 font-serif text-sm leading-relaxed text-ivory/70">{body}</div>
    </div>
  );
}

/* ---------- page ---------- */

function Index() {
  useEffect(() => {
    document.title = "Ananta — Eternal Wisdom. Timeless Truth.";
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-sacred text-ivory">
      <Diyas />
      <Particles />
      <Petals />

      {/* faint temple pillars silhouette */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-40 opacity-20 md:block"
        style={{ background: "linear-gradient(90deg, oklch(0.35 0.08 40) 0%, transparent 100%)" }} />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-40 opacity-20 md:block"
        style={{ background: "linear-gradient(270deg, oklch(0.35 0.08 40) 0%, transparent 100%)" }} />

      {/* ---------- HERO ---------- */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 pt-16 pb-24">
        <div className="mb-8 flex items-center gap-3 text-gold/70">
          <span className="h-px w-10 bg-gold/40" />
          <span className="font-display text-[10px] tracking-[0.5em]">A SACRED APPLICATION</span>
          <span className="h-px w-10 bg-gold/40" />
        </div>

        <div className="relative mb-6 text-7xl text-gold animate-float-slow" style={{ textShadow: "0 0 60px oklch(0.75 0.16 65 / 0.5)" }}>ॐ</div>

        <h1 className="text-center font-display text-6xl tracking-[0.2em] text-gold-shimmer md:text-8xl">
          ANANTA
        </h1>
        <div className="mt-3 font-serif text-lg italic text-ivory/75 md:text-xl">
          Eternal Wisdom · Timeless Truth
        </div>

        <p className="mt-8 max-w-xl text-center font-serif text-base leading-relaxed text-ivory/70 md:text-lg">
          A mobile experience that does not open — it <em>invites</em> you in.
          Scriptures illuminated like ancient manuscripts, temples at your doorstep,
          and the wisdom of the Gītā for every emotion your heart carries.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-gold-gradient px-8 py-3 font-display text-xs tracking-[0.35em] text-ink shadow-diya">
            BEGIN THE JOURNEY
          </button>
          <button className="rounded-full border border-gold/50 px-8 py-3 font-display text-xs tracking-[0.35em] text-gold/90 hover:bg-gold/10">
            LISTEN TO A VERSE
          </button>
        </div>

        {/* phones showcase */}
        <div className="mt-20 flex w-full items-end justify-center gap-6 overflow-x-auto pb-4 md:gap-10">
          <div className="translate-y-6 opacity-90">
            <Phone label="Śāstra · Manuscript"><ScreenReader /></Phone>
          </div>
          <div className="z-10 scale-110">
            <Phone label="Praveśa · Awakening"><ScreenIntro /></Phone>
          </div>
          <div className="translate-y-6 opacity-90">
            <Phone label="Prabhāta · Dawn"><ScreenDashboard /></Phone>
          </div>
        </div>
      </section>

      {/* ---------- INTRO CEREMONY ---------- */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <Divider label="THE AWAKENING" />
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-ivory md:text-5xl">
              Not an app launch.<br />
              <span className="italic text-gold-shimmer">A ceremony of arrival.</span>
            </h2>
            <p className="mt-6 max-w-lg font-serif leading-relaxed text-ivory/70">
              A distant bell. The low breath of a conch. Morning birds. Sunlight edging through carved pillars.
              Dust drifting in golden shafts. Oil lamps waking one by one. A single Sanskrit letter blooms from the dark.
              Lotus petals descend. Then, the name.
            </p>
            <div className="mt-8 space-y-3 font-serif text-sm text-ivory/60">
              {[
                "01 · Temple bells & conch",
                "02 · Sunrise through pillars",
                "03 · Floating dust particles",
                "04 · Diya lamps awaken",
                "05 · Sanskrit ornaments unfurl",
                "06 · Lotus petals fall",
                "07 · Ananta appears in gold",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-gold/40" />
                  <span className="font-display text-[10px] tracking-[0.35em] text-gold/70">{s.split(" · ")[0]}</span>
                  <span>{s.split(" · ")[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <ArchFrame className="mx-auto h-[520px] w-[260px]">
            <div className="relative m-3 h-[calc(100%-24px)] w-[calc(100%-24px)] overflow-hidden rounded-t-full">
              <img src={templeHero} alt="Sunrise through temple pillars" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.03_40)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-0 right-0 text-center font-serif italic text-ivory/90 text-sm">
                "May wisdom guide<br />every step of your journey."
              </div>
            </div>
          </ArchFrame>
        </div>
      </section>

      {/* ---------- PILLARS OF PRACTICE ---------- */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <Divider label="SEVEN PILLARS OF PRACTICE" />
        <h2 className="mt-8 text-center font-serif text-4xl italic text-ivory/90 md:text-5xl">
          Everything a seeker needs, <span className="text-gold-shimmer not-italic">nothing they don't.</span>
        </h2>

        <div className="mt-16 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <FeaturePillar
            icon={<svg viewBox="0 0 24 24" className="h-7 w-7"><path d="M4 4h10a3 3 0 0 1 3 3v13l-6-3-6 3V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>}
            title="ŚĀSTRA · SCRIPTURES"
            body="Gītā, Rāmāyaṇa, Vedas, 18 Purāṇas — rendered like illuminated manuscripts, with commentary in ten languages."
          />
          <FeaturePillar
            icon={<svg viewBox="0 0 24 24" className="h-7 w-7"><path d="M12 3v6M12 3l3 3M12 3l-3 3M5 21h14l-2-7H7z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>}
            title="DAILY WISDOM"
            body="A single verse to carry through the day. Read, hear, reflect, remember. One truth is enough."
          />
          <FeaturePillar
            icon={<svg viewBox="0 0 24 24" className="h-7 w-7"><path d="M12 2 L15 5 V8 H18 V12 H21 V22 H3 V12 H6 V8 H9 V5 Z" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>}
            title="MANDIRA · TEMPLES"
            body="Discover temples near you. Live darśan, timings, ārati, donations — a doorway to devotion."
          />
          <FeaturePillar
            icon={<svg viewBox="0 0 24 24" className="h-7 w-7"><path d="M12 21s-7-4.5-9.5-9.5C.5 6.5 5 3 8.5 5 10 5.7 11 7 12 8c1-1 2-2.3 3.5-3 3.5-2 8 1.5 6 6.5C19 16.5 12 21 12 21z" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>}
            title="HRIDAYA · EMOTIONS"
            body="Anger, grief, love, fear. Every emotion answered by the Gītā through verse, story and practice."
          />
          <FeaturePillar
            icon={<svg viewBox="0 0 24 24" className="h-7 w-7"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" fill="none"/><path d="M12 3v18M3 12h18M5 5l14 14M5 19L19 5" stroke="currentColor" strokeWidth="0.7"/></svg>}
            title="ITIHĀSA · HISTORY"
            body="Walk the Maurya, Gupta, Chola, Vijayanagara & Maratha eras through interactive timelines and maps."
          />
          <FeaturePillar
            icon={<svg viewBox="0 0 24 24" className="h-7 w-7"><path d="M4 20h16M6 20V10l6-4 6 4v10M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>}
            title="UTSAVA · FESTIVALS"
            body="Every tithi, every festival, every ārati — never miss a sacred day again."
          />
          <FeaturePillar
            icon={<svg viewBox="0 0 24 24" className="h-7 w-7"><path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-3-3M21 16a3 3 0 1 1-3-3" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>}
            title="ŚRAVAṆA · LISTEN"
            body="Audiobooks & TTS in Sanskrit, Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Marathi, Bengali."
          />
          <FeaturePillar
            icon={<svg viewBox="0 0 24 24" className="h-7 w-7"><path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>}
            title="TAPAS · GROWTH"
            body="Streaks, reading goals, meditation minutes. Gentle discipline — the practice becomes the path."
          />
        </div>
      </section>

      {/* ---------- MANUSCRIPT SHOWCASE ---------- */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <Divider label="THE MANUSCRIPT" />
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <Phone label="Śloka · Chapter XII"><ScreenReader /></Phone>
          <div>
            <h2 className="font-serif text-4xl leading-tight text-ivory md:text-5xl">
              Read as the <span className="italic text-gold-shimmer">ṛṣis</span> once read.
            </h2>
            <p className="mt-5 max-w-lg font-serif leading-relaxed text-ivory/70">
              Every śloka set on aged parchment. Devanāgarī typeset with reverence.
              Golden highlights, page-turn animations soft as breath, tap any word for meaning,
              commentary from Śaṅkara, Rāmānuja, Madhva — side by side.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Devanāgarī", "IAST", "हिन्दी", "தமிழ்", "తెలుగు", "ಕನ್ನಡ", "മലയാളം", "ગુજરાતી", "मराठी", "বাংলা"].map((l) => (
                <span key={l} className="rounded-full border border-gold/40 px-3 py-1 text-[11px] text-ivory/80">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EMOTIONS + TEMPLES ---------- */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <Divider label="A COMPANION FOR THE HEART" />
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl leading-tight text-ivory md:text-5xl">
              When words fail, <span className="italic text-gold-shimmer">the Gītā answers.</span>
            </h2>
            <p className="mt-5 max-w-lg font-serif leading-relaxed text-ivory/70">
              A grief-quiet evening. A morning of stubborn anger. The tremor before an unknown day.
              Choose the emotion in your chest — and receive the exact verses, stories, and practice
              spoken to it five thousand years ago.
            </p>
            <div className="mt-8 rounded-2xl border border-gold/25 bg-[oklch(0.2_0.05_40)]/50 p-6 shadow-manuscript">
              <div className="font-display text-[10px] tracking-[0.35em] text-gold/80">FOR GRIEF · गीता २.१३</div>
              <div className="font-devanagari mt-3 text-lg leading-snug text-ivory">
                देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।
              </div>
              <div className="mt-2 font-serif text-sm italic text-ivory/70">
                "As childhood, youth, and old age come to the embodied one in this body, so too comes another body. The wise are not deluded."
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Phone label="Hridaya · Emotions"><ScreenEmotions /></Phone>
          </div>
        </div>

        <div className="mt-32 grid items-center gap-10 md:grid-cols-2">
          <Phone label="Mandira · Temples Nearby"><ScreenTemples /></Phone>
          <div>
            <h2 className="font-serif text-4xl leading-tight text-ivory md:text-5xl">
              Every temple, <span className="italic text-gold-shimmer">at your feet.</span>
            </h2>
            <p className="mt-5 max-w-lg font-serif leading-relaxed text-ivory/70">
              Ranganātha, Bhairava, Nārasiṁha — nearby or across the country.
              Live darśan feeds. Ārati times. Directions in one tap. Donations without friction.
              Festivals mapped to your calendar so the sacred never slips by unnoticed.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { n: "27k+", l: "Temples" },
                { n: "180+", l: "Live Darśan" },
                { n: "9 langs", l: "Guidance" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-gold/25 bg-[oklch(0.2_0.05_40)]/50 py-4">
                  <div className="font-serif text-2xl text-gold-shimmer">{s.n}</div>
                  <div className="mt-1 font-display text-[9px] tracking-[0.3em] text-ivory/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ITIHĀSA / HISTORY ---------- */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <Divider label="ITIHĀSA · THE UNBROKEN THREAD" />
        <h2 className="mt-10 text-center font-serif text-4xl leading-tight text-ivory md:text-5xl">
          Five thousand years, <span className="italic text-gold-shimmer">held in one palm.</span>
        </h2>

        <div className="mt-14 relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          <div className="space-y-14">
            {[
              { era: "322 – 185 BCE", name: "Maurya Empire", body: "Chandragupta, Chāṇakya, Ashoka. The first pan-Indian polity — Dharma inscribed on rock." },
              { era: "320 – 550 CE", name: "Gupta Golden Age", body: "Kālidāsa, Āryabhaṭa, temple architecture, Sanskrit at its zenith." },
              { era: "300 – 1279 CE", name: "Chola Empire", body: "Bronze deities that still breathe. Bṛhadīśvara. Naval trade to Southeast Asia." },
              { era: "1336 – 1646 CE", name: "Vijayanagara", body: "Hampi's stone chariots. A civilisation that shielded the flame through storm." },
              { era: "1674 – 1818 CE", name: "Marāṭhā Empire", body: "Śivājī Mahārāja. Dharma reborn as swarājya, hillfort by hillfort." },
            ].map((e, i) => (
              <div key={e.name} className={`relative grid grid-cols-2 gap-8 ${i % 2 ? "" : ""}`}>
                <div className={`${i % 2 ? "col-start-2" : "text-right"}`}>
                  <div className="font-display text-[10px] tracking-[0.35em] text-gold/80">{e.era}</div>
                  <div className="font-serif text-2xl text-ivory">{e.name}</div>
                  <div className="mt-2 font-serif text-sm leading-relaxed text-ivory/65">{e.body}</div>
                </div>
                <div className="absolute left-1/2 top-2 -translate-x-1/2">
                  <div className="h-4 w-4 rounded-full border-2 border-gold bg-[oklch(0.25_0.07_40)] shadow-diya" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MEDITATION QUOTE ---------- */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-manuscript">
          <img src={meditationArt} alt="Sage meditating under a tree" className="h-[420px] w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0.03_40)] via-[oklch(0.15_0.05_40)]/60 to-transparent" />
          <div className="absolute inset-0 flex items-center p-10 md:p-16">
            <div className="max-w-md">
              <div className="font-display text-[10px] tracking-[0.4em] text-gold/80">DHYĀNA · MEDITATION</div>
              <div className="mt-4 font-serif text-3xl italic leading-snug text-ivory md:text-4xl">
                "Stillness is not the absence of sound. It is the presence of the Self."
              </div>
              <div className="mt-6 font-serif text-sm text-ivory/70">— Guided sits, mantra japa, prāṇāyāma, and silence. In your pocket, on your terms.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PREMIUM ---------- */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <Divider label="ANANTA · SUVARṆA" />
        <h2 className="mt-10 text-center font-serif text-4xl italic text-ivory/90 md:text-5xl">
          The <span className="text-gold-shimmer not-italic">golden</span> membership.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-ivory/65">
          Unlimited scripture downloads. Every commentary. Every audio track. Every language.
          Ad-free. Family sharing for six. A donation to a temple of your choosing each month.
        </p>

        <div className="mx-auto mt-12 max-w-md">
          <div className="relative overflow-hidden rounded-3xl bg-gold-gradient p-[2px] shadow-diya">
            <div className="rounded-3xl bg-[oklch(0.18_0.05_40)] p-8">
              <img src={mandala} alt="" className="absolute -right-16 -top-16 h-64 w-64 opacity-10" />
              <div className="flex items-center justify-between">
                <div className="font-display text-xs tracking-[0.35em] text-gold">SUVARṆA</div>
                <div className="text-2xl text-gold">ॐ</div>
              </div>
              <div className="mt-8 font-serif text-4xl text-ivory">₹ 499<span className="text-lg text-ivory/60"> / year</span></div>
              <div className="mt-1 font-serif text-sm text-ivory/60">≈ ₹41 a month · the price of a diya</div>
              <ul className="mt-6 space-y-2 font-serif text-sm text-ivory/80">
                {[
                  "All scriptures · offline · lifetime",
                  "Śaṅkara · Rāmānuja · Madhva commentary",
                  "Every language, every audio narration",
                  "Family of six · one subscription",
                  "1% to a temple of your choosing",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 text-gold">✦</span>{f}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-gold-gradient py-3 font-display text-xs tracking-[0.35em] text-ink shadow-diya">
                BECOME A SUVARṆA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CLOSING ---------- */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-32 pt-16 text-center">
        <div className="text-5xl text-gold animate-float-slow" style={{ textShadow: "0 0 60px oklch(0.75 0.16 65 / 0.5)" }}>ॐ</div>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-ivory md:text-6xl">
          Read. Reflect. <span className="italic text-gold-shimmer">Realise.</span>
        </h2>
        <div className="font-devanagari mt-4 text-lg text-ivory/70">
          गीता का ज्ञान, जीवन की पहचान
        </div>
        <p className="mx-auto mt-6 max-w-lg font-serif text-ivory/60">
          Your journey towards Dharma begins with a single breath. And ends only when it must.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-gold-gradient px-8 py-3 font-display text-xs tracking-[0.35em] text-ink shadow-diya">
            DOWNLOAD FOR iOS
          </button>
          <button className="rounded-full border border-gold/50 px-8 py-3 font-display text-xs tracking-[0.35em] text-gold/90">
            DOWNLOAD FOR ANDROID
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4 text-gold/60">
          <span className="h-px w-16 bg-gold/40" />
          <span className="font-display text-[9px] tracking-[0.5em]">धर्मो रक्षति रक्षितः</span>
          <span className="h-px w-16 bg-gold/40" />
        </div>
        <div className="mt-4 font-serif text-xs italic text-ivory/40">
          "Dharma, when protected, protects."
        </div>

        <div className="mt-16 font-display text-[10px] tracking-[0.5em] text-ivory/40">
          ANANTA · MMXXVI
        </div>
      </section>
    </main>
  );
}
