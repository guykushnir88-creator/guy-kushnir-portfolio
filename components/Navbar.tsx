"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#timeline" },
  { label: "PM Agent Chain", href: "#pm-agent-chain" },
  { label: "Case Study", href: "#case-study" },
  { label: "CloudSync Study", href: "/case-study" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      if (!isHome) {
        window.location.href = "/" + href;
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-sm border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="font-mono text-accent-blue font-semibold text-lg tracking-tight hover:text-text-primary transition-colors"
        >
          GK
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("/") ? (
                <Link
                  href={link.href}
                  className="text-text-muted hover:text-text-primary text-sm font-medium transition-colors duration-200 hover:text-accent-blue"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-text-muted hover:text-text-primary text-sm font-medium transition-colors duration-200 hover:text-accent-blue"
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-text-secondary transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-secondary transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-secondary transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-primary/98 border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-text-secondary hover:text-accent-blue text-base font-medium transition-colors w-full text-left block"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-text-secondary hover:text-accent-blue text-base font-medium transition-colors w-full text-left"
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
