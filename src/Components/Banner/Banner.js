import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import Slide1 from '../../images/slide1.jpg';
import Slide2 from '../../images/slide2.jpg';
import Slide3 from '../../images/slide3.jpg';
import Slide4 from '../../images/slide4.jpg';
import Slide5 from '../../images/slide5.jpg';
import Slide6 from '../../images/slide6.jpg';

const Banner = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <img src={Slide1} alt="Slide" className="banner__slide" />
        <img src={Slide2} alt="Slide" className="banner__slide" />
        <img src={Slide3} alt="Slide" className="banner__slide" />
        <img src={Slide4} alt="Slide" className="banner__slide" />
        <img src={Slide5} alt="Slide" className="banner__slide" />
        <img src={Slide6} alt="Slide" className="banner__slide" />
      </Slider>
    </div>
  );
};

export default Banner;
