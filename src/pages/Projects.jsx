import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        >
          My Projects
        </motion.h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Showcasing digital marketing campaigns and web solutions designed for growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t pt-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline">
                      <FaExternalLinkAlt /> Live Link
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:underline">
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;