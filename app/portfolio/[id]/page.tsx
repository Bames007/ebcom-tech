// /app/portfolio/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Palette,
  Layers,
  Package,
  Users,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { portfolioProjects, Project } from "../portfolio";
import { bebasNeue, poppins } from "@/app/util/constants";

const defaultProject: Project = {
  id: "",
  name: "Project Not Found",
  category: "",
  tagline: "",
  description: "",
  fullDescription: "",
  services: [],
  year: "",
  client: "",
  location: "",
  colors: {
    primary: "#2c3639",
    secondary: "#a27b5b",
    accent: "#3f4e4f",
    background: "#f5f3ef",
  },
  logo: "",
  mockups: [],
  deliverables: [],
  testimonials: [],
};

export default function ProjectDetailPage() {
  const params = useParams();
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsLoading(true);

    setTimeout(() => {
      const foundProject = portfolioProjects.find((p) => p.id === params?.id);
      setProject(foundProject || defaultProject);
      setIsLoading(false);
    }, 300);
  }, [params?.id]);

  const nextImage = () => {
    if (project?.mockups?.length) {
      setCurrentImageIndex((prev) => (prev + 1) % project.mockups.length);
    }
  };

  const prevImage = () => {
    if (project?.mockups?.length) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.mockups.length) % project.mockups.length,
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#a27b5b]" />
          <h2 className={`${bebasNeue.className} text-2xl text-[#2c3639]`}>
            Loading Project...
          </h2>
        </div>
      </div>
    );
  }

  if (!project || project.id === "") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className={`${bebasNeue.className} text-3xl text-[#2c3639] mb-4`}>
            Project Not Found
          </h2>
          <Link
            href="/"
            className={`${poppins.className} text-[#a27b5b] hover:text-[#2c3639] transition-colors duration-300 flex items-center gap-2 justify-center`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const currentProjectIndex = portfolioProjects.findIndex(
    (p) => p.id === project.id,
  );
  const nextProject =
    portfolioProjects[(currentProjectIndex + 1) % portfolioProjects.length];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#3f4e4f]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              style={{ color: project.colors.primary }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className={`${poppins.className} font-medium`}>
                Back to Portfolio
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <span className={`${poppins.className} text-sm text-[#3f4e4f]`}>
                Project {currentProjectIndex + 1} of {portfolioProjects.length}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-12 relative min-h-[80vh] flex items-center">
        {/* Background with first mockup image */}
        {project.mockups[0] && (
          <div className="absolute inset-0">
            <Image
              src={project.mockups[0]}
              alt={`${project.name} hero background`}
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
            {/* Color overlay for better text contrast */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: `${project.colors.primary}CC`,
                backgroundBlendMode: "multiply",
              }}
            />
          </div>
        )}

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Circular Logo - Updated */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                  {/* Outer Glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-60"
                    style={{ backgroundColor: project.colors.secondary }}
                  />

                  {/* Logo Container - Perfect Circle that fills container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/30 shadow-2xl">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                        priority
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: project.colors.primary }}
                      >
                        <h2
                          className={`${bebasNeue.className} text-6xl text-white`}
                        >
                          {project.name}
                        </h2>
                      </div>
                    )}
                  </div>

                  {/* Inner Shadow for depth */}
                  <div className="absolute inset-0 rounded-full shadow-inner border-2 border-white/10" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <span
                  className={`${poppins.className} text-sm font-semibold text-white`}
                >
                  {project.category}
                </span>
              </div>

              <h1
                className={`${bebasNeue.className} text-5xl sm:text-7xl mb-4 text-white drop-shadow-lg`}
              >
                {project.name}
              </h1>

              <p
                className={`${poppins.className} text-2xl text-white/90 max-w-3xl mx-auto mb-8`}
              >
                {project.tagline}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className={`${poppins.className} text-white`}>
                    {project.year}
                  </span>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className={`${poppins.className} text-white`}>
                    {project.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Users className="w-5 h-5 text-white" />
                  <span className={`${poppins.className} text-white`}>
                    {project.client}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Project Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Mockup Gallery - Portrait Layout */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2
                  className={`${bebasNeue.className} text-3xl text-[#2c3639]`}
                >
                  Project Gallery
                </h2>
                <span className={`${poppins.className} text-sm text-[#3f4e4f]`}>
                  {currentImageIndex + 1} / {project.mockups.length}
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <div className="aspect-[3/4] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      {project.mockups[currentImageIndex] ? (
                        <Image
                          src={project.mockups[currentImageIndex]}
                          alt={`${project.name} mockup ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: project.colors.background }}
                        >
                          <div className="text-center">
                            <div
                              className="text-4xl font-bold mb-2"
                              style={{ color: project.colors.primary }}
                            >
                              {project.name}
                            </div>
                            <div
                              className={`${poppins.className} text-lg`}
                              style={{ color: project.colors.secondary }}
                            >
                              Mockup {currentImageIndex + 1}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  {project.mockups.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                        style={{ color: project.colors.primary }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                        style={{ color: project.colors.primary }}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Thumbnail Strip with Actual Images */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.mockups.map((mockup, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 relative ${
                      index === currentImageIndex
                        ? "ring-2 scale-105"
                        : "opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                    style={{
                      borderColor: project.colors.primary,
                    }}
                  >
                    {mockup ? (
                      <Image
                        src={mockup}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: project.colors.background }}
                      >
                        <span
                          className="text-sm font-bold"
                          style={{ color: project.colors.primary }}
                        >
                          {index + 1}
                        </span>
                      </div>
                    )}
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 border-2 border-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-6">
              <h2 className={`${bebasNeue.className} text-3xl text-[#2c3639]`}>
                Project Overview
              </h2>
              <p
                className={`${poppins.className} text-[#3f4e4f] text-lg leading-relaxed`}
              >
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Color Palette */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Palette
                  className="w-6 h-6"
                  style={{ color: project.colors.secondary }}
                />
                <h2
                  className={`${bebasNeue.className} text-3xl text-[#2c3639]`}
                >
                  Brand Colors
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.colors).map(([key, color]) => (
                  <div key={key} className="group cursor-pointer">
                    <div
                      className="w-full aspect-square rounded-xl mb-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg overflow-hidden"
                      style={{ backgroundColor: color }}
                    >
                      <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div
                          className="text-xs font-medium px-2 py-1 rounded bg-white/90"
                          style={{ color: project.colors.primary }}
                        >
                          Click to copy
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`${poppins.className} font-medium text-[#2c3639] capitalize mb-1`}
                      >
                        {key}
                      </div>
                      <div
                        className={`${poppins.className} text-sm text-[#3f4e4f] font-mono bg-gray-100 py-1 px-2 rounded`}
                        onClick={() => navigator.clipboard.writeText(color)}
                      >
                        {color}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Services Provided */}
            <div
              className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: `${project.colors.primary}20`,
                backgroundColor: `${project.colors.background}20`,
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Layers
                  className="w-6 h-6"
                  style={{ color: project.colors.secondary }}
                />
                <h3
                  className={`${bebasNeue.className} text-2xl text-[#2c3639]`}
                >
                  Services
                </h3>
              </div>

              <div className="space-y-3">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className={`${poppins.className} flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02]`}
                    style={{
                      backgroundColor: `${project.colors.primary}08`,
                      borderLeft: `3px solid ${project.colors.secondary}`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: project.colors.secondary }}
                    ></div>
                    <span className="text-[#3f4e4f]">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div
              className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: `${project.colors.primary}20`,
                backgroundColor: `${project.colors.background}20`,
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Package
                  className="w-6 h-6"
                  style={{ color: project.colors.secondary }}
                />
                <h3
                  className={`${bebasNeue.className} text-2xl text-[#2c3639]`}
                >
                  Deliverables
                </h3>
              </div>

              <div className="space-y-3">
                {project.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="flex items-start gap-3 group"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: project.colors.secondary }}
                    ></div>
                    <span
                      className={`${poppins.className} text-[#3f4e4f] group-hover:text-[#2c3639] transition-colors duration-300`}
                    >
                      {deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {project.testimonials && project.testimonials.length > 0 && (
              <div
                className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: `${project.colors.primary}20`,
                  backgroundColor: `${project.colors.background}20`,
                }}
              >
                <h3
                  className={`${bebasNeue.className} text-2xl text-[#2c3639] mb-6`}
                >
                  Client Testimonial
                </h3>

                {project.testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-4">
                    <div
                      className="text-6xl text-left leading-none"
                      style={{ color: project.colors.secondary }}
                    >
                      "
                    </div>
                    <p
                      className={`${poppins.className} text-[#3f4e4f] italic text-lg`}
                    >
                      {testimonial.quote}
                    </p>
                    <div
                      className="pt-4 border-t"
                      style={{ borderColor: `${project.colors.primary}20` }}
                    >
                      <div
                        className={`${poppins.className} font-semibold text-[#2c3639]`}
                      >
                        {testimonial.author}
                      </div>
                      <div
                        className={`${poppins.className} text-sm text-[#3f4e4f]`}
                      >
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Next Project Link */}
            {nextProject && (
              <Link
                href={`/portfolio/${nextProject.id}`}
                className="block group"
              >
                <div
                  className="rounded-2xl p-6 border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                  style={{
                    borderColor: `${nextProject.colors.primary}20`,
                    backgroundColor: nextProject.colors.primary,
                    color: "#ffffff",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`${poppins.className} text-sm font-medium opacity-90`}
                    >
                      Next Project
                    </span>
                    <ExternalLink className="w-5 h-5 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h4 className={`${bebasNeue.className} text-xl mb-1`}>
                    {nextProject.name}
                  </h4>
                  <p className={`${poppins.className} text-sm opacity-90`}>
                    {nextProject.category}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
