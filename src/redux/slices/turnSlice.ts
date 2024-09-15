import { createSlice } from "@reduxjs/toolkit";
import { ITurn } from "../../types";
import { turnDefaultValue } from "../../default-values";

interface IInitialState {
  value: ITurn;
  isXTurnFirst: boolean;
}

const initialState: IInitialState = {
  value: turnDefaultValue,
  isXTurnFirst: false,
};

const turnSlice = createSlice({
  name: "turn",
  initialState: initialState,
  reducers: {
    changeTurn: state => {
      state.value = state.value === "O" ? "X" : "O";
    },
    setInitialTurn: state => {
      state.value = state.isXTurnFirst ? "O" : "X";
      state.isXTurnFirst = state.value === "X";
    },
  },
});

export default turnSlice.reducer;
export const { changeTurn, setInitialTurn } = turnSlice.actions;
