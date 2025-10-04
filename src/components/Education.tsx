import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Information and Communication Technology (Hons)",
    institution: "University of Sri Jayewardenepura",
    period: "2023-2027",
    details: [
      "Currently 3rd Year Student",
      "Actively participated in university events and workshops.",
    ],
    icon: "🎓",
  },
  {
    degree: "G.C.E. Advanced Level (A/L) - Technology Stream",
    institution: "MR. Deiyandara National College",
    period: "2021",
    details: [
      "Engineering Technology - A",
      "Science for Technology - A",
      "Information & Communication Technology - A",
    ],
    icon: "📚",
  },
  {
    degree: "G.C.E. Ordinary Level (O/L)",
    institution: "",
    period: "2017",
    details: "8 A's, 1C",
    icon: "🏅",
  },
];

// Parent timeline (stagger cards)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8, // delay between each card
    },
  },
};

// Each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

// Inside card (degree first, then details)
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      <div className="relative z-10 max-w-4xl px-6 mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-4 text-4xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text"
          >
            Education
          </motion.h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500"></div>
        </div>

        {/* Timeline */}
        <motion.div
          className="relative pl-8 border-l-4 border-purple-500/40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // trigger on scroll both directions
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree + edu.period}
              className="relative mb-12"
              variants={cardVariants}
            >
              {/* Circle marker */}
              <div className="absolute -left-[34px] flex items-center justify-center w-6 h-6 text-lg bg-white border-4 border-purple-500 rounded-full shadow-md">
                <span className="text-sm">{edu.icon}</span>
              </div>

              {/* Card */}
              <div className="p-6 transition duration-300 rounded-2xl bg-slate-800/70 backdrop-blur-lg hover:shadow-lg hover:shadow-purple-500/30">
                {/* Degree first */}
                <motion.h3
                  className="mb-2 text-xl font-bold text-purple-300"
                  variants={childVariants}
                  custom={0}
                >
                  {edu.degree}
                </motion.h3>

                {/* Period */}
                <motion.p
                  className="mb-2 text-sm font-medium text-fuchsia-300"
                  variants={childVariants}
                  custom={1}
                >
                  {edu.period}
                </motion.p>

                {/* Institution */}
                {edu.institution && (
                  <motion.p
                    className="mb-2 text-sm font-semibold text-blue-200"
                    variants={childVariants}
                    custom={2}
                  >
                    {edu.institution}
                  </motion.p>
                )}

                {/* Details */}
                {Array.isArray(edu.details) ? (
                  <motion.ul
                    className="pl-5 space-y-1 text-gray-200 list-disc"
                    variants={childVariants}
                    custom={3}
                  >
                    {edu.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.p
                    className="text-gray-200"
                    variants={childVariants}
                    custom={3}
                  >
                    {edu.details}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
