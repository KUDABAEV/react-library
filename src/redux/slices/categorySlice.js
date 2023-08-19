import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategoriesStatus',
    async () => {
        const {data} = await axios.get(
            'https://library-name.onrender.com/category'
        );

        return data;
    }
)

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
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })

    }
});
export const selectCategories = (state) => state.category.categories;
export const selectCategoryId = (state) => state.category.categoryId;
export const selectCategorySale = (state) => state.category.categorySale;
export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;