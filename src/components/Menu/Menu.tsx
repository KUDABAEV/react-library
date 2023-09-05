import React from "react";
import './menu.scss';


type MenuProps = {
    show?: boolean;
}

export const Menu:React.FC<MenuProps> = ({show}) => {

    const arrMenu = [
        'Акции',
        'Каталлог',
        'Доставка',
        'О магазине',
        'Блог'
    ]

    console.log(show)

    return (
        <nav className="nav">
            <ul className={show ? "menu menu_open": "menu"}>
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