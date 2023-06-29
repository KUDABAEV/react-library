import React from 'react'
import './header.scss';

export const Header = () => {
  return (
      <header className='header'>
        <div className="container">
          <div className="header__content">

            <div className="header__logo">
              <svg className="header__logo-svg" viewBox="0 0 199 44" role="img" aria-label="Логотип">
                <use href="./img/sprite.svg#logo"/>
              </svg>

            </div>

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

            <div className="header__search">
              <input className="header__search-input" type="text" placeholder="Поиск" />
            </div>

            <div className="header__hub">
              <div className="header__hub-phone">
                +38 (071) 339-16-26
              </div>

              <div className="header__hub-buttons ">
                <button className="header__hub-favorites">
                  <img src="/img/favorites.svg" alt="Закладки" />
                </button>
                <button className="header__hub-basket">
                  <img src="/img/basket.svg" alt="Корзина" />
                </button>
              </div>

              <div className="header__hub-price">
                <p>2345 руб.</p>
              </div>

              <button className="header__hub-cartmenu">
                <img src="/img/cartMenu.png" alt="CartMenu" />
              </button>
            </div>

            <div className="header__burger">
              <img src="/img/Group 12.png" alt="" />
            </div>
          </div>
        </div>
      </header>
  )
}