import React from "react";
import './catalog-item.scss';

type CatalogItemProps = {
    title: string
};

export const CatalogItem:React.FC<CatalogItemProps> = ({title}) => {

    return (
        <div className='catalog__item'>
            <p className='catalog__item-title'>
                {title}
            </p>
        </div>
    )
}