import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const ruleBasedResponses = {
  "skills": "I am proficient in React, Node.js, Spring Boot, Python, and specialize in integrating Machine Learning models.",
  "contact": "You can reach me at kisanduofficially@gmail.com, or use the WhatsApp button on the screen! (+94 76 993 0678)",
  "education": "I am currently pursuing a BSc (Hons) in Software Engineering at Coventry University London.",
  "experience": "I am working as a Software Engineer Intern at the Ministry of Digital Economy, focusing on Full-Stack & AI Development."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am Kisandu\'s assistant. What would you like to know?' }
  ]);

  const handleOptionClick = (key) => {
    // Add user message
    const userDisplayMap = {
      skills: "Tell me about your tech stack and skills.",
      contact: "How can I contact you?",
      education: "Where did you study?",
      experience: "Tell me about your work experience."
    };
    
    setMessages(prev => [...prev, { sender: 'user', text: userDisplayMap[key] }]);
    
    // Simulate delay
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: ruleBasedResponses[key] }]);
    }, 600);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageSquare />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-6 lg:right-10 z-50 w-[calc(100vw-2rem)] md:w-80 lg:w-96 glass bg-white shadow-2xl overflow-hidden flex flex-col rounded-xl border border-gray-100"
          >
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <div className="font-bold tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Kisandu's Bot
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-4 bg-gray-50 flex flex-col">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 text-sm rounded-2xl ${msg.sender === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white text-black border border-gray-200 shadow-sm rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-gray-100 flex flex-wrap gap-2">
              <button onClick={() => handleOptionClick('skills')} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors">
                Skills Setup
              </button>
              <button onClick={() => handleOptionClick('experience')} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors">
                Experience
              </button>
              <button onClick={() => handleOptionClick('contact')} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors">
                Contact Info
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
