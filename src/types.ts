export type ITurn = "O" | "X";

export type IBoardItem = ITurn | null;
export type IBoard = [
  IBoardItem,
  IBoardItem,
  IBoardItem,
  IBoardItem,
  IBoardItem,
  IBoardItem,
  IBoardItem,
  IBoardItem,
  IBoardItem,
];

export interface IScore {
  O: number;
  X: number;
}
