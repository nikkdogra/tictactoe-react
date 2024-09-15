import { IBoard, ITurn } from "./types";

export const boardDefaultValue: IBoard = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export const playersDefaultValue = {
  O: {
    score: 0,
    player: null,
  },
  X: {
    score: 0,
    player: null,
  },
};

export const turnDefaultValue: ITurn = "O";
