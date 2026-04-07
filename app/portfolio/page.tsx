"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk, Inter } from "next/font/google";
// Assuming portfolioProjects is imported correctly
import { portfolioProjects } from "./portfolio";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const allServices = Array.from(
  new Set(portfolioProjects.flatMap((project) => project.services)),
);
const categories = ["All", ...allServices];

export default function MuseumPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = portfolioProjects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.services.some((s) =>
      s.toLowerCase().includes(selectedCategory.toLowerCase()),
    );
  });

  return (
    <div
      className={`min-h-screen bg-[#0a0a0a] text-[#f5f5f5] selection:bg-[#C5A371] selection:text-white ${inter.className} overflow-x-hidden`}
    >
      {/* Editorial Hero */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 lg:px-12 border-b border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="overflow-hidden w-full max-w-full">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className={`${spaceGrotesk.className} block text-[#C5A371] tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] mb-4 md:mb-6 font-bold`}
              >
                Archive Collection / 2024—2026
              </motion.span>
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${spaceGrotesk.className} text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] leading-[0.9] md:leading-[0.8] font-bold tracking-tighter uppercase whitespace-normal break-words`}
              >
                Selected <br className="hidden md:block" />
                <span className="italic font-light opacity-20 lowercase md:pr-4">
                  {" "}
                  Works
                </span>
              </motion.h1>
            </div>

            <div className="max-w-xs border-l border-white/10 pl-6 pb-2">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] leading-relaxed text-gray-500 font-medium">
                A curated exhibition of systemic digital architecture. Each
                artifact represents a benchmark in scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Museum Style Filter Navigation */}
      <nav className="sticky top-0 z-[100] bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 w-full">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Added mask-image to fade the edges of the scrollable nav on mobile */}
          <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar py-6 md:py-8 mask-fade-right">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="relative group flex items-center gap-2 md:gap-3 shrink-0 pb-2 outline-none"
              >
                <span
                  className={`${spaceGrotesk.className} text-[8px] md:text-[9px] text-[#C5A371] font-bold transition-opacity duration-300 ${selectedCategory === cat ? "opacity-100" : "opacity-0"}`}
                >
                  0{idx + 1}
                </span>
                <span
                  className={`${spaceGrotesk.className} uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] font-bold transition-colors ${selectedCategory === cat ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  {cat}
                </span>
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A371]"
                    transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Asymmetric Exhibition Grid */}
      <section className="py-12 md:py-24 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-40 md:gap-x-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isLarge = index % 3 === 0;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`${isLarge ? "md:col-span-8" : "md:col-span-4"} group cursor-crosshair w-full`}
                  >
                    <Link href={`/portfolio/${project.id}`} className="block">
                      <div className="relative aspect-[4/5] md:h-[650px] overflow-hidden bg-zinc-900 border border-white/5">
                        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                          <span
                            className={`${spaceGrotesk.className} text-white text-[8px] md:text-[10px] tracking-widest font-bold px-2 py-1 bg-black/40 backdrop-blur-md border border-white/10`}
                          >
                            ITEM_{project.id}
                          </span>
                        </div>

                        <Image
                          src={project.mockups[0]}
                          alt={project.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 scale-[1.02] group-hover:scale-105 transition-all duration-[1.5s] ease-out opacity-60 group-hover:opacity-100"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        <div className="absolute inset-0 bg-[#0a0a0a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
                            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 md:mt-10 flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-6">
                        <div className="w-full">
                          <h3
                            className={`${spaceGrotesk.className} text-2xl md:text-4xl lg:text-5xl uppercase font-bold tracking-tighter mb-3 md:mb-4 group-hover:text-[#C5A371] transition-colors`}
                          >
                            {project.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((s) => (
                              <span
                                key={s}
                                className="text-[8px] md:text-[9px] uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-500 font-bold border border-white/10 px-2 md:px-3 py-1"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="font-mono text-[9px] md:text-[10px] tracking-tighter text-gray-600 uppercase lg:text-right w-full lg:w-auto shrink-0">
                          {project.location} <br className="hidden lg:block" />
                          Rel. {project.year}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-60 px-6 border-t border-white/5 text-center bg-white/[0.01] overflow-hidden">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span
            className={`${spaceGrotesk.className} text-[#C5A371] tracking-[0.4em] md:tracking-[0.8em] uppercase text-[9px] md:text-[10px] font-black`}
          >
            Inquiry Protocol
          </span>
          <h2
            className={`${spaceGrotesk.className} text-4xl md:text-6xl lg:text-9xl mt-6 md:mt-10 mb-8 md:mb-16 uppercase font-bold tracking-tighter leading-none`}
          >
            Your Vision <br />
            <span className="italic font-light opacity-20">Systematized</span>
          </h2>
          <Link
            href="/schedule"
            className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 group"
          >
            <span
              className={`${spaceGrotesk.className} text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold border-b border-white/20 pb-2 group-hover:border-[#C5A371] transition-all`}
            >
              Start Collaboration
            </span>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C5A371] group-hover:border-[#C5A371] transition-all duration-500">
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-fade-right {
          mask-image: linear-gradient(to right, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(
            to right,
            black 85%,
            transparent 100%
          );
        }
        @media (min-width: 768px) {
          .mask-fade-right {
            mask-image: none;
            -webkit-mask-image: none;
          }
        }
      `}</style>
    </div>
  );
}
