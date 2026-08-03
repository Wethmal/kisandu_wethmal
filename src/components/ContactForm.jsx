import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const sendTelegramNotification = async (data) => {
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) return;

    const message = `
*📩 New Contact Form Submission*
---
*Name*: ${data.firstName} ${data.lastName}
*Email*: ${data.email}
*Message*: 
${data.message}

*Timestamp*: ${new Date().toLocaleString()}
    `.trim();

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
    } catch (error) {
      console.error('Telegram Notification Error:', error);
    }
  };

  const onSubmit = async (data) => {
    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey && serviceId !== 'your_service_id') {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: `${data.firstName} ${data.lastName}`,
            from_email: data.email,
            message: data.message,
          },
          publicKey
        );
      } else {
        console.warn('EmailJS keys are not configured. Skipping email send.');
      }

      await sendTelegramNotification(data);

      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 max-w-4xl mx-auto w-full z-10 bg-white" id="contact">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
          Let's <span className="text-gray-300">Talk.</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-6 text-lg font-light">
          Interested in collaborating or have a proposition? Feel free to reach out.
        </p>
        <div className="w-16 h-1 bg-violet-500 rounded-full mx-auto mt-6"></div>
      </div>

      <div className="relative">
        <form className="space-y-8 minimal-card rounded-[2rem] p-8 md:p-14 bg-white" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">First Name</label>
                {errors.firstName && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
              </div>
              <input 
                type="text" 
                {...register('firstName', { required: true })}
                className={`w-full pb-3 border-b-2 outline-none transition-colors bg-transparent text-black font-medium ${errors.firstName ? 'border-red-500' : 'border-gray-100 focus:border-violet-500'}`}
                placeholder="John" 
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Last Name</label>
                {errors.lastName && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
              </div>
              <input 
                type="text" 
                {...register('lastName', { required: true })}
                className={`w-full pb-3 border-b-2 outline-none transition-colors bg-transparent text-black font-medium ${errors.lastName ? 'border-red-500' : 'border-gray-100 focus:border-violet-500'}`}
                placeholder="Doe" 
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Email Address</label>
              {errors.email && <span className="text-[10px] text-red-500 font-bold uppercase">{errors.email.message || 'Required'}</span>}
            </div>
            <input 
              type="email" 
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full pb-3 border-b-2 outline-none transition-colors bg-transparent text-black font-medium ${errors.email ? 'border-red-500' : 'border-gray-100 focus:border-violet-500'}`}
              placeholder="john@example.com" 
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Message</label>
              {errors.message && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
            </div>
            <textarea 
              rows="4" 
              {...register('message', { required: true })}
              className={`w-full pb-3 border-b-2 outline-none transition-colors bg-transparent text-black font-medium resize-none ${errors.message ? 'border-red-500' : 'border-gray-100 focus:border-violet-500'}`}
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full mt-4 py-5 bg-black text-white rounded-2xl font-bold tracking-[0.2em] text-sm uppercase hover:bg-violet-600 transition-all disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl shadow-black/10 hover:shadow-violet-500/20"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {/* Status Overlay */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md z-10 text-center p-8 rounded-[2rem] border border-gray-100 shadow-xl"
            >
              <CheckCircle className="w-20 h-20 text-emerald-500 mb-6" />
              <h3 className="text-3xl font-black uppercase tracking-tighter text-black">Message Sent!</h3>
              <p className="text-gray-500 mt-4 text-lg font-light">I'll get back to you as soon as possible.</p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md z-10 text-center p-8 rounded-[2rem] border border-gray-100 shadow-xl"
            >
              <AlertCircle className="w-20 h-20 text-red-500 mb-6" />
              <h3 className="text-3xl font-black uppercase tracking-tighter text-black">Oops!</h3>
              <p className="text-gray-500 mt-4 text-lg font-light">Something went wrong. Please try again or reach out directly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-bold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-violet-600 hover:border-violet-600 transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
