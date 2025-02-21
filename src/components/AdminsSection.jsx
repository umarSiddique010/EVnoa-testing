import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Arif from '../assets/AdminsPic/Arif.png';
import Asif from '../assets/AdminsPic/Asif.png';

gsap.registerPlugin(ScrollTrigger);

const AdminsSection = () => {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const leftImage = leftImageRef.current;
    const rightImage = rightImageRef.current;

    gsap.fromTo(
      leftImage,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: leftImage,
          start: 'top 90%',
          end: 'top 70%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      rightImage,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: rightImage,
          start: 'top 90%',
          end: 'top 70%',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-16 py-32">
      <h2 className="text-6xl md:text-8xl tracking-wider font-[merienda] font-medium text-ev-gold mb-14">
        Admins
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left Image */}

        <div
          ref={rightImageRef}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
        >
          <img
            src={Asif}
            alt="Asif Hussain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-ev-gold font-bold text-2xl md:text-3xl font-[merienda]">
              Asif Hussain
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Founder, MBA, BE [Self Employed]
            </p>
          </div>
        </div>


        {/* Right Image */}
        <div
          ref={leftImageRef}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
        >
          <img
            src={Arif}
            alt="Arif Hussain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-ev-gold font-bold text-2xl md:text-3xl font-[merienda]">
              Arif Hussain
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Co-Founder, BBA [Self Employed]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminsSection;
