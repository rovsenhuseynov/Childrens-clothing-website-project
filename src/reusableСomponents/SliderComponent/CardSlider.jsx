import React from "react";
import Slider from "react-slick";
import "./CardSlider.scss";

const CardSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings} className="card-slider">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="col-lg-12">
            <div className="card">
              <img
                className="card-img-top"
                src="https://picsum.photos/seed/picsum/200/200"
                alt="Card img cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default CardSlider;
