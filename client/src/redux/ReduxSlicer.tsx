"use client";
import { saveToLocalStorage, getFromLocalStorage } from "@/utils/LocalStorage";
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getToken } from "@/services/auth";

type State = {
  curtainRaised: boolean;
  overlaydefault: boolean;
 
};

const initialState: State = {
  curtainRaised: getFromLocalStorage("curtainRaised") || false,
  overlaydefault: false,

};

export const appSlice:any= createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurtainRaised: (state, action) => {
      state.curtainRaised = action.payload;
      saveToLocalStorage("curtainRaised", state.curtainRaised);
    },
    setOverlayDefault: (state, action) => {
      state.overlaydefault = action.payload;
    },

  },
});

export const { setCurtainRaised, setOverlayDefault } =
  appSlice.actions;

export default appSlice.reducer;
