import React from 'react';
import { motion } from 'framer-motion';

const educations = [
  {
    period: "2023 - Present",
    degree: "BSc (Hons) in Software Engineering",
    school: "Coventry University London | School of Computing",
    gpa: "Current GPA: 3.82 / 4.00"
  },
  {
    period: "2022 - On Hold",
    degree: "BSc (Hons) in Health Information and Communication Technology",
    school: "University of Kelaniya | GWUIM",
    gpa: "Year 1 GPA: 3.45 / 4.00"
  },
  {
    period: "2022 - 2024",
    degree: "Advanced Diploma in Software Engineering",
    school: "National Institute Of Business Management | School of Computing",
    gpa: "GPA: 3.64 / 4.00"
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
    <section className="py-32 bg-light-bg px-8" id="education">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
          <h2 className="text-5xl font-black uppercase tracking-tighter">Education</h2>
          <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-10 shadow-sm border-t-4 border-transparent hover:border-black transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 bg-gray-100 text-sm font-bold tracking-widest text-black mb-4">
                {item.period}
              </span>
              <h3 className="text-2xl font-bold mb-2 leading-tight">{item.degree}</h3>
              <p className="text-gray-500 font-medium mb-4">{item.school}</p>
              <div className="text-sm font-bold text-gray-800 bg-gray-50 inline-block px-3 py-2 border border-gray-100">
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
