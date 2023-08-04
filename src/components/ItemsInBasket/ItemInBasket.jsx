import React from "react";
import './item-in-basket.scss';

export const ItemInBasket = ({countItems = 0}) => {
    return (

        countItems > 0
            ? <div className='item-in-basket'>
                {countItems}
            </div>
            : null

    );
}