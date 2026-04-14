import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Social Strategy",
      desc: "Architected cross-platform strategies for premium developments at JBR Infra, increasing lead generation by 40%.",
      tech: ["Meta Ads", "Content Strategy", "Analytics"],
    },
    {
      title: "Laura Beauty Branding",
      desc: "A complete visual identity overhaul and social media management for a boutique makeup brand.",
      tech: ["Graphic Design", "Social Management"],
    },
    {
      title: "SEO Campaign: Webvoom",
      desc: "Ongoing organic growth initiatives focusing on high-intent keywords and conversion optimization.",
      tech: ["SEO", "SEM", "Copywriting"],
    }
  ];

  return (
    <section className="py-32 bg-dark px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-7xl font-serif text-white">Selected <span className="text-gold italic">Works</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-surface border border-gold/10 p-10 rounded-[2.5rem] hover:border-gold/40 transition-all flex flex-col h-full"
            >
              <h3 className="text-2xl font-serif text-white mb-4 italic">{proj.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed mb-8 flex-grow">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {proj.tech.map(t => (
                  <span key={t} className="text-[9px] uppercase tracking-widest text-gold/60 border border-gold/10 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;