import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-5xl mx-auto" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-12 items-start"
      >
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">About<br/>Me.</h2>
          <div className="w-16 h-1 bg-black mb-8"></div>
        </div>
        
        <div className="flex-[2_2_0%] space-y-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed">
          <p>
            I am an innovative Software Engineering & Applied AI Undergraduate with hands-on experience building scalable web and mobile ecosystems. 
          </p>
          <p>
            Proficient in Full-Stack development (React, Node.js, Spring Boot, PHP) and specialized in integrating Machine Learning models into real-world applications. Proven track record of architecting end-to-end solutions—from RESTful microservices and MySQL databases to AI-powered predictive systems and Computer Vision tools.
          </p>
          <p>
            Passionate about leveraging ML and Data Science to build smarter, more efficient SaaS products and automated software solutions. A collaborative Agile team player dedicated to writing clean, maintainable code that solves complex problems.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
