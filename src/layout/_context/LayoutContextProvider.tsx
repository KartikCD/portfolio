import * as React from "react";
import { Layoutstate } from "../types";

interface Props {
  initialState: Layoutstate;
  children: React.ReactNode;
}

export const LayoutContext = React.createContext<Layoutstate>({
  changeTheme: () => null,
  theme: "",
});

export const LayoutContextProvider: React.FC<Props> = React.memo(
  ({ initialState, children }) => {
    return (
      <LayoutContext.Provider value={initialState}>
        {children}
      </LayoutContext.Provider>
    );
  }
);
