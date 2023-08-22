import React from 'react'
import './ItemInFavorite.scss';

export const ItemInFavorite = ({favoriteItem = 0}) => {
    return (

        favoriteItem > 0
            ? <div className="item-in-favorite">
                {favoriteItem}
            </div>
            : null
    )
}