import React from "react";
import './footer-menu.scss';


export const FooterMenu = ({title, linkOne, linkTwo, linkThree, linkFour = null}) => {

    return (
        <div className='footer__menu'>
            <h3 className='footer__menu-title'>{title}</h3>
            <ul className='footer__menu-items'>
                <li className='footer__menu-item'>
                    <a className="footer__menu-link" href="#">{linkOne}</a>
                </li>
                <li className='footer__menu-item'>
                    <a className="footer__menu-link" href="#">{linkTwo}</a>
                </li>
                <li className='footer__menu-item'>
                    <a className="footer__menu-link" href="#">{linkThree}</a>
                </li>
                <li className='footer__menu-item'>
                    <a className="footer__menu-link" href="#">{linkFour}</a>
                </li>
            </ul>
        </div>
    )
}