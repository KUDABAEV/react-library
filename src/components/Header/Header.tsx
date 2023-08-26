import React from 'react'
import {useSelector} from "react-redux";
import {Menu} from "../Menu";
import {Logo} from "../Logo";
import {Search} from "../Search";
import {HeaderHubButtons} from "../HeaderHubButtons";
import {selectTotalAmount} from "../../redux/slices/basketSlice";
import './header.scss';

export const Header:React.FC = () => {

  const totalAmount  = useSelector(selectTotalAmount);

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
                {totalAmount > 0 && <p>{totalAmount} руб.</p>}
              </div>
            </div>

            <div className="header__burger">
              <img src="/img/Group 12.png" alt="" />
            </div>
          </div>
        </div>
      </header>
  )
}