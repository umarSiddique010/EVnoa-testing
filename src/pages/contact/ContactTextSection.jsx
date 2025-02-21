import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ContactTextSection = () => {
  return (
    <section className="py-16 px-8">

      {/* Office Address */}
      <motion.div
        className="mb-8"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl leading-10 font-semibold flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaMapMarkerAlt className="text-[var(--third-color)] mr-2" /> Office Location
        </h2>
        <p className="text-gray-400 ml-10 leading-relaxed">
          Enn Engineers, Plot No. 123, Industrial Area, Sector 45, New Delhi, India. Our office is strategically located to
          serve clients efficiently across all regions.
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="mb-8"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl leading-10 font-semibold flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaPhoneAlt className="text-[var(--third-color)] mr-2" /> Get in Touch
        </h2>
        <p className="text-gray-400 ml-10 leading-relaxed">
          Phone: +91 9876543210 <br />
          Email: contact@ennengineers.com <br />
          We are available to answer your queries and provide assistance during our working hours.
        </p>
      </motion.div>

      {/* Working Hours */}
      <motion.div
        className="mb-8"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl leading-10 font-semibold flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaClock className="text-[var(--third-color)] mr-2" /> Working Hours
        </h2>
        <p className="text-gray-400 ml-10 leading-relaxed">
          Monday to Friday: 9:00 AM – 6:00 PM <br />
          Saturday: 10:00 AM – 4:00 PM <br />
          Sunday: Closed <br />
          We ensure prompt and reliable services during these hours.
        </p>
      </motion.div>

      {/* Customer Support */}
      <motion.div
        className="mb-8"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl leading-10 font-semibold flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaEnvelope className="text-[var(--third-color)] mr-2" /> Customer Support
        </h2>
        <p className="text-gray-400 ml-10 leading-relaxed">
          For technical support, partnership inquiries, or business collaborations, feel free to reach out to us via email or phone. 
          Our dedicated team is here to help you with your EV infrastructure needs.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactTextSection;
