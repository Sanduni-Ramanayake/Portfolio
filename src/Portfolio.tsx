import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedParticles from "./components/AnimatedParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

const skills = [
  // UI/UX Design
  {
    name: "Figma",
    level: 95,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "UI/UX Design" as const,
  },
  {
    name: "Adobe XD",
    level: 80,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "UI/UX Design" as const,
  },
  {
    name: "User Research",
    level: 95,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "UI/UX Design" as const,
  },
  {
    name: "Wireframing & Prototyping",
    level: 95,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "UI/UX Design" as const,
  },

  {
    name: "Visual Design",
    level: 95,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "UI/UX Design" as const,
  },

  // Web Development
  {
    name: "HTML",
    level: 80,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "Web Development" as const,
  },
  {
    name: "CSS",
    level: 90,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "Web Development" as const,
  },
  {
    name: "JavaScript",
    level: 70,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "Web Development" as const,
  },
  {
    name: "React.js",
    level: 94,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "Web Development" as const,
  },
  {
    name: "Next.js",
    level: 70,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "Web Development" as const,
  },
  {
    name: "TypeScript",
    level: 70,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "Web Development" as const,
  },

  {
    name: "Node.js",
    level: 50,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "Web Development" as const,
  },
  {
    name: "MongoDB",
    level: 50,
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    category: "Web Development" as const,
  },

  // Soft Skills (no progress bar)

  {
    name: " Creativity & Problem Solving",
    level: 0,
    color: "",
    category: "Soft Skills" as const,
  },
  {
    name: "Team Collaboration",
    level: 0,
    color: "",
    category: "Soft Skills" as const,
  },
  {
    name: "Adaptability & Time Management",
    level: 0,
    color: "",
    category: "Soft Skills" as const,
  },
  {
    name: "Communication",
    level: 0,
    color: "",
    category: "Soft Skills" as const,
  },
];

const projects = [
  {
    title: "MediLink - Healthcare Appointment Platform",
    description:
      "MediLink is a modern, responsive healthcare platform that connects patients with doctors. It offers easy appointment booking, digital prescription management, and health record tracking, all designed with clean UI/UX and accessibility in mind",
    image: "/medi.jpeg",
    tech: ["UI/UX Design - Figma"],
    github: "#",
    live: "https://www.figma.com/proto/6iM8eTMhdHfvzqxsXF2rog/MediLink.?node-id=0-1&t=zcYGjLIgiIMcBDg8-1",
  },
  {
    title: "Highway Toll Control System ",
    description:
      " A 3rd-year ICT project integrating an AI-powered toll system with license plate recognition (YOLO + OCR), mobile violation reporting, and a real-time React.js dashboard.My role focused on frontend development & UI/UX design for the Toll Keeper Dashboard",
    image: "/high.jpeg",
    tech: ["UI/UX Design - Figma", " Frontend Dev - React.js , Tailwind CSS"],
    github: "#",
    live: "https://github.com/Sanduni-Ramanayake/toll-dashboard2.git",
  },
  {
    title: "Postify - Blogging Platform ",
    description:
      "A modern full-stack blogging platform built with the MERN stack, featuring secure authentication, post creation and management, commenting, content categorization, and responsive design for seamless use across devices.",
    image: "/posti.jpeg",
    tech: [
      "Frontend - React.js + Tailwind CSS ",
      "Backend - Node.js , Express",
      "Database - MongoDB",
      "Authentication - Clerk",
    ],
    github: "#",
    live: "https://github.com/Sanduni-Ramanayake/blog-app.git",
  },
  {
    title: "Zesta - Pizza Restaurant Website ",
    description:
      "A modern, responsive web application for an online restaurant experience. Features include dynamic menu browsing, real-time promotional countdowns, secure authentication, an intuitive cart and ordering system",
    image: "/zesta1.jpeg",
    tech: ["Frontend - Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "https://github.com/Sanduni-Ramanayake/Zestza.git",
  },
  {
    title: " TravelX – Modern Sri Lanka Tourism Website ",
    description:
      "TravelX is a modern, fully responsive tourism website designed to showcase the beauty and attractions of Sri Lanka. It features an immersive video background, interactive booking forms, and well-structured sections for destinations, travel packages, and services",
    image: "/travel2.jpg",
    tech: ["Frontend - HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "#",
    live: "https://github.com/Sanduni-Ramanayake/TravelX",
  },
  /*{
    title: "Zara Fashion - Online Fashion Store",
    description:
      "A modern online clothing store concept with stylish UI, responsive layouts, and smooth e-commerce flows. Designed interactive prototypes to simulate real shopping experiences and enhance user-centric design.",
    image: "/h2.jpeg",
    tech: ["UI/UX Design - Figma"],
    github: "#",
    live: "https://www.figma.com/proto/6TJ4uWG1KnavjC0b0FLm0S/Zara-Fashion?node-id=1-2&t=S787av2gAmtk4970-1",
  },*/
  {
    title: "Travel App - From Discovery to Destination",
    description:
      "Designed a mobile travel app prototype in Figma to support users from destination discovery to real-time navigation. Created intuitive interfaces including a personalized home page, detailed place view, and interactive map with nearby attractions.",
    image: "/travel.jpeg",
    tech: ["UI/UX Design - Figma"],
    github: "#",
    live: "",
  },
  {
    title: "HearBeat – Mobile Headphone Selling App ",
    description:
      "A modern mobile app concept with a minimal landing page, clean interface, and interactive prototype. Designed for smooth navigation and an engaging shopping experience while strengthening my UI/UX and prototyping skills.",
    image: "/hear.png",
    tech: ["UI/UX Design - Adobe XD"],
    github: "#",
    live: "#",
  },
  {
    title: "Eventia – Event Management Dashboard",
    description:
      "A responsive event management web platform that enables organizers to create, track, and analyze events effortlessly. Includes dashboard analytics, event browsing, detailed management views, and interactive data charts for insights.",
    image: "/eventia.png",
    tech: ["UI/UX Design - Figma"],
    github: "#",
    live: "https://www.figma.com/design/vFyrgYEZK9thY3NhvUoxAA/Eventia?node-id=0-1&t=kJlCc5L8fjf5JHiE-1",
  },

  {
    title: "PulseMe - Wellness Tracking App",
    description:
      "A mobile wellness app prototype designed in Figma to help users build positive habits and track daily progress. Features include onboarding screens, personalized dashboard, habit insights, and profile settings.",
    image: "/pulsme.png",
    tech: [
      "UI/UX Design - Figma",
      "Mobile App Design",
      "Prototype & Interaction",
    ],
    github: "#",
    live: "https://www.figma.com/proto/QOMT8WAzFh2JIO35LAo6XX/PulsMe?node-id=0-1&t=brBxAmxnkdYvvRVa-1",
  },
];

const certificates = [
  // 👇 New certificate cards with images
  {
    title: "Foundations of Web Development – CSS, Bootstrap, JavaScript, React",
    issuer: "Udemy",
    date: "2024",
    image: "/web.jpeg",
    description:
      "Completed a comprehensive Udemy course on Foundations of Web Development, gaining hands-on experience with CSS, Bootstrap, JavaScript, and React for building responsive and modern web applications.",
  },
  {
    title: " HTML5 & CSS3 Complete Course – Build Websites like a Pro",
    issuer: "Udemy",
    date: "2024",
    image: "/html.jpeg",
    description:
      "This course covers the fundamentals of HTML5 and CSS3, focusing on semantic structure, responsive layouts, and modern styling techniques for building professional websites.",
  },
  {
    title: "Introduction to Figma",
    issuer: "LearnTube.ai",
    date: "2025",
    image: "/figma2.jpeg",
    description:
      "Learned the basics of Figma, including interface navigation, design systems, and collaborative workflows.",
  },
  {
    title: "AI/ML Engineer (Stage 1)",
    issuer: "SLIIT",
    date: "2025",
    image: "/al1.jpeg",
    description:
      "Successfully completed the AI/ML Engineer - Stage 1 program by SLIIT (Centre for Open and Distance Education, Faculty of Computing). Gained a strong foundation in Artificial Intelligence and Machine Learning concepts, tools, and techniques for developing AI/ML solutions.",
  },
  {
    title: "AI/ML Engineer (Stage 2)",
    issuer: "SLIIT",
    date: "2025",
    image: "/al2.jpeg",
    description:
      "Successfully completed the AI/ML Engineer - Stage 2 program by SLIIT (Centre for Open and Distance Education, Faculty of Computing). This certification provided advanced skills in Artificial Intelligence and Machine Learning.",
  },
  {
    title: " Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2024",
    image: "/pyhthon.jpeg",
    description:
      "This course covered the fundamentals of Python programming, including syntax, data types, control structures, functions.",
  },
  {
    title: "C# ( Basic)",
    issuer: "Hackerrank",
    date: "2024",
    image: "/c.jpeg",
    description:
      "That covers the fundamentals of C# programming, including syntax, data types, control structures, and problem-solving skills, tested through a hands-on coding exam.",
  },

  {
    title: "C programming",
    issuer: "Southern IT Education Center - SITEC",
    date: "2023",
    description:
      "Gained strong foundation in C programming with focus on problem-solving, control structures, and efficient coding practices",
    color: "from-blue-500 to-purple-600",
  },

  {
    title: "Introduction to Security Engineering",
    issuer: "TryHackMe",
    date: "2024",
    description:
      "Hands-on cybersecurity training in security engineering fundamentals, with practical CTF challenges on TryHackMe.",
    color: "from-green-500 to-blue-600",
  },
  {
    title: "User Interface Design With Figma",
    issuer: "Alison",
    date: "2025",
    description:
      "Learned the fundamentals of UI design using Figma, including wireframing, prototyping, and creating visually appealing interfaces.",
    color: "from-purple-500 to-pink-600",
  },
];

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AnimatedParticles />
      <div className="relative z-10">
        <Navbar
          scrollToSection={scrollToSection}
          activeSection={Object.keys(isVisible).find((key) => isVisible[key])}
        />
        <Hero scrollToSection={scrollToSection} />
        <About isVisible={isVisible} />
        <Education />
        <Skills skills={skills} isVisible={isVisible} />
        <Projects
          projects={projects}
          isVisible={{ projects: isVisible.projects }}
        />
        <Certificates certificates={certificates} isVisible={isVisible} />
        <Contact />
        <footer className="border-t py-7 bg-slate-900 border-purple-500/20">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <p className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-200 md:text-base">
              © 2025 Sanduni Ramanayake. All rights reserved.
              <span className="hidden text-gray-400 sm:inline">|</span>
              <span className="text-gray-300">Follow me:</span>
              <span className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/share/1A3qmE9LUf/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-xl transition-transform hover:scale-110"
                >
                  <FaFacebook style={{ fill: "url(#footer-gradient)" }} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-xl transition-transform hover:scale-110"
                >
                  <FaInstagram style={{ fill: "url(#footer-gradient)" }} />
                </a>
                <a
                  href="https://www.instagram.com/sadu_ramanayake?igsh=NnhxejJwOTduYzBo&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-xl transition-transform hover:scale-110"
                >
                  <FaLinkedin style={{ fill: "url(#footer-gradient)" }} />
                </a>
                <a
                  href="https://github.com/Sanduni-Ramanayake"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-xl transition-transform hover:scale-110"
                >
                  <FaGithub style={{ fill: "url(#footer-gradient)" }} />
                </a>
              </span>
            </p>
          </div>

          {/* Gradient for icons */}
          <svg width="0" height="0">
            <linearGradient id="footer-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9333ea" /> {/* purple-600 */}
              <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
            </linearGradient>
          </svg>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
