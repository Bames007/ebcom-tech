// components/Footer.tsx
"use client";

import { Bebas_Neue, Poppins, Gantari } from "next/font/google";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Zap,
  CheckCircle,
  Home,
  Briefcase,
  User,
  Users,
  Contact2,
  Handshake,
  Globe,
  Shield,
  Cloud,
  CameraIcon,
  PaletteIcon,
  SmartphoneIcon,
  ColumnsSettings,
  Workflow,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface FooterProps {
  scrollToSection: (section: string) => void;
}

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

export default function Footer({ scrollToSection }: FooterProps) {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const services = [
    { name: "Software Development", icon: Cloud },
    { name: "Mobile Applications", icon: SmartphoneIcon },
    { name: "Web Applications", icon: Globe },
    { name: "Security Systems", icon: Shield },
    { name: "CCTV Installation", icon: CameraIcon },
    { name: "Network Solutions", icon: Zap },
    { name: "Branding & Design", icon: PaletteIcon },
    { name: "IT Consultation", icon: Users },
    { name: "Support & Maintenance", icon: ColumnsSettings },
  ];

  const quickLinks = [
    { name: "Home", icon: Home, section: "home" },
    { name: "About Us", icon: User, section: "about" },
    { name: "Services", icon: Briefcase, section: "services" },
    { name: "Clients", icon: Users, section: "clients" },
    { name: "Our Process", icon: Workflow, section: "serviceProcess" },
    { name: "Contact", icon: Contact2, section: "contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "bg-sky-400 hover:bg-sky-500",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "bg-red-500 hover:bg-red-600",
    },
  ];

  return (
    <footer
      className={`relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden border-t border-slate-200/60 ${bebasNeue.variable} ${poppins.variable} ${gantari.variable}`}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-cyan-50/30" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Floating Tech Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float-slow hidden lg:block"
            style={{
              top: `${15 + i * 12}%`,
              left: `${5 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 1.5}s`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/30 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Trust Banner */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-poppins font-semibold tracking-wider uppercase">
                Your Complete Technology Partner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div
                className={`transform transition-all duration-1000 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  {/* <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 ${"shadow-lg shadow-blue-500/20"}`}
                  > */}
                  <Image
                    src={"/logo.png"}
                    alt="EBCom Technologies"
                    width={32}
                    height={32}
                  />
                  {/* </div> */}
                  <div>
                    <h3 className="font-bebas-neue text-3xl text-slate-800 leading-none">
                      EBCOM
                    </h3>
                    <p className="font-bebas-neue text-slate-600 text-lg -mt-1">
                      TECHNOLOGIES
                    </p>
                  </div>
                </div>

                <p className="font-gantari text-slate-600 mb-8 leading-relaxed text-lg">
                  Your complete technology partner for innovative digital
                  solutions, advanced security systems, and comprehensive IT
                  services.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                      <Phone className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-poppins text-slate-500 text-sm">
                        Call Us
                      </p>
                      <p className="font-poppins font-semibold text-slate-800 truncate">
                        08127728084
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300 flex-shrink-0">
                      <Mail className="w-4 h-4 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-poppins text-slate-500 text-sm">
                        Email Us
                      </p>
                      <p className="font-poppins font-semibold text-slate-800 break-words">
                        ebcomtechnologies@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-poppins text-slate-500 text-sm">
                        Location
                      </p>
                      <p className="font-poppins font-semibold text-slate-800">
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="font-bebas-neue text-2xl text-slate-800 mb-8">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.section)}
                        className="font-poppins text-slate-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-4 group w-full text-left hover:translate-x-2 p-3 rounded-xl hover:bg-white/50 backdrop-blur-sm"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-semibold">{link.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="font-bebas-neue text-2xl text-slate-800 mb-8">
                Our Services
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <button
                      key={service.name}
                      onClick={() => scrollToSection("services")}
                      className="font-poppins text-slate-600 hover:text-slate-800 transition-all duration-300 flex items-center gap-3 group text-left p-3 rounded-xl hover:bg-white/50 backdrop-blur-sm hover:shadow-sm"
                      style={{ transitionDelay: `${index * 30}ms` }}
                    >
                      <IconComponent className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">
                        {service.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter & Social */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="font-bebas-neue text-2xl text-slate-800 mb-8">
                Stay Connected
              </h4>

              {/* Newsletter */}
              <div className="mb-8">
                <p className="font-gantari text-slate-600 mb-4 leading-relaxed">
                  Get the latest tech insights and project updates delivered to
                  your inbox.
                </p>
                {isSubscribed ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <p className="font-poppins font-semibold text-green-700">
                      Welcome to EBCOM!
                    </p>
                    <p className="font-gantari text-green-600 text-sm mt-1">
                      Check your email for confirmation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-4 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-800 placeholder-slate-400 text-sm shadow-sm hover:shadow-md"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-poppins font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Subscribe to Newsletter
                    </button>
                  </form>
                )}
              </div>

              {/* Social Links */}
              <div>
                <p className="font-poppins font-semibold text-slate-700 mb-4">
                  Follow Our Journey
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                        aria-label={social.label}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Stats */}
          <div
            className={`border-t border-slate-300/60 pt-12 transform transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "75+",
                  label: "Happy Clients",
                  color: "from-blue-500 to-cyan-500",
                  icon: Users,
                },
                {
                  number: "150+",
                  label: "Projects Completed",
                  color: "from-emerald-500 to-green-500",
                  icon: CheckCircle,
                },
                {
                  number: "24/7",
                  label: "Support",
                  color: "from-amber-500 to-orange-500",
                  icon: Shield,
                },
                {
                  number: "99%",
                  label: "Satisfaction",
                  color: "from-purple-500 to-pink-500",
                  icon: Handshake,
                },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bebas-neue text-3xl text-slate-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="font-poppins text-slate-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-300/60 bg-white/80 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="font-gantari text-slate-600 text-sm">
              © 2024 EBCOM Technologies. All rights reserved. | Building the
              Future, Today.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link, index) => (
                <a
                  key={link}
                  href="#"
                  className="font-poppins text-slate-600 hover:text-blue-600 text-sm transition-all duration-300 hover:scale-105 font-medium"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link}
                </a>
              )
            )}
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
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
