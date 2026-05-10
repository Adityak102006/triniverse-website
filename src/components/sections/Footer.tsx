import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F2F0EA] py-6 border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="font-syne font-bold text-lg tracking-tight text-[#1A1A1A]">
          TRINIVERSE
        </div>

        <div className="font-space-mono text-xs uppercase tracking-widest text-[#FF78AC] font-bold text-center">
          // MOTION BY DESIGN · LUCKNOW · 2026
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/40 border border-[#1A1A1A]/20 hover:border-[#FF78AC] hover:bg-[#FF78AC] transition-all text-[#1A1A1A] hover:text-white group shadow-sm"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-current" />
        </button>

      </div>
    </footer>
  );
}
