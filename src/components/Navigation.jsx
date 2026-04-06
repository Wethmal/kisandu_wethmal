import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto w-full"
    >
      {/* Logo Area */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl tracking-tighter">
          KW
        </div>
        <span className="font-outfit font-bold tracking-tight text-base md:text-lg">DESIGN BY KISANDU</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-gray-500 uppercase">
        <a href="#about" className="hover:text-black transition-colors">Profile</a>
        <span className="text-gray-300">/</span>
        <a href="#skills" className="hover:text-black transition-colors">Skills</a>
        <span className="text-gray-300">/</span>
        <a href="#education" className="hover:text-black transition-colors">Edu</a>
        <span className="text-gray-300">/</span>
        <a href="#projects" className="hover:text-black transition-colors">Projects</a>
      </div>

      {/* CTA Button */}
      <a 
        href="#contact"
        className="px-6 py-2 border-2 border-black rounded-full font-bold text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300"
      >
        HIRE ME
      </a>
    </motion.nav>
  );
};

export default Navigation;
