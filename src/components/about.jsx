import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const experiences = [
    {
      role: "Digital Marketing Executive",
      company: "WebVoom Pvt Ltd",
      period: "Dec 2025 - Present",
      description: "Leading digital growth strategies and managing high-impact marketing campaigns."
    },
    {
      role: "Social Media Manager",
      company: "JBR Infra & Developers",
      period: "March 2025 - Dec 2025",
      description: "Focused on brand awareness and lead generation for real estate developments."
    },
    {
      role: "Graphic Designer & Social Media Executive",
      company: "Laura Beauty & Makeup Mantra",
      period: "August 2024 - March 2025",
      description: "Managed visual identity and social media presence for a beauty brand."
    }
  ];

  const education = [
    { degree: "Graduation B.Com", institution: "Lucknow University" },
    { degree: "Digital Marketing Professional Course", institution: "Digiperform" },
    { degree: "O Level Course & CCC", institution: "NIELIT" }
  ];

  return (
    <div className="bg-dark text-white min-h-screen font-sans selection:bg-gold selection:text-dark overflow-x-hidden">
      
      {/* Hero Section - Image Removed, Content Centered */}
      <section className="max-w-6xl mx-auto px-6 py-24 lg:py-40">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-gold-gradient text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Digital Marketing Specialist
          </motion.h2>
          
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-8xl font-bold mb-6">
            I'm <span className="text-gold-gradient">Dhruv Verma</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
            Currently at <span className="text-white font-medium">WebVoom Pvt Ltd</span>, I bridge the gap 
            between creative storytelling and data-driven results. Based in Lucknow, I specialize in SEO, 
            SEM, and building high-ROI digital ecosystems.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            {/* Animated Email Button */}
            <a 
              href="mailto:dhruvv389@gmail.com" 
              className="flex items-center gap-3 px-8 py-4 border border-gold/50 rounded-sm text-sm text-gray-400 hover:text-gold hover:border-gold hover:bg-gold/5 transition-premium group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-medium tracking-wide uppercase">Available for Projects</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section with Scroll Reveal */}
      <section className="bg-surface py-24 border-y border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-16 text-center">Professional Journey</motion.h3>
          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-4 md:gap-12 relative"
              >
                <div className="md:w-1/4">
                  <span className="text-gold font-mono text-sm tracking-tighter">{exp.period}</span>
                </div>
                <div className="md:w-3/4 pb-12 border-l border-white/10 pl-8 relative">
                  <div className="absolute w-3 h-3 bg-gold rounded-full -left-[6.5px] top-1"></div>
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <p className="text-gold-muted font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education & Expertise */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gold"></span> Academic Foundation
          </h3>
          <div className="grid gap-4">
            {education.map((edu, index) => (
              <div key={index} className="p-5 bg-glass border border-white/5 rounded-lg group hover:border-gold/20 transition-all">
                <h4 className="font-bold text-gray-200 group-hover:text-gold transition-colors">{edu.degree}</h4>
                <p className="text-sm text-gray-500">{edu.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gold"></span> Core Capabilities
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Web Designing", "Google Analytics", "Python", "Google Ads", "Social Media Marketing", "SEO"].map((skill, i) => (
              <motion.span 
                key={skill}
                whileHover={{ scale: 1.1, color: "#D4AF37" }}
                className="px-5 py-2 bg-dark border border-white/10 rounded-full text-xs text-gray-400 uppercase tracking-widest cursor-default transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div> 
      </section>
    </div>
  );
};

export default AboutPage;