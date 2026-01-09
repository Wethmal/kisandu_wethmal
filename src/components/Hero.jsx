import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const roles = [
  "Full Stack Developer",
  "Web Designer",
  "Freelancer",
  "Tech Enthusiast",
];

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[loopNum % roles.length];

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 40 : 120);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="border-b border-neutral-900 pb-10 mt-32">
      <div className="flex flex-wrap items-center">
        {/* Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Kishu
            </motion.h1>

            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500
              bg-clip-text text-2xl text-transparent"
            >
              A {displayedText}
            </motion.span>

            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 font-light tracking-tight text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 p-6">
          <div className="flex justify-center ">
            <Spline
        scene="https://prod.spline.design/tN5NOVbbJZYGfw-m/scene.splinecode" 
      />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
