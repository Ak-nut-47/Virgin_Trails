import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./stylesswiper.css";
import swiper1 from "../../assets/SliderImages/swiper1.jpeg";
import swiper2 from "../../assets/SliderImages/swiper2.jpeg";
import swiper3 from "../../assets/SliderImages/swiper3.jpeg";
import swiper4 from "../../assets/SliderImages/swiper4.jpeg";
import swiper5 from "../../assets/SliderImages/swiper5.jpeg";
import swiper6 from "../../assets/SliderImages/swiper6.jpeg";
import { EffectCoverflow, Pagination } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Box, IconButton } from "@chakra-ui/react";
import SwiperNavButtons from "./SwiperNavButtons";

const SwiperCarousel = () => {
  return (
    <div className="slider_container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={2} // Set the initial slide to be the middle image
      >
        <SwiperSlide>
          <img src={swiper1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper5} alt="" />
        </SwiperSlide>
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
