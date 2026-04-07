import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';

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
]

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-12 md:py-32 px-6 md:px-8 max-w-7xl mx-auto" id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        
        {/* Experience Column */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={containerVariants}
        >
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Experience.</h2>
            <div className="w-16 h-1 bg-violet-500"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-violet-500 before:rounded-full after:absolute after:left-[5px] after:top-5 after:bottom-[-3rem] after:w-[1px] after:bg-gray-200 last:after:hidden group"
              >
                <span className="text-xs font-black text-violet-500 tracking-[0.2em] mb-2 block">{exp.years}</span>
                <h3 className="text-2xl font-bold group-hover:text-violet-600 transition-colors">{exp.role}</h3>
                <h4 className="text-lg font-medium text-gray-500 mb-4">{exp.company}</h4>
                <p className="text-gray-600 leading-relaxed max-w-md">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Column */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={containerVariants}
        >
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-right md:text-left">Key Projects.</h2>
            <div className="w-16 h-1 bg-black ml-auto md:ml-0"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((proj, idx) => (
              <ProjectCard 
                key={idx} 
                project={proj} 
                index={idx} 
                onClick={() => setSelectedProject(proj)} 
              />
            ))}
          </div>
        </motion.div>

      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Experience;
