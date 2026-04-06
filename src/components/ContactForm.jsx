import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section className="py-32 px-8 max-w-4xl mx-auto" id="contact">
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter">Let's Talk</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-lg">Interested in collaborating or have a proposition? Feel free to reach out.</p>
        </div>

        <form className="space-y-8 bg-white p-12 shadow-sm border border-gray-100" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">First Name</label>
              <input type="text" className="w-full pb-2 border-b-2 border-gray-200 outline-none focus:border-black transition-colors bg-transparent" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
              <input type="text" className="w-full pb-2 border-b-2 border-gray-200 outline-none focus:border-black transition-colors bg-transparent" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
            <input type="email" className="w-full pb-2 border-b-2 border-gray-200 outline-none focus:border-black transition-colors bg-transparent" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold tracking-widest text-gray-400 uppercase">Message</label>
            <textarea rows="4" className="w-full pb-2 border-b-2 border-gray-200 outline-none focus:border-black transition-colors bg-transparent resize-none" placeholder="Tell me about your project..."></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-black text-white font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
