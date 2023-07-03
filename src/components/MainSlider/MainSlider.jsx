import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CartItem} from "../CartItem";
import './main-slider.scss';


export const MainSlider = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1439 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1439, min: 767 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 767, min: 520 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 520, min: 0 },
            items: 1
        }
    };

    return (
        <div className='container slider__container'>
            <div className='slider__items'>
                <Carousel  showDots={true} gap={1} responsive={responsive}>
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