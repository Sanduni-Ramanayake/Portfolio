import React, { useState } from "react";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  color?: string;
  image?: string;
  description?: string;
}

interface CertificatesProps {
  certificates: Certificate[];
  isVisible: { [key: string]: boolean };
}

const Certificates: React.FC<CertificatesProps> = ({
  certificates,
  isVisible,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const openModal = () => setModalOpen(true);
  const closeModal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setModalOpen(false);
  };

  const cert = certificates[currentIndex];

  return (
    <section id="certificates" className="relative py-20 bg-slate-900/50">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-4 text-4xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text"
          >
            Certificates & Achievements
          </motion.h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500"></div>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          {currentIndex !== 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 p-3 transition rounded-full bg-purple-500/20 hover:bg-purple-500/40"
            >
              <ChevronLeft className="text-purple-300" size={28} />
            </button>
          )}

          {/* Certificate Card (clickable) */}
          <div
            className={`bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 w-full max-w-md transition-all duration-500 transform cursor-pointer ${
              isVisible.certificates
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
            onClick={openModal}
            title="Click to view larger"
          >
            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.title}
                className="object-cover w-full h-48 mb-4 border rounded-lg border-purple-500/20"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            ) : (
              <div
                className={`w-16 h-16 bg-gradient-to-r ${
                  cert.color ? cert.color : "from-purple-500 to-blue-500"
                } rounded-lg flex items-center justify-center mb-4`}
              >
                <Award className="text-white" size={32} />
              </div>
            )}

            <h3 className="mb-1 text-xl font-semibold text-white">
              {cert.title || "Untitled"}
            </h3>
            <p className="mb-1 text-sm text-gray-400">
              {cert.issuer || "Unknown Issuer"}
            </p>
            <span className="block mb-2 font-semibold text-purple-400">
              {cert.date || "No Date"}
            </span>
            {cert.description && (
              <p className="text-sm leading-relaxed text-gray-300">
                {cert.description}
              </p>
            )}
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 p-3 transition rounded-full bg-purple-500/20 hover:bg-purple-500/40"
          >
            <ChevronRight className="text-purple-300" size={28} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {certificates.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-purple-500" : "bg-purple-500/30"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Modal for certificate preview */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg p-8 border shadow-2xl bg-slate-900 rounded-xl border-purple-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute text-2xl font-bold text-gray-400 top-2 right-2 hover:text-white"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.title}
                className="object-contain w-full h-64 mb-4 border rounded-lg border-purple-500/20 bg-slate-800"
              />
            ) : (
              <div
                className={`w-20 h-20 bg-gradient-to-r ${
                  cert.color ? cert.color : "from-purple-500 to-blue-500"
                } rounded-lg flex items-center justify-center mb-4 mx-auto`}
              >
                <Award className="text-white" size={40} />
              </div>
            )}
            <h3 className="mb-1 text-2xl font-bold text-center text-white">
              {cert.title || "Untitled"}
            </h3>
            <p className="mb-1 text-base text-center text-gray-400">
              {cert.issuer || "Unknown Issuer"}
            </p>
            <span className="block mb-2 font-semibold text-center text-purple-400">
              {cert.date || "No Date"}
            </span>
            {cert.description && (
              <p className="text-base leading-relaxed text-center text-gray-300">
                {cert.description}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
