import React from "react";
import './item-in-basket.scss';

type ItemInBasketProps = {
    countItems: number
}

export const ItemInBasket:React.FC<ItemInBasketProps> = ({countItems = 0}) => {
    return (

        countItems > 0
            ? <div className='item-in-basket'>
                {countItems}
            </div>
            : null

    );
}