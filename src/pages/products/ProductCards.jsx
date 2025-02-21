
import React from "react";
import { useNavigate } from "react-router-dom";
import products from './products'


 

const ProductCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`); // Navigate to Product Details
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 gap-x-40 ml-[-5%] p-8">
      {products.map((product) => (
        <div
          key={product.id}
          className=" p-10 py-24 w-96 rounded-lg bg-gray-50 backdrop:blur-xl transition-all  duration-700 text-center hover:shadow-2xl cursor-pointer text-ev-gold hover:underline"
          onClick={() => handleCardClick(product.id)}
        >
          <img
            src={product.img}
            alt={product.heading}
            className="w-96 h-96 rounded-t-lg"
          />
          <h2 className="text-xl font-semibold text-center p-4" >
            {product.heading}
          </h2>
          <button className="bg-[var(--third-color)] mt-5 text-white font-xl py-2 px-20 rounded-sm mb-4 transition-all ease-in-out duration-700 hover:scale-105 hover:bg-ev-gold" >About it</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;