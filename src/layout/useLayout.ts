import * as React from "react";
import { Layoutstate } from "./types";

export default function useLayout() {
  const [theme, setTheme] = React.useState<string>("light");

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    if (initialColorValue === "dark") {
      setTheme("light");
    }
  }, []);

  React.useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = React.useCallback(() => {
    setTheme((t) => {
      if (t === "light") {
        return "dark";
      }
      return "light";
    });
  }, [setTheme]);

  const initialState: Layoutstate = React.useMemo(() => {
    return {
      theme,
      changeTheme,
    };
  }, [theme, changeTheme]);

  return {
    initialState,
  };
}
