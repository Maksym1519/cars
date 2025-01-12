import "./Big-slider.scss";
import PropTypes from "prop-types";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BigSlider = ({ img }) => {
  
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      speed={1500}
      navigation={{
        nextEl: '.custom-next-btn',
        prevEl: '.custom-prev-btn',
      }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {img &&
        img.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="img" />
          </SwiperSlide>
        ))}

      <svg className="custom-prev-btn">
        <use href='sprite.svg#swiper-prev'></use>
      </svg>

      <svg className="custom-next-btn">
        <use href='sprite.svg#swiper-next'></use>
      </svg>
    </Swiper>
  );
};

BigSlider.propTypes = {
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default BigSlider;
