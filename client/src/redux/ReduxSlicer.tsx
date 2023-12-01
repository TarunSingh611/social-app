'use client';
import {saveToLocalStorage,getFromLocalStorage} from "@/utils/LocalStorage";
import {createSlice} from "@reduxjs/toolkit";

type State = {
  curtainRaised: boolean

}

const initialState: State = {
  curtainRaised: getFromLocalStorage("curtainRaised") || false,

};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {

    setCurtainRaised: (state,action) => {
      state.curtainRaised = action.payload;
      saveToLocalStorage("curtainRaised", state.curtainRaised);
    },
   
}
})


export const {
  setCurtainRaised,


}= chatSlice.actions


export default chatSlice.reducer
