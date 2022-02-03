import * as React from "react";
import Slider from "react-slick";
import "../styles/vendor/react-slick.scss";
import "../styles/widgets/carousel.scss";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
export const Carousel = ({slides}) =>{
    return(
        <div className={`carousel`}>
            <Slider  {...settings}>
                {slides && slides.map((slide, i) => {
                    return slide;
                })}
            </Slider>
      </div>
    )
}