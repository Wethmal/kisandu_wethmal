import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(textRef.current, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(imageRef.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[80vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-4 sm:pt-10 bg-white" id="hero">
      {/* Premium Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full border-[1px] border-violet-100 pointer-events-none opacity-50" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border-[1px] border-violet-100 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03] pointer-events-none" />
      
      <meta name='impact-site-verification' value='21e8d379-edca-4746-a322-d744a51a7cb7'></meta>
      
      {/* Massive Background Text */}
      <div ref={textRef} className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center pointer-events-none z-0 px-4">
        <motion.h1
          initial={{ y: 80, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="huge-text font-black text-black select-none text-center flex flex-col items-center"
        >
          <span>KISANDU</span>
          <span className="mt-2 md:mt-4">WETHMAL</span>
        </motion.h1>
      </div>

      {/* Center Image - Static with Load Animation only */}
      <motion.div
        ref={imageRef}
        initial={{ y: 80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="relative z-10 mt-0 sm:mt-5 max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
      >
        <img
          src="/mypic.png"
          alt="Kisandu Wethmal - Software Engineering & Applied AI Undergraduate Profile Photo"
          className="w-full h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] grayscale contrast-125 brightness-105 hover:grayscale-0 transition-all duration-1000 pointer-events-none"
          style={{ maxHeight: '75vh' }}
        />
      </motion.div>

      {/* Elegant Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-400">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-violet-500" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
