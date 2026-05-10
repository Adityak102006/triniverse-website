import { motion } from 'motion/react';
import React from 'react';

const Orbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full mix-blend-multiply opacity-40"
      style={{
        background: 'radial-gradient(circle, rgba(168,213,227,0.8) 0%, rgba(168,213,227,0) 70%)',
      }}
      animate={{
        x: [0, 50, -50, 0],
        y: [0, -50, 50, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    />
    <motion.div
      className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full mix-blend-multiply opacity-50"
      style={{
        background: 'radial-gradient(circle, rgba(255,120,172,0.8) 0%, rgba(255,120,172,0) 70%)',
      }}
      animate={{
        x: [0, -70, 30, 0],
        y: [0, 60, -40, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    />
  </div>
);

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4 + i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen bg-[#F2F0EA] flex items-center pt-20 overflow-hidden">
      <Orbs />
      
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
        
        {/* Left Side: Text */}
        <motion.div 
          className="w-full lg:w-[45%] flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textVariants} className="font-space-mono text-sm tracking-widest text-[#FF78AC] uppercase">
            // MOTION STUDIO · LUCKNOW
          </motion.div>
          
          <motion.h1 
            variants={textVariants}
            className="font-bebas text-7xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-normal text-[#1A1A1A]"
          >
            WE ANIMATE<br />WORLDS.
          </motion.h1>
          
          <motion.p 
            variants={textVariants}
            className="font-dm-sans text-lg md:text-xl text-[#1A1A1A]/70 max-w-md"
          >
            We are a creative studio specializing in bespoke motion graphics, high-energy AMVs, and cinematic visual design.
          </motion.p>
          
          <motion.div variants={textVariants} className="flex flex-wrap items-center gap-4 mt-4">
            <button className="group relative px-8 py-4 rounded-full font-dm-sans font-bold text-white bg-[#FF78AC] overflow-hidden shadow-[0_4px_14px_0_rgba(255,120,172,0.39)]">
              <span className="relative z-10 flex items-center gap-2">View Reel <span>→</span></span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
              />
            </button>
            <button className="px-8 py-4 rounded-full font-dm-sans font-bold text-[#1A1A1A] border border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 transition-colors">
              Our Work
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Collage */}
        <div className="w-full lg:w-[55%] relative h-[500px] md:h-[600px] mt-12 lg:mt-0 perspective-1000">
          <div className="absolute inset-0 flex justify-center items-center">
            
            {/* Background Card */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, rotate: -2, zIndex: 40 }}
              className="absolute w-[260px] md:w-[320px] aspect-[4/5] bg-white/40 backdrop-blur-[20px] border border-white/30 rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] -translate-y-12 -translate-x-12 md:-translate-x-20 rotate-[-4deg] cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A8D5E3]/80 to-[#F2F0EA]/50 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/40 rounded-[24px]" />
            </motion.div>

            {/* Middle Card */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, rotate: 1, zIndex: 40 }}
              className="absolute w-[280px] md:w-[340px] aspect-[4/5] bg-white/40 backdrop-blur-[20px] border border-white/30 rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] translate-x-12 md:translate-x-16 translate-y-8 rotate-[3deg] cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF78AC]/60 to-[#A8D5E3]/40 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/40 rounded-[24px]" />
            </motion.div>

            {/* Foreground Card */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 40 }}
              className="absolute w-[300px] md:w-[360px] aspect-[4/5] bg-white/50 backdrop-blur-[24px] border border-white/50 rounded-[24px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] cursor-pointer group"
            >
               <div className="absolute inset-0 bg-gradient-to-bl from-[#F2F0EA]/60 to-[#FF78AC]/80 group-hover:opacity-80 transition-opacity" />
               <div className="absolute inset-0 ring-1 ring-inset ring-white/50 rounded-[24px] shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]" />
               {/* Decorative tag on card */}
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="font-space-mono text-xs uppercase text-[#1A1A1A]/50 mb-2">[LATEST REEL]</div>
                 <div className="font-syne font-bold text-xl text-[#1A1A1A]">Cyberpunk Echoes</div>
               </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
