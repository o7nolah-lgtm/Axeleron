"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Tracks",   href: "/#tracks"   },
  { label: "Timeline", href: "/timeline"  },
  { label: "About",    href: "/about"     },
  { label: "Rules",    href: "/rules"     },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (href: string) =>
    href.startsWith("/#") ? pathname === "/" : pathname === href;

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-white/5 transition-all duration-300 ${
        scrolled
          ? "bg-oled/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-oled/70 backdrop-blur-xl"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-[64px] h-20 max-w-[1440px] mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="font-space-grotesk font-black text-xl md:text-2xl tracking-tighter text-white uppercase hover:text-primary transition-colors duration-300"
        >
          Axeleron Expo
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-space-grotesk font-medium tracking-tight transition-all duration-300 ${
                isActive(link.href)
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:urjionixtechnologies@gmail.com"
            className="hidden md:inline-block btn-primary !py-2 !px-6 !text-[11px]"
          >
            Register Now
          </a>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0"                  : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-oled/95 backdrop-blur-xl border-t border-white/5`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-space-grotesk font-medium py-3 border-b border-outline-variant/30 transition-colors duration-200 ${
                isActive(link.href) ? "text-primary font-bold" : "text-on-surface-variant hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:urjionixtechnologies@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-center mt-4 !py-3"
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
}
