// app/home/page.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import AboutSection from "./About";
import WhatWeDo from "./WhatWeDo";
import Clients from "./Client";
import Contact from "./Contact";
import Footer from "./Footer";
import EddyAI from "./EddyAI";
import Header from "./Header";
import ServiceProcess from "./ServiceProcess";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Create refs for each section
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const serviceProcessRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const sections = [
      { id: "home", ref: heroRef },
      { id: "about", ref: aboutRef },
      { id: "services", ref: servicesRef },
      { id: "clients", ref: clientsRef },
      { id: "serviceProcess", ref: serviceProcessRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% of section visible
        rootMargin: "-20% 0px -20% 0px", // Adjust this to change when section becomes active
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Scroll function that handles the refs properly
  const scrollToSection = (section: string) => {
    // Map sections to their refs
    const sectionRefs: Record<
      string,
      React.RefObject<HTMLDivElement | null>
    > = {
      home: heroRef,
      about: aboutRef,
      services: servicesRef,
      clients: clientsRef,
      serviceProcess: serviceProcessRef,
      contact: contactRef,
    };

    const targetRef = sectionRefs[section];

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(section);
    }
  };

  return (
    <div className="relative">
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

      <section ref={clientsRef} id="clients">
        <Clients />
      </section>

      <section ref={clientsRef} id="serviceProcess">
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
