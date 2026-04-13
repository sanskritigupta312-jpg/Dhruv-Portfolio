import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            {portfolioData.name}
          </h3>
          <p className="text-sm mb-4">
            {portfolioData.title} passionate about creating data-driven
            marketing strategies that enhance brand visibility and drive
            business growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/experience" className="hover:text-white">Experience</Link></li>
            <li><Link to="/skills" className="hover:text-white">Skills</Link></li>
            <li><Link to="/education" className="hover:text-white">Education</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Contact
          </h4>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaPhone /> {portfolioData.contact.phone}
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> {portfolioData.contact.email}
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt /> {portfolioData.contact.address}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            {portfolioData.contact.linkedin && (
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin />
              </a>
            )}
            {portfolioData.contact.github && (
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>
          © {currentYear} {portfolioData.name}. All rights reserved.
        </p>
        <p className="mt-2">
          Designed & Developed with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;