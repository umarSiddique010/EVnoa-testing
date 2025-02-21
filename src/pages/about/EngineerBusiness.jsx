// EngineerBisSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnnEngBusiness from "../../assets/otherImages/EnnEngBusiness.png";

gsap.registerPlugin(ScrollTrigger);

const EngineerBusiness = () => {
  const firstImageRef = useRef(null);
  const firstTextRef = useRef(null);

  useEffect(() => {
    // First Image Animation
    gsap.fromTo(
      firstImageRef.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: firstImageRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // First Text Animation
    gsap.fromTo(
      firstTextRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: firstTextRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center py-20 px-2 w-screen lg:space-x-4 lg:ml-[-20%]">
      <img
        ref={firstImageRef}
        src={EnnEngBusiness}
        alt="Customized EV Design"
        className="lg:w-[70%] lg:h-80 h-48 w-full"
      />
    </div>
  );
};

export default EngineerBusiness;
