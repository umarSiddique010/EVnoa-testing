import React from "react";
import { FaTools, FaSolarPanel, FaBuilding, FaBolt, FaCogs, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const EngineerSection = () => {
  const services = [
    {
      title: "Architectural Engineering",
      icon: <FaBuilding className="text-4xl text-blue-500" />,
    },
    {
      title: "Automation",
      icon: <FaCogs className="text-4xl text-green-500" />,
    },
    {
      title: "EV Chargers & Solar Energy",
      icon: <FaSolarPanel className="text-4xl text-yellow-500" />,
    },
    {
      title: "Electrical Engineering",
      icon: <FaBolt className="text-4xl text-red-500" />,
    },
    {
      title: "Civil Engineering",
      icon: <FaTools className="text-4xl text-purple-500" />,
    },
    {
      title: "CM&IS",
      icon: <FaShieldAlt className="text-4xl text-teal-500" />,
    },
    {
      title: "Safety & Security",
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
    },
    {
      title: "Structural Engineering",
      icon: <FaBuilding className="text-4xl text-indigo-500" />,
    },
  ];

  return (
    <section className="py-16 px-6 ">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-ev-gold mb-14">We Believe in Providing Complete Solutions</h2>
        <p className="text-lg text-gray-400 mb-20 max-w-4xl mx-auto">
          We aim to meet the requirements of commercial fleet organizations with minimal CAPEX and OPEX, leveraging good engineering practices under one umbrella.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineerSection;
