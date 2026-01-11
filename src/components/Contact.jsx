import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = 'service_efu5a2s';
    const TEMPLATE_ID = 'template_vjrrgd4';
    const PUBLIC_KEY = 'xcKjQOByGVv8yf6Z3';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          e.target.reset(); // Clear form
          setTimeout(() => setStatus(''), 5000); // Reset button after 5s
      }, (error) => {
          setStatus('error');
          console.log(error.text);
      });
  };

  return (
    <div className="relative w-full py-20 px-4 md:px-10" id="contact">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-neutral-400 text-lg">
            Have a project in mind or just want to say hi?
          </p>
        </motion.div>

        {/* Contact Form Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-pink-600/20 blur-[80px] rounded-full pointer-events-none"></div>

          <form ref={form} onSubmit={sendEmail} className="relative z-10 flex flex-col gap-6">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup 
                icon={User} 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
              />
              <InputGroup 
                icon={Mail} 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </div>

            {/* Row 2: Subject */}
            <InputGroup 
              icon={FileText} 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              required 
            />

            {/* Row 3: Message */}
            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 text-neutral-500 group-focus-within:text-purple-400 transition-colors" size={20} />
              <textarea 
                name="message" 
                rows="5"
                placeholder="Write your message here..."
                className="w-full bg-neutral-950/50 border border-neutral-800 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-neutral-600"
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status === 'sending' || status === 'success'}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
                ${status === 'success' 
                  ? 'bg-green-600 text-white cursor-default' 
                  : status === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-[1.02] text-white shadow-lg shadow-purple-500/25'
                }`}
            >
              {status === 'sending' ? (
                <span className="animate-pulse">Sending...</span>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={20} /> Message Sent!
                </>
              ) : status === 'error' ? (
                 <>
                  <AlertCircle size={20} /> Error. Try Again.
                </>
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
};

// Helper Component for Inputs
const InputGroup = ({ icon: Icon, type, name, placeholder, required }) => (
  <div className="relative group">
    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-purple-400 transition-colors" size={20} />
    <input 
      type={type} 
      name={name} 
      placeholder={placeholder}
      required={required}
      className="w-full bg-neutral-950/50 border border-neutral-800 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-neutral-600"
    />
  </div>
);

export default Contact;