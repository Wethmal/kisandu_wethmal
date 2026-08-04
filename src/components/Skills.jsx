import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, Smartphone, Database, Wrench } from 'lucide-react';

const skillsData = [
  { 
    category: "Languages", 
    icon: Code2,
    skills: ["Python", "Java", "C#", "JavaScript", "HTML", "SQL", "PHP"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    color: "violet",
  },
  { 
    category: "Web & API", 
    icon: Server,
    skills: ["React.js", "Node.js", "Spring Boot", "REST APIs"],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    color: "blue",
  },
  { 
    category: "Mobile Tech", 
    icon: Smartphone,
    skills: ["React Native", "Android Java"],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    color: "emerald",
  },
  { 
    category: "Databases", 
    icon: Database,
    skills: ["MySQL", "MS SQL", "PostgreSQL", "Firebase", "MongoDB"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    color: "orange",
  },
  { 
    category: "Tools & IDEs", 
    icon: Wrench,
    skills: ["Git", "Postman", "Figma", "VS Code", "IntelliJ IDEA", "Android Studio"],
    colSpan: "col-span-1 md:col-span-3 lg:col-span-3",
    color: "pink",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 px-6 overflow-hidden flex justify-center bg-gray-50/50" id="skills">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-300/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-300/20 blur-[120px]" 
        />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gray-900">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Stack.</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-blue-600 mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl text-lg font-medium">Technologies and tools I use to build robust and scalable solutions.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-min"
        >
          {skillsData.map((group, idx) => {
            const Icon = group.icon;
            
            const colorMap = {
              violet: { 
                bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', 
                hoverBg: 'hover:bg-violet-600', hoverText: 'hover:text-white', hoverBorder: 'hover:border-violet-600',
                glow: 'hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.25)]',
                iconGlow: 'group-hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.4)]'
              },
              blue: { 
                bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', 
                hoverBg: 'hover:bg-blue-600', hoverText: 'hover:text-white', hoverBorder: 'hover:border-blue-600',
                glow: 'hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.25)]',
                iconGlow: 'group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]'
              },
              emerald: { 
                bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', 
                hoverBg: 'hover:bg-emerald-600', hoverText: 'hover:text-white', hoverBorder: 'hover:border-emerald-600',
                glow: 'hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.25)]',
                iconGlow: 'group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]'
              },
              orange: { 
                bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', 
                hoverBg: 'hover:bg-orange-600', hoverText: 'hover:text-white', hoverBorder: 'hover:border-orange-600',
                glow: 'hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.25)]',
                iconGlow: 'group-hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)]'
              },
              pink: { 
                bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-100', 
                hoverBg: 'hover:bg-pink-600', hoverText: 'hover:text-white', hoverBorder: 'hover:border-pink-600',
                glow: 'hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.25)]',
                iconGlow: 'group-hover:shadow-[0_0_20px_-5px_rgba(236,72,153,0.4)]'
              },
            };
            const theme = colorMap[group.color];

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`bento-card ${group.colSpan} p-8 md:p-10 rounded-[2.5rem] group relative bg-white/80 backdrop-blur-xl border border-gray-100 shadow-xl shadow-gray-200/40 transition-all duration-500 ${theme.glow}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${theme.bg} ${theme.border} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${theme.iconGlow}`}>
                    <Icon className={`w-7 h-7 ${theme.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.span 
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.15 + (0.05 * skillIdx), type: "spring" }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-5 py-2.5 bg-gray-50/80 backdrop-blur-md border border-gray-200/80 text-gray-700 text-sm font-semibold rounded-xl transition-all duration-300 cursor-default shadow-sm ${theme.hoverBg} ${theme.hoverText} ${theme.hoverBorder}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
