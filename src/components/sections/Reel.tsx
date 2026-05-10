import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Reel() {
  return (
    <section className="relative py-32 bg-[#FF78AC] flex flex-col items-center overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -top-40 -left-40 w-[600px] h-[600px] rounded-full mix-blend-multiply opacity-50 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,213,227,0.7) 0%, rgba(168,213,227,0) 70%)' }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        <motion.h2 
          className="font-bebas text-[100px] md:text-[140px] leading-none text-[#F2F0EA] tracking-normal text-center mb-12 drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          THE REEL
        </motion.h2>

        <motion.div 
          className="w-full max-w-5xl aspect-video relative rounded-[32px] overflow-hidden bg-white/40 backdrop-blur-md border border-white/50 shadow-2xl group cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Simulated Video Poster */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#A8D5E3]/60 via-[#F2F0EA]/30 to-[#FF78AC]/40 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 ease-out" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Play Button Container */}
            <div className="relative flex items-center justify-center">
              {/* Pulsing Rings */}
              <div className="absolute w-24 h-24 rounded-full bg-white/40 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute w-20 h-20 rounded-full bg-white/60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
              
              <div className="relative w-20 h-20 rounded-full bg-white backdrop-blur-xl border border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 text-[#FF78AC] ml-2" fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
