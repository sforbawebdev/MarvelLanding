import * as React from "react";
import Slider from "react-slick";
import "../styles/vendor/react-slick.scss";
import "../styles/widgets/carousel.scss";


export const Carousel = ({slides, settings}) =>{
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