import React, { ReactNode } from "react";
import "./button.css";
export interface ButtonProp {
  type: String;
  children: ReactNode;
  size: String;
  onclick: () => void;
}
export const Button: React.FC<ButtonProp> = ({
  children,
  type = "primary",
  size = "medium",
  onclick,
}) => {
  return (
    <button className={`button ${type} ${size}`} onClick={onclick}>
      {children}
    </button>
  );
};
