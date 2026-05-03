"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const TARGET_DATE = new Date("2027-01-15T00:00:00");

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days:  Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    mins:  Math.floor((diff / 60_000)    % 60),
    secs:  Math.floor((diff / 1_000)     % 60),
  };
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function HeroSection() {
  const [time, setTime]     = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  const heroRef  = useRef<HTMLElement>(null);
  const blobRef  = useRef<HTMLDivElement>(null);
  const mouse    = useRef({ x: 50, y: 50 });
  const smooth   = useRef({ x: 50, y: 50 });
  const raf      = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouse.current = {
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      smooth.current.x = lerp(smooth.current.x, mouse.current.x, 0.05);
      smooth.current.y = lerp(smooth.current.y, mouse.current.y, 0.05);
      if (blobRef.current) {
        blobRef.current.style.left = `${smooth.current.x}%`;
        blobRef.current.style.top  = `${smooth.current.y}%`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <header
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080806]"
    >
      {/* ───────── Aurora layer ───────── */}
      {/*
        Key to smooth gradients:
        - Orbs must be at LEAST 3× their blur radius in size
        - Very low opacity so blending is soft
        - will-change + translateZ forces GPU compositing = no banding
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ isolation: "isolate" }}
      >
        {/* Mouse-tracking gold blob — large + very soft */}
        <div
          ref={blobRef}
          style={{
            position:  "absolute",
            width:     1100,
            height:    1100,
            left:      "50%",
            top:       "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.06) 40%, rgba(201,168,76,0) 70%)",
            filter:        "blur(120px)",
            willChange:    "left, top",
          }}
        />

        {/* Orb A — gold, top-left, drifts slow */}
        <div
          className="aurora-orb-1"
          style={{
            position:     "absolute",
            width:        900,
            height:       900,
            top:          "-20%",
            left:         "-10%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 40%, rgba(230,195,100,0.14) 0%, rgba(230,195,100,0) 65%)",
            filter:        "blur(140px)",
            willChange:    "transform",
            transform:     "translateZ(0)",
          }}
        />

        {/* Orb B — blue, bottom-right */}
        <div
          className="aurora-orb-2"
          style={{
            position:     "absolute",
            width:        1000,
            height:       1000,
            bottom:       "-25%",
            right:        "-10%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 60% 60%, rgba(30,144,255,0.12) 0%, rgba(30,144,255,0) 65%)",
            filter:        "blur(160px)",
            willChange:    "transform",
            transform:     "translateZ(0)",
          }}
        />

        {/* Orb C — gold, bottom-left */}
        <div
          className="aurora-orb-3"
          style={{
            position:     "absolute",
            width:        700,
            height:       700,
            bottom:       "-10%",
            left:         "5%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0) 65%)",
            filter:        "blur(120px)",
            willChange:    "transform",
            transform:     "translateZ(0)",
          }}
        />

        {/* Orb D — blue, top-right */}
        <div
          className="aurora-orb-4"
          style={{
            position:     "absolute",
            width:        800,
            height:       800,
            top:          "-15%",
            right:        "0%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(30,144,255,0.09) 0%, rgba(30,144,255,0) 65%)",
            filter:        "blur(130px)",
            willChange:    "transform, opacity",
            transform:     "translateZ(0)",
          }}
        />
      </div>

      {/* ───────── Content ───────── */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6">

        {/* AX letters */}
        <div className="flex items-end justify-center gap-2 mb-4" style={{ lineHeight: 1 }}>
          <span
            className="font-[var(--font-space-grotesk)] font-black tracking-tighter text-[#e6c364]"
            style={{ fontSize: "clamp(80px,13vw,148px)", lineHeight: 1 }}
          >
            A
          </span>
          <span
            className="font-[var(--font-space-grotesk)] font-black tracking-tighter text-[#b0b2b6]"
            style={{ fontSize: "clamp(80px,13vw,148px)", lineHeight: 1 }}
          >
            X
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-[var(--font-space-grotesk)] font-bold text-white tracking-[-0.03em] w-full max-w-3xl mx-auto mb-12"
          style={{ fontSize: "clamp(24px,4.6vw,58px)", lineHeight: 1.1 }}
        >
          Accelerating the{" "}
          <em className="text-[#e6c364] not-italic">Intelligence</em>{" "}
          Revolution
        </h1>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 md:gap-12 mb-14">
          {[
            { val: mounted ? String(time.days) : "—", label: "Days" },
            { val: mounted ? pad(time.hours)   : "—", label: "Hours" },
            { val: mounted ? pad(time.mins)    : "—", label: "Mins" },
          ].map((item, i, arr) => (
            <div key={item.label} className="flex items-center gap-4 md:gap-12">
              <div className="flex flex-col items-center">
                <span
                  className="font-[var(--font-space-grotesk)] font-bold text-white tabular-nums"
                  style={{ fontSize: "clamp(36px,6.5vw,68px)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {item.val}
                </span>
                <span className="mt-2 font-[var(--font-space-grotesk)] font-bold uppercase text-zinc-500"
                  style={{ fontSize: 11, letterSpacing: "0.22em" }}>
                  {item.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <span
                  className="text-[#e6c364] font-bold font-[var(--font-space-grotesk)]"
                  style={{ fontSize: "clamp(36px,6.5vw,68px)", lineHeight: 1, marginBottom: 14 }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:urjionixtechnologies@gmail.com"
          className="gradient-gold text-[#241a00] font-[var(--font-space-grotesk)] font-bold uppercase transition-all duration-500 shadow-[0_0_40px_rgba(201,168,76,0.28)] hover:shadow-[0_0_70px_rgba(201,168,76,0.55)] hover:scale-[1.03] active:scale-[0.98]"
          style={{ padding: "18px 58px", fontSize: 12, letterSpacing: "0.2em" }}
        >
          REGISTER NOW
        </a>

        {/* Sub */}
        <p className="mt-5 font-manrope text-zinc-600 tracking-wide" style={{ fontSize: 13 }}>
          Grand Finale · January 2027 · Bharat Mandapam, New Delhi
        </p>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4d4637]/50 to-transparent" />
    </header>
  );
}
