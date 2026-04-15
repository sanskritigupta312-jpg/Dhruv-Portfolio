import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = {
    email: "dhruvv389@gmail.com",
    phone: "+91 87078 58634",
    phoneClean: "+918707858634", 
    address: "Lucknow, Uttar Pradesh",
    // Link to open Google Maps directly
    addressLink: "https://www.google.com/maps/search/?api=1&query=Lucknow,Uttar+Pradesh",
    linkedin: "https://linkedin.com/in/dhruv-verma-6625b3324"
  };

  return (
    <section className="min-h-screen bg-dark py-32 px-6 relative overflow-hidden flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] block mb-4">Connection</span>
          <h2 className="text-6xl md:text-7xl font-serif text-white mb-6">
            Let’s Create <span className="text-gold italic">Impact.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ContactCard
              icon={<FaPhoneAlt />}
              title="Direct Line"
              value={contactInfo.phone}
              link={`tel:${contactInfo.phoneClean}`}
            />
            <ContactCard
              icon={<FaEnvelope />}
              title="Professional Email"
              value={contactInfo.email}
              link={`mailto:${contactInfo.email}`}
            />
          </div>

          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Current Base"
            value={contactInfo.address}
            link={contactInfo.addressLink}
          />

          <div className="flex justify-center pt-4">
            <SocialCard 
              icon={<FaLinkedin />} 
              label="LinkedIn Profile" 
              link={contactInfo.linkedin} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated ContactCard: The whole card is now a link if "link" prop is provided
const ContactCard = ({ icon, title, value, link }) => {
  const CardContent = (
    <>
      <div className="text-3xl text-gold group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div>
        <h4 className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-1 font-mono">
          {title}
        </h4>
        <p className="text-white text-xl font-serif italic group-hover:text-gold transition-colors">
          {value}
        </p>
      </div>
    </>
  );

  const classes = "bg-surface border border-gold/10 p-8 rounded-[2rem] hover:border-gold/30 transition-all duration-500 flex items-center gap-6 group w-full text-left";

  if (link) {
    return (
      <a 
        href={link} 
        target={link.startsWith('http') ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={classes}
      >
        {CardContent}
      </a>
    );
  }

  return <div className={classes}>{CardContent}</div>;
};

const SocialCard = ({ icon, label, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)" }}
    className="w-full md:w-1/2 bg-surface border border-gold/10 p-6 rounded-2xl flex items-center justify-center gap-4 text-white/50 hover:text-gold transition-all duration-500"
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-xs uppercase tracking-[0.2em] font-mono">{label}</span>
  </motion.a>
);

export default Contact;