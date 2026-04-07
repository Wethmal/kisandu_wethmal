import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, index, onClick }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    setMousePos({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 p-8 bg-white/40 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] group-hover:bg-white/60">
        
        {/* Floating Sparkles on hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence>
            {isHovered && [1, 2, 3].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0.5, 1.2, 0.5],
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                  rotate: 360
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="absolute text-violet-400 text-lg left-1/2 top-1/2"
              >
                ✦
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-start justify-between mb-6 relative z-10">
          <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-violet-600 transition-colors">
            {project.name}
          </h3>
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-black shadow-lg transform group-hover:scale-110 group-hover:bg-violet-600 transition-all duration-300">
            {index + 1}
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors relative z-10">
          {project.desc}
        </p>

        <div className="flex items-center gap-3 relative z-10">
          <span className="text-[10px] font-black uppercase text-violet-500 tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
            View Screenshots
          </span>
          <div className="h-[1px] flex-1 bg-gray-100 group-hover:bg-violet-200 transition-colors" />
          <motion.div 
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-violet-600 font-bold"
          >
            →
          </motion.div>
        </div>

        {/* Subtle Image Ghost Background */}
        <div 
          className="absolute right-[-10%] bottom-[-10%] w-1/2 h-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none -rotate-12 group-hover:rotate-0 group-hover:scale-110"
          style={{
            backgroundImage: `url(${project.images?.[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Outer Border Glow Overlay */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
    </motion.div>
  );
};

export default ProjectCard;
