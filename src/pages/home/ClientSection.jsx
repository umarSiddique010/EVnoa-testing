import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import VolvoLogo from "../../assets/logo/volvo-logo.png";
import BluSmartLogo from "../../assets/logo/blu-smart.webp";
import CZLogo from "../../assets/logo/CZ-logo.png";
import BillioneMobilityLogo from "../../assets/logo/Billione-Mobility-logo.png";
import JioBpLogo from "../../assets/logo/Jio-bp_logo.png";
import StatiqLogo from "../../assets/logo/Statiq-Logo-circle.png";
import IndusTower from "../../assets/logo/Indus-tower-logo.png";

const ClientSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center gap-16 w-full py-20 px-5 bg-[var(--bg-color)]"
    >
      {/* Heading */}
      <h2
        className="lg:text-8xl md:text-6xl text-4xl tracking-widest font-[merienda] font-medium text-ev-gold mb-8 text-center"
      >
        Clients
      </h2>

      {/* Swiper Section */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Default to 1 slide
        autoplay={{
          delay: 3000, // Auto slide every 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 }, // For small screens
          768: { slidesPerView: 2 }, // For tablets
          1024: { slidesPerView: 2 }, // For desktops
        }}
        className="w-full"
      >
        <SwiperSlide>
          <img
            className="h-60 md:h-72 lg:h-80 w-full object-contain"
            src={VolvoLogo}
            alt="Volvo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-60 md:h-72 lg:h-72 w-full object-contain"
            src={BluSmartLogo}
            alt="BluSmart"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-60 md:h-72 lg:h-72 w-full object-contain"
            src={CZLogo}
            alt="CZ"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-60 md:h-72 lg:h-72 w-full object-contain"
            src={BillioneMobilityLogo}
            alt="Billione Mobility"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-60 md:h-72 lg:h-72 w-full object-contain"
            src={JioBpLogo}
            alt="Jio BP"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-60 md:h-72 lg:h-72 w-full object-contain"
            src={StatiqLogo}
            alt="Statiq"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-60 md:h-72 lg:h-96 w-full object-contain"
            src={IndusTower}
            alt="Indus Tower"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ClientSection;