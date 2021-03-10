import React, { ReactNode } from "react";
import "./button.css";

export interface ButtonProps {
  type: String;
  children: ReactNode;
  size: String;
  onclick: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  size = "medium",
  onclick,
}: ButtonProps) => (
  <button type="button" className={`button ${type} ${size}`} onClick={onclick}>
    {children}
  </button>
);
