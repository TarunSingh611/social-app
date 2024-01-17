'use client';
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import ReduxSlicer from "./ReduxSlicer";
import AuthSlicer from "./slicers/authSlice";
import NotificationSlicer from "./slicers/notificationSlice";
import SidePaneSlicer from "./slicers/sidePaneSlice";

const rootReducer = combineReducers({
   app: ReduxSlicer,
   auth: AuthSlicer,
   notifications:NotificationSlicer,
   sidePane: SidePaneSlicer
})

export const store = configureStore({
    reducer: rootReducer
});