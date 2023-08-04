import { configureStore } from '@reduxjs/toolkit'
import category from "./slices/categorySlice";
import search from "./slices/searchSlice";
import basket from "./slices/basketSlice";

export const store = configureStore({
    reducer: {
        category,
        search,
        basket,
    },
})

window.store = store;