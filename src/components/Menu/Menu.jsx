import React from "react";
import './menu.scss';


export const Menu = () => {

    return (
        <nav className="nav">
            <ul className="menu">
                <li className="menu__item">
                    <a href="" className="menu__item-link">Акции</a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__item-link">Каталлог</a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__item-link">Доставка</a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__item-link">О магазине</a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__item-link">Блог</a>
                </li>
            </ul>
        </nav>
    )
}