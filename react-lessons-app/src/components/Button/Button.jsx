import React, { useState } from "react";
import "./Button.css";

export const Button = () => {
  const [buttonText, setButtonText] = useState("Открыть");
  const ButtonHandler = () => {
    setButtonText("Закрыть");
  };
  return (
    <button onClick={() => ButtonHandler} className="button accent">
      {buttonText}
    </button>
  );
};
