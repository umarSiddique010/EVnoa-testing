import React from 'react'
import { motion } from 'framer-motion';

import ContactField from './ContactField'
import ContactTextSection from './ContactTextSection'
import ExploreProducts from '../../components/ExploreProducts';

const ContactPage = () => {
  return (
    <main
    className='pt-32 py-20'
    >
       <motion.h1
        className="lg:text-8xl text-5xl font-bold text-center text-ev-gold mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>
      <ContactField />
      <ContactTextSection />

      <ExploreProducts />
    </main>
  )
}

export default ContactPage
