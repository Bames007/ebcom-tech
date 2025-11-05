// app/home/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  scrollToSection: (section: string) => void;
  activeSection: string;
}

// Define types for navigation items
interface NavItem {
  name: string;
  section: string;
  type: "link";
}

// Define types for mobile color schemes
interface MobileTextColors {
  text: string;
  activeText: string;
  muted: string;
  buttonText: string;
}

interface MobileBorderColors {
  border: string;
  activeBorder: string;
  buttonBorder: string;
}

export default function Header({
  scrollToSection,
  activeSection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const navItems: NavItem[] = [
    {
      name: "Home",
      section: "home",
      type: "link",
    },
    {
      name: "About",
      section: "about",
      type: "link",
    },
    {
      name: "Services",
      section: "services",
      type: "link",
    },
    {
      name: "Clients",
      section: "clients",
      type: "link",
    },
    {
      name: "Our Process",
      section: "serviceProcess",
      type: "link",
    },
    {
      name: "Contact",
      section: "contact",
      type: "link",
    },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.type === "link") {
      scrollToSection(item.section);
      setIsMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.open("tel:08127728084", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/2348127728084", "_blank");
  };

  // Text color is always white when not scrolled, changes when scrolled
  const textColorClass = isScrolled ? "text-slate-700" : "text-white";
  const hoverTextColorClass = isScrolled
    ? "hover:text-blue-600"
    : "hover:text-blue-200";

  // Check if item is active
  const isActive = (section: string) => activeSection === section;

  // Determine mobile menu background based on scroll position
  const getMobileMenuBackground = (): string => {
    if (!isScrolled && activeSection === "home") {
      // At top on home section - blue theme
      return "bg-gradient-to-br from-blue-50 via-white to-cyan-50";
    } else {
      // Scrolled or other sections - dark theme
      return "bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900";
    }
  };

  // Determine mobile menu text colors based on scroll position
  const getMobileTextColor = (): MobileTextColors => {
    if (!isScrolled && activeSection === "home") {
      // At top on home section - blue text
      return {
        text: "text-slate-800",
        activeText: "text-blue-600",
        muted: "text-slate-600",
        buttonText: "text-white",
      };
    } else {
      // Scrolled or other sections - white text
      return {
        text: "text-white/90",
        activeText: "text-white",
        muted: "text-white/60",
        buttonText: "text-white",
      };
    }
  };

  // Determine mobile menu border colors based on scroll position
  const getMobileBorderColor = (): MobileBorderColors => {
    if (!isScrolled && activeSection === "home") {
      return {
        border: "border-slate-200/50",
        activeBorder: "border-blue-300",
        buttonBorder: "border-blue-200",
      };
    } else {
      return {
        border: "border-white/10",
        activeBorder: "border-white/30",
        buttonBorder: "border-white/20",
      };
    }
  };

  const mobileColors = getMobileTextColor();
  const mobileBorders = getMobileBorderColor();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 group"
          >
            {/* <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 ${
                isScrolled ? "shadow-md" : "shadow-lg shadow-blue-500/20"
              }`}
            > */}
            <Image
              src={"/logo.png"}
              alt="EBCom Technologies"
              width={32}
              height={32}
            />
            {/* </div> */}

            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                EBCom
              </span>
              <span
                className={`hidden lg:block text-xs tracking-widest font-medium transition-colors duration-300 ${
                  isScrolled ? "text-slate-600" : "text-blue-600"
                }`}
              >
                TECHNOLOGIES
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative ${
                    isActive(item.section)
                      ? "text-blue-600 font-semibold"
                      : `${textColorClass} ${hoverTextColorClass}`
                  } ${isScrolled ? "hover:bg-blue-50" : "hover:bg-white/10"}`}
                >
                  {item.name}
                  {isActive(item.section) && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-50 text-blue-600"
                  : "bg-white/10 text-white backdrop-blur-sm"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">08127728084</span>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-xl"
                  : "bg-white text-blue-600 shadow-lg hover:shadow-xl hover:scale-105"
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 menu-button ${
              isScrolled
                ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden mobile-menu fixed inset-0 top-0 left-0 right-0 h-screen w-full ${getMobileMenuBackground()} backdrop-blur-2xl transition-all duration-700 z-40 ${
            isMenuOpen
              ? "opacity-100 visible scale-100 translate-y-0"
              : "opacity-0 invisible scale-105 translate-y-4"
          }`}
        >
          <div className="flex flex-col h-full relative overflow-hidden">
            {/* Animated Background Elements - Only show for dark theme */}
            {(!isScrolled || activeSection !== "home") && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>
            )}

            {/* Mobile Menu Header */}
            <div
              className={`relative flex justify-between items-center p-6 border-b ${mobileBorders.border}`}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={"/logo.png"}
                  alt="EBCom Technologies"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col">
                  <span
                    className={`text-2xl font-bold ${
                      !isScrolled && activeSection === "home"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    EBCom
                  </span>
                  <span
                    className={`text-xs tracking-widest ${
                      !isScrolled && activeSection === "home"
                        ? "text-blue-600"
                        : "text-blue-200"
                    }`}
                  >
                    TECHNOLOGIES
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className={`p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${
                  !isScrolled && activeSection === "home"
                    ? "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation with Enhanced Animations */}
            <nav className="flex-1 overflow-y-auto p-6 relative z-10">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`w-full text-left p-5 rounded-2xl font-semibold text-lg transition-all duration-500 backdrop-blur-sm border-2 group relative overflow-hidden ${
                      isActive(item.section)
                        ? `${
                            !isScrolled && activeSection === "home"
                              ? "bg-blue-50/80 text-blue-600 border-blue-200 shadow-lg scale-105"
                              : "bg-white/20 text-white border-white/30 shadow-2xl scale-105"
                          }`
                        : `${
                            !isScrolled && activeSection === "home"
                              ? "bg-white/30 text-slate-700 border-slate-200/50 hover:bg-white/50 hover:border-blue-200 hover:scale-105"
                              : "bg-white/5 text-white/90 border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105"
                          }`
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transform: isMenuOpen
                        ? "translateX(0)"
                        : "translateX(-100px)",
                      opacity: isMenuOpen ? 1 : 0,
                    }}
                  >
                    {/* Active indicator */}
                    {isActive(item.section) && (
                      <div
                        className={`absolute top-1/2 -left-2 w-1 h-8 rounded-full transform -translate-y-1/2 ${
                          !isScrolled && activeSection === "home"
                            ? "bg-blue-500"
                            : "bg-cyan-400"
                        }`}
                      />
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-lg">{item.name}</span>
                      {isActive(item.section) && (
                        <div
                          className={`w-2 h-2 rounded-full animate-ping ${
                            !isScrolled && activeSection === "home"
                              ? "bg-blue-500"
                              : "bg-cyan-400"
                          }`}
                        />
                      )}
                    </div>

                    {/* Hover effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${
                        !isScrolled && activeSection === "home"
                          ? "from-blue-100/30"
                          : "from-white/10"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </nav>

            {/* Enhanced Mobile Contact Footer */}
            <div
              className={`relative z-10 p-6 border-t ${mobileBorders.border} ${
                !isScrolled && activeSection === "home"
                  ? "bg-white/30 backdrop-blur-sm"
                  : "bg-black/20 backdrop-blur-2xl"
              } space-y-4`}
            >
              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleCall}
                  className={`flex items-center justify-center gap-3 p-4 rounded-2xl border transition-all duration-300 hover:scale-105 backdrop-blur-sm group ${
                    !isScrolled && activeSection === "home"
                      ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                      : "bg-green-500/20 text-green-100 border-green-500/30 hover:bg-green-500/30"
                  }`}
                >
                  <div
                    className={`p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 ${
                      !isScrolled && activeSection === "home"
                        ? "bg-green-100"
                        : "bg-green-500/20"
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">Call Now</span>
                </button>
                <button
                  onClick={handleWhatsApp}
                  className={`flex items-center justify-center gap-3 p-4 rounded-2xl border transition-all duration-300 hover:scale-105 backdrop-blur-sm group ${
                    !isScrolled && activeSection === "home"
                      ? "bg-[#25D366] text-white border-[#25D366] hover:bg-[#20bd5c]"
                      : "bg-[#25D366]/20 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366]/30"
                  }`}
                >
                  <div
                    className={`p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 ${
                      !isScrolled && activeSection === "home"
                        ? "bg-white/20"
                        : "bg-[#25D366]/20"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">WhatsApp</span>
                </button>
              </div>

              {/* Phone Number Display */}
              <div
                className={`text-center p-4 rounded-2xl border backdrop-blur-sm ${
                  !isScrolled && activeSection === "home"
                    ? "bg-white/50 border-slate-200"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <p
                  className={`text-sm mb-1 ${
                    !isScrolled && activeSection === "home"
                      ? "text-slate-600"
                      : "text-white/60"
                  }`}
                >
                  Available 24/7
                </p>
                <p
                  className={`font-bold text-xl tracking-wide ${
                    !isScrolled && activeSection === "home"
                      ? "text-slate-800"
                      : "text-white"
                  }`}
                >
                  08127728084
                </p>
                <p
                  className={`text-xs mt-1 ${
                    !isScrolled && activeSection === "home"
                      ? "text-slate-500"
                      : "text-white/40"
                  }`}
                >
                  Emergency Support
                </p>
              </div>

              {/* Main CTA */}
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Start Your Project
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Quick Info */}
              <div className="text-center">
                <p
                  className={`text-sm ${
                    !isScrolled && activeSection === "home"
                      ? "text-slate-500"
                      : "text-white/40"
                  }`}
                >
                  Let&apos;s build something amazing together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
