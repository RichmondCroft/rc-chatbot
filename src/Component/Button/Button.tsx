import React, { ReactNode } from "react";
import "./button.css";

export interface ButtonProps {
  id: string;
  type: string;
  children: ReactNode;
  size: string;
  onclick: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  id,
  children,
  type = "primary",
  size = "medium",
  onclick,
}: ButtonProps) => (
  <button
    type="button"
    className={`button ${type} ${size}`}
    onClick={onclick}
    id={id}
  >
    {children}
  </button>
);
