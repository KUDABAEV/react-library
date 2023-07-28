import React from "react";
import './about.scss';
import {Title} from "../Title";
import {AboutItem} from "../AboutItem";



export const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className="about__inner">
                    <Title title='О магазине'/>
                    <div className="about__inner-items">
                        <AboutItem count={35} description='Филиалов по всей стране'/>
                        <AboutItem count={898} description='Товаров в каталоге'/>
                        <AboutItem count={72} description='Часов доставка по городам'/>
                        <AboutItem count={8659} description='Покупателей'/>
                    </div>
                </div>
            </div>
        </div>

    )
}


