"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { spaceGrotesk, inter } from "@/app/util/constants";

// --- REFINED ARCHITECTURAL ICONS (ULTRA-MINIMAL) ---
const IconPrecision = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-80"
  >
    <path d="M16 2V30M2 16H30" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="16" cy="16" r="1" fill="currentColor" />
  </svg>
);

const IconFlux = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-80"
  >
    <path
      d="M4 16C4 16 8 6 16 6C24 6 28 16 28 16M4 16C4 16 8 26 16 26C24 26 28 16 28 16"
      stroke="currentColor"
      strokeWidth="0.5"
    />
    <path d="M12 16H20" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default function AboutMuseum() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className={`relative bg-[#F4F1EA] text-[#1A1A1A] py-20 lg:py-56 overflow-hidden ${inter.className}`}
    >
      {/* 01. THE BACKGROUND LAYER: SCULPTURAL TEXT */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 lg:top-20 left-0 w-full whitespace-nowrap pointer-events-none opacity-[0.03] select-none"
      >
        <h2
          className={`${spaceGrotesk.className} text-[40vw] lg:text-[25vw] font-black uppercase leading-none`}
        >
          Infrastructure Excellence Architecture
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* 02. THE HEADER: EDITORIAL SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 lg:mb-60">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-9"
          >
            <div className="flex items-center gap-4 mb-6 lg:mb-10">
              <div className="w-8 lg:w-12 h-[1px] bg-[#C5A371]" />
              <span
                className={`${spaceGrotesk.className} text-[9px] lg:text-[11px] tracking-[0.4em] lg:tracking-[0.8em] uppercase font-bold text-[#C5A371]`}
              >
                EBCom Manifesto
              </span>
            </div>
            <h2
              className={`${spaceGrotesk.className} text-5xl md:text-7xl lg:text-[130px] leading-[0.9] lg:leading-[0.8] font-bold tracking-tighter uppercase`}
            >
              Digital <br />
              <span className="italic font-light text-[#C5A371]/40 pr-2 lg:pr-4">
                Ecosystem
              </span>{" "}
              <br />
              Architecture.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:col-span-3 flex flex-col justify-end"
          >
            <div className="space-y-4 lg:space-y-6 max-w-md lg:max-w-none">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 italic">
                / Manifesto
              </p>
              <p className="text-lg lg:text-xl font-light leading-relaxed text-black/80">
                EBCom builds invisible, indispensable digital infrastructure for
                the world’s most ambitious brands.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 03. THE GALLERY GRID: METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 mb-24 lg:mb-60">
          {[
            {
              val: "15+",
              label: "Artifacts Delivered",
              detail: "Bespoke Nodes",
            },
            {
              val: "100%",
              label: "Client Retention",
              detail: "Partner Loyalty",
            },
            {
              val: "24/7",
              label: "Protocol Uptime",
              detail: "Active Monitoring",
            },
            {
              val: "03",
              label: "Continents Served",
              detail: "Global Infrastructure",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#1A1A1A", color: "#F4F1EA" }}
              className="bg-[#F4F1EA] p-8 lg:p-12 transition-all duration-500 group"
            >
              <h4
                className={`${spaceGrotesk.className} text-4xl lg:text-5xl font-bold mb-4 tracking-tighter`}
              >
                {stat.val}
              </h4>
              <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.4em] font-black text-[#C5A371] mb-1">
                {stat.label}
              </p>
              <p className="text-[8px] lg:text-[9px] uppercase tracking-widest opacity-30 font-medium group-hover:opacity-60 transition-opacity">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 04. BENTO: THE DUAL MONOLITHS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24 lg:mb-60">
          <motion.div
            whileHover={{ y: -10 }}
            className="relative bg-white border border-black/5 p-10 lg:p-24 flex flex-col justify-between aspect-auto md:aspect-square group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 lg:p-12 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
              <IconPrecision />
            </div>
            <span
              className={`${spaceGrotesk.className} text-[10px] font-bold opacity-20 uppercase tracking-[0.5em] lg:tracking-[1em] mb-12 lg:mb-0`}
            >
              01 / Vision
            </span>
            <div className="max-w-md">
              <h3
                className={`${spaceGrotesk.className} text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6 lg:mb-8`}
              >
                The Global <br /> Benchmark.
              </h3>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                To become Africa’s most trusted digital engineering firm,
                setting global benchmarks for resilient technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="relative bg-[#1A1A1A] text-[#F4F1EA] p-10 lg:p-24 flex flex-col justify-between aspect-auto md:aspect-square group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 lg:p-12 text-[#C5A371] opacity-20 group-hover:opacity-100 transition-opacity duration-700">
              <IconFlux />
            </div>
            <span
              className={`${spaceGrotesk.className} text-[10px] font-bold text-[#C5A371] uppercase tracking-[0.5em] lg:tracking-[1em] mb-12 lg:mb-0`}
            >
              02 / Mission
            </span>
            <div className="max-w-md">
              <h3
                className={`${spaceGrotesk.className} text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6 lg:mb-8 text-[#C5A371]`}
              >
                Invisible <br /> Logic.
              </h3>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                Empowering visionary founders by crafting digital ecosystems
                that are invisible in operation but indispensable.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 05. CORE PILLARS: THE EXHIBITION LIST */}
        <div className="space-y-0">
          <div className="flex items-center gap-6 mb-10 lg:mb-16">
            <h3
              className={`${spaceGrotesk.className} text-[10px] lg:text-xs font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[#C5A371]`}
            >
              Core Pillars
            </h3>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          {[
            {
              title: "Radical Transparency",
              desc: "Open communication, clear architecture, and honest timelines.",
              cat: "COMMUNICATION",
            },
            {
              title: "Design as Engineering",
              desc: "Every pixel is a structural element. We treat interfaces as buildings.",
              cat: "STRUCTURE",
            },
            {
              title: "Permanent Relevance",
              desc: "We don't build for today; we build for the next decade.",
              cat: "LONGEVITY",
            },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group border-b border-black/10 py-10 lg:py-16 flex flex-col md:grid md:grid-cols-12 gap-4 lg:gap-8 hover:bg-white transition-all duration-700 px-2 lg:px-6 cursor-crosshair"
            >
              <div className="md:col-span-1">
                <span
                  className={`${spaceGrotesk.className} text-[10px] lg:text-xs font-bold opacity-20 group-hover:text-[#C5A371] group-hover:opacity-100 transition-all`}
                >
                  0{i + 1}
                </span>
              </div>
              <div className="md:col-span-6">
                <h4
                  className={`${spaceGrotesk.className} text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:translate-x-2 lg:group-hover:translate-x-4 transition-transform duration-700`}
                >
                  {pillar.title}
                </h4>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm lg:text-base font-light text-black/50 group-hover:text-black transition-colors leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="md:col-span-1 text-left md:text-right">
                <span className="text-[8px] lg:text-[9px] font-black tracking-widest opacity-20 uppercase group-hover:opacity-100">
                  {pillar.cat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
