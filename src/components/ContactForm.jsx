import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
      // 1. Send Email via EmailJS
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

      // 2. Send Telegram Notification
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
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto" id="contact">
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Let's Talk</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-base md:text-lg">
            Interested in collaborating or have a proposition? Feel free to reach out.
          </p>
        </div>

        <div className="relative">
          <form className="space-y-6 md:space-y-8 bg-white p-6 md:p-12 shadow-sm border border-gray-100" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                  {errors.firstName && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <input 
                  type="text" 
                  {...register('firstName', { required: true })}
                  className={`w-full pb-2 border-b-2 outline-none transition-colors bg-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-200 focus:border-black'}`}
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                  {errors.lastName && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <input 
                  type="text" 
                  {...register('lastName', { required: true })}
                  className={`w-full pb-2 border-b-2 outline-none transition-colors bg-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-200 focus:border-black'}`}
                  placeholder="Doe" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
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
                className={`w-full pb-2 border-b-2 outline-none transition-colors bg-transparent ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-black'}`}
                placeholder="john@example.com" 
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Message</label>
                {errors.message && <span className="text-[10px] text-red-500 font-bold uppercase">Required</span>}
              </div>
              <textarea 
                rows="4" 
                {...register('message', { required: true })}
                className={`w-full pb-2 border-b-2 outline-none transition-colors bg-transparent resize-none ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-black'}`}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 bg-black text-white font-bold tracking-widest uppercase hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-10 text-center p-6"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-black uppercase tracking-tighter">Message Sent!</h3>
                <p className="text-gray-500 mt-2 font-bold tracking-tight">I'll get back to you as soon as possible.</p>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-10 text-center p-6"
              >
                <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                <h3 className="text-2xl font-black uppercase tracking-tighter">Oops!</h3>
                <p className="text-gray-500 mt-2 font-bold tracking-tight">Something went wrong. Please try again or reach out directly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-black uppercase border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
