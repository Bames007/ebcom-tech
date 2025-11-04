"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Bebas_Neue, Poppins, Gantari } from "next/font/google";
import Lottie from "lottie-react";
import {
  Code,
  Network,
  Shield,
  Cloud,
  Smartphone,
  Zap,
  ArrowRight,
  ChevronDown,
  Play,
  Pause,
  MessageCircle,
  Layout,
  Palette,
  Figma,
  Terminal,
  Globe,
  CheckCircle2,
  Users,
  FileText,
  Rocket,
  Menu,
  X,
} from "lucide-react";

// Import Lottie animations
import discussionAnimation from "@/public/assets/animations/chat_bot.json";
import wireframeAnimation from "@/public/assets/animations/digital.json";
import designAnimation from "@/public/assets/animations/mobile_showcase.json";
import prototypeAnimation from "@/public/assets/animations/cloud_security.json";
import developmentAnimation from "@/public/assets/animations/cybersecurity.json";
import deploymentAnimation from "@/public/assets/animations/network.json";
import networkAnimation from "@/public/assets/animations/network.json";
import securityAnimation from "@/public/assets/animations/cybersecurity.json";
import cloudAnimation from "@/public/assets/animations/cloud_security.json";
import mobileAnimation from "@/public/assets/animations/mobile_showcase.json";

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

// Lottie animations mapping
const lottieAnimations = {
  discussion: discussionAnimation,
  wireframe: wireframeAnimation,
  design: designAnimation,
  prototype: prototypeAnimation,
  development: developmentAnimation,
  deployment: deploymentAnimation,
  network: networkAnimation,
  security: securityAnimation,
  cloud: cloudAnimation,
  mobile: mobileAnimation,
};

const services = [
  {
    id: "software",
    title: "Software Development",
    icon: Code,
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    steps: [
      {
        title: "Discovery & Discussion",
        description:
          "We start by understanding your vision, goals, and requirements through detailed conversations.",
        icon: MessageCircle,
        duration: "1-2 weeks",
        deliverables: ["Project Brief", "Requirements Document", "Timeline"],
        lottie: "discussion",
      },
      {
        title: "Wireframing",
        description:
          "Creating the structural blueprint of your application with focus on user flow and functionality.",
        icon: Layout,
        duration: "2-3 weeks",
        deliverables: [
          "Wireframes",
          "User Flow Maps",
          "Information Architecture",
        ],
        lottie: "wireframe",
      },
      {
        title: "UI/UX Design",
        description:
          "Transforming wireframes into beautiful, intuitive designs with focus on user experience.",
        icon: Palette,
        duration: "3-4 weeks",
        deliverables: [
          "Visual Designs",
          "Style Guide",
          "Interactive Prototypes",
        ],
        lottie: "design",
      },
      {
        title: "Prototyping",
        description:
          "Building interactive prototypes to test and validate the user experience before development.",
        icon: Figma,
        duration: "1-2 weeks",
        deliverables: [
          "Clickable Prototype",
          "User Testing Reports",
          "Design Revisions",
        ],
        lottie: "prototype",
      },
      {
        title: "Development",
        description:
          "Writing clean, efficient code to bring your vision to life with modern technologies.",
        icon: Terminal,
        duration: "6-12 weeks",
        deliverables: [
          "Source Code",
          "Development Updates",
          "Quality Assurance",
        ],
        lottie: "development",
      },
      {
        title: "Web & App Deployment",
        description:
          "Launching your product to the world with thorough testing and optimization.",
        icon: Rocket,
        duration: "1-2 weeks",
        deliverables: ["Live Website/App", "Documentation", "Training"],
        lottie: "deployment",
      },
    ],
  },
  {
    id: "network",
    title: "Network Solutions",
    icon: Network,
    color: "from-emerald-600 to-green-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    steps: [
      {
        title: "Network Assessment",
        description:
          "Comprehensive analysis of your current infrastructure and requirements.",
        icon: FileText,
        duration: "1 week",
        deliverables: ["Network Audit", "Requirements Analysis", "Proposal"],
        lottie: "network",
      },
      {
        title: "Infrastructure Planning",
        description:
          "Designing robust network architecture tailored to your business needs.",
        icon: Layout,
        duration: "2 weeks",
        deliverables: [
          "Network Diagrams",
          "Hardware Specs",
          "Implementation Plan",
        ],
        lottie: "network",
      },
      {
        title: "Hardware Installation",
        description:
          "Professional installation of routers, switches, and network equipment.",
        icon: Zap,
        duration: "2-3 weeks",
        deliverables: [
          "Installed Hardware",
          "Configuration Files",
          "Testing Reports",
        ],
        lottie: "network",
      },
      {
        title: "Configuration & Security",
        description:
          "Setting up secure network configurations and implementing security protocols.",
        icon: Shield,
        duration: "2 weeks",
        deliverables: [
          "Network Security",
          "Access Controls",
          "Monitoring Setup",
        ],
        lottie: "security",
      },
      {
        title: "Testing & Optimization",
        description:
          "Thorough testing and performance optimization of the entire network.",
        icon: CheckCircle2,
        duration: "1 week",
        deliverables: ["Performance Reports", "Optimization", "Documentation"],
        lottie: "network",
      },
      {
        title: "Deployment & Support",
        description:
          "Final deployment and ongoing support with 24/7 monitoring.",
        icon: Cloud,
        duration: "Ongoing",
        deliverables: ["Live Network", "Support Plan", "Monitoring Dashboard"],
        lottie: "cloud",
      },
    ],
  },
  {
    id: "security",
    title: "Security Systems",
    icon: Shield,
    color: "from-red-600 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    steps: [
      {
        title: "Security Assessment",
        description:
          "Evaluating your current security posture and identifying vulnerabilities.",
        icon: FileText,
        duration: "1 week",
        deliverables: ["Security Audit", "Risk Assessment", "Recommendations"],
        lottie: "security",
      },
      {
        title: "System Design",
        description:
          "Designing comprehensive security systems with CCTV, access control, and alarms.",
        icon: Layout,
        duration: "2 weeks",
        deliverables: [
          "System Design",
          "Equipment List",
          "Implementation Plan",
        ],
        lottie: "security",
      },
      {
        title: "Hardware Installation",
        description:
          "Professional installation of cameras, sensors, and security equipment.",
        icon: Zap,
        duration: "3-4 weeks",
        deliverables: ["Installed Equipment", "Wiring", "Initial Setup"],
        lottie: "security",
      },
      {
        title: "System Integration",
        description:
          "Integrating all security components into a unified management system.",
        icon: Network,
        duration: "2 weeks",
        deliverables: ["Integrated System", "Control Panel", "Mobile Access"],
        lottie: "security",
      },
      {
        title: "Testing & Calibration",
        description:
          "Comprehensive testing and fine-tuning of all security systems.",
        icon: CheckCircle2,
        duration: "1 week",
        deliverables: ["Test Reports", "Calibration Data", "User Training"],
        lottie: "security",
      },
      {
        title: "Monitoring Setup",
        description: "Setting up 24/7 monitoring and response protocols.",
        icon: Cloud,
        duration: "1 week",
        deliverables: ["Monitoring System", "Response Plan", "Support Setup"],
        lottie: "cloud",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    icon: Cloud,
    color: "from-purple-600 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    steps: [
      {
        title: "Cloud Strategy",
        description:
          "Developing a comprehensive cloud migration and implementation strategy.",
        icon: Users,
        duration: "2 weeks",
        deliverables: ["Cloud Strategy", "Migration Plan", "Cost Analysis"],
        lottie: "cloud",
      },
      {
        title: "Architecture Design",
        description:
          "Designing scalable and secure cloud infrastructure architecture.",
        icon: Layout,
        duration: "3 weeks",
        deliverables: [
          "Architecture Diagrams",
          "Security Plan",
          "Scalability Design",
        ],
        lottie: "cloud",
      },
      {
        title: "Migration Planning",
        description:
          "Planning the seamless migration of data and applications to the cloud.",
        icon: FileText,
        duration: "2 weeks",
        deliverables: ["Migration Plan", "Data Strategy", "Backup Plan"],
        lottie: "cloud",
      },
      {
        title: "Implementation",
        description:
          "Executing the cloud migration and setting up the infrastructure.",
        icon: Terminal,
        duration: "4-8 weeks",
        deliverables: [
          "Cloud Environment",
          "Migrated Data",
          "Application Setup",
        ],
        lottie: "cloud",
      },
      {
        title: "Security & Compliance",
        description:
          "Implementing security measures and ensuring compliance standards.",
        icon: Shield,
        duration: "2 weeks",
        deliverables: [
          "Security Configuration",
          "Compliance Reports",
          "Access Controls",
        ],
        lottie: "security",
      },
      {
        title: "Optimization & Support",
        description:
          "Continuous optimization and 24/7 support for your cloud infrastructure.",
        icon: Zap,
        duration: "Ongoing",
        deliverables: [
          "Performance Optimization",
          "Cost Management",
          "Support Services",
        ],
        lottie: "cloud",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-orange-600 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    steps: [
      {
        title: "Concept & Strategy",
        description:
          "Defining your mobile app vision, target audience, and business objectives.",
        icon: Users,
        duration: "1-2 weeks",
        deliverables: ["App Strategy", "Market Research", "Feature List"],
        lottie: "mobile",
      },
      {
        title: "UX Design & Wireframes",
        description:
          "Creating user-centric designs and interactive wireframes for optimal mobile experience.",
        icon: Layout,
        duration: "2-3 weeks",
        deliverables: ["User Flows", "Wireframes", "UX Research"],
        lottie: "wireframe",
      },
      {
        title: "UI Design",
        description:
          "Crafting beautiful, intuitive interfaces following iOS and Android guidelines.",
        icon: Palette,
        duration: "3-4 weeks",
        deliverables: ["UI Designs", "Design System", "Iconography"],
        lottie: "design",
      },
      {
        title: "Prototype Development",
        description:
          "Building functional prototypes to test user experience and gather feedback.",
        icon: Figma,
        duration: "2 weeks",
        deliverables: [
          "Interactive Prototype",
          "User Testing",
          "Feedback Reports",
        ],
        lottie: "prototype",
      },
      {
        title: "Native Development",
        description:
          "Developing high-performance native apps for iOS and Android platforms.",
        icon: Terminal,
        duration: "8-16 weeks",
        deliverables: ["iOS App", "Android App", "API Integration"],
        lottie: "development",
      },
      {
        title: "App Store Deployment",
        description:
          "Publishing your app to Apple App Store and Google Play Store.",
        icon: Rocket,
        duration: "1-2 weeks",
        deliverables: [
          "App Store Listings",
          "Store Optimization",
          "Launch Plan",
        ],
        lottie: "deployment",
      },
    ],
  },
];

export default function ServiceProcess() {
  const [activeService, setActiveService] = useState(services[0]);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Start with false for better UX
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const scrollTicking = useRef(false);

  // Memoize services to prevent unnecessary re-renders
  const memoizedServices = useMemo(() => services, []);

  // Optimized scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!scrollTicking.current && stepsRef.current) {
      requestAnimationFrame(() => {
        const element = stepsRef.current!;
        const scrollTop = element.scrollTop;
        const scrollHeight = element.scrollHeight - element.clientHeight;

        setScrollProgress((scrollTop / scrollHeight) * 100);

        const stepHeight = element.scrollHeight / activeService.steps.length;
        const currentStep = Math.floor(scrollTop / stepHeight);
        setActiveStep(Math.min(currentStep, activeService.steps.length - 1));

        scrollTicking.current = false;
      });
      scrollTicking.current = true;
    }
  }, [activeService.steps.length]);

  useEffect(() => {
    const stepsElement = stepsRef.current;
    if (stepsElement) {
      stepsElement.addEventListener("scroll", handleScroll, { passive: true });
      return () => stepsElement.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // Optimized auto-scroll with cleanup
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && activeStep < activeService.steps.length - 1) {
      interval = setInterval(() => {
        if (stepsRef.current) {
          const nextStep = activeStep + 1;
          const stepHeight =
            stepsRef.current.scrollHeight / activeService.steps.length;

          stepsRef.current.scrollTo({
            top: stepHeight * nextStep,
            behavior: "smooth",
          });

          // Let the scroll handler update the active step
          setTimeout(() => {
            if (stepsRef.current) {
              const currentScroll = stepsRef.current.scrollTop;
              const expectedScroll = stepHeight * nextStep;
              // Only update if scroll reached the target (smooth scroll completed)
              if (Math.abs(currentScroll - expectedScroll) < 10) {
                setActiveStep(nextStep);
              }
            }
          }, 500);
        }
      }, 4000); // Increased interval for better UX
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeStep, activeService.steps.length]);

  const handleServiceChange = useCallback((service: (typeof services)[0]) => {
    setActiveService(service);
    setActiveStep(0);
    setIsPlaying(false);
    setIsMobileMenuOpen(false);
    if (stepsRef.current) {
      stepsRef.current.scrollTop = 0;
    }
  }, []);

  const scrollToStep = useCallback(
    (index: number) => {
      setActiveStep(index);
      setIsPlaying(false);

      if (stepsRef.current) {
        const stepHeight =
          stepsRef.current.scrollHeight / activeService.steps.length;
        stepsRef.current.scrollTo({
          top: stepHeight * index,
          behavior: "smooth",
        });
      }
    },
    [activeService.steps.length]
  );

  // Memoize current step data
  const currentStepData = useMemo(
    () => activeService.steps[activeStep],
    [activeService, activeStep]
  );

  return (
    <section
      className={`relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${bebasNeue.className} ${poppins.variable} ${gantari.variable}`}
    >
      {/* Simplified Background for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-poppins font-semibold tracking-wider uppercase">
              Our Process
            </span>
          </div>

          <h2 className="font-bebas-neue text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-slate-800 mb-6">
            How We Bring{" "}
            <span
              className={`bg-gradient-to-r ${activeService.color} bg-clip-text text-transparent`}
            >
              Your Vision to Life
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-gantari font-light max-w-3xl mx-auto leading-relaxed">
            From initial discussion to final deployment, follow our proven
            process that has delivered exceptional results for 100+ satisfied
            clients worldwide.
          </p>
        </div>

        {/* Mobile Service Selection Dropdown */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <activeService.icon
                className={`w-5 h-5 text-${
                  activeService.color.split("-")[1]
                }-500`}
              />
              <span className="font-poppins font-semibold text-slate-800">
                {activeService.title}
              </span>
            </div>
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {isMobileMenuOpen && (
            <div className="mt-2 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden">
              {memoizedServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceChange(service)}
                    className={`w-full flex items-center gap-3 p-4 text-left transition-all duration-300 ${
                      activeService.id === service.id
                        ? `${service.bgColor} ${service.borderColor} border-l-4`
                        : "border-l-4 border-transparent hover:bg-slate-50"
                    }`}
                  >
                    <IconComponent
                      className={`w-5 h-5 ${
                        activeService.id === service.id
                          ? `text-${service.color.split("-")[1]}-500`
                          : "text-slate-400"
                      }`}
                    />
                    <span className="font-poppins font-medium text-slate-700">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop Service Selection */}
        <div className="hidden lg:flex flex-wrap justify-center gap-4 mb-12">
          {memoizedServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => handleServiceChange(service)}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-poppins font-semibold text-lg transition-all duration-500 hover:scale-105 ${
                  activeService.id === service.id
                    ? `${service.bgColor} ${service.borderColor} border-2 text-slate-800 shadow-xl`
                    : "bg-white/80 backdrop-blur-sm border border-slate-200/60 text-slate-600 hover:shadow-lg"
                }`}
              >
                <IconComponent
                  className={`w-6 h-6 transition-colors duration-300 ${
                    activeService.id === service.id
                      ? `text-${service.color.split("-")[1]}-500`
                      : "text-slate-400"
                  }`}
                />
                {service.title}
                {activeService.id === service.id && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-slate-200/60" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Process Steps */}
          <div
            ref={stepsRef}
            className="lg:col-span-3 h-[500px] lg:h-[600px] overflow-y-auto scroll-smooth rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-xl relative"
          >
            {/* Progress Bar */}
            <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-slate-200/60 p-4">
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${activeService.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: `${
                      ((activeStep + 1) / activeService.steps.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Steps */}
            <div className="p-4 lg:p-6 space-y-8 lg:space-y-12">
              {activeService.steps.map((step, index) => {
                const StepIcon = step.icon;
                const isStepActive = index === activeStep;
                const isStepVisible = Math.abs(index - activeStep) <= 1; // Only render active and adjacent steps fully

                return (
                  <div
                    key={index}
                    className={`group relative transition-all duration-500 ${
                      index <= activeStep
                        ? "opacity-100 translate-y-0"
                        : "opacity-40 translate-y-4"
                    }`}
                  >
                    {/* Connection Line */}
                    {index < activeService.steps.length - 1 && (
                      <div
                        className={`absolute left-6 top-20 w-0.5 h-24 transition-all duration-500 ${
                          index < activeStep
                            ? `bg-gradient-to-b ${activeService.color}`
                            : "bg-slate-300"
                        }`}
                      />
                    )}

                    <div className="flex gap-4 lg:gap-6">
                      {/* Step Number */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bebas-neue text-xl transition-all duration-300 ${
                          index <= activeStep
                            ? `bg-gradient-to-r ${activeService.color} text-white shadow-lg scale-105`
                            : "bg-slate-200 text-slate-400"
                        }`}
                      >
                        {index + 1}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <StepIcon
                                className={`w-5 h-5 lg:w-6 lg:h-6 ${
                                  index <= activeStep
                                    ? `text-${
                                        activeService.color.split("-")[1]
                                      }-500`
                                    : "text-slate-400"
                                }`}
                              />
                              <h3
                                className={`font-bebas-neue text-xl sm:text-2xl lg:text-3xl transition-colors duration-300 break-words ${
                                  index <= activeStep
                                    ? "text-slate-800"
                                    : "text-slate-400"
                                }`}
                              >
                                {step.title}
                              </h3>
                            </div>
                            <p className="font-gantari text-slate-600 text-base lg:text-lg leading-relaxed">
                              {step.description}
                            </p>
                          </div>

                          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-poppins font-medium whitespace-nowrap self-start lg:self-auto">
                            {step.duration}
                          </span>
                        </div>

                        {/* Deliverables */}
                        <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                          {step.deliverables.map(
                            (deliverable, deliverableIndex) => (
                              <span
                                key={deliverableIndex}
                                className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-poppins transition-all duration-300 hover:scale-105 hover:shadow-sm"
                              >
                                {deliverable}
                              </span>
                            )
                          )}
                        </div>

                        {/* Lottie Animation - Only render for visible steps */}
                        {isStepVisible && (
                          <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                            <div className="w-full h-32 lg:h-48 rounded-xl overflow-hidden">
                              <Lottie
                                animationData={
                                  lottieAnimations[
                                    step.lottie as keyof typeof lottieAnimations
                                  ]
                                }
                                loop={isStepActive}
                                autoplay={isStepActive}
                                className="w-full h-full"
                                rendererSettings={{
                                  preserveAspectRatio: "xMidYMid slice",
                                }}
                              />
                            </div>
                            <div className="text-center mt-2 font-poppins text-slate-500 text-sm">
                              {step.title} visualization
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar - Progress & Controls */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-xl p-4 lg:p-6">
              {/* Service Icon */}
              <div
                className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 bg-gradient-to-r ${activeService.color} rounded-2xl flex items-center justify-center shadow-lg`}
              >
                <activeService.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>

              {/* Progress */}
              <div className="text-center mb-4 lg:mb-6">
                <div className="font-bebas-neue text-2xl lg:text-3xl text-slate-800 mb-2">
                  Step {activeStep + 1} of {activeService.steps.length}
                </div>
                <div className="font-poppins text-slate-600 text-sm lg:text-base line-clamp-2">
                  {currentStepData?.title}
                </div>
              </div>

              {/* Step Navigation */}
              <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                {activeService.steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToStep(index)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                      index === activeStep
                        ? `bg-gradient-to-r ${activeService.color} text-white shadow-lg`
                        : index < activeStep
                        ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-poppins text-sm font-medium truncate">
                        {step.title}
                      </span>
                      {index < activeStep && (
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-poppins font-semibold transition-all duration-300 ${
                    isPlaying
                      ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      : `bg-gradient-to-r ${activeService.color} text-white shadow-lg hover:shadow-xl`
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">
                    {isPlaying ? "Pause" : "Play"}
                  </span>
                </button>

                <button
                  onClick={() => scrollToStep(0)}
                  className="px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-poppins font-semibold hover:bg-slate-200 transition-all duration-300"
                >
                  <span className="hidden sm:inline">Reset</span>
                  <ArrowRight className="w-4 h-4 sm:hidden rotate-180" />
                </button>
              </div>

              {/* Next Step Preview */}
              {activeStep < activeService.steps.length - 1 && (
                <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-slate-50 rounded-xl border border-slate-200/60">
                  <div className="font-poppins text-slate-500 text-sm mb-1 lg:mb-2">
                    Next:
                  </div>
                  <div className="font-poppins font-semibold text-slate-700 text-sm lg:text-base">
                    {activeService.steps[activeStep + 1].title}
                  </div>
                  <div className="flex items-center gap-2 mt-1 lg:mt-2 text-slate-500 text-xs lg:text-sm">
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
                    {activeService.steps[activeStep + 1].duration}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 lg:p-8 xl:p-12 text-white relative overflow-hidden">
            <h3 className="font-bebas-neue text-2xl sm:text-3xl lg:text-4xl mb-4 relative z-10">
              Ready to Start Your Project?
            </h3>
            <p className="font-gantari text-slate-300 text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto relative z-10">
              Let&apos;s discuss how we can bring your vision to life with our
              proven process and expertise.
            </p>

            <button className="group bg-white text-slate-900 font-poppins font-semibold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
              Start Your Journey
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Custom Scrollbar */
        .scroll-smooth {
          scroll-behavior: smooth;
        }

        .scroll-smooth::-webkit-scrollbar {
          width: 6px;
        }

        .scroll-smooth::-webkit-scrollbar-track {
          background: transparent;
        }

        .scroll-smooth::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.3);
          border-radius: 3px;
        }

        .scroll-smooth::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.5);
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile optimizations */
        @media (max-width: 1024px) {
          .scroll-smooth::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
    </section>
  );
}
