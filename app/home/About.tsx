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
  Building2,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  ChevronRight,
} from "lucide-react";

interface ValueCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  color: string;
}

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "7+", label: "Years Experience", icon: Award },
  ];

  const visionMission: ValueCard[] = [
    {
      icon: Target,
      title: "Our Vision",
      desc: "To redefine how businesses leverage technology — making innovation accessible, scalable, and impactful.",
      color: "#2c3639",
    },
    {
      icon: Rocket,
      title: "Our Mission",
      desc: "To empower brands and institutions with intelligent solutions that drive measurable growth and transformation.",
      color: "#a27b5b",
    },
  ];

  const values: ValueCard[] = [
    {
      icon: ShieldCheck,
      title: "Integrity & Trust",
      desc: "We believe in transparency, accountability, and building lasting partnerships.",
      color: "#2c3639",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Every project we deliver is powered by creativity, research, and emerging technologies.",
      color: "#a27b5b",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "We work closely with our clients to ensure their goals are met — together.",
      color: "#3f4e4f",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "We don't settle for good. We aim for exceptional in everything we create.",
      color: "#2c3639",
    },
  ];

  const reasons: ValueCard[] = [
    {
      icon: Target,
      title: "Purpose-Driven",
      desc: "Our solutions are built around your vision and tailored to meet measurable outcomes.",
      color: "#2c3639",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric",
      desc: "Your success defines ours. Every solution is created to empower your business.",
      color: "#a27b5b",
    },
    {
      icon: Zap,
      title: "Future-Focused",
      desc: "We leverage AI, automation, and cloud technologies to future-proof your operations.",
      color: "#3f4e4f",
    },
    {
      icon: Globe2,
      title: "Global Expertise",
      desc: "With clients and partners worldwide, our strategies scale beyond borders.",
      color: "#2c3639",
    },
  ];

  // Helper function to get icon color class based on color value
  const getIconColorClass = (color: string) => {
    switch (color) {
      case "#2c3639":
        return "text-[#2c3639]";
      case "#a27b5b":
        return "text-[#a27b5b]";
      case "#3f4e4f":
        return "text-[#3f4e4f]";
      default:
        return "text-[#2c3639]";
    }
  };

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a27b5b]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3f4e4f]/20 to-transparent" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,54,57,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(44,54,57,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Accent dots */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#a27b5b]/30 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-10 w-3 h-3 bg-[#3f4e4f]/20 rounded-full" />
        <div className="absolute top-1/3 left-20 w-1 h-1 bg-[#2c3639]/20 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a27b5b]/10 border border-[#a27b5b]/20 mb-6">
            <Building2 className="w-4 h-4 text-[#a27b5b]" />
            <span className="text-sm font-medium text-[#a27b5b] tracking-wider uppercase">
              About Our Company
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2c3639] mb-6">
            Driving Digital{" "}
            <span className="text-[#a27b5b]">Transformation</span>
          </h2>

          <p className="text-lg lg:text-xl text-[#3f4e4f] max-w-3xl mx-auto leading-relaxed">
            We are a digital innovation company committed to helping businesses
            harness the power of technology for growth, efficiency, and impact.
            From software development to digital transformation, EBCom is where
            vision meets precision.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a27b5b]/30 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#a27b5b]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#a27b5b]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2c3639]">
                    {stat.number}
                  </div>
                </div>
                <div className="text-sm font-medium text-[#3f4e4f]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {visionMission.map((item, index) => {
            const Icon = item.icon;
            const iconColorClass = getIconColorClass(item.color);
            return (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: item.color + "10" }}
                    >
                      <Icon className={`w-7 h-7 ${iconColorClass}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2c3639] mb-2">
                        {item.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-[#a27b5b] rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-[#3f4e4f] leading-relaxed">{item.desc}</p>
                </div>

                {/* Background accent */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-full group-hover:opacity-5"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#2c3639] mb-4">
              Our Core Values
            </h3>
            <p className="text-[#3f4e4f] max-w-2xl mx-auto">
              The principles that guide every project we undertake and every
              relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;
              const iconColorClass = getIconColorClass(item.color);
              return (
                <div
                  key={item.title}
                  className="group relative bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a27b5b]/30"
                  onMouseEnter={() => setHoveredCard(index + 10)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: item.color + "10" }}
                      >
                        <Icon className={`w-6 h-6 ${iconColorClass}`} />
                      </div>
                      <h4 className="text-lg font-bold text-[#2c3639] flex-1">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[#3f4e4f] text-sm leading-relaxed flex-1">
                      {item.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm font-medium text-[#a27b5b] group-hover:gap-2 transition-all duration-300">
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#2c3639] mb-4">
              Why Choose EBCom
            </h3>
            <p className="text-[#3f4e4f] max-w-2xl mx-auto">
              Discover what sets us apart and why businesses trust us with their
              digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              const iconColorClass = getIconColorClass(item.color);
              return (
                <div
                  key={item.title}
                  className="group relative bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(index + 20)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-2 h-2 bg-[#a27b5b] rounded-full animate-ping"></div>
                  </div>

                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#a27b5b]"
                      style={{
                        backgroundColor: item.color + "10",
                      }}
                    >
                      <Icon
                        className={`w-6 h-6 ${iconColorClass} transition-all duration-300 group-hover:text-white`}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-[#2c3639] mb-2">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-[#3f4e4f] text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <button className="text-sm font-medium text-[#a27b5b] hover:text-[#2c3639] transition-colors flex items-center gap-1 group-hover:gap-2">
                      <span>Read case study</span>
                      <ArrowRight className="w-4 h-4 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2c3639] rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#a27b5b]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#3f4e4f]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-[#dcd7c9] mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses who trust EBCom Technologies for their
              digital transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#2c3639] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/60 transition-colors">
                Schedule Consultation
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-[#dcd7c9]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#a27b5b] rounded-full"></div>
                <span>No hidden fees</span>
              </div>
              <div className="w-1 h-1 bg-[#dcd7c9]/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#a27b5b] rounded-full"></div>
                <span>Free initial consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
