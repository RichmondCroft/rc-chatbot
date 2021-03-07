import React, { ReactNode } from "react";
import "./button.css";
export interface buttonProp {
  type: String;
  children: ReactNode;
  size:String;
  onclick:()=> void;
}
export const Button: React.FC<buttonProp> = ({ children, type="primary",size="medium",onclick }) => {
  return (<button className={`button ${type} ${size}`} onClick={onclick}>{children}</button>);
};


