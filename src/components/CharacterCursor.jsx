import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const characters = ['✦', '✧', '⋆', 'x', '+', '·'];

const CharacterCursor = () => {
  const [particles, setParticles] = useState([]);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const lastMouse = useRef({ x: 0, y: 0 });
  const particleId = useRef(0);

  useEffect(() => {
    // Check if device supports hover
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      const dx = clientX - lastMouse.current.x;
      const dy = clientY - lastMouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 30) {
        lastMouse.current = { x: clientX, y: clientY };
        
        const character = characters[Math.floor(Math.random() * characters.length)];
        const id = particleId.current++;
        
        const angle = Math.random() * Math.PI * 2;
        const distanceRandom = Math.random() * 50 + 20;
        const driftX = Math.cos(angle) * distanceRandom;
        const driftY = Math.sin(angle) * distanceRandom;

        const newParticle = {
          id,
          x: clientX,
          y: clientY,
          character,
          driftX,
          driftY,
        };

        setParticles((prev) => [...prev.slice(-30), newParticle]);

        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0.2, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: Math.random() * 1.5 + 0.5,
              x: p.x + p.driftX, 
              y: p.y + p.driftY,
              rotate: Math.random() * 180 - 90
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute text-violet-400 font-bold mix-blend-screen"
            style={{ 
              textShadow: '0 0 10px rgba(139, 92, 246, 0.8)',
              fontSize: '1.2rem',
              left: '-0.6rem',
              top: '-0.6rem',
            }}
          >
            {p.character}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Main Cursor Core */}
      <motion.div 
        className="absolute top-0 left-0 w-3 h-3 bg-violet-400 rounded-full mix-blend-screen pointer-events-none shadow-[0_0_15px_rgba(139,92,246,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          marginLeft: '-0.375rem',
          marginTop: '-0.375rem',
        }}
      />
    </div>
  );
};

export default CharacterCursor;
