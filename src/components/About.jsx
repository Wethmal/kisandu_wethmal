import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const StatCounter = ({ end, suffix = "", text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView && ref.current) {
      gsap.fromTo(ref.current, 
        { innerText: 0 }, 
        {
          innerText: end,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          onUpdate: function() {
            ref.current.innerHTML = this.targets()[0].innerText + suffix;
          }
        }
      );
    }
  }, [isInView, end, suffix]);

  return (
    <div className="flex flex-col">
      <span ref={ref} className="text-5xl md:text-6xl font-black tracking-tighter text-black">0{suffix}</span>
      <span className="text-xs tracking-[0.2em] uppercase text-gray-400 font-bold mt-2">{text}</span>
    </div>
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
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
          <motion.p variants={itemVariants} className="text-xl md:text-3xl font-medium text-gray-900 leading-tight tracking-tight">
            I am a <span className="relative inline-block text-violet-600">
              Software Engineering & Applied AI
              <span className="absolute bottom-1 left-0 w-full h-3 bg-violet-100 -z-10 rounded-sm"></span>
            </span> undergraduate, focused on building highly scalable ecosystems and intelligent digital products.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Specialized in integrating Machine Learning models into robust, real-world applications. With a proven track record of architecting end-to-end solutions, I thrive on turning complex problems into elegant, minimalist software.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
            {["Software Engineering", "AI Integration", "Full Stack Development", "Problem Solving"].map((tag, idx) => (
              <span key={idx} className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold tracking-wide text-black hover:border-violet-500 hover:text-violet-600 transition-colors bg-white shadow-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
