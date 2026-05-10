import { motion } from 'motion/react';
import { Video, Film, Wand2, Layers, Users, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Motion Graphics',
      desc: 'Bespoke animated assets that breathe life into your brand and UI.',
      tag: '[AFTER EFFECTS]',
      colSpan: 1
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: 'Video Editing',
      desc: 'Pacing, rhythm, and storytelling that keeps viewers hooked.',
      tag: '[PREMIERE PRO]',
      colSpan: 1
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: 'AMV / Cinematic',
      desc: 'High-octane anime music videos and cinematic trailers.',
      tag: '[STORYTELLING]',
      colSpan: 1
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Visual Design',
      desc: 'Bold, highly stylized visual identities for the digital realm.',
      tag: '[IDENTITY]',
      colSpan: 1
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Open Collabs',
      desc: 'We are always looking for fresh perspectives to co-create with.',
      tag: '[COMMUNITY]',
      colSpan: 1
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Brand Motion',
      desc: 'Kinetic typography and logo animations that stand out.',
      tag: '[KINETIC]',
      colSpan: 1
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-[#A8D5E3] overflow-hidden">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.h2 
          className="font-syne font-bold text-5xl md:text-6xl text-[#1A1A1A] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col justify-between p-8 min-h-[340px] bg-white/40 backdrop-blur-[20px] border border-white/30 rounded-[24px] overflow-hidden transition-all duration-300 hover:border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Inner Glow Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#F2F0EA]/80 flex items-center justify-center text-[#FF78AC] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {srv.icon}
                </div>
                <h3 className="font-syne font-bold text-2xl text-[#1A1A1A] mb-4">{srv.title}</h3>
                <p className="font-dm-sans text-[#1A1A1A]/70 leading-relaxed mb-8">
                  {srv.desc}
                </p>
              </div>

              <div className="relative z-10 font-space-mono text-[11px] tracking-widest text-[#FF78AC] uppercase font-bold">
                {srv.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
