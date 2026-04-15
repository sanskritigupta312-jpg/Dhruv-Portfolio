import { motion } from "framer-motion";
import { 
  FaGoogle, FaChartLine, FaPython, FaSearchDollar, 
  FaPalette, FaBullhorn, FaLaptopCode, FaChartBar,
  FaLightbulb, FaClock, FaUsers
} from "react-icons/fa";

const Skills = () => {
  // Reorganized explicitly based on the provided CV
  const skillCategories = [
    {
      category: "Marketing & Strategy",
      skills: [
        { name: "Search Engine Optimization", icon: <FaSearchDollar />, level: "Core" },
        { name: "Google Ads", icon: <FaGoogle />, level: "Expert" },
        { name: "Social Media Marketing", icon: <FaBullhorn />, level: "Advanced" },
        { name: "Competitor Analysis", icon: <FaChartBar />, level: "Strategic" },
        { name: "Google Analytics", icon: <FaChartLine />, level: "Data-Driven" },
      ],
    },
    {
      category: "Creative & Technical",
      skills: [
        { name: "Web Designing", icon: <FaLaptopCode />, level: "Advanced" },
        { name: "Basic Graphic Designing", icon: <FaPalette />, level: "Creative" },
        { name: "Python Programming", icon: <FaPython />, level: "Technical" },
      ],
    },
    {
      category: "Professional Attributes",
      skills: [
        { name: "Problem-Solving", icon: <FaLightbulb />, level: "Analytical" },
        { name: "Time Management", icon: <FaClock />, level: "Efficient" },
        { name: "Teamwork & Collaboration", icon: <FaUsers />, level: "Synergy" },
      ],
    },
  ];

  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden min-h-screen">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] block mb-4">
            Technical Arsenal
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">
            Expertise <span className="text-white not-italic">&</span> Skills.
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-20">
          {skillCategories.map((cat, index) => (
            <div key={index} className="space-y-10">
              {/* Category Divider */}
              <div className="flex items-center gap-6">
                <h3 className="text-white/40 uppercase tracking-[0.3em] text-xs font-medium whitespace-nowrap">
                  {cat.category}
                </h3>
                <div className="h-[1px] w-full bg-[#D4AF37]/20" />
              </div>
              
              {/* Skill Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -5 }}
                    className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex items-center gap-6 group hover:border-[#D4AF37]/40 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm shadow-xl"
                  >
                    {/* Icon Container */}
                    <div className="text-3xl text-white/20 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500">
                      {skill.icon}
                    </div>
                    
                    {/* Text Details */}
                    <div>
                      <h4 className="text-white font-medium text-base md:text-lg tracking-wide group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-[#D4AF37]/60 text-[10px] uppercase tracking-[0.2em] mt-2 font-light">
                        {skill.level}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Ticker / Additional Soft Skills & Languages from CV */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-700">
          {["English", "Hindi", "Self-Management", "Adaptability", "Creative & Innovation"].map((item) => (
            <span key={item} className="text-white text-[10px] md:text-xs uppercase tracking-[0.25em]">
              {item}
            </span>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;