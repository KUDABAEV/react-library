import React from 'react'
import './favoritesEmpty.scss';

export const FavoritesEmpty:React.FC = () => {
    return (
        <div className="favorites-empty">
            <div className="container">
                <h2 className='favorites__title'>Избранное</h2>
                <h3>Избранных товаров нет</h3>
                <p>В этом списке будут храниться товары, которые Вас заинтересовали. Откладывайте и не теряйте.</p>
            </div>
        </div>
    )
}
