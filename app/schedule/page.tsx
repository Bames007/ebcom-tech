"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Added for navigation
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Target,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Copy,
  CheckCircle,
  CheckCircle2,
  Palette,
  Code,
  ArrowLeft,
  Shield,
  Cloud,
  Globe,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { spaceGrotesk, inter } from "@/app/util/constants";

// --- TYPES & DATA ---
interface Service {
  id: string;
  name: string;
  description: string;
  icon: any;
  durations: Duration[];
}

interface Duration {
  length: number;
  price: number;
  label: string;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  business: string;
}

const services: Service[] = [
  {
    id: "consultation",
    name: "Strategy Consultation",
    description: "Project scoping, timeline planning, and resource allocation.",
    icon: Target,
    durations: [
      { length: 30, price: 20000, label: "30 min" },
      { length: 60, price: 35000, label: "1 hour" },
    ],
  },
  {
    id: "branding",
    name: "Branding & Design",
    description: "Logo design, brand identity, and visual systems.",
    icon: Palette,
    durations: [
      { length: 30, price: 25000, label: "30 min" },
      { length: 60, price: 45000, label: "1 hour" },
    ],
  },
  {
    id: "software",
    name: "Software Development",
    description: "Custom web and mobile applications engineered for scale.",
    icon: Code,
    durations: [
      { length: 30, price: 30000, label: "30 min" },
      { length: 60, price: 55000, label: "1 hour" },
    ],
  },
  {
    id: "network",
    name: "Network Solutions",
    description: "Infrastructure, server management, and network architecture.",
    icon: Globe,
    durations: [
      { length: 30, price: 22000, label: "30 min" },
      { length: 60, price: 40000, label: "1 hour" },
    ],
  },
  {
    id: "security",
    name: "Security Systems",
    description: "End-to-end security assessment and digital fortification.",
    icon: Shield,
    durations: [
      { length: 30, price: 28000, label: "30 min" },
      { length: 60, price: 50000, label: "1 hour" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    description: "Cloud infrastructure, migration, and maintenance.",
    icon: Cloud,
    durations: [
      { length: 30, price: 25000, label: "30 min" },
      { length: 60, price: 45000, label: "1 hour" },
    ],
  },
];

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function ScheduleConsultation() {
  const router = useRouter(); // Initialize router
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingId, setBookingId] = useState("");
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [selectedDuration, setSelectedDuration] = useState<Duration>(
    services[0].durations[0],
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    setBookingId(`EB-${Math.random().toString(36).substr(2, 4).toUpperCase()}`);
  }, []);

  const formatCurrency = (amt: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amt);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++)
      days.push(new Date(year, month, i));
    return days;
  };

  const handleCopyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentConfirmed) return;
    setIsSubmitting(true);

    // Automatic message preparation
    const message = `*NEW BOOKING: ${bookingId}*
--------------------------
*Client:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Business:* ${formData.business}
--------------------------
*Service:* ${selectedService.name}
*Duration:* ${selectedDuration.label}
*Date:* ${selectedDate.toDateString()}
*Time:* ${selectedTime}
*Total Paid:* ${formatCurrency(selectedDuration.price)}
--------------------------
Payment proof is ready for EBCOM TECHNOLOGIES LTD.`;

    await new Promise((r) => setTimeout(r, 1500));
    setBookingComplete(true);
    window.open(
      `https://wa.me/2348127728084?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const days = getDaysInMonth(currentMonth);

  if (bookingComplete) {
    return (
      <div
        className={`min-h-screen bg-[#F9F8F6] px-6 py-20 flex items-center justify-center ${inter.className}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full border border-black/10 bg-white p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <CheckCircle2 className="w-16 h-16 text-[#a27b5b] mx-auto mb-4" />
            <h2
              className={`${spaceGrotesk.className} text-2xl font-bold uppercase`}
            >
              Booking Confirmed
            </h2>
            <p className="text-xs text-black/40 mt-2">
              Reference ID: {bookingId}
            </p>
          </div>

          <div className="bg-black/5 p-6 rounded mb-8 text-[11px] font-mono space-y-2 border-l-2 border-[#a27b5b]">
            <p className="flex justify-between">
              <span>CLIENT:</span>{" "}
              <span className="font-bold">{formData.name}</span>
            </p>
            <p className="flex justify-between">
              <span>ACCOUNT:</span>{" "}
              <span className="font-bold text-[#a27b5b]">EBCOM TECH LTD</span>
            </p>
            <p className="flex justify-between">
              <span>TOTAL:</span>{" "}
              <span className="font-bold">
                {formatCurrency(selectedDuration.price)}
              </span>
            </p>
          </div>

          <button
            onClick={() => router.push("/")} // Navigates to Home
            className="w-full bg-[#2c3639] text-white py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#a27b5b] transition-all"
          >
            Finish & Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-[#F9F8F6] text-[#2c3639] pb-24 ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 pt-12 lg:pt-20">
        {/* Step Navigation */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a27b5b] mb-4">
            Scheduling Architecture
          </span>
          <h1
            className={`${spaceGrotesk.className} text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-12`}
          >
            Phase <span className="text-[#a27b5b]">0{bookingStep}</span>
          </h1>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                onClick={() => i < bookingStep && setBookingStep(i)}
                className={`w-10 h-10 border rounded-full text-[10px] font-bold transition-all ${bookingStep === i ? "bg-[#2c3639] text-white border-[#2c3639]" : bookingStep > i ? "border-[#a27b5b] text-[#a27b5b]" : "opacity-20"}`}
              >
                0{i}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {/* STEP 1: SERVICE */}
              {bookingStep === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelectedService(s);
                        setSelectedDuration(s.durations[0]);
                        setBookingStep(2);
                      }}
                      className="p-8 bg-white border border-black/10 hover:border-[#a27b5b] text-left transition-all group"
                    >
                      <s.icon className="w-8 h-8 mb-6 text-[#a27b5b]" />
                      <h3
                        className={`${spaceGrotesk.className} text-xl font-bold uppercase`}
                      >
                        {s.name}
                      </h3>
                      <p className="text-xs opacity-50 mt-2 mb-6">
                        {s.description}
                      </p>
                      <ArrowRight
                        className="group-hover:translate-x-2 transition-transform"
                        size={18}
                      />
                    </button>
                  ))}
                </motion.div>
              )}

              {/* STEP 2: DURATION & SCHEDULE */}
              {bookingStep === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-white border border-black/10 p-6">
                    <h3 className="text-[9px] font-black uppercase tracking-widest mb-4 opacity-40 italic">
                      Select Session Length
                    </h3>
                    <div className="flex gap-3">
                      {selectedService.durations.map((d) => (
                        <button
                          key={d.label}
                          onClick={() => setSelectedDuration(d)}
                          className={`flex-1 py-4 border text-[10px] font-bold uppercase tracking-widest transition-all ${selectedDuration.label === d.label ? "bg-[#2c3639] text-white border-[#2c3639]" : "border-black/10 bg-white"}`}
                        >
                          {d.label} • {formatCurrency(d.price)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-black/10 p-6 md:p-10">
                    <div className="flex justify-between items-center mb-8">
                      <button
                        onClick={() =>
                          setCurrentMonth(
                            new Date(
                              currentMonth.setMonth(
                                currentMonth.getMonth() - 1,
                              ),
                            ),
                          )
                        }
                      >
                        <ChevronLeft />
                      </button>
                      <h3 className="text-xs font-black uppercase tracking-[0.2em]">
                        {currentMonth.toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </h3>
                      <button
                        onClick={() =>
                          setCurrentMonth(
                            new Date(
                              currentMonth.setMonth(
                                currentMonth.getMonth() + 1,
                              ),
                            ),
                          )
                        }
                      >
                        <ChevronRight />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <div
                          key={i}
                          className="text-[9px] font-bold opacity-30 text-center py-2"
                        >
                          {d}
                        </div>
                      ))}
                      {days.map((date, i) => (
                        <button
                          key={date ? date.toISOString() : `empty-${i}`}
                          disabled={!date}
                          onClick={() => date && setSelectedDate(date)}
                          className={`h-12 md:h-16 text-xs font-bold border transition-all ${!date ? "border-transparent" : selectedDate?.toDateString() === date?.toDateString() ? "bg-[#a27b5b] text-white border-[#a27b5b]" : "border-black/5 hover:border-black/20"}`}
                        >
                          {date?.getDate()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setSelectedTime(t);
                          setBookingStep(3);
                        }}
                        className={`py-4 text-[10px] font-bold border ${selectedTime === t ? "bg-[#2c3639] text-white" : "bg-white border-black/10"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: USER DETAILS */}
              {bookingStep === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-black/10 p-6 md:p-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase opacity-40">
                        Client Full Name
                      </label>
                      <div className="flex bg-black/5 items-center px-4">
                        <User size={14} className="opacity-30" />
                        <input
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-transparent p-4 text-sm outline-none"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase opacity-40">
                        Phone Number
                      </label>
                      <div className="flex bg-black/5 items-center px-4">
                        <Phone size={14} className="opacity-30" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-transparent p-4 text-sm outline-none"
                          placeholder="+234"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase opacity-40">
                        Email Address
                      </label>
                      <div className="flex bg-black/5 items-center px-4">
                        <Mail size={14} className="opacity-30" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-transparent p-4 text-sm outline-none"
                          placeholder="mail@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase opacity-40">
                        Business Entity
                      </label>
                      <div className="flex bg-black/5 items-center px-4">
                        <Globe size={14} className="opacity-30" />
                        <input
                          value={formData.business}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              business: e.target.value,
                            })
                          }
                          className="w-full bg-transparent p-4 text-sm outline-none"
                          placeholder="Company Ltd"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setBookingStep(4)}
                    className="w-full py-4 bg-[#2c3639] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#a27b5b]"
                  >
                    Proceed to Verification
                  </button>
                </motion.div>
              )}

              {/* STEP 4: PAYMENT & VERIFICATION */}
              {bookingStep === 4 && (
                <motion.div
                  key="s4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-black/10 p-6 md:p-10"
                >
                  <div className="bg-[#2c3639] text-white p-8 mb-8 space-y-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-[10px] font-bold text-[#a27b5b] uppercase">
                        Beneficiary
                      </span>
                      <span className="text-xs font-bold uppercase">
                        EBCOM TECHNOLOGIES LTD
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-6 border border-white/10">
                      <span className="font-mono text-2xl tracking-tighter">
                        6450381136
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyToClipboard("6450381136", "acc")
                        }
                        className="text-[#a27b5b]"
                      >
                        {copiedField === "acc" ? (
                          <CheckCircle size={20} />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>
                    </div>
                    <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                      <input
                        type="checkbox"
                        id="pay"
                        className="mt-1 accent-[#a27b5b]"
                        checked={paymentConfirmed}
                        onChange={(e) => setPaymentConfirmed(e.target.checked)}
                      />
                      <label
                        htmlFor="pay"
                        className="text-[10px] opacity-60 leading-relaxed uppercase tracking-tighter cursor-pointer"
                      >
                        I confirm that the transfer of{" "}
                        {formatCurrency(selectedDuration.price)} has been made.
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setBookingStep(3)}
                      className="px-8 py-4 border border-black/10 text-[10px] font-black uppercase tracking-widest"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleFinalSubmit}
                      disabled={!paymentConfirmed || isSubmitting}
                      className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${paymentConfirmed ? "bg-[#2c3639] text-white hover:bg-[#a27b5b]" : "bg-black/10 text-black/30 cursor-not-allowed"}`}
                    >
                      {isSubmitting
                        ? "Finalizing..."
                        : "Confirm & Open WhatsApp"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SIDEBAR SUMMARY */}
          <div className="lg:col-span-4 lg:sticky lg:top-12 h-fit">
            <div className="bg-white border border-black/10 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8 border-b border-black/5 pb-4">
                <h3
                  className={`${spaceGrotesk.className} text-lg font-bold uppercase`}
                >
                  Manifest
                </h3>
                <span className="text-[10px] font-mono opacity-40">
                  {bookingId}
                </span>
              </div>
              <div className="space-y-4 text-xs">
                <div className="flex justify-between opacity-50">
                  <span>Service</span>
                  <span className="font-bold text-black">
                    {selectedService.name}
                  </span>
                </div>
                <div className="flex justify-between opacity-50">
                  <span>Duration</span>
                  <span className="font-bold text-black">
                    {selectedDuration.label}
                  </span>
                </div>
                <div className="flex justify-between opacity-50">
                  <span>Date</span>
                  <span className="font-bold text-black">
                    {selectedDate.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between opacity-50">
                  <span>Time</span>
                  <span className="font-bold text-black">
                    {selectedTime || "---"}
                  </span>
                </div>
                <div className="pt-8 border-t border-black/5 flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    Total Gross
                  </span>
                  <span className="text-3xl font-bold text-[#a27b5b] tracking-tighter">
                    {formatCurrency(selectedDuration.price)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
