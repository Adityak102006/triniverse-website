import React from 'react';
import { Star } from 'lucide-react';

export default function Marquee() {
  const items = [
    'MOTION GRAPHICS', 'AMV EDITS', 'CINEMATIC VISUALS', 'AFTER EFFECTS', 'VISUAL DESIGN', 'TRINIVERSE'
  ];

  return (
    <div className="w-full bg-[#FF78AC] overflow-hidden py-4 border-y border-[#1A1A1A]/5 flex items-center relative z-20">
      {/* 
        To do an infinite pure CSS marquee, we duplicate the inner content twice
        and translate it cleanly.
      */}
      <div className="flex w-fit animate-[marquee_20s_linear_infinite]">
        {[...Array(2)].map((_, i) => (
          <div key={`track-${i}`} className="flex items-center whitespace-nowrap shrink-0">
            {items.map((item, idx) => (
              <React.Fragment key={`${i}-${idx}`}>
                <span className="font-space-mono font-bold text-sm md:text-base text-[#F2F0EA] tracking-widest px-8">
                  {item}
                </span>
                <Star className="w-4 h-4 text-[#A8D5E3] shrink-0 fill-current" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
