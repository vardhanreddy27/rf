import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../src/banner.jpg";
import banner3 from "../../src/car3.png";
import banner2 from "../../src/b11.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../src/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1}alt="kk" /></SwiperSlide>
        <SwiperSlide><img src={banner2}alt="kk" /></SwiperSlide>
        <SwiperSlide><img src={banner3}alt="kk" /></SwiperSlide>
    
      </Swiper>
    </>
  );
}
