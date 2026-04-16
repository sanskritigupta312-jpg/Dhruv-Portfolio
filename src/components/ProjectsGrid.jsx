import { motion } from "framer-motion";

const projects = [
  {
    title: "WebVoom Growth Strategy",
    category: "Digital Marketing",
    size: "lg:col-span-2 lg:row-span-2",
    img: "/project1.jpg"
  },
  {
    title: "JBR Infra Branding",
    category: "Lead Generation",
    size: "lg:col-span-1 lg:row-span-1",
    img: "/project2.jpg"
  },
  {
    title: "Beauty Mantra SEO",
    category: "Search Optimization",
    size: "lg:col-span-1 lg:row-span-1",
    img: "/project3.jpg"
  }
];

const ProjectGrid = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-xl bg-surface border border-white/10 ${project.size} min-h-[300px]`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10 opacity-80" />
              
              {/* Image Placeholder - Use your actual project images */}
              <div className="absolute inset-0 bg-white/5 transition-transform duration-700 group-hover:scale-110" />
              
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="text-gold text-xs uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;