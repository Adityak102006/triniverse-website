import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Nav() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.7]);
  const blur = useTransform(scrollY, [0, 100], [0, 12]);
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 20px rgba(0,0,0,0.5)']
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = ['Work', 'Services', 'About', 'Contact'];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 border-b border-[#1A1A1A]/5 transition-colors"
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(242, 240, 234, ${v})`),
          backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
          boxShadow: shadow,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#1A1A1A]">
            <span className="font-syne font-bold text-2xl tracking-tight">TRINIVERSE</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-[#FF78AC]" />
            </motion.div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-space-mono text-[#1A1A1A]/70">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-[#FF78AC] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <button className="group relative px-6 py-2.5 rounded-full font-dm-sans font-medium text-sm text-[#1A1A1A] border border-[#FF78AC]/50 overflow-hidden transition-all hover:border-[#FF78AC] shadow-[0_0_15px_-3px_rgba(255,120,172,0.3)] hover:shadow-[0_0_20px_-3px_rgba(255,120,172,0.5)]">
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Let's Create <span>→</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF78AC] to-[#A8D5E3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ zIndex: 0 }}
              />
            </button>
          </div>

          <button className="md:hidden text-[#1A1A1A]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-30 bg-[#F2F0EA]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl font-syne font-bold text-[#1A1A1A]">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:text-[#FF78AC] transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="mt-4 px-8 py-3 rounded-full font-dm-sans font-bold text-white bg-gradient-to-r from-[#FF78AC] to-[#A8D5E3]">
          Let's Create
        </button>
      </motion.div>
    </>
  );
}
