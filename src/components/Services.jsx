import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  ShoppingCart, 
  User, 
  Database,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    title: "Web App Development",
    description: "Scalable, high-performance web applications built with modern frameworks and interactive user interfaces.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform iOS and Android development for seamless, high-performance mobile experiences.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-violet-600 to-indigo-500"
  },
  {
    title: "Software Solutions",
    description: "Custom enterprise software, automation tools, and robust backend systems tailored to your business needs.",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "E-Commerce Systems",
    description: "Custom online stores with secure payment integrations, inventory management, and smooth shopping flows.",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Professional Portfolios",
    description: "Stunning, interactive portfolios for individuals and businesses to showcase work and drive engagement.",
    icon: <User className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Full-Stack Systems",
    description: "End-to-end system architecture, database design, and turnkey project building for complex requirements.",
    icon: <Database className="w-8 h-8" />,
    color: "from-amber-500 to-orange-400"
  }
];

const Services = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create slightly different parallax speeds for each column
  const yCol1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden" id="services">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Our <span className="text-violet-600">Services.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            I provide specialized technology solutions to help individuals and businesses build, scale, and innovate in the digital landscape.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center animate-spin-slow">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                    <ArrowUpRight className="text-white w-8 h-8" />
                </div>
            </div>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {services.map((service, index) => {
          // Determine which column this item belongs to (0, 1, or 2)
          const colIndex = index % 3;
          const yTransform = colIndex === 0 ? yCol1 : colIndex === 1 ? yCol2 : yCol3;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{ y: yTransform }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-8 transform group-hover:rotate-6 transition-transform duration-500`}>
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-gray-800 transition-colors group-hover:bg-transparent group-hover:text-white">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-violet-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                {service.description}
              </p>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-black group-hover:text-violet-600 transition-all"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                 <div className={`w-24 h-24 blur-3xl bg-gradient-to-br ${service.color} rounded-full`} />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  );
};

export default Services;
