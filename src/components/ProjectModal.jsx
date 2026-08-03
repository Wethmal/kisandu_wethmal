import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [];
  const techStack = project.stack ? project.stack.split(',').map(s => s.trim()) : [];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          {/* Slider Section */}
          <div className="relative flex-1 bg-gray-50 group h-[300px] md:h-[600px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {images.length > 0 ? (
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${project.name} screenshot ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-300 font-medium">No Images Available</div>
              )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-gray-800 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-md backdrop-blur-md"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-gray-800 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-md backdrop-blur-md"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Indicator Dots */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'bg-violet-500 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="w-full md:w-[400px] p-10 md:p-12 flex flex-col justify-between bg-white overflow-y-auto">
            <div>
              <h2 className="text-3xl font-black mb-4 tracking-tight text-black">{project.name}</h2>
              <p className="text-gray-500 leading-relaxed font-light mb-8">{project.desc}</p>
              
              <div className="space-y-4">
                <div className="text-[10px] font-black uppercase text-violet-500 tracking-[0.2em]">Technology Stack</div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] uppercase font-bold tracking-wider rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col gap-3">
               <button className="w-full py-4 bg-black text-white font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 hover:bg-violet-600 transition-colors shadow-lg shadow-black/10">
                 <ExternalLink size={18} />
                 Live Demo
               </button>
               <button className="w-full py-4 bg-gray-50 text-black border border-gray-200 font-bold tracking-wide rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                 <Github size={18} />
                 View Source
               </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
