import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for depth
  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityName = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.08,
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] md:min-h-screen flex items-center justify-center bg-dark overflow-hidden py-20"
    >
      {/* --- Background: Decorative Curves --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.svg
          style={{ y: yText }}
          viewBox="0 0 1440 800"
          fill="none"
          className="absolute top-0 left-0 w-full h-full opacity-30"
        >
          <motion.path
            d="M-100 600C200 500 400 700 800 500C1200 300 1500 400 1600 200"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* --- Mid-Layer: Giant Parallax Name --- */}
      <motion.div 
        style={{ y: yText, opacity: opacityName }}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 select-none pointer-events-none"
      >
        <div className="flex flex-wrap justify-center overflow-hidden opacity-10">
          <div className="flex">
            {["D", "H", "R", "U", "V"].map((char, i) => (
              <motion.h1 key={i} custom={i} variants={titleVariant} initial="hidden" animate="visible" className="text-[15vw] font-serif leading-none text-white font-bold">
                {char}
              </motion.h1>
            ))}
          </div>
          <span className="w-full h-0 md:w-12"></span> 
          <div className="flex">
            {["V", "E", "R", "M", "A"].map((char, i) => (
              <motion.h1 key={i} custom={i + 5} variants={titleVariant} initial="hidden" animate="visible" className="text-[15vw] font-serif leading-none text-gold font-bold">
                {char}
              </motion.h1>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- Foreground: Main Content --- */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Image with Glow */}
          <motion.div 
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="absolute -inset-4 bg-gold/10 blur-[80px] rounded-full animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border border-gold/30 p-2 backdrop-blur-sm">
               <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold">
                  <img 
                    src="/dhruv.jpeg" 
                    alt="Dhruv Verma" 
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                  />
               </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } } }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.span variants={fadeInUp} className="text-gold uppercase text-xs md:text-sm block mb-4">
              Digital Marketing Specialist
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Elevating Brands <br />
              <span className="text-gold-gradient">Through Strategy</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-white/60 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
              Based in Lucknow, I bridge the gap between creative storytelling and 
              high-ROI digital ecosystems at <span className="text-white">WebVoom Pvt Ltd.</span>
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
              <a 
                href="mailto:dhruvv389@gmail.com" 
                className="group relative px-8 py-4 bg-gold text-dark font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-white"
              >
                <span className="relative z-10">Start a Project</span>
              </a>

              <div className="flex items-center gap-3 px-6 py-4 border border-white/10 rounded-full backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] md:text-[16px] text-white/70">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.4em] text-gold/50">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;