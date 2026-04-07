import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-12 md:py-32 px-6 md:px-8 max-w-6xl mx-auto" id="about">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
      >
        <motion.div variants={itemVariants} className="flex-1 w-full">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-none">
            About<br/>
            <span className="text-violet-500">Me.</span>
          </h2>
          <div className="w-12 h-1.5 bg-black mb-6 md:mb-0"></div>
        </motion.div>
        
        <div className="flex-[2_2_0%] space-y-6 md:space-y-8 text-gray-600 text-lg md:text-2xl font-light leading-relaxed">
          <motion.p variants={itemVariants}>
            I am an innovative <span className="text-black font-semibold">Software Engineering & Applied AI</span> Undergraduate with hands-on experience building scalable web and mobile ecosystems. 
          </motion.p>
          <motion.p variants={itemVariants}>
            Proficient in <span className="text-black font-medium semi-bold underline decoration-violet-300 underline-offset-4">Full-Stack development</span> (React, Node.js, Spring Boot, PHP) and specialized in integrating Machine Learning models into real-world applications. Proven track record of architecting end-to-end solutions—from RESTful microservices and MySQL databases to AI-powered predictive systems and Computer Vision tools.
          </motion.p>
          <motion.p variants={itemVariants}>
            Passionate about leveraging ML and Data Science to build smarter, more efficient SaaS products and automated software solutions. A collaborative Agile team player dedicated to writing clean, maintainable code that solves complex problems.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
