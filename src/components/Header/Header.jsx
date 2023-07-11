import React from 'react'
import {Menu} from "../Menu";
import {BasketMenu} from "../BasketMenu";
import './header.scss';


export const Header = () => {

  const [openCart, setOpenCart] = React.useState(false);

  return (
      <header className='header'>
        <div className="container">
          <div className="header__content">

            <div className="header__logo">
              <svg className="header__logo-svg" viewBox="0 0 199 44" role="img" aria-label="Логотип">
                <use href="./img/sprite.svg#logo"/>
              </svg>

            </div>

            <Menu />

            <div className="header__search">
              <input className="header__search-input" type="text" placeholder="Поиск" />
            </div>

            <div className="header__hub">
              <div className="header__hub-phone">
                +38 (071) 339-16-26
              </div>

              <div className="header__hub-buttons ">

                <a className="header__hub-favorites">
                  <img src="/img/favorites.svg" alt="Закладки" />
                </a>

                <a href='#' className="header__hub-basket">
                  <img src="/img/basket.svg" alt="Корзина" />
                </a>


              </div>

              <div className="header__hub-price">
                <p>2345 руб.</p>
              </div>

              <button onClick={() => setOpenCart(!openCart)} className="header__hub-cartMenu">
                <img src="/img/cartMenu.png" alt="CartMenu" />
              </button>
              {
                  openCart && <div className='header__hub-basketMenu'>
                    <BasketMenu />
                    <BasketMenu />
                  </div>
              }
            </div>

            <div className="header__burger">
              <img src="/img/Group 12.png" alt="" />
            </div>
          </div>
        </div>
      </header>
  )
}