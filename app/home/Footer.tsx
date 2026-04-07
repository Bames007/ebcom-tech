"use client";

import { useState } from "react";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import { spaceGrotesk, inter } from "@/app/util/constants"; // Assuming you have these constants

interface FooterProps {
  scrollToSection: (section: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [email, setEmail] = useState("");

  return (
    <footer
      className={`bg-[#F9F8F6] text-[#1A1A1A] border-t border-black/5 pt-16 lg:pt-24 pb-8 lg:pb-12 px-6 ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* --- BRANDING & CALL TO ACTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-12 pb-12 lg:pb-16 border-b border-black/10">
          <div className="max-w-2xl w-full">
            {/* EBCOM LOGO */}
            <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="EBCOM Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h2
                className={`${spaceGrotesk.className} text-3xl md:text-5xl font-bold tracking-tighter uppercase`}
              >
                EBCOM
              </h2>
            </div>

            <p className="text-lg md:text-2xl font-light leading-snug text-[#4A4A4A] max-w-lg">
              Engineering high-performance digital infrastructure for the 2026
              landscape.{" "}
              <span className="hidden md:inline">
                Precision-built in Abuja.
              </span>
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
            <button
              onClick={() => scrollToSection("contact")}
              className={`${spaceGrotesk.className} group w-full lg:w-auto flex items-center justify-between lg:justify-start gap-4 text-[10px] uppercase tracking-[0.4em] font-bold border border-black px-8 py-4 hover:bg-[#1A1A1A] hover:text-white transition-all`}
            >
              Initialize Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* --- DISPATCH & CONNECT --- */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Dispatch / Newsletter */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <span
                className={`${spaceGrotesk.className} text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold`}
              >
                Project Logs / 2026
              </span>
              <h3 className="text-sm font-light mt-2 text-gray-500">
                Receive technical briefs and infrastructure updates.
              </h3>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center border-b border-black/20 pb-2 focus-within:border-black transition-colors max-w-sm"
            >
              <input
                type="email"
                placeholder="ENTER CORPORATE EMAIL"
                className={`${spaceGrotesk.className} bg-transparent border-none outline-none w-full text-[10px] lg:text-xs tracking-widest uppercase placeholder:text-gray-300 py-2`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className={`${spaceGrotesk.className} text-[9px] lg:text-[10px] font-bold hover:opacity-50 tracking-widest ml-4`}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Social Architecture */}
          <div className="flex flex-col items-start md:items-end md:justify-center space-y-6 lg:space-y-8">
            <span
              className={`${spaceGrotesk.className} text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold`}
            >
              Global Connection
            </span>
            <div className="flex flex-wrap gap-6 lg:gap-8">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "X" },
                { icon: Instagram, label: "Instagram" },
                { icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="group relative flex items-center gap-2"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 stroke-[1.2px] group-hover:scale-110 transition-transform" />
                  {/* Label visible by default on mobile for better accessibility, hidden on desktop hover */}
                  <span
                    className={`${spaceGrotesk.className} md:absolute md:-bottom-6 md:left-1/2 md:-translate-x-1/2 text-[8px] tracking-widest md:opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold`}
                  >
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-black/5 gap-6">
          <div
            className={`${spaceGrotesk.className} text-[8px] lg:text-[9px] uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold text-gray-400`}
          >
            © 2026 EBCOM TECHNOLOGIES — SYSTEM READY
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 font-light text-[9px] lg:text-[10px] uppercase tracking-[0.1em] lg:tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Service Terms
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Directory
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
