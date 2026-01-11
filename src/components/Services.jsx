import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Layout, Server, ShieldCheck, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, high-performance websites using React, Node.js, and modern frameworks. I focus on speed, SEO, and smooth user interactions.",
      icon: Monitor,
      color: "text-cyan-400",
      border: "hover:border-cyan-400/50",
      shadow: "group-hover:shadow-cyan-400/20"
    },
    {
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications with React Native and native Android (Java). Delivering seamless mobile experiences for both iOS and Android users.",
      icon: Smartphone,
      color: "text-purple-400",
      border: "hover:border-purple-400/50",
      shadow: "group-hover:shadow-purple-400/20"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing interfaces using Figma. I ensure your product looks great and is easy for your customers to use.",
      icon: Layout,
      color: "text-pink-400",
      border: "hover:border-pink-400/50",
      shadow: "group-hover:shadow-pink-400/20"
    },
    {
      title: "Backend & API",
      description: "Developing robust server-side logic and RESTful APIs using Node.js, Spring Boot, and PHP to power your applications securely and efficiently.",
      icon: Server,
      color: "text-green-400",
      border: "hover:border-green-400/50",
      shadow: "group-hover:shadow-green-400/20"
    },
    {
      title: "Database Management",
      description: "Designing efficient database schemas with MySQL, PostgreSQL, and MongoDB to ensure your data is organized, secure, and easily accessible.",
      icon: Database,
      color: "text-yellow-400",
      border: "hover:border-yellow-400/50",
      shadow: "group-hover:shadow-yellow-400/20"
    },
    {
      title: "Security & Testing",
      description: "Implementing basic security practices and testing protocols to ensure your applications are bug-free and protected against common vulnerabilities.",
      icon: ShieldCheck,
      color: "text-orange-400",
      border: "hover:border-orange-400/50",
      shadow: "group-hover:shadow-orange-400/20"
    },
  ];

  return (
    <div className="relative w-full py-20 px-4 md:px-10" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Offer
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-neutral-400 text-lg">
            High-quality services to bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

// Individual Card Component
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl transition-all duration-300 ${service.border} hover:shadow-xl ${service.shadow}`}
    >
      {/* Icon Background */}
      <div className={`w-14 h-14 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={32} className={`${service.color}`} />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
        {service.title}
      </h3>
      
      <p className="text-neutral-400 text-sm leading-relaxed">
        {service.description}
      </p>

    </motion.div>
  );
};

export default Services;