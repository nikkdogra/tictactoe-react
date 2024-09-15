import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import turnReducer from "./slices/turnSlice";
import playersReducer from "./slices/playerSlice";

const store = configureStore({
  reducer: {
    board: boardReducer,
    turn: turnReducer,
    players: playersReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
