import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Sparkles } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Kisandu's Portfolio Bot. Ask me about his skills, projects, or how to contact him!", sender: 'bot' }
  ]);
  
  const messagesEndRef = useRef(null);

  // --- THE "BRAIN" OF YOUR BOT ---
  // You can add more questions and keywords here easily.
  const knowledgeBase = [
    {
      keywords: ["hi", "hello", "hey", "greeting", "morning", "afternoon"],
      answer: "Hello there! How can I help you today? You can ask about my projects, skills, or contact info."
    },
    {
      keywords: ["who", "about", "yourself", "kisandu", "name"],
      answer: "I am Kisandu Wethmal, a Full Stack Developer and Undergraduate Software Engineer based in Sri Lanka."
    },
    {
      keywords: ["skills", "stack", "tech", "technologies", "language", "react", "java"],
      answer: "I work with a modern tech stack including React.js, Spring Boot, Java, Python, Node.js, and SQL. I also have experience with Cloud technologies and UI design in Figma."
    },
    {
      keywords: ["project", "work", "portfolio", "app", "website", "altura", "statok"],
      answer: "I have built several enterprise-grade projects like 'Altura Grand' (Hotel Management), 'Statok' (Finance System), and 'Pizza Mania' (Android App). Scroll up to the Projects section to see them!"
    },
    {
      keywords: ["contact", "email", "phone", "hire", "reach", "gmail"],
      answer: "You can email me at kisanduofficially@gmail.com or use the contact form on this website. I'm open to freelance work and internships!"
    },
    {
      keywords: ["education", "degree", "university", "study", "college"],
      answer: "I am currently reading for my BSc (Hons) in Software Engineering at Coventry University London. I also hold diplomas from NIBM and Esoft Metro Campus."
    },
    {
      keywords: ["github", "linkedin", "social"],
      answer: "You can find my code on GitHub and connect with me on LinkedIn. The links are in the footer!"
    }
  ];

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- LOGIC TO FIND THE BEST ANSWER ---
  const findAnswer = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Check if any keyword in our knowledgeBase exists in the user's input
    const match = knowledgeBase.find(item => 
      item.keywords.some(keyword => lowerInput.includes(keyword))
    );

    if (match) {
      return match.answer;
    } else {
      return "I'm not sure about that. Try asking about my 'projects', 'skills', or 'contact' info!";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // 2. Get Bot Response (Simulate a small delay for realism)
    setTimeout(() => {
      const botResponseText = findAnswer(input);
      const botMessage = { text: botResponseText, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 600); // 0.6 second delay

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/30 text-white"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-black/80 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-neutral-900/50 border-b border-neutral-800 flex items-center gap-3">
              <div className="bg-purple-600 p-2 rounded-full">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Kisandu's Assistant</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-purple-600 text-white rounded-br-none' 
                      : 'bg-neutral-800 text-neutral-200 rounded-bl-none border border-neutral-700'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-neutral-900/50 border-t border-neutral-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about projects, skills..."
                className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-purple-500 placeholder:text-neutral-600"
              />
              <button 
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white shadow-lg hover:shadow-purple-500/20 transition-all active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;