"use client";

import { useState, useEffect } from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MuseumServices() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    {
      id: "01",
      title: "Digital Architecture",
      subtitle: "Software Development",
      description:
        "Engineering digital structures that define the modern landscape. We prioritize clean lines, scalable logic, and intuitive user flows.",
      services: [
        "Mobile Applications",
        "Web Ecosystems",
        "Enterprise Systems",
        "E-commerce",
        "Cloud Infra",
      ],
    },
    {
      id: "02",
      title: "The Shield",
      subtitle: "Security Solutions",
      description:
        "Advanced protection for the physical and virtual. Our security protocols act as silent sentinels for your most valuable assets.",
      services: [
        "CCTV Surveillance",
        "Solar Security",
        "Access Control",
        "Intrusion Detection",
        "Security Audits",
      ],
    },
    {
      id: "03",
      title: "Connectivity",
      subtitle: "Networking & Comms",
      description:
        "The invisible threads that bind business. High-performance infrastructure designed for seamless, uninterrupted global exchange.",
      services: [
        "Cisco Systems",
        "Structured Cabling",
        "Wireless Mesh",
        "VoIP Solutions",
        "Network Security",
      ],
    },
    {
      id: "04",
      title: "Foundations",
      subtitle: "IT Infrastructure",
      description:
        "The hardware and systems that power progress. Robust, reliable, and redundant systems for a world that never sleeps.",
      services: [
        "Server Ecosystems",
        "Hardware Solutions",
        "Data Storage",
        "Disaster Recovery",
        "IT Procurement",
      ],
    },
    {
      id: "05",
      title: "Visual Identity",
      subtitle: "Branding & Marketing",
      description:
        "Curating your brand's narrative. We craft visual languages that resonate across cultures and digital touchpoints.",
      services: [
        "Brand Identity",
        "Marketing Collateral",
        "Social Strategy",
        "Email Campaigns",
        "Content Production",
      ],
    },
    {
      id: "06",
      title: "The Strategy",
      subtitle: "Consultation Services",
      description:
        "Intellectual guidance for complex growth. Navigating the intersection of business goals and technological possibility.",
      services: [
        "Business Strategy",
        "Digital Transformation",
        "Infra Planning",
        "Digital Roadmap",
        "Project Planning",
      ],
    },
    {
      id: "07",
      title: "Continuity",
      subtitle: "Support & Maintenance",
      description:
        "Everlasting vigilance. Our support systems ensure that your technological evolution is never interrupted.",
      services: [
        "24/7 Technical Desk",
        "System Optimization",
        "Security Patching",
        "Hardware Care",
        "Staff Onboarding",
      ],
    },
  ];

  if (!mounted) return null;

  return (
    <section
      className={`bg-[#0a0a0a] text-white py-16 md:py-24 min-h-screen selection:bg-[#a27b5b] ${spaceGrotesk.variable} ${inter.variable} font-sans`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-12 lg:mb-20">
          <div className="max-w-2xl">
            <span className="font-space text-[#a27b5b] tracking-[0.3em] uppercase text-[10px] md:text-sm mb-4 block">
              Our Curated Works
            </span>
            <h2 className="font-space text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-none mb-6 lg:mb-8">
              Services <br className="hidden md:block" />{" "}
              <span className="italic font-serif opacity-80 text-2xl md:text-3xl lg:text-5xl">
                & Solutions
              </span>
            </h2>
          </div>
          <div className="max-w-xs text-[10px] md:text-sm text-gray-400 font-inter leading-relaxed uppercase tracking-wider mt-6 md:mt-0">
            Curating the future of enterprise through precision technology and
            artistic digital strategy.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Navigation - Exhibit List */}
          <nav className="lg:col-span-5 flex flex-col">
            {categories.map((cat, idx) => (
              <div key={cat.id} className="flex flex-col">
                <button
                  onClick={() => setActiveCategory(idx)}
                  className={`group flex items-center gap-4 md:gap-6 py-6 md:py-8 border-b border-white/5 text-left transition-all duration-500 ${
                    activeCategory === idx
                      ? "opacity-100 lg:translate-x-4"
                      : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <span className="font-space text-[10px] md:text-xs text-[#a27b5b] tracking-widest">
                    {cat.id}
                  </span>
                  <span className="font-space text-xl md:text-2xl lg:text-3xl uppercase tracking-tighter group-hover:italic flex-1">
                    {cat.title}
                  </span>
                  {activeCategory === idx && (
                    <ArrowRight className="w-5 h-5 text-[#a27b5b] animate-pulse" />
                  )}
                </button>

                {/* Mobile Content Display (Visible only on small screens when active) */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-500 ${
                    activeCategory === idx
                      ? "max-h-[1000px] py-8 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-inter text-base text-gray-400 leading-relaxed mb-8">
                    {cat.description}
                  </p>
                  <div className="grid grid-cols-1 gap-y-3">
                    {cat.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-4 border-t border-white/10 pt-4"
                      >
                        <Plus className="w-3 h-3 text-[#a27b5b]" />
                        <span className="font-space text-[10px] uppercase tracking-widest">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Desktop Display Area - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-7 relative">
            <div className="sticky top-24">
              {categories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`transition-all duration-700 ease-out ${
                    activeCategory === idx
                      ? "opacity-100 scale-100 relative"
                      : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className="aspect-[4/3] bg-zinc-900 border border-white/5 overflow-hidden relative mb-8">
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                      <div className="w-1/2 h-px bg-white rotate-45 absolute" />
                      <div className="w-1/2 h-px bg-white -rotate-45 absolute" />
                      <div className="w-64 h-64 border border-white rounded-full opacity-50" />
                    </div>
                    <div className="absolute bottom-8 left-8">
                      <h4 className="font-space text-4xl uppercase font-bold tracking-tighter mix-blend-difference">
                        {cat.subtitle}
                      </h4>
                    </div>
                  </div>

                  <p className="font-inter text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
                    {cat.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                    {cat.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-4 group cursor-pointer border-t border-white/10 pt-4"
                      >
                        <Plus className="w-4 h-4 text-[#a27b5b] group-hover:rotate-90 transition-transform" />
                        <span className="font-space text-sm uppercase tracking-widest group-hover:text-[#a27b5b] transition-colors">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 md:mt-40 border border-white/10 p-8 md:p-12 lg:p-24 flex flex-col items-center text-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative overflow-hidden">
          <h3 className="font-space text-3xl md:text-4xl lg:text-6xl uppercase tracking-tighter mb-8 relative z-10">
            Inquire for{" "}
            <span className="text-[#a27b5b] italic">Transformation</span>
          </h3>
          <p className="font-inter text-gray-400 max-w-lg mb-12 uppercase tracking-[0.2em] text-[10px] md:text-xs relative z-10">
            We are currently accepting bespoke projects for the 2026 fiscal
            year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full sm:w-auto relative z-10">
            <Link
              href="/contact"
              className="px-8 md:px-12 py-4 md:py-5 bg-white text-black font-space uppercase tracking-widest text-[10px] md:text-sm font-bold hover:bg-[#a27b5b] hover:text-white transition-all text-center"
            >
              Start Project
            </Link>
            <button className="px-8 md:px-12 py-4 md:py-5 border border-white/20 font-space uppercase tracking-widest text-[10px] md:text-sm hover:border-[#a27b5b] transition-all text-center">
              The Dossier
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --font-space: ${spaceGrotesk.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
        .font-space {
          font-family: var(--font-space);
        }
        .font-inter {
          font-family: var(--font-inter);
        }
      `}</style>
    </section>
  );
}
