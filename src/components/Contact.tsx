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

          {/* Links - Two Rows */}
          <div className="flex flex-col items-center justify-center gap-2 mb-11">
            {/* Row 1: Email & WhatsApp */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href="mailto:sandunidimuthunee@gmail.com"
                className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
              >
                <Mail className="text-purple-400" size={20} />
                <span>sandunidimuthunee@gmail.com</span>
              </a>

              {/* WhatsApp Me Button */}
              <a
                href="https://wa.me/94775488523?text=Hi%20Sanduni%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 text-white transition-all duration-300 border rounded-lg bg-slate-800/50 border-green-500/20 hover:border-green-500/40 hover:scale-105"
              >
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-purple-400"
                  width="20"
                  height="20"
                >
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 .02 5.35.02 11.98c0 2.11.55 4.18 1.6 6.02L0 24l6.19-1.61a11.93 11.93 0 0 0 5.81 1.49h.01C18.63 23.88 24 18.52 24 11.98a11.92 11.92 0 0 0-3.48-8.5ZM12 21.5a9.45 9.45 0 0 1-4.83-1.32l-.35-.2-3.68.96.98-3.59-.23-.37a9.42 9.42 0 0 1-1.44-5A9.47 9.47 0 0 1 12 2.48a9.46 9.46 0 0 1 9.47 9.47A9.47 9.47 0 0 1 12 21.5Zm5.22-7.16c-.28-.14-1.64-.81-1.89-.9-.25-.1-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.43-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.28-.95.92-.95 2.25s.97 2.61 1.1 2.79c.14.18 1.91 2.91 4.63 4.08.65.28 1.16.45 1.55.58.65.2 1.23.17 1.7.1.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32Z" />
                </svg>
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Row 2: GitHub, LinkedIn, Facebook */}
            <div className="flex flex-wrap items-center justify-center gap-2">
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
                placeholder="Share your thoughts. I’d be happy to connect with you!"
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

      {/* Popup for Success/Error */}
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
                  ? "Thanks for your message! I’m glad you got in touch 💜"
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
