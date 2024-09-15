import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { playersDefaultValue } from "../../default-values";
import { IPlayer } from "../../types";

interface IInitialState {
  value: {
    O: IPlayer;
    X: IPlayer;
  };
}

const initialState: IInitialState = {
  value: playersDefaultValue,
};

const playersSlice = createSlice({
  name: "players",
  initialState: initialState,
  reducers: {
    incrementXScore: state => {
      state.value.X.score += 1;
    },
    incrementOScore: state => {
      state.value.O.score += 1;
    },
    setInitialScore: state => {
      state.value.O.score = state.value.X.score = 0;
    },
    setXPlayer: (state, action: PayloadAction<string | null>) => {
      state.value.X.player = action.payload;
    },
    setOPlayer: (state, action: PayloadAction<string | null>) => {
      state.value.O.player = action.payload;
    },
  },
});

export default playersSlice.reducer;
export const {
  incrementOScore,
  incrementXScore,
  setInitialScore,
  setOPlayer,
  setXPlayer,
} = playersSlice.actions;
