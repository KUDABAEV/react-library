import React from "react";
import './menu.scss';


export const Menu:React.FC = () => {

    const arrMenu = [
        'Акции',
        'Каталлог',
        'Доставка',
        'О магазине',
        'Блог'
    ]

    return (
        <nav className="nav">
            <ul className="menu">
                {
                    arrMenu.map((menuItem,index) => (
                        <li key={index} className="menu__item">
                            <a href="" className="menu__item-link">{menuItem}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}