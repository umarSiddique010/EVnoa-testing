import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const QuoteSection = () => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const overlayTextRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const overlayText = overlayTextRef.current;

    // Ensure smooth looping animation
    gsap.timeline().to([marquee, overlayText], {
      xPercent: -50, // Move by 50% of the container width
      duration: 15,
      repeat: -1,
      ease: 'none',
    });

    const container = containerRef.current;
    const overlay = overlayRef.current;

    gsap.set(overlay, {
      clipPath: 'inset(100% 0 0 0)',
    });

    const handleEnter = () => {
      gsap.to(overlay, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 0.6,
        ease: 'power2.inOut',
      });
    };

    const handleLeave = () => {
      gsap.to(overlay, {
        clipPath: 'inset(100% 0 0 0)',
        duration: 0.5,
        ease: 'power2.inOut',
      });
    };

    const handleWheel = (e) => {
      const speed = e.deltaY > 0 ? 2 : -2;
      gsap.to([marquee, overlayText], {
        x: `+=${speed * 50}`,
        duration: 0.5,
        ease: 'none',
      });
    };

    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);
    window.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative text-white font-semibold font-[Tektur] py-2 lg:py-8 px-4 w-full h-16 lg:h-32 tracking-wider bg-[var(--third-color)] overflow-hidden flex items-center justify-center z-[90] text-base sm:text-lg md:text-xl lg:text-2xl"
    >
      {/* Marquee content */}
      <div
        ref={marqueeRef}
        className="flex items-center justify-start shrink-0 gap-8 sm:gap-10 w-[300%] sm:w-[250%] md:w-[200%] lg:w-[200%] whitespace-nowrap"
      >
        <h1 className="w-auto px-4">
          EVnoa: Pioneering sustainable EV charging solutions, driving efficiency and reliability for a cleaner, smarter future.
        </h1>
        <h1 className="w-auto px-4">
          EVnoa: Pioneering sustainable EV charging solutions, driving efficiency and reliability for a cleaner, smarter future.
        </h1>
        <h1 className="w-auto px-4">
          EVnoa: Pioneering sustainable EV charging solutions, driving efficiency and reliability for a cleaner, smarter future.
        </h1>
        <h1 className="w-auto px-4">
          EVnoa: Pioneering sustainable EV charging solutions, driving efficiency and reliability for a cleaner, smarter future.
        </h1>
      </div>

      {/* Overlay content */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-ev-gold pointer-events-none z-10 flex items-center justify-center"
      >
        <div
          ref={overlayTextRef}
          className="flex items-center justify-start shrink-0 gap-8 sm:gap-10 w-[300%] sm:w-[250%] md:w-[200%] lg:w-[200%] whitespace-nowrap"
        >
          <h1 className="w-auto px-4">
            EVnoa: Pioneering sustainable EV charging solutions, driving efficiency and reliability for a cleaner, smarter future.
          </h1>
          <h1 className="w-auto px-4">
            EVnoa: Pioneering sustainable EV charging solutions, driving efficiency and reliability for a cleaner, smarter future.
          </h1>
          <h1 className="w-auto px-4">
            EVnoa: Pioneering sustainable EV charging solutions, driving efficiency and reliability for a cleaner, smarter future.
          </h1>
          <h1 className="w-auto px-4">
            EVnoa: Pioneering sustainable EV charging solutions, driving efficiency and reliability for a cleaner, smarter future.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
