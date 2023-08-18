import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooksStatus',
    async (params) => {
        const {
            categoryId,
        } = params;

        const {data} = await axios.get(
            'https://library-name.onrender.com/books?categoryId=' + categoryId
        );

        return data;
    }
)


const initialState = {
    books: [],
    status: 'loading',
}

const booksSlice = createSlice({
    name: 'books',
    initialState,

    reducers: {
        setBooks(state, action) {
            state.books = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = "loading"
                state.books = []
            })

            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.books = action.payload
                state.status = "success"
            })

            .addCase(fetchBooks.rejected, (state) => {
                state.status = "error"
                state.books = []
            })
    }
})

export const booksItems = (state) => state.books;

export const {setBooks} = booksSlice.actions;

export default booksSlice.reducer;