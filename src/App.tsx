import { useEffect } from "react";
import Container from "./components/Container";
import clsx from "clsx";
import { useDisclosure } from "@nextui-org/react";
import PopUp from "./components/PopUp";
// import useDarkMode from "use-dark-mode";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //constants
  const darkMode = false;

  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <main
      className={clsx(
        darkMode ? "dark" : "light",
        "h-[100dvh] w-full bg-background",
      )}
    >
      <Container />
      <PopUp isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
  );
}
