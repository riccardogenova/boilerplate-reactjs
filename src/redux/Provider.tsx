import React, { ReactNode } from "react";

import { Provider } from "react-redux";

import { store } from "./createStore";

interface Props {
  children: ReactNode;
}

export const ReduxProvider = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);
