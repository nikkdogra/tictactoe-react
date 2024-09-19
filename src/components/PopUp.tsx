import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { Image } from "@nextui-org/image";
import { Card } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setModeComputer, setModeFriend } from "../redux/slices/modeSlice";
import clsx from "clsx";
import { useRef, useState } from "react";
import { IMode } from "../types";
import { addDelay } from "../utils";

interface IPopUpProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const GAME_MODES = [
  {
    id: "computer",
    label: "Play With Computer",
    src: "./play-with-computer.jfif",
  },
  {
    id: "friend",
    label: "Play With Friend",
    src: "./play-with-friend.jfif",
  },
];

export default function PopUp({ isOpen, onOpenChange }: Readonly<IPopUpProps>) {
  //states
  const [hoverBoxId, setHoverBoxId] = useState<IMode | null>(null);

  //refs
  const timerId = useRef<null | number>(null);

  //handlers
  const handleSelectMode = () => {
    addDelay(() => onOpenChange(false), timerId);
  };
  const handleMouseOver = (id: IMode) => {
    setHoverBoxId(id);
  };
  const handleMouseLeave = () => {
    setHoverBoxId(null);
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" placement="center">
      <ModalContent>
        <ModalHeader className="text-primary">Select Game Mode:-</ModalHeader>
        <ModalBody>
          <div className="flex items-center justify-between">
            {GAME_MODES.map(mode => (
              <ImageBox
                key={mode.id}
                id={mode.id as IMode}
                label={mode.label}
                src={mode.src}
                onSelectMode={handleSelectMode}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                hoverBoxId={hoverBoxId}
              />
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

interface IImageBoxProps {
  label: string;
  src: string;
  id: IMode;
  onSelectMode: () => void;
  onMouseOver: (id: IMode) => void;
  onMouseLeave: () => void;
  hoverBoxId: IMode | null;
}

function ImageBox({
  label,
  src,
  id,
  onSelectMode,
  onMouseOver,
  onMouseLeave,
  hoverBoxId,
}: Readonly<IImageBoxProps>) {
  //dispatch
  const dispatch = useAppDispatch();

  //states
  const selectedMode = useAppSelector(state => state.mode.value);

  //handlers
  const handleClick = () => {
    if (id === "computer") {
      dispatch(setModeComputer());
    } else {
      dispatch(setModeFriend());
    }
    onSelectMode();
  };
  return (
    <Card
      isPressable
      className="flex flex-col items-center"
      onPress={handleClick}
      onMouseOver={() => onMouseOver(id)}
      onMouseLeave={onMouseLeave}
    >
      <Image
        width={150}
        height={200}
        alt={label}
        src={src}
        className={clsx(
          "cursor-pointer",
          (hoverBoxId === id || (hoverBoxId === null && selectedMode === id)) &&
            "border-1 border-primary p-2",
        )}
      />
      <h5 className="text-[14px] leading-[24px] text-primary">{label}</h5>
    </Card>
  );
}
