import { createSlice } from "@reduxjs/toolkit";

let cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        totalPrice:0
    },
    reducers:{
        addItem:function(state,action){
            state.cart.push(action.payload);
            state.totalPrice+=action.payload.price;
        }       
    }
});

export let{addItem}=cartSlice.actions;

export default cartSlice;