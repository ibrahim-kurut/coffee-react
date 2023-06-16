import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./TestimonialsSection.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import TestmonialCard from "../TestmonialCard/TestmonialCard"
import { Container } from "react-bootstrap";

const TestimonialsSection = ({ namee, job }) => {
  return (
    <div className="TestimonialsSection">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
          <TestmonialCard namee="mac b." job="seo" />
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard namee="ameen m." job="it" />
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard namee="makdon k." job="seo" />
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard namee="makdon k." job="seo" />
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard namee="makdon k." job="seo" />
        </SwiperSlide>
        <SwiperSlide>
          <TestmonialCard namee="makdon k." job="seo" />
        </SwiperSlide>



      </Swiper>
    </div>
  );
}
export default TestimonialsSection