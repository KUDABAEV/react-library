import React from "react";
import './card.scss';



export const Card = ({img, title, price}) => {

    return (
        <div className='card'>
            <img className='card__img' src={img} alt=""/>
            <p className='card__title'>{title}</p>
            <p className='card__price'>{price} руб</p>
        </div>
    )
}