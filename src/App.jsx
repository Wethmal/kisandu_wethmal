import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import FloatingActions from './components/FloatingActions';
import Chatbot from './components/Chatbot';
import CharacterCursor from './components/CharacterCursor';
import useVisitorNotification from './hooks/useVisitorNotification';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useVisitorNotification();

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="relative w-full min-h-screen bg-white text-gray-900 overflow-hidden">
        
        <CharacterCursor />
        
        <header>
          <Navigation />
        </header>

        <main className="relative z-10 flex flex-col items-center w-full">
          <Hero />
          <About />
          <Skills />
          <Services />
          <div className="w-full relative bg-gray-50 border-y border-gray-100">
            <Experience />
          </div>
          <Education />
          <div className="w-full relative mt-20 border-t border-gray-100">
            <ContactForm />
          </div>
        </main>

        <FloatingActions />
        <Chatbot />

        <footer className="relative z-10 py-12 flex flex-col items-center gap-8 border-t border-gray-200 mt-20 bg-white">
          <p className="text-xs tracking-widest font-bold opacity-50 uppercase">
            © {new Date().getFullYear()} KISANDU WETHMAL. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
