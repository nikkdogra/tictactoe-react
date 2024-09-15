import { Button } from "@nextui-org/react";
import Board from "./Board";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearAll } from "../redux/slices/boardSlice";
import { clearPlayers, setInitialScore } from "../redux/slices/playerSlice";
import { setInitialTurn } from "../redux/slices/turnSlice";
import SwitchPlayers from "./SwitchPlayers";
import { useState } from "react";

export default function Container() {
  const [isPlayersSwitched, setIsPlayersSwitched] = useState(false);
  const oScore = useAppSelector(state => state.players.value.O.score);
  const oPlayer = useAppSelector(state => state.players.value.O.player);
  const xScore = useAppSelector(state => state.players.value.X.score);
  const xPlayer = useAppSelector(state => state.players.value.X.player);

  const dispatch = useAppDispatch();
  const handleRestart = () => {
    dispatch(clearAll());
    dispatch(setInitialScore());
    dispatch(setInitialTurn());
  };
  const handleClearPlayers = () => {
    dispatch(clearPlayers());
  };
  return (
    <div className="flex h-full w-full items-center justify-center md:container md:mx-auto">
      <div>
        <h1 className="mb-8 text-center text-4xl font-medium text-primary">
          Tic Tac Toe Game
        </h1>
        <SwitchPlayers
          onSwitch={() => setIsPlayersSwitched(!isPlayersSwitched)}
          isPlayersSwitched={isPlayersSwitched}
        />
        <div className="py-8">
          <Board />
        </div>
        <div className={clsx("flex items-center justify-center gap-8")}>
          <Button
            color="primary"
            className="text-secondary"
            onPress={handleRestart}
            size="sm"
          >
            Restart Game
          </Button>
          <Button
            color="primary"
            className="text-secondary"
            onPress={handleClearPlayers}
            size="sm"
          >
            Clear Players
          </Button>
        </div>
        <div
          className={clsx(
            "mt-4 flex items-center justify-between text-primary",
            isPlayersSwitched ? "flex-row-reverse" : "flex-row",
          )}
        >
          <p>
            {oPlayer ?? "O player"}'s score:{" "}
            <span className="inline-block w-[25px] font-bold">{oScore}</span>
          </p>
          <p>
            {xPlayer ?? "X player"}'s score:{" "}
            <span className="inline-block w-[25px] font-bold">{xScore}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
