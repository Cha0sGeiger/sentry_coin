import React from "react";
import styles from "./button.module.scss";

export const Button = ({ children, btnType, clicked }) => {
  return (
    <button className={[styles[btnType]]} onClick={clicked}>
      {children}
    </button>
  );
};
