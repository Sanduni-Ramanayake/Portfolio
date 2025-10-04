import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC = () => (
  <section id="contact" className="py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-4 text-4xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text"
          >
            Get in Touch
          </motion.h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500"></div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-10 text-[1.15rem] text-gray-300">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 mb-11 sm:flex-row">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:transform hover:scale-105"
          >
            <Mail className="text-purple-400" size={20} />
            <span>sandunidimuthunee@gmail.com</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:transform hover:scale-105"
          >
            <Github className="text-purple-400" size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sanduni-ramanayake-a8a4152b3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:transform hover:scale-105"
          >
            <Linkedin className="text-purple-400" size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/share/1A3qmE9LUf/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:transform hover:scale-105"
          >
            <FaFacebook className="text-purple-400" size={20} />
            <span>Facebook</span>
          </a>
        </div>
        <div className="p-8 border bg-slate-800/30 rounded-2xl border-purple-500/20">
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Send me a message
          </h3>
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors border border-gray-600 rounded-lg bg-slate-700/50 focus:outline-none focus:border-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors border border-gray-600 rounded-lg bg-slate-700/50 focus:outline-none focus:border-purple-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors border border-gray-600 rounded-lg bg-slate-700/50 focus:outline-none focus:border-purple-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors border border-gray-600 rounded-lg resize-none bg-slate-700/50 focus:outline-none focus:border-purple-500"
            ></textarea>
            <button
              onClick={() =>
                alert("Thank you for your message! I'll get back to you soon.")
              }
              className="w-full px-8 py-4 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/25 hover:transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
