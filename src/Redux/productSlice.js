import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//fetchProducts is an action
export const fetchProducts=createAsyncThunk('products/fetchProducts',async ()=>{
   const result =await axios.get('https://dummyjson.com/products')
   localStorage.setItem("products",JSON.stringify(result.data.products))
   return result.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyProducts:[],
        loading:false,
        error:""

        
    },
    reducers:{
        searchProducts:(state,action)=>{
            state.allProducts=state.dummyProducts.filter(item=>item.title.toLowerCase().includes(action.payload))
        }

    },extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.dummyProducts=action.payload
            state.loading=false
            state.error=""
        })

        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.allProducts=[]
            state.loading=true
            state.error=""
        })

        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.loading=false
            state.error="Api call failed please try after some time"
        })


    }
})
export const {searchProducts}=productSlice.actions

export default productSlice.reducer