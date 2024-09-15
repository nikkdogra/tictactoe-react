import { createSlice } from "@reduxjs/toolkit";
import { ITurn } from "../../types";
import { turnDefaultValue } from "../../default-values";

interface IInitialState {
  value: ITurn;
}

const initialState: IInitialState = {
  value: turnDefaultValue,
};

const turnSlice = createSlice({
  name: "turn",
  initialState: initialState,
  reducers: {
    changeTurn: state => {
      state.value = state.value === "O" ? "X" : "O";
    },
    setInitialTurn: state => {
      state.value = turnDefaultValue;
    },
  },
});

export default turnSlice.reducer;
export const { changeTurn, setInitialTurn } = turnSlice.actions;
