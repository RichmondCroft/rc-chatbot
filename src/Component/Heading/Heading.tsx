import React, { ReactNode } from "react";
import "./heading.css";

export interface HeadingProp {
  type: String;
  children: ReactNode;
  size?: String;
}
export const Heading: React.FC<HeadingProp> = ({
  children,
  type = "primary",
  size = "medium",
}: HeadingProp) => <div className={`heading ${type} ${size}`}>{children}</div>;
