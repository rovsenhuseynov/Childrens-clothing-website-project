import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import "./ShowcaseSlider.scss";
import slideData from "./slideData";

const ShowcaseSlider = () => {
  const carouselRef = useRef(null);
  const flickityInstance = useRef(null); // Для сохранения экземпляра Flickity
  useEffect(() => {
    if (carouselRef.current && !flickityInstance.current) {
      flickityInstance.current = new Flickity(carouselRef.current, {
        accessibility: true,
        prevNextButtons: true,
        pageDots: true,
        setGallerySize: false,
      });
      flickityInstance.current.on("scroll", function () {
        flickityInstance.current.slides.forEach(function (slide, i) {
          const image =
            carouselRef.current.querySelectorAll(".carousel-cell")[i];
          const x = (slide.target + flickityInstance.current.x) * -1; // Параллакс
          image.style.backgroundPosition = `${x}px top`;
        });
      });
    }
    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy(); // Уничтожение экземпляра Flickity
        flickityInstance.current = null;
      }
    };
  }, []);
  
  return (
    <div className="showcase-slider" ref={carouselRef}>
      {slideData.map((slide, index) => (
        <div
          className="carousel-cell"
          key={slide.title || index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="inner">
            <h2 className="title">{slide.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseSlider;

//===============================================================

