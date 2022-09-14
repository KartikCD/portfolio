import * as React from "react";
import styles from "./Layout.module.css";
import useLayout from "./useLayout";
import { LayoutContextProvider } from "./_context/LayoutContextProvider";
import { Header } from "./_header/Header";

export const Layout: React.FC<
  React.PropsWithChildren<Record<string, unknown>>
> = React.memo(({ children }) => {
  const { initialState } = useLayout();

  return (
    <LayoutContextProvider initialState={initialState}>
      <div className={styles.root}>
        <Header />
        {children}
      </div>
    </LayoutContextProvider>
  );
});
