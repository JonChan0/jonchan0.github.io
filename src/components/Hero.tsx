import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-container relative flex items-center justify-center bg-[var(--color-bg)] text-black">
      {/* Grid Lines */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Decorative Side Elements */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 font-mono text-[10px] text-slate-400 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        SYSTEM_READY // INITIALIZING_SEQUENCE_01
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-slate-300"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text Content - Technical Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="mb-8 flex items-center gap-6">
              <span className="px-5 py-2 border-2 border-black text-sm font-mono font-bold bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
                Candidate: Ph.D
              </span>
              <span className="h-px bg-black w-24"></span>
              <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">Module: Intro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
              Population<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 stroke-black text-stroke">-omics</span>
            </h1>

            <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2 bg-white/50 backdrop-blur-sm mb-10 max-w-xl">
              <p className="font-mono text-sm md:text-base leading-relaxed text-slate-800">
                [OBJECTIVE]: Advance therapeutic development via population-scale genetics and multi-omics.<br />
                [TARGET]: Drug discovery & patient stratification.<br />
                [STATUS]: Active / Open to Industry.
              </p>
            </div>
          </motion.div>

          {/* Right: Technical Visual / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 p-2 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200"></div>
              <div className="flex justify-between items-center px-2 py-1 border-b border-black mb-2 bg-slate-100">
                <span className="font-mono text-[10px] uppercase">IMG_REF_09625.JPG</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500 border border-black"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400 border border-black"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500 border border-black"></div>
                </div>
              </div>
              <img
                src="/docs/SRP_Symposium-09625.jpg"
                alt="Jonathan H Chan"
                className="w-[280px] md:w-[320px] h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              <div className="mt-2 flex justify-between font-mono text-[10px] text-slate-500">
                <span>Res: 1024x1024</span>
                <span>Size: 1.4MB</span>
              </div>
            </div>

            {/* Background Pattern behind image */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-dashed border-slate-400"></div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="text-black" size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;