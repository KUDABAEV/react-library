import React from 'react'
import './ItemInFavorite.scss';

type ItemInFavoriteProps = {
    favoriteItem: number;
}

export const ItemInFavorite:React.FC<ItemInFavoriteProps> = ({favoriteItem = 0}) => {
    return (

        favoriteItem > 0
            ? <div className="item-in-favorite">
                {favoriteItem}
            </div>
            : null
    )
}