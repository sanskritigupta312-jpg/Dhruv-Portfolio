import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const StatItem = ({ value, label, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-8 border-r border-white/5 last:border-0">
      <div className="text-5xl md:text-7xl font-serif font-bold text-gold mb-2">
        {count}{suffix}
      </div>
      <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-medium">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-dark border-y border-white/5">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4">
        <StatItem value="50" suffix="%" label="Avg. ROI Increase" />
        <StatItem value="25" suffix="+" label="Premium Clients" />
        <StatItem value="500" suffix="+" label="Leads Generated" />
        <StatItem value="2" suffix="+" label="Years Experience" />
      </div>
    </section>
  );
};

export default StatsSection;