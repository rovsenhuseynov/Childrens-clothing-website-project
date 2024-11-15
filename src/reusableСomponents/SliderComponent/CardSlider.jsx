// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./CardSlider.scss";

// const CardSlider = ({ slides }) => {
//   const getBreakpoints = () => {
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;
//     return {
//       320: { slidesPerView: isLandscape ? 2 : 1 },
//       // При ширине экрана от 320 пикселей (но ниже 768 пикселей) будет показано 1 или 2 слайда в зависимости от ориентации
//       768: { slidesPerView: isLandscape ? 3 : 2 },
//       // При ширине экрана от 768 пикселей (но ниже 1024 пикселей) будет показано 2 или 3 слайда в зависимости от ориентации
//       1024: { slidesPerView: isLandscape ? 2 : 2 },
//       // При ширине экрана от 1024 пикселей (но ниже 1280 пикселей) будет показано 2 слайда независимо от ориентации
//       1280: { slidesPerView: isLandscape ? 3 : 2 },
//       // При ширине экрана от 1280 пикселей и выше будет показано 2 или 3 слайда в зависимости от ориентации
//     };
//   };

//   const [breakpoints, setBreakpoints] = useState(getBreakpoints());
//   const [swiperKey, setSwiperKey] = useState(0); // Добавляем ключ для Swiper

//   useEffect(() => {
//     const handleOrientationChange = () => {
//       setBreakpoints(getBreakpoints());
//       setSwiperKey((prevKey) => prevKey + 1); // Обновляем ключ, чтобы Swiper перерисовывался
//     };

//     const landscapeMediaQuery = window.matchMedia("(orientation: landscape)");
//     landscapeMediaQuery.addEventListener("change", handleOrientationChange);
//     window.addEventListener("resize", handleOrientationChange);

//     return () => {
//       landscapeMediaQuery.removeEventListener(
//         "change",
//         handleOrientationChange
//       );
//       window.removeEventListener("resize", handleOrientationChange);
//     };
//   }, []);

//   return (
//     <div className="swiper-container">
//       <Swiper
//         key={swiperKey} // Используем ключ для принудительного обновления Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         spaceBetween={10}
//         slidesPerView={1}
//         breakpoints={breakpoints}
//         className="swiper-content"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="swiper__card">
//               <img
//                 src={slide.imageUrl}
//                 alt={`Название ${slide.id}`}
//                 className="card-img"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CardSlider;

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
