"use client";
import { createSlice} from "@reduxjs/toolkit";

type State = {
  validUser: boolean|null;
};

const initialState: State = {
  validUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setValidUser: (state, action) => {
      state.validUser = action.payload;
    },
  },
});

export const { setValidUser } = authSlice.actions;

export default authSlice.reducer;
