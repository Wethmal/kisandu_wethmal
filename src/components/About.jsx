import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform, animate, useScroll } from 'framer-motion';

const StatCounter = ({ end, suffix = "", text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, end]);

  return (
    <div className="flex flex-col">
      <span ref={ref} className="text-5xl md:text-6xl font-black tracking-tighter text-black">
        {count}{suffix}
      </span>
      <span className="text-xs tracking-[0.2em] uppercase text-gray-400 font-bold mt-2">{text}</span>
    </div>
  );
};

const WordReveal = ({ text, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 60%"]
  });
  
  const words = text.split(" ");
  
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        
        // Highlight specific keywords for effect
        const isHighlight = word.includes("Software") || word.includes("Engineering") || word.includes("Applied") || word.includes("AI");
        
        return (
          <motion.span 
            key={i} 
            style={{ opacity }} 
            className={`inline-block mr-2 lg:mr-3 ${isHighlight ? 'text-violet-600 font-bold' : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="relative py-24 md:py-40 px-6 max-w-6xl mx-auto w-full z-10 bg-white" id="about">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row gap-16 md:gap-24 items-start"
      >
        {/* LEFT COLUMN: Large Heading & Stats */}
        <motion.div variants={itemVariants} className="flex-1 w-full relative">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter leading-none text-black">
              About<br/>
              <span className="text-gray-300">Me.</span>
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
              style={{ originX: 0 }}
              className="w-24 h-1.5 bg-violet-500 rounded-full"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-10 mt-12 md:mt-24">
            <StatCounter end={3} suffix="+" text="Years Exp" />
            <StatCounter end={20} suffix="+" text="Projects" />
            <StatCounter end={10} suffix="+" text="Technologies" />
            <StatCounter end={100} suffix="%" text="Passion" />
          </div>
        </motion.div>
        
        {/* RIGHT COLUMN: Editorial Text */}
        <motion.div className="flex-[1.5] w-full flex flex-col justify-center space-y-10 md:space-y-12">
          
          <WordReveal 
            text="I am a Software Engineering & Applied AI undergraduate, focused on building highly scalable ecosystems and intelligent digital products." 
            className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight tracking-tight"
          />
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Specialized in integrating Machine Learning models into robust, real-world applications. With a proven track record of architecting end-to-end solutions, I thrive on turning complex problems into elegant, minimalist software.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
            {["Software Engineering", "AI Integration", "Full Stack Development", "Problem Solving"].map((tag, idx) => (
              <motion.span 
                key={idx} 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold tracking-wide text-black hover:border-violet-500 hover:text-violet-600 transition-colors bg-white shadow-sm cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
