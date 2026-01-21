"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Zap,
  Navigation,
  Building2,
  Globe,
  Shield,
} from "lucide-react";

// SVG Icons for Social Media
const TwitterIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.51 8.796v1.697a3.738 3.738 0 013.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 01-.988 1.483 1.595 1.595 0 01-1.743-.348A1.607 1.607 0 015.6 4.5a1.601 1.601 0 011.6 1.606z"
      clipRule="evenodd"
    />
    <path d="M7.2 8.809H4V19.5h3.2V8.809z" />
  </svg>
);

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
      color: "#a27b5b",
      href: "tel:+2348127728084",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your project details",
      details: "ebcomtechnologies@gmail.com",
      action: "Send Email",
      color: "#3f4e4f",
      href: "mailto:ebcomtechnologies@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat for instant support",
      details: "08127728084",
      action: "Start Chat",
      color: "#2c3639",
      href: "https://wa.me/2348127728084",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Meet our team in person",
      details: "Abuja, Nigeria",
      action: "Get Directions",
      color: "#a27b5b",
      href: "https://maps.google.com/?q=Abuja+Nigeria",
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

  const socialLinks = [
    { icon: FacebookIcon, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: TwitterIcon, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: InstagramIcon, href: "#", label: "Instagram", color: "#E4405F" },
    { icon: LinkedInIcon, href: "#", label: "LinkedIn", color: "#0A66C2" },
  ];

  return (
    <section
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a27b5b]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3f4e4f]/20 to-transparent" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,54,57,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(44,54,57,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a27b5b]/10 border border-[#a27b5b]/20 mb-6">
            <MessageCircle className="w-4 h-4 text-[#a27b5b]" />
            <span className="text-sm font-medium text-[#a27b5b] tracking-wider uppercase">
              Let's Build Something Amazing
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2c3639] mb-6">
            Start Your <span className="text-[#a27b5b]">Project</span>
          </h2>

          <p className="text-lg lg:text-xl text-[#3f4e4f] max-w-3xl mx-auto leading-relaxed">
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
                const Icon = method.icon;
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
                    className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#a27b5b]/30"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: method.color + "10" }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: method.color }}
                      />
                    </div>
                    <h3 className="font-bold text-[#2c3639] text-lg mb-2">
                      {method.title}
                    </h3>
                    <p className="text-[#3f4e4f] text-sm mb-3">
                      {method.description}
                    </p>
                    <div className="font-semibold text-[#2c3639] mb-4">
                      {method.details}
                    </div>
                    <div className="w-full bg-gray-50 text-[#3f4e4f] font-semibold text-sm py-3 rounded-lg group-hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                      {method.action}
                      <Zap className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Business Hours & Info */}
            <div className="bg-[#2c3639] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Emergency Support</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">
                  24/7 Emergency Support Available
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-bold text-[#2c3639] text-lg mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      style={{ backgroundColor: social.color }}
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-[#a27b5b] mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-[#2c3639] mb-4">
                  Message Sent!
                </h3>
                <p className="text-[#3f4e4f] mb-6">
                  Thank you for your inquiry! Our team will contact you within 2
                  hours to discuss your project.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#a27b5b] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#8b6b4b] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-[#2c3639] mb-2">
                  Project Inquiry
                </h3>
                <p className="text-[#3f4e4f] mb-8">
                  Fill out the form below and we'll get back to you ASAP
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-[#2c3639] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a27b5b] focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#2c3639] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a27b5b] focus:border-transparent transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#2c3639] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a27b5b] focus:border-transparent transition-all duration-300"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-[#2c3639] mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a27b5b] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-[#2c3639] mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a27b5b] focus:border-transparent transition-all duration-300"
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

                  <div>
                    <label className="block font-semibold text-[#2c3639] mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a27b5b] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2c3639] text-white font-semibold text-lg py-4 rounded-lg hover:bg-[#1e2729] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[#3f4e4f] text-sm">
                    We'll get back to you within 2 hours during business hours
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#a27b5b] rounded-xl flex items-center justify-center">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#2c3639]">Find Us</h3>
              <p className="text-[#3f4e4f]">
                Visit our office in Abuja, Nigeria
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-50 relative">
            {/* Interactive Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#a27b5b] mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-[#2c3639] mb-2">
                  Abuja, Nigeria
                </h4>
                <p className="text-[#3f4e4f] mb-4">Our headquarters</p>
                <a
                  href="https://maps.google.com/?q=Abuja+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#a27b5b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#8b6b4b] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
