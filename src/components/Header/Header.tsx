import React from 'react'
import {useSelector} from "react-redux";
import {Menu} from "../Menu";
import {Logo} from "../Logo";
import {Search} from "../Search";
import {HeaderHubButtons} from "../HeaderHubButtons";
import {selectTotalAmount} from "../../redux/slices/basketSlice";
import './header.scss';

export const Header:React.FC = () => {

  const [isShowMenu, setShowMenu ] = React.useState<boolean>(false)
  const totalAmount  = useSelector(selectTotalAmount);

  const toggleMenu = () => {
    setShowMenu(!isShowMenu)
  }

  return (
      <header className='header'>
        <div className="container">
          <div className="header__content">

            <Logo />

            <Menu show={isShowMenu} toggleMenu={setShowMenu}/>

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

            <div className="header__burger" >
              <img onClick={toggleMenu} src={isShowMenu ? '/img/burgerClose.png' : "/img/burgerOpen.png"} alt="" />
            </div>
          </div>
        </div>
      </header>
  )
}