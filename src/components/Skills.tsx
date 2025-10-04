import React from "react";
import { motion } from "framer-motion";
import { Palette, Code2, Sparkles } from "lucide-react"; // icons

interface Skill {
  name: string;
  level: number;
  color: string;
  category: "UI/UX Design" | "Web Development" | "Soft Skills";
}

interface SkillsProps {
  skills: Skill[];
  isVisible: { [key: string]: boolean };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900/50 via-purple-950/70 to-slate-900/40"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-850/30 via-slate-900 to-blue-900/20 blur-3xl"></div>

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
            Skills
          </motion.h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* === UI/UX Card === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="p-8 transition-all duration-500 border rounded-2xl bg-purple-600/5 backdrop-blur-lg border-purple-500/20 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-purple-300">
                UI/UX Design
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((s) => s.category === "UI/UX Design")
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 text-sm font-medium text-gray-200 transition rounded-full bg-slate-700/60 hover:bg-purple-500/30 hover:text-purple-300 hover:scale-105"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </motion.div>

          {/* === Web Dev Card === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="p-8 transition-all duration-500 border rounded-2xl bg-purple-600/5 backdrop-blur-lg border-purple-500/20 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-purple-300">
                Web Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((s) => s.category === "Web Development")
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 text-sm font-medium text-gray-200 transition rounded-full bg-slate-700/60 hover:bg-purple-500/30 hover:text-purple-300 hover:scale-105"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </motion.div>
        </div>

        {/* === Soft Skills Card === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="p-8 mt-12 text-center transition-all duration-500 border rounded-2xl bg-purple-600/5 backdrop-blur-lg border-blue-500/20 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <h3 className="text-2xl font-semibold text-blue-300">
              Soft Skills
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills
              .filter((s) => s.category === "Soft Skills")
              .map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 text-sm font-medium text-gray-200 transition rounded-full bg-slate-700/60 hover:bg-blue-500/30 hover:text-blue-300 hover:scale-105"
                >
                  {skill.name}
                </span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
