import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Instagram } from 'lucide-react';

const Footer = () => {
  
  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Wethmal", color: "hover:text-gray-100" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kisandu-wethmal-9ba67633b/", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://twitter.com/yourusername", color: "hover:text-sky-400" },
    { icon: Instagram, href: "https://instagram.com/yourusername", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="relative w-full bg-[#0d0b16] border-t border-neutral-800 text-neutral-400 pt-20 pb-10 overflow-hidden">
      
      {/* Background Glow (Optional) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- TOP SECTION: CTA & BRAND --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          {/* Brand / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Let's Connect
            </h2>
            <p className="text-lg text-neutral-400 max-w-sm">
              Creating digital experiences that matter. Have a project in mind?
            </p>
          </div>

          {/* Call to Action Button */}
          <motion.a 
            href="mailto:kisanduofficially@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={20} /> Say Hello
            </span>
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.a>
        </div>

        {/* --- MIDDLE SECTION: LINKS & SOCIALS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-neutral-800 pt-10">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#tech" className="hover:text-purple-400 transition-colors">Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white font-semibold text-lg">Socials</h3>
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`text-2xl transition-colors duration-300 ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 3: Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Back to Top
              <span className="p-2 bg-neutral-800 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <ArrowUp size={18} />
              </span>
            </button>
            <p className="text-sm text-neutral-600 mt-2">
              Based in Sri Lanka
            </p>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT --- */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Kisandu Wethmal. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;