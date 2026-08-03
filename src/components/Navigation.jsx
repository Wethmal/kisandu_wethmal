import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'about', label: 'Profile' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'services', label: 'Services' }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for glass effect
      setIsScrolled(window.scrollY > 50);

      // Dynamic highlighting
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let currentActive = '';
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentActive = section.id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto w-full px-6 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl border border-gray-100 shadow-sm rounded-full py-3 px-6 mx-4 w-[calc(100%-2rem)]' : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <span className="font-outfit font-black tracking-tighter text-xl text-black">
            AI Engineer<span className="text-violet-600">.</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-2 p-1 bg-gray-50/50 backdrop-blur-md rounded-full border border-gray-100/50">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded-full z-10 ${
                activeSection === link.id ? 'text-violet-600' : 'text-gray-500 hover:text-black'
              }`}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-100 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="px-6 py-2.5 bg-black text-white rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
        >
          HIRE ME
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
