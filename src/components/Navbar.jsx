import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll to trigger the "glass" navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu automatically when clicking a link
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Updated Navigation Links to include all pages
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-[#D4AF37]/10 py-4 shadow-2xl" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Luxury Logo */}
        <NavLink to="/" className="text-2xl font-serif font-bold text-white tracking-widest group">
          DHRUV<span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500">.</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-colors duration-500 ${
                  isActive ? "text-[#D4AF37]" : "text-white/50 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {/* Gold underline for active link */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#D4AF37]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="mailto:dhruvv389@gmail.com"
            className="px-6 py-3 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          {isOpen ? <HiX size={28} className="text-[#D4AF37]" /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-3xl border-b border-[#D4AF37]/20 shadow-2xl h-screen overflow-y-auto"
          >
            <div className="flex flex-col px-8 py-12 space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-2xl font-serif tracking-widest ${
                      isActive ? "text-[#D4AF37]" : "text-white/60"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              <div className="pt-8 border-t border-white/10">
                <a
                  href="mailto:dhruvv389@gmail.com"
                  className="inline-block w-full text-center bg-[#D4AF37] text-black font-bold py-4 rounded-xl uppercase tracking-widest text-sm"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;