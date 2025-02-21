import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom"; 
import { gsap } from "gsap";

import ScrollToTop from "./components/ScrollToTop";
import PageTitle from "./components/PageTitle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppPopUp from "./components/WhatsAppPopUp";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import ProductPage from "./pages/products/ProductPage";
import FAQ from "./components/FAQ";
import ProductDetails from "./pages/products/ProductDetails";


const App = () => {
  

  return (
    <>
      <PageTitle />
      <ScrollToTop />

 
      <WhatsAppPopUp />
      <Header />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;