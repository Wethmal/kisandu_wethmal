import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react'; 
import profilePic from '../assets/mypic.png';

const My = () => {
  return (
    // CHANGE 1: Added 'w-screen' to force full width and 'overflow-hidden' to prevent scrollbars
    <div className="w-screen min-h-screen bg-[#0d0b16] text-white flex items-center justify-center px-6 md:px-20 relative overflow-hidden">
      
      {/* 1. The Main Container */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full z-10">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="w-full md:w-1/2 space-y-6 mt-10 md:mt-0">
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
            MY NAME IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 opacity-30 stroke-white">
             LILON MACWAN
            </span>
          </h1>
          
          <p className="text-xl text-gray-300">
            Web Designer based in <span className="text-white font-semibold">USA</span>
          </p>

          {/* The Button */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-700 px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition">
            Work with me <ArrowUpRight size={20} />
          </button>

          {/* Contact Info Footer */}
          <div className="flex flex-col md:flex-row gap-6 pt-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={16} /> +123 45 666 7788
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> shtheme@gmail.com
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: IMAGE & BACKGROUND GLOW --- */}
        <div className="mt-12 w-full md:w-1/2 flex justify-center items-center relative">
          
          {/* THE ORANGE CIRCLE */}
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-b from-yellow-600 to-orange-800 rounded-full blur-sm -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          

          {/* CHANGE 2: Updated src to point to the file in your 'public' folder */}
          <img 
            src="profilePic" 
            alt="Profile" 
            className="relative z-20 w-full max-w-md object-cover drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Social Sidebar (Right Edge) */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 text-gray-400">
         <div className="w-1 h-12 bg-gray-700 mx-auto mb-2"></div>
         <span>FB</span>
         <span>IN</span>
         <span>TW</span>
      </div>

    </div>
  );
};

export default My;