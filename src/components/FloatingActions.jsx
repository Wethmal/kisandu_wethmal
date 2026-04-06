import React, { useState } from 'react';
import { Download, Phone } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { LinkedInIcon, GithubIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const socials = [
    { icon: <LinkedInIcon size={20} />, href: "https://www.linkedin.com/in/kisandu-wethmal-9ba67633b/", label: "LinkedIn", color: "bg-[#0077B5]" },
    { icon: <GithubIcon size={20} />, href: "https://github.com/Wethmal", label: "GitHub", color: "bg-[#333]" },
    { icon: <InstagramIcon size={20} />, href: "https://www.instagram.com/_kishu_x_?igsh=eWV4cWE2eTdqNWFr&utm_source=qr", label: "Instagram", color: "bg-[#E4405F]" },
    { icon: <FacebookIcon size={20} />, href: "https://www.facebook.com/share/1DzbCzXVqy/?mibextid=wwXIfr", label: "Facebook", color: "bg-[#1877F2]" },
  ];

  const variants = {
    visible: { opacity: 1, x: 0, scale: 1 },
    hidden: { opacity: 0, x: -100, scale: 0.8 },
  };

  return (
    <motion.div
      variants={variants}
      animate={isVisible ? "visible" : "hidden"}
      initial="visible"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed bottom-6 left-6 lg:bottom-10 lg:left-10 z-50 flex flex-col gap-4"
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className={`w-10 h-10 ${social.color} text-white shadow-lg flex items-center justify-center rounded-full hover:scale-110 transition-all group relative`}
        >
          {social.icon}
          <span className="absolute left-12 bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {social.label}
          </span>
        </a>
      ))}

      <div className="w-10 h-[1px] bg-gray-300 my-1" />

      <a
        href="/kisandu-wethmal.pdf"
        download
        className="w-10 h-10 bg-white text-black border border-gray-200 shadow-lg flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-110 group relative"
      >
        <Download size={18} />
        <span className="absolute left-12 bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Download CV
        </span>
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=94769930678"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 bg-[#25D366] text-white shadow-lg flex items-center justify-center rounded-full hover:bg-[#128C7E] transition-all transform hover:scale-110 group relative"
      >
        <Phone size={18} />
        <span className="absolute left-12 bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Me
        </span>
      </a>
    </motion.div>
  );
};

export default FloatingActions;
