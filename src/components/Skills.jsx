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
  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden flex justify-center" id="skills">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/djud71kro/video/upload/q_auto/f_auto/v1775472580/coding_utkqr9.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-md">My Tech Stack</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-shadow">Technologies and tools I have mastered to build scalable, robust, and AI-integrated applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-300 group text-white rounded-lg shadow-2xl"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm group-hover:bg-violet-500 group-hover:text-white transition-colors shadow-[0_0_10px_rgba(139,92,246,0)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)]">0{idx + 1}</span>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-black/40 border border-white/10 text-white/90 text-sm font-medium rounded-md hover:-translate-y-1 hover:border-violet-500 hover:text-white hover:bg-violet-500/20 transition-all cursor-default shadow-sm backdrop-blur-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
