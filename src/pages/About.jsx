import { motion } from "framer-motion";
import { FaUserTie, FaBullseye, FaLanguage } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const About = () => {
  const { name, title, about, skills, languages, hero } = portfolioData;

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
          About Me
        </motion.h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={hero?.profileImage || "/images/profile.jpg"}
              alt={name}
              className="w-72 h-72 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {name}
            </h3>
            <p className="text-blue-600 font-medium mb-4">{title}</p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {about?.description}
            </p>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <span className="font-semibold text-gray-700">
                  Date of Birth:
                </span>{" "}
                {portfolioData.dob}
              </div>
              <div>
                <span className="font-semibold text-gray-700">
                  Location:
                </span>{" "}
                Lucknow, India
              </div>
            </div>

            {/* Languages */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <FaLanguage className="text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">
                  Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages?.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <div className="flex items-center mb-2">
                <FaBullseye className="text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">
                  Key Strengths
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills?.soft?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission / Vision Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-3">
              <FaUserTie className="text-blue-600 text-xl mr-2" />
              <h4 className="text-xl font-semibold text-gray-800">
                Professional Mission
              </h4>
            </div>
            <p className="text-gray-600">
              To help businesses grow by implementing innovative and
              data-driven digital marketing strategies that enhance brand
              visibility, generate quality leads, and maximize return on
              investment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-3">
              <FaBullseye className="text-blue-600 text-xl mr-2" />
              <h4 className="text-xl font-semibold text-gray-800">
                Career Vision
              </h4>
            </div>
            <p className="text-gray-600">
              To become a leading digital marketing expert by continuously
              learning emerging technologies and delivering impactful
              marketing campaigns that drive measurable business success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;