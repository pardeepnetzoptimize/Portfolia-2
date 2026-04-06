"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", active: true, href: "#top" },
    { name: "Experience", active: false, href: "#experience" },
    { name: "Projects", active: false, href: "#projects" },
    { name: "Skills", active: false, href: "#skills" },
    { name: "Contact", active: false, href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6"
    >
      <nav
        className={`mx-auto flex w-full max-w-4xl flex-col gap-3 rounded-3xl border border-white/10 bg-[#1c1c1f]/60 px-3 py-3 backdrop-blur-md transition-all duration-300 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-full sm:px-2 sm:py-2 ${
          scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        {/* Mobile Hamburger Button */}
        <div className="flex items-center justify-between sm:hidden gap-3">
          <Image
            src="/d698d11d-ad56-48e2-ae8b-42d425e96925.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className="flex-1 text-center">
            <p className="text-xs font-bold text-white leading-tight">
              Quality Automation<br />& AI Engineer
            </p>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`min-w-[88px] whitespace-nowrap rounded-full px-3 py-2 text-center text-[11px] tracking-wide transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
                link.active
                  ? "bg-[#333338] font-medium text-white shadow-sm hover:bg-[#3d3d43]"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden h-6 w-px bg-white/10 sm:block"></div>

        <a
          href="/resume.pdf"
          download
          className="hidden w-full rounded-full bg-white px-4 py-3 text-center text-[11px] font-bold tracking-wide text-black shadow-lg transition-all active:scale-95 hover:bg-zinc-200 sm:block sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Download CV
        </a>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 border-t border-white/10 pt-3 sm:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                aria-current={link.active ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-center text-sm tracking-wide transition-colors ${
                  link.active
                    ? "bg-[#333338] font-medium text-white"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={handleLinkClick}
              className="mt-2 rounded-lg bg-white px-4 py-3 text-center text-sm font-bold tracking-wide text-black transition-all active:scale-95 hover:bg-zinc-200"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
