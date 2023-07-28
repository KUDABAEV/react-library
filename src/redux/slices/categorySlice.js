import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: -1,
    categorySale: 6,
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
    }
});


export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;