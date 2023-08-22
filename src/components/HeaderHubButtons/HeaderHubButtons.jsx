import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ItemInBasket} from "../ItemsInBasket";
import {selectItemsInBasket} from "../../redux/slices/basketSlice";
import {ItemInFavorite} from "../ItemInFavorite";
import {selectItemsInFavorites} from "../../redux/slices/favoriteSlice";
import './header-hub-buttons.scss';

export const HeaderHubButtons = () => {

    const books = useSelector(selectItemsInBasket);
    const favorites = useSelector(selectItemsInFavorites)
    const countBook = books.reduce((sum,item) => sum + item.count, 0);

    return (
        <div className="header__hub-buttons ">

            <Link to='/favorites' className="header__hub-favorites">
                <img src="/img/favorites.svg" alt="Закладки" />
            </Link>
            <ItemInFavorite favoriteItem={favorites.length} />

            <Link to='/basket' className="header__hub-basket">
                <img src="/img/basket.svg" alt="Корзина" />
            </Link>
            <ItemInBasket countItems={countBook} />
        </div>
    );
}

