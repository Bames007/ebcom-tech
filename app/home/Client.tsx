"use client";

import { useState, useEffect } from "react";
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
  Users,
  Clock,
  Award,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

interface Client {
  name: string;
  project: string;
  duration: string;
  services: string[];
  logo: string;
  location: string;
  status: "Active" | "Completed" | "Ongoing";
}

interface Category {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  clients: Client[];
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  project: string;
}

export default function Clients() {
  const [mounted, setMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "300+", label: "Projects Completed", icon: CheckCircle },
    { number: "75+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "98%", label: "Client Satisfaction", icon: Award },
  ];

  const categories: Category[] = [
    {
      title: "Hospitality & Restaurants",
      icon: Utensils,
      description: "Technology solutions for food and hospitality businesses",
      color: "#a27b5b",
      clients: [
        {
          name: "Five Star Restaurant",
          project: "POS & Inventory Management System",
          duration: "2023 - Present",
          services: ["POS System", "Inventory Management", "Order Processing"],
          logo: "5S",
          location: "Lagos, Nigeria",
          status: "Active",
        },
        {
          name: "Cafe Royale",
          project: "Digital Menu & Ordering System",
          duration: "2023",
          services: ["Digital Menu", "Online Ordering", "Payment Integration"],
          logo: "CR",
          location: "Abuja, Nigeria",
          status: "Completed",
        },
      ],
    },
    {
      title: "Government & Public Sector",
      icon: Building2,
      description: "Digital solutions for public institutions and services",
      color: "#2c3639",
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
          logo: "AK",
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
          logo: "FT",
          location: "Abuja, Nigeria",
          status: "Completed",
        },
      ],
    },
    {
      title: "E-commerce & Retail",
      icon: ShoppingCart,
      description: "Online retail and shopping center solutions",
      color: "#3f4e4f",
      clients: [
        {
          name: "Linda Turner Center",
          project: "E-commerce Platform & Inventory System",
          duration: "2023 - Present",
          services: [
            "E-commerce Website",
            "Inventory Management",
            "Payment Gateway",
          ],
          logo: "LT",
          location: "Lagos, Nigeria",
          status: "Active",
        },
        {
          name: "Okemena Stores",
          project: "Retail Inventory & POS System",
          duration: "2023 - Present",
          services: ["Inventory Management", "POS System", "Sales Analytics"],
          logo: "OS",
          location: "Lagos, Nigeria",
          status: "Active",
        },
      ],
    },
    {
      title: "Healthcare & Medical",
      icon: Stethoscope,
      description: "Medical technology and healthcare solutions",
      color: "#a27b5b",
      clients: [
        {
          name: "Doza Hospital Network",
          project: "Hospital Management System",
          duration: "2023 - Present",
          services: [
            "Patient Records",
            "Appointment Scheduling",
            "Medical Billing",
          ],
          logo: "DH",
          location: "Nigeria",
          status: "Active",
        },
      ],
    },
    {
      title: "International Corporations",
      icon: Crown,
      description: "Global technology solutions across industries",
      color: "#2c3639",
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
          logo: "AC",
          location: "Dubai, UAE",
          status: "Active",
        },
      ],
    },
    {
      title: "Education & Institutions",
      icon: School,
      description: "Technology solutions for educational institutions",
      color: "#3f4e4f",
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
          logo: "SA",
          location: "Lagos, Nigeria",
          status: "Completed",
        },
      ],
    },
    {
      title: "Logistics & Transportation",
      icon: Truck,
      description: "Technology solutions for transport and delivery services",
      color: "#a27b5b",
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
          logo: "BB",
          location: "Lagos, Nigeria",
          status: "Active",
        },
      ],
    },
    {
      title: "Technology & IT Companies",
      icon: Laptop,
      description: "Solutions for tech companies and startups",
      color: "#2c3639",
      clients: [
        {
          name: "Innovention Technologies",
          project: "Custom Software Development",
          duration: "2023",
          services: ["Web Applications", "API Integration", "Cloud Solutions"],
          logo: "IT",
          location: "Nigeria",
          status: "Completed",
        },
      ],
    },
  ];

  const testimonials: Testimonial[] = [
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

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a27b5b]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3f4e4f]/20 to-transparent" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,54,57,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(44,54,57,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Accent dots */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#a27b5b]/30 rounded-full" />
        <div className="absolute bottom-40 left-10 w-3 h-3 bg-[#3f4e4f]/20 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a27b5b]/10 border border-[#a27b5b]/20 mb-6">
            <Crown className="w-4 h-4 text-[#a27b5b]" />
            <span className="text-sm font-medium text-[#a27b5b] tracking-wider uppercase">
              Trusted by Businesses Worldwide
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2c3639] mb-6">
            Our Valued <span className="text-[#a27b5b]">Clients</span>
          </h2>

          <p className="text-lg lg:text-xl text-[#3f4e4f] max-w-3xl mx-auto leading-relaxed">
            We partner with businesses across industries, delivering tailored
            solutions that drive success and innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a27b5b]/30 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#a27b5b]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#a27b5b]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2c3639]">
                    {stat.number}
                  </div>
                </div>
                <div className="text-sm font-medium text-[#3f4e4f]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Categories */}
        <div className="space-y-8 mb-20">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.title;

            return (
              <div
                key={category.title}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: category.color + "10" }}
                    >
                      <Icon
                        className="w-6 h-6"
                        // style={{ color: category.color }}
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl lg:text-2xl font-bold text-[#2c3639]">
                        {category.title}
                      </h3>
                      <p className="text-[#3f4e4f] text-sm lg:text-base">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-[#a27b5b] transition-transform duration-300 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-gray-100 p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.clients.map((client, clientIndex) => (
                        <div
                          key={client.name}
                          className="group bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:bg-white hover:shadow-md"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                                style={{ backgroundColor: category.color }}
                              >
                                {client.logo}
                              </div>
                              <div>
                                <h4 className="font-bold text-[#2c3639]">
                                  {client.name}
                                </h4>
                                <div className="flex items-center gap-1 text-[#3f4e4f] text-sm">
                                  <MapPin className="w-3 h-3" />
                                  <span>{client.location}</span>
                                </div>
                              </div>
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                client.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : client.status === "Completed"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {client.status}
                            </span>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-[#3f4e4f] text-sm mb-1">
                                Project
                              </h5>
                              <p className="text-[#2c3639]">{client.project}</p>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-1 text-[#3f4e4f]">
                                <Calendar className="w-3 h-3" />
                                <span>{client.duration}</span>
                              </div>
                            </div>

                            <div>
                              <h5 className="font-semibold text-[#3f4e4f] text-sm mb-2">
                                Services
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {client.services.map((service) => (
                                  <span
                                    key={service}
                                    className="px-3 py-1 bg-white border border-gray-200 text-[#3f4e4f] rounded-full text-xs"
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
                )}
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2c3639] text-center mb-12">
            Client <span className="text-[#a27b5b]">Testimonials</span>
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
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
                  <Quote className="w-12 h-12 text-[#a27b5b]/20 mb-6" />

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#a27b5b] text-[#a27b5b]"
                      />
                    ))}
                  </div>

                  <blockquote className="text-[#3f4e4f] text-lg leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div>
                    <div className="font-bold text-[#2c3639] text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-[#3f4e4f] text-sm mb-1">
                      {testimonial.role}
                    </div>
                    <div className="text-[#a27b5b] text-sm font-medium">
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
                      ? "bg-[#a27b5b] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2c3639] rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#a27b5b]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#3f4e4f]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-[#dcd7c9] mb-8 max-w-2xl mx-auto">
              Let us help you achieve your technology goals with our proven
              solutions and expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="px-8 py-3 bg-white text-[#2c3639] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/60 transition-colors">
                View Case Studies
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-[#dcd7c9]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#a27b5b] rounded-full"></div>
                <span>No hidden fees</span>
              </div>
              <div className="w-1 h-1 bg-[#dcd7c9]/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#a27b5b] rounded-full"></div>
                <span>Free initial consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
