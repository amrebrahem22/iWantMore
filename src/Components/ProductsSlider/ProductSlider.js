import React from "react";
import Slider from "react-slick";
import "./ProductSlider.css";
import Product from '../Product/Product';

const ProductSlider = (props) => {

  const pr = {
    title: "Fisher Price Laugh Stages Amazon Exclusive",
    price: 255,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/415LNOY8j-L._AC_SY200_.jpg",
    rating: 5,
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true
        }
      }
    ]
  };

  return (
    <div className="discover" style={{paddingBottom: '20px'}}>
      <h2>{props.title}</h2>
      <div className="products_container">
      <Slider {...settings}>
        {props.slides.map((slide, i) => (
          <Product autoWidth={true} {...pr} />
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
