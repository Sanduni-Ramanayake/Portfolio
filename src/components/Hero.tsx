import React, { useEffect, useState } from "react";
import { ChevronDown, Download } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const roles = ["UI/UX Designer", "Frontend Developer"];

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center relative overflow-hidden min-h-[105vh] pt-24 pb-8"
    >
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="z-10 flex flex-col items-center max-w-4xl px-4 mx-auto text-center">
        {/* Profile image */}
        <div className="relative mb-5">
          <div className="w-48 h-48 p-1 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-600">
            <div className="flex items-center justify-center w-full h-full rounded-full bg-slate-900">
              <div className="flex items-center justify-center w-40 h-40 overflow-hidden rounded-full bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src="/sadu.jpeg"
                  alt="User"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="mb-3 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text animate-fade-in">
          Sanduni Ramanayake
        </h1>

        {/* Animated Subtitle (below name) */}
        <h2
          key={currentRole}
          className="mb-6 text-3xl font-light text-gray-300 transition-all duration-700 md:text-4xl animate-slide-x"
        >
          {roles[currentRole]}
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-[1.09rem] md:text-[1.28rem] leading-relaxed text-gray-400 mb-8 animate-fade-in-delay-2">
          Crafting beautiful, responsive web experiences with modern
          technologies and intuitive design principles.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mb-4 sm:flex-row animate-fade-in-delay-3">
          <button
            onClick={() => scrollToSection("about")}
            className="px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
          >
            View More
          </button>

          <a
            href="/Sanduni_Cv.pdf"
            download="Sanduni_Ramanayake_CV.pdf"
            className="flex items-center gap-2 px-8 py-4 font-semibold text-purple-400 transition-all duration-300 transform border border-purple-500 rounded-full hover:bg-purple-500/10 hover:scale-105"
          >
            <Download size={20} /> Download CV
          </a>
        </div>

        {/* Scroll Icon — closer to buttons now */}
        <div
          onClick={() => scrollToSection("about")}
          className="mt-2 cursor-pointer animate-bounce"
        >
          <ChevronDown className="text-purple-400" size={38} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
