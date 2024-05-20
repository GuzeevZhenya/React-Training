import React from "react";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearControls } from "../../redux/search/search-reducer";
import { addTheme } from "./theme-slice";
import { useTheme } from "./use-theme";

export const ThemeSwitcher = () => {
  const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    // font-weight: var(--fw-bold);
    text-transform: capitalize;
  `;
  const [theme, handleThemeSwap] = useTheme();

  return (
    <>
      <ModeSwitcher onClick={handleThemeSwap}>
        {theme === "light" ? (
          <IoMoonOutline size="14px" />
        ) : (
          <IoMoon size="14px" />
        )}
        <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
      </ModeSwitcher>
    </>
  );
};
