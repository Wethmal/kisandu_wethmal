import React from 'react';
import { motion } from 'framer-motion';

const educations = [
  {
    period: "2023 - Present",
    degree: "BSc (Hons) Computer Science with Applied Artificial Intelligence",
    school: "Coventry University London | School of Computing",
    gpa: "Current GPA: 3.82 / 4.00"
  },

  {
    period: "2022 - 2024",
    degree: "Advanced Diploma in Software Engineering",
    school: "National Institute Of Business Management | School of Computing",
    gpa: "GPA: 3.64 / 4.00"
  },

  {
    period: "2022 - On Hold",
    degree: "BSc (Hons) in Health Information and Communication Technology",
    school: "University of Kelaniya | GWUIM",
    gpa: "Year 1 GPA: 3.45 / 4.00"
  },

  {
    period: "2020 - 2021",
    degree: "Assured Diploma in Information Technology",
    school: "Esoft Metro Campus | School of Computing",
    gpa: "GPA: 3.50 / 4.00"
  }
];

const Education = () => {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden flex justify-center" id="education">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/djud71kro/video/upload/q_auto/f_auto/v1775473212/study_ieefgv.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none"></div>

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-md">Education</h2>
          <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md p-6 md:p-10 shadow-2xl border border-white/10 hover:border-violet-500 hover:bg-white/10 transition-all duration-300 rounded-lg group text-white"
            >
              <span className="inline-block px-3 py-1 bg-violet-500/20 text-xs md:text-sm font-bold tracking-widest text-violet-300 mb-4 border border-violet-500/30 rounded-sm">
                {item.period}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight group-hover:text-violet-200 transition-colors">{item.degree}</h3>
              <p className="text-gray-300 font-medium mb-4">{item.school}</p>
              <div className="text-sm font-bold text-white bg-black/40 border-white/10 inline-block px-3 py-2 border rounded-sm">
                {item.gpa}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
