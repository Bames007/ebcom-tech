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
import { Bebas_Neue, Poppins } from "next/font/google";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-200 rounded-full opacity-40 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-8 h-8 bg-indigo-200 rounded-lg opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-10 h-10 bg-cyan-200 rounded-full opacity-25 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Gradient Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE – Enhanced Hero Text */}
        <div
          className={`transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <Globe className="w-4 h-4 text-blue-500" />
            <span
              className={`${poppins.className} text-blue-600 text-sm font-semibold tracking-wide`}
            >
              PREMIUM DIGITAL SOLUTIONS
            </span>
          </div>

          {/* Main Headline with Gradient */}
          <h1
            className={`${bebasNeue.className} text-6xl sm:text-7xl lg:text-8xl leading-[1.1] mb-6`}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              EBCom
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              TECHNOLOGIES
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="space-y-4">
            <p
              className={`${poppins.className} text-xl sm:text-2xl text-slate-600 max-w-lg leading-relaxed`}
            >
              We design and build{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
                  smart digital platforms
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
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
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className={`${poppins.className} text-sm text-slate-500`}>
                  5.0 Rating
                </span>
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className={`${poppins.className} text-sm text-slate-500`}>
                  500+ Projects
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/schedule"
              className={`${poppins.className} group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/40 hover:scale-105 flex items-center gap-3 overflow-hidden`}
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <button
              className={`${poppins.className} group relative bg-white/80 backdrop-blur-sm border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-sm hover:shadow-md`}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Watch Story</span>
            </button>
          </div>

          {/* Enhanced Company Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { number: "500+", label: "Projects Delivered", icon: Briefcase },
              { number: "7+", label: "Years Excellence", icon: Zap },
              { number: "98%", label: "Client Satisfaction", icon: Users },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className={`${bebasNeue.className} text-3xl text-slate-900 group-hover:text-blue-600 transition-colors duration-300`}
                >
                  {stat.number}
                </h3>
                <p
                  className={`${poppins.className} text-slate-500 text-sm mt-1`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – Enhanced Client Showcase */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Featured Client Card */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 shadow-xl mb-8">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Handshake className="w-4 h-4 text-white" />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-md flex items-center justify-center p-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {clients[currentClient].name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>
              </div>
              <div>
                <h4
                  className={`${poppins.className} font-bold text-slate-800 text-lg`}
                >
                  {clients[currentClient].name}
                </h4>
                <p
                  className={`${poppins.className} text-blue-600 text-sm font-medium`}
                >
                  {clients[currentClient].industry}
                </p>
              </div>
            </div>

            <p
              className={`${poppins.className} text-slate-600 text-lg leading-relaxed mb-6 italic`}
            >
              "{clients[currentClient].comment}"
            </p>

            <div className="flex items-center justify-between">
              <span
                className={`${poppins.className} text-blue-700 font-semibold`}
              >
                – {clients[currentClient].ceo}
              </span>
              <div className="flex gap-1">
                {[...Array(clients[currentClient].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
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
                    index === currentClient ? "bg-blue-600 w-6" : "bg-slate-300"
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
                className={`group relative bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  index === currentClient ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      {client.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5
                      className={`${poppins.className} font-semibold text-slate-800 text-sm truncate`}
                    >
                      {client.name}
                    </h5>
                    <p
                      className={`${poppins.className} text-slate-500 text-xs`}
                    >
                      {client.industry}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-2">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p
                  className={`${poppins.className} text-slate-600 text-xs leading-relaxed line-clamp-2`}
                >
                  {client.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Trust Badge */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600 bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-200">
            <div className="flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-blue-500" />
              <span className={`${poppins.className} text-sm font-medium`}>
                Trusted by businesses in 10+ industries
              </span>
            </div>
            <div className="w-px h-6 bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className={`${poppins.className} text-sm font-medium`}>
                98% client retention
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
