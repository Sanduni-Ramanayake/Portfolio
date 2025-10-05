import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xqaylqyr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else setStatus("error");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title */}
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

        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-10 text-[1.15rem] text-gray-300">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Links */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-2 mb-11 sm:flex-row">
            <a
              href="mailto:sandunidimuthunee@gmail.com"
              className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
            >
              <Mail className="text-purple-400" size={20} />
              <span>sandunidimuthunee@gmail.com</span>
            </a>
            <a
              href="https://github.com/Sanduni-Ramanayake"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
            >
              <Github className="text-purple-400" size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sanduni-ramanayake-a8a4152b3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
            >
              <Linkedin className="text-purple-400" size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/share/1A3qmE9LUf/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
            >
              <FaFacebook className="text-purple-400" size={20} />
              <span>Facebook</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="p-8 border bg-slate-800/30 rounded-2xl border-purple-500/20">
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors border border-gray-600 rounded-lg bg-slate-700/50 focus:outline-none focus:border-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors border border-gray-600 rounded-lg bg-slate-700/50 focus:outline-none focus:border-purple-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors border border-gray-600 rounded-lg bg-slate-700/50 focus:outline-none focus:border-purple-500"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Share your thoughts. I’d be happy to connect with you !"
                required
                className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors border border-gray-600 rounded-lg resize-none bg-slate-700/50 focus:outline-none focus:border-purple-500"
              ></textarea>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full px-8 py-4 font-semibold text-white rounded-lg transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 ${
                  status === "loading" ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Animated Popup for Success/Error */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`p-8 text-center rounded-2xl shadow-xl w-[90%] max-w-md ${
                status === "success"
                  ? "bg-gradient-to-br from-purple-600 via-purple-900 to-slate-800"
                  : "bg-gradient-to-br from-purple-500 via-purple-800 to-slate-900"
              }`}
            >
              <h4 className="mb-3 text-2xl font-bold text-white">
                {status === "success"
                  ? "💌 Message Sent!"
                  : "⚠️ Something Went Wrong"}
              </h4>
              <p className="mb-6 text-white/90">
                {status === "success"
                  ? "Thanks for your message! I’m glad you got in touch.💜"
                  : "⚠️ Oops! Something went wrong. Please try again later."}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-5 py-2 text-sm font-semibold text-white transition-transform duration-300 rounded-lg bg-black/20 hover:bg-black/30 hover:scale-105"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
