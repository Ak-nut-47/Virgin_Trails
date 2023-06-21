import React from "react";
import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import "./SwiperNavButtons.css";
const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns">
      <button className="swiper-nav-btn" onClick={() => swiper.slidePrev()}>
        <BiLeftArrowCircle className="swiper-nav-icon" />
      </button>
      <button className="swiper-nav-btn" onClick={() => swiper.slideNext()}>
        <BiRightArrowCircle className="swiper-nav-icon" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
