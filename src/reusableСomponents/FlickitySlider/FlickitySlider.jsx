import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import "./FlickitySlider.scss";

const FlickitySlider = ({ slides }) => {
  const sliderRef = useRef(null);
  const flickityInstance = useRef(null);

  useEffect(() => {
    if (sliderRef.current && !flickityInstance.current) {
      flickityInstance.current = new Flickity(sliderRef.current, {
        accessibility: true,
        prevNextButtons: true,
        pageDots: true,
        setGallerySize: false,
      });
      flickityInstance.current.on("scroll", function () {
        flickityInstance.current.slides.forEach((slide, i) => {
          const image = sliderRef.current.querySelectorAll(".flickity-slider-cell")[i];
          const x = (slide.target + flickityInstance.current.x) * -1; // Параллакс
          image.style.backgroundPosition = `${x}px top`;
        });
      });
    }
    
    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy();
        flickityInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="flickity-slider-container" ref={sliderRef}>
      {slides.map((slide, index) => (
        <div
          className="flickity-slider-cell"
          key={slide.title || index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="flickity-slider-inner">
            <h2 className="flickity-slider-title">{slide.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlickitySlider;