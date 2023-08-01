import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    categorySale: 6,
    categories: [],
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setCategories(state, action) {
            state.categories = action.payload;
        }
    }
});


export const { setCategoryId, setCategories } = categorySlice.actions;

export default categorySlice.reducer;