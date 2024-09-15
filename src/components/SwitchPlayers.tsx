import { Button, Input } from "@nextui-org/react";
import { HiSwitchHorizontal } from "react-icons/hi";

export default function SwitchPlayers() {
  const inputClasses = {
    inputWrapper: "!bg-transparent border-1 !border-primary",
    input: "text-secondary font-light text-gray-400",
  };
  return (
    <div className="flex items-center gap-8">
      <Input
        radius="none"
        classNames={inputClasses}
        placeholder="Enter O's Player Name"
      />
      <Button size="sm" color="primary">
        <HiSwitchHorizontal size={22} className="text-secondary" />
      </Button>
      <Input
        radius="none"
        classNames={inputClasses}
        placeholder="Enter X's Player Name"
      />
    </div>
  );
}
