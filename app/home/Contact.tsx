"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  Cpu,
} from "lucide-react";

export default function TechContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="bg-[#1A1C1E] text-[#F0F0F0] min-h-screen py-16 md:py-24 lg:py-32 px-6 lg:px-12 selection:bg-[#C5A371] selection:text-[#1A1C1E]">
      {/* --- HEADER: ENTERPRISE FOCUS --- */}
      <header className="max-w-7xl mx-auto mb-16 lg:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 md:w-12 bg-[#C5A371]" />
              <span className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] font-bold uppercase text-[#C5A371]">
                Infrastructure & Deployment
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] uppercase">
              Scale your <br />
              <span className="text-[#C5A371]">Digital Asset.</span>
            </h2>
          </div>
          <div className="lg:text-right max-w-xs">
            <p className="text-xs md:text-sm uppercase tracking-widest leading-relaxed text-gray-400 font-medium">
              Enterprise-grade solutions for software, security, and networking.
              Available for global consultation.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* --- LEFT: CORPORATE DIRECTORY --- */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-0 border-t border-white/5 lg:border-t-0">
            {[
              {
                label: "Primary Line",
                value: "08127728084",
                href: "tel:+2348127728084",
              },
              {
                label: "Secondary Line",
                value: "07036239106",
                href: "tel:+2347036239106",
              },
              {
                label: "Technical Support",
                value: "ebcomtechnologies@gmail.com",
                href: "mailto:ebcomtechnologies@gmail.com",
              },
              {
                label: "Operations Hub",
                value: "Abuja, Nigeria",
                href: "#",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group flex items-center justify-between py-6 md:py-8 border-b border-white/5 hover:bg-white/[0.02] transition-all px-2 md:px-4 active:bg-white/[0.05]"
              >
                <div>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-gray-500 block mb-1 md:mb-2">
                    {item.label}
                  </span>
                  <span className="text-lg md:text-xl font-semibold tracking-tight break-all">
                    {item.value}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#C5A371] flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>

          {/* SLA / Service Plaque */}
          <div className="p-6 md:p-8 bg-[#25282C] border-l-4 border-[#C5A371] rounded-r-lg">
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#C5A371]" />
              <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                Service Level Agreement
              </h4>
            </div>
            <div className="space-y-4 text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Inquiry Response</span>
                <span className="text-white">&lt; 2 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Deployment Speed</span>
                <span className="text-white text-right">
                  Agile Sprint Based
                </span>
              </div>
              <div className="flex justify-between">
                <span>System Monitoring</span>
                <span className="text-[#C5A371] font-bold">24/7/365</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: PROJECT BRIEF CANVAS --- */}
        <div className="lg:col-span-7 bg-[#F4F4F4] text-[#1A1C1E] p-8 lg:p-16 rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-12 md:py-20"
              >
                <div className="w-16 h-16 bg-[#1A1C1E] rounded-full flex items-center justify-center text-[#C5A371] mb-8">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4">
                  Request Logged
                </h3>
                <p className="text-gray-600 max-w-sm mb-8 text-sm font-medium">
                  Your project parameters have been sent to our engineering
                  team. An account manager will initiate contact shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] uppercase font-black tracking-[0.4em] border-b-2 border-[#1A1C1E] pb-1 hover:text-[#C5A371] hover:border-[#C5A371] transition-colors"
                >
                  New Request
                </button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8 md:space-y-10 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <FormField
                    label="Lead Contact"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Corporate Email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">
                      Primary Service
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#1A1C1E]/10 py-3 focus:border-[#C5A371] outline-none transition-colors appearance-none font-bold text-sm uppercase tracking-tight rounded-none"
                      >
                        <option value="">Select Domain</option>
                        <option>Custom Software Development</option>
                        <option>Network & Cyber Security</option>
                        <option>Cloud Infrastructure</option>
                        <option>CCTV & Surveillance Systems</option>
                      </select>
                      <div className="absolute right-0 bottom-3 pointer-events-none">
                        <ArrowUpRight className="w-3 h-3 rotate-90 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <FormField
                    label="Organization"
                    name="company"
                    placeholder="Company Ltd."
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">
                    Project Scope
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    onChange={handleChange}
                    placeholder="Outline your requirements..."
                    className="w-full bg-transparent border-b border-[#1A1C1E]/10 py-3 focus:border-[#C5A371] outline-none transition-colors resize-none font-medium text-sm placeholder:text-gray-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-[#1A1C1E] text-white py-5 lg:py-6 overflow-hidden transition-all hover:bg-[#C5A371] active:scale-[0.99]"
                >
                  <div className="relative z-10 flex items-center justify-center gap-4">
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black">
                      {isSubmitting
                        ? "Encrypting..."
                        : "Initialize Consultation"}
                    </span>
                    {!isSubmitting && (
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- TECH BADGES FOOTER --- */}
      <footer className="max-w-7xl mx-auto mt-20 lg:mt-32 border-t border-white/5 pt-12 md:pt-16 flex flex-col md:flex-row justify-between items-center opacity-60">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8 md:mb-0">
          <div className="flex items-center gap-3">
            <Cpu className="w-4 h-4 text-[#C5A371]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-center">
              Innovation First
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Globe2 className="w-4 h-4 text-[#C5A371]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-center">
              Global Ready
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: any) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 group-focus-within:text-[#C5A371] transition-colors">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#1A1C1E]/10 py-3 focus:border-[#C5A371] outline-none transition-all font-bold text-sm placeholder:text-gray-300 rounded-none"
      />
    </div>
  );
}
