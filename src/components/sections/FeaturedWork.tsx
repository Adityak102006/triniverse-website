import { motion } from 'motion/react';

const projects = [
  { id: 1, title: 'Neon Genesis', tag: '[AMV EDIT]', gradient: 'from-[#FF78AC]/90 to-[#A8D5E3]/40', height: 'h-[400px]' },
  { id: 2, title: 'Void Walkers', tag: '[CINEMATIC]', gradient: 'from-[#A8D5E3] to-[#FF78AC]/60', height: 'h-[600px]' },
  { id: 3, title: 'Echo Dot Launch', tag: '[BRAND MOTION]', gradient: 'from-[#F2F0EA]/80 to-[#A8D5E3]/60', height: 'h-[300px]' },
  { id: 4, title: 'Project 004', tag: '[3D DESIGN]', gradient: 'from-[#A8D5E3]/60 to-[#FF78AC]/80', height: 'h-[500px]' },
  { id: 5, title: 'Starboy Remaster', tag: '[MUSIC VIDEO]', gradient: 'from-[#F2F0EA] to-[#FF78AC]/60', height: 'h-[400px]' },
  { id: 6, title: 'Hyper Drive', tag: '[SOCIALS]', gradient: 'from-[#FF78AC]/70 to-[#A8D5E3]/80', height: 'h-[450px]' },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-32 bg-[#F2F0EA]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            className="font-syne font-bold text-5xl md:text-6xl text-[#1A1A1A]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.h2>
          <motion.a 
            href="#"
            className="font-space-mono text-sm uppercase tracking-widest text-[#FF78AC] hover:text-[#1A1A1A] transition-colors font-bold"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            View All →
          </motion.a>
        </div>

        {/* CSS Columns Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              className={`group relative w-full ${proj.height} bg-white rounded-[24px] overflow-hidden cursor-pointer border border-[#1A1A1A]/10 hover:border-[#FF78AC]/50 transition-all shadow-md hover:shadow-xl inline-block`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.15 }}
            >
              {/* Gradient Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out`} />
              
              <div className="absolute top-6 left-6 font-space-mono text-xs font-bold text-[#1A1A1A] tracking-widest bg-white/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 z-10 shadow-sm">
                {proj.tag}
              </div>

              {/* Title Reveal Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 via-black/20 to-transparent translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10 flex items-end">
                <h3 className="font-syne font-bold text-3xl text-white tracking-tight">{proj.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
