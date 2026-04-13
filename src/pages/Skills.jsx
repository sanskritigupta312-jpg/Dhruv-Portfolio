import { motion } from "framer-motion";
import { FaTools, FaLaptopCode, FaUserFriends } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Skills = () => {
  const skills = portfolioData?.skills || {
    technical: [],
    tools: [],
    soft: [],
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard
            title="Technical Skills"
            skillsArray={skills.technical}
            icon={<FaLaptopCode />}
          />
          <SkillCard
            title="Tools & Platforms"
            skillsArray={skills.tools}
            icon={<FaTools />}
          />
          <SkillCard
            title="Soft Skills"
            skillsArray={skills.soft}
            icon={<FaUserFriends />}
          />
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable SkillCard Component
const SkillCard = ({ title, skillsArray = [], icon }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="text-blue-600 text-2xl mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Skills List */}
      {Array.isArray(skillsArray) && skillsArray.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {skillsArray.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {typeof skill === "string" ? skill : skill.name}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No skills available.</p>
      )}
    </motion.div>
  );
};

export default Skills;