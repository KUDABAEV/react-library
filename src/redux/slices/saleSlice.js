import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSale = createAsyncThunk('sale/fetchSaleStatus', async (params) => {
    const {
        categorySale,
    } = params;

    const {data} = await axios.get(
        `https://library-name.onrender.com/books?categoryId=${categorySale}`
    );

    return data;
})

const initialState = {
    sale: [],
    status: 'loading',
}

const saleSlice = createSlice({
    name: 'sale',
    initialState,

    reducers: {
        setSale(state, action) {
            state.books = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchSale.pending, (state) => {
                state.status = "loading"
                state.sale = []
            })

            .addCase(fetchSale.fulfilled, (state, action) => {
                state.sale = action.payload
                state.status = "success"
            })

            .addCase(fetchSale.rejected, (state) => {
                state.status = "error"
                state.sale = []
            })
    }
})

export const selectSale = (state) => state.sale;
export const {setSale} = saleSlice.actions;

export default saleSlice.reducer;