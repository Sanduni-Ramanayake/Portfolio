import React, { useState } from "react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
  activeSection?: string;
}

const sections = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Certificates",
  "Contact",
];

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/50 backdrop-blur-md z-[100] border-b border-purple-500/20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Navbar Top Row */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Sanduni
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-2 md:flex">
            {sections.map((item) => {
              const sectionId =
                item.toLowerCase() === "home" ? "hero" : item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item}
                  onClick={() => {
                    if (sectionId === "hero") {
                      const el = document.getElementById(sectionId);
                      if (el) {
                        const navbarHeight =
                          document.querySelector("nav")?.getBoundingClientRect()
                            .height || 0;
                        window.scrollTo({
                          top: el.offsetTop - navbarHeight - 19,
                          behavior: "smooth",
                        });
                      }
                    } else {
                      scrollToSection(sectionId);
                    }
                  }}
                  className={`relative text-gray-300 transition-all duration-300 hover:text-purple-400 group focus:outline-none rounded-full px-4 py-2 ${
                    isActive ? "text-purple-400" : ""
                  }`}
                  style={{
                    background: "none",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {/* Circular highlight */}
                  {isActive && (
                    <span className="absolute inset-0 border rounded-full border-white/30 bg-white/5 backdrop-blur-sm"></span>
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 text-white rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-400/70 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-[59px] right-0 w-1/2 h-[45vh] bg-slate-900/80 border-l border-purple-500/20 flex flex-col items-start px-4 py-4 space-y-1 md:hidden animate-slide-down rounded-b-[15px]">
            {sections.map((item) => {
              const sectionId =
                item.toLowerCase() === "home" ? "hero" : item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item}
                  onClick={() => {
                    if (sectionId === "hero") {
                      const el = document.getElementById(sectionId);
                      if (el) {
                        const navbarHeight =
                          document.querySelector("nav")?.getBoundingClientRect()
                            .height || 0;
                        window.scrollTo({
                          top: el.offsetTop - navbarHeight - 19,
                          behavior: "smooth",
                        });
                      }
                    } else {
                      scrollToSection(sectionId);
                    }
                    setMenuOpen(false);
                  }}
                  className={`relative w-full text-left text-gray-300 transition-all duration-300 hover:text-purple-400 group focus:outline-none rounded-full px-3 py-1.5 ${
                    isActive ? "text-purple-400" : ""
                  }`}
                  style={{
                    background: "none",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  {isActive && (
                    <span className="absolute inset-0 border rounded-full border-white/30 bg-white/5 backdrop-blur-sm"></span>
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
