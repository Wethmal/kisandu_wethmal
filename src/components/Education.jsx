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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full py-12 md:py-32 px-6 md:px-8 overflow-hidden flex justify-center" id="education">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale opacity-30 md:opacity-100"
      >
        <source src="https://res.cloudinary.com/djud71kro/video/upload/q_auto/f_auto/v1775473212/study_ieefgv.mp4" type="video/mp4" />
      </video>
      {/* Darker Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/85 md:bg-black/70 z-0 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Academic <span className="text-violet-500 underline decoration-white/20 underline-offset-8">Journey.</span>
          </h2>
          <div className="w-20 h-1.5 bg-violet-500 mx-auto mt-8 shadow-[0_0_20px_rgba(139,92,246,0.6)]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        >
          {educations.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-2xl p-8 md:p-12 shadow-2xl border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all group rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-black">0{idx + 1}</span>
              </div>
              
              <span className="inline-block px-4 py-1.5 bg-violet-500/20 text-xs font-black tracking-[0.2em] text-violet-300 mb-6 border border-violet-500/30 rounded-lg">
                {item.period}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-violet-400 transition-colors">{item.degree}</h3>
              <p className="text-gray-400 text-lg font-medium mb-6">{item.school}</p>
              
              <div className="inline-flex items-center gap-3 text-sm font-bold text-white bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md group-hover:border-violet-500/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                {item.gpa}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
