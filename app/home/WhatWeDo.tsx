"use client";

import { useState, useEffect } from "react";
import { Bebas_Neue, Poppins, Gantari } from "next/font/google";
import {
  ArrowRight,
  Play,
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
  HeartHandshake,
  ChevronRight,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";
import Link from "next/link";

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
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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
      color: "#2c3639",
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
      color: "#a27b5b",
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
      color: "#3f4e4f",
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
      color: "#2c3639",
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
      color: "#a27b5b",
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
      color: "#3f4e4f",
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
      color: "#2c3639",
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
    { number: "300+", label: "Projects Completed", icon: CheckCircle },
    { number: "75+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
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
    <section
      className={`relative py-24 lg:py-32 overflow-hidden bg-white ${bebasNeue.variable} ${poppins.variable} ${gantari.variable}`}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,54,57,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(44,54,57,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Animated background elements */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-[#a27b5b]/10 to-[#3f4e4f]/10 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-[#3f4e4f]/10 to-[#2c3639]/10 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#a27b5b]/20 rounded-full animate-float"
            style={{
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}

        {/* Animated lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#a27b5b] to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3f4e4f] to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2c3639] to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a27b5b]/10 border border-[#a27b5b]/20 mb-6">
            <HeartHandshake className="w-4 h-4 text-[#a27b5b]" />
            <span className="text-sm font-medium text-[#a27b5b] tracking-wider uppercase">
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2c3639] mb-6">
            Our <span className="text-[#a27b5b]">Services</span>
          </h2>

          <p className="text-lg lg:text-xl text-[#3f4e4f] max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive technology solutions including software
            development, security systems, networking infrastructure, IT
            support, and digital marketing to drive your business growth and
            digital transformation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
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

        {/* Services Navigation */}
        <div className="mb-12">
          <div className="flex flex-col gap-2">
            <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide">
              {categories.slice(0, 4).map((category, index) => {
                const Icon = category.icon;
                const iconColorClass = getIconColorClass(category.color);
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(index)}
                    className={`group relative px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 border flex-shrink-0 ${
                      activeCategory === index
                        ? "bg-[#a27b5b] text-white border-[#a27b5b] shadow-lg"
                        : "bg-white text-[#3f4e4f] border-gray-200 hover:border-[#a27b5b] hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        activeCategory === index ? "text-white" : iconColorClass
                      }`}
                    />
                    <span className="whitespace-nowrap">{category.title}</span>
                    {activeCategory === index && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#a27b5b] rotate-45"></div>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide">
              {categories.slice(4).map((category, index) => {
                const Icon = category.icon;
                const iconColorClass = getIconColorClass(category.color);
                const actualIndex = index + 4;
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(actualIndex)}
                    className={`group relative px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 border flex-shrink-0 ${
                      activeCategory === actualIndex
                        ? "bg-[#a27b5b] text-white border-[#a27b5b] shadow-lg"
                        : "bg-white text-[#3f4e4f] border-gray-200 hover:border-[#a27b5b] hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        activeCategory === actualIndex
                          ? "text-white"
                          : iconColorClass
                      }`}
                    />
                    <span className="whitespace-nowrap">{category.title}</span>
                    {activeCategory === actualIndex && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#a27b5b] rotate-45"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Service Category */}
        <div className="relative min-h-[600px]">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const iconColorClass = getIconColorClass(category.color);
            return (
              <div
                key={category.title}
                className={`transition-all duration-700 ease-in-out ${
                  activeCategory === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 absolute translate-y-8 pointer-events-none"
                }`}
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-lg">
                  {/* Category Header */}
                  <div className="flex flex-col lg:flex-row items-start gap-6 mb-8">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0"
                      style={{ backgroundColor: category.color + "10" }}
                    >
                      <Icon className={`w-8 h-8 ${iconColorClass}`} />
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#2c3639] mb-2">
                        {category.title}
                      </h3>
                      <p className="text-[#3f4e4f] leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, serviceIndex) => {
                      const ServiceIcon = service.icon;
                      const isHovered = hoveredService === serviceIndex;
                      return (
                        <div
                          key={service.name}
                          className="group relative bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a27b5b]/30"
                          onMouseEnter={() => setHoveredService(serviceIndex)}
                          onMouseLeave={() => setHoveredService(null)}
                          style={{
                            transitionDelay: `${serviceIndex * 100}ms`,
                          }}
                        >
                          <div className="flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-4">
                              <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                                style={{
                                  backgroundColor: category.color + "10",
                                }}
                              >
                                <ServiceIcon
                                  className="w-6 h-6"
                                  style={{ color: category.color }}
                                />
                              </div>
                              <h4 className="text-lg font-bold text-[#2c3639] flex-1">
                                {service.name}
                              </h4>
                            </div>
                            <p className="text-[#3f4e4f] text-sm leading-relaxed mb-4 flex-1">
                              {service.description}
                            </p>
                            <div className="pt-4 border-t border-gray-100">
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
              </div>
            );
          })}
        </div>

        {/* Category Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? "bg-[#a27b5b] w-6 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setActiveCategory(index)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-[#2c3639] rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#a27b5b]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#3f4e4f]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-[#dcd7c9] mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses who trust EBCom Technologies for
                their digital transformation journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/schedule"
                  className="px-8 py-3 bg-white text-[#2c3639] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </Link>
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
      </div>

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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
