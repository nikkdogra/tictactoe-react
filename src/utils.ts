import React from "react";
import { TIMER_DELAY } from "./constants";

export const addDelay = (
  func: () => void,
  timerId: React.MutableRefObject<number | null>,
) => {
  if (timerId.current) {
    clearTimeout(timerId.current);
  }
  timerId.current = setTimeout(() => {
    func();
  }, TIMER_DELAY);
};
