import {  createSlice } from "@reduxjs/toolkit";

const whishListSlice=createSlice({
    name:"mywhishlist",
    initialState:[],
    reducers:{
        addWhishList:(state,action)=>{
            state.push(action.payload)
        },
        removeWhishListItem:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addWhishList,removeWhishListItem}=whishListSlice.actions
export default whishListSlice.reducer