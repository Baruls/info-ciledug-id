"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Kabar Terkini", href: "#kabar-terkini" },
  { label: "Kuliner", href: "#kuliner" },
  { label: "Eksplorasi", href: "#eksplorasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#beranda")}
            className="flex items-center gap-2 group"
            aria-label="Info Ciledug.id Home"
          >
            <img 
              src="/favicon.png" 
              alt="Info Ciledug.id Logo" 
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" 
            />
            <span className="font-bold text-lg text-blue-600 tracking-tight">
              Info <span className="text-slate-800">Ciledug.id</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-blue-50 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/infociledug.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="17.5" cy="6.5" r="1" fill="white"/>
            </svg>
            @infociledug.id
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-blue-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-100 overflow-hidden"
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/infociledug.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold mt-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                  </svg>
                  @infociledug.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285754976351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold mt-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.651zm6.59-4.819c1.414.843 3.058 1.288 4.734 1.289 4.966 0 9.007-4.041 9.01-9.007.001-2.407-.936-4.671-2.637-6.37s-3.965-2.637-6.37-2.638c-4.969 0-9.01 4.041-9.013 9.008-.001 1.761.516 3.479 1.494 4.992l-.995 3.637 3.781-.991zm11.726-6.705c-.273-.137-1.62-.8-1.87-.892-.25-.092-.43-.137-.61.137-.18.273-.69.892-.845 1.074-.155.183-.311.206-.584.069-.273-.137-1.155-.426-2.2-1.359-.812-.724-1.36-1.618-1.519-1.892-.159-.274-.017-.422.12-.558.123-.122.273-.319.41-.479.137-.16.183-.274.274-.457.091-.183.045-.343-.023-.479-.068-.137-.61-1.463-.836-2.012-.22-.53-.443-.459-.61-.468l-.52-.008c-.18 0-.474.068-.721.343-.247.274-.942.921-.942 2.246s.965 2.603 1.098 2.786c.133.183 1.9 2.901 4.599 4.065.642.277 1.144.443 1.534.567.645.205 1.232.176 1.696.107.518-.077 1.62-.663 1.848-1.303.228-.639.228-1.188.16-1.303-.069-.115-.25-.183-.523-.319z" fill="white"/>
                  </svg>
                  WhatsApp Admin
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
