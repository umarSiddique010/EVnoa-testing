import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 px-5">
      {/* Logo and Company Info Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0 py-20 gap-40">
   
      
         <div> <h1 className="text-xl font-semibold">ENN Engineers Pvt. Ltd.</h1>
         <p className="text-sm">Technology with Simplicity</p></div>

      </div>

      {/* Services, Contact, and Certifications Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-semibold text-lg mb-2">Our Services</h2>
          <ul className="space-y-2">
            <li>Design</li>
            <li>Liaisoning</li>
            <li>Supply</li>
            <li>Erection & Commissioning</li>
            <li>Manufacturing & Fabrication</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="font-semibold text-lg mb-2">Contact</h2>
          <p className="flex items-center justify-center space-x-2">
            <FaPhoneAlt />
            <span>+91 9711963167 / 9818819060</span>
          </p>
          <p className="flex items-center justify-center space-x-2 mt-2">
            <FaEnvelope />
            <span>info@ennengineers.com</span>
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <h2 className="font-semibold text-lg mb-2">Certifications</h2>
          <ul className="space-y-2">
            <li>ISO 9001:2015</li>
            <li>SA8000:2014</li>
            <li>Class “A” Electrical Contractor</li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
        <p>&copy; 2025 ENN Engineers Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


