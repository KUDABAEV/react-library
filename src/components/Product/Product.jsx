import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteBasketItem, minusBook, plusBook} from "../../redux/slices/basketSlice";
import './product.scss';


export const Product = ({id, imageUrl, price, title, author, count}) => {

    const {totalAmount} = useSelector(state => state.basket)
    const dispatch = useDispatch();

    const onClickDeleteItemCart = () => {
        dispatch(deleteBasketItem(id))
    }

    const onClickPlusBook = () => {
        dispatch(plusBook(id))
    }

    const onClickMinusBook = () => {
        dispatch(minusBook(id))
    }

    return (
        <section className="product">
            <div className="product__img">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="product__title">
                {title}
            </div>
            <div className="product__count">
                <div className="count">
                    <div className="count__box">
                        {count}
                    </div>
                    <div className="count__controls">
                        <button onClick={onClickPlusBook} className='count__up'>
                            <img src="/img/up.svg" alt="Up" />
                        </button>
                        <button onClick={onClickMinusBook} className='count__down'>
                            <img src="/img/down.svg" alt="Down" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="product__price">
                {price * count} руб.
            </div>
            <div className="product__controls">
                <button onClick={onClickDeleteItemCart}>
                    <img src="/img/delete.svg" alt="Delete"/>
                </button>
            </div>
        </section>
    )
}