import React from 'react'
import {useSelector} from "react-redux";
import {selectItemsInFavorites} from "../../redux/slices/favoriteSlice";
import {FavoritesEmpty} from "../../components/FavoritesEmpty";
import {CartItem} from "../../components/CartItem";
import './Favorites.scss';

export const Favorites:React.FC = () => {

    const favoritesBooks = useSelector(selectItemsInFavorites);

    return (
        favoritesBooks.length > 0
            ? <div className="favorites">
                <div className="container">
                    <h2 className='favorites__title'>Избранное</h2>
                    <div className="favorites__content">
                        {
                            favoritesBooks.map((item: any) => <CartItem key={item.id} {...item} />)
                        }
                    </div>
                </div>

            </div>
            : <FavoritesEmpty />
    )
}