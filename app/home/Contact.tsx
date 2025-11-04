// components/Contact.tsx
"use client";

import { useState, useEffect } from "react";
import { Bebas_Neue, Poppins, Gantari } from "next/font/google";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Users,
  Zap,
  Shield,
  Building2,
  Smartphone,
  Navigation,
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

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      details: "08127728084",
      action: "Call Now",
      gradient: "from-blue-600 to-cyan-500",
      href: "tel:+2348127728084",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your project details",
      details: "ebcomtechnologies@gmail.com",
      action: "Send Email",
      gradient: "from-emerald-600 to-green-500",
      href: "mailto:ebcomtechnologies@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat for instant support",
      details: "08127728084",
      action: "Start Chat",
      gradient: "from-green-600 to-emerald-500",
      href: "https://wa.me/2348127728084",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Meet our team in person",
      details: "Lagos, Nigeria",
      action: "Get Directions",
      gradient: "from-amber-600 to-orange-500",
      href: "https://maps.google.com/?q=Lagos+Nigeria",
    },
  ];

  const services = [
    "Software Development",
    "Mobile Applications",
    "Web Applications",
    "Security Systems",
    "CCTV Installation",
    "Network Solutions",
    "Branding & Design",
    "Consultation",
    "IT Support",
    "Other",
  ];

  const budgetRanges = [
    "₦500,000 - ₦2,000,000",
    "₦2,000,000 - ₦5,000,000",
    "₦5,000,000 - ₦10,000,000",
    "₦10,000,000+",
    "Not Sure",
  ];

  return (
    <section
      className={`relative py-20 overflow-hidden px-4 sm:px-6 lg:px-8 ${bebasNeue.variable} ${poppins.variable} ${gantari.variable}`}
      id="contact"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-40 animate-float-slow hidden sm:block"
            style={{
              top: `${15 + i * 12}%`,
              left: `${8 + i * 11}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${7 + i * 1.5}s`,
            }}
          >
            <div
              className="absolute inset-0 bg-blue-400 rounded-full animate-ping-slow"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </div>
        ))}

        {/* Enhanced Gradient Orbs */}
        <div className="absolute -top-40 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-emerald-600/20 rounded-full blur-3xl opacity-10 sm:opacity-15 animate-pulse-slow" />
        <div
          className="absolute -bottom-40 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-cyan-600/20 rounded-full blur-3xl opacity-10 sm:opacity-15 animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl opacity-5 sm:opacity-10 animate-pulse-slow"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-poppins font-semibold tracking-wider uppercase">
              Let's Build Something Amazing
            </span>
          </div>

          <h2
            className={`font-bebas-neue text-4xl sm:text-5xl lg:text-6xl text-slate-800 mb-6 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Start Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-slate-500 font-gantari font-light max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Ready to transform your business with cutting-edge technology? Let's
            discuss your project and create solutions that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 block"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-slate-800 text-lg mb-2">
                      {method.title}
                    </h3>
                    <p className="font-gantari text-slate-600 text-sm mb-3">
                      {method.description}
                    </p>
                    <div className="font-poppins font-semibold text-slate-800 mb-4">
                      {method.details}
                    </div>
                    <div className="w-full bg-slate-100 text-slate-700 font-poppins font-semibold text-sm py-3 rounded-xl group-hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2">
                      {method.action}
                      <Zap className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Business Hours & Info */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-500">
              <h3 className="font-bebas-neue text-2xl mb-6">Business Hours</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between group">
                  <span className="font-gantari group-hover:translate-x-2 transition-transform duration-300">
                    Monday - Friday
                  </span>
                  <span className="font-poppins font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between group">
                  <span className="font-gantari group-hover:translate-x-2 transition-transform duration-300">
                    Saturday
                  </span>
                  <span className="font-poppins font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    9:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between group">
                  <span className="font-gantari group-hover:translate-x-2 transition-transform duration-300">
                    Sunday
                  </span>
                  <span className="font-poppins font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Emergency Support
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-blue-100 group">
                <Clock className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-gantari text-sm group-hover:translate-x-1 transition-transform duration-300">
                  24/7 Emergency Support Available
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "2h", label: "Avg. Response" },
                { number: "24/7", label: "Support" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="font-bebas-neue text-2xl text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="font-poppins text-slate-600 text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-xl transform hover:shadow-2xl transition-all duration-500">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6 animate-bounce" />
                <h3 className="font-bebas-neue text-3xl text-slate-800 mb-4">
                  Message Sent!
                </h3>
                <p className="font-gantari text-slate-600 mb-6">
                  Thank you for your inquiry! Our team will contact you within 2
                  hours to discuss your project.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 text-white font-poppins font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-bebas-neue text-3xl text-slate-800 mb-2">
                  Project Inquiry
                </h3>
                <p className="font-gantari text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you ASAP
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block font-poppins font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group">
                      <label className="block font-poppins font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block font-poppins font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block font-poppins font-semibold text-slate-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <label className="block font-poppins font-semibold text-slate-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block font-poppins font-semibold text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-poppins font-semibold text-lg py-4 rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>

                  <p className="text-center font-gantari text-slate-500 text-sm">
                    We'll get back to you within 2 hours during business hours
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-xl transform hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-500 rounded-xl flex items-center justify-center">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bebas-neue text-3xl text-slate-800">
                Find Us
              </h3>
              <p className="font-gantari text-slate-600">
                Visit our office in Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-slate-100 to-slate-200 relative">
            {/* Interactive Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
                <h4 className="font-bebas-neue text-2xl text-slate-800 mb-2">
                  Lagos, Nigeria
                </h4>
                <p className="font-gantari text-slate-600 mb-4">
                  Our headquarters
                </p>
                <a
                  href="https://maps.google.com/?q=Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-poppins font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Map Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
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
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
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
      `}</style>
    </section>
  );
}
