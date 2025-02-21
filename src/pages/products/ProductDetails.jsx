import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import products from './products'
import ContactVisitCard from "../../components/ContactVisitCard";
import ExploreProducts from "../../components/ExploreProducts";




const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p className="mt-40 text-8xl text-ev-gold font-semibold">Product not found!</p>;
  }

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <button
        className="bg-[var(--third-color)] mt-40 text-white py-2 px-10 rounded-md mb-4 transition-all ease-in-out delay-75 duration-700 hover:scale-105 hover:bg-ev-gold"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="flex justify-center items-center flex-col gap-20 rounded-lg shadow-lg p-8 text-center">
        <img
          src={product.img}
          alt={product.heading}
          className="w-80 h-[500px] mb-4"
        />
        <h2 className="text-6xl font-bold text-ev-gold mb-0 mt-10">
          {product.heading}
        </h2>
        <ul className="text-xl pl-5 space-y-8">
          {product.details.map((detail, index) => (
            <li key={index} className="text-black">
              {detail}
            </li>
          ))}
        </ul>
      </div>
<ContactVisitCard />
<ExploreProducts />
    </motion.div>
  );
};

export default ProductDetails;