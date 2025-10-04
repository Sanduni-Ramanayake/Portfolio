import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image?: string;
  github: string;
  live: string;
  tech: string[];
}

interface ProjectsProps {
  projects: Project[];
  isVisible: {
    projects: boolean;
  };
}

const Projects: React.FC<ProjectsProps> = ({ projects, isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Use matchMedia for more reliable breakpoint detection
    const mediaQuery = window.matchMedia("(max-width: 767.98px)");
    const checkScreen = () => setIsMobile(mediaQuery.matches);
    checkScreen();
    mediaQuery.addEventListener("change", checkScreen);
    return () => mediaQuery.removeEventListener("change", checkScreen);
  }, []);

  // 🔹 Calculate tallest card on mount or when projects change
  useEffect(() => {
    // Only set equal height if there is more than one project (prevents 0 height bug)
    if (isMobile && projects.length > 1) {
      // Wait for next paint to ensure all refs are set
      setTimeout(() => {
        const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
        const maxHeight = Math.max(...heights);
        setCardHeight(maxHeight > 0 ? maxHeight : undefined);
      }, 0);
    } else {
      setCardHeight(undefined); // reset for desktop or single project
    }
  }, [isMobile, projects]);

  // Show 3 projects on desktop, 1 on mobile
  const projectsPerPage = isMobile ? 1 : 3;

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900/60 via-purple-800/50 to-slate-900/70"
    >
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-4 text-4xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text"
          >
            Featured Projects
          </motion.h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500"></div>
        </div>

        {/* Projects Slider */}
        <div className="relative">
          {/* Desktop/Tablet Left Button */}
          {!isMobile && (
            <button
              onClick={handlePrev}
              className={`absolute z-10 p-3 transition -translate-y-1/2 rounded-full bg-black/40 top-1/2 hover:bg-black/60 ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
              style={{ left: "-52px" }}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          )}

          {/* Projects Grid */}
          <div
            className={`grid gap-8 ${
              isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {projects
              .slice(currentIndex, currentIndex + projectsPerPage)
              .map((project, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`group bg-slate-800/50 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 ${
                    isVisible.projects
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }`}
                  style={{
                    height: isMobile && cardHeight ? `${cardHeight}px` : "auto",
                    minHeight: isMobile ? "min-content" : undefined,
                  }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                        style={{ borderRadius: "0.75rem 0.75rem 0 0" }}
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                        <div className="text-4xl">🚀</div>
                      </div>
                    )}

                    {/* Hover overlay with links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors rounded-full bg-white/20 hover:bg-white/30"
                      >
                        <Github className="text-white" size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors rounded-full bg-white/20 hover:bg-white/30"
                      >
                        <ExternalLink className="text-white" size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-base text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm text-purple-300 rounded-full bg-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Desktop/Tablet Right Button */}
          {!isMobile && (
            <button
              onClick={handleNext}
              className={`absolute z-10 p-3 transition -translate-y-1/2 rounded-full bg-black/40 top-1/2 hover:bg-black/60 ${
                currentIndex + projectsPerPage >= projects.length
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
              style={{ right: "-52px" }}
              disabled={currentIndex + projectsPerPage >= projects.length}
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          )}
        </div>

        {/* Mobile Buttons (below grid, like Certificates) */}
        {isMobile && (
          <div className="flex justify-center mt-6 space-x-4">
            {/* Show Left button only if not at first project */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="p-3 transition rounded-full bg-black/40 hover:bg-black/60"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
            )}

            {/* Show Right button only if not at last project */}
            {currentIndex + projectsPerPage < projects.length && (
              <button
                onClick={handleNext}
                className="p-3 transition rounded-full bg-black/40 hover:bg-black/60"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            )}
          </div>
        )}

        {/* Scroll Indicators (only on mobile) */}
        {isMobile && (
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-purple-500" : "bg-purple-500/30"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
