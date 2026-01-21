// /components/PortfolioNav.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Grid, Home } from "lucide-react";
import { poppins } from "../util/constants";
import { portfolioProjects } from "./portfolio";

export default function PortfolioNav() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#3f4e4f]/20 rounded-full px-4 py-3 shadow-xl">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-[#dcd7c9]/30 transition-colors duration-300"
          title="Home"
        >
          <Home className="w-5 h-5 text-[#3f4e4f]" />
        </Link>

        <div className="w-px h-6 bg-[#3f4e4f]/20 mx-2"></div>

        <div className="flex items-center gap-1">
          {portfolioProjects.slice(0, 5).map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group"
              title={project.name}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: project.colors.background,
                  color: project.colors.primary,
                  border: `2px solid ${hoveredProject === project.id ? project.colors.secondary : "transparent"}`,
                }}
              >
                {project.name.charAt(0)}
              </div>

              {/* Tooltip */}
              {hoveredProject === project.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#2c3639] text-[#dcd7c9] text-sm rounded-lg whitespace-nowrap">
                  {project.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#2c3639] rotate-45"></div>
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="w-px h-6 bg-[#3f4e4f]/20 mx-2"></div>

        <Link
          href="/portfolio"
          className={`${poppins.className} flex items-center gap-2 px-4 py-2 rounded-full bg-[#2c3639] text-[#dcd7c9] hover:bg-[#1e2729] transition-all duration-300 hover:scale-105`}
        >
          <Grid className="w-4 h-4" />
          <span>All Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
