import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";
import profilePic from '../assets/MyPic.png'; 
import myResume from '../assets/mycv.pdf';

const roles = ["Full Stack Developer", "Designer", "Programmer", "Software Engineer"];

const My = () => {
  // --- TYPING ANIMATION LOGIC ---
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayedText(isDeleting 
        ? fullText.substring(0, displayedText.length - 1) 
        : fullText.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); 
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 30 : 150);
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  // --- HTML CODE ---
  return (
    <div id='home' className="mt-15 min-h-screen w-full bg-[#0d0b16] text-white flex items-center justify-center px-6 md:px-20 relative overflow-hidden">
      
      {/* Container */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full z-10 py-12 md:py-0">
        
        {/* --- LEFT SIDE: TEXT --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-20">
          
          <h1 className=" text-4xl md:text-6xl font-bold tracking-wide leading-tight">
            MY NAME IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Kisandu Wethmal
            </span>
          </h1>

          {/* --- ANIMATED TYPING TEXT ADDED HERE --- */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
            I am a <span className="text-pink-500">{displayedText}</span>
            <span className="animate-pulse">|</span> {/* Blinking Cursor */}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300">
            Software Engineering Undergraduate and aspiring Full-Stack Developer 
            with experience in building web and mobile applications using React, 
            Node.js, Spring Boot, PHP, Java, and Android Studio. Passionate about 
            creating scalable solutions with strong knowledge of RESTful APIs, MySQL, 
            SDLC, UI/UX principles, and cloud fundamentals. <br/>
            Web Designer based in <span className="text-white font-semibold">Sri Lanka</span>
          </p>
         
         <div className='flex flex-row gap-4'>
            <a href={myResume} target="_blank" rel="noopener noreferrer" download="Kisandu_CV.pdf" className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-700 px-8 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-200">
            My Resume <ArrowUpRight size={20} />
          </a>

          
          
         </div>
          

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-4 text-sm text-gray-400">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={16} className="text-pink-500" /> +94 76 9930 678
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={16} className="text-pink-500" /> kisanduofficially@gmail.com
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: IMAGE --- */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center relative">
          
         {/* THE GLOW - ANIMATED */}

<motion.div 
  className="absolute top-1/2 left-1/2 md:left-[63%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full blur-[60px] md:blur-[80px] -z-10"
  

  initial={{ x: "-50%", y: "-50%", opacity: 0.5 }} 
  
  
  animate={{ 
    x: "-50%",           
    y: "-50%",              
    opacity: [0.5, 1, 0.5], 
    scale: [1, 1.1, 1]      
  }}
  
  transition={{ 
    duration: 3,            
    repeat: Infinity,       
    ease: "easeInOut"       
  }}
/>
          
          
          <img 
            src={profilePic} 
            alt="Profile" 
            className="md:left-10 relative z-10 w-[100%] md:w-[90%] max-w-sm md:max-w-2xl object-cover drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

    </div>
  );
};

export default My;