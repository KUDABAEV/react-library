import { configureStore } from '@reduxjs/toolkit'
import category from "./slices/categorySlice";
import search from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        category,
        search,
    },
})

window.store = store;