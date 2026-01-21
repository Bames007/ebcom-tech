"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  Users,
  Briefcase,
  Globe2,
  Star,
  Zap,
  TrendingUp,
  Globe,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import { bebasNeue, poppins } from "../util/constants";

const clients = [
  {
    name: "Bumblebee Cars",
    logo: "/clients/bumblebee.png",
    industry: "Automotive",
    ceo: "Daniel Okafor",
    comment:
      "EBCom transformed our car dealership with a powerful booking system that drives real results.",
    link: "#",
    rating: 5,
  },
  {
    name: "SAU University",
    logo: "/clients/sau.png",
    industry: "Education",
    ceo: "Dr. Blessing Adamu",
    comment:
      "Their software helped us digitize admissions and improve student experience dramatically.",
    link: "#",
    rating: 5,
  },
  {
    name: "Okemena Stores",
    logo: "/clients/okemena.png",
    industry: "E-commerce",
    ceo: "Linda Ebuka",
    comment:
      "We saw a 3x increase in conversions after EBCom rebuilt our platform.",
    link: "#",
    rating: 5,
  },
  {
    name: "Lush Lashes",
    logo: "/clients/lush.png",
    industry: "Beauty",
    ceo: "Amaka Ude",
    comment:
      "Their appointment system helped automate our bookings and increased our client retention.",
    link: "#",
    rating: 4,
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentClient, setCurrentClient] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-[#a27b5b]/30 rounded-full opacity-40 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-8 h-8 bg-[#3f4e4f]/30 rounded-lg opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-10 h-10 bg-[#2c3639]/20 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,54,57,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(44,54,57,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Solid Color Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#3f4e4f]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#2c3639]/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE – Hero Text */}
        <div
          className={`transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a27b5b]/20 border border-[#a27b5b]/30 mb-8">
            <Globe className="w-4 h-4 text-[#a27b5b]" />
            <span
              className={`${poppins.className} text-[#a27b5b] text-sm font-semibold tracking-wide`}
            >
              PREMIUM DIGITAL SOLUTIONS
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`${bebasNeue.className} text-6xl sm:text-7xl lg:text-8xl leading-[1.1] mb-6`}
          >
            <span className="text-[#2c3639]">EBCom</span>
            <br />
            <span className="text-[#3f4e4f]">TECHNOLOGIES</span>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="space-y-4">
            <p
              className={`${poppins.className} text-xl sm:text-2xl text-[#3f4e4f] max-w-lg leading-relaxed`}
            >
              We design and build{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#a27b5b] font-semibold">
                  smart digital platforms
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#a27b5b]/20 -z-10 transform -rotate-1"></span>
              </span>{" "}
              that elevate brands and accelerate growth.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-[#a27b5b] fill-current"
                    />
                  ))}
                </div>
                <span className={`${poppins.className} text-sm text-[#3f4e4f]`}>
                  5.0 Rating
                </span>
              </div>
              <div className="w-px h-6 bg-[#3f4e4f]/30"></div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#a27b5b]" />
                <span className={`${poppins.className} text-sm text-[#3f4e4f]`}>
                  500+ Projects
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/schedule"
              className={`${poppins.className} group relative bg-[#2c3639] hover:bg-[#1e2729] text-[#dcd7c9] font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 overflow-hidden`}
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 bg-[#3f4e4f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <button
              className={`${poppins.className} group relative bg-[#a27b5b] border border-[#3f4e4f]/30 hover:border-[#a27b5b] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-sm hover:shadow-md`}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Watch Story</span>
            </button>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { number: "500+", label: "Projects Delivered", icon: Briefcase },
              { number: "7+", label: "Years Excellence", icon: Zap },
              { number: "98%", label: "Client Satisfaction", icon: Users },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="w-12 h-12 bg-[#a27b5b]/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#a27b5b] transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-[#a27b5b] group-hover:text-[#dcd7c9] transition-colors duration-300" />
                </div>
                <h3
                  className={`${bebasNeue.className} text-3xl text-[#2c3639] group-hover:text-[#a27b5b] transition-colors duration-300`}
                >
                  {stat.number}
                </h3>
                <p
                  className={`${poppins.className} text-[#3f4e4f] text-sm mt-1`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – Client Showcase */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Featured Client Card */}
          <div className="relative bg-[#dcd7c9]/20 rounded-3xl p-8 border border-[#a27b5b]/30 shadow-xl mb-8">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#a27b5b] rounded-full flex items-center justify-center">
              <Handshake className="w-4 h-4 text-[#dcd7c9]" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#dcd7c9] shadow-md flex items-center justify-center p-2 border border-[#3f4e4f]/20">
                <div className="w-12 h-12 bg-[#2c3639] rounded-xl flex items-center justify-center text-[#dcd7c9] font-bold text-sm">
                  {clients[currentClient].name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
              </div>
              <div>
                <h4
                  className={`${poppins.className} font-bold text-[#2c3639] text-lg`}
                >
                  {clients[currentClient].name}
                </h4>
                <p
                  className={`${poppins.className} text-[#a27b5b] text-sm font-medium`}
                >
                  {clients[currentClient].industry}
                </p>
              </div>
            </div>

            <p
              className={`${poppins.className} text-[#3f4e4f] text-lg leading-relaxed mb-6 italic`}
            >
              "{clients[currentClient].comment}"
            </p>

            <div className="flex items-center justify-between">
              <span
                className={`${poppins.className} text-[#2c3639] font-semibold`}
              >
                – {clients[currentClient].ceo}
              </span>
              <div className="flex gap-1">
                {[...Array(clients[currentClient].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#a27b5b] fill-current"
                  />
                ))}
              </div>
            </div>

            {/* Client Indicator Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentClient(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentClient
                      ? "bg-[#a27b5b] w-6"
                      : "bg-[#3f4e4f]/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-2 gap-4">
            {clients.slice(0, 4).map((client, index) => (
              <div
                key={client.name}
                className={`group relative bg-[#dcd7c9]/30 rounded-2xl p-4 border border-[#3f4e4f]/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  index === currentClient
                    ? "ring-2 ring-[#a27b5b]/50"
                    : "hover:border-[#a27b5b]/40"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#dcd7c9] flex items-center justify-center border border-[#3f4e4f]/20">
                    <div className="w-6 h-6 bg-[#2c3639] rounded-lg flex items-center justify-center text-[#dcd7c9] text-xs font-bold">
                      {client.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5
                      className={`${poppins.className} font-semibold text-[#2c3639] text-sm truncate`}
                    >
                      {client.name}
                    </h5>
                    <p
                      className={`${poppins.className} text-[#3f4e4f] text-xs`}
                    >
                      {client.industry}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-2">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-[#a27b5b] fill-current"
                    />
                  ))}
                </div>

                <p
                  className={`${poppins.className} text-[#3f4e4f] text-xs leading-relaxed line-clamp-2`}
                >
                  {client.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-[#3f4e4f] bg-[#dcd7c9]/80 backdrop-blur-sm rounded-2xl p-4 border border-[#3f4e4f]/20">
            <div className="flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-[#a27b5b]" />
              <span className={`${poppins.className} text-sm font-medium`}>
                Trusted by businesses in 10+ industries
              </span>
            </div>
            <div className="w-px h-6 bg-[#3f4e4f]/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#2c3639]" />
              <span className={`${poppins.className} text-sm font-medium`}>
                98% client retention
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
