import React, { ReactNode } from "react";
import "./heading.css";
export interface headingProp {
  type: String;
  children: ReactNode;
  size:String
}
export const Heading: React.FC<headingProp> = ({ children, type="primary",size="big" }) => {
  return (<div className={`heading ${type} ${size}`}>{children}</div>);
};


