import { useCallback, useEffect, useRef } from "react";
import Container from "./components/Container";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { winPossibilities } from "./config";
import { incrementOScore, incrementXScore } from "./redux/slices/playerSlice";
import {
  clearAll,
  freezeBoard,
  unFreezeBoard,
} from "./redux/slices/boardSlice";
import { setInitialTurn } from "./redux/slices/turnSlice";
import { addDelay } from "./utils";
// import useDarkMode from "use-dark-mode";

export default function App() {
  //states
  const board = useAppSelector(state => state.board.value);

  //dispatch
  const dispatch = useAppDispatch();

  //refs
  const timerId = useRef<null | number>(null);

  //constants
  const darkMode = false;

  //functions
  const getWinner = useCallback(() => {
    let winner = null;
    for (const element of winPossibilities) {
      if (
        board[element[0]] !== null &&
        board[element[0]] === board[element[1]] &&
        board[element[1]] === board[element[2]]
      ) {
        winner = board[element[0]];
        break;
      }
    }
    return winner;
  }, [board]);

  const clearBoard = useCallback(() => {
    dispatch(clearAll());
    dispatch(setInitialTurn());
    dispatch(unFreezeBoard());
  }, [dispatch]);

  const isBoardFilled = useCallback((): boolean => {
    return board.filter(box => box === null).length === 0;
  }, [board]);

  const checkWin = useCallback(() => {
    const winner = getWinner();
    if (winner !== null) {
      dispatch(freezeBoard());
      if (winner === "O") {
        dispatch(incrementOScore());
      } else {
        dispatch(incrementXScore());
      }
      addDelay(clearBoard, timerId, 1000);
    } else if (isBoardFilled()) {
      dispatch(freezeBoard());
      addDelay(clearBoard, timerId, 1000);
    }
  }, [clearBoard, dispatch, getWinner, isBoardFilled]);

  //effects
  useEffect(() => {
    checkWin();
  }, [board, checkWin]);
  return (
    <main
      className={clsx(
        darkMode ? "dark" : "light",
        "h-[100dvh] w-full bg-background",
      )}
    >
      <Container />
    </main>
  );
}
