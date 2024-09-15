import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boardDefaultValue } from "../../default-values";
import { ITurn } from "../../types";

interface IPayload {
  index: number;
  value: ITurn;
}

const initialState = {
  value: boardDefaultValue,
};

const board = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    fill: (state, action: PayloadAction<IPayload>) => {
      state.value[action.payload.index] = action.payload.value;
    },
    clearAll: state => {
      state.value.forEach((_, i) => {
        state.value[i] = null;
      });
    },
  },
});

export default board.reducer;
export const { fill, clearAll } = board.actions;
