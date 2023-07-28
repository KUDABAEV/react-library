import React from "react";

import './delivery.scss';
import {Title} from "../Title";


export const Delivery = () => {

    return (
        <div className='delivery'>
            <div className="container">
                <div className="delivery__content">
                    <Title title='Доставка'/>
                    <p className="delivery__content-text">
                        Работаем без праздников и выходных!
                        Жители Киева могут получить заказ уже в день его оформления.
                        Клиенты из других городов Украины могут получить заказ в течение 1-5 дней в
                        зависимости от местонахождения населенного пункта и выбранного способа
                        доставки. Заказы на сумму свыше 1000 руб доставляются бесплатно*.
                        Доступные способы, точные сроки и стоимость доставки Вы можете
                        увидеть во время оформления заказа в корзине заказа,
                        после выбора города доставки.
                    </p>
                    <a className="delivery__content-link" href="#">
                        Подробнее
                    </a>
                </div>
            </div>
        </div>
    )
}