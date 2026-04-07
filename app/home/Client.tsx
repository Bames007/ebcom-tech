"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Monitor,
  ExternalLink,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";
import { spaceGrotesk, inter } from "@/app/util/constants";

export default function ClientsRedux() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      className={`bg-[#F4F1EA] text-[#1A1C1E] ${inter.className} overflow-hidden`}
    >
      {/* 1. REFINED HEADER: FULLY RESPONSIVE */}
      <header className="p-6 lg:p-12 border-b border-black/5 flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1
            className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-none`}
          >
            Strategic <br className="md:hidden" />
            <span className="text-[#C5A371] italic font-light">Alliances.</span>
          </h1>
          <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.4em] font-bold text-gray-400">
            Precision Engineering // Global Portfolio 2026
          </p>
        </div>

        {/* Stats Grid: Scales from 3 columns to stack if needed */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 w-full lg:w-auto border-t lg:border-t-0 pt-6 lg:pt-0 border-black/5">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <span
                className={`${spaceGrotesk.className} text-xl lg:text-2xl font-bold`}
              >
                {s.number}
              </span>
              <span className="text-[7px] lg:text-[8px] uppercase tracking-widest font-black text-[#C5A371]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* 2. THE EXHIBITION: ACCORDION GRID */}
      <div className="border-b border-black/5">
        {categories.map((cat, index) => (
          <CategoryRow
            key={index}
            cat={cat}
            index={index}
            active={activeCategory === index}
            onClick={() =>
              setActiveCategory(activeCategory === index ? -1 : index)
            }
          />
        ))}
      </div>

      {/* 3. PARTNERSHIP CALL */}
      <div className="py-20 lg:py-32 bg-[#1A1C1E] text-[#DCD7C9] text-center relative overflow-hidden">
        <div className="relative z-10 px-6">
          <h2
            className={`${spaceGrotesk.className} text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8`}
          >
            Request <span className="text-[#C5A371]">Technical Access.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#C5A371] text-[#1A1C1E] px-8 lg:px-10 py-4 lg:py-5 font-black uppercase tracking-widest text-[9px] lg:text-[10px] hover:bg-white transition-all group"
          >
            Initiate Protocol
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CategoryRow({ cat, index, active, onClick }: any) {
  return (
    <div
      className={`border-t first:border-t-0 border-black/5 transition-all duration-500 ${active ? "bg-white" : "bg-transparent"}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 lg:p-12 text-left group"
      >
        <div className="flex items-center gap-4 lg:gap-8">
          <span
            className={`${spaceGrotesk.className} text-[10px] lg:text-xs font-bold opacity-20`}
          >
            0{index + 1}
          </span>
          <h2
            className={`${spaceGrotesk.className} text-xl lg:text-4xl font-bold uppercase tracking-tight group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform`}
          >
            {cat.title}
          </h2>
        </div>
        {active ? (
          <Minus className="w-5 h-5 lg:w-6 lg:h-6" />
        ) : (
          <Plus className="w-5 h-5 lg:w-6 lg:h-6 opacity-30" />
        )}
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {/* Grid Adjustments for Mobile Viewports */}
            <div className="px-6 lg:px-12 pb-12 lg:pb-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              {cat.clients.map((client: any, i: number) => (
                <ClientCard key={i} client={client} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ClientCard({ client }: { client: any }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-[#F9F8F6] border border-black/5 p-5 lg:p-6 flex flex-col justify-between min-h-[300px] lg:min-h-[340px] relative overflow-hidden"
    >
      {/* DIGITAL VIEWPORT (SLIDE UP OVERLAY) - Hidden on smallest screens or replaced by tap */}
      <div className="absolute inset-0 bg-[#1A1C1E] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 z-20 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[7px] text-white/30 tracking-[0.3em] font-bold uppercase">
            External Data Node
          </span>
        </div>

        <div className="flex-1 border border-white/5 bg-white/[0.02] rounded-sm p-4 flex flex-col items-center justify-center text-center">
          <Monitor className="w-6 h-6 lg:w-8 lg:h-8 text-[#C5A371] mb-3 lg:mb-4 opacity-50" />
          <p className="text-[9px] lg:text-[10px] text-white font-space-grotesk tracking-widest uppercase mb-1">
            Live Endpoint
          </p>
          <p className="text-[8px] text-[#C5A371] mb-6 font-mono truncate w-full px-2">
            {client.url}
          </p>

          <Link
            href={client.url}
            target="_blank"
            className="flex items-center gap-2 bg-[#C5A371] text-[#1A1C1E] px-4 py-2 text-[9px] font-black uppercase tracking-widest hover:bg-white transition-colors"
          >
            View Site <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* BASE CONTENT */}
      <div className="z-10">
        <div className="flex justify-between items-start mb-8 lg:mb-12">
          <span className="text-2xl lg:text-3xl font-black tracking-tighter text-[#1A1C1E]/10 uppercase italic">
            {client.logo}
          </span>
          <div className="flex items-center gap-1 text-[7px] lg:text-[8px] font-bold uppercase tracking-widest text-[#C5A371]">
            <MapPin className="w-3 h-3" /> {client.location}
          </div>
        </div>

        <h4
          className={`${spaceGrotesk.className} text-lg lg:text-xl font-bold uppercase mb-2`}
        >
          {client.name}
        </h4>
        <p className="text-[10px] lg:text-[11px] text-gray-500 font-medium uppercase tracking-wide leading-relaxed mb-6">
          {client.project}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 lg:gap-2 z-10">
        {client.services.map((s: string) => (
          <span
            key={s}
            className="text-[7px] lg:text-[8px] font-bold uppercase tracking-widest bg-black text-white px-2 py-1"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const stats = [
  { number: "150+", label: "Infrastructures" },
  { number: "05", label: "Global Nodes" },
  { number: "24/7", label: "Uptime Support" },
];

const categories = [
  {
    title: "Government & Public",
    clients: [
      {
        name: "AKSG Digital",
        project: "State Security & Cloud Infrastructure",
        services: ["Cyber Security", "Cloud", "Biometrics"],
        logo: "AKSG",
        location: "Akwa Ibom, NG",
        url: "https://akwaibomstate.gov.ng",
      },
      {
        name: "Abuja Mun. Council",
        project: "Taxation & Revenue Portal",
        services: ["FinTech", "Web App"],
        logo: "AMAC",
        location: "Abuja, NG",
        url: "https://amac.lg.gov.ng",
      },
    ],
  },
  {
    title: "Hospitality & Retail",
    clients: [
      {
        name: "Five Star",
        project: "Enterprise POS & Guest Management",
        services: ["Retail Tech", "Networking"],
        logo: "FSR",
        location: "Lagos, NG",
        url: "https://fivestar-retail.com",
      },
      {
        name: "Cafe Royale",
        project: "Automated Fulfillment System",
        services: ["Automation", "UI/UX"],
        logo: "CR",
        location: "Abuja, NG",
        url: "https://caferoyale.com",
      },
    ],
  },
  {
    title: "Corporate & Academy",
    clients: [
      {
        name: "House of Tutu",
        project: "Luxury Fragrance Academy E-Portal",
        services: ["LMS", "E-Commerce", "UX"],
        logo: "HOT",
        location: "Lagos, NG",
        url: "https://thehouseoftutuacademy.com",
      },
      {
        name: "Artic Cooling",
        project: "Supply Chain ERP & Logistics Tracker",
        services: ["ERP", "Inventory", "Mobile"],
        logo: "ACL",
        location: "Dubai, UAE",
        url: "https://articcooling.ae",
      },
      {
        name: "Ebonyi Tech Hub",
        project: "Smart City Fiber Network",
        services: ["Infrastructure", "Telecom"],
        logo: "ETH",
        location: "Ebonyi, NG",
        url: "https://ebonyitech.gov.ng",
      },
    ],
  },
];
