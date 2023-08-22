import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemsInFavorite, selectItemsInFavorites} from "../../redux/slices/favoriteSlice";
import './favorite-button.scss';

export const FavoriteButton = ({id, FavoriteClick}) => {
    const arrItemsFavorite = useSelector(selectItemsInFavorites);
    const [isFavorite, setIsFavorite] = React.useState(arrItemsFavorite.find(item => item.id === id))
    const dispatch = useDispatch()


    const onClickFavorite = (e) => {
        if (!isFavorite) {
            FavoriteClick(e)
            setIsFavorite(true)
        }else {
            dispatch(deleteItemsInFavorite(id))
            setIsFavorite(false)
        }
    }

    return (
        isFavorite ?
            <button onClick={onClickFavorite} className="favorite-button">
                <img src="/img/liked.svg" alt="Закладки"/>
            </button>
            :
            <button onClick={onClickFavorite} className="favorite-button">
                <img src="/img/favorites.svg" alt="Закладки"/>
            </button>
    )
}