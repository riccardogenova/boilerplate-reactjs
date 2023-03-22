import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { TDispatch, TStore } from "./createStore";

export const useAppDispatch = () => useDispatch<TDispatch>();

export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
