import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

const YOUTUBE_ID = 'dDf5fE2mLbw';

export default function Reel() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#FF78AC] flex flex-col items-center overflow-hidden">
      {/* Background orb */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full mix-blend-multiply opacity-50 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,213,227,0.7) 0%, rgba(168,213,227,0) 70%)' }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center relative z-10">
        <motion.h2
          className="font-bebas text-[72px] sm:text-[100px] md:text-[140px] leading-none text-[#F2F0EA] tracking-normal text-center mb-8 md:mb-12 drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          THE REEL
        </motion.h2>

        <motion.div
          className="w-full max-w-5xl aspect-video relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* YouTube iframe — always mounted, stays hidden behind poster until played */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=${playing ? 1 : 0}&rel=0&modestbranding=1&color=white`}
            title="Triniverse Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Poster overlay — fades out when playing */}
          <AnimatePresence>
            {!playing && (
              <motion.div
                className="absolute inset-0 cursor-pointer group"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setPlaying(true)}
              >
                {/* YouTube thumbnail as poster */}
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                  alt="Reel thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={e => {
                    // Fallback to hq thumbnail if maxres doesn't exist
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;
                  }}
                />

                {/* Dark scrim */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing rings */}
                    <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/40 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />

                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white backdrop-blur-xl border border-white flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all duration-300">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF78AC] ml-0.5 sm:ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
