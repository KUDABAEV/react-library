import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CartItem} from "../CartItem";
import './main-slider.scss';


export const MainSlider = () => {


    return (
        <div className='container '>
            <div className='slider__items myCarousel'>
                <Carousel additionalTransfrom={0}
                          arrows
                          autoPlaySpeed={3000}
                          centerMode
                          className=""
                          containerClass="container"
                          dotListClass=""
                          draggable
                          focusOnSelect={false}
                          infinite
                          itemClass=""
                          keyBoardControl
                          minimumTouchDrag={80}
                          pauseOnHover
                          renderArrowsWhenDisabled={false}
                          renderButtonGroupOutside={false}
                          renderDotsOutside={false}
                          responsive={{
                              desktop: {
                                  breakpoint: {
                                      max: 3000,
                                      min: 1024
                                  },
                                  items: 5,
                                  partialVisibilityGutter: 40
                              },
                              tablet: {
                                  breakpoint: {
                                      max: 1024,
                                      min: 464
                                  },
                                  items: 1,
                                  partialVisibilityGutter: 30
                              },
                              mobile: {
                                breakpoint: {
                                    max: 500,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                          }}
                          rewind={false}
                          rewindWithAnimation={false}
                          rtl={false}
                          shouldResetAutoplay
                          showDots={false}
                          sliderClass=""
                          slidesToSlide={1}
                          swipeable
                >
                    <CartItem img='/img/cart1.jpg' title='Порядок в Хаосе' author='Константин Коптелов' price={300}/>
                    <CartItem img='/img/cart2.jpg' title='Смарагдова книга' author='Керстин Гир' price={225}/>
                    <CartItem img='/img/cart3.jpg' title='Зося з вулиці Котячої' author='Агнешка Тишка' price={86}/>
                    <CartItem img='/img/cart4.jpg' title='Мотиватор' author='Наталья Зотова' price={214}/>
                    <CartItem img='/img/cart5.jpg' title='Без маски' author='Михаил Бурняшев' price={778}/>
                    <CartItem img='/img/cart1.jpg' title='Порядок в Хаосе' author='Константин Коптелов' price={300}/>
                    <CartItem img='/img/cart2.jpg' title='Смарагдова книга' author='Керстин Гир' price={225}/>
                    <CartItem img='/img/cart3.jpg' title='Зося с улицы Кошачьей' author='Агнешка Тишка' price={86}/>
                    <CartItem img='/img/cart4.jpg' title='Мотиватор' author='Наталья Зотова' price={214}/>
                    <CartItem img='/img/cart5.jpg' title='Без маски' author='Михаил Бурняшев' price={778}/>
                </Carousel>
                
            </div>
        </div>
    )
}