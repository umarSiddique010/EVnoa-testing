import React from 'react'
import ProductCards from './ProductCards'
import { motion } from "framer-motion";

import ContactVisitCard from '../../components/ContactVisitCard'

const ProductPage = () => {
  return (
    <main
    className='pt-40 py-40 lg:px-40 bg-[var(--bg-color)]'
    >
        <motion.h1
        className="lg:text-8xl text-5xl font-bold text-center text-ev-gold mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Products
      </motion.h1>
      <ProductCards />

      <ContactVisitCard />
    </main>
  )
}

export default ProductPage
