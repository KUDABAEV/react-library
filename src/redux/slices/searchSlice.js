import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    newSearchText: '',
    responseSearchBooks: [],
}


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setNewSearchText(state, action) {
            state.newSearchText = action.payload;
        },

        setResponseSearchBooks(state, action) {
            state.responseSearchBooks = action.payload;
        }
    }
});

export const { setNewSearchText, setResponseSearchBooks } = searchSlice.actions;

export default searchSlice.reducer;