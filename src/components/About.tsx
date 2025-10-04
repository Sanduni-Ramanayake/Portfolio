import React from "react";
import { Mail, Phone, MapPin, Code, Palette, Star, Award } from "lucide-react";
import { motion } from "framer-motion";
interface AboutProps {
  isVisible: { [key: string]: boolean };
}

const About: React.FC<AboutProps> = ({ isVisible }) => (
  <section id="about" className="relative py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-4 text-4xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text"
        >
          About Me
        </motion.h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500"></div>
      </div>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible.about
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Passionate About Creating Digital Experiences
          </h3>
          <p className="mb-6 text-base leading-relaxed text-gray-300">
            I’m a 3rd-year Information and Communication Technology
            undergraduate at the University of Sri Jayewardenepura with a strong
            passion for UI/UX design and frontend development. I enjoy
            transforming ideas into modern, responsive, and user-friendly
            digital interfaces that deliver meaningful experiences.
          </p>
          <p className="mb-8 text-base leading-relaxed text-gray-300">
            My work blends creativity with technical expertise, supported by
            strong teamwork, problem-solving, adaptability, and communication
            skills. I aim to create solutions that not only look visually
            engaging but also perform seamlessly across all devices and
            platforms.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: Mail, text: "sandunidimuthunee@gmail.com" },
              { icon: Phone, text: "+94 775488523" },
              { icon: MapPin, text: "Matara,Sri Lanka" },
            ].map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-400"
              >
                <Icon size={18} className="text-purple-400" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible.about
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Palette,
                title: "Creative Design",
                desc: "Beautiful, intuitive interfaces",
              },
              {
                icon: Code,
                title: "Clean Code",
                desc: "Writing maintainable, scalable code",
              },

              {
                icon: Star,
                title: "User Focus",
                desc: "Prioritizing user experience",
              },
              {
                icon: Award,
                title: "Quality",
                desc: "Delivering excellence in every project",
              },
            ].map(({ icon: Icon, title, desc }, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:transform hover:scale-105"
              >
                <Icon className="mb-3 text-purple-400" size={32} />
                <h4 className="mb-2 font-semibold text-white">{title}</h4>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
