import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [];

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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
          >
            <X size={24} />
          </button>

          {/* Slider Section */}
          <div className="relative flex-1 bg-gray-900 group h-[300px] md:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`${project.name} screenshot ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-white w-6' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-80 p-8 flex flex-col justify-between bg-white">
            <div>
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">{project.name}</h2>
              <p className="text-gray-500 leading-relaxed mb-6">{project.desc}</p>
            </div>
            
            <div className="space-y-4">
              <div className="text-xs font-black uppercase text-violet-500 tracking-widest">Technologes.</div>
              <p className="text-sm font-medium text-gray-700">{project.stack}</p>
              
              <button className="w-full py-4 bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-violet-600 transition-colors rounded-lg mt-4">
                View Live Case.
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
