"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-zinc-800 bg-[#0a0a0a]">
      <div className="flex flex-col items-center justify-center space-y-8 px-6 text-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-white font-[var(--font-space-grotesk)] uppercase tracking-widest hover:text-[#C9A84C] transition-colors"
        >
          Axeleron Expo
        </Link>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-[var(--font-space-grotesk)] text-sm tracking-widest uppercase">
          <Link href="/about" className="text-zinc-500 hover:text-[#C9A84C] transition-colors">
            About
          </Link>
          <Link href="/rules" className="text-zinc-500 hover:text-[#C9A84C] transition-colors">
            Rules
          </Link>
          <Link href="/timeline" className="text-zinc-500 hover:text-[#C9A84C] transition-colors">
            Timeline
          </Link>
          <Link href="/register" className="text-zinc-500 hover:text-[#C9A84C] transition-colors">
            Register
          </Link>
          <a href="mailto:urjionixtechnologies@gmail.com" className="text-zinc-500 hover:text-[#C9A84C] transition-colors">
            Contact
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* Copyright + Hindi tagline */}
        <p className="text-[#C9A84C] font-[var(--font-space-grotesk)] text-xs tracking-widest uppercase opacity-80">
          © 2026 Axeleron Expo · Buddhimatta • Navachaar • Samriddhi • Behatar Bhavishya
        </p>

        {/* Powered by */}
        <p className="text-zinc-600 text-xs font-manrope tracking-wide">
          Organised by{" "}
          <span className="text-zinc-400">Mobialive</span>
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-zinc-500 hover:text-white transition-colors flex flex-col items-center cursor-pointer"
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined mb-1">keyboard_double_arrow_up</span>
          <span className="font-[var(--font-space-grotesk)] text-[10px] tracking-[0.2em] uppercase font-bold">
            Back to top
          </span>
        </button>
      </div>
    </footer>
  );
}
