import React from "react";
import './menu.scss';


type MenuProps = {
    show?: boolean;
    toggleMenu?: any;
}

export const Menu: React.FC<MenuProps> = ({show,toggleMenu}) => {

    const arrMenu = [
        {src: '#sale', title: 'Акции'},
        {src: '#catalog', title: 'Каталлог'},
        {src: '#delivery', title: 'Доставка'},
        {src: '#about', title: 'О магазине'},
        {src: '#social', title: 'Блог'}
    ]

    return (
        <nav className="nav">
            <ul className={show ? "menu menu_open" : "menu"}>
                {
                    arrMenu.map((menuItem, index) => (
                        <li key={index} className="menu__item" onClick={() => toggleMenu(false)}>
                            <a href={menuItem.src} className="menu__item-link">{menuItem.title}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}