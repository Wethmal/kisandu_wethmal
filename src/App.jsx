import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import FloatingActions from './components/FloatingActions';
import Chatbot from './components/Chatbot';
import CharacterCursor from './components/CharacterCursor';
import useVisitorNotification from './hooks/useVisitorNotification';
import { GithubIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from './components/SocialIcons';

function App() {
  useVisitorNotification();
  
  return (
    <div className="relative w-full">
      <CharacterCursor />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Skills />
        <div className="bg-gray-50 border-y border-gray-100">
          <Experience />
        </div>
        <Education />
        <div className="bg-white border-t border-gray-100 mt-20">
          <ContactForm />
        </div>
      </main>

      <FloatingActions />
      <Chatbot />

      <footer className="py-12 bg-black text-white flex flex-col items-center gap-8 border-t border-gray-800">
        
        <p className="text-xs tracking-widest font-bold opacity-50 uppercase">
          © {new Date().getFullYear()} KISANDU WETHMAL. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}

export default App;
