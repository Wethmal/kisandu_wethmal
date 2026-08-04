import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Engineer (Internship)",
    company: "Ministry Of Digital Economy",
    years: "2026 - PRESENT",
    desc: "Full-Stack & AI Development: Built scalable applications using React and Spring Boot, integrating AI-driven automation to optimize government digital services."
  },
  {
    role: "Full-Stack & Systems Developer",
    company: "Self-Employed / Freelance",
    years: "2023 - PRESENT",
    desc: "End-to-End Development: Designed and deployed custom web, mobile, and system solutions for diverse clients, focusing on scalable architecture, cloud integration, and seamless user experiences across various tech stacks."
  },
  {
    role: "ICT Teacher",
    company: "School / Institution",
    years: "2023 - 2025",
    desc: "Provided ICT theory and programming lessons, created personalized exercises, and developed strong mentoring and communication skills."
  }
];

const projects = [
  { 
    name: "Elite Motors", 
    desc: "Car Sales Management System With Customer WebSite. Stack: Spring Boot, React, PostgreSQL.",
    stack: "Spring Boot, React, PostgreSQL, Tailwind CSS",
    images: ["/projects/elite1.png"]
  },
  { 
    name: "Statok", 
    desc: "Personal Finance Management System. Stack: Java Series, PHP, HTML, CSS.",
    stack: "Java, PHP, MySQL, HTML5, CSS3, JavaScript",
    images: ["/projects/statok1.png"]
  },
  { 
    name: "Pizza Mania", 
    desc: "Android Mobile Application using Java, SQLite, Maps API, and Firebase.",
    stack: "Java (Android), SQLite, Google Maps API, Firebase",
    images: ["/projects/pizza1.png"]
  },
  { 
    name: "SafeRoute AI", 
    desc: "Accident Detection/SOS Navigation Mobile App. React Native, Firebase, Maps APIs.",
    stack: "React Native, Firebase, Google Maps API, AI Integration",
    images: ["/projects/saferoute1.png"]
  },
  {
    name: "Corporate Visa Application System",
    desc: "A corporate visa application system where applicants apply for visas and admins manage and approve applications.",
    stack: "React.js (Vite), TanStack Query, i18next, Node.js (Express), jsPDF, bcryptjs",
    images: ["/projects/visa1.png"]
  },
  {
    name: "Document & Task Management System",
    desc: "A centralized document and task management platform with secure file handling, workflow automation, and reporting.",
    stack: "React.js (Vite), Node.js (Express), ExcelJS, PDFKit, bcryptjs",
    images: ["/projects/docmgmt1.png"]
  }
]

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate central timeline line
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: true,
            }
          }
        );
      }
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* EXPERIENCE SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto w-full z-10" id="experience">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
            Experience.
          </h2>
          <div className="w-16 h-1 bg-violet-500 rounded-full mx-auto mt-6"></div>
        </div>

        <div ref={timelineRef} className="relative w-full">
          {/* Animated Progress Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 rounded-full">
            <div ref={lineRef} className="w-full bg-violet-500 rounded-full" style={{ height: '0%' }}></div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                className={`timeline-card relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-8 w-4 h-4 bg-white border-4 border-violet-500 rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(139,92,246,0.4)]"></div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`md:px-12 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="minimal-card p-8 rounded-3xl bg-white relative group">
                      {/* Hover subtle glow */}
                      <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/5 transition-colors duration-500 rounded-3xl pointer-events-none" />
                      
                      <span className="text-xs font-black text-violet-500 tracking-[0.2em] mb-3 block">{exp.years}</span>
                      <h3 className="text-2xl font-bold text-black mb-1">{exp.role}</h3>
                      <h4 className="text-lg font-semibold text-gray-500 mb-4">{exp.company}</h4>
                      <p className="text-gray-600 leading-relaxed font-light">{exp.desc}</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full z-10 bg-white border-t border-gray-100" id="projects">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
            Selected <span className="text-gray-300">Works.</span>
          </h2>
          <div className="w-16 h-1 bg-violet-500 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((proj, idx) => (
            <ProjectCard 
              key={idx} 
              project={proj} 
              index={idx} 
              onClick={() => setSelectedProject(proj)} 
            />
          ))}
        </div>

        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </section>
    </div>
  );
};

export default Experience;
