"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Added for navigation
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  scrollToSection?: (section: string) => void;
  activeSection?: string;
}

export default function Header({
  scrollToSection,
  activeSection,
}: HeaderProps) {
  const router = useRouter(); // Initialize router
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Services", section: "services" },
    { name: "Portfolio", section: "portfolio" },
    { name: "Process", section: "serviceProcess" },
    { name: "Contact", section: "contact" },
  ];

  const handleNavClick = (section: string) => {
    scrollToSection?.(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-[#DCD7C9] border-b border-[#a27b5b]/20 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12 flex justify-between items-center">
        {/* LOGO */}
        <button
          onClick={() => handleNavClick("home")}
          className="relative z-[1001] active:scale-95 transition-transform"
        >
          <div className="relative w-24 h-6 md:w-32 md:h-8 lg:w-40 lg:h-10">
            <Image
              src="/logo.png"
              alt="EBCOM"
              fill
              className="object-contain object-left"
              style={{ filter: "brightness(0.2) contrast(1.1)" }}
              priority
            />
          </div>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item, idx) => {
            const active = activeSection === item.section;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className="group relative px-5 py-4 flex flex-col items-center min-w-[80px]"
              >
                <span
                  className={`text-[8px] font-black absolute top-0 transition-all duration-300 ${
                    active
                      ? "text-[#a27b5b] opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1"
                  }`}
                >
                  0{idx + 1}
                </span>

                <span
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    active
                      ? "text-[#2c3639]"
                      : "text-[#2c3639]/40 hover:text-[#2c3639]"
                  }`}
                >
                  {item.name}
                </span>

                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-2 h-[2px] w-4 bg-[#a27b5b]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* DESKTOP UTILITY */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:08127728084"
            className="text-[11px] font-bold text-[#2c3639] flex items-center gap-2"
          >
            <Phone size={12} className="text-[#a27b5b]" /> 08127728084
          </a>
          <button
            onClick={() => router.push("/schedule")} // Redirects to Schedule
            className="bg-[#2c3639] text-[#dcd7c9] px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#a27b5b] transition-colors rounded-sm"
          >
            Start Now
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-[1001] flex items-center justify-center w-24 h-10 bg-[#2c3639] rounded-full shadow-xl active:scale-90 transition-transform"
        >
          <div className="flex items-center gap-2 text-white">
            <span className="text-[10px] font-black uppercase tracking-widest">
              {isMenuOpen ? "Exit" : "Menu"}
            </span>
            {isMenuOpen ? (
              <X size={14} strokeWidth={3} />
            ) : (
              <Menu size={14} strokeWidth={3} />
            )}
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1000] bg-[#DCD7C9] flex flex-col"
          >
            <div className="h-24" />
            <div className="flex-1 flex flex-col px-8">
              <p className="text-[9px] font-bold text-[#a27b5b] uppercase tracking-[0.4em] mb-6 border-b border-[#a27b5b]/20 pb-2">
                Navigation
              </p>

              <div className="flex flex-col">
                {navItems.map((item, idx) => {
                  const active = activeSection === item.section;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.section)}
                      className="flex items-center justify-between py-5 border-b border-[#2c3639]/5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold text-[#a27b5b]">
                          0{idx + 1}
                        </span>
                        <span
                          className={`text-lg font-bold uppercase tracking-tight transition-all ${
                            active
                              ? "text-[#2c3639] translate-x-2"
                              : "text-[#2c3639]/30"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                      {active && (
                        <ArrowRight size={18} className="text-[#a27b5b]" />
                      )}
                    </button>
                  );
                })}
                {/* Mobile Specific Schedule Link */}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/schedule");
                  }}
                  className="flex items-center justify-between py-5 border-b border-[#2c3639]/5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-[#a27b5b]">
                      07
                    </span>
                    <span className="text-lg font-bold uppercase tracking-tight text-[#2c3639]">
                      Start Now
                    </span>
                  </div>
                  <ArrowRight size={18} className="text-[#a27b5b]" />
                </button>
              </div>
            </div>

            <div className="p-8 bg-[#2c3639] text-[#dcd7c9] flex flex-col gap-4">
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#a27b5b]">
                Direct Inquiry
              </span>
              <a
                href="tel:08127728084"
                className="text-xl font-bold flex items-center gap-3"
              >
                <Phone size={18} className="text-[#a27b5b]" /> 08127728084
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
