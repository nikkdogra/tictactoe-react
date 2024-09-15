import { IBoard, IScore, ITurn } from "./types";

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

export const scoreDefaultValue: IScore = {
  X: 0,
  O: 0,
};

export const turnDefaultValue: ITurn = "O";
