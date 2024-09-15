import { useEffect } from "react";
import Container from "./components/Container";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { winPossibilities } from "./config";
import { incrementOScore, incrementXScore } from "./redux/slices/scoreSlice";
import { clearAll } from "./redux/slices/boardSlice";
// import useDarkMode from "use-dark-mode";

export default function App() {
  const dispatch = useAppDispatch();
  const board = useAppSelector(state => state.board.value);

  const darkMode = false;

  const getWinner = () => {
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
  };

  const restartGame = () => {
    dispatch(clearAll());
  };

  const isBoardFilled = (): boolean => {
    return board.filter(box => box === null).length === 0;
  };

  const checkWin = () => {
    const winner = getWinner();
    if (winner !== null) {
      if (winner === "O") {
        dispatch(incrementOScore());
      } else {
        dispatch(incrementXScore());
      }
      restartGame();
    } else if (isBoardFilled()) {
      restartGame();
    }
  };

  useEffect(() => {
    checkWin();
  }, [board]);
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
