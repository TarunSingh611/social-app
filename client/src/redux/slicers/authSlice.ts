"use client";
import { createSlice} from "@reduxjs/toolkit";
import secrets from "@/config/secrets"

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
      console.log("1", state.validUser);
       if(state.validUser === false){
        console.log("2",window.location.href, `${secrets.NEXT_PUBLIC_APP_URL}/`);
        if(window.location.href !== `${secrets.NEXT_PUBLIC_APP_URL}/`){
          // window.location.href = `${secrets.NEXT_PUBLIC_APP_URL}/`;
        }
      }
    },
  },
});

export const { setValidUser } = authSlice.actions;

export default authSlice.reducer;
