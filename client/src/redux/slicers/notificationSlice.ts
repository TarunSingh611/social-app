"use client";
import { createSlice} from "@reduxjs/toolkit";
type State = {
    notifications: any
};

const initialState: State = {
    notifications : {
        followRequests: null,
        alerts: null
    }
};

const NotificationSlice = createSlice({
  name: "Notification",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications.alerts = action.payload.alerts;
      state.notifications.followRequests = action.payload.followRequests;
    },
    setRequests: (state, action) => {
      state.notifications.followRequests = action.payload;
    },

    setAlerts: (state, action) => {
      state.notifications.alerts = action.payload;
    }

    
  },
});

export const { setNotifications , setRequests} = NotificationSlice.actions;

export default NotificationSlice.reducer;
