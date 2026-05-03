"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Tracks", href: "/#tracks" },
  { label: "Timeline", href: "/timeline" },
  { label: "About", href: "/about" },
  { label: "Rules", href: "/rules" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          : "bg-zinc-950/70 backdrop-blur-xl"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 w-full h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase font-[var(--font-space-grotesk)] hover:text-[#C9A84C] transition-colors duration-300"
        >
          Axeleron Expo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[var(--font-space-grotesk)] tracking-tight font-medium transition-all duration-300 ${
                isActive(link.href)
                  ? "text-[#C9A84C] font-bold border-b-2 border-[#C9A84C] pb-1"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Register Button + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:urjionixtechnologies@gmail.com"
            className="hidden md:inline-block bg-[#C9A84C] text-black px-6 py-2 font-bold font-[var(--font-space-grotesk)] uppercase tracking-tight hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300 active:scale-95 transform text-sm"
          >
            Register Now
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-zinc-950/95 backdrop-blur-xl border-t border-white/5`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-[var(--font-space-grotesk)] tracking-tight font-medium py-2 transition-all duration-300 border-b border-white/5 ${
                isActive(link.href)
                  ? "text-[#C9A84C] font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:urjionixtechnologies@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="bg-[#C9A84C] text-black px-6 py-3 font-bold font-[var(--font-space-grotesk)] uppercase tracking-tight text-center text-sm mt-2"
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
}
