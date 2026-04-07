"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Command,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#2c3639]/20 animate-pulse rounded-full" />
  ),
});

// Import Lottie animations (Placeholder names based on your original)
import discussionAnimation from "@/public/assets/animations/chat_bot.json";
import wireframeAnimation from "@/public/assets/animations/digital.json";
import designAnimation from "@/public/assets/animations/mobile_showcase.json";
import prototypeAnimation from "@/public/assets/animations/cloud_security.json";
import developmentAnimation from "@/public/assets/animations/cybersecurity.json";
import deploymentAnimation from "@/public/assets/animations/network.json";

const services = [
  {
    id: "SOFTWARE",
    title: "Software Engineering",
    steps: [
      {
        title: "Discovery Audit",
        lottie: discussionAnimation,
        duration: "10 Days",
        deliverables: ["Project Brief", "Tech Stack Audit"],
        description:
          "We begin with an architectural excavation, identifying core technical requirements.",
      },
      {
        title: "Wireframe Logic",
        lottie: wireframeAnimation,
        duration: "14 Days",
        deliverables: ["User Flow", "Blueprints"],
        description:
          "Before aesthetics, we define logic. We map the structural skeleton of your application.",
      },
      {
        title: "Vogue Design",
        lottie: designAnimation,
        duration: "21 Days",
        deliverables: ["Hi-Fi UI", "Style Guide"],
        description:
          "Merging high-fashion aesthetics with functional UX digital statements.",
      },
    ],
  },
  {
    id: "SECURITY",
    title: "Cyber Infrastructure",
    steps: [
      {
        title: "Threat Assessment",
        lottie: developmentAnimation,
        duration: "7 Days",
        deliverables: ["Risk Audit"],
        description:
          "A comprehensive vulnerability scan across your entire digital surface.",
      },
    ],
  },
];

export default function ServiceProcess() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeService = services[activeServiceIdx];
  const currentStep = activeService.steps[activeStepIdx];

  const handleNext = () => {
    if (activeStepIdx < activeService.steps.length - 1) {
      setActiveStepIdx((prev) => prev + 1);
    } else if (activeServiceIdx < services.length - 1) {
      setActiveServiceIdx((prev) => prev + 1);
      setActiveStepIdx(0);
    }
  };

  const handlePrev = () => {
    if (activeStepIdx > 0) {
      setActiveStepIdx((prev) => prev - 1);
    } else if (activeServiceIdx > 0) {
      setActiveServiceIdx((prev) => prev - 1);
      setActiveStepIdx(services[activeServiceIdx - 1].steps.length - 1);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#DCD7C9] text-[#2c3639] overflow-hidden flex flex-col lg:flex-row">
      {/* --- PROTOCOL HEADER (Fixed to Section, not Window) --- */}
      <div className="absolute top-0 w-full z-30 px-6 py-6 lg:px-12 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-3 mix-blend-difference text-white pointer-events-auto">
          <Command className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="text-[9px] lg:text-[10px] tracking-[0.4em] font-bold uppercase">
            Protocol / {activeService.id}
          </span>
        </div>
        <div className="hidden md:block text-[10px] tracking-[0.5em] font-bold uppercase mix-blend-difference text-white">
          Phase 0{activeStepIdx + 1} — 0{activeService.steps.length}
        </div>
      </div>

      {/* --- LEFT: VISUAL EXHIBIT --- */}
      <div className="w-full lg:w-1/2 h-[40vh] lg:h-screen bg-[#2c3639] relative flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:60px_60px]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeServiceIdx}-${activeStepIdx}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-48 h-48 lg:w-full lg:max-w-sm aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <Lottie
              animationData={currentStep.lottie}
              className="w-full h-full filter grayscale contrast-125"
            />
          </motion.div>
        </AnimatePresence>

        {/* Service Switcher */}
        <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 flex gap-4 lg:gap-6 z-20">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveServiceIdx(i);
                setActiveStepIdx(0);
              }}
              className={`text-[8px] lg:text-[9px] tracking-[0.2em] font-black uppercase transition-all ${
                activeServiceIdx === i
                  ? "text-[#a27b5b]"
                  : "text-white/30 hover:text-white"
              }`}
            >
              {s.id}
            </button>
          ))}
        </div>
      </div>

      {/* --- RIGHT: EDITORIAL CONTENT --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-20 lg:py-0 relative bg-[#DCD7C9]">
        <div className="w-full max-w-xl mx-auto lg:mx-0">
          <motion.div className="flex items-center gap-3 mb-6 lg:mb-10">
            <div className="h-[1px] w-8 lg:w-12 bg-[#a27b5b]" />
            <span className="text-[#a27b5b] text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase">
              {currentStep.duration} Execution
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeServiceIdx}-${activeStepIdx}-content`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[300px] lg:min-h-0"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-6 font-serif">
                {currentStep.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      i === 0
                        ? "block"
                        : "block text-[#a27b5b] italic font-light lg:ml-8"
                    }
                  >
                    {word}
                  </span>
                ))}
              </h2>

              <p className="text-base lg:text-lg text-[#3f4e4f] font-light leading-relaxed mb-8 lg:mb-12">
                {currentStep.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-[#2c3639]/10">
                <div>
                  <p className="text-[9px] lg:text-[10px] uppercase tracking-widest font-bold text-[#a27b5b] mb-4">
                    Outcomes
                  </p>
                  <ul className="space-y-2">
                    {currentStep.deliverables.map((d, i) => (
                      <li
                        key={i}
                        className="text-[10px] lg:text-xs font-bold uppercase flex items-center gap-2"
                      >
                        <Plus className="w-3 h-3 text-[#a27b5b]" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden sm:flex flex-col justify-end items-end">
                  <span className="text-6xl lg:text-8xl font-black opacity-[0.05] select-none">
                    0{activeStepIdx + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex gap-4 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                disabled={activeServiceIdx === 0 && activeStepIdx === 0}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#2c3639]/20 flex items-center justify-center hover:bg-[#2c3639] hover:text-white transition-all disabled:opacity-10"
              >
                <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex-1 sm:flex-none h-12 lg:h-14 px-6 lg:px-8 rounded-full bg-[#2c3639] text-[#DCD7C9] flex items-center justify-center gap-4 hover:bg-[#a27b5b] transition-all group"
              >
                <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest">
                  Next Phase
                </span>
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex gap-2">
              {activeService.steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-500 rounded-full ${i === activeStepIdx ? "w-8 bg-[#a27b5b]" : "w-2 bg-[#2c3639]/10"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating ID Tag - Adjusted for Mobile */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden 2xl:block pointer-events-none">
          <span className="text-[120px] font-black text-[#2c3639] opacity-[0.02] rotate-90 origin-center block uppercase">
            {activeService.id}
          </span>
        </div>
      </div>

      {/* --- ACTION BUTTON (Scoped to Section) --- */}
      <Link
        href="/contact"
        className="absolute bottom-0 right-0 bg-[#a27b5b] text-white px-6 py-4 lg:px-10 lg:py-6 flex items-center gap-3 hover:bg-[#2c3639] transition-colors z-30 group"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">
          Contact
        </span>
        <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-45 transition-transform" />
      </Link>
    </section>
  );
}
