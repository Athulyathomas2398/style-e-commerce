import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'myCart',
    initialState:[],
    reducers:{
        addCartItem:(state,action)=>{
            //item already in the cart
            const existingProduct=state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                //remaining products store in another variable
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                //increment the quantity of the product
                existingProduct.quantity++
                //price increment
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.totalPrice

                state=[...remainingProduct,existingProduct]
            }
            else{
                //add new features to cart item-qauntity and total price add in state
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        incQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct]
        },
        decQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct]
        },
        deleteCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const {addCartItem,incQuantity,decQuantity,deleteCartItem,emptyCart}=cartSlice.actions
export default cartSlice.reducer