"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
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

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Create refs for each section
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const serviceProcessRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Store refs in an array for easier iteration
  const sectionRefs = [
    { id: "home", ref: heroRef },
    { id: "about", ref: aboutRef },
    { id: "services", ref: servicesRef },
    { id: "clients", ref: clientsRef },
    { id: "serviceProcess", ref: serviceProcessRef },
    { id: "contact", ref: contactRef },
  ];

  // Track active section on scroll with improved logic
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const sectionId = entry.target.id;
          // Use functional update to avoid dependency on activeSection
          setActiveSection((prevSection) => {
            // Only update if it's a different section
            if (prevSection !== sectionId) {
              return sectionId;
            }
            return prevSection;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      rootMargin: "-100px 0px -100px 0px",
    });

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []); // Empty dependency array since we don't depend on activeSection

  // Scroll function that handles the refs properly
  const scrollToSection = useCallback((section: string) => {
    // Map sections to their refs
    const sectionMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      home: heroRef,
      about: aboutRef,
      services: servicesRef,
      clients: clientsRef,
      serviceProcess: serviceProcessRef,
      contact: contactRef,
    };

    const targetRef = sectionMap[section];

    if (targetRef?.current) {
      // Update active section immediately
      setActiveSection(section);

      // Scroll to section
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div className="relative bg-[#dcd7c9]">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      <section ref={heroRef} id="home">
        <Hero />
      </section>

      <section ref={aboutRef} id="about">
        <AboutSection />
      </section>

      <section ref={servicesRef} id="services">
        <WhatWeDo />
      </section>

      <section ref={clientsRef} id="portfolio">
        <PortfolioPage />
      </section>

      <section ref={clientsRef} id="clients">
        <Clients />
      </section>

      <section ref={serviceProcessRef} id="serviceProcess">
        <ServiceProcess />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>

      <EddyAI />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default HomePage;
