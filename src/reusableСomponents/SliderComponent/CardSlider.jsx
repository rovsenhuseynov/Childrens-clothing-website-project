

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CardSlider.scss";

const CardSlider = ({ slides }) => {
  const getBreakpoints = () => {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    return {
      320: { slidesPerView: isLandscape ? 2 : 1 },
      768: { slidesPerView: isLandscape ? 3 : 2 },
      1024: { slidesPerView: isLandscape ? 2 : 2 },
      1280: { slidesPerView: isLandscape ? 3 : 2 },
    };
  };

  const [breakpoints, setBreakpoints] = useState(getBreakpoints());
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    const handleOrientationChange = () => {
      setBreakpoints(getBreakpoints());
      setSwiperKey((prevKey) => prevKey + 1);
    };

    const landscapeMediaQuery = window.matchMedia("(orientation: landscape)");
    landscapeMediaQuery.addEventListener("change", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      landscapeMediaQuery.removeEventListener(
        "change",
        handleOrientationChange
      );
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        key={swiperKey}
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={breakpoints}
        className="swiper-content"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper__card">
              <img
                src={slide.imageUrl}
                alt={`Название ${slide.id}`}
                className="card-img"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <img
                    src={slide.icon1}
                    alt="Иконка 1"
                    className="overlay-icon"
                  />
                  <img
                    src={slide.icon2}
                    alt="Иконка 2"
                    className="overlay-icon"
                  />
                  <h3 className="overlay-title">{slide.title}</h3>
                  <p className="overlay-description">{slide.description}</p>
                  <button className="overlay-button">Купить</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
