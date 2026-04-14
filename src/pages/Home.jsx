import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills"; // Ensure this component exists in your folder

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth Progress Bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effect for the background text in CTA
  const textX = useTransform(scrollYProgress, [0.7, 1], ["20%", "-20%"]);

  return (
    <div ref={containerRef} className="relative bg-dark selection:bg-gold selection:text-black">
      
      {/* 1. Premium Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/50 via-gold to-gold/50 z-[100] origin-left shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        style={{ scaleX }}
      />

      {/* 2. Global Noise Texture Overlay (Adds "Film" feel) */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative">
          <Hero />
        </section>

        {/* 3. Smooth Transition with Ambient Glow */}
        <div className="relative h-48 -mt-24 pointer-events-none z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark to-dark" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        {/* About Section */}
        <motion.section 
          id="about"
          className="relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ margin: "-10% 0px -10% 0px" }}
        >
          <About />
        </motion.section>

        {/* 4. Elegant Section Divider */}
        <div className="container mx-auto px-6">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/10 to-transparent my-20" />
        </div>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.section>

        {/* 5. Enhanced High-Impact CTA Bridge */}
        <section className="py-40 relative overflow-hidden bg-dark">
          {/* Moving background text for parallax effect */}
          <motion.div 
            style={{ x: textX }}
            className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none"
          >
            <h3 className="text-[15vw] font-serif font-bold uppercase text-white/[0.02] leading-none">
              Strategy • Growth • Impact • Strategy • Growth • Impact
            </h3>
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <span className="text-gold uppercase tracking-[0.5em] text-xs mb-8">Ready to Scale?</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 max-w-3xl leading-tight">
                Let’s create something <span className="text-gold italic">extraordinary</span> together.
              </h2>
              
              <Link 
                to="/contact"
                className="group relative px-10 py-5 overflow-hidden rounded-full border border-gold/30 transition-all duration-500 hover:border-gold"
              >
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium" />
                <span className="relative z-10 text-gold group-hover:text-black uppercase tracking-[0.3em] text-sm font-bold">
                  Start a Project
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom ambient glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-64 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
      </main>
    </div>
  );
};

export default Home;