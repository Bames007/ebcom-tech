// /app/portfolio/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Filter, Grid, Sparkles, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { portfolioProjects } from "./portfolio";
import { bebasNeue, poppins } from "@/app/util/constants";

const allServices = Array.from(
  new Set(portfolioProjects.flatMap((project) => project.services)),
);
const categories = ["All", ...allServices.slice(0, 8)];

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = portfolioProjects.filter((project) => {
    if (selectedCategory === "All") return true;

    return project.services.some(
      (service) =>
        service.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(service.toLowerCase()),
    );
  });

  const clearFilter = () => {
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#2c3639] to-[#3f4e4f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#a27b5b] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#dcd7c9] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a27b5b]/20 border border-[#a27b5b]/30 mb-6">
                <Sparkles className="w-4 h-4 text-[#a27b5b]" />
                <span
                  className={`${poppins.className} text-[#a27b5b] text-sm font-semibold tracking-wide`}
                >
                  OUR CREATIVE PORTFOLIO
                </span>
              </div>

              <h1
                className={`${bebasNeue.className} text-5xl sm:text-7xl text-[#dcd7c9] mb-6`}
              >
                BRANDING <span className="text-[#a27b5b]">MASTERPIECES</span>
              </h1>

              <p
                className={`${poppins.className} text-xl text-[#dcd7c9]/80 max-w-2xl mx-auto mb-10`}
              >
                Explore our curated collection of brand transformations that
                have redefined industries and captivated audiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#3f4e4f]/10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            {selectedCategory !== "All" && (
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className={`${poppins.className} text-sm text-[#3f4e4f]`}>
                  Filtering by:
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2c3639] text-[#dcd7c9]">
                  <span className={`${poppins.className} text-sm font-medium`}>
                    {selectedCategory}
                  </span>
                  <button
                    onClick={clearFilter}
                    className="hover:bg-white/10 p-1 rounded-full transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded-full transition-all duration-300 ${poppins.className} text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-[#2c3639] text-[#dcd7c9] shadow-lg"
                      : "bg-[#dcd7c9]/20 text-[#3f4e4f] hover:bg-[#dcd7c9]/40 hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#dcd7c9]/30 flex items-center justify-center">
                <Filter className="w-10 h-10 text-[#3f4e4f]/50" />
              </div>
              <h3
                className={`${bebasNeue.className} text-2xl text-[#2c3639] mb-2`}
              >
                No Projects Found
              </h3>
              <p className={`${poppins.className} text-[#3f4e4f] mb-4`}>
                Try adjusting your filter
              </p>
              <button
                onClick={clearFilter}
                className={`${poppins.className} px-4 py-2 bg-[#a27b5b] text-white rounded-full hover:bg-[#8b6b4f] transition-colors`}
              >
                Clear Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Link href={`/portfolio/${project.id}`}>
                    <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-[500px]">
                      {/* Background Mockup */}
                      {project.mockups[0] && (
                        <div className="absolute inset-0">
                          <Image
                            src={project.mockups[0]}
                            alt={`${project.name} preview`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Gradient Overlay */}
                          <div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"
                            style={{
                              background: `linear-gradient(to bottom, transparent 0%, ${project.colors.primary}40 50%, ${project.colors.primary}90 100%)`,
                            }}
                          />
                        </div>
                      )}

                      {/* Circular Logo Container - Updated */}
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                          {/* Outer Glow/Effect */}
                          <div className="absolute inset-0 rounded-full shadow-2xl">
                            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transform rotate-6 scale-105 transition-all duration-500 group-hover:rotate-0 group-hover:scale-110"></div>
                          </div>

                          {/* Logo Container - Perfect Circle */}
                          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-inner">
                            {project.logo ? (
                              <Image
                                src={project.logo}
                                alt={project.name}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 192px, 224px"
                                priority={index < 3}
                              />
                            ) : (
                              <div
                                className="w-full h-full flex items-center justify-center"
                                style={{
                                  backgroundColor: project.colors.primary,
                                }}
                              >
                                <h2
                                  className={`${bebasNeue.className} text-4xl font-bold text-white`}
                                >
                                  {project.name.charAt(0)}
                                </h2>
                              </div>
                            )}
                          </div>

                          {/* Glow Effect on Hover */}
                          <div
                            className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                            style={{
                              backgroundColor: project.colors.secondary,
                              zIndex: -1,
                            }}
                          />
                        </div>
                      </div>

                      {/* Content at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: project.colors.secondary,
                            }}
                          ></div>
                          <span
                            className={`${poppins.className} text-sm font-medium text-white/90`}
                          >
                            {project.category}
                          </span>
                        </div>

                        <h3
                          className={`${bebasNeue.className} text-2xl mb-2 group-hover:text-[${project.colors.secondary}] transition-colors duration-300`}
                        >
                          {project.name}
                        </h3>

                        <p
                          className={`${poppins.className} text-white/80 line-clamp-2 mb-4 text-sm`}
                        >
                          {project.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/20">
                          <div className="flex items-center gap-3">
                            <span
                              className={`${poppins.className} text-sm font-medium`}
                              style={{ color: project.colors.secondary }}
                            >
                              {project.year}
                            </span>
                            <div className="w-1 h-1 rounded-full bg-white/40"></div>
                            <span
                              className={`${poppins.className} text-sm text-white/60`}
                            >
                              {project.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-white group-hover:text-[#a27b5b] transition-colors duration-300">
                            <span
                              className={`${poppins.className} text-sm font-medium`}
                            >
                              View
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Services Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {project.services.slice(0, 2).map((service, idx) => (
                          <div
                            key={idx}
                            className="px-2 py-1 rounded-full backdrop-blur-sm bg-white/20 border border-white/30"
                          >
                            <span
                              className={`${poppins.className} text-xs text-white`}
                            >
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {filteredProjects.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#3f4e4f]/10 text-center">
              <p className={`${poppins.className} text-[#3f4e4f]`}>
                Showing{" "}
                <span className="font-semibold">{filteredProjects.length}</span>{" "}
                of{" "}
                <span className="font-semibold">
                  {portfolioProjects.length}
                </span>{" "}
                projects
                {selectedCategory !== "All" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="font-semibold text-[#a27b5b]">
                      {selectedCategory}
                    </span>
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
