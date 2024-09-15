import { Button } from "@nextui-org/react";
import Board from "./Board";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearAll } from "../redux/slices/boardSlice";
import { setInitialScore } from "../redux/slices/scoreSlice";
import { setInitialTurn } from "../redux/slices/turnSlice";

export default function Container() {
  const score = useAppSelector(state => state.score.value);
  const dispatch = useAppDispatch();
  const handleClearAll = () => {
    dispatch(clearAll());
    dispatch(setInitialScore());
    dispatch(setInitialTurn());
  };
  return (
    <div className="flex h-full w-full items-center justify-center md:container md:mx-auto">
      <div>
        <h1 className="mb-8 text-center text-4xl font-medium text-primary">
          Tic Tac Toe Game
        </h1>
        <div className="py-8">
          <Board />
        </div>
        <div className={clsx("flex items-center justify-center py-4")}>
          <Button
            color="primary"
            className="text-secondary"
            onPress={handleClearAll}
          >
            Clear All Fields
          </Button>
        </div>
        <div
          className={clsx(
            "flex items-center justify-center gap-8 py-4 text-primary",
          )}
        >
          <p>
            O's player score:{" "}
            <span className="inline-block w-[25px] font-bold">{score.O}</span>
          </p>
          <p>
            X's player score:{" "}
            <span className="inline-block w-[25px] font-bold">{score.X}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
