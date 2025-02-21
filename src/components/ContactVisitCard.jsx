import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhoneAlt } from "react-icons/fa"; // Using a phone icon
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ContactVisitCard = () => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const card = cardRef.current;

    // GSAP animation for fade-in and slide-up
    const animation = gsap.fromTo(
      card,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    return () => {
      animation.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="py-28 px-6 md:px-20 w-full bg-[var(--bg-color)]">
      <div
        ref={cardRef}
        className="bg-gray-50 rounded-lg shadow-2xl p-8 flex flex-col items-center text-center max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300"
      >
        {/* Icon */}
        <div className="mb-4">
          <FaPhoneAlt className="text-ev-gold text-6xl" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6">
          Have questions or need assistance? Visit our contact page to find out
          how to connect with us. We're here to help you.
        </p>

        {/* Button with Framer Motion */}
        <motion.div
          className="relative inline-block"
          whileHover="hover"
          initial="rest"
          animate="rest"
          exit="rest"
        >
          <motion.button
            className="py-3 px-12 md:px-20 text-lg md:text-xl font-semibold font-[merienda] rounded-lg bg-[var(--third-color)] shadow-lg focus:outline-none"
            variants={{
              rest: { backgroundColor: "#2e9d43" },
              hover: { backgroundColor: "#c4ad3c", transition: { duration: 0.8 } },
            }}
            aria-label="Contact Us"
            onClick={() => navigate("/contact")} // Navigate to /contact page
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactVisitCard;