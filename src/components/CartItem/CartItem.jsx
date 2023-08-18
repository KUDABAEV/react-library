import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "../Button";
import {FavoriteButton} from "../FavoriteButton";
import {deleteItemFromCart, setItemsInBasket} from "../../redux/slices/basketSlice";
import {Link} from "react-router-dom";
import './cart-item.scss';

export const CartItem = ({id, imageUrl, price, title, author, oldPrice}) => {

    const dispatch = useDispatch();
    const bookId = id;
    const books = useSelector(state => state.basket.itemsInBasket);
    const isBookInCart = books.some(book => book.id === bookId);

    const addProductClick = (event) => {
        event.stopPropagation();
        const book = {
            id,
            imageUrl,
            price,
            title,
            author,
        }
        if (isBookInCart){
            dispatch(deleteItemFromCart(bookId));
        }else {
            dispatch(setItemsInBasket(book));
        }
    }

    return (
        <div className='cart-item'>
            <Link to={`book/${id}`}>
                <img className="cart-item__img" src={imageUrl} alt="Книга" />
            </Link>
            <p className="cart-item__price">{price} руб
                <span className="cart-item__oldPrice">{oldPrice ? `${oldPrice}руб` : ''}</span>
            </p>
            <p className='cart-item__title'>{title}</p>
            <p className='cart-item__author'>{author}</p>
            <div className='cart-item__buttons'>
                <Button
                    type={isBookInCart ? 'secondary' : 'primary'}
                    onClick={addProductClick}
                >
                    { isBookInCart ? 'В корзине' : 'В корзину' }
                </Button>
                <FavoriteButton />
            </div>
        </div>
    )
}