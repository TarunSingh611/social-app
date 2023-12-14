'use client';
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import ReduxSlicer from "./ReduxSlicer";
import AuthSlicer from "./slicers/authSlice";

const rootReducer = combineReducers({
   app: ReduxSlicer,
   auth: AuthSlicer,
})

export const store = configureStore({
    reducer: rootReducer
});