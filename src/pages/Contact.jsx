import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import portfolioData from "../data/portfolioData";

const Contact = () => {
  const { contact, name } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link (no backend required)
    const mailtoLink = `mailto:${contact.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactCard
              icon={<FaPhoneAlt />}
              title="Phone"
              value={contact.phone}
              link={`tel:${contact.phone}`}
            />
            <ContactCard
              icon={<FaEnvelope />}
              title="Email"
              value={contact.email}
              link={`mailto:${contact.email}`}
            />
            <ContactCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              value={contact.address}
            />

            {/* Social Links */}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
              >
                <FaLinkedin className="text-blue-600 text-2xl" />
                <span className="text-gray-700 font-medium">
                  Connect on LinkedIn
                </span>
              </a>
            )}

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps?q=Hazratganj%20Lucknow&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send a Message
            </h3>

            {submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you! Your message has been prepared for sending.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Card Component
const ContactCard = ({ icon, title, value, link }) => (
  <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition flex items-center gap-4">
    <div className="text-blue-600 text-2xl">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      {link ? (
        <a href={link} className="text-gray-600 hover:text-blue-600">
          {value}
        </a>
      ) : (
        <p className="text-gray-600">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;