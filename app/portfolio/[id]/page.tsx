"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft, Plus, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { portfolioProjects, Project } from "../portfolio";
import { inter, spaceGrotesk } from "@/app/util/constants";
// Assuming these are available in your constants

// Your specific palette
const COLORS = {
  primary: "#a27b5b", // Earthy Tan
  background: "#dcd7c9", // Soft Sand
  accent: "#2c3639", // Deep Charcoal/Green
  highlight: "#3f4e4f", // Slate Gray
};

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProject = portfolioProjects.find((p) => p.id === params?.id);
    if (foundProject) setProject(foundProject);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [params?.id]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <MuseumLoader key="loader" />
      ) : project ? (
        <ProjectExperience key="experience" project={project} />
      ) : (
        <div className="h-screen bg-[#dcd7c9] flex items-center justify-center text-[#2c3639]">
          <h2 className={spaceGrotesk.className}>Artifact Lost</h2>
        </div>
      )}
    </AnimatePresence>
  );
}

function ProjectExperience({ project }: { project: Project }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <main
      ref={containerRef}
      className={`relative selection:bg-[#2c3639] selection:text-[#dcd7c9] ${inter.className}`}
      style={{ backgroundColor: COLORS.background }}
    >
      {/* 1. THE VESTIBULE (Immersive Hero) */}
      <section className="relative h-[110vh] overflow-hidden flex items-center">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={project.mockups[0]}
            alt="Hero"
            fill
            className="object-cover brightness-75 grayscale-[0.2]"
            priority
          />
          {/* Subtle Color Wash */}
          <div className="absolute inset-0 bg-[#2c3639]/40 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 w-full px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-[10px] tracking-[0.5em] mb-4 text-[#dcd7c9] uppercase font-medium">
              Case Study — {project.year}
            </span>
            <h1
              className={`${spaceGrotesk.className} text-[12vw] md:text-[10vw] leading-[0.85] text-[#dcd7c9] font-bold uppercase tracking-tighter mb-8`}
            >
              {project.name}
            </h1>
            <p className="max-w-md text-lg text-[#dcd7c9]/80 font-light leading-relaxed">
              {project.tagline}
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-12 right-12 flex items-center gap-4 text-[#dcd7c9]"
        >
          <span className="text-[10px] tracking-widest uppercase">
            Explore Archives
          </span>
          <div className="w-12 h-[1px] bg-[#dcd7c9]/50" />
        </motion.div>
      </section>

      {/* 2. THE FOLIO (Intro Narrative) */}
      <section className="relative py-32 md:py-56 px-6 bg-[#dcd7c9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2
                className={`${spaceGrotesk.className} text-sm uppercase tracking-[0.3em] text-[#a27b5b] font-bold mb-8`}
              >
                01 — Concept
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-3xl md:text-5xl leading-[1.1] text-[#2c3639] font-light mb-16 tracking-tight">
                {project.fullDescription || project.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#2c3639]/10">
                <MetaItem label="Client" value={project.client} />
                <MetaItem label="Location" value={project.location} />
                <MetaItem label="Industry" value={project.category} />
                <MetaItem label="Services" value={project.services[0]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALLERY (Asymmetric Exhibit) */}
      <section className="py-20 bg-[#dcd7c9]">
        <div className="space-y-40 md:space-y-64">
          {project.mockups.slice(1).map((img, i) => (
            <ExhibitRow key={i} img={img} index={i} />
          ))}
        </div>
      </section>

      {/* 4. CHROMATIC ARCHIVE (Colors) */}
      <section className="py-40 bg-[#2c3639] text-[#dcd7c9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className={`${spaceGrotesk.className} text-[8vw] leading-none mb-24 uppercase font-bold text-[#a27b5b]`}
          >
            The Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.entries(project.colors).map(([name, hex]) => (
              <div key={name} className="group cursor-crosshair">
                <div
                  className="h-64 w-full mb-6 transition-transform duration-700 group-hover:scale-[0.98]"
                  style={{ backgroundColor: hex }}
                />
                <span className="block text-[10px] uppercase tracking-widest opacity-40 mb-1">
                  {name}
                </span>
                <span className={`${spaceGrotesk.className} text-xl uppercase`}>
                  {hex}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES (Services) */}
      <section className="py-40 bg-[#dcd7c9] text-[#2c3639]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h3
                className={`${spaceGrotesk.className} text-6xl uppercase font-bold mb-12`}
              >
                Expertise Applied
              </h3>
              <div className="space-y-4">
                {project.services.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 group py-4 border-b border-[#2c3639]/10"
                  >
                    <span className="text-xs opacity-30">0{i + 1}</span>
                    <span className="text-2xl font-light group-hover:text-[#a27b5b] transition-colors">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="flex flex-col justify-center bg-[#2c3639] p-12 text-[#dcd7c9]">
              <p className="text-2xl italic font-light leading-relaxed mb-8">
                "
                {project.testimonials[0]?.quote ||
                  "A masterpiece of modern branding and functional design."}
                "
              </p>
              <div className="h-[1px] w-12 bg-[#a27b5b] mb-4" />
              <p className="font-bold text-sm uppercase tracking-widest">
                {project.testimonials[0]?.author || "Executive Client"}
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* EXIT TRANSITION */}
      <footer className="h-screen flex items-center justify-center bg-[#dcd7c9] border-t border-[#2c3639]/5">
        <Link href="/" className="group text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#a27b5b] mb-4 block">
            Return to Collection
          </span>
          <h2
            className={`${spaceGrotesk.className} text-[10vw] text-[#2c3639] group-hover:italic transition-all`}
          >
            INDEX
          </h2>
        </Link>
      </footer>

      {/* NAV */}
      <Link href="/" className="fixed top-10 left-10 z-[100] group">
        <div className="flex items-center gap-4 bg-[#2c3639] text-[#dcd7c9] px-6 py-3 rounded-full hover:bg-[#a27b5b] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Back
          </span>
        </div>
      </Link>
    </main>
  );
}

// Sub-components
function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-[9px] uppercase tracking-widest text-[#a27b5b] font-bold mb-2">
        {label}
      </span>
      <span className="text-sm text-[#3f4e4f] font-medium">{value}</span>
    </div>
  );
}

function ExhibitRow({ img, index }: { img: string; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center max-w-7xl mx-auto px-6`}
    >
      <div className="w-full md:w-3/5 overflow-hidden">
        <motion.div
          style={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={img}
            alt="Exhibit"
            width={1200}
            height={1600}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
      <motion.div
        style={{ y }}
        className="w-full md:w-2/5 p-8 border-l border-[#a27b5b]/20"
      >
        <span
          className={`${spaceGrotesk.className} text-5xl font-bold text-[#a27b5b]/20 mb-4 block`}
        >
          0{index + 2}
        </span>
        <h3
          className={`${spaceGrotesk.className} text-2xl font-bold text-[#2c3639] mb-4 uppercase tracking-tighter`}
        >
          Visual Fragment
        </h3>
        <p className="text-[#3f4e4f] leading-relaxed font-light">
          An exploration of textures, light, and functional layout. Every pixel
          curated to match the brand's core ethos.
        </p>
      </motion.div>
    </div>
  );
}

function MuseumLoader() {
  return (
    <div className="fixed inset-0 bg-[#dcd7c9] z-[200] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-8 border border-[#a27b5b] mx-auto mb-8"
        />
        <p
          className={`${spaceGrotesk.className} text-[10px] tracking-[0.6em] text-[#2c3639] uppercase font-bold`}
        >
          Retrieving Folio
        </p>
      </div>
    </div>
  );
}
