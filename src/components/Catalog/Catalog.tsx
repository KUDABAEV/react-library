import React from "react";
import {Title} from "../Title";
import {CatalogItem} from "../CatalogItem";
import './catalog.scss';


export const Catalog:React.FC = () => {

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
        <div className='catalog' id='catalog'>
            <div className="container catalog__container">
                <Title title='Каталог' />
                <div className='catalog__items'>
                    {
                        arrCatalogItem.map((item,index) => <CatalogItem key={index}  title={item} />)
                    }
                </div>
            </div>
        </div>

    )
}