import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaTools, FaClipboardList, FaCogs, FaTruck, FaIndustry } from 'react-icons/fa';

const AboutText = () => {
  return (
    <section className=" py-16 px-8">
      <h1 className="lg:text-8xl text-5xl font-bold text-center text-ev-gold mb-10">About Us</h1>

      {/* EV Market Expansion */}
      <motion.div 
        className="mb-8" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl leading-10 font-semibold text-ev-green flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaBolt className="text-blue-500 mr-2" /> Revolutionizing EV Infrastructure
        </h2>
        <p className="text-black ml-10 leading-relaxed">
          As EV markets swell, access to public charging must expand too. Today, most EV charging occurs at residences and workplaces, 
          but consumers increasingly expect the same simplicity and autonomy for EVs as they do for conventional vehicles.
        </p>
        <p className="text-black ml-10 leading-relaxed mt-4">
          Publicly accessible chargers worldwide have reached 1.8 million charging points. With regulated electricity prices, demand from urban dwellers, 
          and electrification of fleets, EV charging businesses are growing more profitable. Enn Engineers is stepping in with innovative ideas, skills, and expertise 
          to cater to this growing industry, supporting companies assembling chargers, fleets, and logistics services.
        </p>
      </motion.div>

      {/* Expertise and Experience */}
      <motion.div 
        className="mb-8" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl leading-10 font-semibold text-ev-green flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaClipboardList className="text-blue-500 mr-2" /> Expertise Built Over Years
        </h2>
        <p className="text-black ml-10 leading-relaxed">
          We have been serving the electrical industry for over six years, learning from client demands and needs. Recognized as a Class "A" electrical contractor 
          in five states, we are committed to providing professional, high-standard services. Our clients' responsibilities are our priorities, and we aim to deliver 
          exceptional services and supply with accountability.
        </p>
      </motion.div>

      {/* Our Services */}
      <motion.div 
        className="mb-8" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl leading-10 font-semibold text-ev-green flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaCogs className="text-blue-500 mr-2" /> Comprehensive Services We Offer
        </h2>
        <ul className="list-disc pl-5 text-black ml-10 leading-relaxed">
          <li>Design</li>
          <li>Liaisoning</li>
          <li>Supply</li>
          <li>Erection & Commissioning</li>
          <li>Manufacturing & Fabrication</li>
        </ul>
      </motion.div>

      {/* Design Services */}
      <motion.div 
        className="mb-8" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl leading-10 font-semibold text-ev-green flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaTools className="text-blue-500 mr-2" /> Innovative Design Solutions
        </h2>
        <p className="text-black ml-10 leading-relaxed">
          Our design process starts with understanding client demands. After a site visit, we prepare layouts, develop BOQs, and design detailed plans covering electrical, 
          civil, and mechanical aspects, ensuring a one-stop solution for our clients.
        </p>
      </motion.div>

      {/* Liaisoning Services */}
      <motion.div 
        className="mb-8" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl leading-10 font-semibold text-ev-green flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaIndustry className="text-blue-500 mr-2" /> Liaisoning Made Easy
        </h2>
        <p className="text-black ml-10 leading-relaxed">
          We assist with power sanctions, electrical safety licenses, and application submissions. Certified as a Class "A" contractor, we handle site visits, 
          supply power control panels, HT overhead line work, and more, ensuring seamless operations for our clients.
        </p>
      </motion.div>

      {/* Supply Chain */}
      <motion.div 
        className="mb-8" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl leading-10 font-semibold text-ev-green flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaTruck className="text-blue-500 mr-2" /> Reliable Supply Chain
        </h2>
        <p className="text-black ml-10 leading-relaxed">
          Our Pan-India supply chain ensures verified materials, competitive pricing, and timely delivery. We partner with leading brands like Polycab, RR Cables, Havels, 
          L&T, Schneider, ABB, and more to provide top-quality products.
        </p>
      </motion.div>

      {/* Manufacturing & Fabrication */}
      <motion.div 
        className="mb-8" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl leading-10 font-semibold text-ev-green flex items-center mb-4 mt-16 font-[Tektur] tracking-widest">
          <FaIndustry className="text-blue-500 mr-2" /> Manufacturing & Fabrication Excellence
        </h2>
        <p className="text-black ml-10 leading-relaxed">
          Enn Engineers manufactures custom electrical control panels, including PCC, MCC, APFC, and PLC panels. We also fabricate PNB sheds, canopies, bollards, and 
          charger stands, delivering innovative and budget-friendly solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutText;
