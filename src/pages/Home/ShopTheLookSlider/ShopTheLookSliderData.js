import image1 from "../../../assets/img/ShopTheLookSlider_img/Image_block_1/Img_block_1_500x700x1.webp";
import image2 from "../../../assets/img/ShopTheLookSlider_img/Image_block_2/Img_block_2_500x700x1.webp";
import image3 from "../../../assets/img/ShopTheLookSlider_img/Image_block_3/Img_block_3_500x700x1.webp";
import image4 from "../../../assets/img/ShopTheLookSlider_img/Image_block_4/Img_block_4_500x700_1.webp";
import image5 from "../../../assets/img/ShopTheLookSlider_img/Image_block_5/Img_block_5_500x700x1.webp";
import image6 from "../../../assets/img/ShopTheLookSlider_img/Image_block_6/Img_block_6_500x700x1.webp";
import image7 from "../../../assets/img/ShopTheLookSlider_img/Image_block_7/Img_block_7_500x700x1.webp";
import image8 from "../../../assets/img/ShopTheLookSlider_img/Image_block_8/Img_block_8_500x700_1.webp";
import image9 from "../../../assets/img/ShopTheLookSlider_img/Image_block_9/Img_block_9_500x700_1.webp";

//----------------------------------------- 1
import clothingItems1 from "../../../assets/img/ShopTheLookSlider_img/Image_block_1/Img_block_1_600x600x1.webp";

import clothingItems1B from "../../../assets/img/ShopTheLookSlider_img/Image_block_1/Img_block_1_600x600x2.webp";

//------------------------------------------ 2
import clothingItems2 from "../../../assets/img/ShopTheLookSlider_img/Image_block_2/Img_block_2_600x600.webp";
import clothingItems2B from "../../../assets/img/ShopTheLookSlider_img/Image_block_2/Img_block_2_600x600x2.webp";

//------------------------------------------ 3
import clothingItems3 from "../../../assets/img/ShopTheLookSlider_img/Image_block_3/Img_block_3_600x600.webp";
import clothingItems3B from "../../../assets/img/ShopTheLookSlider_img/Image_block_3/Img_block_3_600x600x2.webp";

//------------------------------------------ 4
import clothingItems4 from "../../../assets/img/ShopTheLookSlider_img/Image_block_4/Img_block_4_600x600_1.webp";
import clothingItems4B from "../../../assets/img/ShopTheLookSlider_img/Image_block_4/Img_block_4_600x600_2.webp";

//------------------------------------------ 5
import clothingItems5 from "../../../assets/img/ShopTheLookSlider_img/Image_block_5/Img_block_5_600x600x1.webp";
import clothingItems5B from "../../../assets/img/ShopTheLookSlider_img/Image_block_5/Img_block_5_600x600x2.webp";

//------------------------------------------ 6
import clothingItems6 from "../../../assets/img/ShopTheLookSlider_img/Image_block_6/Img_block_6_600x600x1.webp";
import clothingItems6B from "../../../assets/img/ShopTheLookSlider_img/Image_block_6/Img_block_6_600x600x4.webp";

//------------------------------------------ 7
import clothingItems7 from "../../../assets/img/ShopTheLookSlider_img/Image_block_7/Img_block_7_600x600_1.webp";
import clothingItems7B from "../../../assets/img/ShopTheLookSlider_img/Image_block_7/Img_block_7_600x600_2.webp";

// ----------------------------------------- 8
import clothingItems8 from "../../../assets/img/ShopTheLookSlider_img/Image_block_8/Img_block_8_600x600_1.webp";
import clothingItems8B from "../../../assets/img/ShopTheLookSlider_img/Image_block_8/Img_block_8_600x600_2.webp";

// ------------------------------------------9
import clothingItems9 from "../../../assets/img/ShopTheLookSlider_img/Image_block_9/Img_block_9_600x600_1.webp";
import clothingItems9B from "../../../assets/img/ShopTheLookSlider_img/Image_block_9/Img_block_9_600x600_2.webp";

const ShopTheLookSliderData = [
  {
    id: 1,
    imageUrl: image1,
    title: "Сарочка для мальчиков",
    price: "3 499 ₽",
    size: ["S", "M", "L"], 
    clothingItems: [
      {
        imgItems: [clothingItems1],
      },
      {
        imgItems: [clothingItems1B],
      },
    ],
  },
  {
    id: 2,
    imageUrl: image2,
    title: "Рубашка Классика",
    size: ["S", "M", "L"], 
    price: "2 999 ₽",
    clothingItems: [
      {
        imgItems: [clothingItems2],
      },
      {
        imgItems: [clothingItems2B],
      },
    ],
  },
  {
    id: 3,
    imageUrl: image3,
    title: "Брюки Повседневные",
    size: ["S", "M", "L"], // Массив размеров
    price: "4 599 ₽",
    clothingItems: [
      {
        imgItems: [clothingItems3],
      },
      {
        imgItems: [clothingItems3B],
      },
    ],
  },
  {
    id: 4,
    imageUrl: image4,
    title: "Юбка Летняя",
    size: ["S", "M", "L"], // Массив размеров
    price: "2 799 ₽",
    clothingItems: [
      {
        imgItems: [clothingItems4],
      },
      {
        imgItems: [clothingItems4B],
      },
    ],
  },
  {
    id: 5,
    imageUrl: image5,
    title: "Футболка Спорт",
    size: ["S", "M", "L"], // Массив размеров
    price: "1 999 ₽",
    clothingItems: [
      {
        imgItems: [clothingItems5],
      },
      {
        imgItems: [clothingItems5B],
      },
    ],
  },
  {
    id: 6,
    imageUrl: image6,
    title: "Куртка Ветровка",
    size: ["S", "M", "L"], // Массив размеров
    price: "5 499 ₽",
    clothingItems: [
      {
        imgItems: [clothingItems6],
      },
      {
        imgItems: [clothingItems6B],
      },
    ],
  },
  {
    id: 7,
    imageUrl: image7,
    title: "Куртка krasnaya",
    size: ["S", "M", "L"], // Массив размеров
    price: "5 49999 ₽",
    clothingItems: [
      {
        imgItems: [clothingItems7],
      },
      {
        imgItems: [clothingItems7B],
      },
    ],
  },
  {
    id: 8,
    imageUrl: image8,
    title: "Uтка krasnaya",
    size: ["S", "M", "L"], // Массив размеров
    price: "1 49999 ₽",
    clothingItems: [
      {
        imgItems: [clothingItems8],
      },
      {
        imgItems: [clothingItems8B],
      },
    ],
  },
  {
    id: 9,
    imageUrl: image9,
    title: "Uтка krasnaya",
    size: ["S", "M", "L"], // Массив размеров
    price: "1 49999 ₽",
    clothingItems: [
      {
        imgItems: [clothingItems9],
      },
      {
        imgItems: [clothingItems9B],
      },
    ],
  },
];

export default ShopTheLookSliderData;
