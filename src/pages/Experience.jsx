import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-6">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3 top-1.5 w-6 h-6 bg-blue-500 rounded-full"></div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;