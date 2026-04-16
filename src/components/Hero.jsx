import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

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

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden py-20"
    >
      {/* Decorative Curves */}
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
      
      <div className="container mx-auto px-6 z-10">
        {/* Flex container: Centered on mobile, Row on desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Image Side: Centered on small, Left on large */}
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]"
          >
            {/* The "More Good" Circle: Double border effect */}
            <div className="absolute inset-0 rounded-full border-[6px] border-dark shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10" />
            <div className="absolute inset-1 rounded-full border border-gold/50 overflow-hidden bg-white/5 backdrop-blur-sm">
              <img 
                src="/dhruv.jpeg" 
                alt="Dhruv Verma" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            {/* Subtle glow behind circle */}
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl" />
          </motion.div>

          {/* Text Side: Perfectly preserved */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gold uppercase tracking-[0.5em] mb-6 block font-medium"
            >
              Digital Marketer
            </motion.span>
            
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex flex-wrap justify-center lg:justify-start overflow-hidden">
                <div className="flex">
                  {["D", "H", "R", "U", "V"].map((char, i) => (
                    <motion.h1 key={i} custom={i} variants={titleVariant} initial="hidden" animate="visible" className="text-6xl md:text-[10rem] font-serif font-bold text-white leading-none">
                      {char}
                    </motion.h1>
                  ))}
                </div>
                <span className="w-full h-2 lg:w-12"></span> 
                <div className="flex">
                  {["V", "E", "R", "M", "A"].map((char, i) => (
                    <motion.h1 key={i} custom={i + 5} variants={titleVariant} initial="hidden" animate="visible" className="text-6xl md:text-[10rem] font-serif font-bold text-gold leading-none">
                      {char}
                    </motion.h1>
                  ))}
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-8">
              <p className="text-white/40 max-w-lg italic text-lg font-light">
                "Elevating brands through data-driven strategies and <span className="text-white/80">premium digital experiences.</span>"
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;