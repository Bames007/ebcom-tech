"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  FileText,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CreditCard,
  Palette,
  Zap,
  Code,
  Shield,
  Cloud,
  Smartphone,
  Briefcase,
  Users,
  Star,
  ArrowRight,
  Target,
  Trophy,
  Award,
  Check,
  Clock4,
  CalendarDays,
  Sparkles,
  Zap as Lightning,
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: any;
  durations: Duration[];
  color: string;
  gradient: string;
  features: string[];
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
  notes: string;
}

const services: Service[] = [
  {
    id: "consultation",
    name: "Strategy Consultation",
    description: "Initial project discussion and planning session",
    icon: Target,
    durations: [
      { length: 30, price: 20000, label: "30 min" },
      { length: 60, price: 35000, label: "1 hour" },
    ],
    color: "from-[#2c3639] to-[#3f4e4f]",
    gradient: "bg-gradient-to-br from-[#2c3639] to-[#3f4e4f]",
    features: ["Project Scoping", "Timeline Planning", "Resource Allocation"],
  },
  {
    id: "branding",
    name: "Branding & Design",
    description: "Logo design, brand identity, and visual systems",
    icon: Palette,
    durations: [
      { length: 30, price: 25000, label: "30 min" },
      { length: 60, price: 45000, label: "1 hour" },
    ],
    color: "from-[#a27b5b] to-[#b8966f]",
    gradient: "bg-gradient-to-br from-[#a27b5b] to-[#b8966f]",
    features: ["Logo Concepts", "Color Palette", "Visual Identity"],
  },
  {
    id: "software",
    name: "Software Development",
    description: "Custom web and mobile applications",
    icon: Code,
    durations: [
      { length: 30, price: 30000, label: "30 min" },
      { length: 60, price: 55000, label: "1 hour" },
    ],
    color: "from-[#3f4e4f] to-[#526363]",
    gradient: "bg-gradient-to-br from-[#3f4e4f] to-[#526363]",
    features: [
      "Technical Architecture",
      "Tech Stack Selection",
      "Development Roadmap",
    ],
  },
  {
    id: "network",
    name: "Network Solutions",
    description: "Infrastructure and security planning",
    icon: Zap,
    durations: [
      { length: 30, price: 22000, label: "30 min" },
      { length: 60, price: 40000, label: "1 hour" },
    ],
    color: "from-[#2c3639] to-[#3f4e4f]",
    gradient: "bg-gradient-to-br from-[#2c3639] to-[#3f4e4f]",
    features: [
      "Network Architecture",
      "Security Assessment",
      "Infrastructure Planning",
    ],
  },
  {
    id: "security",
    name: "Security Systems",
    description: "Security assessment and planning",
    icon: Shield,
    durations: [
      { length: 30, price: 28000, label: "30 min" },
      { length: 60, price: 50000, label: "1 hour" },
    ],
    color: "from-[#a27b5b] to-[#b8966f]",
    gradient: "bg-gradient-to-br from-[#a27b5b] to-[#b8966f]",
    features: ["Risk Assessment", "Security Protocols", "Compliance Check"],
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    description: "Cloud infrastructure and migration",
    icon: Cloud,
    durations: [
      { length: 30, price: 25000, label: "30 min" },
      { length: 60, price: 45000, label: "1 hour" },
    ],
    color: "from-[#3f4e4f] to-[#526363]",
    gradient: "bg-gradient-to-br from-[#3f4e4f] to-[#526363]",
    features: ["Cloud Strategy", "Migration Plan", "Cost Optimization"],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "iOS and Android app development",
    icon: Smartphone,
    durations: [
      { length: 30, price: 32000, label: "30 min" },
      { length: 60, price: 58000, label: "1 hour" },
    ],
    color: "from-[#2c3639] to-[#3f4e4f]",
    gradient: "bg-gradient-to-br from-[#2c3639] to-[#3f4e4f]",
    features: [
      "App Architecture",
      "Platform Strategy",
      "User Experience Design",
    ],
  },
];

const timeSlots: string[] = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

export default function ScheduleConsultation() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [selectedDuration, setSelectedDuration] = useState<Duration>(
    services[0].durations[0],
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00");
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    notes: "",
  });
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];

    for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleFormSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setBookingComplete(true);
  };

  const resetBooking = (): void => {
    setSelectedService(services[0]);
    setSelectedDuration(services[0].durations[0]);
    setSelectedDate(new Date());
    setSelectedTime("10:00");
    setFormData({ name: "", email: "", phone: "", business: "", notes: "" });
    setBookingStep(1);
    setBookingComplete(false);
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();

  if (bookingComplete) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a27b5b]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#b8966f]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#2c3639]/30 via-[#a27b5b]/30 to-[#3f4e4f]/30 rounded-full blur-3xl animate-spin-slow"></div>

          {/* Floating Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 py-8 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-3xl px-8 py-6 shadow-2xl border border-white/20">
                <div className="relative w-20 h-20">
                  <Image
                    src="/logo.png"
                    alt="EBCOM Technologies"
                    width={80}
                    height={80}
                    className="object-contain rounded-xl"
                    priority
                  />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl font-bold text-white">
                    EBCOM TECHNOLOGIES
                  </h1>
                  <p className="text-gray-300 text-sm mt-1">
                    Consultation Confirmed
                  </p>
                </div>
              </div>
            </div>

            {/* Success Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden max-w-2xl mx-auto">
              <div className="p-12 text-center">
                <div className="relative inline-block">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-[#a27b5b] to-[#b8966f] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#a27b5b]/50 animate-bounce-slow">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                    <div className="absolute inset-0 rounded-full border-4 border-[#a27b5b]/50 animate-ping"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#a27b5b] rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h2 className="text-5xl font-bold text-white mb-6">
                  Booking Confirmed!
                </h2>

                <p className="text-gray-300 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Your consultation has been scheduled. We've sent a
                  confirmation email with all the details and a calendar invite.
                </p>

                {/* Summary Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 mb-10 text-left text-white border border-white/20 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Service</p>
                      <p className="text-xl font-semibold">
                        {selectedService.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Duration</p>
                      <p className="text-xl font-semibold">
                        {selectedDuration.label}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Date & Time</p>
                      <p className="text-xl font-semibold">
                        {selectedDate && formatDate(selectedDate)} at{" "}
                        {selectedTime}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Amount</p>
                      <p className="text-3xl font-bold text-[#b8966f]">
                        {formatCurrency(selectedDuration.price)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetBooking}
                    className="group relative overflow-hidden bg-gradient-to-r from-[#a27b5b] to-[#b8966f] text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b8966f] to-[#a27b5b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Calendar className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                    <span className="relative z-10">Book Another Session</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-semibold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#a27b5b] hover:text-[#b8966f] hover:bg-white/20">
                    Download Calendar
                  </button>
                </div>

                {/* Support Note */}
                <p className="text-gray-400 text-sm mt-10">
                  Need to reschedule? Contact us at{" "}
                  <a
                    href="mailto:info@ebcomtechnologies.com"
                    className="text-[#b8966f] hover:text-[#a27b5b] font-semibold transition-colors"
                  >
                    info@ebcomtechnologies.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-[#a27b5b]/10 to-[#b8966f]/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#2c3639]/10 to-[#3f4e4f]/10 rounded-full blur-3xl animate-spin-slow reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#a27b5b]/5 to-transparent rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-[#3f4e4f]/5 to-transparent rounded-full blur-3xl animate-pulse delay-300"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #a27b5b 1px, transparent 1px),
                             linear-gradient(to bottom, #a27b5b 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-[#a27b5b]/30 to-[#b8966f]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12 relative">
            <div className="inline-flex flex-col items-center gap-6">
              {/* Animated Logo Container */}
              <div className="relative group">
                <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-2xl animate-pulse">
                  <Image
                    src="/logo.png"
                    alt="EBCOM Technologies"
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#a27b5b] via-[#b8966f] to-[#a27b5b] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-100"></div>
              </div>

              <div className="space-y-4">
                {/* Animated Tagline */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a27b5b] to-[#b8966f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-white text-sm font-medium tracking-wide relative z-10">
                    SCHEDULE CONSULTATION
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight relative">
                  Book Your{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a27b5b] via-[#b8966f] to-[#a27b5b] animate-gradient-x">
                      Expert
                    </span>
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#a27b5b] via-[#b8966f] to-[#a27b5b] rounded-full animate-pulse"></span>
                  </span>{" "}
                  Session
                </h1>

                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Connect with our specialists to transform your ideas into
                  exceptional digital solutions
                </p>
              </div>
            </div>
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                number: "300+",
                label: "Projects Delivered",
                icon: Trophy,
                color: "from-[#2c3639] to-[#3f4e4f]",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                icon: Star,
                color: "from-[#a27b5b] to-[#b8966f]",
              },
              {
                number: "7+ Years",
                label: "Industry Excellence",
                icon: Award,
                color: "from-gray-900 to-gray-800",
              },
            ].map((stat, index) => (
              <div key={stat.label} className="group relative">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br ${stat.color} transition-all duration-500`}
                  ></div>

                  <div className="relative flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Booking Card with Glass Effect */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #a27b5b 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            {/* Progress Steps */}
            <div className="border-b border-white/30 bg-gradient-to-r from-white/50 to-white/30">
              <div className="p-8">
                <div className="flex items-center justify-between">
                  {[
                    { step: 1, label: "Select Service", icon: Target },
                    { step: 2, label: "Pick Time", icon: CalendarDays },
                    { step: 3, label: "Your Details", icon: User },
                    { step: 4, label: "Confirm", icon: CheckCircle2 },
                  ].map(({ step, label, icon: Icon }) => (
                    <div key={step} className="flex flex-col items-center">
                      <button
                        onClick={() =>
                          bookingStep >= step && setBookingStep(step)
                        }
                        className={`relative flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 ${
                          bookingStep >= step
                            ? "bg-gradient-to-br from-[#a27b5b] to-[#b8966f] text-white shadow-lg scale-110 cursor-pointer ring-4 ring-[#a27b5b]/20 animate-pulse"
                            : "bg-gray-100/50 text-gray-400 cursor-not-allowed backdrop-blur-sm"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                        {bookingStep > step && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#a27b5b] rounded-full flex items-center justify-center animate-bounce">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </button>
                      <span
                        className={`mt-3 text-sm font-medium ${
                          bookingStep >= step
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 p-8 relative z-10">
              {/* Left Side - Service Selection & Scheduling */}
              <div className="space-y-8">
                {/* Service Selection */}
                {bookingStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-3 animate-fade-in">
                        Choose Your Service
                      </h2>
                      <p className="text-gray-600 animate-fade-in-delay">
                        Select the specialized service you'd like to discuss
                        with our experts
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                          <button
                            key={service.id}
                            onClick={() => {
                              setSelectedService(service);
                              setSelectedDuration(service.durations[0]);
                              setBookingStep(2);
                            }}
                            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-gray-200 p-6 text-left hover:border-gray-900 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {/* Glow Effect */}
                            <div
                              className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
                            ></div>

                            <div className="relative z-10">
                              <div
                                className={`w-14 h-14 rounded-xl ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                              >
                                <IconComponent className="w-7 h-7 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {service.name}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {service.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {service.features
                                    .slice(0, 2)
                                    .map((feature, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-gray-200 transition-colors"
                                      >
                                        {feature}
                                      </span>
                                    ))}
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-2 transition-all duration-300" />
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Time Selection */}
                {(bookingStep === 2 || bookingStep === 3) && (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 animate-fade-in">
                          Select Date & Time
                        </h2>
                        <div className="flex items-center gap-3 animate-fade-in-delay">
                          <div
                            className={`w-10 h-10 rounded-xl ${selectedService.gradient} flex items-center justify-center shadow-lg group-hover:animate-pulse`}
                          >
                            <selectedService.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {selectedService.name}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {selectedDuration.label} •{" "}
                              {formatCurrency(selectedDuration.price)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setBookingStep(1)}
                        className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-xl transition-colors duration-300 text-sm font-medium hover:scale-105 active:scale-95"
                      >
                        Change Service
                      </button>
                    </div>

                    {/* Duration Selection */}
                    <div className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Consultation Duration
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedService.durations.map((duration) => (
                          <button
                            key={duration.length}
                            onClick={() => setSelectedDuration(duration)}
                            className={`p-5 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden group ${
                              selectedDuration.length === duration.length
                                ? "border-[#a27b5b] bg-gradient-to-br from-[#a27b5b]/10 to-[#b8966f]/10 shadow-lg scale-105"
                                : "border-gray-200 hover:border-[#a27b5b] bg-white/50 backdrop-blur-sm"
                            }`}
                          >
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#a27b5b] to-[#b8966f] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                            <div className="flex items-center justify-between mb-2 relative z-10">
                              <div className="text-lg font-bold">
                                {duration.label}
                              </div>
                              <Clock4
                                className={`w-5 h-5 ${
                                  selectedDuration.length === duration.length
                                    ? "text-[#a27b5b]"
                                    : "text-gray-400"
                                }`}
                              />
                            </div>
                            <div
                              className={`text-2xl font-bold mb-1 relative z-10 ${
                                selectedDuration.length === duration.length
                                  ? "text-[#a27b5b]"
                                  : "text-gray-900"
                              }`}
                            >
                              {formatCurrency(duration.price)}
                            </div>
                            <div
                              className={`text-sm relative z-10 ${
                                selectedDuration.length === duration.length
                                  ? "text-gray-600"
                                  : "text-gray-500"
                              }`}
                            >
                              Comprehensive expert consultation
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Calendar */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-6">
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
                          className="p-3 hover:bg-gray-100 rounded-xl transition-colors hover:scale-105 active:scale-95"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>

                        <h3 className="text-2xl font-bold text-gray-900">
                          {currentMonth.toLocaleDateString("en-US", {
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
                          className="p-3 hover:bg-gray-100 rounded-xl transition-colors hover:scale-105 active:scale-95"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-2">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                          (day) => (
                            <div
                              key={day}
                              className="text-center font-medium text-gray-700 py-3 text-sm"
                            >
                              {day}
                            </div>
                          ),
                        )}

                        {days.map((date, index) => {
                          const isToday =
                            date.toDateString() === today.toDateString();
                          const isSelected =
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString();
                          const isPast = date < today && !isToday;

                          return (
                            <button
                              key={index}
                              onClick={() => !isPast && setSelectedDate(date)}
                              disabled={isPast}
                              className={`h-12 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
                                isSelected
                                  ? "bg-gradient-to-br from-[#a27b5b] to-[#b8966f] text-white shadow-lg scale-105"
                                  : isToday
                                    ? "bg-gradient-to-br from-[#a27b5b] to-[#b8966f] text-white"
                                    : isPast
                                      ? "text-gray-300 cursor-not-allowed"
                                      : "text-gray-700 hover:bg-gray-100 hover:scale-105"
                              }`}
                            >
                              {/* Hover Effect */}
                              {!isPast && !isToday && !isSelected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#a27b5b] to-[#b8966f] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                              )}
                              <span className="relative z-10">
                                {date.getDate()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                      <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-bold text-gray-900">
                            Available Time Slots
                          </h3>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">
                              {selectedDate && formatDate(selectedDate)}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                          {timeSlots.map((time, index) => (
                            <button
                              key={time}
                              onClick={() => {
                                setSelectedTime(time);
                                setBookingStep(3);
                              }}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 relative overflow-hidden group ${
                                selectedTime === time
                                  ? "border-[#a27b5b] bg-gradient-to-br from-[#a27b5b]/10 to-[#b8966f]/10 shadow-lg scale-105"
                                  : "border-gray-200 hover:border-[#a27b5b] hover:scale-105 bg-white/50 backdrop-blur-sm"
                              }`}
                            >
                              {/* Hover Effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-[#a27b5b] to-[#b8966f] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                              <div className="font-semibold text-center relative z-10">
                                {time}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Side - Booking Summary & Form */}
              <div className="space-y-8">
                {/* Booking Summary */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 30%, #a27b5b 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center animate-pulse">
                        <selectedService.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Booking Summary</h2>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between py-4 border-b border-white/10">
                        <div className="space-y-1">
                          <p className="text-gray-300 text-sm">Service</p>
                          <p className="font-semibold text-lg">
                            {selectedService.name}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-300 text-sm">Duration</p>
                          <p className="font-semibold text-lg">
                            {selectedDuration.label}
                          </p>
                        </div>
                      </div>

                      {selectedDate && (
                        <div className="flex items-center justify-between py-4 border-b border-white/10">
                          <div className="space-y-1">
                            <p className="text-gray-300 text-sm">Date</p>
                            <p className="font-semibold">
                              {formatDate(selectedDate)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-300 text-sm">Time</p>
                            <p className="font-semibold">
                              {selectedTime || "Select time"}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-gray-300">Amount</p>
                          <p className="text-4xl font-bold text-white animate-pulse">
                            {formatCurrency(selectedDuration.price)}
                          </p>
                        </div>

                        {selectedDate && selectedTime && (
                          <button
                            onClick={() => setBookingStep(4)}
                            className="group relative w-full bg-gradient-to-r from-[#a27b5b] to-[#b8966f] text-white font-semibold py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            <span>Continue to Details</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                {bookingStep === 4 && (
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `linear-gradient(45deg, #a27b5b 1px, transparent 1px)`,
                          backgroundSize: "30px 30px",
                        }}
                      ></div>
                    </div>

                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Your Information
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Please provide your details to complete the booking
                      </p>

                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 font-semibold text-gray-900">
                              <User className="w-4 h-4 text-gray-700" />
                              Full Name
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium focus:border-[#a27b5b] focus:ring-4 focus:ring-[#a27b5b]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                              placeholder="John Doe"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="flex items-center gap-2 font-semibold text-gray-900">
                              <Mail className="w-4 h-4 text-gray-700" />
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                              className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium focus:border-[#a27b5b] focus:ring-4 focus:ring-[#a27b5b]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="flex items-center gap-2 font-semibold text-gray-900">
                              <Phone className="w-4 h-4 text-gray-700" />
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  phone: e.target.value,
                                }))
                              }
                              className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium focus:border-[#a27b5b] focus:ring-4 focus:ring-[#a27b5b]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                              placeholder="+234 800 000 0000"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="flex items-center gap-2 font-semibold text-gray-900">
                              <Building className="w-4 h-4 text-gray-700" />
                              Business/Company
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.business}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  business: e.target.value,
                                }))
                              }
                              className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium focus:border-[#a27b5b] focus:ring-4 focus:ring-[#a27b5b]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                              placeholder="Company Name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center gap-2 font-semibold text-gray-900">
                            <FileText className="w-4 h-4 text-gray-700" />
                            Project Notes
                          </label>
                          <textarea
                            value={formData.notes}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                notes: e.target.value,
                              }))
                            }
                            rows={4}
                            className="w-full p-4 border-2 border-gray-200 rounded-xl font-medium focus:border-[#a27b5b] focus:ring-4 focus:ring-[#a27b5b]/20 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                            placeholder="Tell us about your project goals, timeline, and specific requirements..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full bg-gradient-to-r from-[#a27b5b] to-[#b8966f] text-white font-semibold py-5 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg overflow-hidden"
                        >
                          {/* Animated Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#b8966f] to-[#a27b5b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                          {isSubmitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
                              <span className="relative z-10">
                                Processing Booking...
                              </span>
                            </>
                          ) : (
                            <>
                              <CreditCard className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                              <span className="relative z-10">
                                Confirm Booking •{" "}
                                {formatCurrency(selectedDuration.price)}
                              </span>
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-gray-600 text-sm">
            <p>
              Need assistance? Contact our support team at{" "}
              <a
                href="mailto:info@ebcomtechnologies.com"
                className="text-gray-900 font-semibold hover:text-[#a27b5b] transition-colors"
              >
                info@ebcomtechnologies.com
              </a>
            </p>
            <p className="mt-2">
              All consultations are confidential and backed by our quality
              guarantee
            </p>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float infinite linear;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow.reverse {
          animation-direction: reverse;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .border-gradient-to-br {
          border-image: linear-gradient(
              to bottom right,
              var(--tw-gradient-stops)
            )
            1;
        }
      `}</style>
    </div>
  );
}
