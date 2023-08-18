import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    totalAmount: 0,
    itemsInBasket: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,

    reducers: {
        setItemsInBasket(state, action) {
            state.itemsInBasket.push({
                ...action.payload,
                count: 1,
            })

            state.totalAmount = state.itemsInBasket.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0)
        },

        deleteItemFromCart(state, action) {
            state.itemsInBasket = state.itemsInBasket.filter(book => book.id !== action.payload);

            state.totalAmount = state.itemsInBasket.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0)
        },

        plusBook(state, action) {
            const findBook = state.itemsInBasket.find(obj => obj.id === action.payload);

            if (findBook) {
                findBook.count++;

                state.totalAmount = state.itemsInBasket.reduce((acc, item) => {
                    return acc + item.price * item.count;
                }, 0)
            }
        },

        minusBook(state, action) {
            const findBook = state.itemsInBasket.find(obj => obj.id === action.payload);

            if (findBook) {
                findBook.count--

                if (findBook.count < 1) {
                    state.itemsInBasket = state.itemsInBasket.filter(obj => obj.id !== action.payload)
                }

                state.totalAmount = state.itemsInBasket.reduce((acc, item) => {
                    return acc + item.price * item.count;
                }, 0)
            }
        },
        deleteBasketItem(state,action) {
            state.itemsInBasket = state.itemsInBasket.filter(item => item.id !== action.payload)
            state.totalAmount = state.itemsInBasket.reduce((acc, item) => {
                return acc + item.price * item.count;
            }, 0)
        }
    }
})

export const {
    setItemsInBasket,
    deleteItemFromCart,
    plusBook, minusBook,
    deleteBasketItem
} = basketSlice.actions;

export default basketSlice.reducer;