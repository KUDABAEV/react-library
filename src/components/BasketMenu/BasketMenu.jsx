import React from "react";
import './basket-menu.scss';



export const BasketMenu = () => {

    return (
        <div className='basket-menu'>
            <img className='basket-menu__img' src="/img/cart1.jpg" alt=""/>
            <p className='basket-menu__title'>Порядок в Хаосе</p>
            <p className='basket-menu__price'>300 руб</p>
        </div>
    )
}