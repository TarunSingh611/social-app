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
    setValidUser: (state, action) => {
      state.validUser = action.payload;
    },

    setUser: (state, action) => {
        state.user = action.payload; 
    }
  },
});

export const { setValidUser, setUser } = authSlice.actions;

export default authSlice.reducer;
