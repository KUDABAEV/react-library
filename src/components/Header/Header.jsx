import React from 'react'
import {useSelector} from "react-redux";
import {Menu} from "../Menu";
import {Card} from "../Card";
import {Logo} from "../Logo";
import {Search} from "../Search";
import {FloatingWindow} from "../FloatingWindow";
import {HeaderHubButtons} from "../HeaderHubButtons";
import './header.scss';
import {totalCalculator} from "../utils";

export const Header = () => {

  const [openCart, setOpenCart] = React.useState(false);
  const books = useSelector(state => state.basket.itemsInBasket);
  const totalPrice = totalCalculator(books);

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

              <HeaderHubButtons />

              <div className="header__hub-price">
                {totalPrice > 0 && <p>{totalPrice} руб.</p>}
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