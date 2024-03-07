'use client';
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import ReduxSlicer from "./ReduxSlicer";
import AuthSlicer from "./slicers/authSlice";
import NotificationSlicer from "./slicers/notificationSlice";

const rootReducer = combineReducers({
   app: ReduxSlicer,
   auth: AuthSlicer,
   notifications:NotificationSlicer,
})

export const store = configureStore({
    reducer: rootReducer
});