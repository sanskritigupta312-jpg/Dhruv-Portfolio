import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Hero = () => {
  const { name, title, hero, contact } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-72 h-72 bg-white rounded-full top-10 left-10 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-pink-400 rounded-full bottom-10 right-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg mb-2 text-blue-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {hero?.greeting || "Hello, I'm"}
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {name}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-gray-200 mb-6 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {hero?.description ||
              "I specialize in SEO, SEM, and social media marketing to help brands grow their digital presence and generate quality leads."}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              <FaEnvelope /> Hire Me
            </a>

            <a
              href={hero?.resume || "/Dhruv_Verma_Resume.pdf"}
              download
              className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 p-3 rounded-full hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            )}
            <a
              href={`mailto:${contact.email}`}
              className="bg-white text-blue-700 p-3 rounded-full hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30"></div>
            <img
              src={hero?.profileImage || "/images/dhruv.jpg"}
              alt={name}
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;