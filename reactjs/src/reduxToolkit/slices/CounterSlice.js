import {createSlice} from "@reduxjs/toolkit"

const CounterSlice = createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        increment:(state)=>{state.count+=1},
        decrement:(state)=>{state.count-=1},
    }
});

console.log(CounterSlice);

export let {increment, decrement} = CounterSlice.actions;

export default CounterSlice.reducers;