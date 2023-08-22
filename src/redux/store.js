import { configureStore } from '@reduxjs/toolkit'
import category from "./slices/categorySlice";
import search from "./slices/searchSlice";
import basket from "./slices/basketSlice";
import books from "./slices/booksSlice";
import sale from "./slices/saleSlice";
import favorites from "./slices/favoriteSlice";

export const store = configureStore({
    reducer: {
        books,
        sale,
        category,
        search,
        basket,
        favorites,
    },
})

window.store = store;