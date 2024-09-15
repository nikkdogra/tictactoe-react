import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boardDefaultValue } from "../../default-values";
import { ITurn } from "../../types";

interface IFillPayload {
  index: number;
  value: ITurn;
}

const initialState = {
  value: boardDefaultValue,
  freeze: false,
};

const board = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    fill: (state, action: PayloadAction<IFillPayload>) => {
      if (!state.freeze) {
        state.value[action.payload.index] = action.payload.value;
      }
    },
    clearAll: state => {
      state.value.forEach((_, i) => {
        state.value[i] = null;
      });
    },
    freezeBoard: state => {
      state.freeze = true;
    },
    unFreezeBoard: state => {
      state.freeze = false;
    },
  },
});

export default board.reducer;
export const { fill, clearAll, freezeBoard, unFreezeBoard } = board.actions;
