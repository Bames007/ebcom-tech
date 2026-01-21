"use client";

import {
  Phone,
  Mail,
  MapPin,
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
  Camera,
  Palette,
  Smartphone,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

// SVG Icons for Social Media
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

const YouTubeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
      clipRule="evenodd"
    />
  </svg>
);

interface FooterProps {
  scrollToSection: (section: string) => void;
}

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
    { name: "Mobile Applications", icon: Smartphone },
    { name: "Web Applications", icon: Globe },
    { name: "Security Systems", icon: Shield },
    { name: "CCTV Installation", icon: Camera },
    { name: "Network Solutions", icon: Zap },
    { name: "Branding & Design", icon: Palette },
    { name: "IT Consultation", icon: Users },
    { name: "Support & Maintenance", icon: Settings },
  ];

  const quickLinks = [
    { name: "Home", icon: Home, section: "home" },
    { name: "About Us", icon: User, section: "about" },
    { name: "Services", icon: Briefcase, section: "services" },
    { name: "Clients", icon: Users, section: "clients" },
    { name: "Our Process", icon: Settings, section: "serviceProcess" },
    { name: "Contact", icon: Contact2, section: "contact" },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: TwitterIcon, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: InstagramIcon, href: "#", label: "Instagram", color: "#E4405F" },
    { icon: LinkedInIcon, href: "#", label: "LinkedIn", color: "#0A66C2" },
    { icon: YouTubeIcon, href: "#", label: "YouTube", color: "#FF0000" },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      color: "#2c3639",
      icon: Users,
    },
    {
      number: "75+",
      label: "Happy Clients",
      color: "#a27b5b",
      icon: CheckCircle,
    },
    {
      number: "24/7",
      label: "Support",
      color: "#3f4e4f",
      icon: Shield,
    },
    {
      number: "98%",
      label: "Satisfaction",
      color: "#2c3639",
      icon: Handshake,
    },
  ];

  return (
    <footer className="relative bg-white overflow-hidden border-t border-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a27b5b]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3f4e4f]/20 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Trust Banner */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a27b5b]/10 border border-[#a27b5b]/20">
              <Handshake className="w-4 h-4 text-[#a27b5b]" />
              <span className="text-sm font-medium text-[#a27b5b] tracking-wider uppercase">
                Your Complete Technology Partner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#2c3639] flex items-center justify-center">
                  <div className="text-white font-bold text-xl">E</div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#2c3639] leading-none">
                    EBCOM
                  </h3>
                  <p className="text-[#3f4e4f] text-lg -mt-1">TECHNOLOGIES</p>
                </div>
              </div>

              <p className="text-[#3f4e4f] mb-8 leading-relaxed">
                Your complete technology partner for innovative digital
                solutions, advanced security systems, and comprehensive IT
                services.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#2c3639]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#2c3639]" />
                  </div>
                  <div>
                    <p className="text-[#3f4e4f] text-sm">Call Us</p>
                    <p className="font-semibold text-[#2c3639]">08127728084</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#3f4e4f]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#3f4e4f]" />
                  </div>
                  <div>
                    <p className="text-[#3f4e4f] text-sm">Email Us</p>
                    <p className="font-semibold text-[#2c3639] break-words">
                      ebcomtechnologies@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#a27b5b]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#a27b5b]" />
                  </div>
                  <div>
                    <p className="text-[#3f4e4f] text-sm">Location</p>
                    <p className="font-semibold text-[#2c3639]">
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-2xl font-bold text-[#2c3639] mb-8">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.section)}
                        className="text-[#3f4e4f] hover:text-[#a27b5b] transition-colors flex items-center gap-4 group w-full text-left"
                      >
                        <div className="w-8 h-8 bg-[#2c3639] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-semibold">{link.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-2xl font-bold text-[#2c3639] mb-8">
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.name}
                      onClick={() => scrollToSection("services")}
                      className="text-[#3f4e4f] hover:text-[#2c3639] transition-colors flex items-center gap-3 group text-left"
                    >
                      <Icon className="w-4 h-4 text-[#a27b5b]" />
                      <span className="text-sm font-medium">
                        {service.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="text-2xl font-bold text-[#2c3639] mb-8">
                Stay Connected
              </h4>

              {/* Newsletter */}
              <div className="mb-8">
                <p className="text-[#3f4e4f] mb-4 leading-relaxed">
                  Get the latest tech insights and project updates delivered to
                  your inbox.
                </p>
                {isSubscribed ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <p className="font-semibold text-green-700">
                      Welcome to EBCOM!
                    </p>
                    <p className="text-green-600 text-sm mt-1">
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
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a27b5b] focus:border-transparent text-[#2c3639] placeholder-[#3f4e4f] text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#2c3639] text-white font-semibold py-3 rounded-lg hover:bg-[#1e2729] transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Subscribe to Newsletter
                    </button>
                  </form>
                )}
              </div>

              {/* Social Links */}
              <div>
                <p className="font-semibold text-[#2c3639] mb-4">
                  Follow Our Journey
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors hover:opacity-90"
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
          </div>

          {/* Trust Stats */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                      style={{ backgroundColor: stat.color + "10" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                    <div className="text-3xl font-bold text-[#2c3639] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#3f4e4f] text-sm font-medium">
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
      <div className="border-t border-gray-100 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="text-[#3f4e4f] text-sm">
              © 2024 EBCOM Technologies. All rights reserved. | Building the
              Future, Today.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[#3f4e4f] hover:text-[#a27b5b] text-sm transition-colors font-medium"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
