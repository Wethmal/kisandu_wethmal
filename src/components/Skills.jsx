import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Programming Languages", skills: ["Python", "Java", "C#", "JavaScript", "HTML", "SQL", "PHP"] },
  { category: "Web Technologies", skills: ["React.js", "Node.js", "Spring Boot"] },
  { category: "Mobile Technologies", skills: ["React Native"] },
  { category: "Databases", skills: ["MySQL", "MS SQL", "PostgreSQL", "Firebase", "MongoDB"] },
  { category: "Tools & Design", skills: ["Git", "Postman", "Figma", "Visual Studio", "VS Code", "IntelliJ IDEA", "Android Studio"] },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative w-full py-12 md:py-32 px-6 md:px-8 overflow-hidden flex justify-center" id="skills">
      {/* Background Video with improved contrast */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 md:opacity-100"
      >
        <source src="https://res.cloudinary.com/djud71kro/video/upload/q_auto/f_auto/v1775472580/coding_utkqr9.mp4" type="video/mp4" />
      </video>
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-black/80 md:bg-black/70 z-0 pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Tech <span className="text-violet-500 underline decoration-white/20 underline-offset-8">Stack.</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Architecting modern solutions with a diverse set of cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-colors group rounded-2xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-xl font-bold mb-8 flex items-center gap-4 text-white">
                <span className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center text-xs font-black text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
                  {idx + 1}
                </span>
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map(skill => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-sm font-medium rounded-lg hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
