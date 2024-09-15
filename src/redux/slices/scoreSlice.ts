import { createSlice } from "@reduxjs/toolkit";
import { IScore } from "../../types";
import { scoreDefaultValue } from "../../default-values";

interface IInitialState {
  value: IScore;
}

const initialState: IInitialState = {
  value: scoreDefaultValue,
};

const scoreSlice = createSlice({
  name: "score",
  initialState: initialState,
  reducers: {
    incrementXScore: state => {
      state.value.X += 1;
    },
    incrementOScore: state => {
      state.value.O += 1;
    },
    setInitialScore: state => {
      state.value = scoreDefaultValue;
    },
  },
});

export default scoreSlice.reducer;
export const { incrementOScore, incrementXScore, setInitialScore } =
  scoreSlice.actions;
