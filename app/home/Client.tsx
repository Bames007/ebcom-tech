// components/Clients.tsx
"use client";

import { useState, useEffect } from "react";
import { Bebas_Neue, Poppins, Gantari } from "next/font/google";
import {
  Building2,
  Crown,
  Utensils,
  School,
  Factory,
  Heart,
  Briefcase,
  Truck,
  Star,
  Quote,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Laptop,
  ShoppingCart,
  Stethoscope,
  Shield,
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

export default function Clients() {
  const [mounted, setMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const clientCategories = [
    {
      title: "Hospitality & Restaurants",
      icon: Utensils,
      description: "Technology solutions for food and hospitality businesses",
      gradient: "from-amber-600 to-orange-500",
      clients: [
        {
          name: "Five Star Restaurant",
          project: "POS & Inventory Management System",
          duration: "2023 - Present",
          services: ["POS System", "Inventory Management", "Order Processing"],
          logo: "5Star",
          location: "Lagos, Nigeria",
          status: "Active",
        },
        {
          name: "Cafe Royale",
          project: "Digital Menu & Ordering System",
          duration: "2023",
          services: ["Digital Menu", "Online Ordering", "Payment Integration"],
          logo: "CafeR",
          location: "Abuja, Nigeria",
          status: "Completed",
        },
      ],
    },
    {
      title: "Government & Public Sector",
      icon: Building2,
      description: "Digital solutions for public institutions and services",
      gradient: "from-blue-600 to-cyan-500",
      clients: [
        {
          name: "AKSG Digital Initiative",
          project: "State-wide Digital Infrastructure",
          duration: "2023 - Present",
          services: [
            "Software Development",
            "Network Infrastructure",
            "Security Systems",
          ],
          logo: "AKSG",
          location: "Akwa Ibom, Nigeria",
          status: "Active",
        },
        {
          name: "Federal Tax Authority",
          project: "Tax Collection System",
          duration: "2023",
          services: [
            "Payment Platform",
            "Database Management",
            "Security Systems",
          ],
          logo: "FTA",
          location: "Abuja, Nigeria",
          status: "Completed",
        },
      ],
    },
    {
      title: "E-commerce & Retail Centers",
      icon: ShoppingCart,
      description: "Online retail and shopping center solutions",
      gradient: "from-purple-600 to-indigo-500",
      clients: [
        {
          name: "Linda Turner Center",
          project: "E-commerce Platform & Inventory System",
          duration: "2023 - Present",
          services: [
            "E-commerce Website",
            "Inventory Management",
            "Payment Gateway",
            "Order Tracking",
          ],
          logo: "LTC",
          location: "Lagos, Nigeria",
          status: "Active",
        },
        {
          name: "Okemena Stores",
          project: "Retail Inventory & POS System",
          duration: "2023 - Present",
          services: [
            "Inventory Management",
            "POS System",
            "Sales Analytics",
            "Book Keeping Integration",
          ],
          logo: "Okemena",
          location: "Lagos, Nigeria",
          status: "Active",
        },
        {
          name: "SpookyShopHQ",
          project: "E-commerce Platform Development",
          duration: "2023",
          services: [
            "E-commerce Website",
            "Payment Gateway",
            "Inventory Management",
            "Order Tracking",
          ],
          logo: "Spooky",
          location: "Remote",
          status: "Active",
        },
        {
          name: "UrbanMart",
          project: "Supermarket Management System",
          duration: "2023",
          services: [
            "Inventory System",
            "POS Integration",
            "Supplier Management",
          ],
          logo: "UrbanM",
          location: "Port Harcourt, Nigeria",
          status: "Active",
        },
      ],
    },
    {
      title: "Healthcare & Medical",
      icon: Stethoscope,
      description: "Medical technology and healthcare solutions",
      gradient: "from-red-600 to-pink-500",
      clients: [
        {
          name: "Doza Hospital Network",
          project: "Hospital Management System",
          duration: "2023 - Present",
          services: [
            "Patient Records",
            "Appointment Scheduling",
            "Medical Billing",
            "Pharmacy Management",
          ],
          logo: "Doza",
          location: "Nigeria",
          status: "Active",
        },
        {
          name: "MediCare Centers",
          project: "Clinic Management Software",
          duration: "2023",
          services: [
            "Electronic Health Records",
            "Lab Integration",
            "Telemedicine Platform",
          ],
          logo: "MediCare",
          location: "Lagos, Abuja",
          status: "Completed",
        },
      ],
    },
    {
      title: "International Corporations",
      icon: Crown,
      description: "Global technology solutions across industries",
      gradient: "from-emerald-600 to-green-500",
      clients: [
        {
          name: "Artic Cooling",
          project: "Enterprise Resource Planning System",
          duration: "2023 - Present",
          services: [
            "ERP Implementation",
            "Inventory Tracking",
            "Supply Chain Management",
          ],
          logo: "Arctic",
          location: "Dubai, UAE",
          status: "Active",
        },
        {
          name: "Imi Servico",
          project: "Property Management Platform",
          duration: "2023",
          services: [
            "Property Management Software",
            "Booking System",
            "Payment Integration",
          ],
          logo: "Imi",
          location: "Portugal",
          status: "Completed",
        },
        {
          name: "GlobalTech Solutions",
          project: "Multi-national IT Infrastructure",
          duration: "2023",
          services: ["Network Setup", "Cloud Migration", "Security Systems"],
          logo: "GTS",
          location: "UK, USA, Nigeria",
          status: "Active",
        },
      ],
    },
    {
      title: "Education & Institutions",
      icon: School,
      description: "Technology solutions for educational institutions",
      gradient: "from-violet-600 to-purple-500",
      clients: [
        {
          name: "Southern Atlantic University",
          project: "Campus Management System",
          duration: "2022 - 2023",
          services: [
            "Student Portal",
            "Learning Management",
            "Administrative Software",
          ],
          logo: "SAU",
          location: "Lagos, Nigeria",
          status: "Completed",
        },
        {
          name: "TrustChoice Secondary School",
          project: "School Management Platform",
          duration: "2023",
          services: ["Student Records", "Grade Management", "Parent Portal"],
          logo: "TCS",
          location: "Abuja, Nigeria",
          status: "Active",
        },
        {
          name: "EduTech Academy",
          project: "Online Learning Platform",
          duration: "2023",
          services: ["LMS Development", "Video Streaming", "Assessment Tools"],
          logo: "ETA",
          location: "Remote",
          status: "Active",
        },
      ],
    },
    {
      title: "Logistics & Transportation",
      icon: Truck,
      description: "Technology solutions for transport and delivery services",
      gradient: "from-orange-600 to-red-500",
      clients: [
        {
          name: "BumbleBee Cars",
          project: "Ride-hailing Mobile Application",
          duration: "2023 - Present",
          services: [
            "Mobile App Development",
            "Driver Management",
            "Payment System",
          ],
          logo: "Bumble",
          location: "Lagos, Nigeria",
          status: "Active",
        },
        {
          name: "iDelivery",
          project: "Logistics Management Platform",
          duration: "2023",
          services: [
            "Delivery Tracking",
            "Fleet Management",
            "Real-time Updates",
          ],
          logo: "iDeliver",
          location: "Nigeria",
          status: "Active",
        },
        {
          name: "BusStop",
          project: "Taxi Booking Application",
          duration: "2023",
          services: ["Mobile App", "Booking System", "Route Optimization"],
          logo: "BusStop",
          location: "Nigeria",
          status: "Active",
        },
        {
          name: "TicketR",
          project: "Digital Ticketing Platform",
          duration: "2023",
          services: ["Ticketing System", "Mobile App", "Payment Processing"],
          logo: "TicketR",
          location: "Nigeria",
          status: "Active",
        },
        {
          name: "SwiftLogistics",
          project: "Supply Chain Management",
          duration: "2023",
          services: [
            "Inventory Tracking",
            "Route Planning",
            "Delivery Analytics",
          ],
          logo: "SwiftL",
          location: "Lagos, Nigeria",
          status: "Active",
        },
      ],
    },
    {
      title: "Technology & IT Companies",
      icon: Laptop,
      description: "Solutions for tech companies and startups",
      gradient: "from-cyan-600 to-blue-500",
      clients: [
        {
          name: "Innovention Technologies",
          project: "Custom Software Development",
          duration: "2023",
          services: ["Web Applications", "API Integration", "Cloud Solutions"],
          logo: "InnoTech",
          location: "Nigeria",
          status: "Completed",
        },
        {
          name: "CodeCraft Studios",
          project: "Development Infrastructure",
          duration: "2023",
          services: ["CI/CD Pipeline", "Cloud Deployment", "Security Setup"],
          logo: "CodeC",
          location: "Remote",
          status: "Active",
        },
      ],
    },
    {
      title: "HR & Recruitment",
      icon: Briefcase,
      description: "Staffing and recruitment technology solutions",
      gradient: "from-pink-600 to-rose-500",
      clients: [
        {
          name: "Staff Spark",
          project: "Recruitment Management System",
          duration: "2023 - Present",
          services: [
            "Candidate Tracking",
            "Interview Scheduling",
            "HR Analytics",
          ],
          logo: "StaffS",
          location: "Remote",
          status: "Active",
        },
        {
          name: "TalentFinders NG",
          project: "Job Portal Development",
          duration: "2023",
          services: [
            "Job Board Platform",
            "Candidate Matching",
            "Employer Dashboard",
          ],
          logo: "TFNG",
          location: "Nigeria",
          status: "Completed",
        },
      ],
    },
    {
      title: "Social & Dating Platforms",
      icon: Heart,
      description: "Social networking and relationship platforms",
      gradient: "from-rose-600 to-pink-500",
      clients: [
        {
          name: "WhereWeAllMeet",
          project: "Dating Application Development",
          duration: "2023",
          services: [
            "Mobile App Development",
            "Matching Algorithm",
            "Chat System",
          ],
          logo: "WWAM",
          location: "Global",
          status: "Active",
        },
      ],
    },
    {
      title: "Manufacturing & Industry",
      icon: Factory,
      description: "Industrial and manufacturing solutions",
      gradient: "from-slate-600 to-gray-500",
      clients: [
        {
          name: "Bascon Nigeria LTD",
          project: "Inventory & Supply Chain Management",
          duration: "2023",
          services: [
            "Inventory System",
            "Supply Chain Tracking",
            "Order Management",
          ],
          logo: "Bascon",
          location: "Nigeria",
          status: "Active",
        },
        {
          name: "Prime Manufacturing",
          project: "Production Line Management",
          duration: "2023",
          services: [
            "Production Tracking",
            "Quality Control",
            "Equipment Monitoring",
          ],
          logo: "PrimeM",
          location: "Lagos, Nigeria",
          status: "Active",
        },
      ],
    },
    {
      title: "Security & Protection",
      icon: Shield,
      description: "Security systems and protection services",
      gradient: "from-amber-600 to-yellow-500",
      clients: [
        {
          name: "SecureNation Ltd",
          project: "Security Management Platform",
          duration: "2023",
          services: [
            "Surveillance Systems",
            "Access Control",
            "Monitoring Software",
          ],
          logo: "SecureN",
          location: "Nigeria",
          status: "Active",
        },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Five Star Restaurant",
      role: "POS & Inventory System",
      content:
        "EBCOM's inventory and POS system revolutionized our operations. Book keeping is now automated and we have real-time visibility into our stock levels and sales performance.",
      rating: 5,
      project: "Restaurant Management Solution",
    },
    {
      name: "Artic Cooling Dubai",
      role: "Enterprise Resource Planning",
      content:
        "The ERP system provided by EBCOM streamlined our entire operation. From inventory management to supply chain tracking, everything is now integrated and efficient.",
      rating: 5,
      project: "ERP Implementation",
    },
    {
      name: "Linda Turner Center",
      role: "E-commerce Platform",
      content:
        "Our online sales have increased by 150% since implementing EBCOM's e-commerce solution. The inventory management system keeps everything perfectly synchronized.",
      rating: 5,
      project: "E-commerce Development",
    },
    {
      name: "Doza Hospital Network",
      role: "Healthcare Management System",
      content:
        "The hospital management system has transformed our patient care and administrative efficiency. Everything from appointments to medical records is now seamless.",
      rating: 5,
      project: "Healthcare Software",
    },
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section
      className={`relative py-20 overflow-hidden px-4 sm:px-6 lg:px-8 ${bebasNeue.variable} ${poppins.variable} ${gantari.variable}`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-emerald-600/20 rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div
          className="absolute -bottom-40 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-cyan-600/20 rounded-full blur-3xl opacity-10 animate-pulse-slow"
          style={{ animationDelay: "3s" }}
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
            <Crown className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-poppins font-semibold tracking-wider uppercase">
              Trusted by Businesses Worldwide
            </span>
          </div>

          <h2
            className={`font-bebas-neue text-4xl sm:text-5xl lg:text-6xl text-slate-800 mb-6 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-slate-500 font-gantari font-light max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We partner with businesses across industries, from restaurants and
            retail to technology and transportation, delivering tailored
            solutions that drive success.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{
                transitionDelay: `${600 + index * 100}ms`,
              }}
            >
              <div className="font-bebas-neue text-3xl sm:text-4xl text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="font-poppins text-slate-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Categories */}
        <div className="space-y-12 mb-20">
          {clientCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`transition-all duration-1000 delay-${
                  700 + categoryIndex * 100
                } ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bebas-neue text-3xl sm:text-4xl text-slate-800">
                      {category.title}
                    </h3>
                    <p className="font-gantari text-slate-600 text-lg">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.clients.map((client, clientIndex) => (
                    <div
                      key={client.name}
                      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                      style={{
                        transitionDelay: `${
                          800 + categoryIndex * 100 + clientIndex * 50
                        }ms`,
                      }}
                    >
                      {/* Client Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center font-bebas-neue text-white text-lg`}
                            >
                              {client.logo}
                            </div>
                            <div>
                              <h4 className="font-poppins font-semibold text-slate-800 text-lg">
                                {client.name}
                              </h4>
                              <div className="flex items-center gap-2 text-slate-500 text-sm">
                                <MapPin className="w-3 h-3" />
                                <span>{client.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-poppins font-medium ${
                            client.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : client.status === "Ongoing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {client.status}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-poppins font-semibold text-slate-700 text-sm mb-1">
                            Project
                          </h5>
                          <p className="font-gantari text-slate-600 text-sm">
                            {client.project}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-slate-500">
                            <Calendar className="w-3 h-3" />
                            <span>{client.duration}</span>
                          </div>
                        </div>

                        {/* Services */}
                        <div>
                          <h5 className="font-poppins font-semibold text-slate-700 text-sm mb-2">
                            Services Provided
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {client.services.map((service, serviceIndex) => (
                              <span
                                key={service}
                                className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-poppins"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h3
            className={`font-bebas-neue text-3xl sm:text-4xl text-slate-800 text-center mb-12 transition-all duration-1000 delay-1200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Client{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out ${
                  activeTestimonial === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 absolute translate-y-8 pointer-events-none"
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-xl">
                  <Quote className="w-12 h-12 text-blue-500/20 mb-6" />

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <blockquote className="font-gantari text-slate-600 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>

                  <div>
                    <div className="font-poppins font-semibold text-slate-800 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="font-poppins text-slate-500 text-sm mb-1">
                      {testimonial.role}
                    </div>
                    <div className="font-poppins text-blue-600 text-sm font-medium">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? "bg-blue-500 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white transition-all duration-1000 delay-1400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="font-bebas-neue text-3xl sm:text-4xl mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="font-gantari text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you achieve your technology goals with our proven
            solutions and expertise in inventory management, book keeping, and
            custom software development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-white text-blue-600 font-poppins font-semibold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button className="group bg-transparent border-2 border-white text-white font-poppins font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-3">
              View Case Studies
              <CheckCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
