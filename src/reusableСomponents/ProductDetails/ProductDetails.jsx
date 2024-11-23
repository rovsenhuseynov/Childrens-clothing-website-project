import React from "react";
import "./ProductDetails.scss";
import ComponentButton from "../Button/ComponentButton";

const ProductDetails = ({ title, clothingItems }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h3 className="overlay-title">{title}</h3>

        {/* Отображение элементов одежды */}
        {clothingItems && clothingItems.length > 0 ? (
          <div className="clothing-details">
            {clothingItems.map((item, itemIndex) => (
              <div key={item.id || itemIndex} className="clothing-item">
                {/* Перебор изображений */}
                {item.imgItems.map((img, imgIndex) => (
                  <img
                    key={`img-${item.id || itemIndex}-${imgIndex}`} // Используем id или индекс и индекс изображения
                    src={img}
                    alt={`Элемент одежды ${itemIndex + 1} - Фото ${
                      imgIndex + 1
                    }`}
                    className="clothing-image"
                  />
                ))}

                <div className="clothing-sizes">
                  <h4>Размеры:</h4>
                  <ul>
                    {item.sizes.map((size, sizeIndex) => (
                      <li key={`size-${item.id || itemIndex}-${sizeIndex}`}>
                        {size}
                      </li> // Уникальный ключ для размера
                    ))}
                  </ul>
                </div>

                <div className="clothing-colors">
                  <h4>Цвета:</h4>
                  <ul>
                    {item.colors.map((color, colorIndex) => (
                      <li
                        key={`color-${item.id || itemIndex}-${colorIndex}`} // Уникальный ключ для цвета
                        style={{
                          backgroundColor: color,
                          display: "inline-block",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          margin: "0 5px",
                        }}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
