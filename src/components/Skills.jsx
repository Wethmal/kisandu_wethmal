import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { 
    category: "Languages", 
    skills: ["Python", "Java", "C#", "JavaScript", "HTML", "SQL", "PHP"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  { 
    category: "Web & API", 
    skills: ["React.js", "Node.js", "Spring Boot", "REST APIs"],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  { 
    category: "Mobile Tech", 
    skills: ["React Native", "Android Java"],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  { 
    category: "Databases", 
    skills: ["MySQL", "MS SQL", "PostgreSQL", "Firebase", "MongoDB"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  { 
    category: "Tools & IDEs", 
    skills: ["Git", "Postman", "Figma", "VS Code", "IntelliJ IDEA", "Android Studio"],
    colSpan: "col-span-1 md:col-span-3 lg:col-span-3",
  },
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-card", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 px-6 overflow-hidden flex justify-center bg-white" id="skills">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
            Tech <span className="text-gray-300">Stack.</span>
          </h2>
          <div className="w-24 h-1.5 bg-violet-500 mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-min">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className={`bento-card ${group.colSpan} p-8 rounded-3xl group relative overflow-hidden bg-white border border-gray-100 shadow-sm`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-4 text-black relative z-10">
                <span className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-sm font-black text-gray-400 group-hover:bg-violet-50 group-hover:text-violet-600 group-hover:border-violet-200 transition-all duration-300">
                  {idx + 1}
                </span>
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {group.skills.map(skill => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:text-violet-700 hover:border-violet-300 hover:bg-violet-50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
