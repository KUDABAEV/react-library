import React from "react";
import Slider from "react-slick";
import './slick.css';
import './slider-head.scss';


export const SliderHead = () => {

    const settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: 3000,
    };

    return (
            <Slider className='sliderHead' {...settings}>
                <div className='slider__item'>
                    <img src="/img/topSlider.png" alt="Слайдер"/>
                </div>
                <div className='slider__item'>
                    <img src="/img/topSlider-transformed.png" alt="Слайдер"/>
                </div>
                <div className='slider__item'>
                    <img src="/img/topSlider.png" alt="Слайдер"/>
                </div>
            </Slider>
    )
}