import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    itemsInBasket: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setItemsInBasket(state,action){
            state.itemsInBasket.push(action.payload)
        },
        deleteItemFromCart(state,action){
            state.itemsInBasket = state.itemsInBasket.filter(book => book.id !== action.payload)
        }
    }
})

export const { setItemsInBasket, deleteItemFromCart } = basketSlice.actions;
export default basketSlice.reducer;