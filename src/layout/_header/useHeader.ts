import * as React from "react";
import { LayoutContext } from "../_context/LayoutContextProvider";

export default function useHeader() {
  const { theme, changeTheme } = React.useContext(LayoutContext);

  const onClick = React.useCallback(() => {
    changeTheme();
  }, [changeTheme]);

  return {
    theme,
    onClick,
  };
}
