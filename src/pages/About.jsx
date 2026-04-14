import { motion } from "framer-motion";
import { FaAward, FaLightbulb, FaRocket, FaCode } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: <FaRocket />, label: "Experience", value: "1+ Year" },
    { icon: <FaLightbulb />, label: "Strategy", value: "Data-Driven" },
    { icon: <FaAward />, label: "Certifications", value: "Digiperform & NIELIT" },
    { icon: <FaCode />, label: "Tech Stack", value: "SEO & Python" },
  ];

  return (
    <section className="py-32 bg-dark min-h-screen relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] border border-gold/10 p-4"
          >
            <img 
              src="/images/dhruv.jpg" 
              alt="Dhruv Verma" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" 
            />
            {/* Design accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold/30" />
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl font-serif mb-8 text-white"
            >
              The <span className="text-gold italic font-light">Architect</span> of Growth.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/60 leading-relaxed font-light mb-10"
            >
              I am <span className="text-white font-medium">Dhruv Verma</span>, a results-driven Digital Marketing Specialist based in Lucknow. 
              My approach blends the analytical precision of a programmer with the creative intuition of a designer. 
              Currently spearheading digital initiatives at <span className="text-gold">Webvoom Pvt Ltd</span>, I focus on transforming 
              raw data into high-ROI marketing strategies.
            </motion.p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface/50 border border-gold/10 p-6 rounded-2xl hover:border-gold/30 transition-colors"
                >
                  <div className="text-gold text-2xl mb-3">{stat.icon}</div>
                  <h4 className="text-white text-lg font-medium">{stat.value}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Core Philosophy Section */}
            <div className="border-t border-gold/10 pt-10">
              <h3 className="text-gold uppercase tracking-[0.3em] text-xs mb-6">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {["SEO/SEM", "Google Analytics", "Python", "Social Media ROI", "Brand Strategy", "Content Marketing"].map((skill, i) => (
                  <span key={skill} className="px-4 py-2 bg-gold/5 border border-gold/20 text-white/80 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;