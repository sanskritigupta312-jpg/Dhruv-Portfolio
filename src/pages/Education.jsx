import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Education = () => {
  // Safely access education data
  const educationList = portfolioData?.education || [];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 pl-8">
          {educationList.length > 0 ? (
            educationList.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-10 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

                {/* Education Card */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-2">
                    {edu.title.toLowerCase().includes("course") ||
                    edu.title.toLowerCase().includes("certificate") ? (
                      <FaCertificate className="text-blue-600 mr-3 text-xl" />
                    ) : (
                      <FaGraduationCap className="text-blue-600 mr-3 text-xl" />
                    )}
                    <h3 className="text-xl font-semibold text-gray-800">
                      {edu.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 font-medium">
                    {edu.institution}
                  </p>

                  {edu.year && (
                    <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  )}

                  {edu.description && (
                    <p className="text-gray-600">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No education details available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;