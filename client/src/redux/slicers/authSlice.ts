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
    },

    setCoverPhoto: (state, action) => {
      if (state.user) {
        state.user.coverPhoto = action.payload;
      }
    },
    setProfilePhoto: (state, action) => {
      if (state.user) {
        state.user.profilePicture = action.payload;
      }
    }
  },
});

export const { setValidUser, setUser ,setProfilePhoto, setCoverPhoto} = authSlice.actions;

export default authSlice.reducer;
