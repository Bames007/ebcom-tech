"use client";

import { useEffect, useState } from "react";
import {
  Target,
  Users,
  Award,
  Rocket,
  Lightbulb,
  ShieldCheck,
  Globe2,
  HeartHandshake,
} from "lucide-react";
import { Bebas_Neue, Poppins } from "next/font/google";

// Proper font configuration with className
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Types for better TypeScript support
interface ValueCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  gradient?: string;
}

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Data separated for better maintainability
  const visionMission: ValueCard[] = [
    {
      icon: Target,
      title: "Our Vision",
      desc: "To redefine how businesses leverage technology — making innovation accessible, scalable, and impactful.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Rocket,
      title: "Our Mission",
      desc: "To empower brands and institutions with intelligent solutions that drive measurable growth and transformation.",
      gradient: "from-indigo-500 to-blue-400",
    },
  ];

  const values: ValueCard[] = [
    {
      icon: ShieldCheck,
      title: "Integrity & Trust",
      desc: "We believe in transparency, accountability, and building lasting partnerships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Every project we deliver is powered by creativity, research, and emerging technologies.",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "We work closely with our clients to ensure their goals are met — together.",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "We don't settle for good. We aim for exceptional in everything we create.",
    },
  ];

  const reasons: ValueCard[] = [
    {
      icon: Target,
      title: "Purpose-Driven",
      desc: "Our solutions are built around your vision and tailored to meet measurable outcomes.",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric",
      desc: "Your success defines ours. Every solution is created to empower your business.",
    },
    {
      icon: Rocket,
      title: "Future-Focused",
      desc: "We leverage AI, automation, and cloud technologies to future-proof your operations.",
    },
    {
      icon: Globe2,
      title: "Global Expertise",
      desc: "With clients and partners worldwide, our strategies scale beyond borders.",
    },
  ];

  // Reusable card component
  const ValueCard = ({
    item,
    index,
    delay = 0,
    showGradient = false,
  }: {
    item: ValueCard;
    index: number;
    delay?: number;
    showGradient?: boolean;
  }) => (
    <div
      className="group relative bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 150 + delay}ms`,
      }}
    >
      {showGradient && item.gradient && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
      )}

      <div
        className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center ${
          showGradient && item.gradient
            ? `bg-gradient-to-br ${item.gradient}`
            : "bg-gradient-to-br from-blue-500 to-cyan-400"
        }`}
      >
        <item.icon className="w-6 h-6 text-white" />
      </div>

      <h3
        className={`text-2xl text-slate-800 mb-2 tracking-wide ${bebasNeue.className}`}
      >
        {item.title}
      </h3>

      <p
        className={`text-slate-600 text-sm leading-relaxed italic ${poppins.className}`}
      >
        {item.desc}
      </p>
    </div>
  );

  // Section header component
  const SectionHeader = ({
    title,
    delay = 0,
  }: {
    title: string;
    delay?: number;
  }) => (
    <h3
      className={`text-5xl text-slate-900 mb-10 transition-all duration-1000 ${
        bebasNeue.className
      } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {title}
    </h3>
  );

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full blur-[160px] opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 rounded-full blur-[160px] opacity-20 animate-pulse" />

        {/* Additional animated elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-10 animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full blur-3xl opacity-10 animate-float"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h2
          className={`text-6xl md:text-7xl tracking-tight text-slate-900 mb-6 transition-all duration-1000 ${
            bebasNeue.className
          } ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            EBCom Technologies
          </span>
        </h2>

        <p
          className={`max-w-3xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed mb-16 transition-all duration-1000 delay-200 ${
            poppins.className
          } ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We are a digital innovation company committed to helping businesses
          harness the power of technology for growth, efficiency, and impact.
          From software development to digital transformation, EBCom is where
          vision meets precision.
        </p>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {visionMission.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 200 + 300}ms`,
              }}
            >
              <div
                className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3
                className={`text-3xl text-slate-800 mb-2 tracking-wide ${bebasNeue.className}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-slate-600 text-base leading-relaxed ${poppins.className}`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <SectionHeader title="Our Core Values" delay={500} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
          {values.map((item, index) => (
            <ValueCard key={item.title} item={item} index={index} delay={600} />
          ))}
        </div>

        {/* Why Choose Us */}
        <SectionHeader title="Why Choose Us" delay={700} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((item, index) => (
            <ValueCard key={item.title} item={item} index={index} delay={800} />
          ))}
        </div>

        {/* Stats Section - Additional impressive element */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "15+", label: "Countries Served" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${900 + index * 100}ms`,
              }}
            >
              <div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ${bebasNeue.className}`}
              >
                {stat.number}
              </div>
              <div className={`text-slate-600 mt-2 ${poppins.className}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
