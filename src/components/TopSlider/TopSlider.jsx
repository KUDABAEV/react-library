import React from "react";
import {SliderHead} from "../SliderHead";
import './top-slider.scss';


export const TopSlider = () => {

    return (
        <section className="top__slider">
            <div className="container">
                <div className="top__slider-content">

                    <div className="top__slider-left">

                        <h1 className="top__slider-title">
                            Книги от А до Я
                        </h1>

                        <p className="top__slider-text">
                            В нашем магазине можно найти книгу на любой вкус. Большой ассортимент.
                            Приятные цены. Интересные сюжеты.
                        </p>

                        <a className="top__slider-link" href="#">
                            Перейти в каталог
                        </a>

                    </div>

                    <div className="top__slider-right">
                        <SliderHead />
                    </div>

                </div>
            </div>
        </section>
    )
}