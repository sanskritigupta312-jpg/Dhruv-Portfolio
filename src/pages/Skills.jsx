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
    <section className="py-22 bg-[#050505] px-6 relative overflow-hidden min-h-screen">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="relative max-w-5xl mx-auto mb-15 mt-10 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl py-15 px-8">
          <style jsx>
            {`
                @keyframes float{
                  0% {
                    transform: translateY(0px) scale(1);
                  }
                  50% {
                    transform: translateY(-20px) scale(1.05);
                  }
                 100% {
                   transform: translateY(0px) scale(1);
                  } 
               }
            `}

          </style>
          {/* Water Bubble Effects */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden">

            <div className="absolute top-[-20px] left-[10%] w-[120px] h-[120px] rounded-full  bg-white/5 backdrop-blur-md animate-[float_10s_ease-in-out_infinite]" />

            <div className="absolute bottom-[10px] right-[15%] w-[80px] h-[80px] rounded-full bg-white/5 backdrop-blur-md animate-[float_12s_ease-in-out_infinite]" />

            <div className="absolute top-[40%] left-[70%] w-[60px] h-[60px] rounded-full bg-white/5 backdrop-blur-md animate-[float_9s_ease-in-out_infinite]" />

            <div className="absolute bottom-[-40px] left-[35%] w-[150px] h-[150px] rounded-full bg-white/5 backdrop-blur-md animate-[float_14s_ease-in-out_infinite]" />
         </div>
          <div className="relative z-10 text-center">
            <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] block mb-4">
              Technical Arsenal
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">
              Expertise <span className="text-white not-italic">&</span> Skills.
            </h2>
          </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: sIdx * 0.1 }}

                    className="bg-white/[0.02] border border-white/5 lg:p-6 md:p-5 rounded-2xl flex items-center lg:gap-5 md:gap-4 group hover:border-[#D4AF37]/40 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm shadow-xl"
                  >
                    {/* Icon Container */}
                    <div className="lg:text-2xl md:text-xs p-4 text-white/20 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500">
                      {skill.icon}
                    </div>
                    
                    {/* Text Details */}
                    <div>
                      <h4 className="text-white font-small lg:text-lg tracking-wide group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-[#D4AF37]/60 text-[10px] uppercase tracking-[0.2em] font-light">
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
        <div className="mt-20 overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-700">
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
          
             }
              .animate-marquee {
                animation: marquee 15s linear infinite;
              }
             `}</style>
          <div className="flex w-max animate-marquee gap-6 md:gap-8">
            {["English", "Hindi", "Self-Management", "Adaptability", "Creative & Innovation"].map((item, idx) => (
              <span key={idx} className="text-white text-[10px] md:text-xs  uppercase tracking-[0.25em] whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
         
        </div>
        
      </div>
    </section>
  );
};

export default Skills;