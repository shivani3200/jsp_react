import CounterSlice from "./slices/CounterSlice";
import UserSlice from "./slices/UserSlice";
import {configureStore} from '@reduxjs/toolkit'


const ToolKitStore = configureStore({
    reducer:{
        CounterSlice,
        UserSlice,
    }
}  
);

export default ToolKitStore;