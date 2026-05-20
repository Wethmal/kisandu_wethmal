import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { X, Send } from 'lucide-react';

const ruleBasedResponses = {
  "kisandu": "Kisandu Wethmal is a highly motivated Software Engineering student and AI enthusiast. He is passionate about building scalable web applications, designing elegant user interfaces, and implementing state-of-the-art AI/ML solutions. He is dedicated to transforming innovative ideas into high-performance software!",
  "assistance": "Kisandu can assist you in multiple ways:\n\n🤖 AI & Machine Learning Integration (LLMs, Computer Vision)\n💻 Full-Stack Web Development (React, Node.js, Spring Boot)\n🎨 UI/UX Design & Frontend Redesign\n📱 Mobile App Development & System Architecture\n\nFeel free to ask about his specific skills or contact him to collaborate!",
  "skills": "I am proficient in React, Node.js, Spring Boot, Python, and specialize in integrating Machine Learning models.",
  "contact": "You can reach me at kisanduofficially@gmail.com, or use the WhatsApp button on the screen! (+94 76 993 0678)",
  "education": "I am currently pursuing a BSc (Hons) in Software Engineering at Coventry University London.",
  "experience": "I am working as a Software Engineer Intern at the Ministry of Digital Economy, focusing on Full-Stack & AI Development.",
  "default": "Thanks for your message! I'm Kishu AI, a pre-programmed AI assistant bot. Feel free to ask about Kisandu, Kisandu's assistance, his skills, education, experience, or for contact info!"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150 && !isOpen) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am Kishu AI 🤖.\n\nWould you like to know more about Kisandu or how Kisandu\'s assistance can help you with your next software/AI project?' }
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
      kisandu: "Tell me about Kisandu.",
      assistance: "How can Kisandu assist me?",
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
      
      if (lowerInput.includes('kisandu') && (lowerInput.includes('assist') || lowerInput.includes('help') || lowerInput.includes('service') || lowerInput.includes('work'))) {
        responseKey = 'assistance';
      } else if (lowerInput.includes('assist') || lowerInput.includes('help') || lowerInput.includes('service') || lowerInput.includes('what can you do')) {
        responseKey = 'assistance';
      } else if (lowerInput.includes('kisandu') || lowerInput.includes('who is')) {
        responseKey = 'kisandu';
      } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('react') || lowerInput.includes('stack')) {
        responseKey = 'skills';
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('whatsapp') || lowerInput.includes('phone') || lowerInput.includes('number')) {
        responseKey = 'contact';
      } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('degree') || lowerInput.includes('university') || lowerInput.includes('college')) {
        responseKey = 'education';
      } else if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('intern') || lowerInput.includes('project')) {
        responseKey = 'experience';
      } else if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        setMessages(prev => [...prev, { sender: 'bot', text: "Hello! How can I help you today? Please ask me about Kisandu or how Kisandu's assistance can help you." }]);
        return;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: ruleBasedResponses[responseKey] }]);
    }, 800);
  };

  return (
    <>
      {/* Speech bubble / Tooltip next to the launcher */}
      {!isOpen && isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="fixed bottom-24 right-6 lg:bottom-28 lg:right-10 z-[100] bg-black text-white text-[11px] px-3.5 py-2 rounded-xl shadow-2xl border border-gray-800 flex items-center gap-1.5 pointer-events-none whitespace-nowrap font-medium tracking-wide uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          hello ai kishu ai
          {/* Subtle Speech Bubble Arrow */}
          <div className="absolute bottom-[-5px] right-6 w-2.5 h-2.5 bg-black border-r border-b border-gray-800 rotate-45"></div>
        </motion.div>
      )}

      <motion.button 
        variants={{
          visible: { opacity: 1, y: 0, scale: 1 },
          hidden: { opacity: 0, y: 50, scale: 0.8 }
        }}
        animate={isVisible ? "visible" : "hidden"}
        initial="visible"
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform overflow-hidden border-2 border-black"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img src="/robo-avatar.png" alt="Chat Assistant" className="w-full h-full object-cover transition-transform hover:scale-105" />
          <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white animate-pulse"></span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-6 lg:right-10 z-[100] w-[calc(100vw-2rem)] md:w-80 lg:w-96 glass bg-white shadow-2xl overflow-hidden flex flex-col rounded-xl border border-gray-100 max-h-[80vh]"
          >
            <div className="bg-black text-white p-4 flex justify-between items-center shadow-md z-10">
              <div className="font-bold tracking-wide flex items-center gap-3">
                <div className="relative">
                  <img src="/robo-avatar.png" alt="Robo Assistant" className="w-8 h-8 rounded-full border border-gray-700 object-cover" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border border-black animate-pulse"></span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Kishu AI</div>
                  <div className="text-[10px] text-green-400 font-normal">Online & Ready to Help</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 flex flex-col custom-scrollbar" style={{ height: '320px' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && (
                    <img src="/robo-avatar.png" alt="Bot Avatar" className="w-7 h-7 rounded-full object-cover shrink-0 border border-gray-200 shadow-sm" />
                  )}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, originY: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`max-w-[78%] p-3 text-sm rounded-2xl whitespace-pre-line ${msg.sender === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white text-black border border-gray-200 shadow-sm rounded-bl-none'}`}
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
              <button onClick={() => handleOptionClick('kisandu')} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors shrink-0">
                About Kisandu
              </button>
              <button onClick={() => handleOptionClick('assistance')} className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors shrink-0">
                Kisandu's Assistance
              </button>
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
