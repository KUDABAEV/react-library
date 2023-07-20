import React from "react";
import {Button} from "../Button";
import {FavoriteButton} from "../FavoriteButton";
import './cart-item.scss';

export const CartItem = ({imageUrl, price, title, author, oldPrice}) => {

    return (
        <div className='cart-item'>
            <img className="cart-item__img" src={imageUrl} alt="Книга" />
            <p className="cart-item__price">{price} руб
                <span className="cart-item__oldPrice">{oldPrice ? `${oldPrice}руб` : ''}</span>
            </p>
            <p className='cart-item__title'>{title}</p>
            <p className='cart-item__author'>{author}</p>
            <div className='cart-item__buttons'>
                <Button>В корзину</Button>
                <FavoriteButton />
            </div>
        </div>
    )
}