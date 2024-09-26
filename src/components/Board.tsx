import { Card } from "@nextui-org/react";
import Row from "./Row";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  clearAll,
  fill,
  freezeBoard,
  unFreezeBoard,
} from "../redux/slices/boardSlice";
import { changeTurn, setInitialTurn } from "../redux/slices/turnSlice";
import { useCallback, useEffect, useRef } from "react";
import { winPossibilities } from "../config";
import { incrementOScore, incrementXScore } from "../redux/slices/playerSlice";
import { addDelay } from "../utils";

export default function Board() {
  //states
  const board = useAppSelector(state => state.board.value);
  const turn = useAppSelector(state => state.turn.value);
  const mode = useAppSelector(state => state.mode.value);

  //dispatch
  const dispatch = useAppDispatch();

  //refs
  const clearBoardTimerId = useRef<null | number>(null);
  const computerTurnTimerId = useRef<null | number>(null);

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
      addDelay(clearBoard, clearBoardTimerId);
    } else if (isBoardFilled()) {
      dispatch(freezeBoard());
      addDelay(clearBoard, clearBoardTimerId);
    }
  }, [clearBoard, dispatch, getWinner, isBoardFilled]);

  const takeTurn = useCallback(
    (index: number) => {
      dispatch(fill({ index: index, value: turn }));
      dispatch(changeTurn());
    },
    [dispatch, turn],
  );

  const takeComputerTurn = useCallback(() => {
    const emptyBoardIndexes: number[] = [];
    board.forEach((element, index) => {
      if (element === null) {
        emptyBoardIndexes.push(index);
      }
    });
    if (emptyBoardIndexes.length !== 0) {
      const randomNo = Math.floor(Math.random() * emptyBoardIndexes.length);
      const index = emptyBoardIndexes[randomNo];
      addDelay(() => takeTurn(index), computerTurnTimerId);
    }
  }, [board, takeTurn]);

  // handlers
  const handleBoxClick = (index: number) => {
    if (mode === "computer" && turn === "X") {
      return;
    }
    if (board[index] === null) {
      takeTurn(index);
    }
  };

  //effects
  useEffect(() => {
    checkWin();
    return () => {
      if (clearBoardTimerId.current) {
        clearTimeout(clearBoardTimerId.current);
      }
    };
  }, [board, checkWin]);

  useEffect(() => {
    if (mode === "computer" && turn === "X") {
      takeComputerTurn();
    }
    return () => {
      if (computerTurnTimerId.current) {
        clearTimeout(computerTurnTimerId.current);
      }
    };
  }, [mode, takeComputerTurn, turn]);
  return (
    <Card className="mx-auto flex h-[200px] w-[240px] flex-col gap-[1px] rounded-none bg-secondary">
      <Row row={[0, 1, 2]} onPress={handleBoxClick} />
      <Row row={[3, 4, 5]} onPress={handleBoxClick} />
      <Row row={[6, 7, 8]} onPress={handleBoxClick} />
    </Card>
  );
}
