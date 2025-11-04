// components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { Bebas_Neue, Poppins, Gantari } from "next/font/google";
import {
  ArrowRight,
  Play,
  Sparkles,
  Code,
  Shield,
  Sun,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Server,
  Lock,
  Users,
  TrendingUp,
  MessageCircle,
  Lightbulb,
  BarChart3,
  Cloud,
  Wifi,
  Cctv,
  Network,
  Router,
  Database,
  Mail,
  ShoppingCart,
  Video,
  Monitor,
  Laptop,
  HardDrive,
  LucidePhone,
  Codesandbox,
  HeartHandshake,
} from "lucide-react";

// Font configurations
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

const gantari = Gantari({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-gantari",
});

export default function WhatWeDo() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Slower auto-rotation for 7 categories
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % 7);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      title: "Software Development",
      icon: Code,
      description: "Cutting-edge digital solutions for modern businesses",
      gradient: "from-blue-600 to-cyan-500",
      color: "blue",
      services: [
        {
          name: "Mobile Applications",
          icon: Smartphone,
          description: "iOS & Android apps built with latest technologies",
        },
        {
          name: "Web Applications",
          icon: Globe,
          description: "Responsive, scalable web solutions",
        },
        {
          name: "Enterprise Software",
          icon: Server,
          description: "Custom business management systems",
        },
        {
          name: "E-commerce Solutions",
          icon: ShoppingCart,
          description: "Online stores and payment integrations",
        },
        {
          name: "Cloud Solutions",
          icon: Cloud,
          description: "Secure cloud infrastructure and deployment",
        },
      ],
    },
    {
      title: "Security Solutions",
      icon: Shield,
      description: "Comprehensive protection for your assets and data",
      gradient: "from-emerald-600 to-green-500",
      color: "green",
      services: [
        {
          name: "CCTV Systems",
          icon: Cctv,
          description: "HD surveillance with remote monitoring",
        },
        {
          name: "Solar Security",
          icon: Sun,
          description: "Eco-friendly security power solutions",
        },
        {
          name: "Access Control",
          icon: Lock,
          description: "Advanced entry management systems",
        },
        {
          name: "Alarm Systems",
          icon: Shield,
          description: "Intrusion detection and alert systems",
        },
        {
          name: "Security Audits",
          icon: BarChart3,
          description: "Comprehensive security assessments",
        },
      ],
    },
    {
      title: "Networking & Communications",
      icon: Network,
      description: "Robust network infrastructure and communication systems",
      gradient: "from-indigo-600 to-purple-500",
      color: "purple",
      services: [
        {
          name: "Cisco Networking",
          icon: Router,
          description: "Enterprise-grade Cisco network solutions",
        },
        {
          name: "Structured Cabling",
          icon: Network,
          description: "Professional network cabling installation",
        },
        {
          name: "Wireless Networks",
          icon: Wifi,
          description: "Secure and reliable WiFi solutions",
        },
        {
          name: "VoIP Systems",
          icon: LucidePhone,
          description: "Voice over IP business phone systems",
        },
        {
          name: "Network Security",
          icon: Lock,
          description: "Firewalls and network protection",
        },
      ],
    },
    {
      title: "IT Infrastructure",
      icon: Server,
      description: "Complete IT systems and infrastructure solutions",
      gradient: "from-slate-600 to-gray-500",
      color: "gray",
      services: [
        {
          name: "Server Setup",
          icon: Server,
          description: "Business server installation and configuration",
        },
        {
          name: "Hardware Solutions",
          icon: Laptop,
          description: "Computers, workstations, and peripherals",
        },
        {
          name: "Data Storage",
          icon: HardDrive,
          description: "NAS, SAN, and backup solutions",
        },
        {
          name: "Disaster Recovery",
          icon: Shield,
          description: "Business continuity and data protection",
        },
        {
          name: "IT Procurement",
          icon: ShoppingCart,
          description: "Hardware and software sourcing",
        },
      ],
    },
    {
      title: "Branding & Digital Marketing",
      icon: Palette,
      description: "Creative solutions that make your brand stand out",
      gradient: "from-amber-600 to-orange-500",
      color: "orange",
      services: [
        {
          name: "Logo & Brand Identity",
          icon: Users,
          description: "Memorable brand identities and guidelines",
        },
        {
          name: "Business Materials",
          icon: TrendingUp,
          description: "Flyers, brochures, and marketing collateral",
        },
        {
          name: "Social Media Management",
          icon: MessageCircle,
          description: "Engaging social media content and strategy",
        },
        {
          name: "Email Marketing",
          icon: Mail,
          description: "Newsletter and campaign management",
        },
        {
          name: "Content Creation",
          icon: Video,
          description: "Photos, videos, and digital content",
        },
      ],
    },
    {
      title: "Consultation Services",
      icon: MessageCircle,
      description: "Strategic guidance for business and technology growth",
      gradient: "from-violet-600 to-purple-500",
      color: "violet",
      services: [
        {
          name: "Business Consultation",
          icon: BarChart3,
          description: "Strategic planning and business development",
        },
        {
          name: "Tech Consultation",
          icon: Lightbulb,
          description: "Technology strategy and digital transformation",
        },
        {
          name: "IT Infrastructure Planning",
          icon: Server,
          description: "Network and system architecture planning",
        },
        {
          name: "Digital Strategy",
          icon: TrendingUp,
          description: "Online presence and marketing strategy",
        },
        {
          name: "Project Planning",
          icon: Zap,
          description: "Roadmap development and implementation planning",
        },
      ],
    },
    {
      title: "Support & Maintenance",
      icon: Users,
      description: "Ongoing support to keep your systems running smoothly",
      gradient: "from-red-600 to-pink-500",
      color: "red",
      services: [
        {
          name: "24/7 Technical Support",
          icon: Users,
          description: "Round-the-clock assistance and troubleshooting",
        },
        {
          name: "System Maintenance",
          icon: Server,
          description: "Regular updates and performance optimization",
        },
        {
          name: "Security Updates",
          icon: Shield,
          description: "Continuous security monitoring and patches",
        },
        {
          name: "Hardware Maintenance",
          icon: Monitor,
          description: "Equipment servicing and replacements",
        },
        {
          name: "Training & Onboarding",
          icon: Lightbulb,
          description: "Staff training and system onboarding",
        },
      ],
    },
  ];

  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "75+", label: "Happy Clients" },
    { number: "24/7", label: "Support" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 ${bebasNeue.variable} ${poppins.variable} ${gantari.variable}`}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Floating Tech Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-40 animate-float-slow hidden sm:block"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          >
            <div
              className="absolute inset-0 bg-blue-400 rounded-full animate-ping-slow"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          </div>
        ))}

        {/* Enhanced Gradient Orbs */}
        <div className="absolute -top-40 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600/30 via-cyan-600/30 to-emerald-600/30 rounded-full blur-3xl opacity-10 sm:opacity-15 animate-pulse-slow" />
        <div
          className="absolute -bottom-40 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-600/30 via-indigo-600/30 to-cyan-600/30 rounded-full blur-3xl opacity-10 sm:opacity-15 animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl opacity-5 sm:opacity-10 animate-pulse-slow"
          style={{ animationDelay: "6s" }}
        />

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse-slow" />
          <div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse-slow"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto w-full pt-10 sm:pt-20">
        {/* Badge */}
        <div
          className={`flex justify-center items-center w-full mb-8 sm:mb-12 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-blue-500/10 border border-blue-500/20">
            <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-poppins font-semibold tracking-wider uppercase">
              Your Complete Technology Partner
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-center">
          <h1
            className={`font-bebas-neue text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-none transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Complete Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent">
              Solutions Provider
            </span>
          </h1>

          {/* Subheading */}
          <div
            className={`text-lg sm:text-xl lg:text-2xl text-slate-600 font-gantari font-light max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            End-to-end services in{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                Software, Security & Networking
              </span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-blue-200/30 -z-10 transform -rotate-1" />
            </span>
          </div>
        </div>

        {/* Description */}
        <div
          className={`text-base sm:text-lg text-slate-500 font-gantari font-light max-w-2xl mx-auto text-center mb-8 sm:mb-12 leading-relaxed px-4 transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We deliver comprehensive technology solutions including software
          development, security systems, networking infrastructure, IT support,
          and digital marketing to drive your business growth and digital
          transformation.
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-800 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{
                transitionDelay: `${800 + index * 100}ms`,
              }}
            >
              <div className="font-bebas-neue text-2xl sm:text-3xl md:text-4xl text-blue-600 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="font-poppins text-slate-600 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20 transition-all duration-1000 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-poppins font-semibold text-base sm:text-lg w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
            Start Your Project
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative bg-white/80 backdrop-blur-sm text-slate-700 font-poppins font-semibold text-base sm:text-lg w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            View Case Studies
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </button>
        </div>

        {/* Services Section */}
        <div className="relative max-w-6xl mx-auto mb-16 sm:mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bebas-neue text-slate-800 text-center mb-12 sm:mb-16 transition-all duration-1000 delay-1200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our Services
          </h2>

          {/* Category Navigation - Mobile Friendly with 2 rows */}
          <div className="flex flex-col gap-2 mb-8 sm:mb-12">
            {/* First row */}
            <div className="flex overflow-x-auto pb-4 gap-2 sm:gap-3 scrollbar-hide">
              {categories.slice(0, 4).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(index)}
                    className={`group relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-poppins font-semibold text-sm sm:text-base transition-all duration-500 flex items-center gap-2 sm:gap-3 border-2 flex-shrink-0 ${
                      activeCategory === index
                        ? `text-white border-transparent bg-gradient-to-r ${category.gradient} shadow-xl sm:shadow-2xl scale-105`
                        : "text-slate-600 bg-white/80 backdrop-blur-sm border-slate-200/60 hover:scale-105 hover:border-slate-300"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="whitespace-nowrap">{category.title}</span>
                  </button>
                );
              })}
            </div>
            {/* Second row */}
            <div className="flex overflow-x-auto pb-4 gap-2 sm:gap-3 scrollbar-hide">
              {categories.slice(4).map((category, index) => {
                const IconComponent = category.icon;
                const actualIndex = index + 4;
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(actualIndex)}
                    className={`group relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-poppins font-semibold text-sm sm:text-base transition-all duration-500 flex items-center gap-2 sm:gap-3 border-2 flex-shrink-0 ${
                      activeCategory === actualIndex
                        ? `text-white border-transparent bg-gradient-to-r ${category.gradient} shadow-xl sm:shadow-2xl scale-105`
                        : "text-slate-600 bg-white/80 backdrop-blur-sm border-slate-200/60 hover:scale-105 hover:border-slate-300"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="whitespace-nowrap">{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Content */}
          <div className="relative min-h-[500px] sm:min-h-[400px]">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className={`transition-all duration-700 ease-in-out ${
                    activeCategory === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute translate-y-8 pointer-events-none"
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200/60 shadow-lg sm:shadow-xl">
                    {/* Category Header */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${category.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}
                      >
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="font-bebas-neue text-2xl sm:text-3xl lg:text-4xl text-slate-800 mb-2">
                          {category.title}
                        </h3>
                        <p className="font-gantari text-slate-600 text-base sm:text-lg leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                      {category.services.map((service, serviceIndex) => {
                        const ServiceIcon = service.icon;
                        return (
                          <div
                            key={service.name}
                            className="group bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200/60 hover:border-slate-300 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
                            style={{
                              transitionDelay: `${serviceIndex * 100}ms`,
                            }}
                          >
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                              <div
                                className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${category.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                              >
                                <ServiceIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                              </div>
                              <div>
                                <h4 className="font-poppins font-semibold text-slate-800 text-base sm:text-lg mb-1 sm:mb-2">
                                  {service.name}
                                </h4>
                                <p className="font-gantari text-slate-600 text-sm sm:text-base leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category Indicator Dots */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-8 sm:mt-12">
            {categories.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                  activeCategory === index
                    ? "bg-blue-500 w-6 sm:w-8 scale-110"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => setActiveCategory(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-2000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2 text-slate-400 text-xs tracking-widest uppercase font-poppins">
          <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full animate-bounce-slow" />
          <span className="bg-white/80 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-sm border border-slate-200/60 text-xs">
            Explore Our Services
          </span>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .font-bebas-neue {
          font-family: var(--font-bebas-neue), sans-serif;
        }

        .font-poppins {
          font-family: var(--font-poppins), sans-serif;
        }

        .font-gantari {
          font-family: var(--font-gantari), sans-serif;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(90deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
}
