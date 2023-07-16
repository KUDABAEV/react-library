import React from "react";
import {Product} from "../../components/Product";

import './shopping-cart.scss';


export const ShoppingCart = () => {

    return (
        <div className='section-cart'>

                <header className='section-cart__header'>
                    <div className="container__basket">
                        Корзина товаров
                    </div>
                </header>

                <div className='section-cart__body'>
                    <div className="container__basket">
                        <section className="cart">
                            <header className="cart-header">
                                <div className="cart-header__title">наименование</div>
                                <div className="cart-header__count">количество</div>
                                <div className="cart-header-cost">стоимость</div>
                            </header>

                            <Product />
                            <Product />
                            <footer className="cart-footer">
                                <div className="cart-footer__count">3 единицы</div>
                                <div className="cart-footer__price">329 000 руб.</div>
                            </footer>
                        </section>
                    </div>
                </div>

        </div>

    )
}