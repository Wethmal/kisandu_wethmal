import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineer (Internship)",
    company: "Ministry Of Digital Economy",
    years: "2026 - PRESENT",
    desc: "Full-Stack & AI Development: Built scalable applications using React and Spring Boot, integrating AI-driven automation to optimize government digital services. Systems Architecture: Developed secure RESTful APIs and MySQL databases."
  },
  {
    role: "Desktop ERP System Developer (Self-Employed)",
    company: "Vertix",
    years: "Freelance",
    desc: "Designed and developed an ERP system using C#, .NET, Crystal Reports, and Microsoft SQL."
  },
  {
    role: "ICT Teacher",
    company: "School / Institution",
    years: "2023 - 2025",
    desc: "Provided ICT theory and programming lessons, created personalized exercises, and developed strong mentoring and communication skills."
  }
];

const projects = [
  { name: "Elite Motors", desc: "Car Sales Management System With Customer WebSite. Stack: Spring Boot, React, PostgreSQL." },
  { name: "Statok", desc: "Personal Finance Management System. Stack: Java Series, PHP, HTML, CSS." },
  { name: "Pizza Mania", desc: "Android Mobile Application using Java, SQLite, Maps API, and Firebase." },
  { name: "SafeRoute AI", desc: "Accident Detection/SOS Navigation Mobile App. React Native, Firebase, Maps APIs." },
]

const Experience = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto" id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Experience Column */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter border-b-2 border-black pb-4 mb-8 md:mb-10">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-black before:rounded-full after:absolute after:left-[5px] after:top-5 after:bottom-[-2rem] after:w-[2px] after:bg-gray-200 last:after:hidden">
                <span className="text-xs font-bold text-gray-400 tracking-widest">{exp.years}</span>
                <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                <h4 className="text-lg font-medium text-gray-600 mb-4">{exp.company}</h4>
                <p className="text-gray-500 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Column */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter border-b-2 border-black pb-4 mb-8 md:mb-10">Key Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{proj.name}</h3>
                <p className="text-gray-500">{proj.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
