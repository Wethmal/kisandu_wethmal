import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Wrench, Cpu, Globe, Layout, Palette, Terminal, Boxes, FileCode, Braces, Zap, Cloud, GitBranch, Figma, Package, Monitor, Server } from 'lucide-react';

// ... (Your existing iconVariants remain here) ...
const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  // ... (Your existing arrays remain here) ...
  const programmingLanguages = [
    { name: 'JavaScript', icon: FileCode, color: '#F7DF1E', speed: 2.5 },
    { name: 'Python', icon: Code2, color: '#3776AB', speed: 3 },
    { name: 'TypeScript', icon: Braces, color: '#3178C6', speed: 2.8 },
    { name: 'Java', icon: Terminal, color: '#f89820', speed: 3.2 },
    { name: 'C++', icon: Cpu, color: '#00599C', speed: 2.7 }
  ];
  // ... (rest of your arrays) ...
  const webMobile = [
    { name: 'React', icon: Boxes, color: '#61DAFB', speed: 2.6 },
    { name: 'Next.js', icon: Layout, color: '#ffffff', speed: 2.9 },
    { name: 'Node.js', icon: Server, color: '#339933', speed: 3.1 },
    { name: 'React Native', icon: Smartphone, color: '#61DAFB', speed: 2.8 },
    { name: 'HTML/CSS', icon: Globe, color: '#E34F26', speed: 2.5 },
    { name: 'Tailwind', icon: Zap, color: '#38B2AC', speed: 2.7 }
  ];
  const databases = [
    { name: 'MongoDB', icon: Database, color: '#47A248', speed: 3 },
    { name: 'PostgreSQL', icon: Server, color: '#336791', speed: 2.9 },
    { name: 'MySQL', icon: Database, color: '#4479A1', speed: 3.2 },
    { name: 'Firebase', icon: Cloud, color: '#FFCA28', speed: 2.6 }
  ];
  const toolsDesign = [
    { name: 'Git', icon: GitBranch, color: '#F05032', speed: 2.8 },
    { name: 'Docker', icon: Package, color: '#2496ED', speed: 3 },
    { name: 'Figma', icon: Figma, color: '#F24E1E', speed: 2.7 },
    { name: 'VS Code', icon: Monitor, color: '#007ACC', speed: 2.9 },
    { name: 'Postman', icon: Wrench, color: '#FF6C37', speed: 3.1 }
  ];

  return (
    <div className="relative w-full pb-20 mt-20 px-4 md:px-10 overflow-hidden">
      
      {/* --- SPLINE BACKGROUND --- */}
      {/* It sits behind everything (z-0) and accepts clicks */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
         <Spline 
            scene="https://prod.spline.design/JJn3wDxpkqG1neZJ/scene.splinecode" 
            className="w-full h-full object-cover"
         />

         <Loader />
      </div>

      
      {/* --- CONTENT CONTAINER --- */}
      {/* 1. Added 'pointer-events-none' so clicks pass through empty spaces */}
      <div className="max-w-7xl mx-auto relative z-10 pointer-events-none"> 
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500">
            Tech Stack.
          </h2>
          <p className="mt-4 text-neutral-400 text-lg">The ecosystem I live in.</p>
        </motion.div>

        <TechCategory title="Languages" items={programmingLanguages} />
        <TechCategory title="Web & Mobile" items={webMobile} />
        <TechCategory title="Databases" items={databases} />
        <TechCategory title="Tools" items={toolsDesign} />

      </div>
    </div>
  );
};

const TechCategory = ({ title, items }) => {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[1px] w-10 bg-neutral-700"></div>
        <h3 className="text-2xl font-mono text-neutral-300 uppercase tracking-wider">{title}</h3>
        <div className="h-[1px] flex-grow bg-neutral-700"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((item, index) => (
          <TechCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const TechCard = ({ item }) => {
  const { name, icon: Icon, color, speed } = item;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      // 2. Added 'pointer-events-auto' so the CARD ITSELF is clickable/hoverable
      className="group relative pointer-events-auto cursor-pointer"
    >
      <div 
        className="relative h-32 flex flex-col items-center justify-center 
                   bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl 
                   transition-all duration-300 group-hover:bg-neutral-900"
        style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      >
        <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
                boxShadow: `0 0 20px ${color}30`, 
                border: `1px solid ${color}` 
            }}
        ></div>
        <motion.div
          variants={iconVariants(speed)}
          initial="initial"
          animate="animate"
          className="z-10"
        >
          <Icon 
            size={40} 
            style={{ color: color }} 
            className="mb-3 transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 drop-shadow-lg" 
          />
        </motion.div>
        <span className="text-neutral-400 font-medium text-sm group-hover:text-white transition-colors z-10">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

export default Tech;