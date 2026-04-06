import React from 'react';
import { Download, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-6 left-6 lg:bottom-10 lg:left-10 z-50 flex flex-col gap-4"
    >
      <a
        href="/kisandu-wethmal.pdf"
        download
        className="w-12 h-12 bg-white text-black border border-gray-200 shadow-lg flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-110 group relative"
      >
        <Download size={20} />
        <span className="absolute left-14 bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Download CV
        </span>
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=94769930678"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 bg-[#25D366] text-white shadow-lg flex items-center justify-center rounded-full hover:bg-[#128C7E] transition-all transform hover:scale-110 group relative"
      >
        <Phone size={20} />
        <span className="absolute left-14 bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Me
        </span>
      </a>
    </motion.div>
  );
};

export default FloatingActions;
