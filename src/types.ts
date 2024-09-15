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

export interface IPlayer {
  score: number;
  player: null | string;
}
