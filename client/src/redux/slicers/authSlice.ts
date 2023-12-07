"use client";
import { createSlice} from "@reduxjs/toolkit";
type State = {
  validUser: boolean|null;
  User: any|null;
};

const initialState: State = {
  validUser: null,
  User: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setValidUser: (state, action) => {
      state.validUser = action.payload;
    },

    setUser: (state, action) => {
        state.User = action.payload; 
        console.log(state.User)
    }
  },
});

export const { setValidUser, setUser } = authSlice.actions;

export default authSlice.reducer;
