import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components & Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

// Simple Internal NotFound Component (Fixes potential "NotFound is not defined" error)
const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-9xl font-serif text-gold/20 absolute">404</h1>
    <h2 className="text-4xl font-serif text-white relative z-10">Lost in the Digital Void?</h2>
    <p className="text-white/40 mt-4 relative z-10">The page you're looking for doesn't exist.</p>
    <a href="/" className="mt-8 px-8 py-3 border border-gold/30 text-gold uppercase tracking-widest text-xs hover:bg-gold hover:text-dark transition-all">
      Return Home
    </a>
  </div>
);

// Component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animation wrapper for page transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold selection:text-dark">
      <ScrollToTop />
      
      {/* 1. Global Noise Texture (Matching Home page style) */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. Optimized Background Ambient Glow Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 blur-[100px] md:blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 blur-[100px] md:blur-[150px] rounded-full" />
      </div>

      {/* 3. Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          {/* mode="wait" ensures the old page fades out before the new one fades in */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
              <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
              <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;