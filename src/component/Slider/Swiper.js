import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Swiper.css";
import img1 from "../img/S (1).jpg";
import img2 from "../img/S (2).jpg";
import img3 from "../img/S (3).jpg";
import img4 from "../img/S (4).jpg";
import img5 from "../img/S (5).jpg";
const Swiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
  };
  return (
    <>
      <div className="s1">
        <Slider {...settings}>
          <div className="slider-item">
            <a href="#"><img src={img1} /></a>
            <div className="overlay"></div>
          </div>
          <div className="slider-item">
            <a href="#"><img src={img2} /></a>
            <div className="overlay"></div>
          </div>
          <div className="slider-item">
            <a href="#"><img src={img3} /></a>
            <div className="overlay"></div>
          </div>
          <div className="slider-item">
            <a href="#"><img src={img4}  /></a>
            <div className="overlay"></div>
          </div>
          <div className="slider-item">
            <a href="#"><img src={img5} /></a>
            <div className="overlay"></div>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default Swiper;