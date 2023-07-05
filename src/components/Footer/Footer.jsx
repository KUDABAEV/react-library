import React from "react";
import {Logo} from "../Logo";
import {Menu} from "../Menu";
import {FooterMenu} from "../FooterMenu";
import './footer.scss';


export const Footer = () => {

    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__content">

                    <div className="footer__content-top">
                        <Logo />
                        <Menu />
                        <div className="footer__contacts">
                            <a className="footer__phone" href="tel:380713391626">+38 (071) 339-16-26</a>
                            <button className="footer__button">Заказать звонок</button>
                        </div>

                    </div>

                    <div className="footer__content-average">
                        <FooterMenu title='Популярное'
                                    linkOne='Программирование'
                                    linkTwo='Книги для детей'
                                    linkThree='Психология'
                                    linkFour='Бизнес'
                        />
                        <FooterMenu title='Информация'
                                    linkOne='Доставка'
                                    linkTwo='Оплата'
                                    linkThree='О магазине'
                        />
                        <FooterMenu title='Помощь'
                                    linkOne='Контакты'
                                    linkTwo='Возврат товара'
                                    linkThree='Помощь покупателю'
                        />
                    </div>

                    <div className="footer__copy">
                        <p className="footer__copy-left">
                            Все права защищены © 2003-2021 БИБЛИОТЕЧНАЯ
                        </p>
                        <p className="footer__copy-right">
                            Условия использования | Политика конфиденциальности
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}