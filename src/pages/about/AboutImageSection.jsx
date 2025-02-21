import CarsImage from '../../assets/otherImages/cars.png'
import TourPics from '../../assets/otherImages/tourpics.png'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
gsap.registerPlugin(ScrollTrigger);

const AboutImageSection = () => {
  const imageLeftRef = useRef(null);
  const imageRightRef = useRef(null);

  useEffect(() => {
   
    gsap.fromTo(
      imageLeftRef.current,
      { x: -200, opacity: 0 }, // Start animation
      {
        x: 0,
        opacity: 1, // End animation
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageLeftRef.current, // Trigger animation when image is in view
          start: "top 80%", // Start when 80% of the viewport is visible
        },
      }
    );

    gsap.fromTo(
      imageRightRef.current,
      { x: 200, opacity: 0 }, // Start animation
      {
        x: 0,
        opacity: 1, // End animation
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRightRef.current, // Trigger animation when image is in view
          start: "top 80%", // Start when 80% of the viewport is visible
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col justify-between items-center px-1 py-8 lg:p-8  gap-20 overflow-hidden">
      {/* Left Image */}
      <div
        ref={imageLeftRef}
        className="lg:w-1/2 lg:h-96 flex justify-center lg:ml-[-30%] h-40 w-full"
      >
        <img
          src={CarsImage}
          alt="Gas Vehicle vs EV Emissions"
          className="rounded-lg shadow-lg h-48 w-full lg:h-96"
        />
      </div>

      {/* Right Image */}
      <div
        ref={imageRightRef}
        className="lg:w-1/2 lg:h-96 flex justify-center lg:mr-[-30%] h-40 w-full"
      >
        <img
          src={TourPics}
          alt="Fabrication & Assembly"
          className="rounded-lg shadow-lg h-48 w-full lg:h-96"
        />
      </div>
    </div>
  );
};

export default AboutImageSection;
