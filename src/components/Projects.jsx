import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code2, Database, Layout } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Altura Grand",
      subtitle: "Hotel Management System",
      tech: ["Spring Boot", "React JS", "Microservices", "MySQL"],
      description: "A full-stack, microservices-based enterprise system. Features scalable architecture, RESTful API integration, and a modular design for efficient hotel operations management.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop", // Luxury Hotel Image
      links: { demo: "#", github: "#" }
    },
    {
      title: "Statok",
      subtitle: "Finance & Hotel System",
      tech: ["Oracle DB", "PL/SQL", "PHP", "SQLite"],
      description: "Dual-database system using SQLite for offline storage and Oracle for centralized analytics. Implements complex PL/SQL triggers, stored procedures, and secure data synchronization.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", // Finance/Analytics Image
      links: { demo: "#", github: "#" }
    },
    {
      title: "Pizza Mania",
      subtitle: "Android Mobile App",
      tech: ["Android (Java)", "Firebase", "Google Maps API", "SQLite"],
      description: "Full-featured restaurant app with live tracking, online ordering, and branch-based routing. Includes a real-time chat system and comprehensive restaurant-side management tools.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop", // Pizza App Image
      links: { demo: "#", github: "#" }
    },
    {
      title: "Nature Ceylon",
      subtitle: "eCommerce Website",
      tech: ["PHP", "MySQL", "Bootstrap", "HTML5"],
      description: "Comprehensive tea outlet system with a customer-facing website and admin panel. Features inventory management, order processing, and a seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop", // Tea/Nature Image
      links: { demo: "#", github: "#" }
    },
    {
      title: "Vertix",
      subtitle: "Desktop ERP System",
      tech: ["C# .NET", "MS SQL", "Crystal Reports"],
      description: "Windows desktop ERP for sales, inventory, and employee management. Integrated Crystal Reports for analytical insights and automated business processes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", // Business/ERP Image
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <div className="relative w-full py-20 px-4 md:px-10" id="projects">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto">
            A selection of my work in Full Stack Development, Mobile Apps, and Enterprise Systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

// Separate Card Component for cleaner code
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Floating Tech Badges on Image */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
            <span className="px-3 py-1 text-xs font-bold bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                {project.subtitle}
            </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {project.title}
                </h3>
            </div>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/20 rounded-full border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-800 mt-auto">
          <div className="flex gap-4">
            <a href={project.links.github} className="text-neutral-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={project.links.demo} className="text-neutral-400 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors">
            Details <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;