import React from "react";
import './footer-menu.scss';


type FooterMenuProps = {
    title: string,
    linkOne: string,
    linkTwo: string,
    linkThree: string,
    linkFour: string
};

export const FooterMenu:React.FC<FooterMenuProps> = ({title, linkOne, linkTwo, linkThree, linkFour}) => {

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