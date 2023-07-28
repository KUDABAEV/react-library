import React from "react";

import './catalog-item.scss';

export const CatalogItem = ({title}) => {

    return (
        <div className='catalog__item'>
            <p className='catalog__item-title'>
                {title}
            </p>
        </div>
    )
}