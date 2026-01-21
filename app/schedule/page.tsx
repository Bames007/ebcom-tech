"use client";

import { useState } from "react";
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
} from "lucide-react";
import { bebasNeue, poppins } from "../util/constants";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: any;
  durations: Duration[];
  color: string;
  gradient: string;
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

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

const services: Service[] = [
  {
    id: "consultation",
    name: "Strategy Consultation",
    description: "Initial project discussion and planning session",
    icon: Calendar,
    durations: [
      { length: 30, price: 20000, label: "30 min" },
      { length: 60, price: 35000, label: "1 hour" },
    ],
    color: "from-[#2c3639] to-[#3f4e4f]",
    gradient: "bg-gradient-to-r from-[#2c3639] to-[#3f4e4f]",
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
    gradient: "bg-gradient-to-r from-[#a27b5b] to-[#b8966f]",
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
    gradient: "bg-gradient-to-r from-[#3f4e4f] to-[#526363]",
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
    gradient: "bg-gradient-to-r from-[#2c3639] to-[#3f4e4f]",
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
    gradient: "bg-gradient-to-r from-[#a27b5b] to-[#b8966f]",
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
    gradient: "bg-gradient-to-r from-[#3f4e4f] to-[#526363]",
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
    gradient: "bg-gradient-to-r from-[#2c3639] to-[#3f4e4f]",
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
  "18:00",
  "18:30",
];

export default function ScheduleConsultation() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [selectedDuration, setSelectedDuration] = useState<Duration>(
    services[0].durations[0],
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
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
  const [showServiceGrid, setShowServiceGrid] = useState<boolean>(true);

  // Generate calendar days
  const getDaysInMonth = (date: Date): CalendarDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: CalendarDay[] = [];

    // Add previous month's days
    const startingDayOfWeek = firstDay.getDay();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }

    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(year, month, i);
      days.push({ date: currentDate, isCurrentMonth: true });
    }

    // Add next month's days to fill the grid
    const totalCells = 42; // 6 weeks
    while (days.length < totalCells) {
      const nextDateNumber =
        days.length - lastDay.getDate() - startingDayOfWeek + 1;
      const nextDate = new Date(year, month + 1, nextDateNumber);
      days.push({ date: nextDate, isCurrentMonth: false });
    }

    return days;
  };

  const navigateMonth = (direction: "prev" | "next"): void => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      if (direction === "prev") {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
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
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleFormSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setBookingComplete(true);
  };

  const resetBooking = (): void => {
    setSelectedService(services[0]);
    setSelectedDuration(services[0].durations[0]);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      notes: "",
    });
    setBookingStep(1);
    setBookingComplete(false);
    setShowServiceGrid(true);
  };

  const handleServiceSelect = (service: Service): void => {
    setSelectedService(service);
    setSelectedDuration(service.durations[0]);
    setShowServiceGrid(false);
    setTimeout(() => setBookingStep(2), 300);
  };

  const handleBackToServices = (): void => {
    setShowServiceGrid(true);
    setTimeout(() => setBookingStep(1), 300);
  };

  const handleStepNavigation = (step: number): void => {
    if (step > bookingStep) return;

    setBookingStep(step);

    if (step === 1) {
      setShowServiceGrid(true);
    } else {
      setShowServiceGrid(false);
    }
  };

  const days: CalendarDay[] = getDaysInMonth(currentMonth);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (bookingComplete) {
    return (
      <div
        className={`min-h-screen bg-gradient-to-br from-[#dcd7c9]/30 to-white py-4 sm:py-8 px-3 sm:px-6 lg:px-8 ${bebasNeue.variable} ${poppins.variable}`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Logo Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-3xl px-6 sm:px-8 py-4 shadow-2xl border border-[#a27b5b]/30">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                <Image
                  src="/logo.png"
                  alt="EBCOM Technologies"
                  width={160}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="text-left">
                <h1 className="font-bebas-neue text-3xl sm:text-4xl text-[#2c3639] leading-none">
                  EBCOM TECHNOLOGIES
                </h1>
                <p className="font-poppins text-[#3f4e4f] text-xs sm:text-sm mt-1">
                  Consultation Scheduled
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-[#a27b5b]/20 overflow-hidden">
            <div className="p-6 sm:p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#a27b5b] to-[#b8966f] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>

              <h2 className="font-bebas-neue text-3xl sm:text-4xl text-[#2c3639] mb-4">
                Booking Confirmed!
              </h2>

              <p className="font-poppins text-[#3f4e4f] text-base sm:text-lg mb-6 max-w-md mx-auto leading-relaxed">
                Thank you for scheduling your consultation. We've sent a
                confirmation email with all the details and a calendar invite.
              </p>

              <div className="bg-[#dcd7c9]/30 rounded-2xl p-6 mb-6 max-w-md mx-auto border border-[#a27b5b]/20">
                <div className="text-left space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${selectedService.gradient} flex items-center justify-center`}
                    >
                      <selectedService.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-poppins text-[#3f4e4f] text-sm">
                        Service
                      </div>
                      <div className="font-poppins font-semibold text-[#2c3639]">
                        {selectedService.name}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-poppins text-[#3f4e4f] text-sm">
                        Duration
                      </div>
                      <div className="font-poppins font-semibold text-[#2c3639]">
                        {selectedDuration.label}
                      </div>
                    </div>
                    <div>
                      <div className="font-poppins text-[#3f4e4f] text-sm">
                        When
                      </div>
                      <div className="font-poppins font-semibold text-[#2c3639]">
                        {selectedDate && formatDate(selectedDate)}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#3f4e4f]/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-poppins text-[#3f4e4f]">
                        Total Amount
                      </span>
                      <span className="font-bebas-neue text-2xl text-[#a27b5b]">
                        {formatCurrency(selectedDuration.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={resetBooking}
                  className="bg-gradient-to-r from-[#2c3639] to-[#3f4e4f] text-white font-poppins font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex-1 sm:flex-none"
                >
                  Book Another Session
                </button>
                <button className="bg-white text-[#2c3639] border border-[#3f4e4f]/30 font-poppins font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex-1 sm:flex-none hover:border-[#a27b5b]">
                  Download Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#dcd7c9]/30 to-white py-4 sm:py-8 px-3 sm:px-6 lg:px-8 ${bebasNeue.variable} ${poppins.variable}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Logo Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-3xl px-6 sm:px-8 py-4 shadow-2xl border border-[#a27b5b]/30">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/logo.png"
                alt="EBCOM"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <div className="text-left">
              <h1 className="font-bebas-neue text-3xl sm:text-4xl text-[#2c3639] leading-none">
                EBCOM TECHNOLOGIES
              </h1>
              <p className="font-poppins text-[#3f4e4f] text-xs sm:text-sm mt-1">
                Schedule Consultation
              </p>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { number: "500+", label: "Projects Delivered", icon: Briefcase },
            { number: "7+", label: "Years Excellence", icon: Zap },
            { number: "98%", label: "Client Satisfaction", icon: Users },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="w-12 h-12 bg-[#a27b5b]/20 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-[#a27b5b] transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-[#a27b5b] group-hover:text-[#dcd7c9] transition-colors duration-300" />
              </div>
              <h3 className={`font-bebas-neue text-2xl text-[#2c3639]`}>
                {stat.number}
              </h3>
              <p className={`font-poppins text-[#3f4e4f] text-xs mt-1`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-[#a27b5b]/20 overflow-hidden">
          {/* Enhanced Progress Steps */}
          <div className="border-b border-[#dcd7c9] bg-white">
            <div className="flex justify-center p-4 sm:p-6">
              <div className="flex items-center space-x-4 sm:space-x-8">
                {[
                  { step: 1, label: "Service" },
                  { step: 2, label: "Time" },
                  { step: 3, label: "Details" },
                  { step: 4, label: "Confirm" },
                ].map(({ step, label }) => (
                  <div key={step} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => handleStepNavigation(step)}
                        disabled={step > bookingStep}
                        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-poppins font-semibold transition-all duration-300 ${
                          bookingStep >= step
                            ? "bg-gradient-to-r from-[#2c3639] to-[#3f4e4f] text-white shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer"
                            : "bg-[#dcd7c9] text-[#3f4e4f] cursor-not-allowed"
                        }`}
                      >
                        {bookingStep > step ? (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          step
                        )}
                      </button>
                      <span
                        className={`font-poppins text-xs mt-2 hidden sm:block ${
                          bookingStep >= step
                            ? "text-[#2c3639] font-medium cursor-pointer hover:text-[#a27b5b] transition-colors"
                            : "text-[#3f4e4f]/60 cursor-not-allowed"
                        }`}
                        onClick={() => handleStepNavigation(step)}
                      >
                        {label}
                      </span>
                    </div>
                    {step < 4 && (
                      <div
                        className={`w-8 sm:w-16 h-1 mx-2 sm:mx-4 transition-all duration-300 ${
                          bookingStep > step
                            ? "bg-gradient-to-r from-[#2c3639] to-[#3f4e4f]"
                            : "bg-[#dcd7c9]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">
            {/* Left Side - Service & Calendar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Enhanced Service Selection */}
              {bookingStep === 1 && (
                <div
                  className={`space-y-6 transition-all duration-300 ${
                    showServiceGrid
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute"
                  }`}
                >
                  <div className="text-center sm:text-left">
                    <h2 className="font-bebas-neue text-3xl sm:text-4xl text-[#2c3639] mb-2">
                      Choose Your Service
                    </h2>
                    <p className="font-poppins text-[#3f4e4f] text-base sm:text-lg">
                      Select the service you'd like to discuss with our experts
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleServiceSelect(service)}
                          className="group p-4 sm:p-6 rounded-2xl border-2 border-[#dcd7c9] hover:border-[#a27b5b] hover:shadow-xl transition-all duration-300 text-left bg-white hover:scale-105"
                        >
                          <div
                            className={`w-12 h-12 rounded-xl ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-bebas-neue text-xl sm:text-2xl text-[#2c3639] mb-2 leading-tight">
                            {service.name}
                          </h3>
                          <p className="font-poppins text-[#3f4e4f] text-xs sm:text-sm mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.durations.map((duration) => (
                              <span
                                key={duration.length}
                                className="px-2 sm:px-3 py-1 bg-[#dcd7c9] text-[#3f4e4f] rounded-full font-poppins text-xs font-medium"
                              >
                                {duration.label}:{" "}
                                {formatCurrency(duration.price)}
                              </span>
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Enhanced Calendar & Time Selection */}
              {(bookingStep === 2 || bookingStep === 3) && (
                <div
                  className={`space-y-6 transition-all duration-300 ${
                    !showServiceGrid
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-bebas-neue text-3xl sm:text-4xl text-[#2c3639]">
                        Select Date & Time
                      </h2>
                      <p className="font-poppins text-[#3f4e4f] text-sm mt-1">
                        {selectedService.name}
                      </p>
                    </div>
                    <button
                      onClick={handleBackToServices}
                      className="font-poppins text-[#a27b5b] hover:text-[#b8966f] font-medium text-sm bg-[#a27b5b]/10 hover:bg-[#a27b5b]/20 px-4 py-2 rounded-xl transition-all duration-300"
                    >
                      Change Service
                    </button>
                  </div>

                  {/* Enhanced Duration Selection */}
                  <div className="bg-[#dcd7c9]/30 rounded-2xl p-4 sm:p-6 border border-[#a27b5b]/20">
                    <h3 className="font-bebas-neue text-xl sm:text-2xl text-[#2c3639] mb-4">
                      Consultation Duration
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {selectedService.durations.map((duration) => (
                        <button
                          key={duration.length}
                          onClick={() => setSelectedDuration(duration)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            selectedDuration.length === duration.length
                              ? "border-[#a27b5b] bg-white shadow-lg scale-105"
                              : "border-[#dcd7c9] hover:border-[#a27b5b]/50 bg-white"
                          }`}
                        >
                          <div className="font-bebas-neue text-lg sm:text-xl text-[#2c3639]">
                            {duration.label}
                          </div>
                          <div className="font-poppins font-bold text-[#a27b5b] text-sm sm:text-base">
                            {formatCurrency(duration.price)}
                          </div>
                          <div className="font-poppins text-[#3f4e4f] text-xs mt-1">
                            In-depth consultation
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Calendar */}
                  <div className="bg-white rounded-2xl border border-[#dcd7c9] p-4 sm:p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <button
                        onClick={() => navigateMonth("prev")}
                        className="p-2 hover:bg-[#dcd7c9] rounded-xl transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#3f4e4f]" />
                      </button>

                      <h3 className="font-bebas-neue text-2xl sm:text-3xl text-[#2c3639]">
                        {currentMonth.toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </h3>

                      <button
                        onClick={() => navigateMonth("next")}
                        className="p-2 hover:bg-[#dcd7c9] rounded-xl transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-[#3f4e4f]" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-3">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day) => (
                          <div
                            key={day}
                            className="text-center font-poppins text-sm font-medium text-[#3f4e4f] py-2"
                          >
                            {day.substring(0, 1)}
                          </div>
                        ),
                      )}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {days.map(({ date, isCurrentMonth }, index) => {
                        const isToday =
                          date.toDateString() === today.toDateString();
                        const isSelected =
                          selectedDate &&
                          date.toDateString() === selectedDate.toDateString();
                        const isPast = date < today && !isToday;

                        return (
                          <button
                            key={index}
                            onClick={() =>
                              !isPast && isCurrentMonth && setSelectedDate(date)
                            }
                            disabled={isPast || !isCurrentMonth}
                            className={`h-10 sm:h-12 rounded-xl font-poppins font-medium transition-all duration-300 ${
                              isSelected
                                ? "bg-gradient-to-r from-[#2c3639] to-[#3f4e4f] text-white shadow-lg scale-105"
                                : isToday
                                  ? "bg-[#a27b5b]/20 text-[#a27b5b] border-2 border-[#a27b5b]/30"
                                  : isPast
                                    ? "text-[#dcd7c9] cursor-not-allowed"
                                    : !isCurrentMonth
                                      ? "text-[#dcd7c9] cursor-not-allowed"
                                      : "text-[#3f4e4f] hover:bg-[#dcd7c9] hover:scale-105"
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Enhanced Time Slots */}
                  {selectedDate && (
                    <div className="bg-white rounded-2xl border border-[#dcd7c9] p-4 sm:p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bebas-neue text-xl sm:text-2xl text-[#2c3639]">
                          Available Time Slots
                        </h3>
                        <div className="font-poppins text-[#3f4e4f] text-sm">
                          {selectedDate && formatDate(selectedDate)}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              setBookingStep(3);
                            }}
                            className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                              selectedTime === time
                                ? "border-[#a27b5b] bg-[#a27b5b]/10 shadow-md scale-105"
                                : "border-[#dcd7c9] hover:border-[#a27b5b] hover:scale-105 bg-white"
                            }`}
                          >
                            <div className="font-poppins font-semibold text-[#2c3639] text-sm sm:text-base">
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

            {/* Right Side - Enhanced Booking Summary & Form */}
            <div className="space-y-6 sm:space-y-8">
              {/* Enhanced Booking Summary */}
              <div className="bg-gradient-to-br from-[#2c3639] to-[#3f4e4f] rounded-2xl p-4 sm:p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <selectedService.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="font-bebas-neue text-2xl sm:text-3xl">
                    Booking Summary
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-poppins opacity-90">Service:</span>
                    <span className="font-poppins font-semibold text-right">
                      {selectedService.name}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-poppins opacity-90">Duration:</span>
                    <span className="font-poppins font-semibold">
                      {selectedDuration.label}
                    </span>
                  </div>

                  {selectedDate && (
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="font-poppins opacity-90">Date:</span>
                      <span className="font-poppins font-semibold text-right text-sm">
                        {formatDate(selectedDate)}
                      </span>
                    </div>
                  )}

                  {selectedTime && (
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="font-poppins opacity-90">Time:</span>
                      <span className="font-poppins font-semibold">
                        {selectedTime}
                      </span>
                    </div>
                  )}

                  <div className="pt-3 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-poppins opacity-90 text-lg">
                        Total Amount:
                      </span>
                      <span className="font-bebas-neue text-3xl text-[#a27b5b]">
                        {formatCurrency(selectedDuration.price)}
                      </span>
                    </div>
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <button
                    onClick={() => setBookingStep(4)}
                    className="w-full mt-6 bg-[#a27b5b] text-white font-poppins font-semibold py-3 sm:py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#b8966f]"
                  >
                    Continue to Details
                  </button>
                )}
              </div>

              {/* Enhanced Booking Form */}
              {bookingStep === 4 && (
                <div className="bg-white rounded-2xl border border-[#dcd7c9] p-4 sm:p-6 shadow-sm">
                  <h2 className="font-bebas-neue text-2xl sm:text-3xl text-[#2c3639] mb-6">
                    Your Information
                  </h2>

                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 font-poppins font-medium text-[#2c3639] mb-2">
                          <User className="w-4 h-4 text-[#a27b5b]" />
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
                          className="w-full p-3 border-2 border-[#dcd7c9] rounded-xl font-poppins focus:border-[#a27b5b] focus:ring-2 focus:ring-[#a27b5b]/20 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 font-poppins font-medium text-[#2c3639] mb-2">
                          <Mail className="w-4 h-4 text-[#a27b5b]" />
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
                          className="w-full p-3 border-2 border-[#dcd7c9] rounded-xl font-poppins focus:border-[#a27b5b] focus:ring-2 focus:ring-[#a27b5b]/20 transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 font-poppins font-medium text-[#2c3639] mb-2">
                          <Phone className="w-4 h-4 text-[#a27b5b]" />
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
                          className="w-full p-3 border-2 border-[#dcd7c9] rounded-xl font-poppins focus:border-[#a27b5b] focus:ring-2 focus:ring-[#a27b5b]/20 transition-all duration-300"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 font-poppins font-medium text-[#2c3639] mb-2">
                          <Building className="w-4 h-4 text-[#a27b5b]" />
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
                          className="w-full p-3 border-2 border-[#dcd7c9] rounded-xl font-poppins focus:border-[#a27b5b] focus:ring-2 focus:ring-[#a27b5b]/20 transition-all duration-300"
                          placeholder="Your business name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 font-poppins font-medium text-[#2c3639] mb-2">
                        <FileText className="w-4 h-4 text-[#a27b5b]" />
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
                        className="w-full p-3 border-2 border-[#dcd7c9] rounded-xl font-poppins focus:border-[#a27b5b] focus:ring-2 focus:ring-[#a27b5b]/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#2c3639] to-[#3f4e4f] text-white font-poppins font-semibold py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing Booking...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          Confirm Booking -{" "}
                          {formatCurrency(selectedDuration.price)}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
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
      `}</style>
    </div>
  );
}
