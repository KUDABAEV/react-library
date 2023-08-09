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


export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;