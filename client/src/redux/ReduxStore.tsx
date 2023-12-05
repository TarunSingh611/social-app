'use client';
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import ReduxSlicer from "./ReduxSlicer";
import authSlicer from "./slicers/authSlice";

const rootReducer = combineReducers({
   app: ReduxSlicer,
   auth:authSlicer,
})

export const store = configureStore({
    reducer: rootReducer
});