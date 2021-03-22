import React, { ReactNode } from "react";
import "./heading.css";

export interface HeadingProps {
  type: String;
  children: ReactNode;
  size?: String;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  type = "primary",
  size = "medium",
}: HeadingProps) => <div className={`heading ${type} ${size}`}>{children}</div>;
