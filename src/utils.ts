import React from "react";

export const addDelay = (
  func: () => void,
  timerId: React.MutableRefObject<number | null>,
  delay: number,
) => {
  if (timerId.current) {
    clearTimeout(timerId.current);
  }
  timerId.current = setTimeout(() => {
    func();
  }, delay);
};
