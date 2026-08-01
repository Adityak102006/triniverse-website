import { motion } from 'motion/react';
import { Instagram, Linkedin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';


export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = formRef.current;
    const name    = (form.elements.namedItem('from_name')  as HTMLInputElement).value.trim();
    const email   = (form.elements.namedItem('from_email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message')    as HTMLTextAreaElement).value.trim();

    try {
      // Run EmailJS + Firestore in parallel
      await Promise.all([
        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        ),
        addDoc(collection(db, 'inquiries'), {
          name,
          email,
          message,
          createdAt: serverTimestamp(),
        }),
      ]);

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };


  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#F2F0EA]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 flex flex-col items-center">

        <motion.div
          className="font-space-mono text-xs sm:text-sm tracking-widest text-[#FF78AC] uppercase mb-5 sm:mb-6 font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          [ START A PROJECT ]
        </motion.div>

        <motion.a
          href="mailto:theart.illeryuniverse@gmail.com"
          className="font-syne font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-[#1A1A1A] text-center hover:text-[#FF78AC] transition-colors duration-300 mb-10 sm:mb-12 isolate drop-shadow-sm break-all sm:break-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          theart.illeryuniverse@gmail.com
        </motion.a>


        <motion.div 
          className="flex items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Behance pseudo-icon using svg path since not in lucide-react */}
          <a href="#" className="p-3 bg-white/40 rounded-full border border-[#1A1A1A]/10 hover:border-[#FF78AC] hover:shadow-[0_0_15px_rgba(255,120,172,0.4)] transition-all text-[#1A1A1A] group">
            <svg className="w-5 h-5 group-hover:text-[#FF78AC] transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.375 5.424h-7.669c.124 1.559 1.496 2.053 2.808 2.053 1.391 0 2.222-.505 2.502-1.229h2.183zm-6.611-3.693h4.634c-.237-1.189-1.298-2.215-2.457-2.215-1.134 0-2.001 1.004-2.177 2.215zm-9.027 5.093c-1.39 0-2.072-.8-2.072-2.138 0-1.133.729-2.016 1.831-2.016 1.42 0 1.956.883 1.956 2.072 0 1.258-.729 2.082-1.715 2.082zm-.251-5.632c-1.144 0-1.723-.746-1.723-1.892 0-1.144.595-1.921 1.637-1.921 1.042 0 1.564.717 1.564 1.861 0 1.245-.611 1.952-1.478 1.952zm3.328 1.97v.52c0 2.923-2.106 4.693-5.32 4.693h-5.844v-15.006h5.811c2.81 0 5.158 1.656 5.158 4.398 0 1.708-1.018 3.193-2.4 3.738 1.644.498 2.595 1.93 2.595 3.633.001 2.766-.001-.986.001.024z"/>
            </svg>
          </a>
          <a href="#" className="p-3 bg-white/40 rounded-full border border-[#1A1A1A]/10 hover:border-[#FF78AC] hover:shadow-[0_0_15px_rgba(255,120,172,0.4)] transition-all text-[#1A1A1A] group">
            <Instagram className="w-5 h-5 group-hover:text-[#FF78AC] transition-colors" />
          </a>
          <a href="#" className="p-3 bg-white/40 rounded-full border border-[#1A1A1A]/10 hover:border-[#A8D5E3] hover:shadow-[0_0_15px_rgba(168,213,227,0.4)] transition-all text-[#1A1A1A] group">
            <Linkedin className="w-5 h-5 group-hover:text-[#A8D5E3] transition-colors" />
          </a>
        </motion.div>

        <motion.form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full bg-white/50 backdrop-blur-[24px] border border-[#1A1A1A]/10 rounded-[24px] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.05)] relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8D5E3]/30 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF78AC]/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="font-space-mono text-xs uppercase text-[#1A1A1A]/70 font-bold px-2">Name</label>
              <input 
                type="text"
                name="from_name"
                required
                className="w-full bg-white/60 border border-[#1A1A1A]/10 rounded-xl px-4 py-3 text-[#1A1A1A] font-dm-sans focus:outline-none focus:border-[#FF78AC] focus:shadow-[0_0_10px_rgba(255,120,172,0.15)] transition-all focus:bg-white placeholder-[#1A1A1A]/30"
                placeholder="Aryan Sharma"
              />
            </div>
            <div className="space-y-2">
              <label className="font-space-mono text-xs uppercase text-[#1A1A1A]/70 font-bold px-2">Email</label>
              <input 
                type="email"
                name="from_email"
                required
                className="w-full bg-white/60 border border-[#1A1A1A]/10 rounded-xl px-4 py-3 text-[#1A1A1A] font-dm-sans focus:outline-none focus:border-[#FF78AC] focus:shadow-[0_0_10px_rgba(255,120,172,0.15)] transition-all focus:bg-white placeholder-[#1A1A1A]/30"
                placeholder="aryan@example.com"
              />
            </div>
          </div>
          <div className="space-y-2 mb-8">
            <label className="font-space-mono text-xs uppercase text-[#1A1A1A]/70 font-bold px-2">Message</label>
            <textarea 
              rows={4}
              name="message"
              required
              className="w-full bg-white/60 border border-[#1A1A1A]/10 rounded-xl px-4 py-3 text-[#1A1A1A] font-dm-sans focus:outline-none focus:border-[#FF78AC] focus:shadow-[0_0_10px_rgba(255,120,172,0.15)] transition-all resize-none focus:bg-white placeholder-[#1A1A1A]/30"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full md:w-auto px-8 py-4 rounded-xl font-dm-sans font-bold text-white bg-[#FF78AC] border border-transparent hover:border-[#1A1A1A]/10 transition-all flex items-center justify-center gap-2 relative overflow-hidden shadow-[0_4px_14px_0_rgba(255,120,172,0.39)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#A8D5E3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-[#1A1A1A] group-hover:text-white transition-colors">
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </span>
            {!isSubmitting && (
              <Send className="w-4 h-4 relative z-10 text-[#1A1A1A] group-hover:text-white group-hover:translate-x-1 transition-all" />
            )}
            {isSubmitting && (
              <div className="w-4 h-4 relative z-10 border-2 border-[#1A1A1A]/30 border-t-[#1A1A1A] rounded-full animate-spin" />
            )}
          </button>
        </motion.form>

        {/* Submission Toast */}
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`mt-6 w-full px-6 py-4 rounded-xl font-dm-sans font-medium text-center backdrop-blur-md border flex items-center justify-center gap-3 ${
              submitStatus === 'success'
                ? 'bg-emerald-50/80 text-emerald-800 border-emerald-200'
                : 'bg-red-50/80 text-red-800 border-red-200'
            }`}
          >
            {submitStatus === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Inquiry sent successfully! We'll get back to you soon. ✨</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                <span>Something went wrong. Please try again or email us directly.</span>
              </>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
}
