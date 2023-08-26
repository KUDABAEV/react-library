import React from "react";
import {useSelector} from "react-redux";
import {Product} from "../../components/Product";
import {CartEmpty} from "../../components/CartEmpty";
import {selectItemsInBasket, selectTotalAmount} from "../../redux/slices/basketSlice";
import './shopping-cart.scss';

export const ShoppingCart:React.FC = () => {

    const itemsInBasket = useSelector(selectItemsInBasket);
    const totalAmount = useSelector(selectTotalAmount);
    const countBook = itemsInBasket.reduce((sum: number, item: any) => sum + item.count, 0);

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
                                itemsInBasket.map((item: any) => <Product
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