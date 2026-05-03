"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/* ─── countdown ─── */
const TARGET_TS = Date.UTC(2027, 0, 1, 0, 0, 0); // Jan 1, 2027 00:00 UTC
function getTimeLeft() {
  const diff = TARGET_TS - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days:  Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    mins:  Math.floor((diff / 60_000)    % 60),
    secs:  Math.floor((diff / 1_000)     % 60),
  };
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ─── orb definitions ─── */
// Each orb drifts on independent sin waves — organic aurora movement
type Orb = {
  // normalized base position
  bx: number; by: number;
  // drift amplitudes (normalized)
  ax: number; ay: number;
  // drift speeds (radians/ms)
  sx: number; sy: number;
  // phase offsets
  px: number; py: number;
  // radius as fraction of min(W,H)
  r: number;
  rgb: [number, number, number];
  alpha: number;
};

const ORBS: Orb[] = [
  // gold — floats around top-left
  { bx:.18, by:.20, ax:.14, ay:.12, sx:.00038, sy:.00031, px:0,    py:1.2, r:.52, rgb:[230,188, 80], alpha:.20 },
  // blue — bottom-right
  { bx:.82, by:.80, ax:.12, ay:.14, sx:.00029, sy:.00042, px:2.1,  py:0.8, r:.55, rgb:[ 30,130,255], alpha:.15 },
  // soft gold — center-left drift
  { bx:.25, by:.65, ax:.10, ay:.16, sx:.00051, sy:.00027, px:3.9,  py:2.5, r:.38, rgb:[201,160, 60], alpha:.12 },
  // soft blue — top-right
  { bx:.78, by:.22, ax:.13, ay:.10, sx:.00035, sy:.00048, px:1.4,  py:3.7, r:.40, rgb:[ 20,120,240], alpha:.10 },
];

function drawOrb(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number, r: number,
  rgb: [number, number, number], alpha: number
) {
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
  g.addColorStop(0,   `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`);
  g.addColorStop(0.35,`rgba(${rgb[0]},${rgb[1]},${rgb[2]},${(alpha * 0.45).toFixed(3)})`);
  g.addColorStop(0.65,`rgba(${rgb[0]},${rgb[1]},${rgb[2]},${(alpha * 0.12).toFixed(3)})`);
  g.addColorStop(1,   `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0)`);
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
}

export default function HeroSection() {
  const [time, setTime]       = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef   = useRef<HTMLElement>(null);
  const mouse     = useRef({ x: .5, y: .5 });
  const smooth    = useRef({ x: .5, y: .5 });
  const raf       = useRef<number>(0);

  /* countdown tick */
  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  /* mouse tracking */
  const onMouseMove = useCallback((e: MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouse.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top)  / rect.height,
    };
  }, []);

  /* canvas aurora */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let W = 0, H = 0;
    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const start = performance.now();

    const frame = (now: number) => {
      const t = now - start;
      ctx.clearRect(0, 0, W, H);

      // smooth mouse follow
      smooth.current.x = lerp(smooth.current.x, mouse.current.x, 0.055);
      smooth.current.y = lerp(smooth.current.y, mouse.current.y, 0.055);

      const minDim = Math.min(W, H);

      // mouse-tracking gold orb
      drawOrb(ctx,
        smooth.current.x * W,
        smooth.current.y * H,
        minDim * 0.58,
        [210, 172, 72],
        0.22,
      );

      // floating orbs on sin-wave paths
      for (const o of ORBS) {
        const cx = (o.bx + Math.sin(t * o.sx + o.px) * o.ax) * W;
        const cy = (o.by + Math.sin(t * o.sy + o.py) * o.ay) * H;
        drawOrb(ctx, cx, cy, o.r * minDim, o.rgb, o.alpha);
      }

      raf.current = requestAnimationFrame(frame);
    };

    raf.current = requestAnimationFrame(frame);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(raf.current);
      ro.disconnect();
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
      {/* ── canvas aurora — zero CSS gradient banding ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* ── content ── */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6">

        {/* AX */}
        <div className="flex items-end justify-center gap-1 mb-4" style={{ lineHeight: 1 }}>
          <span
            className="font-[var(--font-space-grotesk)] font-black tracking-tighter text-[#e6c364]"
            style={{ fontSize: "clamp(80px,13vw,148px)", lineHeight: 1 }}
          >A</span>
          <span
            className="font-[var(--font-space-grotesk)] font-black tracking-tighter text-[#b0b2b6]"
            style={{ fontSize: "clamp(80px,13vw,148px)", lineHeight: 1 }}
          >X</span>
        </div>

        {/* headline */}
        <h1
          className="font-[var(--font-space-grotesk)] font-bold text-white tracking-[-0.03em] w-full max-w-3xl mx-auto mb-12"
          style={{ fontSize: "clamp(24px,4.6vw,58px)", lineHeight: 1.1 }}
        >
          Accelerating the{" "}
          <em className="text-[#e6c364] not-italic">Intelligence</em>{" "}
          Revolution
        </h1>

        {/* countdown */}
        <div className="flex items-center justify-center gap-4 md:gap-12 mb-14">
          {[
            { val: mounted ? String(time.days) : "—", label: "Days"  },
            { val: mounted ? pad(time.hours)   : "—", label: "Hours" },
            { val: mounted ? pad(time.mins)    : "—", label: "Mins"  },
          ].map((item, i, arr) => (
            <div key={item.label} className="flex items-center gap-4 md:gap-12">
              <div className="flex flex-col items-center">
                <span
                  className="font-[var(--font-space-grotesk)] font-bold text-white tabular-nums"
                  style={{ fontSize: "clamp(36px,6.5vw,68px)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >{item.val}</span>
                <span
                  className="mt-2 font-[var(--font-space-grotesk)] font-bold uppercase text-zinc-500"
                  style={{ fontSize: 11, letterSpacing: "0.22em" }}
                >{item.label}</span>
              </div>
              {i < arr.length - 1 && (
                <span
                  className="text-[#e6c364] font-bold font-[var(--font-space-grotesk)]"
                  style={{ fontSize: "clamp(36px,6.5vw,68px)", lineHeight: 1, marginBottom: 14 }}
                >:</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:urjionixtechnologies@gmail.com"
          className="gradient-gold text-[#241a00] font-[var(--font-space-grotesk)] font-bold uppercase transition-all duration-500 shadow-[0_0_40px_rgba(201,168,76,0.28)] hover:shadow-[0_0_70px_rgba(201,168,76,0.55)] hover:scale-[1.03] active:scale-[0.98]"
          style={{ padding: "18px 58px", fontSize: 12, letterSpacing: "0.2em" }}
        >REGISTER NOW</a>

        <p className="mt-5 font-manrope text-zinc-600 tracking-wide" style={{ fontSize: 13 }}>
          Grand Finale · January 2027 · Bharat Mandapam, New Delhi
        </p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4d4637]/50 to-transparent" />
    </header>
  );
}
