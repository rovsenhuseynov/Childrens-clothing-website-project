// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./CardSlider.scss";

// const CardSlider = ({ slides }) => {
//   return (
//     <div className="swiper-container">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         spaceBetween={10}
//         slidesPerView={1}
//         breakpoints={{


//           // 768: {
//           //   slidesPerView: "isLandscape" ? 2 : 2,
//           // },

//           375: {
//             slidesPerView: window.innerWidth > window.innerHeight ? 1 : 3, 
//           },

//           1200: {
//             slidesPerView: window.innerWidth > window.innerHeight ? 3 : 2, 
//           },  

  

//         }}
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
//       667: { slidesPerView: isLandscape ? 2 : 1 },
//       768: { slidesPerView: isLandscape ? 2 : 2 },
//       1200: { slidesPerView: isLandscape ? 2 : 3 },
//       1367: { slidesPerView: isLandscape ? 3 : 2 },
//     };
//   };

//   const [breakpoints, setBreakpoints] = useState(getBreakpoints());

//   useEffect(() => {
//     const handleOrientationChange = () => {
//       setBreakpoints(getBreakpoints());
//     };

//     // Используем `matchMedia` для отслеживания изменений ориентации
//     const landscapeMediaQuery = window.matchMedia("(orientation: landscape)");
//     landscapeMediaQuery.addEventListener("change", handleOrientationChange);

//     // Подписываемся на изменения ширины экрана
//     window.addEventListener("resize", handleOrientationChange);

//     return () => {
//       landscapeMediaQuery.removeEventListener("change", handleOrientationChange);
//       window.removeEventListener("resize", handleOrientationChange);
//     };
//   }, []);

//   return (
//     <div className="swiper-container">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         spaceBetween={10}
//         slidesPerView={1} // значение по умолчанию
//         breakpoints={breakpoints} // передаем `breakpoints` в Swiper
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
      678: { slidesPerView: isLandscape ? 2 : 1 },
      768: { slidesPerView: isLandscape ? 3 : 2 },
      1024: { slidesPerView: isLandscape ? 2 : 2 },
    };
  };

  const [breakpoints, setBreakpoints] = useState(getBreakpoints());
  const [swiperKey, setSwiperKey] = useState(0); // Добавляем ключ для Swiper

  useEffect(() => {
    const handleOrientationChange = () => {
      setBreakpoints(getBreakpoints());
      setSwiperKey((prevKey) => prevKey + 1); // Обновляем ключ, чтобы Swiper перерисовывался
    };

    const landscapeMediaQuery = window.matchMedia("(orientation: landscape)");
    landscapeMediaQuery.addEventListener("change", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      landscapeMediaQuery.removeEventListener("change", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        key={swiperKey} // Используем ключ для принудительного обновления Swiper
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;