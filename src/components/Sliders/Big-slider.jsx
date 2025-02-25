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
import Container from "../Container/Container";

const BigSlider = ({ img }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      speed={1500}
      navigation={{
        nextEl: ".custom-next-btn",
        prevEl: ".custom-prev-btn",
      }}
      pagination={{ clickable: true }}
      grabCursor={true}
    >
      {img &&
        img.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bigslider-slide" key={index}>
              <Container>
              <div className="bigslider-slide__info">
                <p className="bigslider-slide__tag">Осталось всего 10 авто!</p>
                <h1 className="bigslider-slide__title">
                  Грандиозная распродажа тестового парка!
                </h1>
                <p className="bigslider-slide__description">Узнай свою цену!</p>
              </div>
              </Container>
            
              <img className="bigslider-slide__img" src={item} alt="img" />
            </div>
          </SwiperSlide>
        ))}

      <svg className="custom-prev-btn">
        <use href="sprite.svg#swiper-prev"></use>
      </svg>

      <svg className="custom-next-btn">
        <use href="sprite.svg#swiper-next"></use>
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
