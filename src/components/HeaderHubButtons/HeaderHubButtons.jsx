import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ItemInBasket} from "../ItemsInBasket";
import './header-hub-buttons.scss';


export const HeaderHubButtons = () => {

    const books = useSelector(state => state.basket.itemsInBasket);
    return (
        <div className="header__hub-buttons ">

            <a className="header__hub-favorites">
                <img src="/img/favorites.svg" alt="Закладки" />
            </a>

            <Link to='/basket' className="header__hub-basket">
                <img src="/img/basket.svg" alt="Корзина" />
            </Link>
            <ItemInBasket countItems={books.length} />
        </div>
    );
}
