import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "../Button";
import {FavoriteButton} from "../FavoriteButton";
import {deleteItemFromCart, selectItemsInBasket, setItemsInBasket} from "../../redux/slices/basketSlice";
import {deleteItemsInFavorite, selectItemsInFavorites, setItemsInFavorites} from "../../redux/slices/favoriteSlice";
import './cart-item.scss';


export const CartItem = ({id, imageUrl, price, title, author, oldPrice}) => {

    const dispatch = useDispatch();
    const bookId = id;
    const books = useSelector(selectItemsInBasket);
    const favoritesBooks = useSelector(selectItemsInFavorites);
    const isBookInCart = books.some(book => book.id === bookId);
    const isFavoriteInCart = favoritesBooks.some(favorite => favorite.id === bookId)

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

    const addFavoriteClick = (event) => {
        event.stopPropagation();
        const favorite = {
            id,
            imageUrl,
            price,
            title,
            author,
        }
        if (isFavoriteInCart) {
            dispatch(deleteItemsInFavorite(bookId))
        } else {
            dispatch(setItemsInFavorites(favorite))
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
                <FavoriteButton id={id} FavoriteClick={addFavoriteClick}/>
            </div>
        </div>
    )
}