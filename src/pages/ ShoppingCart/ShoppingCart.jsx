import React from "react";
import {Product} from "../../components/Product";
import {useSelector} from "react-redux";
import {CartEmpty} from "../../components/CartEmpty";
import './shopping-cart.scss';


export const ShoppingCart = () => {

    const {itemsInBasket, totalAmount} = useSelector(state => state.basket);
    const countBook = itemsInBasket.reduce((sum, item) => sum + item.count, 0);
    console.log(countBook)
    return (
        countBook > 0
            ? <div className='section-cart'>

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

                            {
                                itemsInBasket.map(item => <Product
                                    key={item.id}
                                    {...item}
                                />)
                            }

                            <footer className="cart-footer">
                                <div className="cart-footer__count">{countBook} единицы</div>
                                <div className="cart-footer__price">{totalAmount} руб.</div>
                            </footer>
                        </section>
                    </div>
                </div>
            </div>
            : <CartEmpty />

    )
}