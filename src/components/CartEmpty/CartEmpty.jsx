import React from 'react'
import {Link} from "react-router-dom";
import './cart-empty.scss';


export const CartEmpty = () => {
    return (
        <div className="cart-empty">
          <div className="container">
            <h3 className="cart-empty__title">
              В вашей корзине нет еще товаров
            </h3>
            <p className="cart-empty__text">
              Главная цель вашей корзины  - хранить классные товары, которые
              вы можете купить в магазине. Порадуйте корзину своим выбором,
              ищите кнопки <b>В корзину</b> на сайте
            </p>
            <img className="cart-empty__img" src="/img/emptyBasket.png" alt="Корзина"/>
            <div className='cart-empty__block'>
                <Link to='/' className="cart-empty__link">Вернуться на главную</Link>
            </div>
          </div>
        </div>
    )
}
