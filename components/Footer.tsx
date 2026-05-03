"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-outline-variant/40 bg-oled">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 px-6 text-center">

        {/* Logo */}
        <Link
          href="/"
          className="font-space-grotesk font-black text-lg uppercase tracking-widest text-white hover:text-primary transition-colors"
        >
          Axeleron Expo
        </Link>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {["About", "Timeline", "Rules", "Register"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="label-caps text-on-surface-variant hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:urjionixtechnologies@gmail.com"
            className="label-caps text-on-surface-variant hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Divider */}
        <div className="divider w-full max-w-xl" />

        {/* Hindi tagline */}
        <p className="label-caps text-primary opacity-75">
          © 2026 Axeleron Expo · Buddhimatta • Navachaar • Samriddhi • Behatar Bhavishya
        </p>

        {/* Powered by */}
        <p className="font-manrope text-xs text-outline tracking-wide">
          Organised by{" "}
          <span className="text-on-surface-variant font-semibold">Urjionix&nbsp;•&nbsp;Mobialive</span>
          <span className="mx-2 text-outline">·</span>
          <span className="text-[#b9c4ff]">Govt. backed by TSSC</span>
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center gap-1 text-outline hover:text-white transition-colors"
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined text-xl">keyboard_double_arrow_up</span>
          <span className="label-caps" style={{ fontSize: 10 }}>Back to top</span>
        </button>
      </div>
    </footer>
  );
}
