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
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-white" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">My Tech Stack</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Technologies and tools I have mastered to build scalable, robust, and AI-integrated applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 md:p-8 border border-gray-200 hover:border-black transition-colors duration-300 group"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-light-bg flex items-center justify-center text-sm group-hover:bg-black group-hover:text-white transition-colors">0{idx+1}</span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-light-bg text-sm font-medium rounded-sm hover:-translate-y-1 transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
