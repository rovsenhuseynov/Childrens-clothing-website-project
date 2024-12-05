import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import ComponentButton from "../Button/ComponentButton";

const ProductDetails = ({
  title,
  clothingItems,
  onClose,
  sizes = ["S", "M", "L"],
  price = "Цена не указана",
  color = "Цвет не указан",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedImages, setSelectedImages] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setIsActive(false);
    setTimeout(() => onClose(), 500);
  };

  const handleImageClick = (itemIndex, imgIndex) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected[itemIndex] === imgIndex) {
        const updatedSelected = { ...prevSelected };
        delete updatedSelected[itemIndex];
        return updatedSelected;
      }
      return {
        ...prevSelected,
        [itemIndex]: imgIndex,
      };
    });
  };

  return (
    <div className={`overlay ${isActive ? "active" : ""}`}>
      <div className="overlay-content">
        <button className="close-button" onClick={handleCloseClick}>
          ✖
        </button>
        <h3 className="overlay-title">{title}</h3>

        {clothingItems && clothingItems.length > 0 ? (
          <div className="clothing-details">
            <div className="clothing-items-wrapper">
              {clothingItems.map((item, itemIndex) => (
                <div key={item.id || itemIndex} className="clothing-item">
                  {Array.isArray(item.imgItems) &&
                    item.imgItems.map((img, imgIndex) => (
                      <img
                        key={`img-${item.id || itemIndex}-${imgIndex}`}
                        src={img}
                        alt={`Элемент одежды ${itemIndex + 1} - Фото ${
                          imgIndex + 1
                        }`}
                        className={`clothing-image ${
                          selectedImages[itemIndex] === imgIndex
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => handleImageClick(itemIndex, imgIndex)}
                      />
                    ))}
                </div>
              ))}
            </div>
            <div className="clothing-context-wrapper">
              <div className="clothing-sizes">
                <h4 className="clothing-sizes-title">Sizes:</h4>
                <ul className="clothing-sizes-list">
                  {(sizes.length > 0 ? sizes : ["S", "M", "L"]).map(
                    (size, index) => (
                      <li key={index} className="clothing-sizes-list-elem">
                        {size}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="clothing-info-wrapper">
                <div className="clothing-price">
                  <h4 className="clothing-price-title">Price:</h4>
                  <p className="clothing-price-elem">{price}</p>
                </div>

                <div className="clothing-color">
                  <h4 className="clothing-color-title">Color:</h4>
                  <p className="clothing-color-elem">{color}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Нет доступных элементов одежды</p>
        )}
        <ComponentButton link="/shop" label="Add" />
      </div>
    </div>
  );
};

export default ProductDetails;
