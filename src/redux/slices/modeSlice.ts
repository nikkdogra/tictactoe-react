import { createSlice } from "@reduxjs/toolkit";
import { IMode } from "../../types";

interface IInitialState {
  value: IMode;
}

const initialState: IInitialState = {
  value: "computer",
};

const modeSlice = createSlice({
  name: "mode",
  initialState: initialState,
  reducers: {
    setModeComputer: state => {
      state.value = "computer";
    },
    setModeFriend: state => {
      state.value = "friend";
    },
  },
});

export default modeSlice.reducer;
export const { setModeComputer, setModeFriend } = modeSlice.actions;
