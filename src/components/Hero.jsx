import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-10" id="hero">
      {/* Background Decorative Lines */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full border-[1px] border-gray-300 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border-[1px] border-gray-300 pointer-events-none" />

      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full flex flex-col justify-center items-center pointer-events-none -z-10">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="huge-text font-black text-black select-none whitespace-nowrap px-4 block tracking-tighter py-1"
        >
          KISANDU 
        </motion.h1>
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="huge-text font-black text-black select-none whitespace-nowrap px-4 block tracking-tighter py-1 mt-2 md:mt-4 lg:mt-6"
        >
          WETHMAL
        </motion.h2>
      </div>
      {/* Side Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-[5%] xl:left-[10%] top-1/3 flex flex-col gap-2 z-10 hidden lg:block"
      >
        
      </motion.div>

      {/* Center Image */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="relative z-10 mt-0 md:mt-10 lg:mt-16 max-w-sm md:max-w-md lg:max-w-xl mx-auto"
      >
        {/* Replace with your specific cropped transparent image to match the effect perfectly */}
        <img 
          src="/mypic.png" 
          alt="Kisandu Wethmal" 
          className="w-full h-auto object-contain filter drop-shadow-2xl grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
          style={{ maxHeight: '80vh' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-10 lg:right-20 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-sm font-semibold tracking-wide text-gray-600">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={32} className="text-black" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
