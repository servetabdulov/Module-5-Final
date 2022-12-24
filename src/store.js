import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Authorization/AuthSlice"

export const store=configureStore({
    reducer:{
        Authorization:AuthReducer
    }
});