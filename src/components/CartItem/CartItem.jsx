import React from "react";
import './cart-item.scss';
import {Button} from "../Button";
import {FavoriteButton} from "../FavoriteButton";

export const CartItem = ({img, price, title, author}) => {

    return (
        <div className='cart-item'>
            <img className="cart-item__img" src={img} alt="Книга" />
            <p className="cart-item__price">{price} руб</p>
            <p className='cart-item__title'>{title}</p>
            <p className='cart-item__author'>{author}</p>
            <div className='cart-item__buttons'>
                <Button>В корзину</Button>
                <FavoriteButton />
            </div>
        </div>
    )
}