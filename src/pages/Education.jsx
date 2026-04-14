import { motion } from "framer-motion";

const Education = () => {
  const educationDetails = [
    {
      type: "Professional Certification",
      title: "Digital Marketing Professional",
      institution: "Digiperform, Hazratganj",
      duration: "2023",
      description: "Advanced certification focusing on performance marketing, ROI-driven strategies, and digital ecosystem management.",
      courses: ["SEO", "Google Ads", "Analytics"],
    },
    {
      type: "Degree",
      title: "Bachelor of Commerce (B.Com)",
      institution: "Lucknow University",
      duration: "2018 — 2021",
      description: "Comprehensive study of business operations, corporate accounting, and marketing principles.",
      courses: ["Business Ops", "Economics", "Management"],
    },
    {
      type: "Technical Certification",
      title: "O'level & CCC Course",
      institution: "NIELIT",
      duration: "Completed",
      description: "Foundational and advanced computer applications, programming concepts, and digital literacy.",
      courses: ["Python", "Web Design", "IT Tools"],
    }
  ];

  return (
    <section className="py-32 bg-dark px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <span className="text-gold uppercase tracking-[0.5em] text-xs block mb-4 text-center">Academic Path</span>
          <h2 className="text-6xl font-serif text-white text-center italic">Knowledge Base.</h2>
        </div>

        <div className="space-y-12">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-gold/20 group pb-12 last:pb-0"
            >
              {/* Timeline Marker */}
              <div className="absolute top-0 left-[-6px] w-3 h-3 bg-dark border-2 border-gold rounded-full group-hover:bg-gold transition-all" />
              
              <div className="bg-surface border border-gold/10 p-10 rounded-3xl hover:border-gold/30 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <span className="text-[10px] text-gold uppercase tracking-widest block mb-2">{edu.type}</span>
                    <h4 className="text-3xl font-serif text-white">{edu.title}</h4>
                    <p className="text-white/40 italic mt-1">{edu.institution}</p>
                  </div>
                  <span className="px-4 py-1 border border-gold/20 text-gold text-xs rounded-full font-mono uppercase">
                    {edu.duration}
                  </span>
                </div>
                
                <p className="text-white/60 font-light mb-8 max-w-2xl">{edu.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gold/5 border border-gold/10 text-white/40 text-[10px] uppercase rounded-md">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;