'use client';
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import ReduxSlicer from "./ReduxSlicer";

const rootReducer = combineReducers({
   chat: ReduxSlicer,
})

export const store = configureStore({
    reducer: rootReducer
});