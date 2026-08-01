import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="relative bg-[#A8D5E3]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F2F0EA] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">

        {/* Decorative text — scaled down on mobile, rotated only on lg */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-start overflow-hidden">
          <motion.div
            className="font-space-mono text-[80px] sm:text-[110px] md:text-[150px] lg:text-[200px] font-bold leading-none text-[#F2F0EA]/40 select-none text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            EST.<br />2026
          </motion.div>
        </div>

        {/* Copy */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-8 relative z-10">
          <motion.h2
            className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frame by Frame.<br />World by World.
          </motion.h2>

          <motion.div
            className="space-y-4 sm:space-y-6 font-dm-sans text-base sm:text-lg text-[#1A1A1A]/80 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Based in the vibrant heart of Lucknow, TRINIVERSE is a collective of visionary motion designers, editors, and digital artists. We don't just move pixels — we build cinematic experiences that linger in the mind.
            </p>
            <p>
              Our roots are in the electric energy of AMVs — where music and animation collide. We've taken that high-octane pacing, bold color science, and rhythmic storytelling, and expanded it into commercial motion identity.
            </p>
            <p>
              Whether it's a 10-second social blitz or a 3-minute cinematic tour de force, every frame is designed with intent. Welcome to our universe.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
