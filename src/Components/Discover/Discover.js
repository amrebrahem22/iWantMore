import React from "react";
import Slider from "react-slick";
import "./Discover.css";
import Slide1 from "../../images/discover/slide1.png";
import Slide2 from "../../images/discover/slide2.jpg";
import Slide3 from "../../images/discover/slide3.jpg";
import Slide4 from "../../images/discover/slide4.jpg";
import Slide5 from "../../images/discover/slide5.jpg";
import Slide6 from "../../images/discover/slide6.jpg";

const DiscoveComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="discover">
      <h2>Discover <span>IWantMore</span></h2>
      <Slider {...settings}>
        <img className="discover-img" src={Slide1} alt="Slide"/>
        <img className="discover-img" src={Slide2} alt="Slide"/>
        <img className="discover-img" src={Slide3} alt="Slide"/>
        <img className="discover-img" src={Slide4} alt="Slide"/>
        <img className="discover-img" src={Slide5} alt="Slide"/>
        <img className="discover-img" src={Slide6} alt="Slide"/>
        <img className="discover-img" src={Slide2} alt="Slide"/>
        <img className="discover-img" src={Slide3} alt="Slide"/>
        <img className="discover-img" src={Slide4} alt="Slide"/>
      </Slider>
    </div>
  );
};

export default DiscoveComponent;
