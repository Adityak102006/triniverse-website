import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect, useCallback } from 'react';

import art1 from '../../../image/art_1.jpg';
import art2 from '../../../image/art_2.jpg';
import art3 from '../../../image/art_3.jpg';
import art4 from '../../../image/art_4.jpg';
import art5 from '../../../image/art_5.jpg';
import art6 from '../../../image/art_6.jpg';

const artworks = [
  { id: 1, title: 'Neon Genesis',  artist: 'Keshav',   tag: 'Digital Art',   img: art1 },
  { id: 2, title: 'Void Walkers',  artist: 'Virinchi', tag: 'Illustration',  img: art2 },
  { id: 3, title: 'Dreamscape',    artist: 'Keshav',   tag: 'Fantasy Art',   img: art3 },
  { id: 4, title: 'Cyber Ronin',   artist: 'Virinchi', tag: 'Character Art', img: art4 },
  { id: 5, title: 'Spirit Grove',  artist: 'Keshav',   tag: 'Environment',   img: art5 },
  { id: 6, title: 'Liquid Metal',  artist: 'Virinchi', tag: 'Abstract',      img: art6 },
];

export default function FeaturedWork() {
  const [selected, setSelected] = useState<number | null>(null);
  const [current, setCurrent]   = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const selectedArt = selected !== null ? artworks.find(a => a.id === selected) : null;

  /* ── Lock body scroll while lightbox is open ── */
  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (selected === null) return;
      if (e.key === 'ArrowRight') nextInLightbox();
      if (e.key === 'ArrowLeft')  prevInLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selected, current]);

  /* ── Scroll-synced dot indicator ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const idx = Math.round((scrollLeft / maxScroll) * (artworks.length - 1));
      setActiveSlide(Math.min(idx, artworks.length - 1));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSlide = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }, []);

  const openLightbox = (id: number) => {
    const idx = artworks.findIndex(a => a.id === id);
    setCurrent(idx);
    setSelected(id);
  };

  const nextInLightbox = () => {
    const next = (current + 1) % artworks.length;
    setCurrent(next);
    setSelected(artworks[next].id);
  };

  const prevInLightbox = () => {
    const prev = (current - 1 + artworks.length) % artworks.length;
    setCurrent(prev);
    setSelected(artworks[prev].id);
  };

  return (
    <section id="work" className="relative py-16 sm:py-24 lg:py-32 bg-[#F2F0EA] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-16 gap-3 px-5 sm:px-6">
          <motion.h2
            className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.h2>
        </div>

        {/* Gallery */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-12 lg:w-20 bg-gradient-to-r from-[#F2F0EA] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-12 lg:w-20 bg-gradient-to-l from-[#F2F0EA] to-transparent z-10" />

          <div
            ref={trackRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-5 sm:px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {artworks.map((art, i) => (
              <motion.div
                key={art.id}
                className="group relative flex-shrink-0 w-[82vw] sm:w-[300px] md:w-[340px] lg:w-[380px] h-[420px] sm:h-[460px] md:h-[480px] rounded-[20px] sm:rounded-[28px] overflow-hidden cursor-pointer snap-center border border-[#1A1A1A]/8 shadow-lg active:shadow-xl transition-shadow duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: Math.min(i, 2) * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => openLightbox(art.id)}
              >
                <img
                  src={art.img}
                  alt={art.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 font-space-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-10">
                  {art.tag}
                </div>

                {/* Expand icon — always visible on touch */}
                <div className="absolute top-4 right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 opacity-100 transition-opacity duration-300 z-10">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-space-mono text-[10px] sm:text-[11px] text-[#FF78AC] uppercase tracking-widest mb-1">{art.artist}</p>
                  <h3 className="font-syne font-bold text-xl sm:text-2xl text-white">{art.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            {artworks.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                aria-label={`Go to artwork ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeSlide ? 'bg-[#FF78AC] w-6 h-2' : 'bg-[#1A1A1A]/20 w-2 h-2 hover:bg-[#FF78AC]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

            {/* ─── MOBILE LAYOUT: full-screen image + bottom info drawer ─── */}
            <motion.div
              className="sm:hidden relative z-10 w-full h-full flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Full-screen image */}
              <div className="relative flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedArt.id}
                    src={selectedArt.img}
                    alt={selectedArt.title}
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>

                {/* Arrows on image */}
                <button onClick={prevInLightbox} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center active:scale-90 z-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextInLightbox} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center active:scale-90 z-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Counter badge */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 font-space-mono text-[10px] text-white/70 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {String(current + 1).padStart(2,'0')} / {String(artworks.length).padStart(2,'0')}
                </div>

                {/* Close */}
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center active:scale-90 z-20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Bottom info drawer */}
              <motion.div
                className="bg-[#111]/95 border-t border-white/10 px-5 pt-4 pb-6"
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 30 }}
              >
                <span className="inline-block font-space-mono text-[10px] font-bold uppercase tracking-widest text-[#FF78AC] bg-[#FF78AC]/10 border border-[#FF78AC]/20 px-3 py-1 rounded-full mb-2">
                  {selectedArt.tag}
                </span>
                <h2 className="font-syne font-bold text-2xl text-white mb-1">{selectedArt.title}</h2>
                <p className="font-space-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">Artist · {selectedArt.artist}</p>

                {/* Thumbnail strip */}
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {artworks.map((a, i) => (
                    <button
                      key={a.id}
                      onClick={() => { setCurrent(i); setSelected(a.id); }}
                      className={`flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-200 active:scale-95 ${a.id === selectedArt.id ? 'border-[#FF78AC] scale-110' : 'border-white/10 opacity-40'}`}
                    >
                      <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ─── DESKTOP LAYOUT: side-by-side card ─── */}
            <motion.div
              className="hidden sm:flex relative z-10 bg-[#111]/95 border border-white/10 shadow-2xl rounded-[28px] md:rounded-[32px] overflow-hidden max-w-2xl md:max-w-4xl lg:max-w-5xl w-full mx-4 max-h-[88vh] flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Image panel */}
              <div className="relative w-full md:w-[52%] h-[44vh] md:h-auto flex-shrink-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedArt.id}
                    src={selectedArt.img}
                    alt={selectedArt.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button onClick={prevInLightbox} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#FF78AC]/80 active:scale-95 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextInLightbox} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#FF78AC]/80 active:scale-95 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              {/* Info panel */}
              <div className="flex-1 flex flex-col justify-between overflow-y-auto p-7 sm:p-8 md:p-10">
                <div>
                  <p className="font-space-mono text-[10px] text-white/30 uppercase tracking-widest mb-5">
                    {String(current + 1).padStart(2,'0')} / {String(artworks.length).padStart(2,'0')}
                  </p>
                  <span className="inline-block font-space-mono text-[10px] font-bold uppercase tracking-widest text-[#FF78AC] bg-[#FF78AC]/10 border border-[#FF78AC]/20 px-3 py-1 rounded-full">
                    {selectedArt.tag}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={selectedArt.title}
                      className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mt-4 mb-3"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.22 }}
                    >
                      {selectedArt.title}
                    </motion.h2>
                  </AnimatePresence>
                  <div className="w-10 h-0.5 bg-[#FF78AC] mb-5 rounded-full" />
                  <p className="font-space-mono text-[10px] text-white/35 uppercase tracking-widest mb-1">Artist</p>
                  <p className="font-syne font-semibold text-lg text-white/80">{selectedArt.artist}</p>
                </div>

                <div className="mt-8">
                  <p className="font-space-mono text-[10px] text-white/30 uppercase tracking-widest mb-3">More Works</p>
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {artworks.map((a, i) => (
                      <button
                        key={a.id}
                        onClick={() => { setCurrent(i); setSelected(a.id); }}
                        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 active:scale-95 ${a.id === selectedArt.id ? 'border-[#FF78AC] opacity-100 scale-110' : 'border-white/10 opacity-40 hover:opacity-70'}`}
                      >
                        <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#FF78AC]/80 active:scale-95 transition-all z-20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
