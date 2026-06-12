import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState:{name:"shivani"},
    reducers:{
        addName:(state,action)=>{state.name=action.payload},
        removeName:(state)=>{state.name=''},
    }
});

export const {addName, removeName} = UserSlice.actions;

export default UserSlice.reducer;

