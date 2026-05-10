import { motion } from 'motion/react';

export default function Collab() {
  return (
    <section className="w-full bg-gradient-to-br from-[#A8D5E3] to-[#FF78AC] py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'rgba(26,26,26,0.1)\'/%3E%3C/svg%3E')] opacity-50" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.h2 
          className="font-syne font-bold text-4xl md:text-6xl text-[#1A1A1A] mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We're Looking for Creators.
        </motion.h2>
        
        <motion.p 
          className="font-dm-sans text-lg md:text-xl text-[#1A1A1A]/90 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          TRINIVERSE is expanding. If you breathe After Effects, dream in keyframes, or craft worlds from scratch - we want to see your reel.
        </motion.p>
        
        <motion.button 
          className="group px-8 py-4 rounded-full font-dm-sans font-bold text-[#F2F0EA] bg-[#1A1A1A] overflow-hidden relative shadow-xl hover:shadow-[0_0_30px_rgba(26,26,26,0.3)] transition-all"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-[#FF78AC] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-[#1A1A1A] transition-colors duration-300">
            Join the Universe <span>→</span>
          </span>
        </motion.button>
      </div>
    </section>
  );
}
