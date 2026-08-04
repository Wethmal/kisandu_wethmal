import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const educations = [
  {
    period: "2024 - Present",
    degree: "BSc (Hons) Computer Science with Applied Artificial Intelligence",
    school: "Coventry University London | School of Computing",
    gpa: "3.82",
    gpaMax: "4.00"
  },
  {
    period: "2022 - 2024",
    degree: "Advanced Diploma in Software Engineering",
    school: "National Institute Of Business Management | School of Computing",
    gpa: "3.64",
    gpaMax: "4.00"
  },
  {
    period: "2022 - On Hold",
    degree: "BSc (Hons) in Health Information and Communication Technology",
    school: "University of Kelaniya | GWUIM",
    gpa: "3.45",
    gpaMax: "4.00"
  },
  {
    period: "2020 - 2021",
    degree: "Assured Diploma in Information Technology",
    school: "Esoft Metro Campus | School of Computing",
    gpa: "3.50",
    gpaMax: "4.00"
  }
];

const Education = () => {
  const containerRef = useRef(null);

  // Replaced GSAP with Framer Motion for scroll animations

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 px-6 overflow-hidden flex justify-center bg-gray-50 border-t border-gray-100" id="education">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
            Academic <span className="text-gray-300">Journey.</span>
          </h2>
          <div className="w-16 h-1.5 bg-violet-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)]"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-6 md:left-12 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" 
          />

          <div className="space-y-12">
            {educations.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 80, damping: 15 }}
                className="edu-card relative flex items-start pl-16 md:pl-28 group"
              >
                {/* Timeline Icon */}
                <div className="absolute left-6 md:left-12 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:border-violet-500 group-hover:bg-violet-50 transition-colors duration-300 z-10">
                  <GraduationCap className="w-5 h-5 text-gray-400 group-hover:text-violet-600 transition-colors" />
                </div>

                {/* Card Content */}
                <div className="w-full bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/0 group-hover:bg-violet-500/5 blur-3xl rounded-full transition-colors duration-500 pointer-events-none" />

                  <span className="inline-block px-4 py-1.5 bg-gray-50 text-xs font-black tracking-[0.2em] text-gray-500 mb-4 rounded-lg group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors">
                    {item.period}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black leading-tight group-hover:text-violet-600 transition-colors">
                    {item.degree}
                  </h3>
                  
                  <p className="text-gray-500 text-lg font-medium mb-8">
                    {item.school}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                       {/* Animated progress circle indicator (css only for now) */}
                       <div className="w-12 h-12 rounded-full border-[3px] border-gray-100 flex items-center justify-center relative">
                         <svg className="absolute inset-0 w-full h-full -rotate-90">
                           <circle 
                             cx="24" cy="24" r="21" 
                             fill="none" 
                             stroke="currentColor" 
                             strokeWidth="3" 
                             className="text-violet-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out stroke-dasharray-[132] stroke-dashoffset-[132] group-hover:stroke-dashoffset-[0]" 
                           />
                         </svg>
                         <span className="text-[10px] font-black text-gray-600">GPA</span>
                       </div>
                       <div className="flex flex-col">
                         <span className="text-xl font-bold text-black leading-none">{item.gpa}</span>
                         <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">/ {item.gpaMax}</span>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
