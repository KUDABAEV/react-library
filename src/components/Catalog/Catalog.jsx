import React from "react";
import {Title} from "../Title";
import {CatalogItem} from "../CatalogItem";
import './catalog.scss';





export const Catalog = () => {
    return (
        <div className='catalog'>
            <div className="container catalog__container">
                <Title title='Каталог' />
                <div className='catalog__items'>
                    <CatalogItem title='Книги' />
                    <CatalogItem title='Электронные книги' />
                    <CatalogItem title='Аудиокниги' />
                    <CatalogItem title='Книжные аксессуарые' />
                    <CatalogItem title='Игрушки, творчество' />
                    <CatalogItem title='Настольные игрые' />
                    <CatalogItem title='Подарки' />
                    <CatalogItem title='Блокноты' />
                    <CatalogItem title='Акции' />
                </div>
            </div>
        </div>

    )
}