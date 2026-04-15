import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const titleVariant = {
    hidden: { y: "100%" },
    visible: (i) => ({
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden py-20"
    >
      {/* --- Golden Decorative Curves --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.svg
          style={{ y: y1 }}
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full opacity-20 md:opacity-30"
        >
          <motion.path
            d="M-100 600C200 500 400 700 800 500C1200 300 1500 400 1600 200"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
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

      {/* Background Glows - Reduced size for mobile */}
      <div className="absolute top-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/10 blur-[100px] md:blur-[150px] rounded-full" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-gold/5 blur-[80px] md:blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-3 z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold uppercase text-[12px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] block mb-2 md:mb-10"
        >
          Digital Marketing
        </motion.span>
        
        <div className="flex flex-col items-center">
          {/* Split Name Animation - Wrap handled via flex-wrap and responsive font sizes */}
          <div className="flex flex-wrap justify-center overflow-hidden">
            <div className="flex">
              {["D", "H", "R", "U", "V"].map((char, i) => (
                <motion.h1
                  key={i}
                  custom={i}
                  variants={titleVariant}
                  initial="hidden"
                  animate="visible"
                  className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif leading-none text-white font-bold"
                >
                  {char}
                </motion.h1>
              ))}
            </div>
            
            {/* Break on mobile, space on desktop */}
            <span className="w-full h-2 md:h-auto md:w-8 lg:w-12"></span> 

            <div className="flex">
              {["V", "E", "R", "M", "A"].map((char, i) => (
                <motion.h1
                  key={i}
                  custom={i + 5}
                  variants={titleVariant}
                  initial="hidden"
                  animate="visible"
                  className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif leading-none text-gold font-bold"
                >
                  {char}
                </motion.h1>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="mt-8 md:mt-12"
        >
          <p className="text-white/40 max-w-xs md:max-w-2xl mx-auto text-sm md:text-xl font-light leading-relaxed italic">
            "Elevating brands through data-driven strategies and <span className="text-white/80">premium digital experiences.</span>"
          </p>
          
          {/* Floating Scroll Indicator - Hidden on small mobile to save space */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 md:mt-20 hidden sm:flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-gold to-transparent" />
            <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gold/50">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;