import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTheme } from "./theme-slice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeSwap = () => {
    dispatch(addTheme(theme === "light" ? "dark" : "light"));
  };

  return [theme, handleThemeSwap];
};
