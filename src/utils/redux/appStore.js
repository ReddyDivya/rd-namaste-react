import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";//fetching cart reducers from cart slice

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default appStore;