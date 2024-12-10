import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import whishListSlice from './whishListSlice'
import cartSlice from './cartSlice'

const ffStore=configureStore({
    reducer:{
        productReducer:productSlice,
        whishListReducer:whishListSlice,
        cartReducer:cartSlice

    }
})
export default ffStore