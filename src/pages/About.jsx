import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaAward, FaCode } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: <FaRocket />, mainValue: "10+", label: "Exp.", subValue: "1+ Year" },
    { icon: <FaLightbulb />, mainValue: "250", label: "Strategy", subValue: "Data-Driven" },
    { icon: <FaAward />, mainValue: "100", label: "Cert.", subValue: "Digiperform" },
    { icon: <FaCode />, mainValue: "SEO+", label: "Stack", subValue: "Python" },
  ];

  const skills = [
    "SEO / SEM", "Data Analytics", "Strategic Planning", 
    "Content Marketing", "Brand Management", "Social Media ROI"
  ];

  return (
    <section className="py-20 bg-[#080808] min-h-screen text-white font-sans overflow-hidden selection:bg-[#c5a358] selection:text-black">
      
      {/* Background Page Marker */}
      <div className="absolute top-0 right-10 text-[20rem] font-serif text-white/[0.02] select-none pointer-events-none leading-none">
        01
      </div>

      <div className="max-w-[1500px] mx-auto px-6 relative">
        
        {/* Top Navigation / Editorial Bar */}
        <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-12">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#c5a358]">
            Personnel Portfolio // March 2026
          </div>
          <div className="text-[10px] uppercase tracking-[0.5em] text-white/40 text-right">
            Digital Marketing / Case Study
          </div>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-0">
          
          {/* Section 1: The Main Title (Overlapping) */}
          <div className="lg:col-span-8 z-20">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-8xl md:text-[12rem] font-serif leading-[0.85] tracking-tighter mix-blend-difference"
            >
              DHRUV <br />
              <span className="text-[#c5a358] italic ml-12 md:ml-24">VERMA</span>
            </motion.h1>
            
            <div className="mt-12 lg:mt-24 max-w-lg lg:ml-24">
              <span className="block w-12 h-[1px] bg-[#c5a358] mb-6"></span>
              <p className="text-xl md:text-2xl font-serif text-white/80 leading-snug italic">
                "Specializing in high-ROI digital architecture and data-driven market narratives."
              </p>
            </div>
          </div>

          {/* Section 2: The Main Portrait (Asymmetrical) */}
          <div className="lg:col-span-4 mt-12 lg:mt-0 relative">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] group"
            >
              {/* Image Frame Decor */}
              <div className="absolute -inset-4 border border-[#c5a358]/30 z-0"></div>
              
              {/* REMOVED: grayscale and hover:grayscale-0 from this container */}
              <div className="relative h-full overflow-hidden bg-neutral-900 transition-all duration-1000 border border-white/5">
              {/* ADDED: saturate-[1.05] and contrast-[1.05] for a rich color profile */}
                <img 
                  src="/dhruv.jpeg" 
                  alt="Dhruv Verma" 
                  
                  className="w-full h-full object-cover saturate-[1.05] contrast-[1.05] scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                />
              </div>

              {/* Sidebar Content (The Stats) */}
              <div className="absolute -left-12 bottom-12 hidden xl:block">
                 <div className="bg-[#c5a358] text-black p-6 space-y-6">
                    {stats.slice(0, 2).map((s, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-4xl font-bold">{s.mainValue}</span>
                        <span className="text-[10px] uppercase tracking-tighter font-bold">{s.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 3: The Article Body */}
        <div className="grid lg:grid-cols-12 gap-12 mt-24">
          
          {/* Left Column: Metadata/Sidebar */}
          <div className="lg:col-span-3">
             <div className="sticky top-10">
                <h3 className="text-[#c5a358] text-xs uppercase tracking-[0.4em] mb-8 font-bold">The Tech Stack</h3>
                <ul className="space-y-4 text-white/40 text-sm tracking-wide font-light">
                  <li className="flex items-center gap-3"><FaCode className="text-[#c5a358]" /> Python Automation</li>
                  <li className="flex items-center gap-3"><FaCode className="text-[#c5a358]" /> Advanced SEO Architecture</li>
                  <li className="flex items-center gap-3"><FaCode className="text-[#c5a358]" /> Data Analytics (ROI Focus)</li>
                </ul>

                <div className="mt-16">
                  <span className="text-6xl font-serif text-white/10">01.</span>
                </div>
             </div>
          </div>

          {/* Center Column: The Narrative */}
          <div className="lg:col-span-6 border-l border-white/10 pl-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-2xl font-serif leading-relaxed mb-8 text-white first-letter:text-7xl first-letter:font-bold first-letter:text-[#c5a358] first-letter:mr-3 first-letter:float-left">
                Dhruv Verma represents a new echelon of digital marketing. By blending analytical precision with creative vision, he transforms complex data streams into high-performance market strategies.
              </p>
              <p className="text-white/60 leading-loose mb-8">
                Currently driving growth for <strong>Webvoom Pvt Ltd</strong>, his methodology focuses on the "Signatures of Success"—identifying high-impact metrics that translate directly to bottom-line results. Whether architecting SEO frameworks or managing brand ROI, the objective is absolute market dominance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-12">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-1 border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white/50 hover:bg-[#c5a358] hover:text-black hover:border-[#c5a358] transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Secondary Stats Grid */}
          <div className="lg:col-span-3 space-y-12">
             {stats.map((stat, i) => (
               <div key={i} className="border-b border-white/10 pb-6 group">
                  <div className="text-[#c5a358] text-sm mb-2 opacity-50 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{stat.label}</div>
                  <div className="text-4xl font-bold font-serif">{stat.mainValue}</div>
                  <div className="text-xs text-white/30 italic mt-1">{stat.subValue}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Footer Page Marker */}
        <div className="mt-32 pt-8 border-t border-white/10 flex justify-between items-center opacity-30 text-[9px] tracking-[0.5em] uppercase">
          <span>Dhruv Verma Editorial Portfolio</span>
          <span>© 2026 All Rights Reserved</span>
        </div>
      </div>
    </section>
  );
};

export default About;