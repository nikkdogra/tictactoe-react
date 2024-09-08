import { useDispatch, useSelector } from "react-redux";
import { IAppDispatch, IRootState } from "./store";

export const useAppSelector = useSelector.withTypes<IRootState>();
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
