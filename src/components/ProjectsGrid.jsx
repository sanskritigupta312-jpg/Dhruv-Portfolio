import { motion } from "framer-motion";

const caseStudies = [
  {
    id: "01",
    title: "JBR Infra Lead Generation",
    category: "Real Estate Social Strategy",
  },
  {
    id: "02",
    title: "Laura Beauty Brand Identity",
    category: "Visual Identity & Graphic Design",
  },
  {
    id: "03",
    title: "WebVoom Growth Optimization",
    category: "Performance Marketing & SEO",
  }
];

const ProjectGrid = () => {
  return (
    <section className="py-24 bg-dark text-white"> {/* Matches --color-dark #050505 */}
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
            Portfolio
          </span>
          <h2 className="text-5xl font-serif italic text-gold-gradient">
            Case Studies
          </h2>
        </div>

        {/* Simplified Case Study List */}
        <div className="flex flex-col">
          {caseStudies.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ x: 10 }} // Subtle motion for a classy feel
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] // Matches your --ease-premium
              }}
              viewport={{ once: true }}
              className="group border-b border-white/5 py-12 flex items-start gap-10 cursor-default hover:bg-glass transition-colors duration-500"
            >
              {/* Project Number */}
              <span className="text-gold-muted font-mono text-sm mt-2 opacity-40 group-hover:opacity-100 transition-opacity">
                {project.id}
              </span>
              
              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-serif group-hover:text-gold transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-white/30 text-xs uppercase tracking-[0.3em] mt-3 group-hover:text-white/60 transition-colors">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;