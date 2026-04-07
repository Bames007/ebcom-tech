"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Fingerprint,
  Box,
  Globe,
  Minus,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { inter, spaceGrotesk } from "../util/constants";

interface Client {
  id: string;
  name: string;
  category: string;
  image: string;
  location: string;
  comment: string;
  color: string;
  accent: string;
  services?: string[];
}

export default function EbcomSovereignExhibition({
  clients,
}: {
  clients: Client[];
}) {
  const [index, setIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Fix for SSR
  const active = clients[index];
  const containerRef = useRef(null);

  // Handle window object safely
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgTextScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseSpringX = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseSpringY = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(mouseSpringY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseSpringX, [-0.5, 0.5], [-7, 7]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!isLargeScreen) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  useEffect(() => {
    if (!clients?.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [clients]);

  if (!active) return null;

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen lg:min-h-[115vh] w-full bg-[#dcd7c9] flex flex-col pt-24 lg:pt-48 pb-12 lg:pb-20 overflow-hidden font-sans ${inter.variable} ${spaceGrotesk.variable}`}
    >
      {/* LAYER 0: WATERMARK */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.h2
            key={active.name}
            style={{ scale: bgTextScale }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.03, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2 }}
            className="text-[20vw] font-black uppercase whitespace-nowrap font-space text-[#2c3639]"
          >
            {active.name}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* LAYER 1: EBCOM HEADER */}
      <div className="absolute top-8 left-6 lg:top-12 lg:left-12 z-50">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="font-space text-lg lg:text-2xl font-bold tracking-tighter text-[#2c3639]">
            EBCom{" "}
            <span className="text-[#a27b5b] italic font-light">
              Technologies
            </span>
          </h1>
          <div className="flex items-center gap-2">
            <div className="w-8 lg:w-12 h-[1px] bg-[#a27b5b]" />
            <span className="text-[7px] lg:text-[9px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[#2c3639]/40">
              Systemic Mastery
            </span>
          </div>
        </motion.div>
      </div>

      {/* LAYER 2: GRID CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 w-full px-6 lg:px-24 gap-10 lg:gap-16 items-center">
        {/* LEFT: EDITORIAL */}
        <motion.div
          style={{ y: isLargeScreen ? textY : 0 }}
          className="lg:col-span-5 order-2 lg:order-1"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 lg:space-y-10"
            >
              <div className="space-y-2 lg:space-y-4">
                <div className="flex items-center gap-3">
                  <Minus size={16} className="text-[#a27b5b]" />
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[#2c3639]/40 font-space">
                    Case // 0{active.id}
                  </span>
                </div>
                <h2 className="font-space text-5xl lg:text-[clamp(3.5rem,7vw,8rem)] font-bold leading-[0.9] tracking-tighter text-[#2c3639]">
                  {active.name}
                  <span className="text-[#a27b5b]">.</span>
                </h2>
              </div>

              <p className="text-lg lg:text-2xl font-light leading-relaxed italic border-l-2 border-[#a27b5b] pl-5 lg:pl-8 max-w-sm text-[#2c3639]/80">
                {active.comment}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {active.services?.map((s) => (
                  <span
                    key={s}
                    className="text-[8px] lg:text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 lg:px-4 lg:py-2 bg-[#2c3639] text-[#dcd7c9] rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Updated Link to /schedule */}
              <Link href="/schedule">
                <motion.button
                  whileHover={{ gap: "30px" }}
                  className="group flex items-center gap-4 lg:gap-6 pt-4 transition-all"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#2c3639]/20 flex items-center justify-center group-hover:bg-[#2c3639] group-hover:text-[#dcd7c9] transition-all">
                    <ArrowRight size={18} />
                  </div>
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-[#2c3639]">
                    Consult Now
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* RIGHT: IMAGE & NAV */}
        <motion.div
          style={{ y: isLargeScreen ? imageY : 0 }}
          className="lg:col-span-7 flex justify-center lg:justify-end relative order-1 lg:order-2"
        >
          {/* NAV INDICATORS */}
          <div className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 flex flex-col gap-4 lg:gap-8 z-40">
            {clients.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative flex items-center"
              >
                <motion.div
                  className="w-[2px] bg-[#2c3639]/10"
                  animate={{
                    height: index === i ? (isLargeScreen ? 40 : 25) : 12,
                    backgroundColor: index === i ? "#a27b5b" : "#2c36391a",
                  }}
                />
                <span
                  className={`absolute left-4 text-[8px] lg:text-[9px] font-black font-space ${
                    index === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>

          {/* THE IMAGE ARTIFACT */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            className="relative w-full max-w-[450px] lg:max-w-[560px] aspect-[4/5] overflow-hidden shadow-2xl rounded-[2rem_0.5rem_2rem_0.5rem] lg:rounded-[3rem_0.5rem_3rem_0.5rem]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{ filter: "grayscale(100%)", scale: 1.05 }}
                animate={{ filter: "grayscale(100%)", scale: 1 }}
                whileHover={{ filter: "grayscale(0%)", scale: 1.02 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${active.image})` }}
              />
            </AnimatePresence>

            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 text-white z-30 flex justify-between items-end mix-blend-difference">
              <div className="flex flex-col items-start">
                <Globe size={12} className="text-[#a27b5b] mb-1" />
                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest font-space">
                  {active.location}
                </span>
              </div>
              <div className="flex gap-1.5">
                <div
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-md border border-white/20"
                  style={{ backgroundColor: active.color }}
                />
                <div
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-md border border-white/20"
                  style={{ backgroundColor: active.accent }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* LAYER 3: SYSTEM STATS */}
      <div className="mt-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-t border-[#2c3639]/10 pt-10">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 lg:gap-20">
          {[
            { icon: Fingerprint, label: "Trust", val: "Legacy Protected" },
            { icon: ShieldCheck, label: "Volume", val: "600+ Projects" },
            { icon: Activity, label: "Cycle", val: "Est. 2023—2026" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 lg:gap-5">
              <div className="p-2.5 lg:p-3.5 bg-white/40 rounded-xl border border-white/50 shadow-sm">
                <stat.icon className="text-[#a27b5b]" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#2c3639]/40 font-space">
                  {stat.label}
                </span>
                <span className="text-[10px] lg:text-[11px] font-bold text-[#2c3639]">
                  {stat.val}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end opacity-30 pb-4 md:pb-0">
          <Box size={20} className="mb-1" />
          <span className="text-[8px] font-black tracking-widest uppercase font-space text-center">
            High Fidelity Architecture
          </span>
        </div>
      </div>
    </section>
  );
}
