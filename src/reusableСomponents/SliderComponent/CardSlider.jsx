// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./CardSlider.scss";
// import ProductDetails from "../ProductDetails/ProductDetails";

// const CardSlider = ({ slides }) => {
//   const [breakpoints, setBreakpoints] = useState(getBreakpoints());
//   const [swiperKey, setSwiperKey] = useState(0);
//   const [activeCardId, setActiveCardId] = useState(null);

//   // Функция для обработки изменений ориентации экрана
//   function getBreakpoints() {
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;
//     return {
//       320: { slidesPerView: isLandscape ? 2 : 1 },
//       768: { slidesPerView: isLandscape ? 3 : 2 },
//       1024: { slidesPerView: isLandscape ? 2 : 2 },
//       1280: { slidesPerView: isLandscape ? 3 : 2 },
//     };
//   }

//   // Обработчик изменения ориентации экрана и перезапуска Swiper
//   useEffect(() => {
//     const handleOrientationChange = () => {
//       setBreakpoints(getBreakpoints());
//       setSwiperKey((prevKey) => prevKey + 1); // Перезапускаем Swiper
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

//   const handleCardClick = (id) => {
//     setActiveCardId(id); // Устанавливаем ID активной карточки
//   };

//   const handleCloseDetails = () => {
//     setActiveCardId(null); // Закрываем ProductDetails
//   };

//   return (
//     <div className="swiper-container">
//       <Swiper
//         key={swiperKey}
//         modules={[Navigation, Pagination]}
//         navigation
//         spaceBetween={10}
//         slidesPerView={1}
//         breakpoints={breakpoints}
//         className="swiper-content"
//       >
//         {slides.map(({ id, imageUrl, title, clothingItems }) => (
//           <SwiperSlide key={id}>
//             <div
//               className={`swiper__card ${
//                 activeCardId === id ? "swiper__card--active" : ""
//               }`}
//               onClick={() => handleCardClick(id)}
//             >
//               <img src={imageUrl} alt={`Название ${id}`} className="card-img" />
//               {activeCardId === id && (
//                 <ProductDetails
//                   title={title}
//                   clothingItems={clothingItems}
//                   onClose={handleCloseDetails} // Передаем функцию закрытия
//                 />
//               )}
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
import ProductDetails from "../ProductDetails/ProductDetails";

const CardSlider = ({ slides }) => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );
  const [swiperKey, setSwiperKey] = useState(0);
  const [activeCardId, setActiveCardId] = useState(null);

  // Функция для вычисления breakpoints
  function getBreakpoints() {
    return {
      320: { slidesPerView: isLandscape ? 2 : 1 },
      768: { slidesPerView: isLandscape ? 3 : 2 },
      1024: { slidesPerView: isLandscape ? 2 : 2 },
      1280: { slidesPerView: isLandscape ? 2 : 3 },
      1480: { slidesPerView: isLandscape ? 3 : 2 },
    };
  }

  // Обновляем `isLandscape` при изменении ориентации экрана
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
      setSwiperKey((prevKey) => prevKey + 1); // Перезапуск Swiper
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

  const handleCardClick = (id) => {
    setActiveCardId(id); // Устанавливаем ID активной карточки
  };

  const handleCloseDetails = () => {
    setActiveCardId(null); // Закрываем ProductDetails
  };

  return (
    <div className="swiper-container">
      <Swiper
        key={swiperKey}
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={getBreakpoints()} // Передаем breakpoints
        className="swiper-content"
      >
        {slides.map(({ id, imageUrl, title, clothingItems }) => (
          <SwiperSlide key={id}>
            <div
              className={`swiper__card ${
                activeCardId === id ? "swiper__card--active" : ""
              }`}
              onClick={() => handleCardClick(id)}
            >
              <img src={imageUrl} alt={`Название ${id}`} className="card-img" />
              {activeCardId === id && (
                <ProductDetails
                  title={title}
                  clothingItems={clothingItems}
                  onClose={handleCloseDetails} // Передаем функцию закрытия
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;