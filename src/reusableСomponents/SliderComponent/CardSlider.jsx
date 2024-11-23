import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CardSlider.scss";
import ProductDetails from "../ProductDetails/ProductDetails";

const CardSlider = ({ slides }) => {
  const [breakpoints, setBreakpoints] = useState(getBreakpoints());
  const [swiperKey, setSwiperKey] = useState(0);

  function getBreakpoints() {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    return {
      320: { slidesPerView: isLandscape ? 2 : 1 },
      768: { slidesPerView: isLandscape ? 3 : 2 },
      1024: { slidesPerView: isLandscape ? 2 : 2 },
      1280: { slidesPerView: isLandscape ? 3 : 2 },
    };
  }

  useEffect(() => {
    const handleOrientationChange = () => {
      setBreakpoints(getBreakpoints());
      setSwiperKey((prevKey) => prevKey + 1); // Перезапускаем Swiper
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
        key={swiperKey} // Ключ для принудительного обновления Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={breakpoints}
        className="swiper-content"
      >
        {slides.map(({ id, imageUrl, title, clothingItems }) => (
          <SwiperSlide key={id}>
            <div className="swiper__card">
              <img src={imageUrl} alt={`Название ${id}`} className="card-img" />
              <ProductDetails title={title} clothingItems={clothingItems} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
