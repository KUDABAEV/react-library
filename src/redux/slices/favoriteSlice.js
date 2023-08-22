import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    itemsInFavorites: [],
}

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,

    reducers: {
        setItemsInFavorites(state, action){
            state.itemsInFavorites.push(action.payload)
        },
        deleteItemsInFavorite(state,action){
            state.itemsInFavorites = state.itemsInFavorites.filter(book => book.id !== action.payload);
        },
    }
})

export const { setItemsInFavorites, deleteItemsInFavorite} = favoriteSlice.actions;
export const selectItemsInFavorites = (state) => state.favorites.itemsInFavorites;

export default favoriteSlice.reducer;