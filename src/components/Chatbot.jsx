import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const ruleBasedResponses = {
  "skills": "I am proficient in React, Node.js, Spring Boot, Python, and specialize in integrating Machine Learning models.",
  "contact": "You can reach me at kisanduofficially@gmail.com, or use the WhatsApp button on the screen! (+94 76 993 0678)",
  "education": "I am currently pursuing a BSc (Hons) in Software Engineering at Coventry University London.",
  "experience": "I am working as a Software Engineer Intern at the Ministry of Digital Economy, focusing on Full-Stack & AI Development.",
  "default": "Thanks for your message! I'm a pre-programmed demo bot so I might not understand everything perfectly. Feel free to ask about my skills, education, experience, or for contact info!"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am Kisandu\'s assistant. You can select an option below or type your question!' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleOptionClick = (key) => {
    const userDisplayMap = {
      skills: "Tell me about your tech stack and skills.",
      contact: "How can I contact you?",
      education: "Where did you study?",
      experience: "Tell me about your work experience."
    };
    
    setMessages(prev => [...prev, { sender: 'user', text: userDisplayMap[key] }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: ruleBasedResponses[key] }]);
    }, 600);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputText('');

    // Determine bot response using basic keyword matching
    setTimeout(() => {
      let responseKey = 'default';
      const lowerInput = userMessage.toLowerCase();
      
      if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('react') || lowerInput.includes('stack')) {
        responseKey = 'skills';
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('whatsapp') || lowerInput.includes('phone') || lowerInput.includes('number')) {
        responseKey = 'contact';
      } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('degree') || lowerInput.includes('university') || lowerInput.includes('college')) {
        responseKey = 'education';
      } else if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('intern') || lowerInput.includes('project')) {
        responseKey = 'experience';
      } else if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Hello! How can I help you today? Please ask me about my profile.' }]);
        return;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: ruleBasedResponses[responseKey] }]);
    }, 800);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageSquare />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-6 lg:right-10 z-[100] w-[calc(100vw-2rem)] md:w-80 lg:w-96 glass bg-white shadow-2xl overflow-hidden flex flex-col rounded-xl border border-gray-100 max-h-[80vh]"
          >
            <div className="bg-black text-white p-4 flex justify-between items-center shadow-md z-10">
              <div className="font-bold tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Kisandu's Assistant
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 flex flex-col custom-scrollbar" style={{ height: '320px' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, originY: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`max-w-[85%] p-3 text-sm rounded-2xl ${msg.sender === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white text-black border border-gray-200 shadow-sm rounded-bl-none'}`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              {/* Dummy div to scroll to */}
              <div ref={messagesEndRef} className="h-1 w-full" />
            </div>

            {/* Quick Option Buttons */}
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto whitespace-nowrap hide-scrollbar">
              <button onClick={() => handleOptionClick('skills')} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors shrink-0">
                Skills Setup
              </button>
              <button onClick={() => handleOptionClick('experience')} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors shrink-0">
                Experience
              </button>
              <button onClick={() => handleOptionClick('contact')} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors shrink-0">
                Contact Info
              </button>
            </div>

            {/* Real Text Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2 shrink-0">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 text-sm rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-black/5 transition-all"
              />
              <button 
                type="submit" 
                disabled={!inputText.trim()} 
                className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center shrink-0 disabled:opacity-50 transition-opacity"
              >
                <Send size={16} className={inputText.trim() ? "ml-[-2px]" : ""} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
