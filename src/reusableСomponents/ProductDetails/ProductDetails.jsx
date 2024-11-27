// import React from "react";
// import "./ProductDetails.scss";
// import ComponentButton from "../Button/ComponentButton";

// const ProductDetails = ({ title, clothingItems, onClose }) => {
//   const handleCloseClick = (event) => {
//     event.stopPropagation();

//     onClose();
//   };

//   return (
//     <div className="overlay">
//       <div className="overlay-content">
//         <button className="close-button" onClick={handleCloseClick}>
//           ✖
//         </button>
//         <h3 className="overlay-title">{title}</h3>

//         {clothingItems && clothingItems.length > 0 ? (
//           <div className="clothing-details">
//             {clothingItems.map((item, itemIndex) => (
//               <div key={item.id || itemIndex} className="clothing-item">
//                 {Array.isArray(item.imgItems) &&
//                   item.imgItems.map((img, imgIndex) => (
//                     <img
//                       key={`img-${item.id || itemIndex}-${imgIndex}`}
//                       src={img}
//                       alt={`Элемент одежды ${itemIndex + 1} - Фото ${
//                         imgIndex + 1
//                       }`}
//                       className="clothing-image"
//                     />
//                   ))}
//                 {Array.isArray(item.sizes) && (
//                   <div className="clothing-sizes">
//                     <h4 className="clothing-sizes-title">Размеры:</h4>
//                     <ul className="clothing-sizes-list">
//                       {item.sizes.map((size, sizeIndex) => (
//                         <li
//                           className="clothing-sizes-list-elem"
//                           key={`size-${item.id || itemIndex}-${sizeIndex}`}
//                         >
//                           {size}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Нет доступных элементов одежды</p>
//         )}
//         <ComponentButton link="/shop" label="Add" />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;





// import React from "react";
// import "./ProductDetails.scss";
// import ComponentButton from "../Button/ComponentButton";

// const ProductDetails = ({ title, clothingItems, onClose }) => {
//   const handleCloseClick = (event) => {
//     event.stopPropagation();
//     onClose(); // Закрытие деталей
//   };

//   return (
//     <div className="overlay">
//       <div className="overlay-content">
//         <button className="close-button" onClick={handleCloseClick}>
//           ✖
//         </button>
//         <h3 className="overlay-title">{title}</h3>

//         {clothingItems && clothingItems.length > 0 ? (
//           <div className="clothing-details">
//             {clothingItems.map((item, itemIndex) => (
//               <div key={item.id || itemIndex} className="clothing-item">
//                 {Array.isArray(item.imgItems) &&
//                   item.imgItems.map((img, imgIndex) => (
//                     <img
//                       key={`img-${item.id || itemIndex}-${imgIndex}`}
//                       src={img}
//                       alt={`Элемент одежды ${itemIndex + 1} - Фото ${
//                         imgIndex + 1
//                       }`}
//                       className="clothing-image"
//                     />
//                   ))}
//                 {Array.isArray(item.sizes) && (
//                   <div className="clothing-sizes">
//                     <h4 className="clothing-sizes-title">Размеры:</h4>
//                     <ul className="clothing-sizes-list">
//                       {item.sizes.map((size, sizeIndex) => (
//                         <li
//                           className="clothing-sizes-list-elem"
//                           key={`size-${item.id || itemIndex}-${sizeIndex}`}
//                         >
//                           {size}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Нет доступных элементов одежды</p>
//         )}
//         <ComponentButton link="/shop" label="Add" />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;




import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import ComponentButton from "../Button/ComponentButton";

const ProductDetails = ({ title, clothingItems, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setIsActive(false);
    setTimeout(() => onClose(), 500); // Даем время для завершения анимации
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
                      className="clothing-image"
                    />
                  ))}
                {Array.isArray(item.sizes) && (
                  <div className="clothing-sizes">
                    <h4 className="clothing-sizes-title">Размеры:</h4>
                    <ul className="clothing-sizes-list">
                      {item.sizes.map((size, sizeIndex) => (
                        <li
                          className="clothing-sizes-list-elem"
                          key={`size-${item.id || itemIndex}-${sizeIndex}`}
                        >
                          {size}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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