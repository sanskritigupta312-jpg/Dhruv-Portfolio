import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-[#D4AF37]/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-serif font-bold text-white tracking-widest mb-6 block">
              DHRUV<span className="text-[#D4AF37]">.</span>
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed text-lg font-light">
              Digital Marketing Executive at <span className="text-white">Webvoom Pvt Ltd</span>. 
              Specializing in high-performance strategies and luxury digital experiences.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors text-xl">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Experience', 'About', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-white/40 hover:text-[#D4AF37] hover:translate-x-2 transition-all inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white/40 group">
                <FaPhoneAlt className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <a href="tel:8707858634" className="hover:text-white transition-colors">8707858634</a>
              </li>
              <li className="flex items-center gap-4 text-white/40 group">
                <FaEnvelope className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <a href="mailto:dhruvv389@gmail.com" className="hover:text-white transition-colors">dhruvv389@gmail.com</a>
              </li>
              <li className="flex items-start gap-4 text-white/40">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
                <span>Lucknow, <br/>Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-white/20 text-sm tracking-widest uppercase">
            © {currentYear} Dhruv Verma. Built for Excellence.
          </p>
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -5 }}
            className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold border-b border-[#D4AF37] pb-1"
          >
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;