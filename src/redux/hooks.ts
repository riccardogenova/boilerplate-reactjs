/** @format */

import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { type TDispatch, type TStore } from './createStore';

export const useAppDispatch = () => useDispatch<TDispatch>();

export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
