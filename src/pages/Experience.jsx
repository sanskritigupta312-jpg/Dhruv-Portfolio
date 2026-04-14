import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Experience = () => {
  const [index, setIndex] = useState(0);

  const experiences = [
    {
      company: "Webvoom Pvt Ltd",
      role: "Digital Marketing Executive",
      year: "2022 — Present",
      shortYear: "2024",
      desc: "Architecting performance strategies, driving ROI, and spearheading comprehensive digital growth initiatives.",
      skills: ["SEO", "Performance Marketing", "Strategy"]
    },
    {
      company: "JBR Infra & Developers",
      role: "Social Media Manager",
      year: "2022",
      shortYear: "2022",
      desc: "Led cross-platform social strategy for premium real estate developments, drastically enhancing engagement and lead flow.",
      skills: ["Meta Ads", "Content Creation", "Lead Gen"]
    },
    {
      company: "Laura Beauty",
      role: "Graphic Designer & Social Media Exec",
      year: "2021 — 2022",
      shortYear: "2021",
      desc: "Merged visual design with social media management to create a cohesive brand identity and boost online presence.",
      skills: ["Branding", "UI/UX", "Social Management"]
    }
  ];

  const next = () => setIndex((prev) => (prev + 1) % experiences.length);
  const prev = () => setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <section className="h-screen bg-dark flex flex-col items-center justify-center px-6 overflow-hidden relative">
      
      {/* Massive Dynamic Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <AnimatePresence mode="wait">
          <motion.h2 
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-[15rem] md:text-[30rem] font-serif font-bold text-white tracking-tighter leading-none"
          >
            {experiences[index].shortYear}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="max-w-4xl w-full relative z-10 text-center">
        {/* Pagination Indicator */}
        <span className="text-gold uppercase tracking-[0.5em] text-xs mb-10 block">
          Career Path — 0{index + 1} / 0{experiences.length}
        </span>
        
        {/* Animated Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-[300px] flex flex-col justify-center items-center"
          >
            <h3 className="text-5xl md:text-7xl font-serif text-white mb-6 italic leading-tight">
              {experiences[index].role}
            </h3>
            
            <p className="text-gold text-xl md:text-2xl font-light mb-8 tracking-wide">
              @ {experiences[index].company} <span className="mx-4 text-white/20">|</span> <span className="text-white/60 text-lg">{experiences[index].year}</span>
            </p>
            
            <p className="text-white/50 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              {experiences[index].desc}
            </p>

            {/* Skills / Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {experiences[index].skills.map((skill, i) => (
                <span key={i} className="text-[10px] uppercase tracking-[0.2em] px-5 py-2 border border-gold/10 rounded-full text-white/40 bg-gold/[0.02]">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-6 mt-16">
          <button 
            onClick={prev} 
            className="group flex items-center justify-center w-16 h-16 border border-gold/20 text-gold rounded-full hover:bg-gold hover:text-black transition-all duration-500"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={next} 
            className="group flex items-center justify-center w-16 h-16 border border-gold/20 text-gold rounded-full hover:bg-gold hover:text-black transition-all duration-500"
          >
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;