// import React, { useState } from 'react';
// import './Swiper.css';

// const S1 = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleMouseEnter = index => {
//     setCurrentIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setCurrentIndex(0);
//   };

//   return (
//     <div className="slider">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`slide ${currentIndex === index ? 'active' : ''}`}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img src={image.src} alt={image.alt} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default S1;
// import img1 from "../img/S (1).jpg";
// import img2 from "../img/S (2).jpg";
// import img3 from "../img/S (3).jpg";
// import img4 from "../img/S (4).jpg";
// import img5 from "../img/S (5).jpg";