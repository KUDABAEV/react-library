import React from "react";
import {Title} from "../Title";
import {CatalogItem} from "../CatalogItem";
import './catalog.scss';





export const Catalog = () => {

    const arrCatalogItem = [
        'Книги',
        'Электронные книги',
        'Аудиокниги',
        'Книжные аксессуарые',
        'Игрушки, творчество',
        'Настольные игрые',
        'Подарки',
        'Блокноты',
        'Акции'
    ]

    return (
        <div className='catalog'>
            <div className="container catalog__container">
                <Title title='Каталог' />
                <div className='catalog__items'>
                    {
                        arrCatalogItem.map(item => <CatalogItem title={item} />)
                    }
                </div>
            </div>
        </div>

    )
}