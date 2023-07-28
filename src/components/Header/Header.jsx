import React from 'react'
import {Menu} from "../Menu";
import {Card} from "../Card";
import {Link} from "react-router-dom";
import {Logo} from "../Logo";
import {Search} from "../Search";
import './header.scss';
import {FloatingWindow} from "../FloatingWindow";

export const Header = () => {

  const [openCart, setOpenCart] = React.useState(false);

  return (
      <header className='header'>
        <div className="container">
          <div className="header__content">

            <Logo />

            <Menu />

            <Search />

            <div className="header__hub">

              <div className="header__hub-phone">
                +38 (071) 339-16-26
              </div>

              <div className="header__hub-buttons ">

                <a className="header__hub-favorites">
                  <img src="/img/favorites.svg" alt="Закладки" />
                </a>

                <Link to='/basket' className="header__hub-basket">
                  <img src="/img/basket.svg" alt="Корзина" />
                </Link>


              </div>

              <div className="header__hub-price">
                <p>2345 руб.</p>
              </div>

              <button onClick={() => setOpenCart(!openCart)} className="header__hub-cartMenu">
                <img src="/img/cartMenu.png" alt="CartMenu" />
              </button>
              {
                  openCart && <FloatingWindow>
                    <Card img='/img/cart1.jpg' title='порядок в Хаосе' price={300}/>
                    <Card img='/img/cart1.jpg' title='порядок в Хаосе' price={300}/>
                  </FloatingWindow>
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