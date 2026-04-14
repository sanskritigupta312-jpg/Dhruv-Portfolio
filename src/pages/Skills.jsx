import { motion } from "framer-motion";
import { 
  FaGoogle, FaChartLine, FaPython, FaSearchDollar, 
  FaEnvelopeOpenText, FaPalette, FaBullhorn, FaWordpress,
  FaGlobe, FaCode, FaLaptopCode
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      category: "Performance Marketing",
      skills: [
        { name: "Google Ads (SEM)", icon: <FaGoogle />, level: "Expert" },
        { name: "Meta Ads Manager", icon: <FaBullhorn />, level: "Advanced" },
        { name: "LinkedIn Ads", icon: <FaBullhorn />, level: "Strategic" },
      ],
    },
    {
      category: "Organic & Analytical",
      skills: [
        { name: "SEO Optimization", icon: <FaSearchDollar />, level: "Expert" },
        { name: "Google Analytics 4", icon: <FaChartLine />, level: "Data-Driven" },
        { name: "Python Programming", icon: <FaPython />, level: "Technical" },
      ],
    },
    {
      category: "Creative & Web",
      skills: [
        { name: "Web Designing", icon: <FaLaptopCode />, level: "Advanced" },
        { name: "Graphic Designing", icon: <FaPalette />, level: "Creative" },
        { name: "Content Strategy", icon: <FaGlobe />, level: "Strategic" },
      ],
    },
  ];

  return (
    <section className="py-32 bg-dark px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] block mb-4">Technical Arsenal</span>
          <h2 className="text-6xl md:text-7xl font-serif text-white italic">
            Expertise <span className="text-white not-italic">&</span> Skills.
          </h2>
        </div>

        <div className="grid gap-16">
          {skillCategories.map((cat, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-white/30 uppercase tracking-[0.3em] text-xs whitespace-nowrap">{cat.category}</h3>
                <div className="h-[1px] w-full bg-gold/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)" }}
                    className="bg-surface border border-gold/10 p-8 rounded-[2rem] flex items-center gap-6 group transition-all"
                  >
                    <div className="text-3xl text-gold/80 group-hover:text-gold transition-colors">{skill.icon}</div>
                    <div>
                      <h4 className="text-white font-medium text-lg">{skill.name}</h4>
                      <p className="text-white/20 text-[10px] uppercase tracking-widest mt-1">{skill.level}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-12 border-t border-gold/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
          {["WordPress", "Canva", "Shopify", "Mailchimp", "SEMrush"].map((tool) => (
            <span key={tool} className="text-white text-xs uppercase tracking-[0.2em]">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;