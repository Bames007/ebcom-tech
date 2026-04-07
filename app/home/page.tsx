"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Space_Grotesk, Inter } from "next/font/google";

// Components
import Hero from "./Hero";
import AboutSection from "./About";
import WhatWeDo from "./WhatWeDo";
import Clients from "./Client";
import Contact from "./Contact";
import Footer from "./Footer";
import EddyAI from "./EddyAI";
import Header from "./Header";
import ServiceProcess from "./ServiceProcess";
import PortfolioPage from "../portfolio/page";

// Data
import { CLIENTS } from "../util/hero-users";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-inter",
});

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Intersection Observer to detect which section is currently in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.3, // Trigger when 30% of the section is visible
      rootMargin: "-10% 0px -70% 0px", // Adjusted to trigger closer to the top of the viewport
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // IDs must match the navItems in Header.tsx exactly
    const sections = [
      "home",
      "about",
      "services",
      "solutions",
      "portfolio",
      "serviceProcess",
      "contact",
    ];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      className={`relative bg-[#dcd7c9] ${inter.variable} ${spaceGrotesk.variable} font-sans selection:bg-[#a27b5b] selection:text-white`}
    >
      {/* 1. TOP PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-[#a27b5b] origin-left z-[1000]"
        style={{ scaleX }}
      />

      {/* 2. HEADER */}
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      {/* 3. MAIN CONTENT - Removed restrictive widths */}
      <main className="relative w-full">
        <section id="home" className="w-full min-h-screen pt-20">
          <Hero clients={CLIENTS} />
        </section>

        <section id="about" className="w-full bg-[#dcd7c9]">
          <AboutSection />
        </section>

        <section id="services" className="w-full bg-[#dcd7c9]">
          <WhatWeDo />
        </section>

        {/* Note: I added an ID for solutions if your menu uses it, or it can be part of Services */}
        <section id="solutions" className="w-full bg-[#dcd7c9]">
          {/* Add Solutions content here or remove from Nav */}
        </section>

        <section id="portfolio" className="w-full bg-[#2c3639]">
          <PortfolioPage />
        </section>

        <section id="clients" className="w-full bg-[#dcd7c9]">
          <Clients />
        </section>

        <section id="serviceProcess" className="w-full bg-[#dcd7c9]">
          <ServiceProcess />
        </section>

        <section id="contact" className="w-full bg-[#dcd7c9]">
          <Contact />
        </section>
      </main>

      <EddyAI />
      <Footer scrollToSection={scrollToSection} />

      {/* GRAINY OVERLAY - Lower z-index than Header */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[90] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default HomePage;
