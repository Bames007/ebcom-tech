"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
  scrollToSection?: (section: string) => void;
  activeSection?: string;
}

interface NavItem {
  name: string;
  section: string;
}

export default function Header({
  scrollToSection,
  activeSection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

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
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Services", section: "services" },
    { name: "Solutions", section: "solutions" },
    { name: "Projects", section: "projects" },
    { name: "Process", section: "process" },
    { name: "Contact", section: "contact" },
  ];

  const handleNavClick = (item: NavItem) => {
    if (scrollToSection) {
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

  const handleEmail = () => {
    window.open("mailto:ebcomtechnologies@gmail.com", "_self");
  };

  const isActive = (section: string) => {
    return activeSection === section;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Closer to the edge */}
          <button
            onClick={() => scrollToSection && scrollToSection("home")}
            className="flex items-center"
          >
            <div className="relative w-40 h-10 lg:w-48 lg:h-12">
              <div className="relative w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="EBCOM Technologies"
                    width={160}
                    height={40}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </button>

          {/* Desktop Navigation - Absolutely centered */}
          <nav className="hidden lg:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 group ${
                  isActive(item.section)
                    ? "text-[#a27b5b]"
                    : "text-[#2c3639] hover:text-[#a27b5b]"
                }`}
              >
                <span className="relative z-10">{item.name}</span>

                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive(item.section)
                      ? "bg-[#a27b5b]/10"
                      : "group-hover:bg-[#a27b5b]/5"
                  }`}
                ></div>

                {/* Active indicator line */}
                {isActive(item.section) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#a27b5b] rounded-full"></div>
                )}

                {/* Hover indicator line */}
                {!isActive(item.section) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#a27b5b] rounded-full transition-all duration-300 group-hover:w-6"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleCall}
              className="group flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-[#a27b5b]/10 flex items-center justify-center group-hover:bg-[#a27b5b]/20 transition-colors">
                <Phone className="w-4 h-4 text-[#a27b5b]" />
              </div>
              <div className="text-left">
                <div className="text-xs text-[#3f4e4f]">Call us</div>
                <div className="font-medium text-sm text-[#2c3639] group-hover:text-[#a27b5b] transition-colors">
                  08127728084
                </div>
              </div>
            </button>

            <button
              onClick={() => scrollToSection && scrollToSection("contact")}
              className="px-6 py-3 bg-gradient-to-r from-[#2c3639] to-[#3f4e4f] text-white font-medium hover:shadow-lg transition-all duration-300 rounded-lg hover:scale-[1.02]"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden group flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 menu-button"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#2c3639] group-hover:text-[#a27b5b] transition-colors" />
            ) : (
              <Menu className="w-6 h-6 text-[#2c3639] group-hover:text-[#a27b5b] transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu fixed inset-0 top-0 left-0 right-0 h-screen w-full z-40 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="absolute right-0 top-0 h-full w-80 bg-[#dcd7c9] shadow-xl">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-gray-300">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    scrollToSection && scrollToSection("home");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center"
                >
                  <div className="text-xl font-bold text-[#2c3639]">EBCOM</div>
                </button>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300/50 transition-colors"
                >
                  <X className="w-6 h-6 text-[#2c3639]" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`w-full flex items-center p-4 text-left transition-all duration-300 rounded-lg ${
                      isActive(item.section)
                        ? "bg-[#a27b5b]/20 text-[#2c3639] font-medium"
                        : "text-[#2c3639] hover:bg-gray-300/50"
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      {isActive(item.section) && (
                        <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#a27b5b]"></div>
                      )}
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 space-y-4">
                {/* Contact Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-gray-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#a27b5b]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#a27b5b]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#3f4e4f]">Call us</div>
                      <div className="font-bold text-[#2c3639]">
                        08127728084
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-[#3f4e4f]">
                    Monday - Saturday, 8AM - 6PM
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      handleCall();
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center gap-2 p-4 bg-white/80 hover:bg-white rounded-lg border border-gray-300 transition-all duration-300 hover:shadow-sm"
                  >
                    <Phone className="w-5 h-5 text-[#a27b5b]" />
                    <span className="font-medium text-[#2c3639]">Call</span>
                  </button>

                  <button
                    onClick={() => {
                      handleWhatsApp();
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center gap-2 p-4 bg-[#25D366] text-white hover:bg-[#20bd5c] rounded-lg transition-all duration-300 hover:shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp</span>
                  </button>
                </div>

                {/* Main CTA */}
                <button
                  onClick={() => {
                    if (scrollToSection) {
                      scrollToSection("contact");
                    }
                    setIsMenuOpen(false);
                  }}
                  className="w-full p-4 bg-gradient-to-r from-[#2c3639] to-[#3f4e4f] text-white font-medium hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
