import { Button } from "@nextui-org/react";
import { useAppSelector } from "../redux/hooks";

interface IBoxProps {
  index: number;
  onPress: (index: number) => void;
}

export default function Box({ index, onPress }: Readonly<IBoxProps>) {
  const board = useAppSelector(state => state.board.value);
  const handleClick = () => {
    onPress(index);
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
