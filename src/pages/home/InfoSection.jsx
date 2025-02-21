import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBolt, FaBatteryFull, FaLeaf, FaGlobe } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const InfoSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll('.card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-20 bg-gray-50">
      {/* Welcome Message */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-ev-gold">
          Welcome to EVnoa
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          Pioneering the future of electric vehicle charging solutions with
          cutting-edge technology and a vision for a cleaner, smarter planet.
        </p>
      </div>

      {/* Card Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <FaBolt className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            The Science Behind Our EV Chargers
          </h3>
          <p className="text-gray-600 mt-2">
            Our chargers are designed with advanced engineering to deliver
            optimal performance, ensuring fast, efficient, and reliable
            energy transfer.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <FaLeaf className="text-green-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            Why Choose Electric Vehicles?
          </h3>
          <p className="text-gray-600 mt-2">
            Drive towards sustainability with EVs that reduce emissions,
            promote energy efficiency, and contribute to a greener future.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <FaBatteryFull className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            Reliable Energy Solutions
          </h3>
          <p className="text-gray-600 mt-2">
            Powered by innovative battery technology, our solutions ensure
            seamless energy access, wherever and whenever you need it.
          </p>
        </div>

        {/* Card 4 */}
        <div className="card flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <FaGlobe className="text-indigo-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            The Future with EVnoa
          </h3>
          <p className="text-gray-600 mt-2">
            Join us in shaping a cleaner, smarter planet by driving
            innovation and sustainability in electric vehicle technologies.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold text-ev-gold">EVnoa</h1>
        <p className="text-gray-600 mt-4">
          Driving the world towards a sustainable future, one charger at a
          time.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;