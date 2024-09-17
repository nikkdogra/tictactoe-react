import { Button } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fill } from "../redux/slices/boardSlice";
import { changeTurn } from "../redux/slices/turnSlice";

interface IBoxProps {
  index: number;
}

export default function Box({ index }: Readonly<IBoxProps>) {
  //states
  const board = useAppSelector(state => state.board.value);
  const turn = useAppSelector(state => state.turn.value);

  //dispatch
  const dispatch = useAppDispatch();

  // handlers
  const handleClick = () => {
    if (board[index] === null) {
      dispatch(fill({ index: index, value: turn }));
      dispatch(changeTurn());
    }
  };
  return (
    <Button
      radius="none"
      color="primary"
      className="h-full w-full text-5xl text-secondary"
      onPress={handleClick}
    >
      {board[index]}
    </Button>
  );
}
