
import { createSlice } from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(x => x.productId !== action.payload.productId)
        }
    }
})


export default CartSlice.reducer;
export const {addtoCart, removeFromCart} = CartSlice.actions; 