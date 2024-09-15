import { Button, Input } from "@nextui-org/react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setOPlayer, setXPlayer } from "../redux/slices/playerSlice";
import clsx from "clsx";

interface ISwitchPlayersProps {
  isPlayersSwitched: boolean;
  onSwitch: () => void;
}

const inputClasses = {
  inputWrapper: "!bg-transparent border-1 !border-primary",
  input: "text-secondary font-light text-gray-400",
};

export default function SwitchPlayers({
  isPlayersSwitched,
  onSwitch,
}: Readonly<ISwitchPlayersProps>) {
  const dispatch = useAppDispatch();
  const oPlayer = useAppSelector(state => state.players.value.O.player);
  const xPlayer = useAppSelector(state => state.players.value.X.player);

  const handleClick = () => {
    onSwitch();
  };
  return (
    <div
      className={clsx(
        "flex items-center gap-8",
        isPlayersSwitched ? "flex-row-reverse" : "flex-row",
      )}
    >
      <Input
        value={oPlayer ?? ""}
        onValueChange={value => dispatch(setOPlayer(value || null))}
        radius="none"
        classNames={inputClasses}
        placeholder="Enter O's Player Name"
      />
      <Button size="sm" color="primary" onPress={handleClick}>
        <HiSwitchHorizontal size={22} className="text-secondary" />
      </Button>
      <Input
        value={xPlayer ?? ""}
        onValueChange={value => dispatch(setXPlayer(value || null))}
        radius="none"
        classNames={inputClasses}
        placeholder="Enter X's Player Name"
      />
    </div>
  );
}
