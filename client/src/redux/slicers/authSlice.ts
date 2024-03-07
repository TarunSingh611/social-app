"use client";
import { createSlice} from "@reduxjs/toolkit";
type State = {
  validUser: boolean|null;
  user: any|null;
};

const initialState: State = {
  validUser: null,
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setUser: (state, action) => {
        state.user = action.payload; 
    },


  },
});

export const {  setUser } = authSlice.actions;

export default authSlice.reducer;
