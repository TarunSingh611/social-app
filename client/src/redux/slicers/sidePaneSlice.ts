"use client";

import { createSlice} from "@reduxjs/toolkit";
type State = {
    sidePaneOpen : boolean,
    sidePaneHead : any,
    sidePaneFoot : any,
    sidePaneBody : any
    
};

const initialState: State = {
    sidePaneOpen : false,
    sidePaneHead : null,
    sidePaneFoot : null,
    sidePaneBody : null

};

const SidePaneSlice = createSlice({
  name: "sidePanel",
  initialState,
  reducers: {
    
    setSidePaneOpen: (state, action) => {
      state.sidePaneOpen = action.payload;
    },

    setSidePaneHead: (state, action) => {
      state.sidePaneHead = action.payload;
    },
    
    setSidePaneFoot: (state, action) => {
      state.sidePaneFoot = action.payload;
    },

    setSidePaneBody: (state, action) => {
      state.sidePaneBody = action.payload;
    }
    
  },
});

export const {setSidePaneOpen, setSidePaneHead, setSidePaneFoot, setSidePaneBody } = SidePaneSlice.actions;

export default SidePaneSlice.reducer;
