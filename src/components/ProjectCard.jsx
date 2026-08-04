import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const techStack = project.stack ? project.stack.split(',').map(s => s.trim()) : [];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20, delay: (index % 2) * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer h-full"
    >
      <div className="minimal-card h-full p-6 md:p-8 rounded-[2rem] bg-white relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] group-hover:-translate-y-2 border border-gray-100 flex flex-col">
        
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-sm font-black text-gray-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
            0{index + 1}
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-violet-50 hover:text-violet-600 transition-colors">
              <i className="devicon-github-original text-[18px]"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-violet-50 hover:text-violet-600 transition-colors">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* Project Image Box */}
        <div 
          className="w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-8 relative z-10 bg-gray-50"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.images?.[0] ? (
             <img 
               src={project.images[0]} 
               alt={project.name} 
               className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700" 
             />
          ) : (
             <div className="w-full h-full flex items-center justify-center text-gray-300">No Image</div>
          )}
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/10 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col z-10" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-3 group-hover:text-violet-600 transition-colors">
            {project.name}
          </h3>
          
          <p className="text-gray-500 leading-relaxed font-light mb-6 line-clamp-3">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.slice(0, 4).map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] uppercase font-bold tracking-wider rounded-lg">
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-400 text-[10px] uppercase font-bold tracking-wider rounded-lg">
                +{techStack.length - 4}
              </span>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
